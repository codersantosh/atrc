import React from 'react';

/*Library*/
import { isEmpty } from 'lodash';

/*Controls*/
import { AtrcControlTransformAllowedKeys } from '../control-transform';
import AtrcControlTransformCss from '../control-transform/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
var AtrcControlTransformTabCss = function AtrcControlTransformTabCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      tf: '--at-tf',
      ppv: '--at-ppv',
      ppvOrg: '--at-ppv-org',
      tfOrg: '--at-tf-org',
      tfSty: '--at-tf-sty'
    } : _ref$properties;
  var output = {
    xs: '',
    xsHover: '',
    sm: '',
    smHover: '',
    md: '',
    mdHover: '',
    lg: '',
    lgHover: '',
    xl: '',
    xlHover: '',
    xxl: '',
    xxlHover: ''
  };
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcHasTabValues(tab, value, AtrcControlTransformAllowedKeys)) {
        var transform = AtrcGetTabValues(value, tab, AtrcControlTransformAllowedKeys);
        if (value.on3D) {
          transform.on3D = value.on3D;
        }
        var css = AtrcControlTransformCss(transform);
        if (css) {
          switch (tab) {
            case 'normal':
              output.xs += "".concat(properties.tf, " : ").concat(css, ";");
              break;
            case 'hover':
              output.xsHover += "".concat(properties.tf, " : ").concat(css, ";");
              break;
          }
        }
      }
    });
    if (value.ppv) {
      output.xs += "".concat(properties.ppv, " : ").concat(value.ppv, ";");
    }
    if (value.orgX || value.orgY || value.orgZ) {
      if (value.on3D) {
        output.xs += "".concat(properties.tfOrg, " : ").concat(value.orgX || 0, " ").concat(value.orgY || 0, " ").concat(value.orgZ || 0, ";");
        output.xs += "";
      } else {
        output.xs += "".concat(properties.tfOrg, " :").concat(value.orgX || 0, " ").concat(value.orgY || 0);
      }
    }
  }
  return output;
};
export default AtrcControlTransformTabCss;
//# sourceMappingURL=css.js.map