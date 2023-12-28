/*Library*/
import { isEmpty } from 'lodash';
import { AtrcIsKeyWithValueNotEmpty } from '../../utils';

/*Local*/
const AtrcControlFilterCss = (value, property) => {
	const innerOutput = {
		xs: '',
	};
	if (!isEmpty(value)) {
		let css = '';
		if (AtrcIsKeyWithValueNotEmpty(value, 'blr')) {
			css += ` blur(${value.blr}px)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'brgtNess')) {
			css += ` brightness(${value.brgtNess}%)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'ctrs')) {
			css += ` contrast(${value.ctrs}%)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'grayScl')) {
			css += ` grayscale(${value.grayScl}%)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'hueRot')) {
			css += ` hue-rotate(${value.hueRot}deg)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'inv')) {
			css += ` invert(${value.inv}%)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'opa')) {
			css += ` opacity(${value.opa}%)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'sart')) {
			css += ` saturate(${value.sart}%)`;
		}
		if (AtrcIsKeyWithValueNotEmpty(value, 'sepia')) {
			css += ` sepia(${value.sepia}%)`;
		}
		if (
			AtrcIsKeyWithValueNotEmpty(value, 'hSdw') &&
			AtrcIsKeyWithValueNotEmpty(value, 'vSdw') &&
			AtrcIsKeyWithValueNotEmpty(value, 'sdwBlr') &&
			AtrcIsKeyWithValueNotEmpty(value, 'sdwCl')
		) {
			css += ` drop-shadow(${value.hSdw}px ${value.vSdw}px ${value.sdwBlr}px ${value.sdwCl} )`;
		}
		innerOutput.xs = `${property}      : ${css};`;
	}
	return innerOutput;
};

export default AtrcControlFilterCss;
