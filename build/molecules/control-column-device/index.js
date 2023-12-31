"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _controlSelectDevice = _interopRequireDefault(require("../control-select-device"));
var _options = _interopRequireDefault(require("./options"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["value", "onChange", "variant", "className"];
/*Value Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
}
* */
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlColumnDevice = function AtrcControlColumnDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_controlSelectDevice.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-col-device'), className, variant ? (0, _prefixVars.default)('ctrl-col-device') + '-' + variant : ''),
    options: _options.default,
    onChange: function onChange(newValue) {
      if (!newValue) {
        _onChange(newValue);
      } else {
        var intValues = {};
        (0, _lodash.map)(newValue, function (item, iDx) {
          intValues[iDx] = parseInt(item);
        });
        _onChange(intValues);
      }
    },
    value: value || {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 4,
      xxl: 4
    },
    toolsPanelItemNormalProps: {
      isShownByDefault: true
    }
  }, defaultProps));
};
var _default = exports.default = AtrcControlColumnDevice;
//# sourceMappingURL=index.js.map