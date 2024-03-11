/*Value Structure
Type Object
{
========*Normal values*========
    cl : '',
    x : '',
    y : '',
    blr : '',

========*Hover values*========
    "clHover":"",
    "xHover":"",
    "yHover":"",
    "blrHover":"",

* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';

/* Controls */
import { AtrcControlTextShadowAllowedKeys } from '../control-text-shadow';
import AtrcControlTextShadow from '../control-text-shadow';

/*Utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    disableUnits = _ref.disableUnits,
    tab = _ref.tab,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcControlTextShadow, {
    value: AtrcGetTabValues(value, tab, AtrcControlTextShadowAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    },
    disableUnits: disableUnits,
    label: ""
  });
};
var AtrcControlTextShadowTab = function AtrcControlTextShadowTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Text shadow', 'atrc-prefix-atrc') : _props$label,
    _props$help = props.help,
    help = _props$help === void 0 ? '' : _props$help,
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
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlTextShadowAllowedKeys));
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('normal', value, AtrcControlTextShadowAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('normal', value, AtrcControlTextShadowAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('hover', value, AtrcControlTextShadowAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('hover', value, AtrcControlTextShadowAllowedKeys));
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-txt-sdw-tab'), className, variant ? AtrcPrefix('ctrl-txt-sdw-tab') + '-' + variant : ''),
    label: label,
    help: help,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlTextShadowAllowedKeys));
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
export default AtrcControlTextShadowTab;
//# sourceMappingURL=index.js.map