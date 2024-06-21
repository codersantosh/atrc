var _excluded = ["value", "variant", "className", "onChange", "allowedOptions"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Attributes Structure
Type Object
{
    tType : '',
    tSvgFrm : '',
    tSvgDefd : '',
    tSvgCust : '',
    tFlipV : '',
    tFlipH : '',
    tSvgCl : '',
    tImgFrm :'',
    tImgId :'',
    tImgUrl :'',
    tImgSz :'',

    xsTH :'',xs top height
    smTH :'',
    mdTH :'',
    lgTH :'',
    xlTH :'',
    xxlTH :'',
    xsTW :'', xs top width
    smTW :'',
    mdTW :'',
    lgTW :'',
    xlTW :'',
    xxlTW :'',

    tZIdx:'',

    bType : '',
    bSvgFrm : '',
    bSvgDefd : '',
    bSvgCust : '',
    bFlipV : '',
    bFlipH : '',
    bSvgCl : '',
    bImgFrm :'',
    bImgId :'',
    bImgUrl :'',
    bImgSz :'',

    xsBH :'',xs bottom height
    smBH :'',
    mdBH :'',
    lgBH :'',
    xlBH :'',
    xxlBH :'',
    xsBW :'', xs bottom width
    smBW :'',
    mdBW :'',
    lgBW :'',
    xlBW :'',
    xxlBW :'',
    bZIdx:'',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isArray, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlShape from '../control-shape';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import SvgShapeTopOptions from './options';
import SvgShapeBottomOptions from './bottom-options';

/*Local */
export var AtrcControlBlockShapeTopSelected = function AtrcControlBlockShapeTopSelected(value) {
  var selectedShape = SvgShapeTopOptions().filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
export var AtrcControlBlockShapeBottomSelected = function AtrcControlBlockShapeBottomSelected(value) {
  var selectedShape = SvgShapeBottomOptions().filter(function (item) {
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
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);
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
    _value$tZIdx = value.tZIdx,
    tZIdx = _value$tZIdx === void 0 ? false : _value$tZIdx,
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
    xxlBW = _value$xxlBW === void 0 ? '' : _value$xxlBW,
    _value$bZIdx = value.bZIdx,
    bZIdx = _value$bZIdx === void 0 ? false : _value$bZIdx;
  var resetTop = function resetTop() {
    var valueCloned = cloneDeep(value);
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
    delete valueCloned.xsTH;
    delete valueCloned.smTH;
    delete valueCloned.mdTH;
    delete valueCloned.lgTH;
    delete valueCloned.xlTH;
    delete valueCloned.xxlTH;
    delete valueCloned.xsTW;
    delete valueCloned.smTW;
    delete valueCloned.mdTW;
    delete valueCloned.lgTW;
    delete valueCloned.xlTW;
    delete valueCloned.xxlTW;
    delete valueCloned.tZIdx;
    onChange(valueCloned);
  };
  var setTop = function setTop(newVal) {
    var valueCloned = cloneDeep(value);
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
    delete valueCloned.xsTH;
    delete valueCloned.smTH;
    delete valueCloned.mdTH;
    delete valueCloned.lgTH;
    delete valueCloned.xlTH;
    delete valueCloned.xxlTH;
    delete valueCloned.xsTW;
    delete valueCloned.smTW;
    delete valueCloned.mdTW;
    delete valueCloned.lgTW;
    delete valueCloned.xlTW;
    delete valueCloned.xxlTW;
    delete valueCloned.tZIdx;
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
    if (newVal && newVal.xsW) {
      valueCloned.xsTW = newVal.xsW;
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
    if (newVal && newVal.zIdx) {
      valueCloned.tZIdx = newVal.zIdx;
    }
    if (newVal && newVal.xsH) {
      valueCloned.xsTH = newVal.xsH;
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
    var valueCloned = cloneDeep(value);
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
    delete valueCloned.xsBH;
    delete valueCloned.smBH;
    delete valueCloned.mdBH;
    delete valueCloned.lgBH;
    delete valueCloned.xlBH;
    delete valueCloned.xxlBH;
    delete valueCloned.xsBW;
    delete valueCloned.smBW;
    delete valueCloned.mdBW;
    delete valueCloned.lgBW;
    delete valueCloned.xlBW;
    delete valueCloned.xxlBW;
    delete valueCloned.bZIdx;
    onChange(valueCloned);
  };
  var setBottom = function setBottom(newVal) {
    var valueCloned = cloneDeep(value);
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
    delete valueCloned.xsBH;
    delete valueCloned.smBH;
    delete valueCloned.mdBH;
    delete valueCloned.lgBH;
    delete valueCloned.xlBH;
    delete valueCloned.xxlBH;
    delete valueCloned.xsBW;
    delete valueCloned.smBW;
    delete valueCloned.mdBW;
    delete valueCloned.lgBW;
    delete valueCloned.xlBW;
    delete valueCloned.xxlBW;
    delete valueCloned.bZIdx;
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
    if (newVal && newVal.xsW) {
      valueCloned.xsBW = newVal.xsW;
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
    if (newVal && newVal.zIdx) {
      valueCloned.bZIdx = newVal.zIdx;
    }
    if (newVal && newVal.xsH) {
      valueCloned.xsBH = newVal.xsH;
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
  var AllTabs = [];
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('top')) {
    AllTabs.push({
      name: 'top',
      title: __('Top shape', 'atrc-prefix-atrc'),
      hasValue: tSvgDefd || tSvgCust || tImgId || tImgUrl,
      onDeselect: function onDeselect() {
        return resetTop();
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('bottom')) {
    AllTabs.push({
      name: 'bottom',
      title: __('Bottom shape', 'atrc-prefix-atrc'),
      hasValue: bSvgDefd || bSvgCust || bImgId || bImgUrl,
      onDeselect: function onDeselect() {
        return resetBottom();
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-blk-shp'), className, variant ? AtrcPrefix('ctrl-blk-shp') + '-' + variant : ''),
    label: __('Block shape', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    allowTabs: true,
    tools: AllTabs
  }, defaultProps), function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('top' === item) {
        return /*#__PURE__*/React.createElement(AtrcControlShape, {
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
            xsW: xsTW,
            smW: smTW,
            mdW: mdTW,
            lgW: lgTW,
            xlW: xlTW,
            xxlW: xxlTW,
            zIdx: tZIdx,
            xsH: xsTH,
            smH: smTH,
            mdH: mdTH,
            lgH: lgTH,
            xlH: xlTH,
            xxlH: xxlTH
          },
          onChange: setTop,
          definedOptions: SvgShapeTopOptions(),
          key: iDx
        });
      }
      if ('bottom' === item) {
        return /*#__PURE__*/React.createElement(AtrcControlShape, {
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
            xsW: xsBW,
            smW: smBW,
            mdW: mdBW,
            lgW: lgBW,
            xlW: xlBW,
            xxlW: xxlBW,
            zIdx: bZIdx,
            xsH: xsBH,
            smH: smBH,
            mdH: mdBH,
            lgH: lgBH,
            xlH: xlBH,
            xxlH: xxlBH
          },
          onChange: setBottom,
          definedOptions: SvgShapeBottomOptions(),
          key: iDx
        });
      }
      return null;
    });
  });
};
export default AtrcControlBlockShape;
//# sourceMappingURL=index.js.map