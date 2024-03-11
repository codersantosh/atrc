/*Attributes Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
    "xsHover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":""
    "xxlHover":""
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcDropdownDevice from '../../molecules/dropdown-device';
import AtrcPanelTools from '../../molecules/panel-tools';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function mappingDeviceTabValues(value, device, tab) {
	if (tab === 'normal') {
		if (value && value[device]) {
			return value[device];
		}
		return null;
	}
	if (value && value[device + tab]) {
		return value[device + tab];
	}
	return null;
}

function mappingDeviceTabNewValues(value, newVal, device, tab) {
	const valueCloned = cloneDeep(value);

	if (tab === 'normal') {
		valueCloned[device] = newVal;
	} else {
		valueCloned[device + tab] = newVal;
	}
	return valueCloned;
}

const RenderTab = ({ device, value, defaultValue, options, tab, onChange }) => {
	return (
		<AtrcControlSelectButton
			value={mappingDeviceTabValues(value, device, tab)}
			onChange={(newVal) => onChange(newVal, device, tab)}
			options={options}
			allowReset={
				!(
					mappingDeviceTabValues(value, device, tab) !==
					mappingDeviceTabValues(defaultValue, device, tab)
				)
			}
		/>
	);
};

const RenderTabPanel = ({
	label = '',
	value,
	defaultValue,
	options,
	onChange,
	tab = 'normal',
}) => {
	return (
		<AtrcDropdownDevice
			label={label}
			tabs={AtrcAvailableDevices()}>
			{(rTab) => (
				<RenderTab
					device={rTab.name}
					value={value}
					defaultValue={defaultValue}
					options={options}
					tab={tab}
					onChange={onChange}
				/>
			)}
		</AtrcDropdownDevice>
	);
};

const AtrcControlSelectButtonDeviceTab = (props) => {
	const {
		value = {},
		defaultValue = {},
		label = '',
		options = [],
		onChange = () => {},
		variant = '',
		className = '',
		allowedTabs = ['normal', 'hover'],
	} = props;

	const setDeviceTabAttr = (newVal, device, tab) => {
		onChange(mappingDeviceTabNewValues(value, newVal, device, tab));
	};

	const hasDeviceTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		if ('normal' === tab) {
			return !!(
				value.xs ||
				value.sm ||
				value.md ||
				value.lg ||
				value.xl ||
				value.xxl
			);
		}

		return !!(
			value['xs' + tab] ||
			value['sm' + tab] ||
			value['md' + tab] ||
			value['lg' + tab] ||
			value['xl' + tab] ||
			value['xxl' + tab]
		);
	};

	const resetTab = (tab) => {
		const valueCloned = cloneDeep(value);

		if ('normal' === tab) {
			delete valueCloned.xs;
			delete valueCloned.sm;
			delete valueCloned.md;
			delete valueCloned.lg;
			delete valueCloned.xl;
			delete valueCloned.xxl;
		} else {
			delete valueCloned['xs' + tab];
			delete valueCloned['sm' + tab];
			delete valueCloned['md' + tab];
			delete valueCloned['lg' + tab];
			delete valueCloned['xl' + tab];
			delete valueCloned['xxl' + tab];
		}

		onChange(valueCloned);
	};

	const resetAll = () => {
		onChange({});
	};

	const AllTabs = [];
	if (allowedTabs.includes('normal')) {
		AllTabs.push({
			name: 'normal',
			title: __('Normal', 'atrc-prefix-atrc'),
			hasValue: hasDeviceTabValue('normal'),
			onDeselect: () => resetTab('normal'),
		});
	}

	if (allowedTabs.includes('hover')) {
		AllTabs.push({
			name: 'hover',
			title: __('Hover', 'atrc-prefix-atrc'),
			hasValue: hasDeviceTabValue('hover'),
			onDeselect: () => resetTab('hover'),
		});
	}

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-select-btn-device-tab'),
				className,
				variant ? AtrcPrefix('ctrl-select-btn-device-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						value={value}
						onChange={(newVal, device) => setDeviceTabAttr(newVal, device, tab)}
						defaultValue={defaultValue}
						tab={tab}
						options={options}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlSelectButtonDeviceTab;
