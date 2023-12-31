"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlFlexShrinkDeviceClasses = exports.AtrcControlFlexNoWrapDeviceClasses = exports.AtrcControlFlexGrowDeviceClasses = exports.AtrcControlFlexFillDeviceClasses = void 0;
var _lodash = require("lodash");
var _availableDevices = _interopRequireDefault(require("../../utils/available-devices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

/*Local*/
var AtrcControlFlexDirectionDeviceClasses = function AtrcControlFlexDirectionDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxDir) {
    return '';
  }
  var flxDir = abStyle.flxDir;
  if (!(0, _lodash.isObject)(flxDir)) return '';
  if ((0, _lodash.isEmpty)(flxDir)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if ('xs' === device.name) {
      if (flxDir[device.name]) {
        switch (flxDir[device.name]) {
          case 'row':
            classes += ' at-flx-row ';
            break;
          case 'col':
            classes += ' at-flx-col ';
            break;
          case 'rowRev':
            classes += ' at-flx-row-rev ';
            break;
          case 'colRev':
            classes += ' at-flx-col-rev ';
            break;
          default:
            break;
        }
      } else {
        classes += ' at-flx-row ';
      }
    } else {
      if (!device.on) {
        continue;
      }
      if (flxDir[device.name]) {
        switch (flxDir[device.name]) {
          case 'row':
            classes += ' at-flx-' + device.name + '-row ';
            break;
          case 'col':
            classes += ' at-flx-' + device.name + '-col ';
            break;
          case 'rowRev':
            classes += ' at-flx-' + device.name + '-row-rev ';
            break;
          case 'colRev':
            classes += ' at-flx-' + device.name + '-col-rev ';
            break;
          default:
            break;
        }
      }
    }
  }
  return classes;
};
var AtrcControlFlexNoWrapDeviceClasses = exports.AtrcControlFlexNoWrapDeviceClasses = function AtrcControlFlexNoWrapDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxWrp) {
    return ' at-flx-wrp ';
  }
  var flxWrp = abStyle.flxWrp;
  if (!(0, _lodash.isObject)(flxWrp)) return ' at-flx-wrp ';
  if ((0, _lodash.isEmpty)(flxWrp)) return ' at-flx-wrp ';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (flxWrp[device.name]) {
      if ('xs' === device.name) {
        if (flxWrp[device.name]) {
          classes += ' at-flx-nowrp ';
        }
      } else {
        classes += ' at-flx-' + device.name + '-nowrp ';
      }
    }
  }
  if (!classes) {
    return ' at-flx-wrp ';
  }
  return classes;
};
var AtrcControlFlexFillDeviceClasses = exports.AtrcControlFlexFillDeviceClasses = function AtrcControlFlexFillDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxFil) {
    return '';
  }
  var flxFil = abStyle.flxFil;
  if (!(0, _lodash.isObject)(flxFil)) return '';
  if ((0, _lodash.isEmpty)(flxFil)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (flxFil[device.name]) {
      if ('xs' === device.name) {
        if (flxFil[device.name]) {
          classes += ' at-flx-fil ';
        }
      } else {
        classes += ' at-flx-' + device.name + '-fil ';
      }
    }
  }
  return classes;
};
var AtrcControlFlexGrowDeviceClasses = exports.AtrcControlFlexGrowDeviceClasses = function AtrcControlFlexGrowDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxGrw) {
    return '';
  }
  var flxGrw = abStyle.flxGrw;
  if (!(0, _lodash.isObject)(flxGrw)) return '';
  if ((0, _lodash.isEmpty)(flxGrw)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (flxGrw[device.name]) {
      if ('xs' === device.name) {
        if (flxGrw[device.name]) {
          classes += ' at-flx-grw-1 ';
        }
      } else {
        classes += ' at-flx-' + device.name + '-grw-1 ';
      }
    }
  }
  return classes;
};
var AtrcControlFlexShrinkDeviceClasses = exports.AtrcControlFlexShrinkDeviceClasses = function AtrcControlFlexShrinkDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxSrnk) {
    return '';
  }
  var flxSrnk = abStyle.flxSrnk;
  if (!(0, _lodash.isObject)(flxSrnk)) return '';
  if ((0, _lodash.isEmpty)(flxSrnk)) return '';
  var classes = '';
  for (var i = 0; i < _availableDevices.default.length; i++) {
    var device = _availableDevices.default[i];
    if (!device.on) {
      continue;
    }
    if (flxSrnk[device.name]) {
      if ('xs' === device.name) {
        if (flxSrnk[device.name]) {
          classes += 'at-flx-srnk-1 ';
        }
      } else {
        classes += ' at-flx-' + device.name + '-srnk-1 ';
      }
    }
  }
  return classes;
};
var _default = exports.default = AtrcControlFlexDirectionDeviceClasses;
//# sourceMappingURL=classes.js.map