"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcIsNumeric;
function AtrcIsNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//# sourceMappingURL=is-numeric.js.map