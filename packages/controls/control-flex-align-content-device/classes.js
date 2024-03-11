/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlFlexAlignContentDeviceClasses = (value) => {
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
			['st', 'end', 'ctr', 'btw', 'ard', 'strh'].includes(value[device.name])
		) {
			if ('xs' === device.name) {
				classes += ' at-al-cont-' + value[device.name] + ' ';
			} else {
				classes +=
					' at-al-cont-' + device.name + '-' + value[device.name] + ' ';
			}
		}
	}

	return classes;
};

export default AtrcControlFlexAlignContentDeviceClasses;
