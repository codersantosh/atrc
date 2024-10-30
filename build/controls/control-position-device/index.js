function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "variant", "label", "value", "onChange", "allowedDevices", "boxFourProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
========*Position values*========
    "xsPos":"",
    "smPos":"",
    "mdPos":"",
    "lgPos":"",
    "xlPos":"",
    "xxlPos":""

========*Position directions values*========
    "xsT":"",
    "xsB":"",
    "xsR":"",
    "xsL":"",

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",

}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isArray, isEmpty, map, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlBoxFourDevice from '../control-box-four-device';
import AtrcControlSelectDevice from '../control-select-device';
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcGetDeviceValues, AtrcHasDeviceValues, AtrcResetDevices, AtrcSetDeviceValues } from '../../utils/object-values-with-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import PositionOptions from './options';

/*Local*/
var getPositionDirectionValue = function getPositionDirectionValue(value) {
  var newValue = {};
  AtrcControlBoxFourDeviceAllowedKeys.forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      newValue[key] = value[key];
    }
  });
  return newValue;
};
export var AtrcControlPositionAllowedKeys = ['xsPos', 'smPos', 'mdPos', 'lgPos', 'xlPos', 'xxlPos', 'xsT', 'xsB', 'xsR', 'xsL', 'smT', 'smB', 'smR', 'smL', 'mdT', 'mdB', 'mdR', 'mdL', 'lgT', 'lgB', 'lgR', 'lgL', 'xlT', 'xlB', 'xlR', 'xlL', 'xxlT', 'xxlB', 'xxlR', 'xxlL'];
var AtrcControlPositionDevice = function AtrcControlPositionDevice(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Position', 'atrc-prefix-atrc') : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    _props$boxFourProps = props.boxFourProps,
    boxFourProps = _props$boxFourProps === void 0 ? {} : _props$boxFourProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var hasPositionValue = function hasPositionValue() {
    if (!value || isEmpty(value)) {
      return false;
    }
    return AtrcHasDeviceValues(value, 'pos');
  };
  var hasDirectionValue = function hasDirectionValue() {
    if (!value || isEmpty(value)) {
      return false;
    }
    return AtrcHasDeviceValues(value, 't') || AtrcHasDeviceValues(value, 'r') || AtrcHasDeviceValues(value, 'b') || AtrcHasDeviceValues(value, 'l');
  };
  var doResetPosition = function doResetPosition(valueCloned) {
    return AtrcResetDevices(valueCloned, 'pos');
  };
  var doResetDirection = function doResetDirection(valueCloned) {
    valueCloned = AtrcResetDevices(valueCloned, 't');
    valueCloned = AtrcResetDevices(valueCloned, 'r');
    valueCloned = AtrcResetDevices(valueCloned, 'b');
    valueCloned = AtrcResetDevices(valueCloned, 'l');
    return valueCloned;
  };
  var resetPosition = function resetPosition() {
    var valueCloned = cloneDeep(value);
    onChange(doResetPosition(valueCloned));
  };
  var resetDirection = function resetDirection() {
    var valueCloned = cloneDeep(value);
    onChange(doResetDirection(valueCloned));
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var setPosition = function setPosition(newVal) {
    var valueCloned = cloneDeep(value);
    if (!valueCloned) {
      valueCloned = {};
    }
    valueCloned = doResetPosition(valueCloned);
    var posNewVal = AtrcSetDeviceValues(newVal, 'pos');
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), posNewVal);
    onChange(valueCloned);
  };
  var setDirection = function setDirection(newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned = doResetDirection(valueCloned);
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVal);
    onChange(valueCloned);
  };
  var AllTabs = [{
    name: 'pos',
    title: __('Position', 'atrc-prefix-atrc'),
    hasValue: hasPositionValue(),
    onDeselect: function onDeselect() {
      return resetPosition();
    }
  }, {
    name: 'dir',
    title: __('Position direction', 'atrc-prefix-atrc'),
    hasValue: hasDirectionValue(),
    onDeselect: function onDeselect() {
      return resetDirection();
    }
  }];

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
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-pos-device'), className, variant ? AtrcPrefix('ctrl-pos-device') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, defaultProps), function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('pos' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlSelectDevice, {
          className: classnames('at-flx-grw-1'),
          label: __('Position', 'atrc-prefix-atrc'),
          options: PositionOptions(),
          value: AtrcGetDeviceValues(value, tab),
          onChange: setPosition,
          allowedDevices: Devices()
        }));
      }
      /* No boxFourProps, it is needed as object */
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcControlBoxFourDevice, {
        label: __('Position direction', 'atrc-prefix-atrc'),
        className: classnames(AtrcPrefix('ctrl-pos'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-pos') + '-' + variant : ''),
        value: getPositionDirectionValue(value),
        onChange: setDirection,
        allowedDevices: Devices(),
        boxFourProps: boxFourProps
      }));
    });
  });
};
export default AtrcControlPositionDevice;
//# sourceMappingURL=index.js.map