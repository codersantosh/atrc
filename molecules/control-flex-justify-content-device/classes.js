/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import { AtrcAvailableDevices } from '../../../atrc/utils';

/*Local*/
const AtrcControlFlexJustifyContentDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.jfyCont) {
		return '';
	}
	const { jfyCont } = abStyle;
	if (!isObject(jfyCont)) return '';
	if (isEmpty(jfyCont)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

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
