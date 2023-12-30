/*Attributes Structure
Type Object
{
    "xs":"",
    "sm":"",
    "md":"",
    "lg":"",
    "xl":"",
    "xxl":"",
    "Hover":"",
    "smHover":"",
    "mdHover":"",
    "lgHover":"",
    "xlHover":""
    "xxlHover":""
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcDropdownDevice from '../dropdown-device';
import AtrcPanelTools from '../panel-tools';
import AtrcControlSelectButton from '../control-select-button';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
function mappingDeviceTabValues(value, device, tab) {
	if (tab === 'normal') {
		if (value && value[device]) {
			return value[device];
		}
		return null;
	}
	if ('xs' === device) {
		if (value && value[tab]) {
			return value[tab];
		}
		return null;
	}

	if (value && value[device + tab]) {
		return value[device + tab];
	}
	return null;
}

function mappingDeviceTabNewValues(value, newVal, device, tab) {
	const valueCloned = Object.assign({}, value);

	if (tab === 'normal') {
		valueCloned[device] = newVal;
	} else if ('xs' === device) {
		valueCloned[tab] = newVal;
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
			tabs={AtrcAvailableDevices}>
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
			value[tab] ||
			value['sm' + tab] ||
			value['md' + tab] ||
			value['lg' + tab] ||
			value['xl' + tab] ||
			value['xxl' + tab]
		);
	};

	const resetTab = (tab) => {
		const valueCloned = Object.assign({}, value);
		if ('normal' === tab) {
			delete valueCloned.xs;
			delete valueCloned.sm;
			delete valueCloned.md;
			delete valueCloned.lg;
			delete valueCloned.xl;
			delete valueCloned.xxl;
		} else {
			delete valueCloned[tab];
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

	const AllTabs = useMemo(() => {
		const tabs = [];
		if (allowedTabs.includes('normal'.toLowerCase())) {
			tabs.push({
				name: 'normal',
				title: __('Normal', 'atrc-prefix-atrc'),
				hasValue: hasDeviceTabValue('normal'),
				onDeselect: () => resetTab('normal'),
			});
		}

		if (allowedTabs.includes('hover'.toLowerCase())) {
			tabs.push({
				name: 'Hover',
				title: __('Hover', 'atrc-prefix-atrc'),
				hasValue: hasDeviceTabValue('Hover'),
				onDeselect: () => resetTab('Hover'),
			});
		}

		if (allowedTabs.includes('parenthover'.toLowerCase())) {
			tabs.push({
				name: 'ParentHover',
				title: __('Parent hover', 'atrc-prefix-atrc'),
				hasValue: hasDeviceTabValue('ParentHover'),
				onDeselect: () => resetTab('ParentHover'),
			});
		}
		return tabs;
	}, []);

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
