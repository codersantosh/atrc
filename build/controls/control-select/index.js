function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "optionNoneLabel", "options", "className", "wrapProps", "isAsync"],
  _excluded2 = ["label", "help", "variant", "className", "isMulti", "isAsync", "multiValType", "valType", "value", "options", "loadOptions", "onChange", "wrapProps"],
  _excluded3 = ["variant", "className", "isMulti", "isAsync", "value", "options", "onChange", "wrapProps", "allowReset", "defaultValue"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

// Reference for multi select
//https://stackoverflow.com/questions/54218351/changing-height-of-react-select-component
/*WordPress*/
import { SelectControl } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { isString, reduce } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcWrapLib from '../../atoms/wrap-lib';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcLabel from '../../atoms/label';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';
import AtrcText from './../../atoms/text/index';

/*Local*/
export function AtrcDynamicSelect(props) {
  var label = props.label,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? false : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? 0 : _props$optionNoneValu,
    _props$optionNoneLabe = props.optionNoneLabel,
    optionNoneLabel = _props$optionNoneLabe === void 0 ? __('Select', 'atrc-prefix-atrc') : _props$optionNoneLabe,
    options = props.options,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$isAsync = props.isAsync,
    isAsync = _props$isAsync === void 0 ? false : _props$isAsync,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setId = function setId(val) {
    if (isString(val)) {
      onChange(Number(val));
    } else {
      onChange(val);
    }
  };
  if (showOptionNone && !isAsync) {
    options = [{
      value: optionNoneValue,
      label: optionNoneLabel
    }].concat(_toConsumableArray(options));
  }
  return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
    label: label,
    className: className,
    options: options,
    onChange: setId,
    value: value,
    wrapProps: wrapProps,
    isAsync: isAsync
  }, defaultProps));
}
var ReactSelect = function ReactSelect(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$help = props.help,
    help = _props$help === void 0 ? '' : _props$help,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? false : _props$isMulti,
    _props$isAsync2 = props.isAsync,
    isAsync = _props$isAsync2 === void 0 ? false : _props$isAsync2,
    _props$multiValType = props.multiValType,
    multiValType = _props$multiValType === void 0 ? '' : _props$multiValType,
    _props$valType = props.valType,
    valType = _props$valType === void 0 ? '' : _props$valType,
    value = props.value,
    options = props.options,
    loadOptions = props.loadOptions,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$wrapProps2 = props.wrapProps,
    wrapProps = _props$wrapProps2 === void 0 ? {} : _props$wrapProps2,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var MapValue = useMemo(function () {
    if (!value) {
      return value;
    }
    if ('string' === multiValType || 'array' === multiValType) {
      var valArray = [];
      if ('string' === multiValType) {
        valArray = value.split(',');
      } else {
        valArray = value.slice(0);
      }
      return reduce(options,
      // eslint-disable-next-line no-unused-vars
      function (accumulator, currentValue, currentKey) {
        if (valArray.includes(currentValue.value)) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, []);
    }
  }, [value, options]);
  var customStyles = {
    control: function control(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: 'var(--at-multi-select-ctrl)',
        borderRadius: "var(--at-bdr-rad)",
        borderColor: "var(--at-border-color)",
        minHeight: "var(--at-h)",
        height: "var(--at-h)",
        boxShadow: state.isFocused ? null : null
      });
    },
    // input's container
    valueContainer: function valueContainer(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        height: "var(--at-h)",
        padding: '0 6px',
        borderColor: "var(--at-border-color)",
        background: 'var(--at-multi-select-cont)'
      });
    },
    // dropdown menu
    menu: function menu(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: 'var(--at-multi-select-menu)',
        color: 'var(--at-base-color)'
      });
    },
    // dropdown menu option
    option: function option(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        backgroundColor: 'var(--at-multi-select-option--bg)',
        color: 'var(--at-base-color)',
        '&:hover': {
          backgroundColor: 'var(--at-multi-select-option-bg--hover)',
          color: 'var(--at-base-color)'
        }
      });
    },
    // input
    input: function input(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        margin: '0px',
        height: "var(--at-h)",
        background: 'var(--at-multi-select-input)'
      });
    },
    // dropdown indicator
    indicatorsContainer: function indicatorsContainer(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        height: "var(--at-h)",
        background: 'var(--at-multi-select-indicator)'
      });
    }
  };
  var doChange = function doChange(newVal) {
    if (isMulti) {
      if ('string' === multiValType || 'array' === multiValType) {
        var valArray = [];
        newVal.forEach(function (item) {
          valArray.push(item.value);
        });
        if ('array' === multiValType) {
          onChange(valArray);
        } else {
          onChange(valArray.toString());
        }
      } else {
        onChange(newVal);
      }
    } else if ('default' !== valType) {
      if (newVal && newVal.value) {
        onChange(newVal.value);
      } else {
        onChange('');
      }
    } else {
      onChange(newVal);
    }
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, wrapProps, {
    className: classnames(AtrcPrefix('ctrl-select-multi'), wrapProps.className ? wrapProps.className : '')
  }), label && /*#__PURE__*/React.createElement(AtrcLabel, null, label), isAsync ? /*#__PURE__*/React.createElement(AsyncSelect, _extends({
    className: classnames(AtrcPrefix('ctrl-select'), AtrcPrefix('ctrl-select-multi-select'), className, variant ? AtrcPrefix('ctrl-select') + '-' + variant : ''),
    cacheOptions: true,
    defaultOptions: true,
    styles: customStyles,
    isMulti: isMulti,
    loadOptions: loadOptions,
    onChange: doChange
  }, defaultProps)) : /*#__PURE__*/React.createElement(Select, _extends({
    className: classnames(AtrcPrefix('ctrl-select'), AtrcPrefix('ctrl-select-multi-select'), className, variant ? AtrcPrefix('ctrl-select') + '-' + variant : ''),
    styles: customStyles,
    isMulti: isMulti,
    options: options,
    value: MapValue,
    onChange: doChange
  }, defaultProps)), help ? /*#__PURE__*/React.createElement(AtrcText, {
    variant: "help",
    className: classnames('at-m')
  }, help) : null);
};
var RenderComponent = function RenderComponent(props) {
  var _props$variant2 = props.variant,
    variant = _props$variant2 === void 0 ? '' : _props$variant2,
    _props$className3 = props.className,
    className = _props$className3 === void 0 ? '' : _props$className3,
    _props$isMulti2 = props.isMulti,
    isMulti = _props$isMulti2 === void 0 ? false : _props$isMulti2,
    _props$isAsync3 = props.isAsync,
    isAsync = _props$isAsync3 === void 0 ? false : _props$isAsync3,
    value = props.value,
    options = props.options,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2,
    _props$wrapProps3 = props.wrapProps,
    wrapProps = _props$wrapProps3 === void 0 ? {} : _props$wrapProps3,
    allowReset = props.allowReset,
    defaultValue = props.defaultValue,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  if (isMulti || isAsync) {
    return /*#__PURE__*/React.createElement(ReactSelect, props);
  }
  return /*#__PURE__*/React.createElement(SelectControl, _extends({
    className: classnames(AtrcPrefix('ctrl-select'), className, variant ? AtrcPrefix('ctrl-select') + '-' + variant : ''),
    onChange: onChange,
    options: options,
    value: value
  }, defaultProps));
};
var AtrcControlSelect = function AtrcControlSelect(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$isMulti3 = props.isMulti,
    isMulti = _props$isMulti3 === void 0 ? false : _props$isMulti3,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
    _props$wrapProps4 = props.wrapProps,
    wrapProps = _props$wrapProps4 === void 0 ? {} : _props$wrapProps4,
    _props$resetWrapProps = props.resetWrapProps,
    resetWrapProps = _props$resetWrapProps === void 0 ? {} : _props$resetWrapProps,
    onChange = props.onChange,
    options = props.options,
    children = props.children;
  return /*#__PURE__*/React.createElement(AtrcWrapLib, _extends({
    className: classnames('at-flx-grw-1')
  }, wrapProps), allowReset && !isMulti ? /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, resetWrapProps, {
    className: classnames(AtrcPrefix('ctrl-select-rst'), resetWrapProps.className ? resetWrapProps.className : '')
  }), /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
    value: value,
    defaultValue: defaultValue,
    onClick: function onClick() {
      return onChange(defaultValue);
    }
  })) : /*#__PURE__*/React.createElement(RenderComponent, props));
};
export default AtrcControlSelect;
//# sourceMappingURL=index.js.map