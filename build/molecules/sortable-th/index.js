"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _icons = require("@wordpress/icons");
var _element = require("@wordpress/element");
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _span = _interopRequireDefault(require("../../atoms/span"));
var _link = _interopRequireDefault(require("../../atoms/link"));
var _th = _interopRequireDefault(require("../../atoms/th"));
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*WordPress*/ /*Inbuilt*/ /*Inbuilt*/
/*Local Components and Functions*/
function getIcon(order, isHovered) {
  if (isHovered) {
    return order === 'asc' ? _icons.chevronUp : _icons.chevronDown;
  }
  return order === 'asc' ? _icons.chevronDown : _icons.chevronUp;
}
var AtrcSortableTh = function AtrcSortableTh(_ref) {
  var icon = _ref.icon,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    isActive = _ref.isActive,
    order = _ref.order,
    onOrder = _ref.onOrder,
    _ref$colSpan = _ref.colSpan,
    colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? null : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant;
  var _useState = (0, _element.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  return /*#__PURE__*/React.createElement(_th.default, {
    colSpan: colSpan,
    isSorting: true,
    isSortActive: isActive,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    },
    className: (0, _classnames.default)((0, _prefixVars.default)('sortable-th'), className, variant ? (0, _prefixVars.default)('sortable-th') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(_link.default, {
    type: "btn",
    className: "at-flx at-al-itm-ctr",
    onClick: function onClick() {
      if (order === 'asc') {
        onOrder('desc');
      } else {
        onOrder('asc');
      }
    }
  }, icon && /*#__PURE__*/React.createElement(_icon.default, {
    type: "wp",
    icon: icon
  }), label && /*#__PURE__*/React.createElement(_span.default, null, label), /*#__PURE__*/React.createElement(_icon.default, {
    type: "wp",
    icon: getIcon(order, isHovered)
  })));
};
var _default = exports.default = AtrcSortableTh;
//# sourceMappingURL=index.js.map