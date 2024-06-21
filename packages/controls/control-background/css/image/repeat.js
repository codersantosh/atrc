import React from 'react';

/*Local*/
const BgRpt = (value, innerOutput, property) => {
	if (value.bgRpt) {
		innerOutput.xs += `${property}      : ${value.bgRpt};`;
	}

	if (value.smBgRpt) {
		innerOutput.sm += `${property}      : ${value.smBgRpt};`;
	}

	if (value.mdBgRpt) {
		innerOutput.md += `${property}      : ${value.mdBgRpt};`;
	}

	if (value.lgBgRpt) {
		innerOutput.lg += `${property}      : ${value.lgBgRpt};`;
	}

	if (value.xlBgRpt) {
		innerOutput.xl += `${property}      : ${value.xlBgRpt};`;
	}

	if (value.xxlBgRpt) {
		innerOutput.xxl += `${property}      : ${value.xxlBgRpt};`;
	}

	return innerOutput;
};

export default BgRpt;
