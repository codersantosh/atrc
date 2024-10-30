var _excluded = ["label", "value", "columns", "className", "variant", "onChange", "allowedDevices"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';
import { isArray, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';
import AtrcUseInstanceId from '../../utils/use-instance-id';

/* Internal */
import ColumnLayout from './columns-layout';

/* Local */
var _AtrcControlColumnsAdvanced = function AtrcControlColumnsAdvanced(props) {
  var label = props.label,
    value = props.value,
    columns = props.columns,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var instanceId = AtrcUseInstanceId(_AtrcControlColumnsAdvanced, 'atrc-dropdown-device');

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, _extends({
    id: instanceId,
    className: classnames(AtrcPrefix('ctrl-col-adv-lyt'), className, variant ? AtrcPrefix('ctrl-col-adv-lyt') + '-' + variant : ''),
    label: label,
    tabs: Devices()
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(ColumnLayout, {
      value: value && value[tab.name],
      onChange: function onChange(newVal) {
        return setAttr(newVal, tab.name);
      },
      columns: columns
    });
  });
};
export default _AtrcControlColumnsAdvanced;
//# sourceMappingURL=index.js.map