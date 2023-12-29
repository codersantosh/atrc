/*Value Structure
Type Object
{
========*Normal values*========
    cl : '',
    x : '',
    y : '',
    blr : '',

========*Hover values*========
    "clHover":"",
    "xHover":"",
    "yHover":"",
    "blrHover":"",

========*ParentHover values*========
    "clParentHover":"",
    "xParentHover":"",
    "yParentHover":"",
    "blrParentHover":"",
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
	AtrcControlTextShadow,
	AtrcPanelTools,
	AtrcControlTextShadowAllowedKeys,
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
		<AtrcControlTextShadow
			value={AtrcGetTabValues(value, tab, AtrcControlTextShadowAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			disableUnits={disableUnits}
		/>
	);
};

const AtrcControlTextShadowTab = (props) => {
	const {
		value = {},
		label = '',
		help = '',
		onChange = () => {},
		variant = '',
		className = '',
		disableUnits = false,
		allowedTabs = ['normal', 'hover'],
	} = props;

	const setTabAttr = (newVal, tab) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlTextShadowAllowedKeys)
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
					AtrcControlTextShadowAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('normal', value, AtrcControlTextShadowAllowedKeys)
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
					AtrcControlTextShadowAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('Hover', value, AtrcControlTextShadowAllowedKeys)
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
					AtrcControlTextShadowAllowedKeys
				),
				onDeselect: () =>
					onChange(
						AtrcResetTab('ParentHover', value, AtrcControlTextShadowAllowedKeys)
					),
			});
		}
		return tabs;
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-txt-sdw-tab'),
				className,
				variant ? AtrcPrefix('ctrl-txt-sdw-tab') + '-' + variant : ''
			)}
			label={label}
			help={help}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlTextShadowAllowedKeys))
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
export default AtrcControlTextShadowTab;
