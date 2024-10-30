var _excluded = ["isSticky", "className", "variant", "children"];
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
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcHeaderTag = function AtrcHeaderTag(props) {
  var _props$isSticky = props.isSticky,
    isSticky = _props$isSticky === void 0 ? false : _props$isSticky,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "header",
    className: classnames(AtrcPrefix('hdr'), 'at-bg-cl', className, isSticky ? AtrcPrefix('hdr-stky') + ' at-pos at-z-idx' : '', variant && AtrcPrefix('hdr') + variant)
  }, defaultProps), children);
};

/* Gutenberg block render doesnot support HOOKS */
var AtrcHeaderClient = function AtrcHeaderClient(props) {
  var _props$isSticky2 = props.isSticky,
    isSticky = _props$isSticky2 === void 0 ? false : _props$isSticky2,
    _props$useDynamicHeig = props.useDynamicHeight,
    useDynamicHeight = _props$useDynamicHeig === void 0 ? true : _props$useDynamicHeig;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    headerHeight = _useState2[0],
    setHeaderHeight = _useState2[1];
  var updateHeight = function updateHeight() {
    var stickyHeader = document.getElementsByClassName('at-hdr-stky');
    if (stickyHeader && stickyHeader[0]) {
      setHeaderHeight(stickyHeader[0].offsetHeight + 16);
    }
  };
  useEffect(function () {
    var timeoutId;
    var handleHeight = function handleHeight() {
      if (isSticky && useDynamicHeight) {
        timeoutId = setTimeout(updateHeight, 300);
      }
    };
    var handleResize = function handleResize() {
      clearTimeout(timeoutId);
    };
    window.addEventListener('resize', handleHeight);
    handleHeight();
    return function () {
      window.removeEventListener('resize', handleHeight);
      clearTimeout(timeoutId);
    };
  }, [isSticky, useDynamicHeight]);
  useEffect(function () {
    if (headerHeight && isSticky && useDynamicHeight) {
      var atMain = document.getElementById('at-main');
      if (atMain) {
        atMain.style.marginTop = "".concat(headerHeight, "px");
      }
    }
  }, [isSticky, headerHeight, useDynamicHeight]);
  return /*#__PURE__*/React.createElement(AtrcHeaderTag, props);
};
var AtrcHeader = function AtrcHeader(props) {
  var _props$useDynamicHeig2 = props.useDynamicHeight,
    useDynamicHeight = _props$useDynamicHeig2 === void 0 ? false : _props$useDynamicHeig2;
  if (useDynamicHeight) {
    return /*#__PURE__*/React.createElement(AtrcHeaderClient, props);
  }
  return /*#__PURE__*/React.createElement(AtrcHeaderTag, props);
};
export default AtrcHeader;
//# sourceMappingURL=index.js.map