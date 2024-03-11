/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */

/* Utils */
import { AtrcDeviceCss } from '../../utils/object-values-with-devices';

/*Local*/
const AtrcControlOverflowDeviceCss = (value, property = '--at-ovf') => {
	const output = {
		xs: '',
		sm: '',
		md: '',
		lg: '',
		xl: '',
		xxl: '',
	};
	const gotCss = AtrcDeviceCss(value, '', property);
	if (gotCss && !isEmpty(gotCss)) {
		forEach(gotCss, (item, itemKey) => {
			output[itemKey] += item;
		});
	}

	return output;
};

export default AtrcControlOverflowDeviceCss;
