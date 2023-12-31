/*Attributes Structure
Type Object
{
========*Normal values*========
    cl: '#72aee6',
    sty: 'solid',
    w: '1px'
    =======OR==========
	tCl: '#72aee6',
    tSty: 'solid',
    tW: '1px'

	rCl: '#72aee6',
    rSty: 'solid',
    rW: '1px'

	bCl: '#72aee6',
    bSty: 'solid',
    bW: '1px'

	lCl: '#72aee6',
    lSty: 'solid',
    lW: '1px'

========*Hover values*========
    clHover: '#72aee6',
    styHover: 'solid',
    wHover: '1px'
    =======OR==========
	tClHover: '#72aee6',
    tStyHover: 'solid',
    tWHover: '1px'

	rClHover: '#72aee6',
    rStyHover: 'solid',
    rWHover: '1px'

	bClHover: '#72aee6',
    bStyHover: 'solid',
    bWHover: '1px'

	lClHover: '#72aee6',
    lStyHover: 'solid',
    lWHover: '1px'

========*ParentHover values*========
	clParentHover: '#72aee6',
    styParentHover: 'solid',
    wParentHover: '1px'
    =======OR==========
	tClParentHover: '#72aee6',
    tStyParentHover: 'solid',
    tWParentHover: '1px'

	rClParentHover: '#72aee6',
    rStyParentHover: 'solid',
    rWParentHover: '1px'

	bClParentHover: '#72aee6',
    bStyParentHover: 'solid',
    bWParentHover: '1px'

	lClParentHover: '#72aee6',
    lStyParentHover: 'solid',
    lWParentHover: '1px'
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Inbuilt*/

import AtrcControlBorder from '../control-border';
import AtrcPanelTools from '../panel-tools';
import { AtrcControlBorderAllowedKeys } from '../control-border';

/*Inbuilt utils*/

import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUseColorSolids } from '../../utils/use-colors';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTabPanel = ({
  value,
  tab,
  onChange,
  allSolids
}) => {
  return /*#__PURE__*/React.createElement(AtrcControlBorder, {
    value: AtrcGetTabValues(value, tab, AtrcControlBorderAllowedKeys),
    onChange: newVal => onChange(newVal, tab),
    colors: allSolids
  });
};
const AtrcControlBorderTab = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    variant = '',
    className = '',
    allowedTabs = ['normal', 'hover']
  } = props;
  const allSolids = AtrcUseColorSolids();
  const setTabAttr = (newVal, tab) => {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlBorderAllowedKeys));
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlBorderAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('normal', value, AtrcControlBorderAllowedKeys))
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlBorderAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('Hover', value, AtrcControlBorderAllowedKeys))
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlBorderAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('ParentHover', value, AtrcControlBorderAllowedKeys))
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-bdr-tab'), className, variant ? AtrcPrefix('ctrl-bdr-tab') + '-' + variant : ''),
    label: label,
    resetAll: () => onChange(AtrcResetTabs(value, AtrcControlBorderAllowedKeys)),
    allowTabs: true,
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => /*#__PURE__*/React.createElement(RenderTabPanel, {
    value: value,
    onChange: newVal => setTabAttr(newVal, tab),
    tab: tab,
    allSolids: allSolids,
    key: iDx
  })));
};
export default AtrcControlBorderTab;
//# sourceMappingURL=index.js.map