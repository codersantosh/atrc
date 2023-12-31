"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _text = _interopRequireDefault(require("../../atoms/text"));
var _options = require("./options");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["value", "variant", "className", "onChange"];
/*Attributes Structure
Type Object
{
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",
}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlAnimationAnimateCss = function AtrcControlAnimationAnimateCss(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$ani = value.ani,
    ani = _value$ani === void 0 ? '' : _value$ani,
    _value$dla = value.dla,
    dla = _value$dla === void 0 ? '' : _value$dla,
    _value$dur = value.dur,
    dur = _value$dur === void 0 ? '' : _value$dur,
    _value$iter = value.iter,
    iter = _value$iter === void 0 ? '' : _value$iter;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-ani-animate-css'), className, variant ? (0, _prefixVars.default)('ctrl-ani-animate-css') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Animation', 'atrc-prefix-atrc'),
    value: ani,
    options: _options.AnimationOptions,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ani');
    }
  }), /*#__PURE__*/React.createElement(_text.default, {
    label: (0, _i18n.__)('Delay (Seconds)', 'atrc-prefix-atrc'),
    value: dla,
    type: "number",
    min: 0,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'dla');
    }
  }), /*#__PURE__*/React.createElement(_text.default, {
    label: (0, _i18n.__)('Duration (Seconds)', 'atrc-prefix-atrc'),
    value: dur,
    type: "number",
    min: 0,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'dur');
    }
  }), /*#__PURE__*/React.createElement(_text.default, {
    label: (0, _i18n.__)('Iteration', 'atrc-prefix-atrc'),
    value: iter,
    type: "number",
    min: 1,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'iter');
    }
  }));
};
var _default = exports.default = AtrcControlAnimationAnimateCss;
//# sourceMappingURL=index.js.map