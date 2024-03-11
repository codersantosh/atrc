function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["onChange", "variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import { useRef } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';

/* Controls */
import AtrcColorGradientControl from '../control-color-gradient';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlDropdownColorGradientAllowedKeys = ['cl', 'grd'];
var ColorIndicatorValue = function ColorIndicatorValue(value) {
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
var RenderControl = function RenderControl(props) {
  // Shouldn't be needed but right now the ColorGradientsPanel
  // can trigger both onChangeColor and onChangeBackground
  // synchronously causing our two callbacks to override changes
  // from each other.

  var _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var localValues = useRef(props.value);
  var value = localValues.current;
  var changeHandler = function changeHandler() {
    onChange(localValues.current);
  };
  var setColorAttr = function setColorAttr(newVal, type) {
    localValues.current = _objectSpread(_objectSpread({}, localValues.current), _defineProperty({}, type, newVal));
    changeHandler();
  };
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-cl-grd'), className, variant ? AtrcPrefix('ctrl-dropdown-cl-grd') + '-' + variant : ''),
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        className: "at-flx at-al-itm-ctr at-gap",
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(ColorIndicator
      // eslint-disable-next-line no-nested-ternary
      , {
        colorValue: ColorIndicatorValue(props.value)
      }), /*#__PURE__*/React.createElement(AtrcLabel, {
        variant: "color-picker"
      }, __('Color', 'atrc-prefix-atrc')));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(AtrcColorGradientControl, {
        variant: "dropdown",
        enableAlpha: true,
        colorValue: value && value.cl,
        gradientValue: value && value.grd,
        label: __('Color', 'atrc-prefix-atrc'),
        onColorChange: function onColorChange(newValue) {
          return setColorAttr(newValue, 'cl');
        },
        onGradientChange: function onGradientChange(newValue) {
          return setColorAttr(newValue, 'grd');
        }
      });
    }
  }, defaultProps));
};
var AtrcControlDropdownColorGradient = function AtrcControlDropdownColorGradient(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? {} : _props$defaultValue,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-flx at-al-itm-ctr at-jfy-cont-btw"
    }, /*#__PURE__*/React.createElement(RenderControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      defaultValue: defaultValue,
      value: value,
      onClick: function onClick() {
        return onChange({});
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
export default AtrcControlDropdownColorGradient;
//# sourceMappingURL=index.js.map