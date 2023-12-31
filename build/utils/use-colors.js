"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcUseColorGradients = AtrcUseColorGradients;
exports.AtrcUseColorSolids = AtrcUseColorSolids;
exports.default = void 0;
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _lodash = require("lodash");
var _blockEditor = require("@wordpress/block-editor");
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
var DefaultColors = {
  colors: [{
    color: 'var(#{$varPrefix}-white)fff',
    name: 'Base',
    slug: 'base'
  }, {
    color: '#000000',
    name: 'Contrast',
    slug: 'contrast'
  }, {
    color: '#9DFF20',
    name: 'Primary',
    slug: 'primary'
  }, {
    color: '#345C00',
    name: 'Secondary',
    slug: 'secondary'
  }, {
    color: '#F6F6F6',
    name: 'Tertiary',
    slug: 'tertiary'
  }],
  gradients: [{
    slug: 'vertical-secondary-to-tertiary',
    gradient: 'linear-gradient(to bottom,var(--wp--preset--color--secondary) 0%,var(--wp--preset--color--tertiary) 100%)',
    name: 'Vertical secondary to tertiary'
  }, {
    slug: 'vertical-secondary-to-background',
    gradient: 'linear-gradient(to bottom,var(--wp--preset--color--secondary) 0%,var(--wp--preset--color--background) 100%)',
    name: 'Vertical secondary to background'
  }, {
    slug: 'vertical-tertiary-to-background',
    gradient: 'linear-gradient(to bottom,var(--wp--preset--color--tertiary) 0%,var(--wp--preset--color--background) 100%)',
    name: 'Vertical tertiary to background'
  }, {
    slug: 'diagonal-primary-to-foreground',
    gradient: 'linear-gradient(to bottom right,var(--wp--preset--color--primary) 0%,var(--wp--preset--color--foreground) 100%)',
    name: 'Diagonal primary to foreground'
  }, {
    slug: 'diagonal-secondary-to-background',
    gradient: 'linear-gradient(to bottom right,var(--wp--preset--color--secondary) 50%,var(--wp--preset--color--background) 50%)',
    name: 'Diagonal secondary to background'
  }, {
    slug: 'diagonal-background-to-secondary',
    gradient: 'linear-gradient(to bottom right,var(--wp--preset--color--background) 50%,var(--wp--preset--color--secondary) 50%)',
    name: 'Diagonal background to secondary'
  }, {
    slug: 'diagonal-tertiary-to-background',
    gradient: 'linear-gradient(to bottom right,var(--wp--preset--color--tertiary) 50%,var(--wp--preset--color--background) 50%)',
    name: 'Diagonal tertiary to background'
  }, {
    slug: 'diagonal-background-to-tertiary',
    gradient: 'linear-gradient(to bottom right,var(--wp--preset--color--background) 50%,var(--wp--preset--color--tertiary) 50%)',
    name: 'Diagonal background to tertiary'
  }]
};
function AtrcUseColorSolids() {
  var _useState = (0, _element.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    allSolids = _useState2[0],
    setAllSolids = _useState2[1];
  var userPalette = (0, _blockEditor.useSetting)('color.palette.custom');
  var themePalette = (0, _blockEditor.useSetting)('color.palette.theme');
  var defaultPalette = (0, _blockEditor.useSetting)('color.palette.default');
  (0, _element.useEffect)(function () {
    var solids = [].concat(_toConsumableArray(userPalette || []), _toConsumableArray(themePalette || []), _toConsumableArray(defaultPalette || []));
    if ((0, _lodash.isEmpty)(solids)) {
      solids = (0, _data.select)('core/block-editor').getSettings().colors;
    }
    if ((0, _lodash.isEmpty)(solids)) {
      solids = _toConsumableArray(DefaultColors.colors);
    }
    setAllSolids(solids);
  }, [userPalette, themePalette, defaultPalette]);
  return allSolids;
}
function AtrcUseColorGradients() {
  var _useState3 = (0, _element.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    allGradients = _useState4[0],
    setAllGradients = _useState4[1];
  var userGradientPalette = (0, _blockEditor.useSetting)('color.gradients.custom');
  var themeGradientPalette = (0, _blockEditor.useSetting)('color.gradients.theme');
  var defaultGradientPalette = (0, _blockEditor.useSetting)('color.gradients.default');
  (0, _element.useEffect)(function () {
    var gradientsColor = [].concat(_toConsumableArray(userGradientPalette || []), _toConsumableArray(themeGradientPalette || []), _toConsumableArray(defaultGradientPalette || []));
    if ((0, _lodash.isEmpty)(gradientsColor)) {
      gradientsColor = (0, _data.select)('core/block-editor').getSettings().gradients;
    }
    if ((0, _lodash.isEmpty)(gradientsColor)) {
      gradientsColor = _toConsumableArray(DefaultColors.gradients);
    }
    setAllGradients(gradientsColor);
  }, [userGradientPalette, themeGradientPalette, defaultGradientPalette]);
  return allGradients;
}
var AtrcUseColors = function AtrcUseColors() {
  var allSolids = AtrcUseColorSolids();
  var allGradients = AtrcUseColorGradients();
  return {
    allSolids: allSolids,
    allGradients: allGradients
  };
};
var _default = exports.default = AtrcUseColors;
//# sourceMappingURL=use-colors.js.map