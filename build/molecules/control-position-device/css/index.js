/*Library*/
import { isEmpty } from 'lodash';

/*Inbuilt*/
import Top from './top';
import Right from './right';
import Bottom from './bottom';
import Left from './left';

/*Local*/
var AtrcControlPositionDeviceCss = function AtrcControlPositionDeviceCss(value, properties) {
  var innerOutput = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (!isEmpty(value)) {
    if (value.pos) {
      innerOutput.xs += "".concat(properties.pos, "      : ").concat(value.pos, ";");
    }
    innerOutput = Top(value, innerOutput, properties.t);
    innerOutput = Right(value, innerOutput, properties.r);
    innerOutput = Bottom(value, innerOutput, properties.b);
    innerOutput = Left(value, innerOutput, properties.l);
  }
  return innerOutput;
};
export default AtrcControlPositionDeviceCss;
//# sourceMappingURL=index.js.map