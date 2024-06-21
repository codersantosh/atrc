import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */

/* Utils */
import { AtrcDeviceCss } from '../../utils/object-values-with-devices';

/*Local*/
var AtrcControlOverflowDeviceCss = function AtrcControlOverflowDeviceCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-ovf';
  var output = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  var gotCss = AtrcDeviceCss(value, '', property);
  if (gotCss && !isEmpty(gotCss)) {
    forEach(gotCss, function (item, itemKey) {
      output[itemKey] += item;
    });
  }
  return output;
};
export default AtrcControlOverflowDeviceCss;
//# sourceMappingURL=css.js.map