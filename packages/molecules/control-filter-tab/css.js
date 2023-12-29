/*Library*/
import { forEach, isEmpty } from 'lodash';

import {
	AtrcAvailableTabs,
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils';

import { AtrcControlFilterAllowedKeys, AtrcControlFilterCss } from '../index';

/*Local*/
const AtrcControlFilterTabCss = (value, property = 'filter') => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, AtrcControlFilterAllowedKeys)) {
					const typVal = AtrcGetTabValues(
							value,
							tab,
							AtrcControlFilterAllowedKeys
						),
						typCss = AtrcControlFilterCss(typVal, property);


					if (typCss && !isEmpty(typCss)) {
						forEach(typCss, (item, itemKey) => {
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

export default AtrcControlFilterTabCss;
