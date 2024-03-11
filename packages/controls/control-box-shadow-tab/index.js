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

* */
/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { map } from 'lodash';

/*Controls*/
import AtrcControlBoxShadow from '../control-box-shadow';
import { AtrcControlBoxShadowAllowedKeys } from '../control-box-shadow';

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
const RenderTabPanel = ({ value, disableUnits, tab, onChange }) => {
	return (
		<AtrcControlBoxShadow
			value={AtrcGetTabValues(value, tab, AtrcControlBoxShadowAllowedKeys)}
			onChange={(newVal) => onChange(newVal, tab)}
			disableUnits={disableUnits}
			label=''
		/>
	);
};

const AtrcControlBoxShadowTab = (props) => {
	const {
		value = {},
		label = __('Box shadow', 'atrc-prefix-atrc'),
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

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
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

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: AtrcHasTabValues(
				'hover',
				value,
				AtrcControlBoxShadowAllowedKeys
			),
			onDeselect: () =>
				onChange(AtrcResetTab('hover', value, AtrcControlBoxShadowAllowedKeys)),
		});
	}

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
