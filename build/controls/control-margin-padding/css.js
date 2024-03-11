/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';
import AtrcControlBoxFourDeviceCss from '../control-box-four-device/css';
import AtrcControlBoxFourTabCss from '../control-box-four-tab/css';
import AtrcControlBoxFourDeviceTabCss from './../control-box-four-device-tab/css';

/* Utils */

/*Local*/
var AtrcControlMarginPaddingCss = function AtrcControlMarginPaddingCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      margin: '--at-m',
      padding: '--at-p'
    } : _ref$properties,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? '' : _ref$type;
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
  if ('deviceTab' === type) {
    if (value.m) {
      var gotCss = AtrcControlBoxFourDeviceTabCss({
        value: value.m,
        property: properties.margin
      });
      if (gotCss && !isEmpty(gotCss)) {
        forEach(gotCss, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.p) {
      var _gotCss = AtrcControlBoxFourDeviceTabCss({
        value: value.p,
        property: properties.padding
      });
      if (_gotCss && !isEmpty(_gotCss)) {
        forEach(_gotCss, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else if ('device' === type) {
    if (value.m) {
      var _gotCss2 = AtrcControlBoxFourDeviceCss({
        value: value.m,
        property: properties.margin
      });
      if (_gotCss2 && !isEmpty(_gotCss2)) {
        forEach(_gotCss2, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.p) {
      var _gotCss3 = AtrcControlBoxFourDeviceCss({
        value: value.p,
        property: properties.padding
      });
      if (_gotCss3 && !isEmpty(_gotCss3)) {
        forEach(_gotCss3, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else if ('tab' === type) {
    if (value.m) {
      var _gotCss4 = AtrcControlBoxFourTabCss({
        value: value.m,
        property: properties.margin
      });
      if (_gotCss4 && !isEmpty(_gotCss4)) {
        forEach(_gotCss4, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.p) {
      var _gotCss5 = AtrcControlBoxFourTabCss({
        value: value.p,
        property: properties.padding
      });
      if (_gotCss5 && !isEmpty(_gotCss5)) {
        forEach(_gotCss5, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else {
    if (value.m) {
      output.xs += AtrcControlBoxFourShorthandCssOnly({
        value: value.m,
        property: properties.margin
      });
    }
    if (value.p) {
      output.xs += AtrcControlBoxFourShorthandCssOnly({
        value: value.p,
        property: properties.padding
      });
    }
  }
  return output;
};
export default AtrcControlMarginPaddingCss;
//# sourceMappingURL=css.js.map