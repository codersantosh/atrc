import React from 'react';

/* Inbuilt */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';

/* Local */
const AtrcControlBorderRadiusCss = (value, property = '--at-bdr-rad') => {
	const output = { xs: '' };
	if (typeof value === 'object') {
		output.xs += `${property}:${AtrcControlBoxFourShorthandCssOnly({
			value: {
				t: value.tL,
				r: value.tR,
				b: value.bR,
				l: value.bL,
			},
		})};`;
	} else {
		output.xs += `${property} : ${value};`;
	}
	return output;
};

export default AtrcControlBorderRadiusCss;
