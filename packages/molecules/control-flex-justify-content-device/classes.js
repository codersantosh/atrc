/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlFlexJustifyContentDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.jfyCont) {
		return '';
	}
	const { jfyCont } = abStyle;
	if (!isObject(jfyCont)) return '';
	if (isEmpty(jfyCont)) return '';

	let classes = '';

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}
		if (
			jfyCont[device.name] &&
			['st', 'end', 'ctr', 'btw', 'ard', 'evnly'].includes(jfyCont[device.name])
		) {
			if ('xs' === device.name) {
				classes += ' at-jfy-cont-' + jfyCont[device.name] + ' ';
			} else {
				classes +=
					' at-jfy-cont-' + device.name + '-' + jfyCont[device.name] + ' ';
			}
		}
	}

	return classes;
};

export default AtrcControlFlexJustifyContentDeviceClasses;
