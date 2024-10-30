function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

/*Attributes Structure
Type Object
{
    "xsT":"",
    "xsB":"",
    "xsR":"",
    "xsL":"",
    "xs":"", just for future ref

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",
    "sm":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",
    "md": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",
    "lg":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",
    "xl":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",
    "xxl":"",
}
* */

/*Library*/
import { isArray, cloneDeep } from 'lodash';
import classnames from 'classnames';

/*Controls*/
import AtrcControlBoxFour from '../control-box-four';

/* Molecules */
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlBoxFourDeviceAllowedKeys = ['xsT', 'xsB', 'xsR', 'xsL', 'smT', 'smR', 'smB', 'smL', 'mdT', 'mdR', 'mdB', 'mdL', 'lgT', 'lgR', 'lgB', 'lgL', 'xlT', 'xlR', 'xlB', 'xlL', 'xxlT', 'xxlR', 'xxlB', 'xxlL'];
function mappingDeviceBoxFourValues(_ref) {
  var value = _ref.value,
    device = _ref.device;
  return {
    t: value && value[device + 'T'],
    r: value && value[device + 'R'],
    b: value && value[device + 'B'],
    l: value && value[device + 'L']
  };
}
var RenderTab = function RenderTab(_ref2) {
  var device = _ref2.device,
    value = _ref2.value,
    _onChange = _ref2.onChange,
    _ref2$boxFourProps = _ref2.boxFourProps,
    boxFourProps = _ref2$boxFourProps === void 0 ? {} : _ref2$boxFourProps;
  return /*#__PURE__*/React.createElement(AtrcControlBoxFour, _extends({
    label: "",
    value: mappingDeviceBoxFourValues({
      value: value,
      device: device
    }),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    }
  }, boxFourProps));
};

/*Mapping devices*/
var mappingNormalNewResponsiveValues = function mappingNormalNewResponsiveValues(value, device) {
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, device + 'T', value && value.t), device + 'R', value && value.r), device + 'B', value && value.b), device + 'L', value && value.l);
};
function mappingDeviceNewValues(_ref4) {
  var value = _ref4.value,
    device = _ref4.device,
    newVal = _ref4.newVal;
  var valueCloned = cloneDeep(value);
  var newValues = {};
  delete valueCloned[device + 'T'];
  delete valueCloned[device + 'R'];
  delete valueCloned[device + 'B'];
  delete valueCloned[device + 'L'];
  var changedValues = mappingNormalNewResponsiveValues(newVal, device);
  return _objectSpread(_objectSpread({}, valueCloned), changedValues);
}
var AtrcControlBoxFourDevice = function AtrcControlBoxFourDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    _onChange2 = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    _props$boxFourProps = props.boxFourProps,
    boxFourProps = _props$boxFourProps === void 0 ? {} : _props$boxFourProps;

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
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: label,
    tabs: Devices(),
    className: classnames(AtrcPrefix('ctrl-box-four-device'), className, variant ? AtrcPrefix('ctrl-box-four-device') + '-' + variant : '')
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: function onChange(newVal, device) {
        return _onChange2(mappingDeviceNewValues({
          value: value,
          device: device,
          newVal: newVal
        }));
      },
      boxFourProps: boxFourProps
    });
  });
};
export default AtrcControlBoxFourDevice;
//# sourceMappingURL=index.js.map