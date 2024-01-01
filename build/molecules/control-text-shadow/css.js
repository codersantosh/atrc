/* Library */
import { isEmpty } from 'lodash';

/* Local */
var AtrcControlTextShadowCss = function AtrcControlTextShadowCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text-shadow';
  var output = {
    xs: ''
  };
  if (!isEmpty(value) && value.x && value.y) {
    output.xs += "".concat(property, " :\n\t\t").concat(value.x, " ").concat(value.y, " \n\t\t").concat(value.blr ? value.blr : '', "\n\t\t").concat(value.cl ? value.cl : '', ";");
  }
  return output;
};
export default AtrcControlTextShadowCss;
//# sourceMappingURL=css.js.map