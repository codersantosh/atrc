/*Library*/
import { isEmpty } from 'lodash';
import {
	AtrcAvailableTabs,
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils';

/*Local*/

export const AtrcControlDropdownColorGradientTabCss = ({
	value,
	innerOutput,
	property,
	propGrd,
}) => {
	if (value.cl) {
		innerOutput.xs += `${property}      : ${value.cl};`;
	}
	if (value.clHover) {
		innerOutput.xsHover += `${property}      : ${value.clHover};`;
	}
	if (value.clActive) {
		innerOutput.xsActive += `${property}      : ${value.clActive};`;
	}
	if (value.grd) {
		innerOutput.xs += `${propGrd}      : ${value.grd};`;
	}
	if (value.grdHover) {
		innerOutput.xsHover += `${propGrd}      : ${value.grdHover};`;
	}
	if (value.grdActive) {
		innerOutput.xsActive += `${propGrd}      : ${value.grdActive};`;
	}
	return innerOutput;
};

const AtrcControlColorCSS = (value, property) => {
	if (!value || !property) {
		return null;
	}
	let color = '';

	if (value.cl) {
		color += `${property}      : ${value.cl};`;
	} else if (value.grd) {
		color += `background      : ${value.grd};`;
		color += `text-fill-color      : transparent;`;
		color += `background-clip      : text;`;
	}

	return color;
};

const AtrcControlDropdownColorGradientTabCssText = (
	value,
	property = 'color'
) => {
	const output = {};
	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, ['cl', 'grd'])) {
					const color = AtrcGetTabValues(value, tab, ['cl', 'grd']),
						css = AtrcControlColorCSS(color, property);

					switch (tab) {
						case 'normal':
							output.xs = css;
							break;

						default:
							output['xs' + tab] = css;
							break;
					}
				}
			}
		});
	}
	return output;
};

export default AtrcControlDropdownColorGradientTabCssText;
