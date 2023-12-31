"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*Local*/
var BgBlendMode = function BgBlendMode(value, innerOutput, property) {
  if (value.bgBlendMode) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.bgBlendMode, ";");
  }
  return innerOutput;
};
var _default = exports.default = BgBlendMode;
//# sourceMappingURL=blend-mode.js.map