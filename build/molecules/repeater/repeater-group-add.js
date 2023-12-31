"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _bs = require("react-icons/bs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WordPress */

/* Atrc */

var AtrcRepeaterGroupAdd = function AtrcRepeaterGroupAdd(props) {
  var addGroup = props.addGroup,
    _props$tooltipText = props.tooltipText,
    tooltipText = _props$tooltipText === void 0 ? (0, _i18n.__)('Add repeater fields', 'atrc-prefix-atrc') : _props$tooltipText,
    _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)('Add repeater fields', 'atrc-prefix-atrc') : _props$label;
  return /*#__PURE__*/React.createElement(_button.default, {
    variant: "add",
    onClick: addGroup,
    className: "at-m"
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: "at-flx at-al-itm-ctr at-gap",
    text: tooltipText
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsPlusSquare
  }), label));
};
var _default = exports.default = AtrcRepeaterGroupAdd;
//# sourceMappingURL=repeater-group-add.js.map