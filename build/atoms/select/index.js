"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcDynamicSelect = AtrcDynamicSelect;
exports.default = void 0;
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _async = _interopRequireDefault(require("react-select/async"));
var _lodash = require("lodash");
var _wrap = _interopRequireDefault(require("../wrap"));
var _resetButtonIcon = _interopRequireWildcard(require("../reset-button-icon"));
var _label = _interopRequireDefault(require("../label"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "value", "onChange", "showOptionNone", "optionNoneValue", "options", "className", "wrapProps", "isAsync"],
  _excluded2 = ["label", "variant", "className", "isMulti", "isAsync", "multiValType", "valType", "value", "options", "loadOptions", "onChange", "wrapProps"],
  _excluded3 = ["variant", "className", "isMulti", "isAsync", "value", "options", "onChange", "wrapProps", "defaultValue"]; // Reference for multi select
//https://stackoverflow.com/questions/54218351/changing-height-of-react-select-component
/*WordPress*/
/*Library*/
/*Inbuilt*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
function AtrcDynamicSelect(props) {
  var label = props.label,
    value = props.value,
    onChange = props.onChange,
    _props$showOptionNone = props.showOptionNone,
    showOptionNone = _props$showOptionNone === void 0 ? false : _props$showOptionNone,
    _props$optionNoneValu = props.optionNoneValue,
    optionNoneValue = _props$optionNoneValu === void 0 ? 0 : _props$optionNoneValu,
    options = props.options,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    _props$isAsync = props.isAsync,
    isAsync = _props$isAsync === void 0 ? false : _props$isAsync,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setId = function setId(val) {
    if ((0, _lodash.isString)(val)) {
      onChange(Number(val));
    } else {
      onChange(val);
    }
  };
  if (showOptionNone && !isAsync) {
    options = [{
      value: optionNoneValue,
      label: (0, _i18n.__)('Select', 'atrc-prefix-atrc')
    }].concat(_toConsumableArray(options));
  }
  return /*#__PURE__*/React.createElement(AtrcSelect, _extends({
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
  var MapValue = (0, _element.useMemo)(function () {
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
      return (0, _lodash.reduce)(options,
      // eslint-disable-next-line no-unused-vars
      function (accumulator, currentValue, currentKey) {
        if (valArray.includes(currentValue.value)) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, []);
    }
  }, [value]);
  var customStyles = {
    control: function control(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: '',
        borderRadius: "var(--at-bdr-rad)",
        borderColor: "var(--at-quaternary)",
        minHeight: "var(--at-h)",
        height: "var(--at-h)",
        boxShadow: state.isFocused ? null : null
      });
    },
    // eslint-disable-next-line no-unused-vars
    valueContainer: function valueContainer(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        height: "var(--at-h)",
        padding: '0 6px'
      });
    },
    // eslint-disable-next-line no-unused-vars
    input: function input(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        margin: '0px',
        height: "var(--at-h)"
      });
    },
    // eslint-disable-next-line no-unused-vars
    indicatorsContainer: function indicatorsContainer(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        height: "var(--at-h)"
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
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, wrapProps, {
    className: (0, _classnames.default)((0, _prefixVars.default)('select-multi'), wrapProps.className ? wrapProps.className : '')
  }), label && /*#__PURE__*/React.createElement(_label.default, null, label), isAsync ? /*#__PURE__*/React.createElement(_async.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('select'), (0, _prefixVars.default)('select-multi-select'), className, variant ? (0, _prefixVars.default)('select') + '-' + variant : ''),
    cacheOptions: true,
    defaultOptions: true,
    styles: customStyles,
    isMulti: isMulti,
    loadOptions: loadOptions,
    onChange: doChange
  }, defaultProps)) : /*#__PURE__*/React.createElement(_reactSelect.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('select'), (0, _prefixVars.default)('select-multi-select'), className, variant ? (0, _prefixVars.default)('select') + '-' + variant : ''),
    styles: customStyles,
    isMulti: isMulti,
    options: options,
    value: MapValue,
    onChange: doChange
  }, defaultProps)));
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
    defaultValue = props.defaultValue,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  if (isMulti || isAsync) {
    return /*#__PURE__*/React.createElement(ReactSelect, props);
  }
  return /*#__PURE__*/React.createElement(_components.SelectControl, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('select'), className, variant ? (0, _prefixVars.default)('select') + '-' + variant : ''),
    onChange: onChange,
    options: options,
    value: value
  }, defaultProps));
};
var AtrcSelect = function AtrcSelect(props) {
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
    onChange = props.onChange,
    options = props.options,
    children = props.children;
  if (!(options && (0, _lodash.isArray)(options) && options.length) && !children) {
    // return null;
  }
  if (allowReset && !isMulti) {
    return /*#__PURE__*/React.createElement(_resetButtonIcon.AtrcResetWrap, _extends({}, wrapProps, {
      className: (0, _classnames.default)((0, _prefixVars.default)('select-rst'), wrapProps.className ? wrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
      value: value,
      defaultValue: defaultValue,
      onClick: function onClick() {
        return onChange(defaultValue);
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderComponent, props);
};
var _default = exports.default = AtrcSelect;
//# sourceMappingURL=index.js.map