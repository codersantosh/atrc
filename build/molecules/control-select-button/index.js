"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _resetButtonIcon = _interopRequireDefault(require("../../atoms/reset-button-icon"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _buttonGroup = _interopRequireDefault(require("../button-group"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

/*Inbuilt*/

/*Local Components*/
var RenderTooltipChild = function RenderTooltipChild(_ref) {
  var option = _ref.option;
  if (option.iconType && 'svg' === option.iconType) {
    return /*#__PURE__*/React.createElement(_icon.default, {
      svg: option.icon,
      type: "svg"
    });
  }
  if (option.icon) {
    return /*#__PURE__*/React.createElement(_icon.default, {
      icon: option.icon,
      type: option.iconType || 'wp'
    });
  }
  return option.label;
};
var RenderButtons = function RenderButtons(_ref2) {
  var options = _ref2.options,
    onChange = _ref2.onChange,
    value = _ref2.value;
  if (!options) {
    return null;
  }
  return options.map(function (option) {
    var _option$tooltip = option.tooltip,
      tooltip = _option$tooltip === void 0 ? {
        text: option.label
      } : _option$tooltip;
    return /*#__PURE__*/React.createElement(_button.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('btn-select'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
      onClick: function onClick() {
        return onChange(option.value);
      },
      isActive: option.value === value,
      key: option.value
    }, /*#__PURE__*/React.createElement(_tooltip.default, tooltip, /*#__PURE__*/React.createElement(RenderTooltipChild, {
      option: option
    })));
  });
};
var RenderButtonGroup = function RenderButtonGroup(props) {
  var _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset;
  return /*#__PURE__*/React.createElement(_buttonGroup.default, null, /*#__PURE__*/React.createElement(RenderButtons, {
    options: options,
    onChange: onChange,
    value: value || defaultValue
  }), allowReset ? /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
    defaultValue: defaultValue,
    value: value || defaultValue,
    onClick: function onClick() {
      return onChange(defaultValue);
    }
  }) : null);
};
var AtrcControlSelectButton = function AtrcControlSelectButton(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label;
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-select-btn'), className, variant ? (0, _prefixVars.default)('ctrl-select-btn') + '-' + variant : '')
  }, label ? /*#__PURE__*/React.createElement(_label.default, null, label) : null, /*#__PURE__*/React.createElement(RenderButtonGroup, props));
};
var _default = exports.default = AtrcControlSelectButton;
//# sourceMappingURL=index.js.map