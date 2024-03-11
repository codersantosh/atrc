var _excluded = ["className", "variant", "isActive", "text", "children", "hasIcon", "isLink"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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