import React from 'react';

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

/*Controls*/
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcUcFirst } from '../../utils/string';

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

	if (value && value[device + AtrcUcFirst(tab)]) {
		return value[device + AtrcUcFirst(tab)];
	}
	return null;
}

function mappingDeviceTabNewValues(value, newVal, device, tab) {
	const valueCloned = cloneDeep(value);

	if (tab === 'normal') {
		valueCloned[device] = newVal;
	} else {
		valueCloned[device + AtrcUcFirst(tab)] = newVal;
	}
	return valueCloned;
}

const RenderTab = ({
	device,
	isMulti,
	value,
	defaultValue,
	options,
	tab,
	onChange,
}) => {
	return (
		<AtrcControlSelect
			value={mappingDeviceTabValues(value, device, tab)}
			onChange={(newVal) => onChange(newVal, device, tab)}
			options={options}
			isMulti={isMulti}
			allowReset={
				mappingDeviceTabValues(value, device, tab) !==
				mappingDeviceTabValues(defaultValue, device, tab)
			}
		/>
	);
};

const RenderTabPanel = ({
	label = '',
	isMulti,
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
					isMulti={isMulti}
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

const AtrcControlSelectDeviceTab = (props) => {
	const {
		value = {},
		defaultValue = {},
		label = '',
		options = [],
		onChange = () => {},
		variant = '',
		className = '',
		isMulti = false,
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
			value['xs' + AtrcUcFirst(tab)] ||
			value['sm' + AtrcUcFirst(tab)] ||
			value['md' + AtrcUcFirst(tab)] ||
			value['lg' + AtrcUcFirst(tab)] ||
			value['xl' + AtrcUcFirst(tab)] ||
			value['xxl' + AtrcUcFirst(tab)]
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
			delete valueCloned['xs' + AtrcUcFirst(tab)];
			delete valueCloned['sm' + AtrcUcFirst(tab)];
			delete valueCloned['md' + AtrcUcFirst(tab)];
			delete valueCloned['lg' + AtrcUcFirst(tab)];
			delete valueCloned['xl' + AtrcUcFirst(tab)];
			delete valueCloned['xxl' + AtrcUcFirst(tab)];
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
				AtrcPrefix('ctrl-select-device-tab'),
				className,
				variant ? AtrcPrefix('ctrl-select-device-tab') + '-' + variant : ''
			)}
			label={label}
			resetAll={resetAll}
			allowTabs={true}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<RenderTabPanel
						isMulti={isMulti}
						value={value}
						defaultValue={defaultValue}
						options={options}
						onChange={(newVal, device) => setDeviceTabAttr(newVal, device, tab)}
						tab={tab}
						key={iDx}
					/>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlSelectDeviceTab;
