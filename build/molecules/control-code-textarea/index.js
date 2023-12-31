"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _compose = require("@wordpress/compose");
var _lodash = require("lodash");
var _classnames = _interopRequireDefault(require("classnames"));
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _notice = _interopRequireDefault(require("../notice"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*Value Structure
Type string
**/ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Prefix*/
/*Local*/
var CodeEditor = function CodeEditor(_ref) {
  var editorValue = _ref.editorValue,
    onChange = _ref.onChange,
    editorSettings = _ref.editorSettings;
  var _useState = (0, _element.useState)(editorValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _element.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    codeMirror = _useState4[0],
    setCodeMirror = _useState4[1];
  var instanceId = (0, _compose.useInstanceId)(CodeEditor, 'atrc-control-code-textarea');
  var debouncedOnChange = (0, _element.useRef)((0, _compose.debounce)(function (val) {
    onChange(val);
  }, 500, {
    leading: true
  }));
  var onChangeHandler = (0, _element.useCallback)(function (editor) {
    var val = editor.getValue ? editor.getValue() : editor;
    setValue(val);
    debouncedOnChange.current(val);
  }, []);

  /*Initialize CodeMirror*/
  (0, _element.useEffect)(function () {
    if (typeof wp !== 'undefined' && wp.codeEditor) {
      var _wp$codeEditor = wp.codeEditor,
        defaultSettings = _wp$codeEditor.defaultSettings,
        initialize = _wp$codeEditor.initialize;
      if (initialize) {
        var codeM = initialize(instanceId, (0, _deepmerge.default)(defaultSettings, editorSettings));
        setCodeMirror(codeM);
        codeM.codemirror.on('change', onChangeHandler);
      }
      return function () {
        var _debouncedOnChange$cu;
        debouncedOnChange === null || debouncedOnChange === void 0 || (_debouncedOnChange$cu = debouncedOnChange.current) === null || _debouncedOnChange$cu === void 0 || _debouncedOnChange$cu.cancel();
        codeMirror === null || codeMirror === void 0 || codeMirror.codemirror.off('change', onChangeHandler);
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement("textarea", {
    className: (0, _classnames.default)((0, _prefixVars.default)('control-code-textarea')),
    id: instanceId,
    value: value,
    onChange: onChangeHandler
  });
};
var AtrcControlCodeTextarea = function AtrcControlCodeTextarea(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$notice = props.notice,
    notice = _props$notice === void 0 ? true : _props$notice;
  var CodeTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'code',
      title: label,
      hasValue: !!value,
      onDeselect: function onDeselect() {
        return onChange('');
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-code-txt-area'), className, variant ? (0, _prefixVars.default)('ctrl-code-txt-area') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange('');
    },
    tools: CodeTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(_element.Fragment, {
        key: iDx
      }, /*#__PURE__*/React.createElement(CodeEditor, {
        editorValue: value,
        onChange: onChange,
        editorSettings: {
          indentUnit: 2,
          tabSize: 2,
          mode: 'css'
        }
      }), notice && /*#__PURE__*/React.createElement(_notice.default, {
        isDismissible: false,
        autoDismiss: false,
        status: "info"
      }, /*#__PURE__*/React.createElement(_wrap.default, {
        dangerouslySetInnerHTML: {
          __html: (0, _i18n.sprintf)(
          // translators: %1$s: placeholder for code block, %2$s: placeholder for code with {{abBlock}}, %3$s: placeholder for code with ab-unique-class
          (0, _i18n.__)('You can use the unique selector of the block using %1$s. eg: %2$s will be replaced with %3$s.', 'atrc-prefix-atrc'), '<br /><code>{{abBlock}}</code>', '<br /><code>{{abBlock}}{color:yellow}</code><br />', '<br /><code>.ab-unique-class{color:yellow}</code>')
        }
      })));
    });
  });
};
var _default = exports.default = AtrcControlCodeTextarea;
//# sourceMappingURL=index.js.map