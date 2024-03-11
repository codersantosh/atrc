/* Library */
import { isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcUcFirst } from '../../utils/string';

/* Local */
const AtrcControlBoxFourDeviceCss = ({ value, property }) => {
	const output = {};
	const boxFours = ['t', 'r', 'b', 'l'];

	if (!isEmpty(value)) {
		const avDevices = AtrcAvailableDevices();
		avDevices.forEach((deviceProps) => {
			if (deviceProps.on) {
				const device = deviceProps.name;
				let deviceKey;
				const deviceVals = {};

				if (value[device]) {
					deviceVals.all = value[device];
				} else {
					boxFours.forEach((box) => {
						deviceKey = device + AtrcUcFirst(box);

						if (value[deviceKey]) {
							deviceVals[box] = value[deviceKey];
						}
					});
				}

				if (!isEmpty(deviceVals)) {
					if (!output[device]) {
						output[device] = '';
					}
					output[device] += AtrcControlBoxFourShorthandCssOnly({
						value: deviceVals,
						property,
					});
				}
			}
		});
	}
	return output;
};

export default AtrcControlBoxFourDeviceCss;
