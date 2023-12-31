"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _resetButtonIcon = _interopRequireWildcard(require("../reset-button-icon"));
var _wrap = _interopRequireDefault(require("../wrap"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "variant"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var RenderComponent = function RenderComponent(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-unit-wrp'), className, variant ? (0, _prefixVars.default)('ctrl-unit-wrp') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-unit'))
  }, defaultProps)));
};
var AtrcControlUnit = function AtrcControlUnit(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(_resetButtonIcon.AtrcResetWrap, {
      className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-unit-rst'), 'at-flx-grw-1')
    }, /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
      value: value,
      onClick: function onClick() {
        return onChange(undefined);
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderComponent, props);
};
var _default = exports.default = AtrcControlUnit;
//# sourceMappingURL=index.js.map