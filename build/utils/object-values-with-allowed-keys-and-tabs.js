function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';

/*Library*/
import { isArray, isEmpty, mapKeys, omit, pick } from 'lodash';

/*Utils*/
import AtrcAvailableTabs from './available-tabs';
import AtrcIsScalar from './is-scalar';
import { AtrcUcFirst } from './string';

/*Local*/
export var AtrcIsKeyWithValueNotEmpty = function AtrcIsKeyWithValueNotEmpty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '';
};
export var AtrcGetTabValues = function AtrcGetTabValues(value, tab) {
  var allowedTabKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (isEmpty(value) || !AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
    return {};
  }

  /* For border radius */
  if (value[tab]) {
    return value[tab];
  }
  var tabKeys = tab === 'normal' ? allowedTabKeys : allowedTabKeys.map(function (prop) {
    return prop + AtrcUcFirst(tab);
  });
  return mapKeys(pick(value, tabKeys), function (val, key) {
    if ('normal' === tab) {
      return key;
    }
    return key.replace(AtrcUcFirst(tab), '');
  });
};
export var AtrcUpdateTabValues = function AtrcUpdateTabValues(newVal, tab, value) {
  var allowedTabKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (!AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
    return {};
  }
  var clonedValue = _objectSpread({}, value);
  if (AtrcIsScalar(newVal)) {
    allowedTabKeys.forEach(function (key) {
      var newKey = tab === 'normal' ? key : key + AtrcUcFirst(tab);
      delete clonedValue[newKey];
    });
    clonedValue[tab] = newVal;
  } else {
    delete clonedValue[tab];
    allowedTabKeys.forEach(function (key) {
      var newKey = '';
      if ('normal' === tab) {
        newKey = key;
      } else {
        newKey = key + AtrcUcFirst(tab);
      }
      if (key in newVal) {
        clonedValue[newKey] = newVal[key];
      } else {
        delete clonedValue[newKey];
      }
    });
  }
  return clonedValue;
};
export var AtrcHasTabValues = function AtrcHasTabValues(tab, value) {
  var allowedTabKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (isEmpty(value) || !AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
    return false;
  }
  /* For border radius */
  if (value[tab]) {
    return true;
  }
  if (tab === 'normal') {
    return allowedTabKeys.some(function (key) {
      return AtrcIsKeyWithValueNotEmpty(value, key);
    });
  }
  return allowedTabKeys.some(function (key) {
    return AtrcIsKeyWithValueNotEmpty(value, "".concat(key).concat(AtrcUcFirst(tab)));
  });
};
export var AtrcResetTab = function AtrcResetTab(tab, value) {
  var allowedTabKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (!AtrcAvailableTabs.includes(tab) || !isArray(allowedTabKeys)) {
    return value;
  }
  var tabKeys = tab === 'normal' ? allowedTabKeys : allowedTabKeys.map(function (prop) {
    return prop + AtrcUcFirst(tab);
  });
  tabKeys.push('tab'); //for scalar value.

  return omit(value, tabKeys);
};
export var AtrcResetTabs = function AtrcResetTabs(value, allowedTabKeys) {
  if (!value) {
    return value;
  }
  if (!isArray(allowedTabKeys)) {
    throw new Error("Invalid allowedTabKeys: ".concat(allowedTabKeys, ". Expected an array."));
  }
  var newValue = _objectSpread({}, value);
  AtrcAvailableTabs.forEach(function (tab) {
    newValue = AtrcResetTab(tab, newValue, allowedTabKeys);
  });
  return newValue;
};
export var AtrcTabCss = function AtrcTabCss(value) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var cssProp = arguments.length > 2 ? arguments[2] : undefined;
  if (!value) {
    return '';
  }
  var innerOutput = {};
  AtrcAvailableTabs.forEach(function (tab) {
    var newKey;
    if (key) {
      newKey = tab === 'normal' ? key : key + AtrcUcFirst(tab);
    } else {
      newKey = tab;
    }
    var newOutputKey = tab === 'normal' ? 'xs' : 'xs' + AtrcUcFirst(tab);
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