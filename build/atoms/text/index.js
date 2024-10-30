var _excluded = ["tag", "className", "variant", "children", "dangerouslySetInnerHTML"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcText = function AtrcText(props) {
  var _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'p' : _props$tag,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var TextTag = tag;
  var thisClassNames = classnames(AtrcPrefix('txt'), className, AtrcPrefix('txt') + '-' + tag, variant ? AtrcPrefix('txt') + '-' + variant : '');
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement(TextTag, _extends({
      className: thisClassNames,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(TextTag, _extends({
    className: thisClassNames
  }, defaultProps), children);
};
export default AtrcText;
//# sourceMappingURL=index.js.map