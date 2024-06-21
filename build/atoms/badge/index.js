var _excluded = ["className", "variant", "tag", "text", "children", "hasIcon", "childVariant"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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