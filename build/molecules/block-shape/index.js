import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcImgTag from './../../atoms/img';
import AtrcWrap from './../../atoms/wrap';

/* Controls */
import { AtrcControlBlockShapeBottomSelected, AtrcControlBlockShapeTopSelected } from '../../controls/control-block-shape';

/*Local*/
var AtrcBlockShape = function AtrcBlockShape(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'svg' : _props$type,
    _props$svgFrm = props.svgFrm,
    svgFrm = _props$svgFrm === void 0 ? 'def' : _props$svgFrm,
    _props$svgDefd = props.svgDefd,
    svgDefd = _props$svgDefd === void 0 ? '' : _props$svgDefd,
    _props$svgCust = props.svgCust,
    svgCust = _props$svgCust === void 0 ? '' : _props$svgCust,
    _props$svgCl = props.svgCl,
    svgCl = _props$svgCl === void 0 ? '' : _props$svgCl,
    _props$flipV = props.flipV,
    flipV = _props$flipV === void 0 ? false : _props$flipV,
    _props$flipH = props.flipH,
    flipH = _props$flipH === void 0 ? false : _props$flipH,
    _props$imgUrl = props.imgUrl,
    imgUrl = _props$imgUrl === void 0 ? '' : _props$imgUrl,
    _props$xsH = props.xsH,
    xsH = _props$xsH === void 0 ? '' : _props$xsH,
    _props$smH = props.smH,
    smH = _props$smH === void 0 ? '' : _props$smH,
    _props$mdH = props.mdH,
    mdH = _props$mdH === void 0 ? '' : _props$mdH,
    _props$lgH = props.lgH,
    lgH = _props$lgH === void 0 ? '' : _props$lgH,
    _props$xlH = props.xlH,
    xlH = _props$xlH === void 0 ? '' : _props$xlH,
    _props$xxlH = props.xxlH,
    xxlH = _props$xxlH === void 0 ? '' : _props$xxlH,
    _props$zIdx = props.zIdx,
    zIdx = _props$zIdx === void 0 ? false : _props$zIdx,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  if ('img' === type) {
    if (imgUrl) {
      return /*#__PURE__*/React.createElement(AtrcImgTag, {
        src: imgUrl,
        className: classnames('at-shp', 'at-pos', 'at-w', xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '', flipV || flipH ? 'at-tf' : '', zIdx ? 'at-z-idx' : '', className)
      });
    }
    return null;
  }
  if ('def' === svgFrm) {
    if (svgDefd) {
      var selectedShape = '';
      if ('at-shp-t' === className) {
        selectedShape = AtrcControlBlockShapeTopSelected(svgDefd);
      } else {
        selectedShape = AtrcControlBlockShapeBottomSelected(svgDefd);
      }
      if (selectedShape && selectedShape.svg) {
        var icon = selectedShape.svg;
        return icon({
          className: classnames('at-shp', 'at-pos', 'at-w', xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '', svgCl ? 'at-cl' : '', flipV || flipH ? 'at-tf' : '', zIdx ? 'at-z-idx' : '', className)
        });
      }
    }
    return null;
  }
  if (svgCust) {
    var div = document.createElement('div');
    div.innerHTML = svgCust;
    var hasHtmlTags = div.querySelector('*') !== null;
    return hasHtmlTags ? /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-shp', 'at-pos', 'at-w', 'at-svg-wrp', xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '', svgCl ? 'at-cl' : '', flipV || flipH ? 'at-tf' : '', zIdx ? 'at-z-idx' : '', className),
      dangerouslySetInnerHTML: {
        __html: svgCust
      }
    }) : /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-shp', 'at-pos', 'at-w', 'at-svg-wrp', xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '', svgCl ? 'at-cl' : '', flipV || flipH ? 'at-tf' : '', zIdx ? 'at-z-idx' : '', className)
    }, svgCust);
  }
  return null;
};
export default AtrcBlockShape;
//# sourceMappingURL=index.js.map