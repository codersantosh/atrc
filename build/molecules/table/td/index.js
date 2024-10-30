var _excluded = ["className", "variant", "children", "colSpan"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var AtrcTd = function AtrcTd(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$colSpan = props.colSpan,
    colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("td", _extends({
    className: classnames(AtrcPrefix('td'), 'at-p', className, variant ? AtrcPrefix('td') + '-' + variant : ''),
    colSpan: colSpan
  }, defaultProps), children);
};
export default AtrcTd;
//# sourceMappingURL=index.js.map