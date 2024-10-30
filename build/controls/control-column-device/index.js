var _excluded = ["value", "onChange", "variant", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Value Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
}
* */
/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Controls*/
import AtrcControlSelectDevice from '../control-select-device';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColumnOptions from './options';

/*Local*/
var AtrcControlColumnDevice = function AtrcControlColumnDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlSelectDevice, _extends({
    className: classnames(AtrcPrefix('ctrl-col-device'), className, variant ? AtrcPrefix('ctrl-col-device') + '-' + variant : ''),
    options: ColumnOptions(),
    onChange: function onChange(newValue) {
      if (!newValue) {
        _onChange(newValue);
      } else {
        var intValues = {};
        map(newValue, function (item, iDx) {
          intValues[iDx] = parseInt(item);
        });
        _onChange(intValues);
      }
    },
    value: value || {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 4,
      xxl: 4
    }
  }, defaultProps));
};
export default AtrcControlColumnDevice;
//# sourceMappingURL=index.js.map