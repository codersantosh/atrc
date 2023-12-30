/*Library*/
import { isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableDevices from '../../utils/available-devices';

import SvgShapeOptions from './options';

/*Local*/
const SelectedShape = (value, options) => {
	const selectedShape = options.filter(function (item) {
		return item.value === value;
	});
	if (selectedShape.length) {
		return selectedShape[0];
	}
	return null;
};

export function AtrcSvgToBase64(svgString) {
	const base64Data = btoa(svgString);
	const base64Url = `data:image/svg+xml;base64,${base64Data}`;
	return base64Url;
}

const AtrcControlImgShapeCss = (value, properties) => {
	const innerOutput = {
		xs: '',
		sm: '',
		md: '',
		lg: '',
		xl: '',
		xxl: '',
	};
	if (!isEmpty(value)) {
		if ('img' === value.type) {
			if (value.imgUrl) {
				innerOutput.xs += `${properties.mskImg} : url("${value.imgUrl}");`;
			}
		} else if ('cust' === value.svgFrm) {
			if (value.svgCust) {
				const base64Url = AtrcSvgToBase64(value.svgCust);
				innerOutput.xs += `${properties.mskImg} : url('${base64Url}');`;
			}
		} else if (value.svgDefd) {
			const selectedShape = SelectedShape(value.svgDefd, SvgShapeOptions);
			if (selectedShape && selectedShape.svg) {
				const { svg } = selectedShape;
				const base64Url = AtrcSvgToBase64(svg);

				innerOutput.xs += `${properties.mskImg} : url('${base64Url}');`;
			}
		}

		if (value.flipH || value.flipV) {
			if (value.flipH && value.flipV) {
				innerOutput.xs += `${properties.tf} : scale(-1,-1);`;
			} else if (value.flipH) {
				innerOutput.xs += `${properties.tf} : scaleX(-1);`;
			} else if (value.flipV) {
				innerOutput.xs += `${properties.tf} : scaleY(-1);`;
			}
		}

		if ('cust' === value.sz) {
			AtrcAvailableDevices.forEach((deviceProps) => {
				if (deviceProps.on) {
					const device = deviceProps.name;
					let x = 0;
					let y = 0;
					if (device === 'xs') {
						if (value.h && value.w) {
							x = value.w;
							y = value.h;
						}
					} else if (value[device + 'W'] && value[device + 'H']) {
						x = value[device + 'W'];
						y = value[device + 'H'];
					}
					if (x && y) {
						innerOutput[device] += `${properties.mskSz} : ${x} ${y};`;
					}
				}
			});
		} else if (value.sz) {
			innerOutput.xs += `${properties.mskSz} : ${value.sz};`;
		}

		if (value.posX || value.posY) {
			innerOutput.xs += `${properties.mskPos} : ${value.posX || 0} ${
				value.posY || 0
			};`;
		}
	}
	return innerOutput;
};

export default AtrcControlImgShapeCss;
