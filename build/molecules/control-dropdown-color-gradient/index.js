function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Value Structure
Type object
{
cl:'',
grd:'',
}

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { ColorIndicator } from '@wordpress/components';

// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { useRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcDropdown from '../dropdown';
import AtrcColorGradientControl from '../control-color-gradient';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export const AtrcControlDropdownColorGradientAllowedKeys = ['cl', 'grd'];
const ColorIndicatorValue = value => {
  if (!value) {
    return null;
  }
  if (value.cl) {
    return value.cl;
  }
  if (value.grd) {
    return value.grd;
  }
  return null;
};
const RenderControl = props => {
  // Shouldn't be needed but right now the ColorGradientsPanel
  // can trigger both onChangeColor and onChangeBackground
  // synchronously causing our two callbacks to override changes
  // from each other.

  const {
    onChange = () => {},
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  const localValues = useRef(props.value);
  const value = localValues.current;
  const changeHandler = () => {
    onChange(localValues.current);
  };
  const setColorAttr = (newVal, type) => {
    localValues.current = {
      ...localValues.current,
      ...{
        [type]: newVal
      }
    };
    changeHandler();
  };
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-cl-grd'), className, variant ? AtrcPrefix('ctrl-dropdown-cl-grd') + '-' + variant : ''),
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-flx at-al-itm-ctr at-gap",
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(ColorIndicator
    // eslint-disable-next-line no-nested-ternary
    , {
      colorValue: ColorIndicatorValue(props.value)
    }), /*#__PURE__*/React.createElement(AtrcLabel, {
      variant: "color-picker"
    }, __('Color', 'atrc-prefix-atrc'))),
    renderContent: () => /*#__PURE__*/React.createElement(AtrcColorGradientControl, {
      variant: "dropdown",
      enableAlpha: true,
      colorValue: value && value.cl,
      gradientValue: value && value.grd,
      label: __('Color'),
      onColorChange: newValue => setColorAttr(newValue, 'cl'),
      onGradientChange: newValue => setColorAttr(newValue, 'grd')
    })
  }, defaultProps));
};
const AtrcControlDropdownColorGradient = props => {
  const {
    allowReset = true,
    value = {},
    defaultValue = {},
    onChange
  } = props;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-flx at-al-itm-ctr at-jfy-cont-btw"
    }, /*#__PURE__*/React.createElement(RenderControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      defaultValue: defaultValue,
      value: value,
      onClick: () => onChange({})
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
export default AtrcControlDropdownColorGradient;
//# sourceMappingURL=index.js.map