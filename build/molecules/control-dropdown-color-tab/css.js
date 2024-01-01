/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
var AtrcControlDropdownColorTabCss = function AtrcControlDropdownColorTabCss(_ref) {
  var value = _ref.value,
    property = _ref.property;
  var innerOutput = {
    xs: '',
    xsHover: ''
  };
  if (!isEmpty(value)) {
    if (value.normal !== undefined && value.normal !== null) {
      innerOutput.xs += "".concat(property, "      : ").concat(value.normal, ";");
    }
    if (value.hover !== undefined && value.hover !== null) {
      innerOutput.xsHover += "".concat(property, "      : ").concat(value.hover, ";");
    }
  }
  return innerOutput;
};
export default AtrcControlDropdownColorTabCss;
//# sourceMappingURL=css.js.map