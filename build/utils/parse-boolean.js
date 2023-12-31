"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcParseBoolean;
function AtrcParseBoolean(value) {
  return value === 'false' ? false : Boolean(value);
}
//# sourceMappingURL=parse-boolean.js.map