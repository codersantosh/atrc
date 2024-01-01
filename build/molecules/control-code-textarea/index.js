function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*Value Structure
Type string
**/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useState, useMemo, useRef, useCallback, Fragment } from '@wordpress/element';
import { debounce } from '@wordpress/compose';

/*Library*/
import { map, random } from 'lodash';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcPanelTools from '../panel-tools';
import AtrcNotice from '../notice';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcUniqueID from './../../utils/unique-id';

/*Local*/
var CodeEditor = function CodeEditor(_ref) {
  var editorValue = _ref.editorValue,
    onChange = _ref.onChange,
    editorSettings = _ref.editorSettings;
  var _useState = useState(editorValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    codeMirror = _useState4[0],
    setCodeMirror = _useState4[1];
  var instanceId = AtrcUniqueID() + random(0, 9);
  var debouncedOnChange = useRef(debounce(function (val) {
    onChange(val);
  }, 500, {
    leading: true
  }));
  var onChangeHandler = useCallback(function (editor) {
    var val = editor.getValue ? editor.getValue() : editor;
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
  return /*#__PURE__*/React.createElement("textarea", {
    className: classnames(AtrcPrefix('control-code-textarea')),
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
  var CodeTabs = useMemo(function () {
    return [{
      name: 'code',
      title: label,
      hasValue: !!value,
      onDeselect: function onDeselect() {
        return onChange('');
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-code-txt-area'), className, variant ? AtrcPrefix('ctrl-code-txt-area') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange('');
    },
    tools: CodeTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: iDx
      }, /*#__PURE__*/React.createElement(CodeEditor, {
        editorValue: value,
        onChange: onChange,
        editorSettings: {
          indentUnit: 2,
          tabSize: 2,
          mode: 'css'
        }
      }), notice && /*#__PURE__*/React.createElement(AtrcNotice, {
        isDismissible: false,
        autoDismiss: false,
        status: "info"
      }, /*#__PURE__*/React.createElement(AtrcWrap, {
        dangerouslySetInnerHTML: {
          __html: sprintf(
          // translators: %1$s: placeholder for code block, %2$s: placeholder for code with {{abBlock}}, %3$s: placeholder for code with ab-unique-class
          __('You can use the unique selector of the block using %1$s. eg: %2$s will be replaced with %3$s.', 'atrc-prefix-atrc'), '<br /><code>{{abBlock}}</code>', '<br /><code>{{abBlock}}{color:yellow}</code><br />', '<br /><code>.ab-unique-class{color:yellow}</code>')
        }
      })));
    });
  });
};
export default AtrcControlCodeTextarea;
//# sourceMappingURL=index.js.map