function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["navs", "linkProps"],
  _excluded2 = ["className", "variant", "navs", "ulProps", "liProps", "linkProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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