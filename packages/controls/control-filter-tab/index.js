import React from 'react';

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


* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Controls*/
import { AtrcControlFilterAllowedKeys } from '../control-filter';
import AtrcControlFilter from '../control-filter';

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
const RenderTabPanel = (props) => {
	const { value, tab, onChange, ...defaultProps } = props;
	return (
		<AtrcControlFilter
			label={__('Add filter options', 'atrc-prefix-atrc')}
			value={AtrcGetTabValues(value, tab, AtrcControlFilterAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			{...defaultProps}
		/>
	);
};

const AtrcControlFilterTab = (props) => {
	const {
		value = {},
		label = __('Filter', 'atrc-prefix-atrc'),
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlFilterAllowedKeys)
		);
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues('normal', value, AtrcControlFilterAllowedKeys),
			onDeselect: () =>
				onChange(AtrcResetTab('normal', value, AtrcControlFilterAllowedKeys)),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues('hover', value, AtrcControlFilterAllowedKeys),
			onDeselect: () =>
				onChange(AtrcResetTab('hover', value, AtrcControlFilterAllowedKeys)),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-fl-tab'),
				className,
				variant ? AtrcPrefix('ctrl-fl-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlFilterAllowedKeys))
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
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlFilterTab;
