var _excluded = ["label", "className", "variant", "editorValue", "onChange", "editorSettings", "editorNotice"],
  _excluded2 = ["value", "onChange", "editorSettings", "editorNotice"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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
var _CodeEditor = function CodeEditor(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$editorValue = props.editorValue,
    editorValue = _props$editorValue === void 0 ? '' : _props$editorValue,
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
  var instanceId = AtrcUseInstanceId(_CodeEditor, 'control-code-textarea');
  var textareaRef = useRef(null);
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

  /* Initialize CodeMirror */
  useEffect(function () {
    if (typeof wp !== 'undefined' && wp.codeEditor && textareaRef.current) {
      var _wp$codeEditor = wp.codeEditor,
        defaultSettings = _wp$codeEditor.defaultSettings,
        initialize = _wp$codeEditor.initialize;
      if (initialize) {
        var codeM = initialize(textareaRef.current, deepmerge(defaultSettings, editorSettings));
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
    ref: textareaRef,
    id: instanceId,
    value: value,
    onChange: onChangeHandler
  })));
};
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
  return /*#__PURE__*/React.createElement(_CodeEditor, _extends({
    editorValue: value,
    onChange: onChange,
    editorSettings: editorSettings,
    editorNotice: editorNotice
  }, defaultProps));
};
export default AtrcControlCodeTextarea;
//# sourceMappingURL=index.js.map