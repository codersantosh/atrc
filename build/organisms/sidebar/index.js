var _excluded = ["direction", "className", "variant", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var Direction = function Direction(direction) {
  switch (direction) {
    case 'right':
      return 'r';
    case 'left':
      return 'l';
    case 'top':
      return 't';
    case 'bottom':
      return 'b';
  }
};
var Variant = function Variant(variant) {
  switch (variant) {
    case 'float':
    case 'floating':
      return 'flt';
  }
  return variant;
};
var AtrcSidebar = function AtrcSidebar(props) {
  var _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'right' : _props$direction,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "aside",
    className: classnames(AtrcPrefix('sdbar'), className, variant ? AtrcPrefix('sdbar') + '-' + Variant(variant) : '', direction ? AtrcPrefix('sdbar') + '-' + Direction(direction) : '')
  }, defaultProps), children);
};
export default AtrcSidebar;
//# sourceMappingURL=index.js.map