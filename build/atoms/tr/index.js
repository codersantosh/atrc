"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["variant", "className", "children", "isSticky", "isLocked", "isEven", "isOdd"];
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    className: (0, _classnames.default)((0, _prefixVars.default)('tr'), className, variant ? (0, _prefixVars.default)('tr') + '-' + variant : '', isSticky ? (0, _prefixVars.default)('sticky') : '', isLocked ? (0, _prefixVars.default)('locked') : '', isEven ? (0, _prefixVars.default)('even') : '', isOdd ? (0, _prefixVars.default)('odd') : '')
  }, defaultProps), children);
};
var _default = exports.default = AtrcTr;
//# sourceMappingURL=index.js.map