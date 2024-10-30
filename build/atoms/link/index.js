var _excluded = ["className", "variant", "type", "to", "children", "isButton", "isActive", "dangerouslySetInnerHTML"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress */

/*Library*/
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*
Local
Combination of all links which contain a tag and
* button components
* */
var AtrcLink = function AtrcLink(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$type = props.type,
    type = _props$type === void 0 ? 'a' : _props$type,
    _props$to = props.to,
    to = _props$to === void 0 ? '#' : _props$to,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$isButton = props.isButton,
    isButton = _props$isButton === void 0 ? false : _props$isButton,
    _props$isActive = props.isActive,
    isActive = _props$isActive === void 0 ? false : _props$isActive,
    _props$dangerouslySet = props.dangerouslySetInnerHTML,
    dangerouslySetInnerHTML = _props$dangerouslySet === void 0 ? '' : _props$dangerouslySet,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var thisClassName = classnames(!isButton ? AtrcPrefix('lnk') : null, !isButton ? 'at-txt' : null, className, variant ? AtrcPrefix('lnk') + '-' + variant : '', isActive ? AtrcPrefix('lnk-active') : null);
  if (type === 'nav-lnk') {
    return /*#__PURE__*/React.createElement(NavLink, _extends({
      to: to,
      className: function className(_ref) {
        var isActive = _ref.isActive;
        return classnames(AtrcPrefix('lnk-nav'), thisClassName);
      }
    }, defaultProps), children);
  }
  if (type === 'router-link') {
    return /*#__PURE__*/React.createElement(Link, _extends({
      className: thisClassName,
      to: to
    }, defaultProps), children);
  }
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: thisClassName,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    className: thisClassName
  }, defaultProps), children);
};
export default AtrcLink;
//# sourceMappingURL=index.js.map