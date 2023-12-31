"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _wrap = _interopRequireDefault(require("../../../atoms/wrap"));
var _button = _interopRequireDefault(require("../../../atoms/button"));
var _resetButtonIcon = _interopRequireDefault(require("../../../atoms/reset-button-icon"));
var _word = _interopRequireDefault(require("../../../atoms/word"));
var _hr = _interopRequireDefault(require("../../../atoms/hr"));
var _excluded = ["title", "btnProps", "resetBtnProps", "className", "allowHeader"];
/* Library */
/* Inbuilt */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var TitleButton = function TitleButton(props) {
  var title = props.title,
    _props$btnProps = props.btnProps,
    btnProps = _props$btnProps === void 0 ? {} : _props$btnProps,
    _props$resetBtnProps = props.resetBtnProps,
    resetBtnProps = _props$resetBtnProps === void 0 ? {} : _props$resetBtnProps,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowHeader = props.allowHeader,
    allowHeader = _props$allowHeader === void 0 ? '' : _props$allowHeader,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', className ? className : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_word.default, {
    tag: "h5",
    className: (0, _classnames.default)('at-m')
  }, title), /*#__PURE__*/React.createElement(_wrap.default, null, /*#__PURE__*/React.createElement(_button.default, _extends({
    variant: "primary"
  }, btnProps)), !(0, _lodash.isEmpty)(resetBtnProps) && /*#__PURE__*/React.createElement(_resetButtonIcon.default, _extends({}, resetBtnProps, {
    value: true
  })))), /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)('at-m')
  }));
};
var _default = exports.default = TitleButton;
//# sourceMappingURL=index.js.map