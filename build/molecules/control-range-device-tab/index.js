function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
import AtrcRange from '../../atoms/range';
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
  var valueCloned = Object.assign({}, value);
  if (tab === 'normal') {
    valueCloned[device] = newVal;
  } else if ('xs' === device) {
    valueCloned[tab] = newVal;
  } else {
    valueCloned[device + tab] = newVal;
  }
  return valueCloned;
}
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    tab = _ref.tab,
    _onChange = _ref.onChange,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return /*#__PURE__*/React.createElement(AtrcRange, _extends({}, inputProps, {
    label: __('Enter value', 'atrc-prefix-atrc'),
    value: mappingDeviceTabValues(value, device, tab),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device, tab);
    }
  }));
};
var RenderTabPanel = function RenderTabPanel(_ref2) {
  var _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? '' : _ref2$label,
    value = _ref2.value,
    onChange = _ref2.onChange,
    _ref2$tab = _ref2.tab,
    tab = _ref2$tab === void 0 ? 'normal' : _ref2$tab,
    _ref2$inputProps = _ref2.inputProps,
    inputProps = _ref2$inputProps === void 0 ? {} : _ref2$inputProps;
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: label,
    tabs: AtrcAvailableDevices()
  }, function (rTab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: rTab.name,
      value: value,
      tab: tab,
      onChange: onChange,
      inputProps: inputProps
    });
  });
};
var AtrcControlRangeDeviceTab = function AtrcControlRangeDeviceTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$inputProps = props.inputProps,
    inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
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
    return !!(value[tab] || value['sm' + tab] || value['md' + tab] || value['lg' + tab] || value['xl' + tab] || value['xxl' + tab]);
  };
  var resetTab = function resetTab(tab) {
    var valueCloned = Object.assign({}, value);
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
  var resetAll = function resetAll() {
    onChange({});
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: hasDeviceTabValue('normal'),
        onDeselect: function onDeselect() {
          return resetTab('normal');
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: hasDeviceTabValue('Hover'),
        onDeselect: function onDeselect() {
          return resetTab('Hover');
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: hasDeviceTabValue('ParentHover'),
        onDeselect: function onDeselect() {
          return resetTab('ParentHover');
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-range-device-tab'), className, variant ? AtrcPrefix('ctrl-range-device-tab') + '-' + variant : ''),
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
        inputProps: inputProps,
        tab: tab,
        key: iDx
      });
    });
  });
};
export default AtrcControlRangeDeviceTab;
//# sourceMappingURL=index.js.map