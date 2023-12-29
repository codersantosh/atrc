import { isEmpty } from 'lodash';
import { AtrcAvailableDevices, AtrcUcFirst } from '../../utils';
import { AtrcControlBoxFourShorthandCssOnly } from './../index';

const AtrcControlBoxFourDeviceCss = ({ value, property }) => {
	const output = {};
	const boxFours = ['t', 'r', 'b', 'l'];

	if (!isEmpty(value)) {
		AtrcAvailableDevices.forEach((deviceProps) => {
			if (deviceProps.on) {
				const device = deviceProps.name;
				let deviceKey;
				const deviceVals = {};

				if (value[device]) {
					deviceVals.all = value[device];
				} else {
					boxFours.forEach((box) => {
						if (device === 'xs') {
							deviceKey = box;
						} else {
							deviceKey = device + AtrcUcFirst(box);
						}

						if (value[deviceKey]) {
							deviceVals[box] = value[deviceKey];
						}
					});
				}

				if (!isEmpty(deviceVals)) {
					if (!output[device]) {
						output[device] = '';
					}
					output[device] += AtrcControlBoxFourShorthandCssOnly(
						deviceVals,
						property
					);
				}
			}
		});
	}
	return output;
};

export default AtrcControlBoxFourDeviceCss;
