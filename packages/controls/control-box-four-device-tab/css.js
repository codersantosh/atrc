import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

import AtrcControlBoxFourDeviceCss from '../control-box-four-device/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';

import { AtrcUcFirst } from './../../utils/string';

import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
const AtrcControlBoxFourDeviceTabCss = ({
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
								tabKey = itemKey + AtrcUcFirst(tab);
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

export default AtrcControlBoxFourDeviceTabCss;
