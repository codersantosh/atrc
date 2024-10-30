var _excluded = ["colSpan", "isSorting", "isSortActive", "onMouseEnter", "onMouseLeave", "className", "variant", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var AtrcTh = function AtrcTh(props) {
  var _props$colSpan = props.colSpan,
    colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan,
    _props$isSorting = props.isSorting,
    isSorting = _props$isSorting === void 0 ? false : _props$isSorting,
    _props$isSortActive = props.isSortActive,
    isSortActive = _props$isSortActive === void 0 ? false : _props$isSortActive,
    _props$onMouseEnter = props.onMouseEnter,
    onMouseEnter = _props$onMouseEnter === void 0 ? function () {} : _props$onMouseEnter,
    _props$onMouseLeave = props.onMouseLeave,
    onMouseLeave = _props$onMouseLeave === void 0 ? function () {} : _props$onMouseLeave,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("th", _extends({
    className: classnames(AtrcPrefix('th'), className, isSorting ? AtrcPrefix('sorting') : '', isSortActive ? AtrcPrefix('sorting-active') : '', variant ? AtrcPrefix('th') + '-' + variant : ''),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    colSpan: colSpan
  }, defaultProps), children);
};
export default AtrcTh;
//# sourceMappingURL=index.js.map