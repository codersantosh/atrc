"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*Local*/
var Top = function Top(value, innerOutput, property) {
  if (value.t) {
    innerOutput.xs += "".concat(property, " : ").concat(value.t, ";");
  }
  if (value.smT) {
    innerOutput.sm += "".concat(property, " : ").concat(value.smT, ";");
  }
  if (value.mdT) {
    innerOutput.md += "".concat(property, " : ").concat(value.mdT, ";");
  }
  if (value.lgT) {
    innerOutput.lg += "".concat(property, " : ").concat(value.lgT, ";");
  }
  if (value.xlT) {
    innerOutput.xl += "".concat(property, " : ").concat(value.xlT, ";");
  }
  if (value.xxlT) {
    innerOutput.xxl += "".concat(property, " : ").concat(value.xxlT, ";");
  }
  return innerOutput;
};
var _default = exports.default = Top;
//# sourceMappingURL=top.js.map