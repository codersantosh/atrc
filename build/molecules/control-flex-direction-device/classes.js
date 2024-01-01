/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
var AtrcControlFlexDirectionDeviceClasses = function AtrcControlFlexDirectionDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxDir) {
    return '';
  }
  var flxDir = abStyle.flxDir;
  if (!isObject(flxDir)) return '';
  if (isEmpty(flxDir)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
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
export var AtrcControlFlexNoWrapDeviceClasses = function AtrcControlFlexNoWrapDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxWrp) {
    return ' at-flx-wrp ';
  }
  var flxWrp = abStyle.flxWrp;
  if (!isObject(flxWrp)) return ' at-flx-wrp ';
  if (isEmpty(flxWrp)) return ' at-flx-wrp ';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
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
export var AtrcControlFlexFillDeviceClasses = function AtrcControlFlexFillDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxFil) {
    return '';
  }
  var flxFil = abStyle.flxFil;
  if (!isObject(flxFil)) return '';
  if (isEmpty(flxFil)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
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
export var AtrcControlFlexGrowDeviceClasses = function AtrcControlFlexGrowDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxGrw) {
    return '';
  }
  var flxGrw = abStyle.flxGrw;
  if (!isObject(flxGrw)) return '';
  if (isEmpty(flxGrw)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
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
export var AtrcControlFlexShrinkDeviceClasses = function AtrcControlFlexShrinkDeviceClasses(abStyle) {
  if (!abStyle || !abStyle.flxSrnk) {
    return '';
  }
  var flxSrnk = abStyle.flxSrnk;
  if (!isObject(flxSrnk)) return '';
  if (isEmpty(flxSrnk)) return '';
  var classes = '';
  var avDevices = AtrcAvailableDevices();
  for (var i = 0; i < avDevices.length; i++) {
    var device = avDevices[i];
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
export default AtrcControlFlexDirectionDeviceClasses;
//# sourceMappingURL=classes.js.map