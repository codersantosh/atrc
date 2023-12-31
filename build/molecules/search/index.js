"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["doSearch", "className"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components and Functions*/
var AtrcSearchBtn = function AtrcSearchBtn(props) {
  var doSearch = props.doSearch,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_button.default, _extends({}, defaultProps, {
    onClick: function onClick() {
      return doSearch();
    },
    className: (0, _classnames.default)(className, (0, _prefixVars.default)('btn-search'), 'at-m')
  }));
};
var AtrcSearch = function AtrcSearch(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type,
    _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$doSearch = props.doSearch,
    _doSearch = _props$doSearch === void 0 ? '' : _props$doSearch,
    _props$allowButton = props.allowButton,
    allowButton = _props$allowButton === void 0 ? true : _props$allowButton,
    _props$buttonProps = props.buttonProps,
    buttonProps = _props$buttonProps === void 0 ? {} : _props$buttonProps,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps;
  var _useState = (0, _element.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  /*Run only once on mount*/
  (0, _element.useEffect)(function () {
    if ('keyDown' === type) {
      _doSearch(input);
    }
  }, [input]);
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, wrapProps, {
    className: (0, _classnames.default)((0, _prefixVars.default)('search-wrp'), wrapProps.className ? wrapProps.className : '', 'at-flx', 'at-al-itm-ctr')
  }), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx-grow-1'),
    variant: "input-box"
  }, /*#__PURE__*/React.createElement(_components.SearchControl, {
    className: (0, _classnames.default)((0, _prefixVars.default)('search'), className, variant ? (0, _prefixVars.default)('search') + '-' + variant : ''),
    placeholder: placeholder || (0, _i18n.__)('Search', 'atrc-prefix-atrc'),
    value: input,
    onChange: setInput,
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 13) {
        _doSearch(input);
      }
    }
  })), allowButton ? /*#__PURE__*/React.createElement(AtrcSearchBtn, _extends({
    doSearch: function doSearch() {
      return _doSearch(input);
    },
    children: (0, _i18n.__)('Search', 'atrc-prefix-atrc')
  }, buttonProps)) : null);
};
var _default = exports.default = AtrcSearch;
//# sourceMappingURL=index.js.map