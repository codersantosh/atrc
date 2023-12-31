"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

/*Local*/
var AtrcControlTextAlignClasses = function AtrcControlTextAlignClasses(abStyle) {
  if (!abStyle || !abStyle.txtAl) {
    return '';
  }
  var textAlign = abStyle.txtAl;
  if (!(0, _lodash.isObject)(textAlign)) return '';
  if ((0, _lodash.isEmpty)(textAlign)) return '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (textAlign[device.name]) {
      return 'at-txt-al';
    }
  }
  return '';
};
var _default = exports.default = AtrcControlTextAlignClasses;
//# sourceMappingURL=classes.js.map