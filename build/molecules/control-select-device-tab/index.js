/*Attributes Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
    "Hover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":""
    "xxlHover":""
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import AtrcPanelTools from '../panel-tools';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
function mappingDeviceTabValues(value, device, tab) {
  if (tab === 'normal') {
    if (value && value[device]) {
      return value[device];
    }
    return null;
  }
  if ('xs' === device) {
    if (value && value[tab]) {
      return value[tab];
    }
    return null;
  }
  if (value && value[device + tab]) {
    return value[device + tab];
  }
  return null;
}
function mappingDeviceTabNewValues(value, newVal, device, tab) {
  const valueCloned = Object.assign({}, value);
  if (tab === 'normal') {
    valueCloned[device] = newVal;
  } else if ('xs' === device) {
    valueCloned[tab] = newVal;
  } else {
    valueCloned[device + tab] = newVal;
  }
  return valueCloned;
}
const RenderTab = ({
  device,
  isMulti,
  value,
  defaultValue,
  options,
  tab,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcSelect, {
    value: mappingDeviceTabValues(value, device, tab),
    onChange: newVal => onChange(newVal, device, tab),
    options: options,
    isMulti: isMulti,
    allowReset: mappingDeviceTabValues(value, device, tab) !== mappingDeviceTabValues(defaultValue, device, tab)
  });
};
const RenderTabPanel = ({
  label = '',
  isMulti,
  value,
  defaultValue,
  options,
  onChange,
  tab = 'normal'
}) => {
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: label,
    tabs: AtrcAvailableDevices
  }, rTab => /*#__PURE__*/React.createElement(RenderTab, {
    device: rTab.name,
    isMulti: isMulti,
    value: value,
    defaultValue: defaultValue,
    options: options,
    tab: tab,
    onChange: onChange
  }));
};
const AtrcControlSelectDeviceTab = props => {
  const {
    value = {},
    defaultValue = {},
    label = '',
    options = [],
    onChange = () => {},
    variant = '',
    className = '',
    isMulti = false,
    allowedTabs = ['normal', 'hover']
  } = props;
  const setDeviceTabAttr = (newVal, device, tab) => {
    onChange(mappingDeviceTabNewValues(value, newVal, device, tab));
  };
  const hasDeviceTabValue = tab => {
    if (!value || isEmpty(value)) {
      return false;
    }
    if ('normal' === tab) {
      return !!(value.xs || value.sm || value.md || value.lg || value.xl || value.xxl);
    }
    return !!(value[tab] || value['sm' + tab] || value['md' + tab] || value['lg' + tab] || value['xl' + tab] || value['xxl' + tab]);
  };
  const resetTab = tab => {
    const valueCloned = Object.assign({}, value);
    if ('normal' === tab) {
      delete valueCloned.xs;
      delete valueCloned.sm;
      delete valueCloned.md;
      delete valueCloned.lg;
      delete valueCloned.xl;
      delete valueCloned.xxl;
    } else {
      delete valueCloned[tab];
      delete valueCloned['sm' + tab];
      delete valueCloned['md' + tab];
      delete valueCloned['lg' + tab];
      delete valueCloned['xl' + tab];
      delete valueCloned['xxl' + tab];
    }
    onChange(valueCloned);
  };
  const resetAll = () => {
    onChange({});
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: hasDeviceTabValue('normal'),
        onDeselect: () => resetTab('normal')
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: hasDeviceTabValue('Hover'),
        onDeselect: () => resetTab('Hover')
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: hasDeviceTabValue('ParentHover'),
        onDeselect: () => resetTab('ParentHover')
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-select-device-tab'), className, variant ? AtrcPrefix('ctrl-select-device-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => /*#__PURE__*/React.createElement(RenderTabPanel, {
    isMulti: isMulti,
    value: value,
    defaultValue: defaultValue,
    options: options,
    onChange: (newVal, device) => setDeviceTabAttr(newVal, device, tab),
    tab: tab,
    key: iDx
  })));
};
export default AtrcControlSelectDeviceTab;
//# sourceMappingURL=index.js.map