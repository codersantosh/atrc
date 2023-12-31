"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AtrcControlTransformCSS;
var _objectValuesWithAllowedKeysAndTabs = require("./../../utils/object-values-with-allowed-keys-and-tabs");
/* Inbuilt */

/* Local */
function AtrcControlTransformCSS(value) {
  var transform = '';
  if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'translX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'translY') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'translZ')) {
    if (value.on3D) {
      transform += "translate3d(".concat(value.translX || 0, ", ").concat(value.translY || 0, ", ").concat(value.translZ || 0, ")");
    } else {
      transform += "translate(".concat(value.translX || 0, ", ").concat(value.translY || 0, ")");
    }
  }
  if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sclX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sclY ') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sclZ')) {
    if (value.on3D) {
      transform += " scale3d(".concat(value.sclX || 0, ", ").concat(value.sclY || 0, ", ").concat(value.sclZ || 0, ")");
    } else {
      transform += " scale(".concat(value.sclX || 0, ", ").concat(value.sclY || 0, ")");
    }
  }
  if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotY') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotZ') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotA')) {
    if (value.on3D) {
      transform += " rotate3d(".concat(value.rotX || 0, ", ").concat(value.rotY || 0, ", ").concat(value.rotZ || 0, ", ").concat(value.rotA || 0, "deg)");
    } else {
      transform += " rotate(".concat(value.rotA || 0, "deg)");
    }
  }
  if ((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'skewX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'skewY')) {
    transform += " skew(".concat(value.skewX || 0, "deg, ").concat(value.skewY || 0, "deg)");
  }
  return transform;
}
//# sourceMappingURL=css.js.map