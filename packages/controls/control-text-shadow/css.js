/* Library */
import { isEmpty } from 'lodash';

/* Local */
const AtrcControlTextShadowCss = (value, property = '--at-txt-sdw') => {
	const output = { xs: '' };

	if (!isEmpty(value) && value.x && value.y) {
		output.xs += `${property} :${value.x} ${value.y} ${
			value.blr ? value.blr : ''
		} ${value.cl ? value.cl : ''};`;
	}
	return output;
};

export default AtrcControlTextShadowCss;
