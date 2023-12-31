function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
========*Normal values*========
    blr : '',
    brgtNess : '',
    ctrs : '',
    grayScl : '',
    hueRot : '',
    inv : '',
    opa : '',
    sart : '',
    sepia : '',

    hSdw : '',
    vSdw : '',
    sdwBlr : '',
    sdwSprd : '',
    sdwCl : ''

========*Hover values*========
    blrHover : '',
    brgtNessHover : '',
    ctrsHover : '',
    graySclHover : '',
    hueRotHover : '',
    invHover : '',
    opaHover : '',
    sartHover : '',
    sepiaHover : '',

    hSdwHover : '',
    vSdwHover : '',
    sdwBlrHover : '',
    sdwSprdHover : '',
    sdwClHover : ''

========*ParentHover values*========
    blrParentHover : '',
    brgtNessParentHover : '',
    ctrsParentHover : '',
    graySclParentHover : '',
    hueRotParentHover : '',
    invParentHover : '',
    opaParentHover : '',
    sartParentHover : '',
    sepiaParentHover : '',

    hSdwParentHover : '',
    vSdwParentHover : '',
    sdwBlrParentHover : '',
    sdwSprdParentHover : '',
    sdwClParentHover : ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/
import { AtrcControlFilterAllowedKeys } from '../control-filter';
import AtrcControlFilter from '../control-filter';
import AtrcPanelTools from '../panel-tools';

/*Inbuilt utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTabPanel = props => {
  const {
    value,
    tab,
    onChange,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlFilter, _extends({
    label: __('Add filter options', 'atrc-prefix-atrc'),
    value: AtrcGetTabValues(value, tab, AtrcControlFilterAllowedKeys),
    onChange: newVal => onChange(newVal, tab)
  }, defaultProps));
};
const AtrcControlFilterTab = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    variant = '',
    className = '',
    allowedTabs = ['normal', 'hover'],
    ...defaultProps
  } = props;
  const setTabAttr = (newVal, tab) => {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlFilterAllowedKeys));
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlFilterAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('normal', value, AtrcControlFilterAllowedKeys))
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlFilterAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('Hover', value, AtrcControlFilterAllowedKeys))
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlFilterAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('ParentHover', value, AtrcControlFilterAllowedKeys))
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-fl-tab'), className, variant ? AtrcPrefix('ctrl-fl-tab') + '-' + variant : ''),
    label: label,
    resetAll: () => onChange(AtrcResetTabs(value, AtrcControlFilterAllowedKeys)),
    allowTabs: true,
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
    value: value,
    onChange: newVal => setTabAttr(newVal, tab),
    tab: tab,
    key: iDx
  }, defaultProps))));
};
export default AtrcControlFilterTab;
//# sourceMappingURL=index.js.map