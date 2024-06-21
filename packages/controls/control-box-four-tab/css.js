import React from 'react';

/* Library */
import { isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';
import { AtrcControlBoxFourAllowedKeys } from '../control-box-four';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from './../../utils/string';

/* Local */
const AtrcControlBoxFourTabCss = ({ value, property }) => {
	const output = { xs: '', xsHover: '' };
	const boxFours = ['t', 'r', 'b', 'l'];

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			const tabValues = AtrcGetTabValues(
				value,
				tab,
				AtrcControlBoxFourAllowedKeys
			);

			if (!isEmpty(tabValues)) {
				const itemKey = 'xs';
				let tabKey = '';
				if (tab === 'normal') {
					tabKey = itemKey;
				} else {
					tabKey = itemKey + AtrcUcFirst(tab);
				}
				if (!output[tabKey]) {
					output[tabKey] = '';
				}

				output[tabKey] += AtrcControlBoxFourShorthandCssOnly({
					value: tabValues,
					property,
				});
			}
		});
	}
	return output;
};

export default AtrcControlBoxFourTabCss;
