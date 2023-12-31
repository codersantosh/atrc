"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*Local*/
var Right = function Right(value, innerOutput, property) {
  if (value.r) {
    innerOutput.xs += "".concat(property, " : ").concat(value.r, ";");
  }
  if (value.smR) {
    innerOutput.sm += "".concat(property, " : ").concat(value.smR, ";");
  }
  if (value.mdR) {
    innerOutput.md += "".concat(property, " : ").concat(value.mdR, ";");
  }
  if (value.lgR) {
    innerOutput.lg += "".concat(property, " : ").concat(value.lgR, ";");
  }
  if (value.xlR) {
    innerOutput.xl += "".concat(property, " : ").concat(value.xlR, ";");
  }
  if (value.xxlR) {
    innerOutput.xxl += "".concat(property, " : ").concat(value.xxlR, ";");
  }
  return innerOutput;
};
var _default = exports.default = Right;
//# sourceMappingURL=right.js.map