import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import AtrcControlBorderTabCss from '../control-border-tab/css';
import AtrcControlBorderRadiusTabCss from './../control-border-radius-tab/css';
import AtrcControlBoxShadowTabCss from './../control-box-shadow-tab/css';
import AtrcControlBorderCss from '../control-border/css';
import AtrcControlBorderRadiusCss from '../control-border-radius/css';
import AtrcControlBoxShadowCss from '../control-box-shadow/css';

/* Utils */

/*Local*/
var AtrcControlBoundaryCss = function AtrcControlBoundaryCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      borderColor: '--at-bdr-cl',
      borderStyle: '--at-bdr-sty',
      borderWidth: '--at-bdr-w',
      borderRadius: '--at-bdr-rad',
      boxShadow: '--at-box-sdw'
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
  if ('tab' === type) {
    if (value.bdr) {
      var gotCss = AtrcControlBorderTabCss({
        value: value.bdr,
        properties: {
          borderColor: properties.borderColor,
          borderStyle: properties.borderStyle,
          borderWidth: properties.borderWidth
        }
      });
      if (gotCss && !isEmpty(gotCss)) {
        forEach(gotCss, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.bdrRad) {
      var _gotCss = AtrcControlBorderRadiusTabCss(value.bdrRad, properties.borderRadius);
      if (_gotCss && !isEmpty(_gotCss)) {
        forEach(_gotCss, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.boxSdw) {
      var _gotCss2 = AtrcControlBoxShadowTabCss(value.boxSdw, properties.boxShadow);
      if (_gotCss2 && !isEmpty(_gotCss2)) {
        forEach(_gotCss2, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else {
    if (value.bdr) {
      var _gotCss3 = AtrcControlBorderCss({
        value: value.bdr,
        properties: {
          borderColor: properties.borderColor,
          borderStyle: properties.borderStyle,
          borderWidth: properties.borderWidth
        }
      });
      if (_gotCss3 && !isEmpty(_gotCss3)) {
        forEach(_gotCss3, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.bdrRad) {
      var _gotCss4 = AtrcControlBorderRadiusCss({
        value: value.bdrRad,
        properties: properties.borderRadius
      });
      if (_gotCss4 && !isEmpty(_gotCss4)) {
        forEach(_gotCss4, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.boxSdw) {
      var _gotCss5 = AtrcControlBoxShadowCss(value.boxSdw, properties.boxShadow);
      if (_gotCss5 && !isEmpty(_gotCss5)) {
        forEach(_gotCss5, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  }
  return output;
};
export default AtrcControlBoundaryCss;
//# sourceMappingURL=css.js.map