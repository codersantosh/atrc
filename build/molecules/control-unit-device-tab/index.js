function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    "Hover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":"",
    "xxlHover":"",
    
========*ParentHover values*========
    "ParentHover":"",
    "smParentHover":"",
    "mdParentHover":"",
    "lgParentHover":"",
    "xlParentHover":"",
    "xxlParentHover":"",

}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcControlUnitDevice from '../control-unit-device';
import { AtrcControlUnitDeviceAllowedKeys } from '../control-unit-device';

/*Inbuilt utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTabPanel = ({
  label = __('Enter value', 'atrc-prefix-atrc'),
  disableUnits,
  value,
  onChange,
  tab = 'normal',
  ...defaultProps
}) => {
  return /*#__PURE__*/React.createElement(AtrcControlUnitDevice, _extends({
    label: label,
    value: AtrcGetTabValues(value, tab, AtrcControlUnitDeviceAllowedKeys),
    onChange: onChange,
    disableUnits: disableUnits
  }, defaultProps));
};
const AtrcControlUnitDeviceTab = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    disableUnits = false,
    variant = '',
    className = '',
    allowedTabs = ['normal', 'hover'],
    ...defaultProps
  } = props;
  const setTabAttr = (newVal, tab) => {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlUnitDeviceAllowedKeys));
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlUnitDeviceAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('normal', value, AtrcControlUnitDeviceAllowedKeys))
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlUnitDeviceAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('Hover', value, AtrcControlUnitDeviceAllowedKeys))
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlUnitDeviceAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('ParentHover', value, AtrcControlUnitDeviceAllowedKeys))
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-unit-device-tab'), className, variant ? AtrcPrefix('ctrl-unit-device-tab') + '-' + variant : ''),
    label: label,
    rresetAll: () => onChange(AtrcResetTabs(value, AtrcControlUnitDeviceAllowedKeys)),
    allowTabs: true,
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
    value: value,
    disableUnits: disableUnits,
    onChange: newVal => setTabAttr(newVal, tab),
    tab: tab,
    key: iDx
  }, defaultProps))));
};
export default AtrcControlUnitDeviceTab;
//# sourceMappingURL=index.js.map