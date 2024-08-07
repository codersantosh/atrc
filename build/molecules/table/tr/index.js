var _excluded = ["variant", "className", "children", "isSticky", "isLocked", "isEven", "isOdd"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var AtrcTr = function AtrcTr(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$isSticky = props.isSticky,
    isSticky = _props$isSticky === void 0 ? false : _props$isSticky,
    _props$isLocked = props.isLocked,
    isLocked = _props$isLocked === void 0 ? false : _props$isLocked,
    _props$isEven = props.isEven,
    isEven = _props$isEven === void 0 ? false : _props$isEven,
    _props$isOdd = props.isOdd,
    isOdd = _props$isOdd === void 0 ? false : _props$isOdd,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("tr", _extends({
    className: classnames(AtrcPrefix('tr'), className, variant ? AtrcPrefix('tr') + '-' + variant : '', isSticky ? 'at-stky' : '', isLocked ? AtrcPrefix('locked') + ' at-opa at-cur at-pos at-z-idx' : '', isEven ? AtrcPrefix('even') + ' at-bg-cl' : '', isOdd ? AtrcPrefix('odd') + ' at-bg-cl' : '')
  }, defaultProps), children);
};
export default AtrcTr;
//# sourceMappingURL=index.js.map