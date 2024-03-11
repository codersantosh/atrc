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

* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Controls*/
import AtrcControlBorder from '../control-border';
import { AtrcControlBorderAllowedKeys } from '../control-border';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Utils*/
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
	AtrcUpdateTabValues,
	AtrcResetTab,
	AtrcResetTabs,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

import { AtrcUseColorSolids } from '../../utils/use-colors';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTabPanel = ({ value, tab, onChange, allSolids }) => {
	return (
		<AtrcControlBorder
			value={AtrcGetTabValues(value, tab, AtrcControlBorderAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			colors={allSolids}
			label=''
		/>
	);
};

const AtrcControlBorderTab = (props) => {
	const {
		value = {},
		label = __('Borders', 'atrc-prefix-atrc'),
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
	} = props;

	const allSolids = AtrcUseColorSolids();

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlBorderAllowedKeys)
		);
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues('normal', value, AtrcControlBorderAllowedKeys),
			onDeselect: () =>
				onChange(AtrcResetTab('normal', value, AtrcControlBorderAllowedKeys)),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues('hover', value, AtrcControlBorderAllowedKeys),
			onDeselect: () =>
				onChange(AtrcResetTab('hover', value, AtrcControlBorderAllowedKeys)),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-bdr-tab'),
				className,
				variant ? AtrcPrefix('ctrl-bdr-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlBorderAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal) => setTabAttr(newVal, tab)}
						tab={tab}
						allSolids={allSolids}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlBorderTab;
