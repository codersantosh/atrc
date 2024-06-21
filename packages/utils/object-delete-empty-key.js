import React from 'react';

/* Local */
export default function AtrcObjDeleteEmptyKey(value) {
	const modifiedObject = {};

	for (let key in value) {
		if (value[key] != null && value[key]) {
			modifiedObject[key] = value[key];
		}
	}

	return modifiedObject;
}
