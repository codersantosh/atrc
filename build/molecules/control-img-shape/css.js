/*Library*/
import { isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableDevices from '../../utils/available-devices';
import SvgShapeOptions from './options';

/*Local*/
var SelectedShape = function SelectedShape(value, options) {
  var selectedShape = options.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
export function AtrcSvgToBase64(svgString) {
  var base64Data = btoa(svgString);
  var base64Url = "data:image/svg+xml;base64,".concat(base64Data);
  return base64Url;
}
var AtrcControlImgShapeCss = function AtrcControlImgShapeCss(value, properties) {
  var innerOutput = {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: ''
  };
  if (!isEmpty(value)) {
    if ('img' === value.type) {
      if (value.imgUrl) {
        innerOutput.xs += "".concat(properties.mskImg, " : url(\"").concat(value.imgUrl, "\");");
      }
    } else if ('cust' === value.svgFrm) {
      if (value.svgCust) {
        var base64Url = AtrcSvgToBase64(value.svgCust);
        innerOutput.xs += "".concat(properties.mskImg, " : url('").concat(base64Url, "');");
      }
    } else if (value.svgDefd) {
      var selectedShape = SelectedShape(value.svgDefd, SvgShapeOptions());
      if (selectedShape && selectedShape.svg) {
        var svg = selectedShape.svg;
        var _base64Url = AtrcSvgToBase64(svg);
        innerOutput.xs += "".concat(properties.mskImg, " : url('").concat(_base64Url, "');");
      }
    }
    if (value.flipH || value.flipV) {
      if (value.flipH && value.flipV) {
        innerOutput.xs += "".concat(properties.tf, " : scale(-1,-1);");
      } else if (value.flipH) {
        innerOutput.xs += "".concat(properties.tf, " : scaleX(-1);");
      } else if (value.flipV) {
        innerOutput.xs += "".concat(properties.tf, " : scaleY(-1);");
      }
    }
    if ('cust' === value.sz) {
      var avDevices = AtrcAvailableDevices();
      avDevices.forEach(function (deviceProps) {
        if (deviceProps.on) {
          var device = deviceProps.name;
          var x = 0;
          var y = 0;
          if (device === 'xs') {
            if (value.h && value.w) {
              x = value.w;
              y = value.h;
            }
          } else if (value[device + 'W'] && value[device + 'H']) {
            x = value[device + 'W'];
            y = value[device + 'H'];
          }
          if (x && y) {
            innerOutput[device] += "".concat(properties.mskSz, " : ").concat(x, " ").concat(y, ";");
          }
        }
      });
    } else if (value.sz) {
      innerOutput.xs += "".concat(properties.mskSz, " : ").concat(value.sz, ";");
    }
    if (value.posX || value.posY) {
      innerOutput.xs += "".concat(properties.mskPos, " : ").concat(value.posX || 0, " ").concat(value.posY || 0, ";");
    }
  }
  return innerOutput;
};
export default AtrcControlImgShapeCss;
//# sourceMappingURL=css.js.map