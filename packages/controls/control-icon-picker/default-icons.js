import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

import { renderToString } from '@wordpress/element';

import * as WpIconsAllF from '@wordpress/icons';

/* Library */
import { map } from 'lodash';
import * as ReactIconsAllFA from 'react-icons/fa';

/* Atoms */
import { AtrcIconWp } from '../../atoms/icon';

/* Local */
const AtrcControlIconPickerDefaultIcons = () => {
	const iconOptions = [];
	const wpOpt = map(WpIconsAllF, (icon, key) => {
		if ('Icon' !== key) {
			return {
				id: key,
				svg: renderToString(<AtrcIconWp icon={WpIconsAllF[key]} />),
			};
		}
	}).filter(Boolean);

	iconOptions.push({
		label: __('WordPress icons', 'atrc-prefix-atrc'),
		id: 'wp',
		icons: wpOpt,
	});

	const faOpt = map(ReactIconsAllFA, (icon, key) => ({
		id: key,
		svg: renderToString(
			icon({
				className: 'at-svg',
			})
		),
	}));

	iconOptions.push({
		label: __('Font Awesome icons', 'atrc-prefix-atrc'),
		id: 'fa',
		icons: faOpt,
	});

	return iconOptions;
};

export default AtrcControlIconPickerDefaultIcons;
