"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _objectValuesWithAllowedKeysAndTabs = require("./../../utils/object-values-with-allowed-keys-and-tabs");
/*Library*/

/* Inbuilt */

/*Local*/
var AtrcControlFilterCss = function AtrcControlFilterCss(value, property) {
  var innerOutput = {
    xs: ''
  };
  if (!(0, _lodash.isEmpty)(value)) {
    var css = '';
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'blr')) {
      css += " blur(".concat(value.blr, "px)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'brgtNess')) {
      css += " brightness(".concat(value.brgtNess, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'ctrs')) {
      css += " contrast(".concat(value.ctrs, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'grayScl')) {
      css += " grayscale(".concat(value.grayScl, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'hueRot')) {
      css += " hue-rotate(".concat(value.hueRot, "deg)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'inv')) {
      css += " invert(".concat(value.inv, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'opa')) {
      css += " opacity(".concat(value.opa, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sart')) {
      css += " saturate(".concat(value.sart, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sepia')) {
      css += " sepia(".concat(value.sepia, "%)");
    }
    if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'hSdw') && (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'vSdw') && (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sdwBlr') && (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sdwCl')) {
      css += " drop-shadow(".concat(value.hSdw, "px ").concat(value.vSdw, "px ").concat(value.sdwBlr, "px ").concat(value.sdwCl, " )");
    }
    innerOutput.xs = "".concat(property, "      : ").concat(css, ";");
  }
  return innerOutput;
};
var _default = exports.default = AtrcControlFilterCss;
//# sourceMappingURL=css.js.map