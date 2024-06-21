import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import { mapKeys } from 'lodash';

/*Local*/
export default function AtrcReplaceObjectKey(obj, replaceText = '') {
	if (typeof obj !== 'object') {
		console.error(
			__('The first argument must be an object.', 'atrc-prefix-atrc')
		);
		return obj;
	}
	if (typeof replaceText !== 'string') {
		console.error(
			__('The second argument must be a string.', 'atrc-prefix-atrc')
		);
		return obj;
	}
	if (!replaceText) {
		return obj;
	}
	return mapKeys(obj, (value, key) => key.replace(replaceText, ''));
}
