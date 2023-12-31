"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "tag", "role", "size", "isBordered", "isRounded", "isSeparated", "isSuccess", "isFail", "isNew", "isBadge", "visibility", "priority", "variant", "children", "onClick"];
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcItem = function AtrcItem(props) {
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
    className: (0, _classnames.default)(className, (0, _prefixVars.default)('itm'), size ? (0, _prefixVars.default)('itm') + '-' + size : '', isBordered ? (0, _prefixVars.default)('bdr') : '', isRounded ? (0, _prefixVars.default)('rounded') : '', isSeparated ? (0, _prefixVars.default)('sep') : '', isSuccess ? (0, _prefixVars.default)('success') : '', isFail ? (0, _prefixVars.default)('fail') : '', isNew ? (0, _prefixVars.default)('new') : '', isBadge ? (0, _prefixVars.default)('badge') : '',
    // variant?'atrc-'+variant:'',
    variant ? (0, _prefixVars.default)('') + variant : ''),
    onClick: onClick
  }, defaultProps), children);
};
var _default = exports.default = AtrcItem;
//# sourceMappingURL=index.js.map