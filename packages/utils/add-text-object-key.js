import React from 'react';

/*Library*/
import { mapKeys } from 'lodash';

/*Local*/
export default function AtrcAddTextObjectKey(obj, addText = '') {
	if (typeof obj !== 'object') {
		console.error('The first argument must be an object');
		return obj;
	}
	if (typeof addText !== 'string') {
		console.error('The second argument must be a string');
		return obj;
	}
	if (!addText) {
		return obj;
	}
	return mapKeys(obj, (value, key) => key + addText);
}
