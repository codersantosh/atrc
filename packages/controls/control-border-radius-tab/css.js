/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBorderRadiusAllowedKeys } from '../control-border-radius';
import AtrcControlBorderRadiusCss from '../control-border-radius/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from '../../utils/string';

/*Local*/
const AtrcControlBorderRadiusTabCss = (value, property = '--at-bdr-rad') => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcHasTabValues(tab, value, AtrcControlBorderRadiusAllowedKeys)) {
				const bdrRadVal = AtrcGetTabValues(
					value,
					tab,
					AtrcControlBorderRadiusAllowedKeys
				);

				const bdrRadCss = AtrcControlBorderRadiusCss(bdrRadVal, property);

				if (!isEmpty(bdrRadCss)) {
					forEach(bdrRadCss, (item, itemKey) => {
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
		});
	}

	console.log(output);
	return output;
};

export default AtrcControlBorderRadiusTabCss;
