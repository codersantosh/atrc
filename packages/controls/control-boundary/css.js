/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Controls */
import AtrcControlBorderTabCss from '../control-border-tab/css';
import AtrcControlBorderRadiusTabCss from './../control-border-radius-tab/css';
import AtrcControlBoxShadowTabCss from './../control-box-shadow-tab/css';
import AtrcControlBorderCss from '../control-border/css';
import AtrcControlBorderRadiusCss from '../control-border-radius/css';
import AtrcControlBoxShadowCss from '../control-box-shadow/css';

/* Utils */

/*Local*/
const AtrcControlBoundaryCss = ({
	value,
	properties = {
		borderColor: '--at-bdr-cl',
		borderStyle: '--at-bdr-sty',
		borderWidth: '--at-bdr-w',
		borderRadius: '--at-bdr-rad',
		boxShadow: '--at-box-sdw',
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
	if ('tab' === type) {
		if (value.bdr) {
			const gotCss = AtrcControlBorderTabCss({
				value: value.bdr,
				properties: {
					borderColor: properties.borderColor,
					borderStyle: properties.borderStyle,
					borderWidth: properties.borderWidth,
				},
			});
            
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.bdrRad) {
			const gotCss = AtrcControlBorderRadiusTabCss(
				value.bdrRad,
				properties.borderRadius
			);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.boxSdw) {
			const gotCss = AtrcControlBoxShadowTabCss(
				value.boxSdw,
				properties.boxShadow
			);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	} else {
		if (value.bdr) {
			const gotCss = AtrcControlBorderCss({
				value: value.bdr,
				properties: {
					borderColor: properties.borderColor,
					borderStyle: properties.borderStyle,
					borderWidth: properties.borderWidth,
				},
			});
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.bdrRad) {
			const gotCss = AtrcControlBorderRadiusCss(
				value.bdrRad,
				properties.borderRadius
			);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
		if (value.boxSdw) {
			const gotCss = AtrcControlBoxShadowCss(
				value.boxSdw,
				properties.boxShadow
			);
			if (gotCss && !isEmpty(gotCss)) {
				forEach(gotCss, (item, itemKey) => {
					output[itemKey] += item;
				});
			}
		}
	}

	return output;
};

export default AtrcControlBoundaryCss;
