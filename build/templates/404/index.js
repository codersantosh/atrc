"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _bs = require("react-icons/bs");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _word = _interopRequireDefault(require("../../atoms/word"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "variant", "label", "right"];
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var Atrc404 = function Atrc404(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('404'), className, variant ? (0, _prefixVars.default)('404') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-ctnr"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-flx-col', 'at-jfy-cont-ctr', 'at-al-itm-ctr', (0, _prefixVars.default)('404-cont'))
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "h3",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }, "Oops!"), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "h1",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }, "4"), /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-5'), (0, _prefixVars.default)('ml-5'), (0, _prefixVars.default)('404-icon')),
    type: "bootstrap",
    icon: _bs.BsEmojiFrown
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "h1",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }, "4")), /*#__PURE__*/React.createElement(_word.default, {
    tag: "h3",
    variant: "txt-error",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }, "Error Page"), /*#__PURE__*/React.createElement(_word.default, {
    tag: "h2"
  }, "We can't seem to find the page you're looking for"), /*#__PURE__*/React.createElement(_button.default, {
    variant: "primary",
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', (0, _prefixVars.default)('pt-15'), (0, _prefixVars.default)('pb-15'), (0, _prefixVars.default)('pl-40'), (0, _prefixVars.default)('pr-40'))
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-5')),
    type: "bootstrap",
    icon: _bs.BsArrowLeft
  }), "Back"))));
};
var _default = exports.default = Atrc404;
//# sourceMappingURL=index.js.map