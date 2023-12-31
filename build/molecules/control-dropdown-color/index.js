"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlDropdownColorAllowedKeys = void 0;
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _resetButtonIcon = _interopRequireDefault(require("../../atoms/reset-button-icon"));
var _dropdown = _interopRequireDefault(require("../dropdown"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _useColors = require("../../utils/use-colors");
var _excluded = ["label", "value", "onChange", "variant", "className"];
/*Attributes Structure
Type string
**/
/*WordPress*/
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlDropdownColorAllowedKeys = exports.AtrcControlDropdownColorAllowedKeys = ['cl'];
var RenderControl = function RenderControl(props) {
  var allSolids = (0, _useColors.AtrcUseColorSolids)();
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_dropdown.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-dropdown-cl'), className, variant ? (0, _prefixVars.default)('ctrl-dropdown-cl') + '-' + variant : ''),
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wrap.default, {
        className: "at-flx at-al-itm-ctr at-gap",
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(_components.ColorIndicator, {
        colorValue: value
      }), /*#__PURE__*/React.createElement(_label.default, {
        variant: "color-picker"
      }, label || (0, _i18n.__)('Color', 'atrc-prefix-atrc')));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_components.ColorPalette, {
        value: value,
        onChange: onChange,
        colors: allSolids,
        clearable: true,
        enableAlpha: true
      });
    }
  }, defaultProps));
};
var AtrcControlDropdownColor = function AtrcControlDropdownColor(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('dropdown-cl'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-gap')
    }, /*#__PURE__*/React.createElement(RenderControl, props), /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
      value: value,
      onClick: function onClick() {
        return onChange('');
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderControl, props);
};
var _default = exports.default = AtrcControlDropdownColor;
//# sourceMappingURL=index.js.map