/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
const AtrcControlColorTabCss = ({ value, property = '--at-cl' }) => {
	const innerOutput = { xs: '', xsHover: '' };
	if (!isEmpty(value)) {
		if (value.normal) {
			innerOutput.xs += `${property}      : ${value.normal};`;
		}
		if (value.hover) {
			innerOutput.xsHover += `${property}      : ${value.hover};`;
		}
	}
	return innerOutput;
};

export default AtrcControlColorTabCss;
