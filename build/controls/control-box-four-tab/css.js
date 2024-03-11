/* Library */
import { isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';
import { AtrcControlBoxFourAllowedKeys } from '../control-box-four';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/* Local */
var AtrcControlBoxFourTabCss = function AtrcControlBoxFourTabCss(_ref) {
  var value = _ref.value,
    property = _ref.property;
  var output = {
    xs: '',
    xsHover: ''
  };
  var boxFours = ['t', 'r', 'b', 'l'];
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      var tabValues = AtrcGetTabValues(value, tab, AtrcControlBoxFourAllowedKeys);
      if (!isEmpty(tabValues)) {
        var itemKey = 'xs';
        var tabKey = '';
        if (tab === 'normal') {
          tabKey = itemKey;
        } else {
          tabKey = itemKey + AtrcUcFirst(tab);
        }
        if (!output[tabKey]) {
          output[tabKey] = '';
        }
        output[tabKey] += AtrcControlBoxFourShorthandCssOnly({
          value: tabValues,
          property: property
        });
      }
    });
  }
  return output;
};
export default AtrcControlBoxFourTabCss;
//# sourceMappingURL=css.js.map