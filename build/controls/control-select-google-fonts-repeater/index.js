var _excluded = ["onChange", "value", "label", "apiKey"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/*Molecules*/
import AtrcRepeater from '../../molecules/repeater';
import AtrcRepeaterGroup from '../../molecules/repeater/repeater-group';
import AtrcRepeaterGroupAdd from '../../molecules/repeater/repeater-group-add';

/* Controls */
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