/*Attributes Structure
Type Object
{

========*Single values*========
    "normal":"",
    "Hover":"",
    "ParentHover":"",

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

========*ParentHover values*========
    "tLParentHover":"",
    "tRParentHover":"",
    "bLParentHover":"",
    "bRParentHover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Inbuilt*/
import {
	AtrcControlBorderRadius,
	AtrcPanelTools,
	AtrcControlBorderRadiusAllowedKeys,
} from '../index';

/*Inbuilt utils*/
import {
	AtrcUpdateTabValues,
	AtrcHasTabValues,
	AtrcResetTab,
	AtrcGetTabValues,
	AtrcResetTabs,
} from '../../utils';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTabPanel = ({ value, tab, onChange }) => {
	return (
		<AtrcControlBorderRadius
			label={''}
			values={AtrcGetTabValues(value, tab, AtrcControlBorderRadiusAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
		/>
	);
};

const AtrcControlBorderRadiusTab = (props) => {
	const {
		value = {},
		label = '',
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

	const AllTabs = useMemo(() => {
		const tabs = [];
		if (allowedTabs.includes('normal'.toLowerCase())) {
			tabs.push({
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

		if (allowedTabs.includes('hover'.toLowerCase())) {
			tabs.push({
				name: 'Hover',
				title: __('Hover', 'atrc-prefix-atrc'),
				hasValue: AtrcHasTabValues(
					'Hover',
					value,
					AtrcControlBorderRadiusAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('Hover', value, AtrcControlBorderRadiusAllowedKeys)
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
					AtrcControlBorderRadiusAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab(
							'ParentHover',
							value,
							AtrcControlBorderRadiusAllowedKeys
						)
					),
			});
		}
		return tabs;
	}, []);

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
