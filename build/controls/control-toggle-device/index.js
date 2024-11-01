function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

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
import classnames from 'classnames';
import { isArray, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceValues } from '../../utils/object-values-with-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return /*#__PURE__*/React.createElement(AtrcControlToggle, _extends({}, inputProps, {
    checked: AtrcMappingDeviceValues(value, device),
    onChange: function onChange() {
      return _onChange(!AtrcMappingDeviceValues(value, device), device);
    }
  }));
};
var AtrcControlToggleDevice = function AtrcControlToggleDevice(props) {
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
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    _props$inputProps = props.inputProps,
    inputProps = _props$inputProps === void 0 ? {} : _props$inputProps;

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    className: classnames(AtrcPrefix('ctrl-tog-device'), className, variant ? AtrcPrefix('ctrl-tog-device') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: setAttr,
      inputProps: inputProps
    });
  });
};
export default AtrcControlToggleDevice;
//# sourceMappingURL=index.js.map