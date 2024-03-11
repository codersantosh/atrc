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
    "xsHover":"",
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

/*Controls*/
import AtrcControlRangeDevice, {
	AtrcControlRangeDeviceAllowedKeys,
} from '../control-range-device';

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
const RenderTabPanel = ({
	label = __('Enter value', 'atrc-prefix-atrc'),
	value,
	onChange,
	tab = 'normal',
	...defaultProps
}) => {
	return (
		<AtrcControlRangeDevice
			label={label}
			value={AtrcGetTabValues(value, tab, AtrcControlRangeDeviceAllowedKeys)}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};

const AtrcControlRangeDeviceTab = (props) => {
	const {
		value = {},
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		inputProps = {},
		allowedTabs = ['normal', 'hover'],
		...defaultProps
	} = props;

	const setTabAttr = (tab, newVal) => {
		onChange(
			AtrcUpdateTabValues(newVal, tab, value, AtrcControlRangeDeviceAllowedKeys)
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
				AtrcControlRangeDeviceAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('normal', value, AtrcControlRangeDeviceAllowedKeys)
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
				AtrcControlRangeDeviceAllowedKeys
			),
			onDeselect: () =>
				onChange(
					AtrcResetTab('hover', value, AtrcControlRangeDeviceAllowedKeys)
				),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-range-device-tab'),
				className,
				variant ? AtrcPrefix('ctrl-range-device-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={() =>
				onChange(AtrcResetTabs(value, AtrcControlRangeDeviceAllowedKeys))
			}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal) => setTabAttr(tab, newVal)}
						inputProps={inputProps}
						tab={tab}
						key={iDx}
						{...defaultProps}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlRangeDeviceTab;
