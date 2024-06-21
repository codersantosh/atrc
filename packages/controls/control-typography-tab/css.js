import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlTypographyAllowedKeys } from '../control-typography';
import AtrcControlTypographyCss from '../control-typography/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

import { AtrcUcFirst } from './../../utils/string';

/*Local*/
const AtrcControlTypographyTabCss = ({
	value,
	properties = {
		fontSize: '--at-fnt-sz',
		fontFamily: '--at-fnt-wt',
		fontWeight: '--at-fnt-fam',
		fontStyle: '--at-fnt-sty',
		textDecoration: '--at-txt-tf',
		textTransform: '--at-txt-dec',
		lineHeight: '--at-ln-h',
		letterSpacing: '--at-ltr-sp',
	},
}) => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, AtrcControlTypographyAllowedKeys)) {
					const typVal = AtrcGetTabValues(
							value,
							tab,
							AtrcControlTypographyAllowedKeys
						),
						typCss = AtrcControlTypographyCss({ value: typVal, properties });

					console.log(typCss);
					if (typCss && !isEmpty(typCss)) {
						forEach(typCss, (item, itemKey) => {
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

export default AtrcControlTypographyTabCss;
