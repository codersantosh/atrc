"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _span = _interopRequireDefault(require("../../atoms/span"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["children", "className", "variant"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Component*/
var AtrcTooltip = function AtrcTooltip(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_components.Tooltip, defaultProps, /*#__PURE__*/React.createElement(_span.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ttip'), className, variant ? (0, _prefixVars.default)('ttip') + '-' + variant : '')
  }, children));
};
var _default = exports.default = AtrcTooltip;
//# sourceMappingURL=index.js.map