"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _reactRte = _interopRequireDefault(require("react-rte"));
var _word = _interopRequireDefault(require("../word"));
var _internalCss = _interopRequireDefault(require("../internal-css"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt*/
/*Local Components*/
var AtrcEditor = function AtrcEditor(props) {
  var label = props.label,
    value = props.value,
    onChange = props.onChange;
  var _useState = (0, _element.useState)(value ? _reactRte.default.createValueFromString(value, 'html') : _reactRte.default.createEmptyValue()),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  (0, _element.useEffect)(function () {
    if (!value) {
      setVal(_reactRte.default.createValueFromString(value, 'html'));
    }
  }, [value]);
  var handleChange = function handleChange(value) {
    setVal(value);
    onChange(value.toString('html'));
  };
  var toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
    INLINE_STYLE_BUTTONS: [{
      label: 'Bold',
      style: 'BOLD'
    }, {
      label: 'Italic',
      style: 'ITALIC'
    }, {
      label: 'Strikethrough',
      style: 'STRIKETHROUGH'
    }, {
      label: 'Monospace',
      style: 'CODE'
    }, {
      label: 'Underline',
      style: 'UNDERLINE'
    }],
    BLOCK_TYPE_BUTTONS: [{
      label: 'UL',
      style: 'unordered-list-item'
    }, {
      label: 'OL',
      style: 'ordered-list-item'
    }, {
      label: 'Blockquote',
      style: 'blockquote'
    }]
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_internalCss.default, null, "\n                        .atrc-rte-editor {\n                            min-height:50px;\n                            .public-DraftEditor-content{\n                                min-height:50px;\n                            }\n                    }\n                        .atrc-rte-toolbar{\n                            button:disabled{\n                                display:none;\n                            }\n                    }\n                    "), /*#__PURE__*/React.createElement(_word.default, null, label), /*#__PURE__*/React.createElement(_reactRte.default, {
    className: classnames((0, _prefixVars.default)('rte')),
    toolbarClassName: classnames((0, _prefixVars.default)('rte-toolbar')),
    editorClassName: classnames((0, _prefixVars.default)('rte-editor'))
    // toolbarClassName='atrc-rte-toolbar'
    // editorClassName='atrc-rte-editor'
    ,
    value: val,
    onChange: handleChange,
    toolbarConfig: toolbarConfig
  }));
};
var _default = exports.default = AtrcEditor;
//# sourceMappingURL=index.js.map