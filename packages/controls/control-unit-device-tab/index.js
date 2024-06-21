import React from 'react';

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
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
	AtrcUpdateTabValues,
	AtrcResetTab,
	AtrcResetTabs,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTabPanel = ({
	label = __('Enter value', 'atrc-prefix-atrc'),
	disableUnits,
	value,
	onChange,
	tab = 'normal',
	...defaultProps
}) => {
	
	return (
		<AtrcControlUnitDevice
			label={label}
			value={AtrcGetTabValues(value, tab, AtrcControlUnitDeviceAllowedKeys)}
			onChange={onChange}
			disableUnits={disableUnits}
			{...defaultProps}
		/>
	);
};

const AtrcControlUnitDeviceTab = (props) => {
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

	const setTabAttr = (tab, newVal) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlUnitDeviceAllowedKeys)
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
				AtrcControlUnitDeviceAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('normal', value, AtrcControlUnitDeviceAllowedKeys)
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
				AtrcControlUnitDeviceAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('hover', value, AtrcControlUnitDeviceAllowedKeys)
				),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-unit-device-tab'),
				className,
				variant ? AtrcPrefix('ctrl-unit-device-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlUnitDeviceAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						disableUnits={disableUnits}
						onChange={(newVal) => setTabAttr(tab, newVal)}
						tab={tab}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlUnitDeviceTab;
