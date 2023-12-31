function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { TextControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderComponent = props => {
  let {
    className = '',
    variant = '',
    value = '',
    wrapProps = {},
    resetProps = {},
    ...defaultProps
  } = props;
  if (value === null || value === undefined) {
    value = '';
  }
  return /*#__PURE__*/React.createElement(TextControl, _extends({
    className: classnames(AtrcPrefix('txt'), className, variant ? AtrcPrefix('txt') + '-' + variant : ''),
    value: value
  }, defaultProps));
};
const AtrcText = props => {
  const {
    allowReset = true,
    value = '',
    wrapProps = {},
    resetProps = {},
    onChange
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, wrapProps, resetProps, {
      className: classnames(AtrcPrefix('txt-rst'), 'at-flx-grw-1', resetProps.className || '', wrapProps.className ? wrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: () => onChange('')
    }));
  }
  return /*#__PURE__*/React.createElement(RenderComponent, props);
};
export default AtrcText;
//# sourceMappingURL=index.js.map