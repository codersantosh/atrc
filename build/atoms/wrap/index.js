var _excluded = ["tag", "className", "variant", "children", "dangerouslySetInnerHTML"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcWrap = function AtrcWrap(props, ref) {
  var _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'div' : _props$tag,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$dangerouslySet = props.dangerouslySetInnerHTML,
    dangerouslySetInnerHTML = _props$dangerouslySet === void 0 ? '' : _props$dangerouslySet,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var WrapTag = tag;
  var thisClassNames = classnames(className, variant ? AtrcPrefix('') + variant : '');
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement(WrapTag, _extends({
      ref: ref,
      className: thisClassNames,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(WrapTag, _extends({
    ref: ref,
    className: thisClassNames
  }, defaultProps), children);
};
export default /*#__PURE__*/forwardRef(AtrcWrap);
//# sourceMappingURL=index.js.map