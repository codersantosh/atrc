/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBorderAllowedKeys } from '../control-border';
import AtrcControlBorderCss from '../control-border/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
var AtrcControlBorderTabCss = function AtrcControlBorderTabCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      borderColor: '--at-bdr-cl',
      borderStyle: '--at-bdr-sty',
      borderWidth: '--at-bdr-w'
    } : _ref$properties;
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlBorderAllowedKeys)) {
          var boxVal = AtrcGetTabValues(value, tab, AtrcControlBorderAllowedKeys);
          var boxCss = AtrcControlBorderCss({
            value: boxVal,
            properties: properties
          });
          if (!isEmpty(boxCss)) {
            forEach(boxCss, function (item, itemKey) {
              if (tab === 'normal') {
                tabKey = itemKey;
              } else {
                tabKey = itemKey + AtrcUcFirst(tab);
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