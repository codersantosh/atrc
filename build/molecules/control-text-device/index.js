"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _text = _interopRequireDefault(require("../../atoms/text"));
var _dropdownDevice = _interopRequireDefault(require("../dropdown-device"));
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
var _objectValuesWithDevices = require("./../../utils/object-values-with-devices");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _lodash = require("lodash");
var _excluded = ["value", "label", "onChange", "variant", "className", "inputProps", "allowedDevices"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /*Attributes Structure
Type Object
{
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
}
* */ /*Library*/ /*Inbuilt*/ /*Inbuilt Utils*/ /*Inbuilt*/
/*Local Components*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return /*#__PURE__*/React.createElement(_text.default, _extends({}, inputProps, {
    value: (0, _objectValuesWithDevices.AtrcMappingDeviceValues)(value, device),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    }
  }));
};
var AtrcControlTextDevice = function AtrcControlTextDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$inputProps = props.inputProps,
    inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if ((0, _lodash.isArray)(allowedDevices)) {
      return allowedDevices;
    }
    return _availableDevices.default;
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_dropdownDevice.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-txt-device'), className, variant ? (0, _prefixVars.default)('ctrl-txt-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: setAttr,
      inputProps: inputProps
    });
  });
};
var _default = exports.default = AtrcControlTextDevice;
//# sourceMappingURL=index.js.map