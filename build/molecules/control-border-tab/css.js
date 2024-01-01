/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlBorderAllowedKeys } from '../control-border';
import AtrcControlBorderCss from '../control-border/css';

/*Local*/
var AtrcControlBorderTabCss = function AtrcControlBorderTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bdrCl: 'border-color',
    bdrSty: 'border-style',
    bdrW: 'border-width'
  };
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBorderAllowedKeys)) {
          var boxVal = AtrcGetTabValues(value, tab, AtrcControlBorderAllowedKeys);
          var boxCss = AtrcControlBorderCss(boxVal, properties);
          if (!isEmpty(boxCss)) {
            forEach(boxCss, function (item, itemKey) {
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
export default AtrcControlBorderTabCss;
//# sourceMappingURL=css.js.map