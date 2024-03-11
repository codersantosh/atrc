/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
var AtrcControlColorTabCss = function AtrcControlColorTabCss(_ref) {
  var value = _ref.value,
    _ref$property = _ref.property,
    property = _ref$property === void 0 ? '--at-cl' : _ref$property;
  var innerOutput = {
    xs: '',
    xsHover: ''
  };
  if (!isEmpty(value)) {
    if (value.normal) {
      innerOutput.xs += "".concat(property, "      : ").concat(value.normal, ";");
    }
    if (value.hover) {
      innerOutput.xsHover += "".concat(property, "      : ").concat(value.hover, ";");
    }
  }
  return innerOutput;
};
export default AtrcControlColorTabCss;
//# sourceMappingURL=css.js.map