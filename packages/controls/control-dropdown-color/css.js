import React from 'react';

/*Local*/
const AtrcControlColorCss = (value, property = '--at-cl') => {
	const output = {};
	if (value) {
		output.xs = `${property}      : ${value};`;
	}
	return output;
};

export default AtrcControlColorCss;
