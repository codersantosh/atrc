/*Library*/
import { forEach, isEmpty } from 'lodash';

/*Utils*/
import {
	AtrcDeviceCss,
	AtrcGetDeviceValues,
	AtrcHasDeviceValues,
} from '../../../utils/object-values-with-devices';

/*Local*/
const AtrcControlPositionDeviceCss = ({
	value,
	properties = {
		position: '--at-pos',
		bottom: '--at-b',
		top: '--at-t',
		right: '--at-r',
		left: '--at-l',
	},
}) => {
	let innerOutput = {
		xs: '',
		sm: '',
		md: '',
		lg: '',
		xl: '',
		xxl: '',
	};
	if (!isEmpty(value)) {
		/* Position */
		if (AtrcHasDeviceValues(value, 'pos')) {
			const pos = AtrcGetDeviceValues(value, 'pos');
			const getCss = AtrcDeviceCss(pos, '', properties.position);
			forEach(getCss, (item, itemKey) => {
				if (!innerOutput[itemKey]) {
					innerOutput[itemKey] = '';
				}

				innerOutput[itemKey] += item;
			});
		}
		/* Top */
		if (AtrcHasDeviceValues(value, 't')) {
			const deviceVal = AtrcGetDeviceValues(value, 't');
			const getCss = AtrcDeviceCss(deviceVal, '', properties.top);
			forEach(getCss, (item, itemKey) => {
				if (!innerOutput[itemKey]) {
					innerOutput[itemKey] = '';
				}

				innerOutput[itemKey] += item;
			});
		}
		/* Right */
		if (AtrcHasDeviceValues(value, 'r')) {
			const deviceVal = AtrcGetDeviceValues(value, 'r');
			const getCss = AtrcDeviceCss(deviceVal, '', properties.right);
			forEach(getCss, (item, itemKey) => {
				if (!innerOutput[itemKey]) {
					innerOutput[itemKey] = '';
				}

				innerOutput[itemKey] += item;
			});
		}

		/* Bottom */
		if (AtrcHasDeviceValues(value, 'b')) {
			const deviceVal = AtrcGetDeviceValues(value, 'b');
			const getCss = AtrcDeviceCss(deviceVal, '', properties.bottom);
			forEach(getCss, (item, itemKey) => {
				if (!innerOutput[itemKey]) {
					innerOutput[itemKey] = '';
				}

				innerOutput[itemKey] += item;
			});
		}

		/* Left */
		if (AtrcHasDeviceValues(value, 'l')) {
			const deviceVal = AtrcGetDeviceValues(value, 'l');
			const getCss = AtrcDeviceCss(deviceVal, '', properties.left);
			forEach(getCss, (item, itemKey) => {
				if (!innerOutput[itemKey]) {
					innerOutput[itemKey] = '';
				}

				innerOutput[itemKey] += item;
			});
		}
	}

	return innerOutput;
};

export default AtrcControlPositionDeviceCss;
