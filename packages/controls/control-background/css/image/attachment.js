import React from 'react';

/*Local*/
const BgAtch = (value, innerOutput, property) => {
	if (value.bgAtch) {
		innerOutput.xs += `${property}      : ${value.bgAtch};`;
	}

	if (value.smBgAtch) {
		innerOutput.sm += `${property}      : ${value.smBgAtch};`;
	}

	if (value.mdBgAtch) {
		innerOutput.md += `${property}      : ${value.mdBgAtch};`;
	}

	if (value.lgBgAtch) {
		innerOutput.lg += `${property}      : ${value.lgBgAtch};`;
	}

	if (value.xlBgAtch) {
		innerOutput.xl += `${property}      : ${value.xlBgAtch};`;
	}

	if (value.xxlBgAtch) {
		innerOutput.xxl += `${property}      : ${value.xxlBgAtch};`;
	}

	return innerOutput;
};

export default BgAtch;
