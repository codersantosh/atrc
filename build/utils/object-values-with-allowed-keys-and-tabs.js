"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcUpdateTabValues = exports.AtrcTabCss = exports.AtrcResetTabs = exports.AtrcResetTab = exports.AtrcIsKeyWithValueNotEmpty = exports.AtrcHasTabValues = exports.AtrcGetTabValues = void 0;
var _lodash = require("lodash");
var _availableTabs = _interopRequireDefault(require("./available-tabs"));
var _isScalar = _interopRequireDefault(require("./is-scalar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*Library*/ /*Inbuilt*/
/*Local*/
var AtrcIsKeyWithValueNotEmpty = exports.AtrcIsKeyWithValueNotEmpty = function AtrcIsKeyWithValueNotEmpty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '';
};
var AtrcGetTabValues = exports.AtrcGetTabValues = function AtrcGetTabValues(value, tab) {
  var allowedTabKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if ((0, _lodash.isEmpty)(value) || !_availableTabs.default.includes(tab) || !(0, _lodash.isArray)(allowedTabKeys)) {
    return {};
  }
  if (value[tab]) {
    return value[tab];
  }
  var tabKeys = tab === 'normal' ? allowedTabKeys : allowedTabKeys.map(function (prop) {
    return prop + tab;
  });
  return (0, _lodash.mapKeys)((0, _lodash.pick)(value, tabKeys), function (val, key) {
    return tab === 'normal' ? key : key.replace(tab, '');
  });
};
var AtrcUpdateTabValues = exports.AtrcUpdateTabValues = function AtrcUpdateTabValues(newVal, tab, value) {
  var allowedTabKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (!_availableTabs.default.includes(tab) || !(0, _lodash.isArray)(allowedTabKeys)) {
    return {};
  }
  var clonedValue = _objectSpread({}, value);
  if ((0, _isScalar.default)(newVal)) {
    allowedTabKeys.forEach(function (key) {
      var newKey = tab === 'normal' ? key : key + tab;
      delete clonedValue[newKey];
    });
    clonedValue[tab] = newVal;
  } else {
    delete clonedValue[tab];
    allowedTabKeys.forEach(function (key) {
      var newKey = tab === 'normal' ? key : key + tab;
      if (key in newVal) {
        clonedValue[newKey] = newVal[key];
      } else {
        delete clonedValue[newKey];
      }
    });
  }
  return clonedValue;
};
var AtrcHasTabValues = exports.AtrcHasTabValues = function AtrcHasTabValues(tab, value) {
  var allowedTabKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if ((0, _lodash.isEmpty)(value) || !_availableTabs.default.includes(tab) || !(0, _lodash.isArray)(allowedTabKeys)) {
    return false;
  }
  if (value[tab]) {
    return true;
  }
  if (tab === 'normal') {
    return allowedTabKeys.some(function (key) {
      return AtrcIsKeyWithValueNotEmpty(value, key);
    });
  }
  return allowedTabKeys.some(function (key) {
    return AtrcIsKeyWithValueNotEmpty(value, "".concat(key).concat(tab));
  });
};
var AtrcResetTab = exports.AtrcResetTab = function AtrcResetTab(tab, value) {
  var allowedTabKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (!_availableTabs.default.includes(tab) || !(0, _lodash.isArray)(allowedTabKeys)) {
    return value;
  }
  var tabKeys = tab === 'normal' ? allowedTabKeys : allowedTabKeys.map(function (prop) {
    return prop + tab;
  });
  tabKeys.push('tab'); //for scalar value.

  return (0, _lodash.omit)(value, tabKeys);
};
var AtrcResetTabs = exports.AtrcResetTabs = function AtrcResetTabs(value, allowedTabKeys) {
  if (!value) {
    return value;
  }
  if (!(0, _lodash.isArray)(allowedTabKeys)) {
    throw new Error("Invalid allowedTabKeys: ".concat(allowedTabKeys, ". Expected an array."));
  }
  var newValue = _objectSpread({}, value);
  _availableTabs.default.forEach(function (tab) {
    newValue = AtrcResetTab(tab, newValue, allowedTabKeys);
  });
  return newValue;
};
var AtrcTabCss = exports.AtrcTabCss = function AtrcTabCss(value, key, cssProp) {
  if (!value) {
    return value;
  }
  var innerOutput = {};
  _availableTabs.default.forEach(function (tab) {
    var newKey = tab === 'normal' ? key : key + tab;
    var newOutputKey = tab === 'normal' ? 'xs' : 'xs' + tab;
    if (value[newKey]) {
      if (!innerOutput[newOutputKey]) {
        innerOutput[newOutputKey] = '';
      }
      innerOutput[newOutputKey] += "".concat(cssProp, "      : ").concat(value[newKey], ";");
    }
  });
  return innerOutput;
};
//# sourceMappingURL=object-values-with-allowed-keys-and-tabs.js.map