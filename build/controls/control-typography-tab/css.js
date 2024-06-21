import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlTypographyAllowedKeys } from '../control-typography';
import AtrcControlTypographyCss from '../control-typography/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
var AtrcControlTypographyTabCss = function AtrcControlTypographyTabCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      fontSize: '--at-fnt-sz',
      fontFamily: '--at-fnt-wt',
      fontWeight: '--at-fnt-fam',
      fontStyle: '--at-fnt-sty',
      textDecoration: '--at-txt-tf',
      textTransform: '--at-txt-dec',
      lineHeight: '--at-ln-h',
      letterSpacing: '--at-ltr-sp'
    } : _ref$properties;
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlTypographyAllowedKeys)) {
          var typVal = AtrcGetTabValues(value, tab, AtrcControlTypographyAllowedKeys),
            typCss = AtrcControlTypographyCss({
              value: typVal,
              properties: properties
            });
          console.log(typCss);
          if (typCss && !isEmpty(typCss)) {
            forEach(typCss, function (item, itemKey) {
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
export default AtrcControlTypographyTabCss;
//# sourceMappingURL=css.js.map