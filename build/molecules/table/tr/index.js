var _excluded = ["variant", "className", "children", "isSticky", "isLocked", "isEven", "isOdd"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var AtrcTr = function AtrcTr(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$isSticky = props.isSticky,
    isSticky = _props$isSticky === void 0 ? false : _props$isSticky,
    _props$isLocked = props.isLocked,
    isLocked = _props$isLocked === void 0 ? false : _props$isLocked,
    _props$isEven = props.isEven,
    isEven = _props$isEven === void 0 ? false : _props$isEven,
    _props$isOdd = props.isOdd,
    isOdd = _props$isOdd === void 0 ? false : _props$isOdd,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("tr", _extends({
    className: classnames(AtrcPrefix('tr'), className, variant ? AtrcPrefix('tr') + '-' + variant : '', isSticky ? 'at-stky' : '', isLocked ? AtrcPrefix('locked') + ' at-opa at-cur at-pos at-z-idx' : '', isEven ? AtrcPrefix('even') + ' at-bg-cl' : '', isOdd ? AtrcPrefix('odd') + ' at-bg-cl' : '')
  }, defaultProps), children);
};
export default AtrcTr;
//# sourceMappingURL=index.js.map