var _excluded = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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

========*ParentHover values*========
    "clParentHover":"",
    "grdParentHover":"",
}

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcControlDropdownColorGradient from '../control-dropdown-color-gradient';
import { AtrcControlDropdownColorGradientAllowedKeys } from '../control-dropdown-color-gradient';

/*Inbuilt utils*/

import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
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
    label = _props$label === void 0 ? '' : _props$label,
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
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlDropdownColorGradientAllowedKeys));
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
        hasValue: AtrcHasTabValues('normal', value, AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('normal', value, AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Hover', value, AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('active'.toLowerCase())) {
      tabs.push({
        name: 'Active',
        title: __('Active', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Active', value, AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Active', value, AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('focus'.toLowerCase())) {
      tabs.push({
        name: 'Focus',
        title: __('Focus', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Focus', value, AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Focus', value, AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('visited'.toLowerCase())) {
      tabs.push({
        name: 'Visited',
        title: __('Visited', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Visited', value, AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Visited', value, AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlDropdownColorGradientAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('ParentHover', value, AtrcControlDropdownColorGradientAllowedKeys));
        }
      });
    }
    return tabs;
  }, [value]);
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