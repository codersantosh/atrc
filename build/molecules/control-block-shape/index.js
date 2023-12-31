"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlBlockShapeTopSelected = exports.AtrcControlBlockShapeBottomSelected = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _controlShape = _interopRequireDefault(require("../control-shape"));
var _options = _interopRequireDefault(require("./options"));
var _bottomOptions = _interopRequireDefault(require("./bottom-options"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
Type Object
{
    tType = '',
    tSvgFrm = '',
    tSvgDefd = '',
    tSvgCust = '',
    tFlipV = '',
    tFlipH = '',
    tSvgCl = '',
    tImgFrm ='',
    tImgId ='',
    tImgUrl ='',
    tImgSz ='',
    tH ='',
    smTH ='',
    mdTH ='',
    lgTH ='',
    xlTH ='',
    xxlTH ='',
    tW ='',
    smTW ='',
    mdTW ='',
    lgTW ='',
    xlTW ='',
    xxlTW ='',
    tZT,

    bType = '',
    bSvgFrm = '',
    bSvgDefd = '',
    bSvgCust = '',
    bFlipV = '',
    bFlipH = '',
    bSvgCl = '',
    bImgFrm ='',
    bImgId ='',
    bImgUrl ='',
    bImgSz ='',
    bH ='',
    smBH ='',
    mdBH ='',
    lgBH ='',
    xlBH ='',
    xxlBH ='',
    bW ='',
    smBW ='',
    mdBW ='',
    lgBW ='',
    xlBW ='',
    xxlBW ='',
    bZT,
}
* */

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt*/

/*Local Components */
var AtrcControlBlockShapeTopSelected = exports.AtrcControlBlockShapeTopSelected = function AtrcControlBlockShapeTopSelected(value) {
  var selectedShape = _options.default.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
var AtrcControlBlockShapeBottomSelected = exports.AtrcControlBlockShapeBottomSelected = function AtrcControlBlockShapeBottomSelected(value) {
  var selectedShape = _bottomOptions.default.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
var AtrcControlBlockShape = function AtrcControlBlockShape(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions;
  var _value$tType = value.tType,
    tType = _value$tType === void 0 ? 'svg' : _value$tType,
    _value$tSvgFrm = value.tSvgFrm,
    tSvgFrm = _value$tSvgFrm === void 0 ? 'def' : _value$tSvgFrm,
    _value$tSvgDefd = value.tSvgDefd,
    tSvgDefd = _value$tSvgDefd === void 0 ? '' : _value$tSvgDefd,
    _value$tSvgCust = value.tSvgCust,
    tSvgCust = _value$tSvgCust === void 0 ? '' : _value$tSvgCust,
    _value$tFlipV = value.tFlipV,
    tFlipV = _value$tFlipV === void 0 ? '' : _value$tFlipV,
    _value$tFlipH = value.tFlipH,
    tFlipH = _value$tFlipH === void 0 ? '' : _value$tFlipH,
    _value$tSvgCl = value.tSvgCl,
    tSvgCl = _value$tSvgCl === void 0 ? '' : _value$tSvgCl,
    _value$tImgFrm = value.tImgFrm,
    tImgFrm = _value$tImgFrm === void 0 ? '' : _value$tImgFrm,
    _value$tImgId = value.tImgId,
    tImgId = _value$tImgId === void 0 ? '' : _value$tImgId,
    _value$tImgUrl = value.tImgUrl,
    tImgUrl = _value$tImgUrl === void 0 ? '' : _value$tImgUrl,
    _value$tImgSz = value.tImgSz,
    tImgSz = _value$tImgSz === void 0 ? '' : _value$tImgSz,
    _value$tH = value.tH,
    tH = _value$tH === void 0 ? '' : _value$tH,
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
    _value$tW = value.tW,
    tW = _value$tW === void 0 ? '' : _value$tW,
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
    _value$tZT = value.tZT,
    tZT = _value$tZT === void 0 ? false : _value$tZT,
    _value$bType = value.bType,
    bType = _value$bType === void 0 ? 'svg' : _value$bType,
    _value$bSvgFrm = value.bSvgFrm,
    bSvgFrm = _value$bSvgFrm === void 0 ? 'def' : _value$bSvgFrm,
    _value$bSvgDefd = value.bSvgDefd,
    bSvgDefd = _value$bSvgDefd === void 0 ? '' : _value$bSvgDefd,
    _value$bSvgCust = value.bSvgCust,
    bSvgCust = _value$bSvgCust === void 0 ? '' : _value$bSvgCust,
    _value$bFlipV = value.bFlipV,
    bFlipV = _value$bFlipV === void 0 ? '' : _value$bFlipV,
    _value$bFlipH = value.bFlipH,
    bFlipH = _value$bFlipH === void 0 ? '' : _value$bFlipH,
    _value$bSvgCl = value.bSvgCl,
    bSvgCl = _value$bSvgCl === void 0 ? '' : _value$bSvgCl,
    _value$bImgFrm = value.bImgFrm,
    bImgFrm = _value$bImgFrm === void 0 ? '' : _value$bImgFrm,
    _value$bImgId = value.bImgId,
    bImgId = _value$bImgId === void 0 ? '' : _value$bImgId,
    _value$bImgUrl = value.bImgUrl,
    bImgUrl = _value$bImgUrl === void 0 ? '' : _value$bImgUrl,
    _value$bImgSz = value.bImgSz,
    bImgSz = _value$bImgSz === void 0 ? '' : _value$bImgSz,
    _value$bH = value.bH,
    bH = _value$bH === void 0 ? '' : _value$bH,
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
    _value$bW = value.bW,
    bW = _value$bW === void 0 ? '' : _value$bW,
    _value$smBW = value.smBW,
    smBW = _value$smBW === void 0 ? '' : _value$smBW,
    _value$mdBW = value.mdBW,
    mdBW = _value$mdBW === void 0 ? '' : _value$mdBW,
    _value$lgBW = value.lgBW,
    lgBW = _value$lgBW === void 0 ? '' : _value$lgBW,
    _value$xlBW = value.xlBW,
    xlBW = _value$xlBW === void 0 ? '' : _value$xlBW,
    _value$xxlBW = value.xxlBW,
    xxlBW = _value$xxlBW === void 0 ? '' : _value$xxlBW,
    _value$bZT = value.bZT,
    bZT = _value$bZT === void 0 ? false : _value$bZT;
  var resetTop = function resetTop() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.tType;
    delete valueCloned.tSvgFrm;
    delete valueCloned.tSvgDefd;
    delete valueCloned.tSvgCust;
    delete valueCloned.tFlipV;
    delete valueCloned.tFlipH;
    delete valueCloned.tSvgCl;
    delete valueCloned.tImgFrm;
    delete valueCloned.tImgId;
    delete valueCloned.tImgUrl;
    delete valueCloned.tImgSz;
    delete valueCloned.tH;
    delete valueCloned.smTH;
    delete valueCloned.mdTH;
    delete valueCloned.lgTH;
    delete valueCloned.xlTH;
    delete valueCloned.xxlTH;
    delete valueCloned.tW;
    delete valueCloned.smTW;
    delete valueCloned.mdTW;
    delete valueCloned.lgTW;
    delete valueCloned.xlTW;
    delete valueCloned.xxlTW;
    delete valueCloned.tZT;
    onChange(valueCloned);
  };
  var setTop = function setTop(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.tType;
    delete valueCloned.tSvgFrm;
    delete valueCloned.tSvgDefd;
    delete valueCloned.tSvgCust;
    delete valueCloned.tFlipV;
    delete valueCloned.tFlipH;
    delete valueCloned.tSvgCl;
    delete valueCloned.tImgFrm;
    delete valueCloned.tImgId;
    delete valueCloned.tImgUrl;
    delete valueCloned.tImgSz;
    delete valueCloned.tH;
    delete valueCloned.smTH;
    delete valueCloned.mdTH;
    delete valueCloned.lgTH;
    delete valueCloned.xlTH;
    delete valueCloned.xxlTH;
    delete valueCloned.tW;
    delete valueCloned.smTW;
    delete valueCloned.mdTW;
    delete valueCloned.lgTW;
    delete valueCloned.xlTW;
    delete valueCloned.xxlTW;
    delete valueCloned.tZT;
    if (newVal && newVal.type) {
      valueCloned.tType = newVal.type;
    }
    if (newVal && newVal.svgFrm) {
      valueCloned.tSvgFrm = newVal.svgFrm;
    }
    if (newVal && newVal.svgDefd) {
      valueCloned.tSvgDefd = newVal.svgDefd;
    }
    if (newVal && newVal.svgCust) {
      valueCloned.tSvgCust = newVal.svgCust;
    }
    if (newVal && newVal.svgCl) {
      valueCloned.tSvgCl = newVal.svgCl;
    }
    if (newVal && newVal.flipV) {
      valueCloned.tFlipV = newVal.flipV;
    }
    if (newVal && newVal.flipH) {
      valueCloned.tFlipH = newVal.flipH;
    }
    if (newVal && newVal.imgFrm) {
      valueCloned.tImgFrm = newVal.imgFrm;
    }
    if (newVal && newVal.imgId) {
      valueCloned.tImgId = newVal.imgId;
    }
    if (newVal && newVal.imgUrl) {
      valueCloned.tImgUrl = newVal.imgUrl;
    }
    if (newVal && newVal.imgSz) {
      valueCloned.tImgSz = newVal.imgSz;
    }
    if (newVal && newVal.w) {
      valueCloned.tW = newVal.w;
    }
    if (newVal && newVal.smW) {
      valueCloned.smTW = newVal.smW;
    }
    if (newVal && newVal.mdW) {
      valueCloned.mdTW = newVal.mdW;
    }
    if (newVal && newVal.lgW) {
      valueCloned.lgTW = newVal.lgW;
    }
    if (newVal && newVal.xlW) {
      valueCloned.xlTW = newVal.xlW;
    }
    if (newVal && newVal.xxlW) {
      valueCloned.xxlTW = newVal.xxlW;
    }
    if (newVal && newVal.zT) {
      valueCloned.tZT = newVal.zT;
    }
    if (newVal && newVal.h) {
      valueCloned.tH = newVal.h;
    }
    if (newVal && newVal.smH) {
      valueCloned.smTH = newVal.smH;
    }
    if (newVal && newVal.mdH) {
      valueCloned.mdTH = newVal.mdH;
    }
    if (newVal && newVal.lgH) {
      valueCloned.lgTH = newVal.lgH;
    }
    if (newVal && newVal.xlH) {
      valueCloned.xlTH = newVal.xlH;
    }
    if (newVal && newVal.xxlH) {
      valueCloned.xxlTH = newVal.xxlH;
    }
    onChange(valueCloned);
  };
  var resetBottom = function resetBottom() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.bType;
    delete valueCloned.bSvgFrm;
    delete valueCloned.bSvgDefd;
    delete valueCloned.bSvgCust;
    delete valueCloned.bFlipV;
    delete valueCloned.bFlipH;
    delete valueCloned.bSvgCl;
    delete valueCloned.bImgFrm;
    delete valueCloned.bImgId;
    delete valueCloned.bImgUrl;
    delete valueCloned.bImgSz;
    delete valueCloned.bH;
    delete valueCloned.smBH;
    delete valueCloned.mdBH;
    delete valueCloned.lgBH;
    delete valueCloned.xlBH;
    delete valueCloned.xxlBH;
    delete valueCloned.bW;
    delete valueCloned.smBW;
    delete valueCloned.mdBW;
    delete valueCloned.lgBW;
    delete valueCloned.xlBW;
    delete valueCloned.xxlBW;
    delete valueCloned.bZT;
    onChange(valueCloned);
  };
  var setBottom = function setBottom(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.bType;
    delete valueCloned.bSvgFrm;
    delete valueCloned.bSvgDefd;
    delete valueCloned.bSvgCust;
    delete valueCloned.bFlipV;
    delete valueCloned.bFlipH;
    delete valueCloned.bSvgCl;
    delete valueCloned.bImgFrm;
    delete valueCloned.bImgId;
    delete valueCloned.bImgUrl;
    delete valueCloned.bImgSz;
    delete valueCloned.bH;
    delete valueCloned.smBH;
    delete valueCloned.mdBH;
    delete valueCloned.lgBH;
    delete valueCloned.xlBH;
    delete valueCloned.xxlBH;
    delete valueCloned.bW;
    delete valueCloned.smBW;
    delete valueCloned.mdBW;
    delete valueCloned.lgBW;
    delete valueCloned.xlBW;
    delete valueCloned.xxlBW;
    delete valueCloned.bZT;
    if (newVal && newVal.type) {
      valueCloned.bType = newVal.type;
    }
    if (newVal && newVal.svgFrm) {
      valueCloned.bSvgFrm = newVal.svgFrm;
    }
    if (newVal && newVal.svgDefd) {
      valueCloned.bSvgDefd = newVal.svgDefd;
    }
    if (newVal && newVal.svgCust) {
      valueCloned.bSvgCust = newVal.svgCust;
    }
    if (newVal && newVal.svgCl) {
      valueCloned.bSvgCl = newVal.svgCl;
    }
    if (newVal && newVal.flipV) {
      valueCloned.bFlipV = newVal.flipV;
    }
    if (newVal && newVal.flipH) {
      valueCloned.bFlipH = newVal.flipH;
    }
    if (newVal && newVal.imgFrm) {
      valueCloned.bImgFrm = newVal.imgFrm;
    }
    if (newVal && newVal.imgId) {
      valueCloned.bImgId = newVal.imgId;
    }
    if (newVal && newVal.imgUrl) {
      valueCloned.bImgUrl = newVal.imgUrl;
    }
    if (newVal && newVal.imgSz) {
      valueCloned.bImgSz = newVal.imgSz;
    }
    if (newVal && newVal.w) {
      valueCloned.bW = newVal.w;
    }
    if (newVal && newVal.smW) {
      valueCloned.smBW = newVal.smW;
    }
    if (newVal && newVal.mdW) {
      valueCloned.mdBW = newVal.mdW;
    }
    if (newVal && newVal.lgW) {
      valueCloned.lgBW = newVal.lgW;
    }
    if (newVal && newVal.xlW) {
      valueCloned.xlBW = newVal.xlW;
    }
    if (newVal && newVal.xxlW) {
      valueCloned.xxlBW = newVal.xxlW;
    }
    if (newVal && newVal.zT) {
      valueCloned.bZT = newVal.zT;
    }
    if (newVal && newVal.h) {
      valueCloned.bH = newVal.h;
    }
    if (newVal && newVal.smH) {
      valueCloned.smBH = newVal.smH;
    }
    if (newVal && newVal.mdH) {
      valueCloned.mdBH = newVal.mdH;
    }
    if (newVal && newVal.lgH) {
      valueCloned.lgBH = newVal.lgH;
    }
    if (newVal && newVal.xlH) {
      valueCloned.xlBH = newVal.xlH;
    }
    if (newVal && newVal.xxlH) {
      valueCloned.xxlBH = newVal.xxlH;
    }
    onChange(valueCloned);
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabsOptions = [];
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('top')) {
      tabsOptions.push({
        name: 'top',
        title: (0, _i18n.__)('Top shape', 'atrc-prefix-atrc'),
        hasValue: tSvgDefd || tSvgCust || tImgId || tImgUrl,
        onDeselect: function onDeselect() {
          return resetTop();
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('bottom')) {
      tabsOptions.push({
        name: 'bottom',
        title: (0, _i18n.__)('Bottom shape', 'atrc-prefix-atrc'),
        hasValue: bSvgDefd || bSvgCust || bImgId || bImgUrl,
        onDeselect: function onDeselect() {
          return resetBottom();
        }
      });
    }
    return tabsOptions;
  }, [value]);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-blk-shp'), className, variant ? (0, _prefixVars.default)('ctrl-blk-shp') + '-' + variant : ''),
    label: (0, _i18n.__)('Block shape', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (item, iDx) {
      if ('top' === item) {
        return /*#__PURE__*/React.createElement(_controlShape.default, {
          value: {
            type: tType,
            svgFrm: tSvgFrm,
            svgDefd: tSvgDefd,
            svgCust: tSvgCust,
            svgCl: tSvgCl,
            flipV: tFlipV,
            flipH: tFlipH,
            imgFrm: tImgFrm,
            imgId: tImgId,
            imgUrl: tImgUrl,
            imgSz: tImgSz,
            w: tW,
            smW: smTW,
            mdW: mdTW,
            lgW: lgTW,
            xlW: xlTW,
            xxlW: xxlTW,
            zT: tZT,
            h: tH,
            smH: smTH,
            mdH: mdTH,
            lgH: lgTH,
            xlH: xlTH,
            xxlH: xxlTH
          },
          onChange: setTop,
          definedOptions: _options.default,
          key: iDx
        });
      }
      if ('bottom' === item) {
        return /*#__PURE__*/React.createElement(_controlShape.default, {
          value: {
            type: bType,
            svgFrm: bSvgFrm,
            svgDefd: bSvgDefd,
            svgCust: bSvgCust,
            svgCl: bSvgCl,
            flipV: bFlipV,
            flipH: bFlipH,
            imgFrm: bImgFrm,
            imgId: bImgId,
            imgUrl: bImgUrl,
            imgSz: bImgSz,
            w: bW,
            smW: smBW,
            mdW: mdBW,
            lgW: lgBW,
            xlW: xlBW,
            xxlW: xxlBW,
            zT: bZT,
            h: bH,
            smH: smBH,
            mdH: mdBH,
            lgH: lgBH,
            xlH: xlBH,
            xxlH: xxlBH
          },
          onChange: setBottom,
          definedOptions: _bottomOptions.default,
          key: iDx
        });
      }
      return null;
    });
  });
};
var _default = exports.default = AtrcControlBlockShape;
//# sourceMappingURL=index.js.map