var _excluded = ["doSearch", "className"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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