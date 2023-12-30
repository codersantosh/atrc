/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */

import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

import AtrcControlBoxFourDeviceCss from '../control-box-four-device/css';

/*Local*/
const AtrcControlBoxFourTabCss = ({
	value,
	property = '',
	direction = true,
}) => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, AtrcControlBoxFourDeviceAllowedKeys)) {
					const boxVal = AtrcGetTabValues(
						value,
						tab,
						AtrcControlBoxFourDeviceAllowedKeys
					);

					const boxCss = AtrcControlBoxFourDeviceCss({
						value: boxVal,
						property,
						direction,
					});

					if (!isEmpty(boxCss)) {
						forEach(boxCss, (item, itemKey) => {
							if (tab === 'normal') {
								tabKey = itemKey;
							} else {
								tabKey = itemKey + tab;
							}
							if (!output[tabKey]) {
								output[tabKey] = '';
							}

							output[tabKey] += item;
						});
					}
				}
			}
		});
	}

	return output;
};

export default AtrcControlBoxFourTabCss;
