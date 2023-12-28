/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import { AtrcAvailableDevices } from '../../../atrc/utils';

/*Local*/
const AtrcControlTextAlignClasses = (abStyle) => {
	if (!abStyle || !abStyle.txtAl) {
		return '';
	}
	const textAlign = abStyle.txtAl;
	if (!isObject(textAlign)) return '';
	if (isEmpty(textAlign)) return '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

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
