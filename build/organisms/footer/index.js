var _excluded = ["useDynamicPosition", "isSticky", "includeDefaultClass", "stickyProps", "className", "variant", "children"];
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

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcGetInlineCss from '../../utils/get-inline-css';

/*Local*/
var getStickyClass = function getStickyClass(type) {
  if ('fixed' === type) {
    return AtrcPrefix('ftr-fix');
  }
  return AtrcPrefix('ftr-stky');
};
export var AtrcFooterTag = function AtrcFooterTag(props) {
  var _props$useDynamicPosi = props.useDynamicPosition,
    useDynamicPosition = _props$useDynamicPosi === void 0 ? false : _props$useDynamicPosi,
    _props$isSticky = props.isSticky,
    isSticky = _props$isSticky === void 0 ? false : _props$isSticky,
    _props$includeDefault = props.includeDefaultClass,
    includeDefaultClass = _props$includeDefault === void 0 ? true : _props$includeDefault,
    _props$stickyProps = props.stickyProps,
    stickyProps = _props$stickyProps === void 0 ? {} : _props$stickyProps,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "footer",
    className: classnames(AtrcPrefix('ftr'), includeDefaultClass && 'at-bg-cl', includeDefaultClass && 'at-p', className, !useDynamicPosition && isSticky ? getStickyClass(stickyProps.type) + ' at-pos at-z-idx' : '', variant && AtrcPrefix('ftr') + variant)
  }, defaultProps), children);
};

/* Gutenberg block render doesnot support HOOKS */
var AtrcFooterClient = function AtrcFooterClient(props) {
  var _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2,
    _props$stickyProps2 = props.stickyProps,
    stickyProps = _props$stickyProps2 === void 0 ? {
      type: 'stky',
      css: {
        '--at-b': '0'
      }
    } : _props$stickyProps2,
    _props$scrollDiff = props.scrollDiff,
    scrollDiff = _props$scrollDiff === void 0 ? 130 : _props$scrollDiff;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    addStickyClass = _useState2[0],
    setAddStickyClass = _useState2[1];
  var _useState3 = useState(window.pageYOffset),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollPos = _useState4[0],
    setScrollPos = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    scrollDirection = _useState6[0],
    setScrollDirection = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    lastDirectionScrollPos = _useState8[0],
    setLastDirectionScrollPos = _useState8[1];
  var handleScroll = function handleScroll() {
    var currentScrollPos = window.pageYOffset;
    setScrollDirection(currentScrollPos > scrollPos ? 'down' : 'up');
    setScrollPos(currentScrollPos);
  };
  useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);
  useEffect(function () {
    if (scrollDirection) {
      setLastDirectionScrollPos(window.pageYOffset);
    }
  }, [scrollDirection]);
  useEffect(function () {
    var diff = Math.abs(scrollPos - lastDirectionScrollPos);
    if (diff > scrollDiff) {
      if (scrollDirection === 'up' && window.pageYOffset < lastDirectionScrollPos) {
        setAddStickyClass(false);
      } else if (scrollDirection === 'down' && window.pageYOffset > lastDirectionScrollPos) {
        setAddStickyClass(true);
      }
    }
  }, [scrollPos, lastDirectionScrollPos, scrollDirection]);
  return /*#__PURE__*/React.createElement(AtrcFooterTag, _extends({}, props, {
    className: classnames(className, addStickyClass ? getStickyClass(stickyProps.type) + ' at-pos at-z-idx' : ' '),
    style: addStickyClass ? AtrcGetInlineCss(stickyProps.css) : null
  }));
};
var AtrcFooter = function AtrcFooter(props) {
  var _props$useDynamicPosi2 = props.useDynamicPosition,
    useDynamicPosition = _props$useDynamicPosi2 === void 0 ? false : _props$useDynamicPosi2;
  if (useDynamicPosition) {
    return /*#__PURE__*/React.createElement(AtrcFooterClient, props);
  }
  return /*#__PURE__*/React.createElement(AtrcFooterTag, props);
};
export default AtrcFooter;
//# sourceMappingURL=index.js.map