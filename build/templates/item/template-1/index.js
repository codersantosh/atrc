var _excluded = ["className", "tag", "role", "size", "isBordered", "isRounded", "isSeparated", "isSuccess", "isFail", "isNew", "isBadge", "visibility", "priority", "variant", "children", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var AtrcItemTemplate1 = function AtrcItemTemplate1(props) {
  var className = props.className,
    _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'div' : _props$tag,
    _props$role = props.role,
    role = _props$role === void 0 ? null : _props$role,
    _props$size = props.size,
    size = _props$size === void 0 ? '' : _props$size,
    _props$isBordered = props.isBordered,
    isBordered = _props$isBordered === void 0 ? false : _props$isBordered,
    _props$isRounded = props.isRounded,
    isRounded = _props$isRounded === void 0 ? false : _props$isRounded,
    _props$isSeparated = props.isSeparated,
    isSeparated = _props$isSeparated === void 0 ? false : _props$isSeparated,
    _props$isSuccess = props.isSuccess,
    isSuccess = _props$isSuccess === void 0 ? false : _props$isSuccess,
    _props$isFail = props.isFail,
    isFail = _props$isFail === void 0 ? false : _props$isFail,
    _props$isNew = props.isNew,
    isNew = _props$isNew === void 0 ? false : _props$isNew,
    _props$isBadge = props.isBadge,
    isBadge = _props$isBadge === void 0 ? false : _props$isBadge,
    _props$visibility = props.visibility,
    visibility = _props$visibility === void 0 ? '' : _props$visibility,
    _props$priority = props.priority,
    priority = _props$priority === void 0 ? '' : _props$priority,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    children = props.children,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var ItemTag = tag;
  return /*#__PURE__*/React.createElement(ItemTag, _extends({
    role: role,
    className: classnames(className, AtrcPrefix('itm'), size ? AtrcPrefix('itm') + '-' + size : '', isBordered ? AtrcPrefix('bdr') : '', isRounded ? AtrcPrefix('rounded') : '', isSeparated ? AtrcPrefix('sep') : '', isSuccess ? AtrcPrefix('success') : '', isFail ? AtrcPrefix('fail') : '', isNew ? AtrcPrefix('new') : '', isBadge ? AtrcPrefix('badge') : '',
    // variant?'atrc-'+variant:'',
    variant ? AtrcPrefix('') + variant : ''),
    onClick: onClick
  }, defaultProps), children);
};
export default AtrcItemTemplate1;
//# sourceMappingURL=index.js.map