"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _reactRouterDom = require("react-router-dom");
var _button = _interopRequireDefault(require("../button"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "variant", "type", "to", "children", "prefix", "dangerouslySetInnerHTML"];
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*
Local Components
Combination of all links which contain a tag and
* button components
* */
var AtrcLink = function AtrcLink(props) {
  var _props$className = props.className,
    _className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$type = props.type,
    type = _props$type === void 0 ? 'a' : _props$type,
    _props$to = props.to,
    to = _props$to === void 0 ? '#' : _props$to,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? true : _props$prefix,
    _props$dangerouslySet = props.dangerouslySetInnerHTML,
    dangerouslySetInnerHTML = _props$dangerouslySet === void 0 ? '' : _props$dangerouslySet,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (type === 'btn' || 'button' === type) {
    return /*#__PURE__*/React.createElement(_button.default, _extends({
      className: (0, _classnames.default)(prefix ? (0, _prefixVars.default)('lnk-btn') : null, _className, variant ? (0, _prefixVars.default)('lnk') + '-' + variant : '')
    }, defaultProps), children);
  }
  if (type === 'nav-lnk') {
    return /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, _extends({
      to: to,
      className: function className(_ref) {
        var isActive = _ref.isActive;
        return (0, _classnames.default)(prefix ? (0, _prefixVars.default)('lnk') : null, (0, _prefixVars.default)('lnk-nav'), _className, variant ? (0, _prefixVars.default)('lnk') + '-' + variant : '', isActive ? (0, _prefixVars.default)('lnk-active') : undefined);
      }
    }, defaultProps), children);
  }
  if (type === 'router-link') {
    return /*#__PURE__*/React.createElement(_reactRouterDom.Link, _extends({
      className: (0, _classnames.default)(prefix ? (0, _prefixVars.default)('lnk') : null, _className, variant ? (0, _prefixVars.default)('lnk') + '-' + variant : ''),
      to: to
    }, defaultProps), children);
  }
  if (dangerouslySetInnerHTML) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: (0, _classnames.default)(prefix ? (0, _prefixVars.default)('lnk') : null, _className, variant ? (0, _prefixVars.default)('lnk') + '-' + variant : ''),
      dangerouslySetInnerHTML: dangerouslySetInnerHTML
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    className: (0, _classnames.default)(prefix ? (0, _prefixVars.default)('lnk') : null, _className, variant ? (0, _prefixVars.default)('lnk') + '-' + variant : '')
  }, defaultProps), children);
};
var _default = exports.default = AtrcLink;
//# sourceMappingURL=index.js.map