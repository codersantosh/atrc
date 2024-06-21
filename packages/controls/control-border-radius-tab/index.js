import React from 'react';

/*Attributes Structure
Type Object
{

========*Single values*========
    "normal":"",
    "hover":"",

========*Normal values*========
    tL : '',
    tR : '',
    bL : '',
    bR : '',

========*Hover values*========
    tLHover : '',
    tRHover : '',
    bLHover : '',
    bRHover : '',
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Controls*/
import AtrcControlBorderRadius from '../control-border-radius';
import { AtrcControlBorderRadiusAllowedKeys } from '../control-border-radius';

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

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTabPanel = ({ value, tab, onChange }) => {
	return (
		<AtrcControlBorderRadius
			value={AtrcGetTabValues(value, tab, AtrcControlBorderRadiusAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			label=''
		/>
	);
};

const AtrcControlBorderRadiusTab = (props) => {
	const {
		value = {},
		label = __('Border radius', 'atrc-prefix-atrc'),
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(
				newVal,
				tab,
				value,
				AtrcControlBorderRadiusAllowedKeys
			)
		);
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'normal',
				value,
				AtrcControlBorderRadiusAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('normal', value, AtrcControlBorderRadiusAllowedKeys)
				),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'hover',
				value,
				AtrcControlBorderRadiusAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('hover', value, AtrcControlBorderRadiusAllowedKeys)
				),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-bdr-rad-tab'),
				className,
				variant ? AtrcPrefix('ctrl-bdr-rad-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlBorderRadiusAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal) => setTabAttr(newVal, tab)}
						tab={tab}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlBorderRadiusTab;
