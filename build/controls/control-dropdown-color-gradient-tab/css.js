import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import AtrcControlColorGradientCss from './../control-dropdown-color-gradient/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from '../../utils/string';

/*Local*/
export var AtrcControlColorGradientTabCssBg = function AtrcControlColorGradientTabCssBg(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      color: '--at-bg-cl',
      gradient: '--at-bg-img'
    } : _ref$properties;
  var output = {
    xs: '',
    xsHover: '',
    xsActive: '',
    sm: '',
    smHover: '',
    smActive: '',
    md: '',
    mdHover: '',
    mdActive: '',
    lg: '',
    lgHover: '',
    lgActive: '',
    xl: '',
    xlHover: '',
    xlActive: '',
    xxl: '',
    xxlHover: '',
    xxlActive: ''
  };
  if (value.cl) {
    output.xs += "".concat(properties.color, "      : ").concat(value.cl, ";");
  }
  if (value.clHover) {
    output.xsHover += "".concat(properties.color, "      : ").concat(value.clHover, ";");
  }
  if (value.clActive) {
    output.xsActive += "".concat(properties.color, "      : ").concat(value.clActive, ";");
  }
  if (value.grd) {
    output.xs += "".concat(properties.gradient, "      : ").concat(value.grd, ";");
  }
  if (value.grdHover) {
    output.xsHover += "".concat(properties.gradient, "      : ").concat(value.grdHover, ";");
  }
  if (value.grdActive) {
    output.xsActive += "".concat(properties.gradient, "      : ").concat(value.grdActive, ";");
  }
  return output;
};
var AtrcControlColorGradientTabCss = function AtrcControlColorGradientTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--at-cl';
  var output = {};
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcHasTabValues(tab, value, ['cl', 'grd'])) {
        var color = AtrcGetTabValues(value, tab, ['cl', 'grd']),
          css = AtrcControlColorGradientCss(color, property);
        forEach(css, function (item, itemKey) {
          var tabKey = '';
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
    });
  }
  return output;
};
export default AtrcControlColorGradientTabCss;
//# sourceMappingURL=css.js.map