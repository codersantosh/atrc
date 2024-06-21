import React from 'react';

/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlFlexAlignSelfDeviceClasses = (value) => {
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
		if (
			value[device.name] &&
			['st', 'end', 'ctr', 'bsln', 'strh'].includes(value[device.name])
		) {
			if ('xs' === device.name) {
				classes += ' at-al-slf-' + value[device.name] + ' ';
			} else {
				classes += ' at-al-slf-' + device.name + '-' + value[device.name] + ' ';
			}
		}
	}

	return classes;
};

export default AtrcControlFlexAlignSelfDeviceClasses;
