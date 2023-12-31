"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcAddTextObjectKey;
var _lodash = require("lodash");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); } /*Library*/
/*Local*/
function AtrcAddTextObjectKey(obj) {
  var addText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (_typeof(obj) !== 'object') {
    console.error('The first argument must be an object');
    return obj;
  }
  if (typeof addText !== 'string') {
    console.error('The second argument must be a string');
    return obj;
  }
  if (!addText) {
    return obj;
  }
  return (0, _lodash.mapKeys)(obj, function (value, key) {
    return key + addText;
  });
}
//# sourceMappingURL=add-text-object-key.js.map