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

* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';

/* Controls */
import { AtrcControlTextShadowAllowedKeys } from '../control-text-shadow';
import AtrcControlTextShadow from '../control-text-shadow';

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
const RenderTabPanel = ({ value, disableUnits, tab, onChange }) => {
	return (
		<AtrcControlTextShadow
			value={AtrcGetTabValues(value, tab, AtrcControlTextShadowAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			disableUnits={disableUnits}
			label=''
		/>
	);
};

const AtrcControlTextShadowTab = (props) => {
	const {
		value = {},
		label = __('Text shadow', 'atrc-prefix-atrc'),
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

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
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

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'hover',
				value,
				AtrcControlTextShadowAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('hover', value, AtrcControlTextShadowAllowedKeys)
				),
		});
	}

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
