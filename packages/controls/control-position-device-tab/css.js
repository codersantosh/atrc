/*Library*/
import { isEmpty, forEach } from 'lodash';

/*Controls*/
import { AtrcControlPositionAllowedKeys } from '../control-position-device';
import AtrcControlPositionDeviceCss from '../control-position-device/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
const AtrcControlPositionDeviceTabCss = ({
	value,
	properties = {
		position: '--at-pos',
		bottom: '--at-b',
		top: '--at-t',
		right: '--at-r',
		left: '--at-l',
	},
}) => {
	const output = {};
	let tabKey;
	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcHasTabValues(tab, value, AtrcControlPositionAllowedKeys)) {
				const posVal = AtrcGetTabValues(
						value,
						tab,
						AtrcControlPositionAllowedKeys
					),
					posCss = AtrcControlPositionDeviceCss({
						value: posVal,
						properties,
					});

				if (!isEmpty(posCss)) {
					forEach(posCss, (item, itemKey) => {
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

export default AtrcControlPositionDeviceTabCss;
