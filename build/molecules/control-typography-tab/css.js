/*Library*/
import { forEach, isEmpty } from 'lodash';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlTypographyAllowedKeys } from '../control-typography';
import AtrcControlTypographyCss from '../control-typography/css';

/*Local*/
var AtrcControlTypographyTabCss = function AtrcControlTypographyTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fntSz: 'font-size',
    fntWt: 'font-weight',
    fntSty: 'font-style',
    txtDec: 'text-decoration',
    txtTf: 'text-transform',
    lnH: 'line-height',
    ltrSp: 'letter-spacing'
  };
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlTypographyAllowedKeys)) {
          var typVal = AtrcGetTabValues(value, tab, AtrcControlTypographyAllowedKeys),
            typCss = AtrcControlTypographyCss(typVal, properties);
          if (typCss && !isEmpty(typCss)) {
            forEach(typCss, function (item, itemKey) {
              if (tab === 'normal') {
                tabKey = itemKey;
              } else {
                tabKey = itemKey + tab;
              }
              if (!output[tabKey]) {
                output[tabKey] = '';
              }
              output[tabKey] += item;
            });
          }
        }
      }
    });
  }
  return output;
};
export default AtrcControlTypographyTabCss;
//# sourceMappingURL=css.js.map