"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _compose = require("@wordpress/compose");
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _columnsLayout = _interopRequireDefault(require("./columns-layout"));
var _excluded = ["label", "instanceId", "value", "columns", "className", "variant", "onChange", "allowedDevices"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/* Local */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AtrcControlColumnsAdvanced = function AtrcControlColumnsAdvanced(props) {
  var label = props.label,
    instanceId = props.instanceId,
    value = props.value,
    columns = props.columns,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var id = "control-advanced-columns-".concat(instanceId);
  return /*#__PURE__*/React.createElement(_columnsLayout.default, _extends({
    id: id,
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-device'), className, variant ? (0, _prefixVars.default)('ctrl-select-device') + '-' + variant : ''),
    label: label,
    value: value,
    onChange: onChange,
    columns: columns
  }, defaultProps));
};
var _default = exports.default = (0, _compose.withInstanceId)(AtrcControlColumnsAdvanced);
//# sourceMappingURL=layout-control.js.map