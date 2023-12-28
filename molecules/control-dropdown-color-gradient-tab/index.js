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
import {
	AtrcControlDropdownColorGradient,
	AtrcPanelTools,
	AtrcControlDropdownColorGradientAllowedKeys,
} from '../index';

/*Inbuilt utils*/
import {
	AtrcGetTabValues,
	AtrcUpdateTabValues,
	AtrcHasTabValues,
	AtrcResetTab,
} from '../../utils';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
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
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(
				newVal,
				tab,
				value,
				AtrcControlDropdownColorGradientAllowedKeys
			)
		);
	};

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = useMemo(() => {
		const tabs = [];
		if (allowedTabs.includes('normal'.toLowerCase())) {
			tabs.push({
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

		if (allowedTabs.includes('hover'.toLowerCase())) {
			tabs.push({
				name: 'Hover',
				title: __('Hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Hover',
					value,
					AtrcControlDropdownColorGradientAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab(
							'Hover',
							value,
							AtrcControlDropdownColorGradientAllowedKeys
						)
					),
			});
		}

		if (allowedTabs.includes('active'.toLowerCase())) {
			tabs.push({
				name: 'Active',
				title: __('Active', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Active',
					value,
					AtrcControlDropdownColorGradientAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab(
							'Active',
							value,
							AtrcControlDropdownColorGradientAllowedKeys
						)
					),
			});
		}

		if (allowedTabs.includes('focus'.toLowerCase())) {
			tabs.push({
				name: 'Focus',
				title: __('Focus', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Focus',
					value,
					AtrcControlDropdownColorGradientAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab(
							'Focus',
							value,
							AtrcControlDropdownColorGradientAllowedKeys
						)
					),
			});
		}

		if (allowedTabs.includes('visited'.toLowerCase())) {
			tabs.push({
				name: 'Visited',
				title: __('Visited', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Visited',
					value,
					AtrcControlDropdownColorGradientAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab(
							'Visited',
							value,
							AtrcControlDropdownColorGradientAllowedKeys
						)
					),
			});
		}

		if (allowedTabs.includes('parenthover'.toLowerCase())) {
			tabs.push({
				name: 'ParentHover',
				title: __('Parent hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'ParentHover',
					value,
					AtrcControlDropdownColorGradientAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab(
							'ParentHover',
							value,
							AtrcControlDropdownColorGradientAllowedKeys
						)
					),
			});
		}
		return tabs;
	}, [value]);

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
