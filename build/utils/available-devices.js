function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import { isArray } from 'lodash';
import { BsDisplay, BsLaptop, BsPhone, BsTablet, BsTv } from 'react-icons/bs';

/* Internal */
import AtrcParseBoolean from './parse-boolean';

/* Local */
var AtrcAvailableDevices = function AtrcAvailableDevices() {
  return [{
    name: 'xs',
    title: __('Mobile (xs)', 'atrc-prefix-atrc'),
    info: __('Applied to all devices since mobile-first design approach.', 'atrc-prefix-atrc'),
    icon: BsPhone,
    iconType: 'bootstrap',
    iconSize: 12,
    minWidth: 0,
    on: true
  }, {
    name: 'sm',
    title: __('Mobile (sm)', 'atrc-prefix-atrc'),
    info: __('Applied to devices from minimum width 576px.', 'atrc-prefix-atrc'),
    icon: BsPhone,
    iconType: 'bootstrap',
    minWidth: 576,
    on: false
  }, {
    name: 'md',
    title: __('Tablet (md)', 'atrc-prefix-atrc'),
    info: __('Applied to devices from minimum width 768px.', 'atrc-prefix-atrc'),
    icon: BsTablet,
    iconType: 'bootstrap',
    minWidth: 768,
    on: true
  }, {
    name: 'lg',
    title: __('Laptop (lg)', 'atrc-prefix-atrc'),
    info: __('Applied to devices from minimum width 992px.', 'atrc-prefix-atrc'),
    icon: BsLaptop,
    iconType: 'bootstrap',
    minWidth: 992,
    on: true
  }, {
    name: 'xl',
    title: __('Desktop (xl)', 'atrc-prefix-atrc'),
    info: __('Applied to devices from minimum width 1200px.', 'atrc-prefix-atrc'),
    icon: BsDisplay,
    iconType: 'bootstrap',
    minWidth: 1200,
    on: true
  }, {
    name: 'xxl',
    title: __('Screen (xxl)', 'atrc-prefix-atrc'),
    info: __('Applied to devices from minimum width 1400px.', 'atrc-prefix-atrc'),
    icon: BsTv,
    iconType: 'bootstrap',
    minWidth: 1400,
    on: false
  }];
};
export var AtrcGetAvailableDevices = function AtrcGetAvailableDevices(nameArray) {
  if (isArray(nameArray)) {
    return AtrcAvailableDevices().map(function (device) {
      return _objectSpread(_objectSpread({}, device), {}, {
        on: nameArray.includes(device.name)
      });
    });
  }
  var isTrue = AtrcParseBoolean(nameArray);
  if (isTrue) {
    return AtrcAvailableDevices();
  }
  return null;
};
export default AtrcAvailableDevices;
//# sourceMappingURL=available-devices.js.map