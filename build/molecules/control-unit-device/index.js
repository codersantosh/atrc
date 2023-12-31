"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlUnitDeviceAllowedKeys = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _controlUnit = _interopRequireDefault(require("../../atoms/control-unit"));
var _dropdownDevice = _interopRequireDefault(require("../dropdown-device"));
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["value", "label", "onChange", "disableUnits", "variant", "className", "allowedDevices"];
/*Attributes Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
}
* */
/*Library*/
/*Inbuilt*/
/*Inbuilt Utils*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlUnitDeviceAllowedKeys = exports.AtrcControlUnitDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxl'];
function mappingDeviceValues(value, device) {
  if (value && value[device]) {
    return value[device];
  }
  return null;
}
function mappingDeviceNewValues(value, device, newVal) {
  var valueCloned = Object.assign({}, value);
  valueCloned[device] = newVal;
  return valueCloned;
}
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    disableUnits = _ref.disableUnits,
    value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: "",
    value: mappingDeviceValues(value, device),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    },
    disableUnits: disableUnits
  });
};
var AtrcControlUnitDevice = function AtrcControlUnitDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    _onChange2 = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
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
  return /*#__PURE__*/React.createElement(_dropdownDevice.default, _extends({
    label: label,
    tabs: Devices(),
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-unit-device'), className, variant ? (0, _prefixVars.default)('ctrl-unit-device-') + '-' + variant : '')
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      disableUnits: disableUnits,
      value: value,
      onChange: function onChange(newVal, device) {
        return _onChange2(mappingDeviceNewValues(value, device, newVal));
      }
    });
  });
};
var _default = exports.default = AtrcControlUnitDevice;
//# sourceMappingURL=index.js.map