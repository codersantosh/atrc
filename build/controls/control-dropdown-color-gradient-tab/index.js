var _excluded = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Value Structure
Type object
{
========*Normal values*========
    cl:'',
    grd:'',

========*Hover values*========
    "clHover":"",
    "grdHover":"",

========*Active values*========
"clActive":"",
"grdActive":"",

========*Focus values*========
"clFocus":"",
"grdFocus":"",

========*Visited values*========
"clVisited":"",
"grdVisited":"",

========*Active values*========
"clActive":"",
"grdActive":"",

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/* Controls */
import AtrcControlDropdownColorGradient from '../control-dropdown-color-gradient';
import { AtrcControlDropdownColorGradientAllowedKeys } from '../control-dropdown-color-gradient';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    tab = _ref.tab,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcControlDropdownColorGradient, {
    label: '',
    value: AtrcGetTabValues(value, tab, AtrcControlDropdownColorGradientAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  });
};
var AtrcControlDropdownColorGradientTab = function AtrcControlDropdownColorGradientTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Color', 'atrc-prefix-atrc') : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setTabAttr = function setTabAttr(newVal, tab) {
    var newTabVal = AtrcUpdateTabValues(newVal, tab, value, AtrcControlDropdownColorGradientAllowedKeys);
    onChange(newTabVal);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('normal', value, AtrcControlDropdownColorGradientAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('normal', value, AtrcControlDropdownColorGradientAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('hover', value, AtrcControlDropdownColorGradientAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('hover', value, AtrcControlDropdownColorGradientAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('active')) {
    AllTabs.push({
      name: 'active',
      title: __('Active', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('active', value, AtrcControlDropdownColorGradientAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('active', value, AtrcControlDropdownColorGradientAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('focus')) {
    AllTabs.push({
      name: 'focus',
      title: __('Focus', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('focus', value, AtrcControlDropdownColorGradientAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('focus', value, AtrcControlDropdownColorGradientAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('visited')) {
    AllTabs.push({
      name: 'visited',
      title: __('Visited', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('visited', value, AtrcControlDropdownColorGradientAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('visited', value, AtrcControlDropdownColorGradientAllowedKeys));
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-cl-grd-tab'), className, variant ? AtrcPrefix('ctrl-dropdown-cl-grd-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, defaultProps), function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      });
    });
  });
};
export default AtrcControlDropdownColorGradientTab;
//# sourceMappingURL=index.js.map