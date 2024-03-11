/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
export const AtrcControlFlexNoWrapDeviceClasses = (value) => {
	if (!isObject(value) || isEmpty(value)) {
		return ' at-flx-wrp ';
	}

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}

		if (value[device.name]) {
			if ('xs' === device.name) {
				if (value[device.name]) {
					classes += ' at-flx-nowrp ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-nowrp ';
			}
		}
	}
	if (!classes) {
		return ' at-flx-wrp ';
	}

	return classes;
};

export const AtrcControlFlexFillDeviceClasses = (value) => {
	if (!isObject(value) || isEmpty(value)) {
		return '';
	}

	let classes = '';

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}

		if (value[device.name]) {
			if ('xs' === device.name) {
				if (value[device.name]) {
					classes += ' at-flx-fil ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-fil ';
			}
		}
	}

	return classes;
};

export const AtrcControlFlexGrowDeviceClasses = (value) => {
	if (!isObject(value) || isEmpty(value)) {
		return '';
	}

	let classes = '';

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}

		if (value[device.name]) {
			if ('xs' === device.name) {
				if (value[device.name]) {
					classes += ' at-flx-grw-1 ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-grw-1 ';
			}
		}
	}

	return classes;
};

export const AtrcControlFlexShrinkDeviceClasses = (value) => {
	if (!isObject(value) || isEmpty(value)) {
		return '';
	}

	let classes = '';

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}

		if (value[device.name]) {
			if ('xs' === device.name) {
				if (value[device.name]) {
					classes += 'at-flx-srnk-1 ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-srnk-1 ';
			}
		}
	}

	return classes;
};
