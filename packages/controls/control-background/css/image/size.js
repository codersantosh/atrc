import React from 'react';

/*Local*/
const BgSz = (value, innerOutput, property) => {
	if (value.bgSz) {
		if ('custom' !== value.bgSz) {
			innerOutput.xs += `${property}      : ${value.bgSz};`;
		} else if (value.bgW && value.bgH) {
			innerOutput.xs += `${property}      : ${value.bgW} ${value.bgH};`;
		}
	}

	if (value.smBgSz) {
		if ('custom' !== value.smBgSz) {
			innerOutput.sm += `${property}      : ${value.smBgSz};`;
		} else if (value.smBgW && value.smBgH) {
			innerOutput.sm += `${property}      : ${value.smBgW} ${value.smBgH};`;
		}
	}

	if (value.mdBgSz) {
		if ('custom' !== value.mdBgSz) {
			innerOutput.md += `${property}      : ${value.mdBgSz};`;
		} else if (value.mdBgW && value.mdBgH) {
			innerOutput.md += `${property}      : ${value.mdBgW} ${value.mdBgH};`;
		}
	}

	if (value.lgBgSz) {
		if ('custom' !== value.lgBgSz) {
			innerOutput.lg += `${property}      : ${value.lgBgSz};`;
		} else if (value.lgBgW && value.lgBgH) {
			innerOutput.lg += `${property}      : ${value.lgBgW} ${value.lgBgH};`;
		}
	}

	if (value.xlBgSz) {
		if ('custom' !== value.xlBgSz) {
			innerOutput.xl += `${property}      : ${value.xlBgSz};`;
		} else if (value.xlBgW && value.xlBgH) {
			innerOutput.xl += `${property}      : ${value.xlBgW} ${value.xlBgH};`;
		}
	}

	if (value.xxlBgSz) {
		if ('custom' !== value.xxlBgSz) {
			innerOutput.xxl += `${property}      : ${value.xxlBgSz};`;
		} else if (value.xxlBgW && value.xxlBgH) {
			innerOutput.xxl += `${property}      : ${value.xxlBgW} ${value.xxlBgH};`;
		}
	}

	return innerOutput;
};

export default BgSz;
