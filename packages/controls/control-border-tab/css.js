import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBorderAllowedKeys } from '../control-border';
import AtrcControlBorderCss from '../control-border/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/*Local*/
const AtrcControlBorderTabCss = ({
	value,
	properties = {
		borderColor: '--at-bdr-cl',
		borderStyle: '--at-bdr-sty',
		borderWidth: '--at-bdr-w',
	},
}) => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, AtrcControlBorderAllowedKeys)) {
					const boxVal = AtrcGetTabValues(
						value,
						tab,
						AtrcControlBorderAllowedKeys
					);

					const boxCss = AtrcControlBorderCss({ value: boxVal, properties });

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

export default AtrcControlBorderTabCss;
