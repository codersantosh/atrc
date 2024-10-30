var _excluded = ["className", "variant", "isActive", "text", "children", "hasIcon", "isLink"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcLink from '../link';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function getVariantClass(variant) {
  if (variant.includes('outline')) {
    variant = variant.replace(/outline/, 'outln');
  } else if (variant.includes('link')) {
    variant = variant.replace(/link/, 'lnk');
  }
  return AtrcPrefix('btn') + '-' + variant;
}
/*hasIcon : use only when both text & icon*/
var AtrcButton = function AtrcButton(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    _props$isActive = props.isActive,
    isActive = _props$isActive === void 0 ? false : _props$isActive,
    _props$text = props.text,
    text = _props$text === void 0 ? '' : _props$text,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$hasIcon = props.hasIcon,
    hasIcon = _props$hasIcon === void 0 ? false : _props$hasIcon,
    _props$isLink = props.isLink,
    isLink = _props$isLink === void 0 ? false : _props$isLink,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var thisClassName = classnames(AtrcPrefix('btn'), className, isActive ? AtrcPrefix('btn-active') : '', variant ? getVariantClass(variant) : '', hasIcon ? 'at-al-itm-ctr at-flx at-jfy-cont-ctr at-gap at-btn-icon' : '');
  if (isLink) {
    return /*#__PURE__*/React.createElement(AtrcLink, _extends({
      className: thisClassName,
      isButton: true,
      children: children || text
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: thisClassName
  }, defaultProps), children || text);
};
export default AtrcButton;
//# sourceMappingURL=index.js.map