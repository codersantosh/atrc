/* Library */
import { isEmpty } from 'lodash';

/* Local */
const AtrcControlBoxShadowCss = (value, property = 'box-shadow') => {
	const output = { xs: '' };

	if (!isEmpty(value) && value.x && value.y) {
		output.xs += `${property} :
		${value.pos ? value.pos : ''}
		${value.x} ${value.y} 
		${value.blr ? value.blr : ''}
		${value.sprd ? value.sprd : ''} 
		${value.cl ? value.cl : ''};`;
	}
	return output;
};

export default AtrcControlBoxShadowCss;
