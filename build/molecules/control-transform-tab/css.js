/*Library*/
import { isEmpty } from 'lodash';

/*Atrc*/
import { AtrcControlTransformAllowedKeys } from './../control-transform';
import AtrcControlTransformCSS from './../control-transform/css';
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
var AtrcControlTransformTabCss = function AtrcControlTransformTabCss(value) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    tf: '--at-tf',
    ppv: '--at-ppv',
    ppvOrg: '--at-ppv-org',
    tfOrg: '--at-tf-org',
    tfSty: '--at-tf-sty'
  };
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
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlTransformAllowedKeys)) {
          var transform = AtrcGetTabValues(value, tab, AtrcControlTransformAllowedKeys),
            css = AtrcControlTransformCSS(transform);
          switch (tab) {
            case 'normal':
              output.xs += "".concat(properties.tf, " : ").concat(css, ";");
              break;
            case 'Hover':
              output.xsHover += "".concat(properties.tf, " : ").concat(css, ";");
              break;
            case 'ParentHover':
              output.xsParentHover += "".concat(properties.tf, " : ").concat(css, ";");
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