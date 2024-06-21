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
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
	AtrcUpdateTabValues,
	AtrcResetTab,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderTabPanel = ({ value, tab, onChange }) => {
	return (
		<AtrcControlDropdownColorGradient
			label={''}
			value={AtrcGetTabValues(
				value,
				tab,
				AtrcControlDropdownColorGradientAllowedKeys
			)}
			onChange={(newVal) => onChange(newVal, tab)}
		/>
	);
};

const AtrcControlDropdownColorGradientTab = (props) => {
	const {
		value = {},
		label = __('Color', 'atrc-prefix-atrc'),
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (newVal, tab) => {
		const newTabVal = AtrcUpdateTabValues(
			newVal,
			tab,
			value,
			AtrcControlDropdownColorGradientAllowedKeys
		);
		onChange(newTabVal);
	};

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'normal',
				value,
				AtrcControlDropdownColorGradientAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab(
						'normal',
						value,
						AtrcControlDropdownColorGradientAllowedKeys
					)
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
				AtrcControlDropdownColorGradientAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab(
						'hover',
						value,
						AtrcControlDropdownColorGradientAllowedKeys
					)
				),
		});
	}

	if (allowedTabs.includes('active')) {
		AllTabs.push({
			name: 'active',
			title: __('Active', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'active',
				value,
				AtrcControlDropdownColorGradientAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab(
						'active',
						value,
						AtrcControlDropdownColorGradientAllowedKeys
					)
				),
		});
	}

	if (allowedTabs.includes('focus')) {
		AllTabs.push({
			name: 'focus',
			title: __('Focus', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'focus',
				value,
				AtrcControlDropdownColorGradientAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab(
						'focus',
						value,
						AtrcControlDropdownColorGradientAllowedKeys
					)
				),
		});
	}

	if (allowedTabs.includes('visited')) {
		AllTabs.push({
			name: 'visited',
			title: __('Visited', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'visited',
				value,
				AtrcControlDropdownColorGradientAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab(
						'visited',
						value,
						AtrcControlDropdownColorGradientAllowedKeys
					)
				),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-dropdown-cl-grd-tab'),
				className,
				variant ? AtrcPrefix('ctrl-dropdown-cl-grd-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			allowTabs={true}
			tools={AllTabs}
			{...defaultProps}>
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
export default AtrcControlDropdownColorGradientTab;
