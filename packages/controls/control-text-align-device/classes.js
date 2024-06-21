import React from 'react';

/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local Need just single class, adjust from value for devices*/
const AtrcControlTextAlignClasses = (value) => {
	if (!isObject(value) || isEmpty(value)) {
		return '';
	}

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}

		if (value[device.name]) {
			return 'at-txt-al';
		}
	}

	return '';
};

export default AtrcControlTextAlignClasses;
