"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _word = _interopRequireDefault(require("../../atoms/word"));
var _modal = _interopRequireDefault(require("../modal"));
var _buttonGroup = _interopRequireDefault(require("../button-group"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _bs = require("react-icons/bs");
var _excluded = ["className", "variant", "onCancel", "isOpen", "onConfirm", "confirm", "title", "help"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcModalConfirm = function AtrcModalConfirm(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onCancel = props.onCancel,
    onCancel = _props$onCancel === void 0 ? '' : _props$onCancel,
    _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
    _props$onConfirm = props.onConfirm,
    onConfirm = _props$onConfirm === void 0 ? '' : _props$onConfirm,
    _props$confirm = props.confirm,
    confirm = _props$confirm === void 0 ? (0, _i18n.__)('Delete', 'atrc-prefix-atrc') : _props$confirm,
    _props$title = props.title,
    title = _props$title === void 0 ? (0, _i18n.__)('Are you sure?', 'atrc-prefix-atrc') : _props$title,
    _props$help = props.help,
    help = _props$help === void 0 ? (0, _i18n.__)('This action cannot be undone!', 'atrc-prefix-atrc') : _props$help,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _element.useState)(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  function close() {
    onCancel();
  }
  (0, _element.useEffect)(function () {
    setIsShow(isOpen);
  }, [isOpen]);
  if (isShow) {
    return /*#__PURE__*/React.createElement(_modal.default, _extends({}, defaultProps, {
      onRequestClose: close,
      className: (0, _classnames.default)((0, _prefixVars.default)('modal-confirm'), className || '', variant ? (0, _prefixVars.default)('modal-confirm') + '-' + variant : '')
    }), /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('modal-confirm-body'), 'at-p')
    }, /*#__PURE__*/React.createElement(_icon.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('modal-confirm-icon'), 'at-m', 'at-cl'),
      type: "bootstrap",
      icon: _bs.BsExclamationCircle
    }), /*#__PURE__*/React.createElement(_word.default, {
      tag: "h4",
      className: (0, _classnames.default)('at-m')
    }, title), /*#__PURE__*/React.createElement(_word.default, {
      tag: "p",
      className: (0, _classnames.default)((0, _prefixVars.default)('mt-0'))
    }, help)), /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('modal-confirm-footer'), 'at-p')
    }, /*#__PURE__*/React.createElement(_buttonGroup.default, null, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return close();
      },
      className: (0, _classnames.default)('at-p', 'at-flx-grw-1')
    }, (0, _i18n.__)('Cancel', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onConfirm();
      },
      variant: "delete",
      className: (0, _classnames.default)('at-p', 'at-flx-grw-1')
    }, confirm))));
  }
  return null;
};
var _default = exports.default = AtrcModalConfirm;
//# sourceMappingURL=index.js.map