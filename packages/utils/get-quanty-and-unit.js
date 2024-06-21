import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Local */
export default function AtrcGetQuantityAndUnitFromString(
	value,
	allowedUnits = [],
	defaultQuantity = 0,
	defaultUnit = ''
) {
	if (typeof value !== 'string') {
		console.error(
			__("The 'value' parameter must be a string", 'atrc-prefix-atrc')
		);

		return [defaultQuantity, defaultUnit];
	}

	const quantityMatch = value.match(/^-?\d*\.?\d+/);
	const quantity =
		quantityMatch && isFinite(Number(quantityMatch[0]))
			? Number(quantityMatch[0])
			: defaultQuantity;

	const unitMatch = value.match(/[a-z]+$/i);
	const unit =
		unitMatch && allowedUnits.includes(unitMatch[0])
			? unitMatch[0]
			: defaultUnit;

	return [quantity, unit];
}
