/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */

/* Utils */
import {
	AtrcDeviceCss,
	AtrcDeviceTabCss,
} from '../../utils/object-values-with-devices';
import { AtrcTabCss } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Local*/
const AtrcControlWidthHeightCss = ({
	value,
	properties = {
		minWidth: '--at-min-w',
		width: '--at-w',
		maxWidth: '--at-max-w',
		minHeight: '--at-min-h',
		height: '--at-h',
		maxHeight: '--at-max-h',
	},
	type = '',
}) => {
	const output = {
		xs: '',
		xsHover: '',
		xsActive: '',
		sm: '',
		smHover: '',
		smActive: '',
		md: '',
		mdHover: '',
		mdActive: '',
		lg: '',
		lgHover: '',
		lgActive: '',
		xl: '',
		xlHover: '',
		xlActive: '',
		xxl: '',
		xxlHover: '',
		xxlActive: '',
	};
	if ('deviceTab' === type) {
		if (value.minW) {
			const gotCss = AtrcDeviceTabCss(value.minW, '', properties.minWidth);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.w) {
			const gotCss = AtrcDeviceTabCss(value.w, '', properties.width);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.maxW) {
			const gotCss = AtrcDeviceTabCss(value.maxW, '', properties.maxWidth);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.minH) {
			const gotCss = AtrcDeviceTabCss(value.minH, '', properties.minHeight);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.h) {
			const gotCss = AtrcDeviceTabCss(value.h, '', properties.height);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.maxH) {
			const gotCss = AtrcDeviceTabCss(value.maxH, '', properties.maxHeight);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else if ('device' === type) {
		if (value.minW) {
			const gotCss = AtrcDeviceCss(value.minW, '', properties.minWidth);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.w) {
			const gotCss = AtrcDeviceCss(value.w, '', properties.width);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.maxW) {
			const gotCss = AtrcDeviceCss(value.maxW, '', properties.maxWidth);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.minH) {
			const gotCss = AtrcDeviceCss(value.minH, '', properties.minHeight);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.h) {
			const gotCss = AtrcDeviceCss(value.h, '', properties.height);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.maxH) {
			const gotCss = AtrcDeviceCss(value.maxH, '', properties.maxHeight);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else if ('tab' === type) {
		if (value.minW) {
			const gotCss = AtrcTabCss(value.minW, '', properties.minWidth);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.w) {
			const gotCss = AtrcTabCss(value.w, '', properties.width);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.maxW) {
			const gotCss = AtrcTabCss(value.maxW, '', properties.maxWidth);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.minH) {
			const gotCss = AtrcTabCss(value.minH, '', properties.minHeight);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.h) {
			const gotCss = AtrcTabCss(value.h, '', properties.height);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.maxH) {
			const gotCss = AtrcTabCss(value.maxH, '', properties.maxHeight);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else {
		if (value.minW) {
			output.xs += `${properties.minWidth}      : ${value.minW};`;
		}
		if (value.w) {
			output.xs += `${properties.width}      : ${value.w};`;
		}
		if (value.maxW) {
			output.xs += `${properties.maxWidth}      : ${value.maxW};`;
		}
		if (value.minH) {
			output.xs += `${properties.minHeight}      : ${value.minH};`;
		}
		if (value.h) {
			output.xs += `${properties.height}      : ${value.h};`;
		}
		if (value.maxH) {
			output.xs += `${properties.maxHeight}      : ${value.maxH};`;
		}
	}

	return output;
};

export default AtrcControlWidthHeightCss;
