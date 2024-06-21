import React from 'react';

/*Library*/
import { forEach, isEmpty, cloneDeep } from 'lodash';

/*Internal*/
import AtrcAvailableTabs from './available-tabs';
import AtrcAvailableDevices from './available-devices';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from './object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './string';

/*Local*/
export function AtrcHasValueKey(value, key) {
	if (!value || isEmpty(value)) {
		return false;
	}

	return !!value[key];
}

export function AtrcResetValueKey(value, key) {
	const valueCloned = cloneDeep(value);

	delete valueCloned[key];

	return valueCloned;
}

export const AtrcGetDeviceValues = (value, key) => {
	if (isEmpty(value)) {
		return null;
	}

	const newValue = {};

	const avDevices = AtrcAvailableDevices();
	avDevices.forEach((deviceProps) => {
		const device = deviceProps.name;
		let deviceKey;
		deviceKey = device + AtrcUcFirst(key);

		if (value[deviceKey]) {
			newValue[device] = value[deviceKey];
		}
	});
	return newValue;
};

export const AtrcSetDeviceValues = (value, key) => {
	if (isEmpty(value)) {
		return null;
	}

	const newValue = {};

	const avDevices = AtrcAvailableDevices();
	avDevices.forEach((deviceProps) => {
		const device = deviceProps.name;
		const valKey = device + AtrcUcFirst(key);

		if (value[device]) {
			newValue[valKey] = value[device];
		}
	});
	return newValue;
};

export const AtrcHasDeviceValues = (value, key) => {
	if (isEmpty(value)) {
		return false;
	}

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i].name;
		let deviceKey;
		deviceKey = device + AtrcUcFirst(key);

		if (value[deviceKey]) {
			return true;
		}
	}
	return false;
};

export const AtrcResetDevices = (value, key) => {
	if (!value) {
		return value;
	}
	const newValue = { ...value };

	const avDevices = AtrcAvailableDevices();

	avDevices.forEach((deviceProps) => {
		const device = deviceProps.name;
		const deviceKey = device + AtrcUcFirst(key);

		delete newValue[deviceKey];
	});
	return newValue;
};

export const AtrcDeviceCss = (value, key, cssProp) => {
	if (!value) {
		return value;
	}

	const innerOutput = {};
	const avDevices = AtrcAvailableDevices();

	avDevices.forEach((deviceProps) => {
		if (deviceProps.on) {
			const device = deviceProps.name;
			let deviceKey;
			deviceKey = key ? device + AtrcUcFirst(key) : device;

			if (value[deviceKey]) {
				if (!innerOutput[device]) {
					innerOutput[device] = '';
				}
				innerOutput[device] += `${cssProp}      : ${value[deviceKey]};`;
			}
		}
	});

	return innerOutput;
};

export const AtrcDeviceAllowedKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const AtrcDeviceTabCss = (value, key, cssProp) => {
	if (!value) {
		return '';
	}

	const innerOutput = {};

	AtrcAvailableTabs.forEach((tab) => {
		if (AtrcAvailableTabs.includes(tab)) {
			if (AtrcHasTabValues(tab, value, AtrcDeviceAllowedKeys)) {
				const typVal = AtrcGetTabValues(value, tab, AtrcDeviceAllowedKeys);

				const typCss = AtrcDeviceCss(typVal, key, cssProp);

				let tabKey;

				if (!isEmpty(typCss)) {
					forEach(typCss, (item, itemKey) => {
						if (tab === 'normal') {
							tabKey = itemKey;
						} else {
							tabKey = itemKey + AtrcUcFirst(tab);
						}
						if (!innerOutput[tabKey]) {
							innerOutput[tabKey] = '';
						}

						innerOutput[tabKey] += item;
					});
				}
			}
		}
	});

	return innerOutput;
};

export function AtrcMappingDeviceValues(value, device) {
	return value && value[device] ? value[device] : '';
}

export function AtrcMappingDeviceKeyValues(value, device, key) {
	if (!value || isEmpty(value)) {
		return null;
	}

	return value[device + AtrcUcFirst(key)];
}

export function AtrcMappingDeviceKey(device, key) {
	return device + AtrcUcFirst(key);
}
