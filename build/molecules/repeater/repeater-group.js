"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _bs = require("react-icons/bs");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _header = _interopRequireDefault(require("../../organisms/header"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Prefix*/
/*Local*/
var AtrcRepeaterGroup = function AtrcRepeaterGroup(props) {
  var groupIndex = props.groupIndex,
    deleteGroup = props.deleteGroup,
    children = props.children,
    _props$groupTitle = props.groupTitle,
    groupTitle = _props$groupTitle === void 0 ? (0, _i18n.__)('Repeater fields', 'atrc-prefix-atrc') : _props$groupTitle,
    _props$deleteTitle = props.deleteTitle,
    deleteTitle = _props$deleteTitle === void 0 ? (0, _i18n.__)('Delete repeater fields', 'atrc-prefix-atrc') : _props$deleteTitle;
  var _useState = (0, _element.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    onToggle = _useState2[1];
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('repeater-grp'), 'at-m'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(_header.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('repeater-grp-header'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', 'at-bg-cl', 'at-bdr')
  }, /*#__PURE__*/React.createElement(_label.default, null, groupTitle), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('repeater-grp-actions'), 'at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)('at-p', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "delete-icon",
    onClick: function onClick() {
      return deleteGroup(groupIndex);
    }
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: deleteTitle
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsDashSquare
  }))), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)('at-p', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "dropdown",
    onClick: function onClick() {
      return onToggle(!isOpen);
    }
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: isOpen ? (0, _i18n.__)('Hide fields', 'atrc-prefix-atrc') : (0, _i18n.__)('Show fields', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: 'wp',
    icon: isOpen ? _icons.chevronUp : _icons.chevronDown
  }))))), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('repeater-grp-itms'), 'at-bdr at-bg-cl', isOpen ? '' : 'at-d-non'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('repeater-grp-itms-fields'), 'at-p')
  }, children)));
};
var _default = exports.default = AtrcRepeaterGroup;
//# sourceMappingURL=repeater-group.js.map