/*Library*/
import { isEmpty } from 'lodash';

/* Utils */
import { AtrcIsKeyWithValueNotEmpty } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
var AtrcControlFilterCss = function AtrcControlFilterCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-flt';
  var innerOutput = {
    xs: ''
  };
  if (!isEmpty(value)) {
    var css = '';
    if (AtrcIsKeyWithValueNotEmpty(value, 'blr')) {
      css += " blur(".concat(value.blr, "px)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'brgtNess')) {
      css += " brightness(".concat(value.brgtNess, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'ctrs')) {
      css += " contrast(".concat(value.ctrs, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'grayScl')) {
      css += " grayscale(".concat(value.grayScl, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'hueRot')) {
      css += " hue-rotate(".concat(value.hueRot, "deg)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'inv')) {
      css += " invert(".concat(value.inv, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'opa')) {
      css += " opacity(".concat(value.opa, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'sart')) {
      css += " saturate(".concat(value.sart, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'sepia')) {
      css += " sepia(".concat(value.sepia, "%)");
    }
    if (AtrcIsKeyWithValueNotEmpty(value, 'hSdw') && AtrcIsKeyWithValueNotEmpty(value, 'vSdw') && AtrcIsKeyWithValueNotEmpty(value, 'sdwBlr') && AtrcIsKeyWithValueNotEmpty(value, 'sdwCl')) {
      css += " drop-shadow(".concat(value.hSdw, "px ").concat(value.vSdw, "px ").concat(value.sdwBlr, "px ").concat(value.sdwCl, " )");
    }
    innerOutput.xs = "".concat(property, "      : ").concat(css, ";");
  }
  return innerOutput;
};
export default AtrcControlFilterCss;
//# sourceMappingURL=css.js.map