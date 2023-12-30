/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */

import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

import { AtrcControlFilterAllowedKeys } from '../control-filter';
import AtrcControlFilterCss from '../control-filter/css';

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
