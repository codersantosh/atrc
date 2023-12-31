"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*Local*/
var BgAtch = function BgAtch(value, innerOutput, property) {
  if (value.bgAtch) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.bgAtch, ";");
  }
  if (value.smBgAtch) {
    innerOutput.sm += "".concat(property, "      : ").concat(value.smBgAtch, ";");
  }
  if (value.mdBgAtch) {
    innerOutput.md += "".concat(property, "      : ").concat(value.mdBgAtch, ";");
  }
  if (value.lgBgAtch) {
    innerOutput.lg += "".concat(property, "      : ").concat(value.lgBgAtch, ";");
  }
  if (value.xlBgAtch) {
    innerOutput.xl += "".concat(property, "      : ").concat(value.xlBgAtch, ";");
  }
  if (value.xxlBgAtch) {
    innerOutput.xxl += "".concat(property, "      : ").concat(value.xxlBgAtch, ";");
  }
  return innerOutput;
};
var _default = exports.default = BgAtch;
//# sourceMappingURL=attachment.js.map