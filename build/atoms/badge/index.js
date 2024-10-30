var _excluded = ["className", "variant", "tag", "text", "children", "hasIcon", "childVariant"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function getVariantClass(variant) {
  if (variant.includes('outline')) {
    variant = variant.replace(/outline/, 'outln');
  } else if (variant.includes('link')) {
    variant = variant.replace(/link/, 'lnk');
  }
  return AtrcPrefix('bg') + '-' + variant;
}
function getChildVariantClass(variant) {
  return AtrcPrefix('txt') + '-' + variant;
}
var AtrcBadge = function AtrcBadge(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'span' : _props$tag,
    _props$text = props.text,
    text = _props$text === void 0 ? '' : _props$text,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$hasIcon = props.hasIcon,
    hasIcon = _props$hasIcon === void 0 ? false : _props$hasIcon,
    _props$childVariant = props.childVariant,
    childVariant = _props$childVariant === void 0 ? '' : _props$childVariant,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var thisClassName = classnames(AtrcPrefix('badge'), 'at-bg-cl', 'at-p', className, variant ? getVariantClass(variant) : '', hasIcon ? 'at-al-itm-ctr at-flx at-gap at-badge-icon' : '', childVariant ? getChildVariantClass(childVariant) : '');
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: tag,
    className: thisClassName
  }, defaultProps), children || text);
};
export default AtrcBadge;
//# sourceMappingURL=index.js.map