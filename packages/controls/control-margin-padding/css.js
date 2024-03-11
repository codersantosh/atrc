/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import { AtrcControlBoxFourShorthandCssOnly } from '../control-box-four/css';
import AtrcControlBoxFourDeviceCss from '../control-box-four-device/css';
import AtrcControlBoxFourTabCss from '../control-box-four-tab/css';
import AtrcControlBoxFourDeviceTabCss from './../control-box-four-device-tab/css';

/* Utils */

/*Local*/
const AtrcControlMarginPaddingCss = ({
	value,
	properties = {
		margin: '--at-m',
		padding: '--at-p',
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
		if (value.m) {
			const gotCss = AtrcControlBoxFourDeviceTabCss({
				value: value.m,
				property: properties.margin,
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.p) {
			const gotCss = AtrcControlBoxFourDeviceTabCss({
				value: value.p,
				property: properties.padding,
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else if ('device' === type) {
		if (value.m) {
			const gotCss = AtrcControlBoxFourDeviceCss({
				value: value.m,
				property: properties.margin,
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.p) {
			const gotCss = AtrcControlBoxFourDeviceCss({
				value: value.p,
				property: properties.padding,
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else if ('tab' === type) {
		if (value.m) {
			const gotCss = AtrcControlBoxFourTabCss({
				value: value.m,
				property: properties.margin,
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.p) {
			const gotCss = AtrcControlBoxFourTabCss({
				value: value.p,
				property: properties.padding,
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else {
		if (value.m) {
			output.xs += AtrcControlBoxFourShorthandCssOnly({
				value: value.m,
				property: properties.margin,
			});
		}
		if (value.p) {
			output.xs += AtrcControlBoxFourShorthandCssOnly({
				value: value.p,
				property: properties.padding,
			});
		}
	}

	return output;
};

export default AtrcControlMarginPaddingCss;
