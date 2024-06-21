import React from 'react';

/* Library */
import { forEach, isEmpty } from 'lodash';

/* Utils */
import { AtrcDeviceCss } from '../../../utils/object-values-with-devices';

/* Local */
const AtrcControlBlockShapeCss = ({
	value,
	properties = {
		transform: '--at-tf',
		zIndex: '--at-z-idx',
		color: '--at-cl',
		height: '--at-h',
		width: '--at-w',
	},
}) => {
	const {
		tFlipV = '',
		tFlipH = '',
		tZIdx = '',
		tSvgCl = '',

		xsTH = '',
		smTH = '',
		mdTH = '',
		lgTH = '',
		xlTH = '',
		xxlTH = '',
		xsTW = '',
		smTW = '',
		mdTW = '',
		lgTW = '',
		xlTW = '',
		xxlTW = '',

		bFlipV = '',
		bFlipH = '',
		bZIdx = '',
		bSvgCl = '',
		xsBH = '',
		smBH = '',
		mdBH = '',
		lgBH = '',
		xlBH = '',
		xxlBH = '',
		xsBW = '',
		smBW = '',
		mdBW = '',
		lgBW = '',
		xlBW = '',
		xxlBW = '',
	} = value;

	const topOutput = {
		xs: '',
		xsHover: '',
		sm: '',
		smHover: '',
		md: '',
		mdHover: '',
		lg: '',
		lgHover: '',
		xl: '',
		xlHover: '',
		xxl: '',
		xxlHover: '',
	};

	const bottomOutput = {
		xs: '',
		xsHover: '',
		sm: '',
		smHover: '',
		md: '',
		mdHover: '',
		lg: '',
		lgHover: '',
		xl: '',
		xlHover: '',
		xxl: '',
		xxlHover: '',
	};

	/* Top */
	if (tFlipH || tFlipV) {
		if (tFlipH && tFlipV) {
			topOutput.xs += `${properties.transform} : scale(-1,-1);`;
		} else if (tFlipH) {
			topOutput.xs += `${properties.transform} : scaleX(-1);`;
		} else if (tFlipV) {
			topOutput.xs += `${properties.transform} : scaleY(-1);`;
		}
	}
	if (tZIdx) {
		topOutput.xs += `${properties.zIndex} : 99999;`;
	}
	if (tSvgCl) {
		topOutput.xs += `${properties.color} : ${tSvgCl};`;
	}

	if (xsTH || smTH || mdTH || lgTH || xlTH || xxlTH) {
		const topHeightCss = AtrcDeviceCss(
			{
				xs: xsTH,
				sm: smTH,
				md: mdTH,
				lg: lgTH,
				xl: xlTH,
				xxl: xxlTH,
			},
			'',
			properties.height
		);
		if (topHeightCss && !isEmpty(topHeightCss)) {
			forEach(topHeightCss, (item, itemKey) => {
				topOutput[itemKey] += item;
			});
		}
	}

	if (xsTW || smTW || mdTW || lgTW || xlTW || xxlTW) {
		const topWidthCss = AtrcDeviceCss(
			{
				xs: xsTW,
				sm: smTW,
				md: mdTW,
				lg: lgTW,
				xl: xlTW,
				xxl: xxlTW,
			},
			'',
			properties.width
		);
		if (topWidthCss && !isEmpty(topWidthCss)) {
			forEach(topWidthCss, (item, itemKey) => {
				topOutput[itemKey] += item;
			});
		}
	}

	/* Bottom */
	if (bFlipH || bFlipV) {
		if (bFlipH && bFlipV) {
			bottomOutput.xs += `${properties.transform} : scale(-1,-1);`;
		} else if (bFlipH) {
			bottomOutput.xs += `${properties.transform} : scaleX(-1);`;
		} else if (bFlipV) {
			bottomOutput.xs += `${properties.transform} : scaleY(-1);`;
		}
	}
	if (bZIdx) {
		bottomOutput.xs += `${properties.zIndex} : 99999;`;
	}
	if (bSvgCl) {
		bottomOutput.xs += `${properties.color} : ${bSvgCl};`;
	}

	if (xsBH || smBH || mdBH || lgBH || xlBH || xxlBH) {
		const bottomHeightCss = AtrcDeviceCss(
			{
				xs: xsBH,
				sm: smBH,
				md: mdBH,
				lg: lgBH,
				xl: xlBH,
				xxl: xxlBH,
			},
			'',
			properties.height
		);
		if (bottomHeightCss && !isEmpty(bottomHeightCss)) {
			forEach(bottomHeightCss, (item, itemKey) => {
				bottomOutput[itemKey] += item;
			});
		}
	}

	if (xsBW || smBW || mdBW || lgBW || xlBW || xxlBW) {
		const bottomWidthCss = AtrcDeviceCss(
			{
				xs: xsBW,
				sm: smBW,
				md: mdBW,
				lg: lgBW,
				xl: xlBW,
				xxl: xxlBW,
			},
			'',
			properties.width
		);
		if (bottomWidthCss && !isEmpty(bottomWidthCss)) {
			forEach(bottomWidthCss, (item, itemKey) => {
				bottomOutput[itemKey] += item;
			});
		}
	}

	return {
		topCss: topOutput,
		bottomCss: bottomOutput,
	};
};

export default AtrcControlBlockShapeCss;
