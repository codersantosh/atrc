/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Local*/
const AtrcControlTextAlignClasses = (abStyle) => {
	if (!abStyle || !abStyle.txtAl) {
		return '';
	}
	const textAlign = abStyle.txtAl;
	if (!isObject(textAlign)) return '';
	if (isEmpty(textAlign)) return '';

	const avDevices = AtrcAvailableDevices();

	for (let i = 0; i < avDevices.length; i++) {
		const device = avDevices[i];

		if (!device.on) {
			continue;
		}

		if (textAlign[device.name]) {
			return 'at-txt-al';
		}
	}

	return '';
};

export default AtrcControlTextAlignClasses;
