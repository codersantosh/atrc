function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*WordPress*/
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import RichTextEditor from 'react-rte';

/*Inbuilt*/
import AtrcWord from '../word';
import AtrcInternalCss from '../internal-css';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcEditor = function AtrcEditor(props) {
  var label = props.label,
    value = props.value,
    onChange = props.onChange;
  var _useState = useState(value ? RichTextEditor.createValueFromString(value, 'html') : RichTextEditor.createEmptyValue()),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  useEffect(function () {
    if (!value) {
      setVal(RichTextEditor.createValueFromString(value, 'html'));
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcInternalCss, null, "\n                        .atrc-rte-editor {\n                            min-height:50px;\n                            .public-DraftEditor-content{\n                                min-height:50px;\n                            }\n                    }\n                        .atrc-rte-toolbar{\n                            button:disabled{\n                                display:none;\n                            }\n                    }\n                    "), /*#__PURE__*/React.createElement(AtrcWord, null, label), /*#__PURE__*/React.createElement(RichTextEditor, {
    className: classnames(AtrcPrefix('rte')),
    toolbarClassName: classnames(AtrcPrefix('rte-toolbar')),
    editorClassName: classnames(AtrcPrefix('rte-editor'))
    // toolbarClassName='atrc-rte-toolbar'
    // editorClassName='atrc-rte-editor'
    ,
    value: val,
    onChange: handleChange,
    toolbarConfig: toolbarConfig
  }));
};
export default AtrcEditor;
//# sourceMappingURL=index.js.map