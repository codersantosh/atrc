"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["tag", "className", "variant", "children", "dangerouslySetInnerHTML"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcWrap = function AtrcWrap(props, ref) {
  var _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'div' : _props$tag,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$dangerouslySet = props.dangerouslySetInnerHTML,
    dangerouslySetInnerHTML = _props$dangerouslySet === void 0 ? '' : _props$dangerouslySet,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var WrapTag = tag;
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement(WrapTag, _extends({
      ref: ref,
      className: (0, _classnames.default)(className, variant ? (0, _prefixVars.default)() + variant : ''),
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(WrapTag, _extends({
    ref: ref,
    className: (0, _classnames.default)(className, variant ? (0, _prefixVars.default)('') + variant : '')
  }, defaultProps), children);
};
var _default = exports.default = (0, _element.forwardRef)(AtrcWrap);
//# sourceMappingURL=index.js.map