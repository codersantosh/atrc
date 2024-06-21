import React from 'react';

/*Internal*/
import BgPos from './image/position';
import BgRpt from './image/repeat';
import BgSz from './image/size';
import BgAtch from './image/attachment';
import BgBlendMode from './image/blend-mode';

/*Local*/
const BgImage = (value, innerOutput, properties) => {
	if (value.bgImgUrl) {
		innerOutput.xs += `${properties.backgroundImage}      : url("${value.bgImgUrl}");`;

		/*Background position*/
		innerOutput = BgPos(value, innerOutput, properties.backgroundPosition);

		/*Background repeat*/
		innerOutput = BgRpt(value, innerOutput, properties.backgroundRepeat);

		/*Background size*/
		innerOutput = BgSz(value, innerOutput, properties.backgroundSize);

		/*Background attachment*/
		innerOutput = BgAtch(value, innerOutput, properties.backgroundAttachment);

		/*Blend mod*/
		innerOutput = BgBlendMode(
			value,
			innerOutput,
			properties.backgroundBlendMode
		);
	}

	return innerOutput;
};
export default BgImage;
