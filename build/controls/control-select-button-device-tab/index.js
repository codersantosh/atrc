import React from 'react';

/*Attributes Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
    "xsHover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":""
    "xxlHover":""
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcDropdownDevice from '../../molecules/dropdown-device';
import AtrcPanelTools from '../../molecules/panel-tools';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function mappingDeviceTabValues(value, device, tab) {
  if (tab === 'normal') {
    if (value && value[device]) {
      return value[device];
    }
    return null;
  }
  if (value && value[device + tab]) {
    return value[device + tab];
  }
  return null;
}
function mappingDeviceTabNewValues(value, newVal, device, tab) {
  var valueCloned = cloneDeep(value);
  if (tab === 'normal') {
    valueCloned[device] = newVal;
  } else {
    valueCloned[device + tab] = newVal;
  }
  return valueCloned;
}
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    options = _ref.options,
    tab = _ref.tab,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    value: mappingDeviceTabValues(value, device, tab),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device, tab);
    },
    options: options,
    allowReset: !(mappingDeviceTabValues(value, device, tab) !== mappingDeviceTabValues(defaultValue, device, tab))
  });
};
var RenderTabPanel = function RenderTabPanel(_ref2) {
  var _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? '' : _ref2$label,
    value = _ref2.value,
    defaultValue = _ref2.defaultValue,
    options = _ref2.options,
    onChange = _ref2.onChange,
    _ref2$tab = _ref2.tab,
    tab = _ref2$tab === void 0 ? 'normal' : _ref2$tab;
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: label,
    tabs: AtrcAvailableDevices()
  }, function (rTab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: rTab.name,
      value: value,
      defaultValue: defaultValue,
      options: options,
      tab: tab,
      onChange: onChange
    });
  });
};
var AtrcControlSelectButtonDeviceTab = function AtrcControlSelectButtonDeviceTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? {} : _props$defaultValue,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs;
  var setDeviceTabAttr = function setDeviceTabAttr(newVal, device, tab) {
    onChange(mappingDeviceTabNewValues(value, newVal, device, tab));
  };
  var hasDeviceTabValue = function hasDeviceTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    if ('normal' === tab) {
      return !!(value.xs || value.sm || value.md || value.lg || value.xl || value.xxl);
    }
    return !!(value['xs' + tab] || value['sm' + tab] || value['md' + tab] || value['lg' + tab] || value['xl' + tab] || value['xxl' + tab]);
  };
  var resetTab = function resetTab(tab) {
    var valueCloned = cloneDeep(value);
    if ('normal' === tab) {
      delete valueCloned.xs;
      delete valueCloned.sm;
      delete valueCloned.md;
      delete valueCloned.lg;
      delete valueCloned.xl;
      delete valueCloned.xxl;
    } else {
      delete valueCloned['xs' + tab];
      delete valueCloned['sm' + tab];
      delete valueCloned['md' + tab];
      delete valueCloned['lg' + tab];
      delete valueCloned['xl' + tab];
      delete valueCloned['xxl' + tab];
    }
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: hasDeviceTabValue('normal'),
      onDeselect: function onDeselect() {
        return resetTab('normal');
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: hasDeviceTabValue('hover'),
      onDeselect: function onDeselect() {
        return resetTab('hover');
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-select-btn-device-tab'), className, variant ? AtrcPrefix('ctrl-select-btn-device-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: function onChange(newVal, device) {
          return setDeviceTabAttr(newVal, device, tab);
        },
        defaultValue: defaultValue,
        tab: tab,
        options: options,
        key: iDx
      });
    });
  });
};
export default AtrcControlSelectButtonDeviceTab;
//# sourceMappingURL=index.js.map