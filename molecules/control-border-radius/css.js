/* Inbuilt */
import { AtrcControlBoxFourShorthandCssOnly } from './../index';

/* Local */
const AtrcControlBorderRadiusCss = (value, property = 'border-radius') => {
	const output = { xs: '' };
	if (typeof value === 'object') {
		output.xs += `${property}:${AtrcControlBoxFourShorthandCssOnly({
			t: value.tL,
			r: value.tR,
			b: value.bR,
			l: value.bL,
		})};`;
	} else {
		output.xs += `${property} : ${value};`;
	}
	return output;
};

export default AtrcControlBorderRadiusCss;
