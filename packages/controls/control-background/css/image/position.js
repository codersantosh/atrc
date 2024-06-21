import React from 'react';

/*Local*/
const BgPos = (value, innerOutput, property) => {

	if (value.bgPosX || value.bgPosY) {
		const x = value.bgPosX ? value.bgPosX : 0;
		const y = value.bgPosY ? value.bgPosY : 0;
		innerOutput.xs += `${property}      : ${x} ${y};`;
	}

	if (value.smBgPosX || value.smBgPosY) {
		const x = value.smBgPosX ? value.smBgPosX : 0;
		const y = value.smBgPosY ? value.smBgPosY : 0;
		innerOutput.sm += `${property}      : ${x} ${y};`;
	}

	if (value.mdBgPosX || value.mdBgPosY) {
		const x = value.mdBgPosX ? value.mdBgPosX : 0;
		const y = value.mdBgPosY ? value.mdBgPosY : 0;
		innerOutput.md += `${property}      : ${x} ${y};`;
	}

	if (value.lgBgPosX || value.lgBgPosY) {
		const x = value.lgBgPosX ? value.lgBgPosX : 0;
		const y = value.lgBgPosY ? value.lgBgPosY : 0;
		innerOutput.lg += `${property}      : ${x} ${y};`;
	}

	if (value.xlBgPosX || value.xlBgPosY) {
		const x = value.xlBgPosX ? value.xlBgPosX : 0;
		const y = value.xlBgPosY ? value.xlBgPosY : 0;
		innerOutput.xl += `${property}      : ${x} ${y};`;
	}

	if (value.xxlBgPosX || value.xxlBgPosY) {
		const x = value.xxlBgPosX ? value.xxlBgPosX : 0;
		const y = value.xxlBgPosY ? value.xxlBgPosY : 0;
		innerOutput.xxl += `${property}      : ${x} ${y};`;
	}

	return innerOutput;
};

export default BgPos;
