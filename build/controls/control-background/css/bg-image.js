import React from 'react';

/*Internal*/
import BgPos from './image/position';
import BgRpt from './image/repeat';
import BgSz from './image/size';
import BgAtch from './image/attachment';
import BgBlendMode from './image/blend-mode';

/*Local*/
var BgImage = function BgImage(value, innerOutput, properties) {
  if (value.bgImgUrl) {
    innerOutput.xs += "".concat(properties.backgroundImage, "      : url(\"").concat(value.bgImgUrl, "\");");

    /*Background position*/
    innerOutput = BgPos(value, innerOutput, properties.backgroundPosition);

    /*Background repeat*/
    innerOutput = BgRpt(value, innerOutput, properties.backgroundRepeat);

    /*Background size*/
    innerOutput = BgSz(value, innerOutput, properties.backgroundSize);

    /*Background attachment*/
    innerOutput = BgAtch(value, innerOutput, properties.backgroundAttachment);

    /*Blend mod*/
    innerOutput = BgBlendMode(value, innerOutput, properties.backgroundBlendMode);
  }
  return innerOutput;
};
export default BgImage;
//# sourceMappingURL=bg-image.js.map