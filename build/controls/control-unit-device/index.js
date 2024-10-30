var _excluded = ["value", "label", "onChange", "disableUnits", "variant", "className", "allowedDevices"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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
import classnames from 'classnames';
import { isArray, cloneDeep } from 'lodash';

/* Controls */
import AtrcControlUnit from '../control-unit';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlUnitDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
function mappingDeviceValues(value, device) {
  if (value && value[device]) {
    return value[device];
  }
  return null;
}
function mappingDeviceNewValues(value, device, newVal) {
  var valueCloned = cloneDeep(value);
  if (!valueCloned) {
    valueCloned = {};
  }
  valueCloned[device] = newVal;
  return valueCloned;
}
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    disableUnits = _ref.disableUnits,
    value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcControlUnit, {
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
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    label: label,
    tabs: Devices(),
    className: classnames(AtrcPrefix('ctrl-unit-device'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-unit-device-') + '-' + variant : '')
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      disableUnits: disableUnits,
      value: value,
      onChange: function onChange(newVal, device) {
        return _onChange2(mappingDeviceNewValues(value, device, newVal));
      }
    });
  }));
};
export default AtrcControlUnitDevice;
//# sourceMappingURL=index.js.map