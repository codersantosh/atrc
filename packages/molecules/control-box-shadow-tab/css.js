/*Library*/
import { forEach, isEmpty } from 'lodash';

import {
	AtrcAvailableTabs,
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils';

import {
	AtrcControlBoxShadowAllowedKeys,
	AtrcControlBoxShadowCss,
} from '../index';

/*Local*/
const AtrcControlBoxShadowTabCss = (value, property = 'box-shadow') => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, AtrcControlBoxShadowAllowedKeys)) {
					const boxVal = AtrcGetTabValues(
						value,
						tab,
						AtrcControlBoxShadowAllowedKeys
					);

					const boxCss = AtrcControlBoxShadowCss(boxVal, property);

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

export default AtrcControlBoxShadowTabCss;
