/*Library*/
import { isEmpty, isObject } from 'lodash';

/*Inbuilt*/
import { AtrcAvailableDevices } from '../../../atrc/utils';

/*Local*/
const AtrcControlFlexDirectionDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.flxDir) {
		return '';
	}
	const { flxDir } = abStyle;
	if (!isObject(flxDir)) return '';
	if (isEmpty(flxDir)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if ('xs' === device.name) {
			if (flxDir[device.name]) {
				switch (flxDir[device.name]) {
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
			} else {
				classes += ' at-flx-row ';
			}
		} else {
			if (!device.on) {
				continue;
			}

			if (flxDir[device.name]) {
				switch (flxDir[device.name]) {
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

export const AtrcControlFlexNoWrapDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.flxWrp) {
		return ' at-flx-wrp ';
	}
	const { flxWrp } = abStyle;
	if (!isObject(flxWrp)) return ' at-flx-wrp ';
	if (isEmpty(flxWrp)) return ' at-flx-wrp ';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if (!device.on) {
			continue;
		}

		if (flxWrp[device.name]) {
			if ('xs' === device.name) {
				if (flxWrp[device.name]) {
					classes += ' at-flx-nowrp ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-nowrp ';
			}
		}
	}
	if (!classes) {
		return ' at-flx-wrp ';
	}

	return classes;
};

export const AtrcControlFlexFillDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.flxFil) {
		return '';
	}
	const { flxFil } = abStyle;
	if (!isObject(flxFil)) return '';
	if (isEmpty(flxFil)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if (!device.on) {
			continue;
		}

		if (flxFil[device.name]) {
			if ('xs' === device.name) {
				if (flxFil[device.name]) {
					classes += ' at-flx-fil ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-fil ';
			}
		}
	}

	return classes;
};

export const AtrcControlFlexGrowDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.flxGrw) {
		return '';
	}
	const { flxGrw } = abStyle;
	if (!isObject(flxGrw)) return '';
	if (isEmpty(flxGrw)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if (!device.on) {
			continue;
		}

		if (flxGrw[device.name]) {
			if ('xs' === device.name) {
				if (flxGrw[device.name]) {
					classes += ' at-flx-grw-1 ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-grw-1 ';
			}
		}
	}

	return classes;
};

export const AtrcControlFlexShrinkDeviceClasses = (abStyle) => {
	if (!abStyle || !abStyle.flxSrnk) {
		return '';
	}
	const { flxSrnk } = abStyle;
	if (!isObject(flxSrnk)) return '';
	if (isEmpty(flxSrnk)) return '';

	let classes = '';

	for (let i = 0; i < AtrcAvailableDevices.length; i++) {
		const device = AtrcAvailableDevices[i];

		if (!device.on) {
			continue;
		}

		if (flxSrnk[device.name]) {
			if ('xs' === device.name) {
				if (flxSrnk[device.name]) {
					classes += 'at-flx-srnk-1 ';
				}
			} else {
				classes += ' at-flx-' + device.name + '-srnk-1 ';
			}
		}
	}

	return classes;
};

export default AtrcControlFlexDirectionDeviceClasses;
