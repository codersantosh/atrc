/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */

/* Utils */
import { AtrcDeviceCss, AtrcDeviceTabCss } from '../../utils/object-values-with-devices';
import { AtrcTabCss } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
var AtrcControlWidthHeightCss = function AtrcControlWidthHeightCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      minWidth: '--at-min-w',
      width: '--at-w',
      maxWidth: '--at-max-w',
      minHeight: '--at-min-h',
      height: '--at-h',
      maxHeight: '--at-max-h'
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
    if (value.minW) {
      var gotCss = AtrcDeviceTabCss(value.minW, '', properties.minWidth);
      if (gotCss && !isEmpty(gotCss)) {
        forEach(gotCss, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.w) {
      var _gotCss = AtrcDeviceTabCss(value.w, '', properties.width);
      if (_gotCss && !isEmpty(_gotCss)) {
        forEach(_gotCss, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.maxW) {
      var _gotCss2 = AtrcDeviceTabCss(value.maxW, '', properties.maxWidth);
      if (_gotCss2 && !isEmpty(_gotCss2)) {
        forEach(_gotCss2, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.minH) {
      var _gotCss3 = AtrcDeviceTabCss(value.minH, '', properties.minHeight);
      if (_gotCss3 && !isEmpty(_gotCss3)) {
        forEach(_gotCss3, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.h) {
      var _gotCss4 = AtrcDeviceTabCss(value.h, '', properties.height);
      if (_gotCss4 && !isEmpty(_gotCss4)) {
        forEach(_gotCss4, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.maxH) {
      var _gotCss5 = AtrcDeviceTabCss(value.maxH, '', properties.maxHeight);
      if (_gotCss5 && !isEmpty(_gotCss5)) {
        forEach(_gotCss5, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else if ('device' === type) {
    if (value.minW) {
      var _gotCss6 = AtrcDeviceCss(value.minW, '', properties.minWidth);
      if (_gotCss6 && !isEmpty(_gotCss6)) {
        forEach(_gotCss6, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.w) {
      var _gotCss7 = AtrcDeviceCss(value.w, '', properties.width);
      if (_gotCss7 && !isEmpty(_gotCss7)) {
        forEach(_gotCss7, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.maxW) {
      var _gotCss8 = AtrcDeviceCss(value.maxW, '', properties.maxWidth);
      if (_gotCss8 && !isEmpty(_gotCss8)) {
        forEach(_gotCss8, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.minH) {
      var _gotCss9 = AtrcDeviceCss(value.minH, '', properties.minHeight);
      if (_gotCss9 && !isEmpty(_gotCss9)) {
        forEach(_gotCss9, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.h) {
      var _gotCss10 = AtrcDeviceCss(value.h, '', properties.height);
      if (_gotCss10 && !isEmpty(_gotCss10)) {
        forEach(_gotCss10, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.maxH) {
      var _gotCss11 = AtrcDeviceCss(value.maxH, '', properties.maxHeight);
      if (_gotCss11 && !isEmpty(_gotCss11)) {
        forEach(_gotCss11, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else if ('tab' === type) {
    if (value.minW) {
      var _gotCss12 = AtrcTabCss(value.minW, '', properties.minWidth);
      if (_gotCss12 && !isEmpty(_gotCss12)) {
        forEach(_gotCss12, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.w) {
      var _gotCss13 = AtrcTabCss(value.w, '', properties.width);
      if (_gotCss13 && !isEmpty(_gotCss13)) {
        forEach(_gotCss13, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.maxW) {
      var _gotCss14 = AtrcTabCss(value.maxW, '', properties.maxWidth);
      if (_gotCss14 && !isEmpty(_gotCss14)) {
        forEach(_gotCss14, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.minH) {
      var _gotCss15 = AtrcTabCss(value.minH, '', properties.minHeight);
      if (_gotCss15 && !isEmpty(_gotCss15)) {
        forEach(_gotCss15, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.h) {
      var _gotCss16 = AtrcTabCss(value.h, '', properties.height);
      if (_gotCss16 && !isEmpty(_gotCss16)) {
        forEach(_gotCss16, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
    if (value.maxH) {
      var _gotCss17 = AtrcTabCss(value.maxH, '', properties.maxHeight);
      if (_gotCss17 && !isEmpty(_gotCss17)) {
        forEach(_gotCss17, function (item, itemKey) {
          output[itemKey] += item;
        });
      }
    }
  } else {
    if (value.minW) {
      output.xs += "".concat(properties.minWidth, "      : ").concat(value.minW, ";");
    }
    if (value.w) {
      output.xs += "".concat(properties.width, "      : ").concat(value.w, ";");
    }
    if (value.maxW) {
      output.xs += "".concat(properties.maxWidth, "      : ").concat(value.maxW, ";");
    }
    if (value.minH) {
      output.xs += "".concat(properties.minHeight, "      : ").concat(value.minH, ";");
    }
    if (value.h) {
      output.xs += "".concat(properties.height, "      : ").concat(value.h, ";");
    }
    if (value.maxH) {
      output.xs += "".concat(properties.maxHeight, "      : ").concat(value.maxH, ";");
    }
  }
  return output;
};
export default AtrcControlWidthHeightCss;
//# sourceMappingURL=css.js.map