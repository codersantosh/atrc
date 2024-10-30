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
import React from 'react';

/* WordPress */
import { useState, useEffect, useMemo } from '@wordpress/element';
import { select } from '@wordpress/data';
import { useSetting } from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';

/* Library */
import { isEmpty } from 'lodash';

/* Local */
export function AtrcUseColorSolids() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$useCSSVariable = props.useCSSVariables,
    useCSSVariables = _props$useCSSVariable === void 0 ? false : _props$useCSSVariable;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    allSolids = _useState2[0],
    setAllSolids = _useState2[1];
  var userPalette = useSetting('color.palette.custom');
  var themePalette = useSetting('color.palette.theme');
  var defaultPalette = useSetting('color.palette.default');
  var shouldDisplayDefaultColors = useSetting('color.defaultPalette');
  return useMemo(function () {
    var themePalatteSolids = [];
    var defaultPaletteSolids = [];
    var userPaletteSolids = [];
    if (themePalette) {
      if (useCSSVariables) {
        themePalatteSolids = themePalette.map(function (themeColor) {
          return {
            name: themeColor.name,
            color: "var(--wp--preset--color--".concat(themeColor.slug, ")")
          };
        });
      } else {
        themePalatteSolids = _toConsumableArray(themePalette);
      }
    }
    if (defaultPalette) {
      if (useCSSVariables) {
        defaultPaletteSolids = defaultPalette.map(function (themeColor) {
          return {
            name: themeColor.name,
            color: "var(--wp--preset--color--".concat(themeColor.slug, ")")
          };
        });
      } else {
        defaultPaletteSolids = _toConsumableArray(defaultPalette);
      }
    }
    if (userPalette) {
      if (useCSSVariables) {
        userPaletteSolids = userPalette.map(function (themeColor) {
          return {
            name: themeColor.name,
            color: "var(--wp--preset--color--".concat(themeColor.slug, ")")
          };
        });
      } else {
        userPaletteSolids = _toConsumableArray(userPalette);
      }
    }
    var result = [];
    if (themePalatteSolids && themePalatteSolids.length) {
      result.push({
        name: _x('Theme', 'Indicates this palette comes from the theme.', 'atrc-prefix-atrc'),
        colors: themePalatteSolids
      });
    }
    if (shouldDisplayDefaultColors && defaultPaletteSolids && defaultPaletteSolids.length) {
      result.push({
        name: _x('Default', 'Indicates this palette comes from WordPress.', 'atrc-prefix-atrc'),
        colors: defaultPaletteSolids
      });
    }
    if (userPaletteSolids && userPaletteSolids.length) {
      result.push({
        name: _x('Custom', 'Indicates this palette is created by the user.', 'atrc-prefix-atrc'),
        colors: userPaletteSolids
      });
    }
    return result;
  }, [userPalette, themePalette, defaultPalette, shouldDisplayDefaultColors]);
}
export function AtrcUseColorGradients() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$useCSSVariable2 = props.useCSSVariables,
    useCSSVariables = _props$useCSSVariable2 === void 0 ? true : _props$useCSSVariable2;
  var userGradientPalette = useSetting('color.gradients.custom');
  var themeGradientPalette = useSetting('color.gradients.theme');
  var defaultGradientPalette = useSetting('color.gradients.default');
  var shouldDisplayDefaultGradients = useSetting('color.defaultGradients');
  return useMemo(function () {
    var themeGradientSolids = [];
    var defaultGradientSolids = [];
    var userGradientSolids = [];
    if (themeGradientPalette) {
      if (useCSSVariables) {
        themeGradientSolids = themeGradientPalette.map(function (gradient) {
          return {
            name: gradient.name,
            gradient: "var(--wp--preset--gradient--".concat(gradient.slug, ")")
          };
        });
      } else {
        themeGradientSolids = _toConsumableArray(themeGradientPalette);
      }
    }
    if (defaultGradientPalette) {
      if (useCSSVariables) {
        defaultGradientSolids = defaultGradientPalette.map(function (gradient) {
          return {
            name: gradient.name,
            gradient: "var(--wp--preset--gradient--".concat(gradient.slug, ")")
          };
        });
      } else {
        defaultGradientSolids = _toConsumableArray(defaultGradientPalette);
      }
    }
    if (userGradientPalette) {
      if (useCSSVariables) {
        userGradientSolids = userGradientPalette.map(function (gradient) {
          return {
            name: gradient.name,
            gradient: "var(--wp--preset--gradient--".concat(gradient.slug, ")")
          };
        });
      } else {
        userGradientSolids = _toConsumableArray(userGradientPalette);
      }
    }
    var result = [];
    if (themeGradientSolids && themeGradientSolids.length) {
      result.push({
        name: _x('Theme', 'Indicates this gradient comes from the theme.', 'atrc-prefix-atrc'),
        gradients: themeGradientSolids
      });
    }
    if (shouldDisplayDefaultGradients && defaultGradientSolids && defaultGradientSolids.length) {
      result.push({
        name: _x('Default', 'Indicates this gradient comes from WordPress.', 'atrc-prefix-atrc'),
        gradients: defaultGradientSolids
      });
    }
    if (userGradientSolids && userGradientSolids.length) {
      result.push({
        name: _x('Custom', 'Indicates this gradient is created by the user.', 'atrc-prefix-atrc'),
        gradients: userGradientSolids
      });
    }
    return result;
  }, [userGradientPalette, themeGradientPalette, defaultGradientPalette, shouldDisplayDefaultGradients, useCSSVariables]);
}
var AtrcUseColors = function AtrcUseColors() {
  var allSolids = AtrcUseColorSolids();
  var allGradients = AtrcUseColorGradients();
  return {
    allSolids: allSolids,
    allGradients: allGradients
  };
};
export default AtrcUseColors;
//# sourceMappingURL=use-colors.js.map