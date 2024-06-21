import React from 'react';

/* Library */
import { cloneDeep } from 'lodash';

/* Local */
/* Add values */
export var AtrcNestedObjAddByKey1 = function AtrcNestedObjAddByKey1(_ref) {
  var settings = _ref.settings,
    key1 = _ref.key1,
    val1 = _ref.val1;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = [];
  if (setting1Cloned[key1]) {
    setting2Cloned = cloneDeep(setting1Cloned[key1]);
  }
  setting2Cloned.push(val1);
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};
export var AtrcNestedObjAddByKey2 = function AtrcNestedObjAddByKey2(_ref2) {
  var settings = _ref2.settings,
    key1 = _ref2.key1,
    key2 = _ref2.key2,
    val2 = _ref2.val2;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = [];
  if (setting1Cloned[key1]) {
    setting2Cloned = cloneDeep(setting1Cloned[key1]);
  }
  var setting3Cloned = [];
  if (setting2Cloned[key2]) {
    setting3Cloned = cloneDeep(setting2Cloned[key2]);
  }
  setting3Cloned.push(val2);
  setting2Cloned[key2] = setting3Cloned;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};
export var AtrcNestedObjAddByKey3 = function AtrcNestedObjAddByKey3(_ref3) {
  var settings = _ref3.settings,
    key1 = _ref3.key1,
    key2 = _ref3.key2,
    key3 = _ref3.key3,
    val3 = _ref3.val3;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = cloneDeep(setting1Cloned[key1]);
  var setting3Cloned = cloneDeep(setting2Cloned[key2]);
  var setting4Cloned = cloneDeep(setting3Cloned[key3]);
  setting4Cloned.push(val3);
  setting3Cloned[key3] = setting4Cloned;
  setting2Cloned[key2] = setting3Cloned;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};
export var AtrcNestedObjAddByKey4 = function AtrcNestedObjAddByKey4(_ref4) {
  var settings = _ref4.settings,
    key1 = _ref4.key1,
    key2 = _ref4.key2,
    key3 = _ref4.key3,
    key4 = _ref4.key4,
    val4 = _ref4.val4;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = cloneDeep(setting1Cloned[key1]);
  var setting3Cloned = cloneDeep(setting2Cloned[key2]);
  var setting4Cloned = cloneDeep(setting3Cloned[key3]);
  var setting5Cloned = cloneDeep(setting4Cloned[key4]);
  setting5Cloned.push(val4);
  setting4Cloned[key4] = setting5Cloned;
  setting3Cloned[key3] = setting4Cloned;
  setting2Cloned[key2] = setting3Cloned;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};

/* Updated */
export var AtrcNestedObjUpdateByKey1 = function AtrcNestedObjUpdateByKey1(_ref5) {
  var settings = _ref5.settings,
    key1 = _ref5.key1,
    val1 = _ref5.val1;
  var setting1Cloned = cloneDeep(settings);
  setting1Cloned[key1] = val1;
  return setting1Cloned;
};
export var AtrcNestedObjUpdateByKey2 = function AtrcNestedObjUpdateByKey2(_ref6) {
  var settings = _ref6.settings,
    key1 = _ref6.key1,
    key2 = _ref6.key2,
    val2 = _ref6.val2;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = {};
  if (setting1Cloned[key1]) {
    setting2Cloned = cloneDeep(setting1Cloned[key1]);
  }
  setting2Cloned[key2] = val2;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};
export var AtrcNestedObjUpdateByKey3 = function AtrcNestedObjUpdateByKey3(_ref7) {
  var settings = _ref7.settings,
    key1 = _ref7.key1,
    key2 = _ref7.key2,
    key3 = _ref7.key3,
    val3 = _ref7.val3;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = cloneDeep(setting1Cloned[key1]);
  var setting3Cloned = cloneDeep(setting2Cloned[key2]);
  setting3Cloned[key3] = val3;
  setting2Cloned[key2] = setting3Cloned;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};
export var AtrcNestedObjUpdateByKey4 = function AtrcNestedObjUpdateByKey4(_ref8) {
  var settings = _ref8.settings,
    key1 = _ref8.key1,
    key2 = _ref8.key2,
    key3 = _ref8.key3,
    key4 = _ref8.key4,
    val4 = _ref8.val4;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = cloneDeep(setting1Cloned[key1]);
  var setting3Cloned = cloneDeep(setting2Cloned[key2]);
  var setting4Cloned = cloneDeep(setting3Cloned[key3]);
  setting4Cloned[key4] = val4;
  setting3Cloned[key3] = setting4Cloned;
  setting2Cloned[key2] = setting3Cloned;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};
