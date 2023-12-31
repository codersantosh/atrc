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
var AtrcControlFlexJustifyContentDeviceClasses = function AtrcControlFlexJustifyContentDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.jfyCont) {
    return '';
  }
  var jfyCont = abStyle.jfyCont;
  if (!(0, _lodash.isObject)(jfyCont)) return '';
  if ((0, _lodash.isEmpty)(jfyCont)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (jfyCont[device.name] && ['st', 'end', 'ctr', 'btw', 'ard', 'evnly'].includes(jfyCont[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-jfy-cont-' + jfyCont[device.name] + ' ';
      } else {
        classes += ' at-jfy-cont-' + device.name + '-' + jfyCont[device.name] + ' ';
      }
    }
  }
  return classes;
};
var _default = exports.default = AtrcControlFlexJustifyContentDeviceClasses;
//# sourceMappingURL=classes.js.map