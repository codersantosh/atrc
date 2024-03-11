function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*Value Structure
Type object
{
data-title: 'my-title'
}
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, Fragment } from '@wordpress/element';

/** Libraries */
import classnames from 'classnames';
import { escape, map } from 'lodash';

/* Controls */
import AtrcControlText from '../control-text';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcNotice from '../../molecules/notice';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlCustomAttributes = function AtrcControlCustomAttributes(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Custom attributes', 'atrc-prefix-atrc') : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$notAllowedAttr = props.notAllowedAttributes,
    notAllowedAttributes = _props$notAllowedAttr === void 0 ? [] : _props$notAllowedAttr,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _useState = useState(Object.entries(value).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        val = _ref2[1];
      return "".concat(name, "='").concat(val, "'");
    }).join(' ')),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var handleBlur = function handleBlur() {
    if (!inputValue) {
      _onChange({});
      return;
    }
    var attributeRegex = /\b([\w-]+?)=['"](.+?)['"]|\b([\w-]+?)=['](.+?)[']|\b([\w-]+)/g;
    var updatedAttributes = {};
    var duplicateAttributes = [];
    var disallowedAttributes = [];
    var matches = [];
    var match;
    while (match = attributeRegex.exec(inputValue)) {
      matches.push(match);
    }

    // eslint-disable-next-line no-unused-vars
    for (var _i = 0, _matches = matches; _i < _matches.length; _i++) {
      var _matches$_i = _slicedToArray(_matches[_i], 6),
        fullMatch = _matches$_i[0],
        name = _matches$_i[1],
        value1 = _matches$_i[2],
        name2 = _matches$_i[3],
        value2 = _matches$_i[4],
        name3 = _matches$_i[5];
      var attributeName = void 0;
      var attributeValue = void 0;
      if (name2 || name3) {
        attributeName = escape(name2 || name3);
        attributeValue = escape(value2 || true);
      } else {
        attributeName = escape(name);
        attributeValue = escape(value1);
      }
      if (attributeName) {
        if (notAllowedAttributes.includes(attributeName)) {
          disallowedAttributes.push(attributeName);
        } else if (updatedAttributes[attributeName]) {
          duplicateAttributes.push(attributeName);
        } else {
          updatedAttributes[attributeName] = attributeValue;
        }
      }
    }
    if (matches.length === 0) {
      setError('Invalid attribute(s)');
    } else if (duplicateAttributes.length > 0) {
      setError("Attribute(s) \"".concat(duplicateAttributes.join(', '), "\" are used more than once"));
    } else if (disallowedAttributes.length > 0) {
      setError("Attribute(s) \"".concat(disallowedAttributes.join(', '), "\" are not allowed"));
    } else {
      setError('');
    }
    _onChange(updatedAttributes);
  };
  var AttributesTabs = [{
    name: 'attributes',
    title: label,
    hasValue: value && value.length,
    onDeselect: function onDeselect() {
      return _onChange({});
    }
  }];
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-cust-attrib'), className, variant ? AtrcPrefix('ctrl-cust-attrib') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return _onChange({});
    },
    tools: AttributesTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcControlText, {
        label: label,
        value: inputValue,
        onBlur: handleBlur,
        onChange: function onChange(newVal) {
          if (undefined === newVal || '' === newVal || null === newVal) {
            _onChange({});
            setInputValue('');
          } else {
            setInputValue(newVal);
          }
        },
        help: /*#__PURE__*/React.createElement(React.Fragment, null, __('You can type in custom HTML attributes for this block in the field above.', 'atrc-prefix-atrc'), "\xA0", __('Example:', 'atrc-prefix-atrc'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", null, "data-title=\"my-title\""), /*#__PURE__*/React.createElement("br", null), __("If the attributes are already present on the blocks it wouldn't apply.", 'atrc-prefix-atrc'))
      }), error && /*#__PURE__*/React.createElement(AtrcNotice, {
        isDismissible: false,
        autoDismiss: false,
        status: "warning"
      }, error));
    });
  });
};
export default AtrcControlCustomAttributes;
//# sourceMappingURL=index.js.map