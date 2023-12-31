"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _dropdownDevice = _interopRequireDefault(require("../dropdown-device"));
var _controlSelectButton = _interopRequireDefault(require("../control-select-button"));
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
var _objectValuesWithDevices = require("./../../utils/object-values-with-devices");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Value Structure
Type Object
{
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
}
* */

/*Library*/

/*Inbuilt*/

/*Inbuilt Utils*/

/*Inbuilt*/

/*Local Components*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    options = _ref.options,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    value: (0, _objectValuesWithDevices.AtrcMappingDeviceValues)(value, device),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    },
    options: options,
    allowReset: true
  });
};
var AtrcControlSelectButtonDevice = function AtrcControlSelectButtonDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? {} : _props$defaultValue,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices;

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
  return /*#__PURE__*/React.createElement(_dropdownDevice.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-btn-device'), className, variant ? (0, _prefixVars.default)('ctrl-select-btn-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      defaultValue: defaultValue,
      options: options,
      onChange: setAttr
    });
  });
};
var _default = exports.default = AtrcControlSelectButtonDevice;
//# sourceMappingURL=index.js.map