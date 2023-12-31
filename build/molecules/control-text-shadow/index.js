"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlTextShadowAllowedKeys = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _controlUnit = _interopRequireDefault(require("../../atoms/control-unit"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlDropdownColor = _interopRequireDefault(require("../control-dropdown-color"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["value", "variant", "className", "disableUnits", "onChange"];
/*Attributes Structure
Type Object
{
    cl : '',
    x : '',
    y " '',
    blr : '',
}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlTextShadowAllowedKeys = exports.AtrcControlTextShadowAllowedKeys = ['cl', 'x', 'y', 'blr'];
var AtrcControlTextShadow = function AtrcControlTextShadow(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$cl = value.cl,
    cl = _value$cl === void 0 ? '' : _value$cl,
    _value$x = value.x,
    x = _value$x === void 0 ? '' : _value$x,
    _value$y = value.y,
    y = _value$y === void 0 ? '' : _value$y,
    _value$blr = value.blr,
    blr = _value$blr === void 0 ? '' : _value$blr;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-txt-sdw'), className, variant ? (0, _prefixVars.default)('ctrl-txt-sdw') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlDropdownColor.default, {
    value: cl,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'cl');
    }
  })), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('H shadow', 'atrc-prefix-atrc'),
    value: x,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'x');
    },
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('V shadow', 'atrc-prefix-atrc'),
    value: y,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'y');
    },
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('Blur', 'atrc-prefix-atrc'),
    value: blr,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'blr');
    },
    disableUnits: disableUnits
  })));
};
var _default = exports.default = AtrcControlTextShadow;
//# sourceMappingURL=index.js.map