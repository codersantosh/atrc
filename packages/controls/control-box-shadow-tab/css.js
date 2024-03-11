/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxShadowAllowedKeys } from '../control-box-shadow';
import AtrcControlBoxShadowCss from '../control-box-shadow/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
const AtrcControlBoxShadowTabCss = (value, property = '--at-box-sdw') => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
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

	return output;
};

export default AtrcControlBoxShadowTabCss;
