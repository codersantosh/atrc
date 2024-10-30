var _excluded = ["label", "className", "variant", "value", "onChange", "allowedDevices"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type object{
    xs:'',
    sm:'',
    md:'',
    lg:'',
    xl:'',
    xxl:'',
}
**/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray, isEmpty, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var getNewVal = function getNewVal(value, key) {
  if (!value) {
    return true;
  }
  return !value[key];
};
var RenderToggle = function RenderToggle(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    allowedDevices = _ref.allowedDevices;
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  var dev = Devices();
  return dev.map(function (tab, iDx) {
    if (!tab.on) {
      return false;
    }
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m'),
      key: iDx
    }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
      key: tab.name,
      label: sprintf(
      // translators: %s: placeholder for title
      __('Hide on %s.', 'atrc-prefix-atrc'), tab.title),
      checked: value && value[tab.name],
      onChange: function onChange() {
        return _onChange(getNewVal(value, tab.name), tab.name);
      }
    }));
  });
};
var AtrcControlDeviceDisplay = function AtrcControlDeviceDisplay(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Device display', 'atrc-prefix-atrc') : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var DisplayTabs = useMemo(function () {
    return [{
      name: 'display',
      title: label,
      hasValue: !isEmpty(value),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }];
  }, []);

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-device-d'), className, variant ? AtrcPrefix('ctrl-device-d') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: DisplayTabs
  }, defaultProps), function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderToggle, {
        key: iDx,
        value: value,
        onChange: setAttr,
        allowedDevices: allowedDevices
      });
    });
  });
};
export default AtrcControlDeviceDisplay;
//# sourceMappingURL=index.js.map