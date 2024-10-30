var _excluded = ["className", "tag", "role", "size", "isBordered", "isRounded", "isSeparated", "isSuccess", "isFail", "isNew", "isBadge", "visibility", "priority", "variant", "children", "onClick"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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