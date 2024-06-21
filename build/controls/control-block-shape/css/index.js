import React from 'react';

/* Library */
import { forEach, isEmpty } from 'lodash';

/* Utils */
import { AtrcDeviceCss } from '../../../utils/object-values-with-devices';

/* Local */
var AtrcControlBlockShapeCss = function AtrcControlBlockShapeCss(_ref) {
  var value = _ref.value,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {
      transform: '--at-tf',
      zIndex: '--at-z-idx',
      color: '--at-cl',
      height: '--at-h',
      width: '--at-w'
    } : _ref$properties;
  var _value$tFlipV = value.tFlipV,
    tFlipV = _value$tFlipV === void 0 ? '' : _value$tFlipV,
    _value$tFlipH = value.tFlipH,
    tFlipH = _value$tFlipH === void 0 ? '' : _value$tFlipH,
    _value$tZIdx = value.tZIdx,
    tZIdx = _value$tZIdx === void 0 ? '' : _value$tZIdx,
    _value$tSvgCl = value.tSvgCl,
    tSvgCl = _value$tSvgCl === void 0 ? '' : _value$tSvgCl,
    _value$xsTH = value.xsTH,
    xsTH = _value$xsTH === void 0 ? '' : _value$xsTH,
    _value$smTH = value.smTH,
    smTH = _value$smTH === void 0 ? '' : _value$smTH,
    _value$mdTH = value.mdTH,
    mdTH = _value$mdTH === void 0 ? '' : _value$mdTH,
    _value$lgTH = value.lgTH,
    lgTH = _value$lgTH === void 0 ? '' : _value$lgTH,
    _value$xlTH = value.xlTH,
    xlTH = _value$xlTH === void 0 ? '' : _value$xlTH,
    _value$xxlTH = value.xxlTH,
    xxlTH = _value$xxlTH === void 0 ? '' : _value$xxlTH,
    _value$xsTW = value.xsTW,
    xsTW = _value$xsTW === void 0 ? '' : _value$xsTW,
    _value$smTW = value.smTW,
    smTW = _value$smTW === void 0 ? '' : _value$smTW,
    _value$mdTW = value.mdTW,
    mdTW = _value$mdTW === void 0 ? '' : _value$mdTW,
    _value$lgTW = value.lgTW,
    lgTW = _value$lgTW === void 0 ? '' : _value$lgTW,
    _value$xlTW = value.xlTW,
    xlTW = _value$xlTW === void 0 ? '' : _value$xlTW,
    _value$xxlTW = value.xxlTW,
    xxlTW = _value$xxlTW === void 0 ? '' : _value$xxlTW,
    _value$bFlipV = value.bFlipV,
    bFlipV = _value$bFlipV === void 0 ? '' : _value$bFlipV,
    _value$bFlipH = value.bFlipH,
    bFlipH = _value$bFlipH === void 0 ? '' : _value$bFlipH,
    _value$bZIdx = value.bZIdx,
    bZIdx = _value$bZIdx === void 0 ? '' : _value$bZIdx,
    _value$bSvgCl = value.bSvgCl,
    bSvgCl = _value$bSvgCl === void 0 ? '' : _value$bSvgCl,
    _value$xsBH = value.xsBH,
    xsBH = _value$xsBH === void 0 ? '' : _value$xsBH,
    _value$smBH = value.smBH,
    smBH = _value$smBH === void 0 ? '' : _value$smBH,
    _value$mdBH = value.mdBH,
    mdBH = _value$mdBH === void 0 ? '' : _value$mdBH,
    _value$lgBH = value.lgBH,
    lgBH = _value$lgBH === void 0 ? '' : _value$lgBH,
    _value$xlBH = value.xlBH,
    xlBH = _value$xlBH === void 0 ? '' : _value$xlBH,
    _value$xxlBH = value.xxlBH,
    xxlBH = _value$xxlBH === void 0 ? '' : _value$xxlBH,
    _value$xsBW = value.xsBW,
    xsBW = _value$xsBW === void 0 ? '' : _value$xsBW,
    _value$smBW = value.smBW,
    smBW = _value$smBW === void 0 ? '' : _value$smBW,
    _value$mdBW = value.mdBW,
    mdBW = _value$mdBW === void 0 ? '' : _value$mdBW,
    _value$lgBW = value.lgBW,
    lgBW = _value$lgBW === void 0 ? '' : _value$lgBW,
    _value$xlBW = value.xlBW,
    xlBW = _value$xlBW === void 0 ? '' : _value$xlBW,
    _value$xxlBW = value.xxlBW,
    xxlBW = _value$xxlBW === void 0 ? '' : _value$xxlBW;
  var topOutput = {
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
    xxlHover: ''
  };
  var bottomOutput = {
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
    xxlHover: ''
  };

  /* Top */
  if (tFlipH || tFlipV) {
    if (tFlipH && tFlipV) {
      topOutput.xs += "".concat(properties.transform, " : scale(-1,-1);");
    } else if (tFlipH) {
      topOutput.xs += "".concat(properties.transform, " : scaleX(-1);");
    } else if (tFlipV) {
      topOutput.xs += "".concat(properties.transform, " : scaleY(-1);");
    }
  }
  if (tZIdx) {
    topOutput.xs += "".concat(properties.zIndex, " : 99999;");
  }
  if (tSvgCl) {
    topOutput.xs += "".concat(properties.color, " : ").concat(tSvgCl, ";");
  }
  if (xsTH || smTH || mdTH || lgTH || xlTH || xxlTH) {
    var topHeightCss = AtrcDeviceCss({
      xs: xsTH,
      sm: smTH,
      md: mdTH,
      lg: lgTH,
      xl: xlTH,
      xxl: xxlTH
    }, '', properties.height);
    if (topHeightCss && !isEmpty(topHeightCss)) {
      forEach(topHeightCss, function (item, itemKey) {
        topOutput[itemKey] += item;
      });
    }
  }
  if (xsTW || smTW || mdTW || lgTW || xlTW || xxlTW) {
    var topWidthCss = AtrcDeviceCss({
      xs: xsTW,
      sm: smTW,
      md: mdTW,
      lg: lgTW,
      xl: xlTW,
      xxl: xxlTW
    }, '', properties.width);
    if (topWidthCss && !isEmpty(topWidthCss)) {
      forEach(topWidthCss, function (item, itemKey) {
        topOutput[itemKey] += item;
      });
    }
  }

  /* Bottom */
  if (bFlipH || bFlipV) {
    if (bFlipH && bFlipV) {
      bottomOutput.xs += "".concat(properties.transform, " : scale(-1,-1);");
    } else if (bFlipH) {
      bottomOutput.xs += "".concat(properties.transform, " : scaleX(-1);");
    } else if (bFlipV) {
      bottomOutput.xs += "".concat(properties.transform, " : scaleY(-1);");
    }
  }
  if (bZIdx) {
    bottomOutput.xs += "".concat(properties.zIndex, " : 99999;");
  }
  if (bSvgCl) {
    bottomOutput.xs += "".concat(properties.color, " : ").concat(bSvgCl, ";");
  }
  if (xsBH || smBH || mdBH || lgBH || xlBH || xxlBH) {
    var bottomHeightCss = AtrcDeviceCss({
      xs: xsBH,
      sm: smBH,
      md: mdBH,
      lg: lgBH,
      xl: xlBH,
      xxl: xxlBH
    }, '', properties.height);
    if (bottomHeightCss && !isEmpty(bottomHeightCss)) {
      forEach(bottomHeightCss, function (item, itemKey) {
        bottomOutput[itemKey] += item;
      });
    }
  }
  if (xsBW || smBW || mdBW || lgBW || xlBW || xxlBW) {
    var bottomWidthCss = AtrcDeviceCss({
      xs: xsBW,
      sm: smBW,
      md: mdBW,
      lg: lgBW,
      xl: xlBW,
      xxl: xxlBW
    }, '', properties.width);
    if (bottomWidthCss && !isEmpty(bottomWidthCss)) {
      forEach(bottomWidthCss, function (item, itemKey) {
        bottomOutput[itemKey] += item;
      });
    }
  }
  return {
    topCss: topOutput,
    bottomCss: bottomOutput
  };
};
export default AtrcControlBlockShapeCss;
//# sourceMappingURL=index.js.map