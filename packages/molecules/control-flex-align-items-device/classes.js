/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlFlexAlignItemsDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.alItms) {
		return '';
	}
	const { alItms } = abStyle;
	if (!isObject(alItms)) return '';
	if (isEmpty(alItms)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if (!device.on) {
			continue;
		}
		if (
			alItms[device.name] &&
			['st', 'end', 'ctr', 'bsln', 'strh'].includes(alItms[device.name])
		) {
			if ('xs' === device.name) {
				classes += ' at-al-itm-' + alItms[device.name] + ' ';
			} else {
				classes +=
					' at-al-itm-' + device.name + '-' + alItms[device.name] + ' ';
			}
		}
	}

	return classes;
};

export default AtrcControlFlexAlignItemsDeviceClasses;
