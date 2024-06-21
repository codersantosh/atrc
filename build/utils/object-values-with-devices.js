function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';

/*Library*/
import { forEach, isEmpty, cloneDeep } from 'lodash';

/*Internal*/
import AtrcAvailableTabs from './available-tabs';
import AtrcAvailableDevices from './available-devices';
import { AtrcGetTabValues, AtrcHasTabValues } from './object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './string';

/*Local*/
export function AtrcHasValueKey(value, key) {
  if (!value || isEmpty(value)) {
    return false;
  }
  return !!value[key];
}
export function AtrcResetValueKey(value, key) {
  var valueCloned = cloneDeep(value);
  delete valueCloned[key];
  return valueCloned;
}
export var AtrcGetDeviceValues = function AtrcGetDeviceValues(value, key) {
  if (isEmpty(value)) {
    return null;
  }
  var newValue = {};
  var avDevices = AtrcAvailableDevices();
  avDevices.forEach(function (deviceProps) {
    var device = deviceProps.name;
    var deviceKey;
    deviceKey = device + AtrcUcFirst(key);
    if (value[deviceKey]) {
      newValue[device] = value[deviceKey];
    }
  });
  return newValue;
};
export var AtrcSetDeviceValues = function AtrcSetDeviceValues(value, key) {
  if (isEmpty(value)) {
    return null;
  }
  var newValue = {};
  var avDevices = AtrcAvailableDevices();
  avDevices.forEach(function (deviceProps) {
    var device = deviceProps.name;
    var valKey = device + AtrcUcFirst(key);
    if (value[device]) {
      newValue[valKey] = value[device];
    }
  });
  return newValue;
};
export var AtrcHasDeviceValues = function AtrcHasDeviceValues(value, key) {
  if (isEmpty(value)) {
    return false;
  }
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i].name;
    var deviceKey = void 0;
    deviceKey = device + AtrcUcFirst(key);
    if (value[deviceKey]) {
      return true;
    }
  }
  return false;
};
export var AtrcResetDevices = function AtrcResetDevices(value, key) {
  if (!value) {
    return value;
  }
  var newValue = _objectSpread({}, value);
  var avDevices = AtrcAvailableDevices();
  avDevices.forEach(function (deviceProps) {
    var device = deviceProps.name;
    var deviceKey = device + AtrcUcFirst(key);
    delete newValue[deviceKey];
  });
  return newValue;
};
export var AtrcDeviceCss = function AtrcDeviceCss(value, key, cssProp) {
  if (!value) {
    return value;
  }
  var innerOutput = {};
  var avDevices = AtrcAvailableDevices();
  avDevices.forEach(function (deviceProps) {
    if (deviceProps.on) {
      var device = deviceProps.name;
      var deviceKey;
      deviceKey = key ? device + AtrcUcFirst(key) : device;
      if (value[deviceKey]) {
        if (!innerOutput[device]) {
          innerOutput[device] = '';
        }
        innerOutput[device] += "".concat(cssProp, "      : ").concat(value[deviceKey], ";");
      }
    }
  });
  return innerOutput;
};
export var AtrcDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export var AtrcDeviceTabCss = function AtrcDeviceTabCss(value, key, cssProp) {
  if (!value) {
    return '';
  }
  var innerOutput = {};
  AtrcAvailableTabs.forEach(function (tab) {
    if (AtrcAvailableTabs.includes(tab)) {
      if (AtrcHasTabValues(tab, value, AtrcDeviceAllowedKeys)) {
        var typVal = AtrcGetTabValues(value, tab, AtrcDeviceAllowedKeys);
        var typCss = AtrcDeviceCss(typVal, key, cssProp);
        var tabKey;
        if (!isEmpty(typCss)) {
          forEach(typCss, function (item, itemKey) {
            if (tab === 'normal') {
              tabKey = itemKey;
            } else {
              tabKey = itemKey + AtrcUcFirst(tab);
            }
            if (!innerOutput[tabKey]) {
              innerOutput[tabKey] = '';
            }
            innerOutput[tabKey] += item;
          });
        }
      }
    }
  });
  return innerOutput;
};
export function AtrcMappingDeviceValues(value, device) {
  return value && value[device] ? value[device] : '';
}
export function AtrcMappingDeviceKeyValues(value, device, key) {
  if (!value || isEmpty(value)) {
    return null;
  }
  return value[device + AtrcUcFirst(key)];
}
export function AtrcMappingDeviceKey(device, key) {
  return device + AtrcUcFirst(key);
}
//# sourceMappingURL=object-values-with-devices.js.map