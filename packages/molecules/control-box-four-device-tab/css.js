/*Library*/
import { forEach, isEmpty } from 'lodash';

import {
	AtrcAvailableTabs,
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils';

import {
	AtrcControlBoxFourDeviceAllowedKeys,
	AtrcControlBoxFourDeviceCss,
} from '../index';

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
