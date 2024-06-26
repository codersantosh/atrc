import React from 'react';

/*Local*/
const BgBlendMode = (value, innerOutput, property) => {
	if (value.bgBlendMode) {
		innerOutput.xs += `${property}      : ${value.bgBlendMode};`;
	}

	return innerOutput;
};

export default BgBlendMode;
