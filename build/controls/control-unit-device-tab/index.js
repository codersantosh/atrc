var _excluded = ["label", "disableUnits", "value", "onChange", "tab"],
  _excluded2 = ["value", "label", "onChange", "disableUnits", "variant", "className", "allowedTabs"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Attributes Structure
Type Object
{
========*Normal values*========
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
    
========*Hover values*========
    "hover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":"",
    "xxlHover":"",
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/* Controls */
import AtrcControlUnitDevice from '../control-unit-device';
import { AtrcControlUnitDeviceAllowedKeys } from '../control-unit-device';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Enter value', 'atrc-prefix-atrc') : _ref$label,
    disableUnits = _ref.disableUnits,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'normal' : _ref$tab,
    defaultProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlUnitDevice, _extends({
    label: label,
    value: AtrcGetTabValues(value, tab, AtrcControlUnitDeviceAllowedKeys),
    onChange: onChange,
    disableUnits: disableUnits
  }, defaultProps));
};
var AtrcControlUnitDeviceTab = function AtrcControlUnitDeviceTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var setTabAttr = function setTabAttr(tab, newVal) {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlUnitDeviceAllowedKeys));
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('normal', value, AtrcControlUnitDeviceAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('normal', value, AtrcControlUnitDeviceAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('hover', value, AtrcControlUnitDeviceAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('hover', value, AtrcControlUnitDeviceAllowedKeys));
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-unit-device-tab'), className, variant ? AtrcPrefix('ctrl-unit-device-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlUnitDeviceAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value,
        disableUnits: disableUnits,
        onChange: function onChange(newVal) {
          return setTabAttr(tab, newVal);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
export default AtrcControlUnitDeviceTab;
//# sourceMappingURL=index.js.map