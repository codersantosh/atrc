var _excluded = ["children", "isNum", "variant", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcFieldset = function AtrcFieldset(props, ref) {
  var _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$isNum = props.isNum,
    isNum = _props$isNum === void 0 ? false : _props$isNum,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "fieldset",
    className: classnames(AtrcPrefix('fieldset'), className, variant ? AtrcPrefix('fieldset') + '-' + variant : ''),
    ref: ref
  }, defaultProps), children);
};
export default /*#__PURE__*/forwardRef(AtrcFieldset);
//# sourceMappingURL=index.js.map