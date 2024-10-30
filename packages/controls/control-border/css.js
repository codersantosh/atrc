import React from 'react';

/* Library */
import { isEmpty } from 'lodash';

/* Inbuilt */
import {
	AtrcControlBorderColorShorthand,
	AtrcControlBorderStyleShorthand,
	AtrcControlBorderWidthShorthand,
} from '../control-border';

/* Local */
const AtrcControlBorderCss = ({
	value,
	properties = {
		borderColor: '--at-bdr-cl',
		borderStyle: '--at-bdr-sty',
		borderWidth: '--at-bdr-w',
	},
}) => {
	const output = { xs: '' };

	if (value && !isEmpty(value)) {
		/* Color */
		if (value.cl) {
			output.xs += `${properties.borderColor} : ${value.cl};`;
		} else if (value.tCl || value.rCl || value.bCl || value.lCl) {
			output.xs += `${properties.borderColor}:${AtrcControlBorderColorShorthand(
				value.tCl,
				value.rCl,
				value.bCl,
				value.lCl
			)};`;
		}

		/*Style*/
		if (value.sty) {
			output.xs += `${properties.borderStyle} : ${value.sty};`;
		} else if (value.tSty || value.rSty || value.bSty || value.lSty) {
			output.xs += `${properties.borderStyle}:${AtrcControlBorderStyleShorthand(
				value.tSty,
				value.rSty,
				value.bSty,
				value.lSty
			)};`;
		}

		/*Width*/
		if (value.w) {
			output.xs += `${properties.borderWidth} : ${value.w};`;
		} else if (value.tW || value.rW || value.bW || value.lW) {
			output.xs += `${properties.borderWidth}:${AtrcControlBorderWidthShorthand(
				value.tW,
				value.rW,
				value.bW,
				value.lW
			)};`;
		}
	}
	return output;
};

export default AtrcControlBorderCss;
