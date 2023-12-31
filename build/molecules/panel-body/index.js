"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["children", "className", "variant", "bodyProps"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Component*/
var AtrcPanelBody = function AtrcPanelBody(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$bodyProps = props.bodyProps,
    bodyProps = _props$bodyProps === void 0 ? {} : _props$bodyProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_components.PanelBody, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('pnl-body'), className, defaultProps.variant ? null : 'at-m at-p at-bdr', variant ? (0, _prefixVars.default)('pnl-body') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_wrap.default, _extends({}, bodyProps, {
    className: (0, _classnames.default)((0, _prefixVars.default)('pnl-body-cont'), bodyProps.variant ? null : 'at-p at-bg-cl at-bdr', bodyProps.className ? bodyProps.className : null)
  }), children));
};
var _default = exports.default = AtrcPanelBody;
//# sourceMappingURL=index.js.map