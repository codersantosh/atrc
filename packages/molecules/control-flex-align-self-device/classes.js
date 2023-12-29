/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlFlexAlignSelfDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.alSlf) {
		return '';
	}
	const { alSlf } = abStyle;
	if (!isObject(alSlf)) return '';
	if (isEmpty(alSlf)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if (!device.on) {
			continue;
		}
		if (
			alSlf[device.name] &&
			['st', 'end', 'ctr', 'bsln', 'strh'].includes(alSlf[device.name])
		) {
			if ('xs' === device.name) {
				classes += ' at-al-slf-' + alSlf[device.name] + ' ';
			} else {
				classes += ' at-al-slf-' + device.name + '-' + alSlf[device.name] + ' ';
			}
		}
	}

	return classes;
};

export default AtrcControlFlexAlignSelfDeviceClasses;
