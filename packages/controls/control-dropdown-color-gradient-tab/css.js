import React from 'react';

/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import AtrcControlColorGradientCss from './../control-dropdown-color-gradient/css';

/* Utils */
import AtrcAvailableTabs from '../../utils/available-tabs';

import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcUcFirst } from '../../utils/string';

/*Local*/
export const AtrcControlColorGradientTabCssBg = ({
	value,
	properties = {
		color: '--at-bg-cl',
		gradient: '--at-bg-img',
	},
}) => {
	const output = {
		xs: '',
		xsHover: '',
		xsActive: '',
		sm: '',
		smHover: '',
		smActive: '',
		md: '',
		mdHover: '',
		mdActive: '',
		lg: '',
		lgHover: '',
		lgActive: '',
		xl: '',
		xlHover: '',
		xlActive: '',
		xxl: '',
		xxlHover: '',
		xxlActive: '',
	};

	if (value.cl) {
		output.xs += `${properties.color}      : ${value.cl};`;
	}
	if (value.clHover) {
		output.xsHover += `${properties.color}      : ${value.clHover};`;
	}
	if (value.clActive) {
		output.xsActive += `${properties.color}      : ${value.clActive};`;
	}
	if (value.grd) {
		output.xs += `${properties.gradient}      : ${value.grd};`;
	}
	if (value.grdHover) {
		output.xsHover += `${properties.gradient}      : ${value.grdHover};`;
	}
	if (value.grdActive) {
		output.xsActive += `${properties.gradient}      : ${value.grdActive};`;
	}
	return output;
};

const AtrcControlColorGradientTabCss = (value, property = '--at-cl') => {
	const output = {};
	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcHasTabValues(tab, value, ['cl', 'grd'])) {
				const color = AtrcGetTabValues(value, tab, ['cl', 'grd']),
					css = AtrcControlColorGradientCss(color, property);

				forEach(css, (item, itemKey) => {
					let tabKey = '';
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
		});
	}
	return output;
};

export default AtrcControlColorGradientTabCss;