export var AtrcNestedObjUpdateByKey5 = function AtrcNestedObjUpdateByKey5(_ref9) {
  var settings = _ref9.settings,
    key1 = _ref9.key1,
    key2 = _ref9.key2,
    key3 = _ref9.key3,
    key4 = _ref9.key4,
    key5 = _ref9.key5,
    val5 = _ref9.val5;
  var setting1Cloned = cloneDeep(settings);
  var setting2Cloned = cloneDeep(setting1Cloned[key1]);
  var setting3Cloned = cloneDeep(setting2Cloned[key2]);
  var setting4Cloned = cloneDeep(setting3Cloned[key3]);
  var setting5Cloned = cloneDeep(setting4Cloned[key4]);
  setting5Cloned[key5] = val5;
  setting4Cloned[key4] = setting5Cloned;
  setting3Cloned[key3] = setting4Cloned;
  setting2Cloned[key2] = setting3Cloned;
  setting1Cloned[key1] = setting2Cloned;
  return setting1Cloned;
};

/* Delete */
export var AtrcNestedObjDeleteByKey1 = function AtrcNestedObjDeleteByKey1(_ref10) {
  var settings = _ref10.settings,
    key1 = _ref10.key1;
  var setting1Cloned = cloneDeep(settings);
  if (setting1Cloned) {
    setting1Cloned.splice(key1, 1);
  }
  return setting1Cloned;
};
export var AtrcNestedObjDeleteByKey2 = function AtrcNestedObjDeleteByKey2(_ref11) {
  var settings = _ref11.settings,
    key1 = _ref11.key1,
    key2 = _ref11.key2;
  var setting1Cloned = cloneDeep(settings);
  if (setting1Cloned && setting1Cloned[key1] && setting1Cloned[key1].length) {
    var setting2Cloned = cloneDeep(setting1Cloned[key1]);
    setting2Cloned.splice(key2, 1);
    setting1Cloned[key1] = setting2Cloned;
  }
  return setting1Cloned;
};
export var AtrcNestedObjDeleteByKey3 = function AtrcNestedObjDeleteByKey3(_ref12) {
  var settings = _ref12.settings,
    key1 = _ref12.key1,
    key2 = _ref12.key2,
    key3 = _ref12.key3;
  var setting1Cloned = cloneDeep(settings);
  if (setting1Cloned && setting1Cloned[key1]) {
    var setting2Cloned = cloneDeep(setting1Cloned[key1]);
    if (setting2Cloned && setting2Cloned[key2]) {
      var setting3Cloned = cloneDeep(setting2Cloned[key2]);
      setting3Cloned.splice(key3, 1);
      setting2Cloned[key2] = setting3Cloned;
    }
    setting1Cloned[key1] = setting2Cloned;
  }
  return setting1Cloned;
};
export var AtrcNestedObjDeleteByKey4 = function AtrcNestedObjDeleteByKey4(_ref13) {
  var settings = _ref13.settings,
    key1 = _ref13.key1,
    key2 = _ref13.key2,
    key3 = _ref13.key3,
    key4 = _ref13.key4;
  var setting1Cloned = cloneDeep(settings);
  if (setting1Cloned && setting1Cloned[key1]) {
    var setting2Cloned = cloneDeep(setting1Cloned[key1]);
    if (setting2Cloned && setting2Cloned[key2]) {
      var setting3Cloned = cloneDeep(setting2Cloned[key2]);
      if (setting3Cloned && setting3Cloned[key3]) {
        var setting4Cloned = cloneDeep(setting3Cloned[key3]);
        setting4Cloned.splice(key4, 1);
        setting3Cloned[key3] = setting4Cloned;
      }
      setting2Cloned[key2] = setting3Cloned;
    }
    setting1Cloned[key1] = setting2Cloned;
  }
  return setting1Cloned;
};
export var AtrcNestedObjDeleteByKey5 = function AtrcNestedObjDeleteByKey5(_ref14) {
  var settings = _ref14.settings,
    key1 = _ref14.key1,
    key2 = _ref14.key2,
    key3 = _ref14.key3,
    key4 = _ref14.key4,
    key5 = _ref14.key5;
  var setting1Cloned = cloneDeep(settings);
  if (setting1Cloned && setting1Cloned[key1]) {
    var setting2Cloned = cloneDeep(setting1Cloned[key1]);
    if (setting2Cloned && setting2Cloned[key2]) {
      var setting3Cloned = cloneDeep(setting2Cloned[key2]);
      if (setting3Cloned && setting3Cloned[key3]) {
        var setting4Cloned = cloneDeep(setting3Cloned[key3]);
        if (setting4Cloned && setting4Cloned[key4]) {
          var setting5Cloned = cloneDeep(setting4Cloned[key4]);
          if (setting5Cloned && setting5Cloned[key5]) {
            setting5Cloned.splice(key5, 1);
          }
          setting4Cloned[key4] = setting5Cloned;
        }
        setting3Cloned[key3] = setting4Cloned;
      }
      setting2Cloned[key2] = setting3Cloned;
    }
    setting1Cloned[key1] = setting2Cloned;
  }
  return setting1Cloned;
};
//# sourceMappingURL=utils.js.map