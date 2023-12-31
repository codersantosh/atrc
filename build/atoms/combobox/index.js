function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { ComboboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';
import AtrcWrap from '../wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderComponent = props => {
  const {
    variant = '',
    className = '',
    allowReset = false,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-flx-col', 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(ComboboxControl, _extends({
    className: classnames(AtrcPrefix('cb'), className, variant ? AtrcPrefix('cb') + '-' + variant : '')
  }, defaultProps, {
    allowReset: allowReset
  })));
};
const AtrcCombobox = props => {
  const {
    allowReset = true,
    value = '',
    onChange,
    wrapProps = {}
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, wrapProps, {
      className: classnames(AtrcPrefix('combobox-rst'), wrapProps.className ? wrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: () => onChange('')
    }));
  }
  return /*#__PURE__*/React.createElement(RenderComponent, props);
};
export default AtrcCombobox;
//# sourceMappingURL=index.js.map