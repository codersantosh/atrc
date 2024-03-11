var _excluded = ["doSearch", "className"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { SearchControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcSearchBtn = function AtrcSearchBtn(props) {
  var doSearch = props.doSearch,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcButton, _extends({
    onClick: function onClick() {
      return doSearch();
    },
    className: classnames(className, AtrcPrefix('btn-search'), 'at-m')
  }, defaultProps));
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
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  useEffect(function () {
    if (input !== value) setInput(value);
  }, [value]);

  /*Run only once on mount*/
  useEffect(function () {
    if ('keyDown' === type) {
      _doSearch(input);
    }
  }, [input]);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, wrapProps, {
    className: classnames(AtrcPrefix('search-wrp'), wrapProps.className ? wrapProps.className : '', 'at-flx', 'at-al-itm-strh')
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx-grow-1'),
    variant: "input-box"
  }, /*#__PURE__*/React.createElement(SearchControl, {
    className: classnames(AtrcPrefix('search'), className, variant ? AtrcPrefix('search') + '-' + variant : ''),
    placeholder: placeholder || __('Search', 'atrc-prefix-atrc'),
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
    children: __('Search', 'atrc-prefix-atrc')
  }, buttonProps)) : null);
};
export default AtrcSearch;
//# sourceMappingURL=index.js.map