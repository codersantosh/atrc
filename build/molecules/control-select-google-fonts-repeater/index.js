var _excluded = ["onChange", "value", "label", "apiKey"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/*Inbuilt*/
import AtrcRepeater from '../repeater';
import AtrcRepeaterGroup from '../repeater/repeater-group';
import AtrcRepeaterGroupAdd from '../repeater/repeater-group-add';
import AtrcControlSelectGoogleFonts from '../control-select-google-fonts';

/*Local*/
var AtrcControlSelectGoogleFontsRepeater = function AtrcControlSelectGoogleFontsRepeater(props) {
  var onChange = props.onChange,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$apiKey = props.apiKey,
    apiKey = _props$apiKey === void 0 ? '' : _props$apiKey,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    fonts = _useState2[0],
    setFonts = _useState2[1];
  var setFont = function setFont(newVal, iDx) {
    var updatedFonts = _toConsumableArray(fonts);
    updatedFonts[iDx] = newVal;
    setFonts(updatedFonts);
    onChange(updatedFonts);
  };
  var removeFont = function removeFont(iDx) {
    var updatedFonts = _toConsumableArray(fonts);
    updatedFonts.splice(iDx, 1);
    setFonts(updatedFonts);
    onChange(updatedFonts);
  };
  return /*#__PURE__*/React.createElement(AtrcRepeater, _extends({
    label: label,
    groups: function groups() {
      return fonts.map(function (font, iDx) {
        return /*#__PURE__*/React.createElement(AtrcRepeaterGroup, {
          groupIndex: iDx,
          deleteGroup: removeFont,
          groupTitle: __('Google font', 'atrc-prefix-atrc'),
          deleteTitle: __('Remove font', 'atrc-prefix-atrc'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlSelectGoogleFonts, {
          apiKey: apiKey,
          value: font,
          onChange: function onChange(newVal) {
            return setFont(newVal, iDx);
          }
        }));
      });
    },
    addGroup: function addGroup() {
      return /*#__PURE__*/React.createElement(AtrcRepeaterGroupAdd, {
        addGroup: function addGroup() {
          return setFonts([].concat(_toConsumableArray(fonts), [{}]));
        },
        tooltipText: __('Add Google font', 'atrc-prefix-atrc'),
        label: __('Add Google font', 'atrc-prefix-atrc')
      });
    }
  }, defaultProps));
};
export default AtrcControlSelectGoogleFontsRepeater;
//# sourceMappingURL=index.js.map