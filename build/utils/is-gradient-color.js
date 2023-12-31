"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcIsLinearGradientColor = AtrcIsLinearGradientColor;
exports.default = AtrcIsGradientColor;
function AtrcIsGradientColor(value) {
  if (!value) {
    return false;
  }
  return value.includes('linear-gradient') || value.includes('radial-gradient') || value.includes('conic-gradient');
}
function AtrcIsLinearGradientColor(value) {
  if (!value) {
    return false;
  }
  return value.includes('linear-gradient');
}
//# sourceMappingURL=is-gradient-color.js.map