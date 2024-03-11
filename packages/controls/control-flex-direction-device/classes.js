/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlFlexDirectionDeviceClasses = (value) => {
	if (!isObject(value) || isEmpty(value)) {
		return '';
	}

	let classes = '';

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		/* cannot disable xs, its global css/classes */
		if ('xs' === device.name) {
			if (value[device.name]) {
				switch (value[device.name]) {
					case 'row':
						classes += ' at-flx-row ';
						break;

					case 'col':
						classes += ' at-flx-col ';
						break;

					case 'rowRev':
						classes += ' at-flx-row-rev ';
						break;

					case 'colRev':
						classes += ' at-flx-col-rev ';
						break;

					default:
						break;
				}
			}
		} else {
			if (!device.on) {
				continue;
			}

			if (value[device.name]) {
				switch (value[device.name]) {
					case 'row':
						classes += ' at-flx-' + device.name + '-row ';
						break;

					case 'col':
						classes += ' at-flx-' + device.name + '-col ';
						break;

					case 'rowRev':
						classes += ' at-flx-' + device.name + '-row-rev ';
						break;

					case 'colRev':
						classes += ' at-flx-' + device.name + '-col-rev ';
						break;

					default:
						break;
				}
			}
		}
	}

	return classes;
};

export default AtrcControlFlexDirectionDeviceClasses;
