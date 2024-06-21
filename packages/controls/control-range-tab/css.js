import React from 'react';

/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
const AtrcControlRangeTabCss = (value, property) => {
	const innerOutput = { xs: '', xsHover: '' };
	if (!isEmpty(value)) {
		if (value.normal !== undefined && value.normal !== null) {
			innerOutput.xs += `${property}      : ${value.normal};`;
		}
		if (value.hover !== undefined && value.hover !== null) {
			innerOutput.xsHover += `${property}      : ${value.hover};`;
		}
	}
	return innerOutput;
};

export default AtrcControlRangeTabCss;
