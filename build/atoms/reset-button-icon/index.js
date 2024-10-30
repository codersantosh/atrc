var _excluded = ["className", "variant", "children"],
  _excluded2 = ["className", "variant", "value", "defaultValue"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';
import { BsArrowCounterclockwise } from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../wrap';
import AtrcButton from '../button';
import AtrcIcon from '../icon';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcResetWrap = function AtrcResetWrap(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    className: classnames(AtrcPrefix('rst-wrp'), 'at-flx', 'at-al-itm-st', 'at-jfy-cont-btw', 'at-gap', className, variant ? AtrcPrefix('rst-wrp') + '-' + variant : '')
  }), children);
};
var AtrcResetButtonIcon = function AtrcResetButtonIcon(props) {
  if ('disabled' in props && props.disabled) {
    return null;
  }
  var _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2,
    _props$variant2 = props.variant,
    variant = _props$variant2 === void 0 ? '' : _props$variant2,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(AtrcButton, _extends({
    className: classnames(AtrcPrefix('btn-rst-i'), className),
    variant: "link",
    disabled: value === defaultValue
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsArrowCounterclockwise
  }));
};
export default AtrcResetButtonIcon;
//# sourceMappingURL=index.js.map