import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import { isArray } from 'lodash';

import { BsDisplay, BsLaptop, BsPhone, BsTablet, BsTv } from 'react-icons/bs';

/* Internal */
import AtrcParseBoolean from './parse-boolean';

/* Local */
const AtrcAvailableDevices = () => {
	return [
		{
			name: 'xs',
			title: __('Mobile (xs)', 'atrc-prefix-atrc'),
			info: __(
				'Applied to all devices since mobile-first design approach.',
				'atrc-prefix-atrc'
			),
			icon: BsPhone,
			iconType: 'bootstrap',
			iconSize: 12,
			minWidth: 0,
			on: true,
		},
		{
			name: 'sm',
			title: __('Mobile (sm)', 'atrc-prefix-atrc'),
			info: __(
				'Applied to devices from minimum width 576px.',
				'atrc-prefix-atrc'
			),
			icon: BsPhone,
			iconType: 'bootstrap',
			minWidth: 576,
			on: false,
		},
		{
			name: 'md',
			title: __('Tablet (md)', 'atrc-prefix-atrc'),
			info: __(
				'Applied to devices from minimum width 768px.',
				'atrc-prefix-atrc'
			),
			icon: BsTablet,
			iconType: 'bootstrap',
			minWidth: 768,
			on: true,
		},
		{
			name: 'lg',
			title: __('Laptop (lg)', 'atrc-prefix-atrc'),
			info: __(
				'Applied to devices from minimum width 992px.',
				'atrc-prefix-atrc'
			),
			icon: BsLaptop,
			iconType: 'bootstrap',
			minWidth: 992,
			on: true,
		},
		{
			name: 'xl',
			title: __('Desktop (xl)', 'atrc-prefix-atrc'),
			info: __(
				'Applied to devices from minimum width 1200px.',
				'atrc-prefix-atrc'
			),
			icon: BsDisplay,
			iconType: 'bootstrap',
			minWidth: 1200,
			on: true,
		},
		{
			name: 'xxl',
			title: __('Screen (xxl)', 'atrc-prefix-atrc'),
			info: __(
				'Applied to devices from minimum width 1400px.',
				'atrc-prefix-atrc'
			),
			icon: BsTv,
			iconType: 'bootstrap',
			minWidth: 1400,
			on: false,
		},
	];
};

export const AtrcGetAvailableDevices = (nameArray) => {
	if (isArray(nameArray)) {
		return AtrcAvailableDevices().map((device) => ({
			...device,
			on: nameArray.includes(device.name),
		}));
	}
	const isTrue = AtrcParseBoolean(nameArray);
	if (isTrue) {
		return AtrcAvailableDevices();
	}
	return null;
};

export default AtrcAvailableDevices;
