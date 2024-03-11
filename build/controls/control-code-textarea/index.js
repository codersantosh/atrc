var _excluded = ["label", "className", "variant", "editorValue", "onChange", "editorSettings", "editorNotice"],
  _excluded2 = ["value", "onChange", "editorSettings", "editorNotice"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Value Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef, useCallback } from '@wordpress/element';
import { debounce } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';
import deepmerge from 'deepmerge';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Utils */
import AtrcUseInstanceId from '../../utils/use-instance-id';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcPreTemplate1 from '../../templates/components/pre/template-1';
import AtrcPanelRow from './../../molecules/panel-row/index';

/*Local*/
var EditorNotice = function EditorNotice() {
  if (typeof wp !== 'undefined' && wp.codeEditor) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, null, /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false
  }, __('Add following scripts:', 'atrc-prefix-atrc'), /*#__PURE__*/React.createElement(AtrcPreTemplate1, null, "wp_enqueue_code_editor( array( 'type' => 'text/css' ) ); wp_enqueue_script('wp-theme-plugin-editor'); wp_enqueue_style('wp-codemirror');")));
};
var CodeEditor = function CodeEditor(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    editorValue = props.editorValue,
    onChange = props.onChange,
    editorSettings = props.editorSettings,
    editorNotice = props.editorNotice,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(editorValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    codeMirror = _useState4[0],
    setCodeMirror = _useState4[1];
  var instanceId = AtrcUseInstanceId(CodeEditor, 'control-code-textarea');
  var debouncedOnChange = useRef(debounce(function (val) {
    onChange(val);
  }, 500, {
    leading: true
  }));
  var onChangeHandler = useCallback(function (editor) {
    var val = editor.getValue ? editor.getValue() : editor.target.value;
    setValue(val);
    debouncedOnChange.current(val);
  }, []);

  /*Initialize CodeMirror*/
  useEffect(function () {
    if (typeof wp !== 'undefined' && wp.codeEditor) {
      var _wp$codeEditor = wp.codeEditor,
        defaultSettings = _wp$codeEditor.defaultSettings,
        initialize = _wp$codeEditor.initialize;
      if (initialize) {
        var codeM = initialize(instanceId, deepmerge(defaultSettings, editorSettings));
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
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-code-txt-area'), className, variant ? AtrcPrefix('ctrl-code-txt-area') + '-' + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, editorNotice ? /*#__PURE__*/React.createElement(EditorNotice, null) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, null, /*#__PURE__*/React.createElement("textarea", {
    id: instanceId,
    value: value,
    onChange: onChangeHandler
  })));
};

/* Specialy for WordPress environment, since we are not using npm code mirror */
var AtrcControlCodeTextarea = function AtrcControlCodeTextarea(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$editorSettings = props.editorSettings,
    editorSettings = _props$editorSettings === void 0 ? {
      indentUnit: 2,
      tabSize: 2,
      mode: 'css'
    } : _props$editorSettings,
    _props$editorNotice = props.editorNotice,
    editorNotice = _props$editorNotice === void 0 ? true : _props$editorNotice,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(CodeEditor, _extends({
    editorValue: value,
    onChange: onChange,
    editorSettings: editorSettings,
    editorNotice: editorNotice
  }, defaultProps));
};
export default AtrcControlCodeTextarea;
//# sourceMappingURL=index.js.map