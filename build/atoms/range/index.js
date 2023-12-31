function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { RangeControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderRange = props => {
  const {
    variant = '',
    className = '',
    defaultValue,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(RangeControl, _extends({
    className: classnames(AtrcPrefix('range'), className, variant ? AtrcPrefix('range') + '-' + variant : ''),
    allowReset: false
  }, defaultProps));
};
const AtrcRange = props => {
  const {
    allowReset = true,
    value,
    onChange,
    defaultValue = null
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, {
      className: classnames(AtrcPrefix('range-rst'), 'at-flx-grw-1')
    }, /*#__PURE__*/React.createElement(RenderRange, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      defaultValue: defaultValue,
      onClick: () => onChange(defaultValue)
    }));
  }
  return /*#__PURE__*/React.createElement(RenderRange, props);
};
export default AtrcRange;
//# sourceMappingURL=index.js.map