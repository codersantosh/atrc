"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _objectValuesWithAllowedKeysAndTabs = require("./../../../utils/object-values-with-allowed-keys-and-tabs");
var _objectValuesWithDevices = require("../../../utils/object-values-with-devices");
/*Library*/

/*Inbuilt*/

/*Local*/
var AtrcControlTypographyCss = function AtrcControlTypographyCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fntSz: 'font-size',
    fntFam: 'font-family',
    fntWt: 'font-weight',
    fntSty: 'font-style',
    txtDec: 'text-decoration',
    txtTf: 'text-transform',
    lnH: 'line-height',
    ltrSp: 'letter-spacing'
  };
  var output = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (value && !(0, _lodash.isEmpty)(value)) {
    var fntSzCss = (0, _objectValuesWithDevices.AtrcDeviceCss)(value, 'fntSz', properties.fntSz);
    if (fntSzCss && !(0, _lodash.isEmpty)(fntSzCss)) {
      (0, _lodash.forEach)(fntSzCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntFamCss = (0, _objectValuesWithAllowedKeysAndTabs.AtrcTabCss)(value, 'fntFam', properties.fntFam);
    if (fntFamCss && !(0, _lodash.isEmpty)(fntFamCss)) {
      (0, _lodash.forEach)(fntFamCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntWtCss = (0, _objectValuesWithAllowedKeysAndTabs.AtrcTabCss)(value, 'fntWt', properties.fntWt);
    if (fntWtCss && !(0, _lodash.isEmpty)(fntWtCss)) {
      (0, _lodash.forEach)(fntWtCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var fntStyCss = (0, _objectValuesWithAllowedKeysAndTabs.AtrcTabCss)(value, 'fntSty', properties.fntSty);
    if (fntStyCss && !(0, _lodash.isEmpty)(fntStyCss)) {
      (0, _lodash.forEach)(fntStyCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var txtDecCss = (0, _objectValuesWithAllowedKeysAndTabs.AtrcTabCss)(value, 'txtDec', properties.txtDec);
    if (txtDecCss && !(0, _lodash.isEmpty)(txtDecCss)) {
      (0, _lodash.forEach)(txtDecCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var txtTfCss = (0, _objectValuesWithAllowedKeysAndTabs.AtrcTabCss)(value, 'txtTf', properties.txtTf);
    if (txtTfCss && !(0, _lodash.isEmpty)(txtTfCss)) {
      (0, _lodash.forEach)(txtTfCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var lnHCss = (0, _objectValuesWithDevices.AtrcDeviceCss)(value, 'lnH', properties.lnH);
    if (lnHCss && !(0, _lodash.isEmpty)(lnHCss)) {
      (0, _lodash.forEach)(lnHCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
    var ltrSpCss = (0, _objectValuesWithDevices.AtrcDeviceCss)(value, 'ltrSp', properties.ltrSp);
    if (ltrSpCss && !(0, _lodash.isEmpty)(ltrSpCss)) {
      (0, _lodash.forEach)(ltrSpCss, function (item, itemKey) {
        output[itemKey] += item;
      });
    }
  }
  return output;
};
var _default = exports.default = AtrcControlTypographyCss;
//# sourceMappingURL=index.js.map