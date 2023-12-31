"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcGetGoogleFontsUrl;
function AtrcGetGoogleFontsUrl(googleFontsCollections) {
  var url = googleFontsCollections.filter(function (_ref) {
    var family = _ref.family;
    return !!family;
  }).map(function (_ref2) {
    var family = _ref2.family,
      weight = _ref2.weight;
    return weight ? "family=".concat(family, ":wght@").concat(weight.replace(/,/g, ';')) : "family=".concat(family);
  }).join('&');
  return url ? "https://fonts.googleapis.com/css2?".concat(url) : '';
}
;
//# sourceMappingURL=get-google-fonts-url.js.map