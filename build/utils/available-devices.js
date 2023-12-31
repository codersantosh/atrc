"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcGetAvailableDevices = void 0;
var _i18n = require("@wordpress/i18n");
var _lodash = require("lodash");
var _bs = require("react-icons/bs");
var _parseBoolean = _interopRequireDefault(require("./parse-boolean"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*WordPress*/
var AtrcAvailableDevices = [{
  name: 'xs',
  title: (0, _i18n.__)('Mobile (xs)', 'atrc-prefix-atrc'),
  info: (0, _i18n.__)('Applied to all devices since mobile-first design approach.', 'atrc-prefix-atrc'),
  icon: _bs.BsPhone,
  iconType: 'bootstrap',
  iconSize: 12,
  minWidth: 0,
  on: true
}, {
  name: 'sm',
  title: (0, _i18n.__)('Mobile (sm)', 'atrc-prefix-atrc'),
  info: (0, _i18n.__)('Applied to devices from minimum width 576px.', 'atrc-prefix-atrc'),
  icon: _bs.BsPhone,
  iconType: 'bootstrap',
  minWidth: 576,
  on: false
}, {
  name: 'md',
  title: (0, _i18n.__)('Tablet (md)', 'atrc-prefix-atrc'),
  info: (0, _i18n.__)('Applied to devices from minimum width 768px.', 'atrc-prefix-atrc'),
  icon: _bs.BsTablet,
  iconType: 'bootstrap',
  minWidth: 768,
  on: true
}, {
  name: 'lg',
  title: (0, _i18n.__)('Laptop (lg)', 'atrc-prefix-atrc'),
  info: (0, _i18n.__)('Applied to devices from minimum width 992px.', 'atrc-prefix-atrc'),
  icon: _bs.BsLaptop,
  iconType: 'bootstrap',
  minWidth: 992,
  on: true
}, {
  name: 'xl',
  title: (0, _i18n.__)('Desktop (xl)', 'atrc-prefix-atrc'),
  info: (0, _i18n.__)('Applied to devices from minimum width 1200px.', 'atrc-prefix-atrc'),
  icon: _bs.BsDisplay,
  iconType: 'bootstrap',
  minWidth: 1200,
  on: true
}, {
  name: 'xxl',
  title: (0, _i18n.__)('Screen (xxl)', 'atrc-prefix-atrc'),
  info: (0, _i18n.__)('Applied to devices from minimum width 1400px.', 'atrc-prefix-atrc'),
  icon: _bs.BsTv,
  iconType: 'bootstrap',
  minWidth: 1400,
  on: false
}];
var AtrcGetAvailableDevices = exports.AtrcGetAvailableDevices = function AtrcGetAvailableDevices(nameArray) {
  if ((0, _lodash.isArray)(nameArray)) {
    return AtrcAvailableDevices.map(function (device) {
      return _objectSpread(_objectSpread({}, device), {}, {
        on: nameArray.includes(device.name)
      });
    });
  }
  var isTrue = (0, _parseBoolean.default)(nameArray);
  if (isTrue) {
    return AtrcAvailableDevices;
  }
  return null;
};
var _default = exports.default = AtrcAvailableDevices;
//# sourceMappingURL=available-devices.js.map