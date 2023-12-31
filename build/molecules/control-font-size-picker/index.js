function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { FontSizePicker } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderFontSizePicker = props => {
  const {
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(FontSizePicker, _extends({
    className: classnames(AtrcPrefix('ctrl-fnt-sz-picker'), className, variant ? AtrcPrefix('ctrl-fnt-sz-picker') + '-' + variant : '')
  }, defaultProps, {
    __nextHasNoMarginBottom: true
  }));
};
const AtrcControlFontSizePicker = props => {
  const {
    value = '',
    allowReset = true,
    onChange
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, null, /*#__PURE__*/React.createElement(RenderFontSizePicker, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: () => onChange('')
    }));
  }
  return /*#__PURE__*/React.createElement(RenderFontSizePicker, props);
};
export default AtrcControlFontSizePicker;
//# sourceMappingURL=index.js.map