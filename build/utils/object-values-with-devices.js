"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcHasDeviceValues = exports.AtrcGetDeviceValues = exports.AtrcDeviceTabCss = exports.AtrcDeviceCss = exports.AtrcDeviceAllowedKeys = void 0;
exports.AtrcHasValueKey = AtrcHasValueKey;
exports.AtrcMappingDeviceKey = AtrcMappingDeviceKey;
exports.AtrcMappingDeviceKeyValues = AtrcMappingDeviceKeyValues;
exports.AtrcMappingDeviceValues = AtrcMappingDeviceValues;
exports.AtrcResetDevices = void 0;
exports.AtrcResetValueKey = AtrcResetValueKey;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("./available-tabs"));
var _availableDevices = _interopRequireDefault(require("./available-devices"));
var _objectValuesWithAllowedKeysAndTabs = require("./object-values-with-allowed-keys-and-tabs");
var _string = require("./string");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*Library*/ /*Inbuilt*/
/*Local*/
function AtrcHasValueKey(value, key) {
  if (!value || (0, _lodash.isEmpty)(value)) {
    return false;
  }
  return !!value[key];
}
function AtrcResetValueKey(value, key) {
  var valueCloned = Object.assign({}, value);
  delete valueCloned[key];
  return valueCloned;
}
var AtrcGetDeviceValues = exports.AtrcGetDeviceValues = function AtrcGetDeviceValues(value, key) {
  if ((0, _lodash.isEmpty)(value)) {
    return null;
  }
  var newValue = {};
  _availableDevices.default.forEach(function (deviceProps) {
    var device = deviceProps.name;
    var deviceKey;
    if (device === 'xs') {
      deviceKey = key;
    } else {
      deviceKey = device + (0, _string.AtrcUcFirst)(key);
    }
    if (value[deviceKey]) {
      newValue[device] = value[deviceKey];
    }
  });
  return newValue;
};
var AtrcHasDeviceValues = exports.AtrcHasDeviceValues = function AtrcHasDeviceValues(value, key) {
  if ((0, _lodash.isEmpty)(value)) {
    return false;
  }
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i].name;
    var deviceKey = void 0;
    if (device === 'xs') {
      deviceKey = key;
    } else {
      deviceKey = device + (0, _string.AtrcUcFirst)(key);
    }
    if (value[deviceKey]) {
      return true;
    }
  }
  return false;
};
var AtrcResetDevices = exports.AtrcResetDevices = function AtrcResetDevices(value, key) {
  if (!value) {
    return value;
  }
  var newValue = _objectSpread({}, value);
  _availableDevices.default.forEach(function (deviceProps) {
    var device = deviceProps.name;
    var deviceKey;
    if (device === 'xs') {
      deviceKey = key;
    } else {
      deviceKey = device + (0, _string.AtrcUcFirst)(key);
    }
    if (newValue[deviceKey]) {
      delete newValue[deviceKey];
    }
  });
  return newValue;
};
var AtrcDeviceCss = exports.AtrcDeviceCss = function AtrcDeviceCss(value, key, cssProp) {
  if (!value) {
    return value;
  }
  var innerOutput = {};
  _availableDevices.default.forEach(function (deviceProps) {
    if (deviceProps.on) {
      var device = deviceProps.name;
      var deviceKey;
      if (device === 'xs') {
        deviceKey = key || device;
      } else {
        deviceKey = key ? device + (0, _string.AtrcUcFirst)(key) : device;
      }
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
var AtrcDeviceAllowedKeys = exports.AtrcDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxl'];
var AtrcDeviceTabCss = exports.AtrcDeviceTabCss = function AtrcDeviceTabCss(value, key, cssProp) {
  if (!value) {
    return value;
  }
  var innerOutput = {};
  _availableTabs.default.forEach(function (tab) {
    if (_availableTabs.default.includes(tab)) {
      if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)(tab, value, AtrcDeviceAllowedKeys)) {
        var typVal = (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, tab, AtrcDeviceAllowedKeys);
        var typCss = AtrcDeviceCss(typVal, key, cssProp);
        var tabKey;
        if (!(0, _lodash.isEmpty)(typCss)) {
          (0, _lodash.forEach)(typCss, function (item, itemKey) {
            if (tab === 'normal') {
              tabKey = itemKey;
            } else {
              tabKey = itemKey + tab;
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
function AtrcMappingDeviceValues(value, device) {
  return value && value[device] ? value[device] : '';
}
function AtrcMappingDeviceKeyValues(value, device, key) {
  if (!value || (0, _lodash.isEmpty)(value)) {
    return null;
  }
  if ('xs' === device) {
    return value[key];
  }
  return value[device + (0, _string.AtrcUcFirst)(key)];
}
function AtrcMappingDeviceKey(device, key) {
  if ('xs' === device) {
    return key;
  }
  return device + (0, _string.AtrcUcFirst)(key);
}
//# sourceMappingURL=object-values-with-devices.js.map