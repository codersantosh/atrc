function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["navs", "linkProps"],
  _excluded2 = ["className", "variant", "navs", "ulProps", "liProps", "linkProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcLink from '../../atoms/link';

/* Molecules */
import AtrcLi from '../list/li';
import AtrcList from '../list';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var NavLinkLoop = function NavLinkLoop(props) {
  var navs = props.navs,
    _props$linkProps = props.linkProps,
    linkProps = _props$linkProps === void 0 ? {} : _props$linkProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (!navs) {
    return null;
  }
  return navs.map(function (nav, key) {
    var newLinkProps = _objectSpread(_objectSpread({}, nav), linkProps);
    return /*#__PURE__*/React.createElement(AtrcLi, _extends({
      key: key,
      className: classnames(AtrcPrefix('nav-li'))
    }, defaultProps), /*#__PURE__*/React.createElement(AtrcLink, _extends({
      type: "nav-lnk"
    }, newLinkProps)));
  });
};
var AtrcNav = function AtrcNav(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    navs = props.navs,
    _props$ulProps = props.ulProps,
    ulProps = _props$ulProps === void 0 ? {} : _props$ulProps,
    _props$liProps = props.liProps,
    liProps = _props$liProps === void 0 ? {} : _props$liProps,
    _props$linkProps2 = props.linkProps,
    linkProps = _props$linkProps2 === void 0 ? {} : _props$linkProps2,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: classnames(AtrcPrefix('nav'), className, variant ? AtrcPrefix('nav') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcList, _extends({}, ulProps, {
    className: classnames(AtrcPrefix('nav-ul'), ulProps.className || null, variant !== 'vertical' ? 'at-flx at-gap at-p' : '')
  }), /*#__PURE__*/React.createElement(NavLinkLoop, _extends({}, liProps, {
    className: classnames(liProps.className || null, variant !== 'vertical' ? 'at-m at-p' : ''),
    navs: navs,
    linkProps: linkProps
  }))));
};
export default AtrcNav;
//# sourceMappingURL=index.js.map