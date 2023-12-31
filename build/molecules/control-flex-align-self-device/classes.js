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
var AtrcControlFlexAlignSelfDeviceClasses = function AtrcControlFlexAlignSelfDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.alSlf) {
    return '';
  }
  var alSlf = abStyle.alSlf;
  if (!(0, _lodash.isObject)(alSlf)) return '';
  if ((0, _lodash.isEmpty)(alSlf)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (alSlf[device.name] && ['st', 'end', 'ctr', 'bsln', 'strh'].includes(alSlf[device.name])) {
      if ('xs' === device.name) {
        classes += ' at-al-slf-' + alSlf[device.name] + ' ';
      } else {
        classes += ' at-al-slf-' + device.name + '-' + alSlf[device.name] + ' ';
      }
    }
  }
  return classes;
};
var _default = exports.default = AtrcControlFlexAlignSelfDeviceClasses;
//# sourceMappingURL=classes.js.map