function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { ColorIndicator, ColorPalette } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcDropdown from '../dropdown';
import AtrcPrefix from '../../prefix-vars';
import { AtrcUseColorSolids } from '../../utils/use-colors';

/*Local Components*/
export const AtrcControlDropdownColorAllowedKeys = ['cl'];
const RenderControl = props => {
  const allSolids = AtrcUseColorSolids();
  const {
    label = '',
    value,
    onChange = () => {},
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-cl'), className, variant ? AtrcPrefix('ctrl-dropdown-cl') + '-' + variant : ''),
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-flx at-al-itm-ctr at-gap",
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(ColorIndicator, {
      colorValue: value
    }), /*#__PURE__*/React.createElement(AtrcLabel, {
      variant: "color-picker"
    }, label || __('Color', 'atrc-prefix-atrc'))),
    renderContent: () => /*#__PURE__*/React.createElement(ColorPalette, {
      value: value,
      onChange: onChange,
      colors: allSolids,
      clearable: true,
      enableAlpha: true
    })
  }, defaultProps));
};
const AtrcControlDropdownColor = props => {
  const {
    allowReset = true,
    value = '',
    onChange
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('dropdown-cl'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-gap')
    }, /*#__PURE__*/React.createElement(RenderControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: () => onChange('')
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
export default AtrcControlDropdownColor;
//# sourceMappingURL=index.js.map