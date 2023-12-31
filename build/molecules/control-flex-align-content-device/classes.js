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
var AtrcControlFlexAlignContentDeviceClasses = function AtrcControlFlexAlignContentDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.alCont) {
    return '';
  }
  var alCont = abStyle.alCont;
  if (!(0, _lodash.isObject)(alCont)) return '';
  if ((0, _lodash.isEmpty)(alCont)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (alCont[device.name] && ['st', 'end', 'ctr', 'btw', 'ard', 'strh'].includes(alCont[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-cont-' + alCont[device.name] + ' ';
      } else {
        classes += ' at-al-cont-' + device.name + '-' + alCont[device.name] + ' ';
      }
    }
  }
  return classes;
};
var _default = exports.default = AtrcControlFlexAlignContentDeviceClasses;
//# sourceMappingURL=classes.js.map