/*Attributes Structure
Type Object
{
========*Normal values*========
    cl : '',
    x : '',
    y : '',
    blr : '',
    sprd : '',
    pos : '',

========*Hover values*========
    "clHover":"",
    "xHover":"",
    "yHover":"",
    "blrHover":"",
    "sprdHover":"",
    "posHover":"",

========*ParentHover values*========
    "clParentHover":"",
    "xParentHover":"",
    "yParentHover":"",
    "blrParentHover":"",
    "sprdParentHover":"",
    "posParentHover":"",

}
* */
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/

import AtrcControlBoxShadow from '../control-box-shadow';
import { AtrcControlBoxShadowAllowedKeys } from '../control-box-shadow';
import AtrcPanelTools from '../panel-tools';

/*Inbuilt utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    disableUnits = _ref.disableUnits,
    tab = _ref.tab,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcControlBoxShadow, {
    value: AtrcGetTabValues(value, tab, AtrcControlBoxShadowAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    },
    disableUnits: disableUnits
  });
};
var AtrcControlBoxShadowTab = function AtrcControlBoxShadowTab(props) {
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
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs;
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlBoxShadowAllowedKeys));
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlBoxShadowAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('normal', value, AtrcControlBoxShadowAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlBoxShadowAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Hover', value, AtrcControlBoxShadowAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlBoxShadowAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('ParentHover', value, AtrcControlBoxShadowAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-box-sdw-tab'), className, variant ? AtrcPrefix('ctrl-box-sdw-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlBoxShadowAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        disableUnits: disableUnits,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      });
    });
  });
};
export default AtrcControlBoxShadowTab;
//# sourceMappingURL=index.js.map