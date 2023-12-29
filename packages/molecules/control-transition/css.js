/*Library*/
import { isEmpty } from 'lodash';

/*Local*/
const AtrcControlTransitionCss = (value, property) => {
	const innerOutput = { xs: '', xsHover: '' };
	if (!isEmpty(value)) {
		if (value.dur || 0 === value.dur) {
			innerOutput.xs += `${property}      : all ${value.dur}s ${
				value.tmgFn || 'ease'
			} ${value.dla || 0}s;`;
		}
	}

	return innerOutput;
};

export default AtrcControlTransitionCss;
