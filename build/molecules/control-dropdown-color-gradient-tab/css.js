/*Library*/
import { isEmpty } from 'lodash';

/* Inbuilt */

import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/

export var AtrcControlDropdownColorGradientTabCss = function AtrcControlDropdownColorGradientTabCss(_ref) {
  var value = _ref.value,
    innerOutput = _ref.innerOutput,
    property = _ref.property,
    propGrd = _ref.propGrd;
  if (value.cl) {
    innerOutput.xs += "".concat(property, "      : ").concat(value.cl, ";");
  }
  if (value.clHover) {
    innerOutput.xsHover += "".concat(property, "      : ").concat(value.clHover, ";");
  }
  if (value.clActive) {
    innerOutput.xsActive += "".concat(property, "      : ").concat(value.clActive, ";");
  }
  if (value.grd) {
    innerOutput.xs += "".concat(propGrd, "      : ").concat(value.grd, ";");
  }
  if (value.grdHover) {
    innerOutput.xsHover += "".concat(propGrd, "      : ").concat(value.grdHover, ";");
  }
  if (value.grdActive) {
    innerOutput.xsActive += "".concat(propGrd, "      : ").concat(value.grdActive, ";");
  }
  return innerOutput;
};
var AtrcControlColorCSS = function AtrcControlColorCSS(value, property) {
  if (!value || !property) {
    return null;
  }
  var color = '';
  if (value.cl) {
    color += "".concat(property, "      : ").concat(value.cl, ";");
  } else if (value.grd) {
    color += "background      : ".concat(value.grd, ";");
    color += "text-fill-color      : transparent;";
    color += "background-clip      : text;";
  }
  return color;
};
var AtrcControlDropdownColorGradientTabCssText = function AtrcControlDropdownColorGradientTabCssText(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'color';
  var output = {};
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, ['cl', 'grd'])) {
          var color = AtrcGetTabValues(value, tab, ['cl', 'grd']),
            css = AtrcControlColorCSS(color, property);
          switch (tab) {
            case 'normal':
              output.xs = css;
              break;
            default:
              output['xs' + tab] = css;
              break;
          }
        }
      }
    });
  }
  return output;
};
export default AtrcControlDropdownColorGradientTabCssText;
//# sourceMappingURL=css.js.map