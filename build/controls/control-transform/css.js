import React from 'react';

/* Utils */
import { AtrcIsKeyWithValueNotEmpty } from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Local */
export default function AtrcControlTransformCss(value) {
  if (!value) {
    return '';
  }
  var transform = '';
  if (AtrcIsKeyWithValueNotEmpty(value, 'translX') || AtrcIsKeyWithValueNotEmpty(value, 'translY') || AtrcIsKeyWithValueNotEmpty(value, 'translZ')) {
    if (value.on3D) {
      transform += "translate3d(".concat(value.translX || 0, ", ").concat(value.translY || 0, ", ").concat(value.translZ || 0, ")");
    } else {
      transform += "translate(".concat(value.translX || 0, ", ").concat(value.translY || 0, ")");
    }
  }
  if (AtrcIsKeyWithValueNotEmpty(value, 'sclX') || AtrcIsKeyWithValueNotEmpty(value, 'sclY ') || AtrcIsKeyWithValueNotEmpty(value, 'sclZ')) {
    if (value.on3D) {
      transform += " scale3d(".concat(value.sclX || 0, ", ").concat(value.sclY || 0, ", ").concat(value.sclZ || 0, ")");
    } else {
      transform += " scale(".concat(value.sclX || 0, ", ").concat(value.sclY || 0, ")");
    }
  }
  if (AtrcIsKeyWithValueNotEmpty(value, 'rotX') || AtrcIsKeyWithValueNotEmpty(value, 'rotY') || AtrcIsKeyWithValueNotEmpty(value, 'rotZ') || AtrcIsKeyWithValueNotEmpty(value, 'rotA')) {
    if (value.on3D) {
      transform += " rotate3d(".concat(value.rotX || 0, ", ").concat(value.rotY || 0, ", ").concat(value.rotZ || 0, ", ").concat(value.rotA || 0, "deg)");
    } else {
      transform += " rotate(".concat(value.rotA || 0, "deg)");
    }
  }
  if (AtrcIsKeyWithValueNotEmpty(value, 'skewX') || AtrcIsKeyWithValueNotEmpty(value, 'skewY')) {
    transform += " skew(".concat(value.skewX || 0, "deg, ").concat(value.skewY || 0, "deg)");
  }
  return transform;
}
//# sourceMappingURL=css.js.map