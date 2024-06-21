function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';

/* Local */
export default function AtrcGetGoogleFontsFromUrl(url) {
  if (!url) return [];

  // Extract the query string from the URL
  var queryString = url.split('?')[1];
  if (!queryString) return [];

  // Split the query string into an array of key-value pairs
  var fontPairs = queryString.split('&');
  if (!fontPairs.length) return [];

  // Extract the font family and weight for each key-value pair
  return fontPairs.map(function (pair) {
    // Split the pair into a key and value
    var _pair$split = pair.split('='),
      _pair$split2 = _slicedToArray(_pair$split, 2),
      key = _pair$split2[0],
      value = _pair$split2[1];
    if (key !== 'family') return {};

    // Split the value into a font family and weight string
    var _value$split = value.split(':'),
      _value$split2 = _slicedToArray(_value$split, 2),
      family = _value$split2[0],
      weightString = _value$split2[1];
    if (!family) return {};

    // Extract the weights from the weight string
    var weights = weightString ? weightString.replace('wght@', '').split(';') : [];
    // Convert the weights to a comma-separated string
    weights = weights.join(',');
    return {
      family: family,
      weight: weights
    };
  });
}
//# sourceMappingURL=get-google-fonts-from-url.js.map