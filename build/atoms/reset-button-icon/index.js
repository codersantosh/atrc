var _excluded = ["className", "variant", "children"],
  _excluded2 = ["className", "variant", "value", "defaultValue"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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