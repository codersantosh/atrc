/*Attributes Structure
Type Object
{
========*Normal values*========
    cl : '',
    x : '',
    y : '',
    blr : '',
    sprd : '',
    pos : '',

========*Hover values*========
    "clHover":"",
    "xHover":"",
    "yHover":"",
    "blrHover":"",
    "sprdHover":"",
    "posHover":"",

========*ParentHover values*========
    "clParentHover":"",
    "xParentHover":"",
    "yParentHover":"",
    "blrParentHover":"",
    "sprdParentHover":"",
    "posParentHover":"",

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
	AtrcControlBoxShadow,
	AtrcPanelTools,
	AtrcControlBoxShadowAllowedKeys,
} from '../index';

/*Inbuilt utils*/
import {
	AtrcUpdateTabValues,
	AtrcHasTabValues,
	AtrcResetTab,
	AtrcResetTabs,
	AtrcGetTabValues,
} from '../../utils';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const RenderTabPanel = ({ value, disableUnits, tab, onChange }) => {
	return (
		<AtrcControlBoxShadow
			value={AtrcGetTabValues(value, tab, AtrcControlBoxShadowAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			disableUnits={disableUnits}
		/>
	);
};

const AtrcControlBoxShadowTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		disableUnits = false,
		allowedTabs = ['normal', 'hover'],
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlBoxShadowAllowedKeys)
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
					AtrcControlBoxShadowAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('normal', value, AtrcControlBoxShadowAllowedKeys)
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
					AtrcControlBoxShadowAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('Hover', value, AtrcControlBoxShadowAllowedKeys)
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
					AtrcControlBoxShadowAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('ParentHover', value, AtrcControlBoxShadowAllowedKeys)
					),
			});
		}
		return tabs;
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-box-sdw-tab'),
				className,
				variant ? AtrcPrefix('ctrl-box-sdw-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlBoxShadowAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						disableUnits={disableUnits}
						onChange={(newVal) => setTabAttr(newVal, tab)}
						tab={tab}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlBoxShadowTab;
