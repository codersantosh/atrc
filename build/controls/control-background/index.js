/*Attributes Structure
Type Object
{
======Background Color==========
"bgCl":"",
"bgClHover":"",
"bgClActive":"",
"bgGrd":"",
"bgGrdHover":"",
"bgGrdActive":"",
======Background Image==========
"bgImgFrm":"",
"bgImgId":"",
"bgImgUrl":"",
"bgImgSz":"",


"xsBgPosX":"",
"smBgPosX":"",
"mdBgPosX":"",
"lgBgPosX":"",
"xlBgPosX":"",
"xxlBgPosX":"",
"xsBgPosY":"",
"smBgPosY":"",
"mdBgPosY":"",
"lgBgPosY":"",
"xlBgPosY":"",
"xxlBgPosY":"",

"xsBgSz":"",
"smBgSz":"",
"mdBgSz":"",
"lgBgSz":"",
"xlBgSz":"",
"xxlBgSz":"",
"xsBgW":"",
"smBgW":"",
"mdBgW":"",
"lgBgW":"",
"xlBgW":"",
"xxlBgW":"",
"xsBgH":"",
"smBgH":"",
"mdBgH":"",
"lgBgH":"",
"xlBgH":"",
"xxlBgH":"",


"xsBgRpt":"",
"smBgRpt":"",
"mdBgRpt":"",
"lgBgRpt":"",
"xlBgRpt":"",
"xxlBgRpt":"",

"xsBgAtch":"",
"mdBgAtch":"",
"lgBgAtch":"",

"bgBlendMode":"",

======Background Video==========

"bgVidFrm":"",
"bgVidId":"",
"bgVidUrl":"",
"bgVidOnSet":"",
"bgVidLoop":"",
"bgVidMuted":"",
"onBgVidMb":""
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';
import AtrcControlImg from '../control-img';
import AtrcControlVideo from '../control-video';
import AtrcControlSelectDevice from '../control-select-device';
import AtrcControlDropdownColorGradientTab from '../control-dropdown-color-gradient-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcNotice from '../../molecules/notice';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import BackgroundPosition from './background-position';
import BackgroundSize from './background-size';
import { BgAtchOptions, BgBlendModeOptions, RepeatOptions } from './options';

/*Local*/
var mappingBgPosNewValues = function mappingBgPosNewValues(newVal, value) {
  if (newVal && newVal.xsBgPosX) {
    value.xsBgPosX = newVal.xsBgPosX;
  } else {
    delete value.xsBgPosX;
  }
  if (newVal && newVal.smBgPosX) {
    value.smBgPosX = newVal.smBgPosX;
  } else {
    delete value.smBgPosX;
  }
  if (newVal && newVal.mdBgPosX) {
    value.mdBgPosX = newVal.mdBgPosX;
  } else {
    delete value.mdBgPosX;
  }
  if (newVal && newVal.lgBgPosX) {
    value.lgBgPosX = newVal.lgBgPosX;
  } else {
    delete value.lgBgPosX;
  }
  if (newVal && newVal.xlBgPosX) {
    value.xlBgPosX = newVal.xlBgPosX;
  } else {
    delete value.xlBgPosX;
  }
  if (newVal && newVal.xxlBgPosX) {
    value.xxlBgPosX = newVal.xxlBgPosX;
  } else {
    delete value.xxlBgPosX;
  }
  if (newVal && newVal.xsBgPosY) {
    value.xsBgPosY = newVal.xsBgPosY;
  } else {
    delete value.xsBgPosY;
  }
  if (newVal && newVal.smBgPosY) {
    value.smBgPosY = newVal.smBgPosY;
  } else {
    delete value.smBgPosY;
  }
  if (newVal && newVal.mdBgPosY) {
    value.mdBgPosY = newVal.mdBgPosY;
  } else {
    delete value.mdBgPosY;
  }
  if (newVal && newVal.lgBgPosY) {
    value.lgBgPosY = newVal.lgBgPosY;
  } else {
    delete value.lgBgPosY;
  }
  if (newVal && newVal.xlBgPosY) {
    value.xlBgPosY = newVal.xlBgPosY;
  } else {
    delete value.xlBgPosY;
  }
  if (newVal && newVal.xxlBgPosY) {
    value.xxlBgPosY = newVal.xxlBgPosY;
  } else {
    delete value.xxlBgPosY;
  }
  return value;
};
var mappingBgRptNewValues = function mappingBgRptNewValues(newVal, value) {
  if (newVal && newVal.xs) {
    value.xsBgRpt = newVal.xs;
  } else {
    delete value.xsBgRpt;
  }
  if (newVal && newVal.sm) {
    value.smBgRpt = newVal.sm;
  } else {
    delete value.smBgRpt;
  }
  if (newVal && newVal.md) {
    value.mdBgRpt = newVal.md;
  } else {
    delete value.mdBgRpt;
  }
  if (newVal && newVal.lg) {
    value.lgBgRpt = newVal.lg;
  } else {
    delete value.lgBgRpt;
  }
  if (newVal && newVal.xl) {
    value.xlBgRpt = newVal.xl;
  } else {
    delete value.xlBgRpt;
  }
  if (newVal && newVal.xxl) {
    value.xxlBgRpt = newVal.xxl;
  } else {
    delete value.xxlBgRpt;
  }
  return value;
};
var mappingBgSzNewValues = function mappingBgSzNewValues(newVal, value) {
  if (newVal && newVal.xsBgSz) {
    value.xsBgSz = newVal.xsBgSz;
  } else {
    delete value.xsBgSz;
  }
  if (newVal && newVal.smBgSz) {
    value.smBgSz = newVal.smBgSz;
  } else {
    delete value.smBgSz;
  }
  if (newVal && newVal.mdBgSz) {
    value.mdBgSz = newVal.mdBgSz;
  } else {
    delete value.mdBgSz;
  }
  if (newVal && newVal.lgBgSz) {
    value.lgBgSz = newVal.lgBgSz;
  } else {
    delete value.lgBgSz;
  }
  if (newVal && newVal.xlBgSz) {
    value.xlBgSz = newVal.xlBgSz;
  } else {
    delete value.xlBgSz;
  }
  if (newVal && newVal.xxlBgSz) {
    value.xxlBgSz = newVal.xxlBgSz;
  } else {
    delete value.xxlBgSz;
  }
  if (newVal && newVal.xsBgW) {
    value.xsBgW = newVal.xsBgW;
  } else {
    delete value.xsBgW;
  }
  if (newVal && newVal.smBgW) {
    value.smBgW = newVal.smBgW;
  } else {
    delete value.smBgW;
  }
  if (newVal && newVal.mdBgW) {
    value.mdBgW = newVal.mdBgW;
  } else {
    delete value.mdBgW;
  }
  if (newVal && newVal.lgBgW) {
    value.lgBgW = newVal.lgBgW;
  } else {
    delete value.lgBgW;
  }
  if (newVal && newVal.xlBgW) {
    value.xlBgW = newVal.xlBgW;
  } else {
    delete value.xlBgW;
  }
  if (newVal && newVal.xxlBgW) {
    value.xxlBgW = newVal.xxlBgW;
  } else {
    delete value.xxlBgW;
  }
  if (newVal && newVal.xsBgH) {
    value.xsBgH = newVal.xsBgH;
  } else {
    delete value.xsBgH;
  }
  if (newVal && newVal.smBgH) {
    value.smBgH = newVal.smBgH;
  } else {
    delete value.smBgH;
  }
  if (newVal && newVal.mdBgH) {
    value.mdBgH = newVal.mdBgH;
  } else {
    delete value.mdBgH;
  }
  if (newVal && newVal.lgBgH) {
    value.lgBgH = newVal.lgBgH;
  } else {
    delete value.lgBgH;
  }
  if (newVal && newVal.xlBgH) {
    value.xlBgH = newVal.xlBgH;
  } else {
    delete value.xlBgH;
  }
  if (newVal && newVal.xxlBgH) {
    value.xxlBgH = newVal.xxlBgH;
  } else {
    delete value.xxlBgH;
  }
  return value;
};
var mappingBgAtchNewValues = function mappingBgAtchNewValues(newVal, value) {
  if (newVal && newVal.xs) {
    value.xsBgAtch = newVal.xs;
  } else {
    delete value.xsBgAtch;
  }
  if (newVal && newVal.sm) {
    value.smBgAtch = newVal.sm;
  } else {
    delete value.smBgAtch;
  }
  if (newVal && newVal.md) {
    value.mdBgAtch = newVal.md;
  } else {
    delete value.mdBgAtch;
  }
  if (newVal && newVal.lg) {
    value.lgBgAtch = newVal.lg;
  } else {
    delete value.lgBgAtch;
  }
  if (newVal && newVal.xl) {
    value.xlBgAtch = newVal.xl;
  } else {
    delete value.xlBgAtch;
  }
  if (newVal && newVal.xxl) {
    value.xxlBgAtch = newVal.xxl;
  } else {
    delete value.xxlBgAtch;
  }
  return value;
};
var BackgroundImageSettings = function BackgroundImageSettings(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    if (newVal) {
      valueCloned[type] = newVal;
    } else {
      delete valueCloned[type];
    }
    onChange(valueCloned);
  };
  var resetBgPos = function resetBgPos() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.xsBgPosX;
    delete valueCloned.smBgPosX;
    delete valueCloned.mdBgPosX;
    delete valueCloned.lgBgPosX;
    delete valueCloned.xlBgPosX;
    delete valueCloned.xxlBgPosX;
    delete valueCloned.xsBgPosY;
    delete valueCloned.smBgPosY;
    delete valueCloned.mdBgPosY;
    delete valueCloned.lgBgPosY;
    delete valueCloned.xlBgPosY;
    delete valueCloned.xxlBgPosY;
    onChange(valueCloned);
  };
  var setBgPos = function setBgPos(newVal) {
    var valueCloned = cloneDeep(value);
    var newValues = mappingBgPosNewValues(newVal, valueCloned);
    onChange(newValues);
  };
  var resetBgRpt = function resetBgRpt() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.xsBgRpt;
    delete valueCloned.smBgRpt;
    delete valueCloned.mdBgRpt;
    delete valueCloned.lgBgRpt;
    delete valueCloned.xlBgRpt;
    delete valueCloned.xxlBgRpt;
    onChange(valueCloned);
  };
  var setBgRpt = function setBgRpt(newVal) {
    var valueCloned = cloneDeep(value);
    var newValues = mappingBgRptNewValues(newVal, valueCloned);
    onChange(newValues);
  };
  var resetBgSz = function resetBgSz() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.xsBgSz;
    delete valueCloned.smBgSz;
    delete valueCloned.mdBgSz;
    delete valueCloned.lgBgSz;
    delete valueCloned.xlBgSz;
    delete valueCloned.xxlBgSz;
    delete valueCloned.xsBgW;
    delete valueCloned.smBgW;
    delete valueCloned.mdBgW;
    delete valueCloned.lgBgW;
    delete valueCloned.xlBgW;
    delete valueCloned.xxlBgW;
    delete valueCloned.xsBgH;
    delete valueCloned.smBgH;
    delete valueCloned.mdBgH;
    delete valueCloned.lgBgH;
    delete valueCloned.xlBgH;
    delete valueCloned.xxlBgH;
    onChange(valueCloned);
  };
  var setBgSz = function setBgSz(newVal) {
    var valueCloned = cloneDeep(value);
    var newValues = mappingBgSzNewValues(newVal, valueCloned);
    onChange(newValues);
  };
  var resetBgAtch = function resetBgAtch() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.xsBgAtch;
    delete valueCloned.smBgAtch;
    delete valueCloned.mdBgAtch;
    delete valueCloned.lgBgAtch;
    delete valueCloned.xlBgAtch;
    delete valueCloned.xxlBgAtch;
    onChange(valueCloned);
  };
  var setBgAtch = function setBgAtch(newVal) {
    var valueCloned = cloneDeep(value);
    var newValues = mappingBgAtchNewValues(newVal, valueCloned);
    onChange(newValues);
  };
  var resetBackgroundBlendMode = function resetBackgroundBlendMode() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.bgBlendMode;
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    var newValues = {};
    if (value.bgImgFrm) {
      newValues.bgImgFrm = value.bgImgFrm;
    }
    if (value.bgImgId) {
      newValues.bgImgId = value.bgImgId;
    }
    if (value.bgImgUrl) {
      newValues.bgImgUrl = value.bgImgUrl;
    }
    if (value.bgImgSz) {
      newValues.bgImgSz = value.bgImgSz;
    }
    onChange(newValues);
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'position') {
      return !!(value.xsBgPosX || value.xsBgPosY || value.smBgPosX || value.smBgPosY || value.mdBgPosX || value.mdBgPosY || value.lgBgPosX || value.lgBgPosY || value.xlBgPosX || value.xlBgPosY || value.xxlBgPosX || value.xxlBgPosY);
    }
    if (tab === 'repeat') {
      return !!(value.xsBgRpt || value.smBgRpt || value.mdBgRpt || value.lgBgRpt || value.xlBgRpt || value.xxlBgRpt);
    }
    if (tab === 'size') {
      return !!(value.xsBgSz || value.smBgSz || value.mdBgSz || value.lgBgSz || value.xlBgSz || value.xxlBgSz);
    }
    if (tab === 'attachment') {
      return !!(value.xsBgAtch || value.smBgAtch || value.mdBgAtch || value.lgBgAtch || value.xlBgAtch || value.xxlBgAtch);
    }
    if (tab === 'blend') {
      return !!value.bgBlendMode;
    }
    return false;
  };
  var AllTabs = [{
    name: 'position',
    title: __('Background position', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('position'),
    onDeselect: function onDeselect() {
      return resetBgPos();
    }
  }, {
    name: 'repeat',
    title: __('Background repeat', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('repeat'),
    onDeselect: function onDeselect() {
      return resetBgRpt();
    }
  }, {
    name: 'size',
    title: __('Background size', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('size'),
    onDeselect: function onDeselect() {
      return resetBgSz();
    }
  }, {
    name: 'attachment',
    title: __('Background attachment', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('attachment'),
    onDeselect: function onDeselect() {
      return resetBgAtch();
    }
  }, {
    name: 'blend',
    title: __('Background blend mode', 'atrc-prefix-atrc'),
    hasValue: hasTabValue('blend'),
    onDeselect: function onDeselect() {
      return resetBackgroundBlendMode();
    }
  }];
  if (!(value.bgImgId || value.bgImgUrl)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Background image settings', 'atrc-prefix-atrc'),
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('position' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: "at-ctrl-bg-position-".concat(iDx)
        }, /*#__PURE__*/React.createElement(BackgroundPosition, {
          value: {
            xsBgPosX: value && value.xsBgPosX,
            smBgPosX: value && value.smBgPosX,
            mdBgPosX: value && value.mdBgPosX,
            lgBgPosX: value && value.lgBgPosX,
            xlBgPosX: value && value.xlBgPosX,
            xxlBgPosX: value && value.xxlBgPosX,
            xsBgPosY: value && value.xsBgPosY,
            smBgPosY: value && value.smBgPosY,
            mdBgPosY: value && value.mdBgPosY,
            lgBgPosY: value && value.lgBgPosY,
            xlBgPosY: value && value.xlBgPosY,
            xxlBgPosY: value && value.xxlBgPosY
          },
          onChange: setBgPos
        }));
      }
      if ('repeat' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: "at-ctrl-bg-repeat-".concat(iDx)
        }, /*#__PURE__*/React.createElement(AtrcControlSelectDevice, {
          label: __('Background repeat', 'atrc-prefix-atrc'),
          value: {
            xs: value && value.xsBgRpt,
            sm: value && value.smBgRpt,
            md: value && value.mdBgRpt,
            lg: value && value.lgBgRpt,
            xl: value && value.xlBgRpt,
            xxl: value && value.xxlBgRpt
          },
          options: RepeatOptions(),
          onChange: setBgRpt
        }));
      }
      if ('size' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: "at-ctrl-bg-size-".concat(iDx)
        }, /*#__PURE__*/React.createElement(BackgroundSize, {
          label: __('Background size', 'atrc-prefix-atrc'),
          value: {
            xsBgSz: value && value.xsBgSz,
            smBgSz: value && value.smBgSz,
            mdBgSz: value && value.mdBgSz,
            lgBgSz: value && value.lgBgSz,
            xlBgSz: value && value.xlBgSz,
            xxlBgSz: value && value.xxlBgSz,
            xsBgW: value && value.xsBgW,
            smBgW: value && value.smBgW,
            mdBgW: value && value.mdBgW,
            lgBgW: value && value.lgBgW,
            xlBgW: value && value.xlBgW,
            xxlBgW: value && value.xxlBgW,
            xsBgH: value && value.xsBgH,
            smBgH: value && value.smBgH,
            mdBgH: value && value.mdBgH,
            lgBgH: value && value.lgBgH,
            xlBgH: value && value.xlBgH,
            xxlBgH: value && value.xxlBgH
          },
          options: RepeatOptions(),
          onChange: setBgSz
        }));
      }
      if ('attachment' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: "at-ctrl-bg-attachment-".concat(iDx)
        }, /*#__PURE__*/React.createElement(AtrcControlSelectDevice, {
          label: __('Background attachment', 'atrc-prefix-atrc'),
          value: {
            xs: value && value.xsBgAtch,
            sm: value && value.smBgAtch,
            md: value && value.mdBgAtch,
            lg: value && value.lgBgAtch,
            xl: value && value.xlBgAtch,
            xxl: value && value.xxlBgAtch
          },
          options: BgAtchOptions(),
          onChange: setBgAtch
        }));
      }
      if ('blend' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: "at-ctrl-bg-blend-".concat(iDx)
        }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
          label: __('Background blend mode', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: value.bgBlendMode || '',
          options: BgBlendModeOptions(),
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'bgBlendMode');
          }
        }));
      }
      return null;
    });
  });
};
export var AtrcControlBackgroundImage = function AtrcControlBackgroundImage(_ref) {
  var value = _ref.value,
    setImage = _ref.setImage,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcControlImg, {
    value: {
      frm: value && value.bgImgFrm,
      id: value && value.bgImgId,
      sz: value && value.bgImgSz,
      url: value && value.bgImgUrl
    },
    allowDetails: false,
    onChange: setImage
  }), /*#__PURE__*/React.createElement(BackgroundImageSettings, {
    value: value,
    onChange: onChange,
    allowDimensions: true,
    allowDetails: true
  }));
};
var RenderTabPanel = function RenderTabPanel(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    setColor = _ref2.setColor,
    setImage = _ref2.setImage,
    setVideo = _ref2.setVideo,
    _ref2$tab = _ref2.tab,
    tab = _ref2$tab === void 0 ? 'color' : _ref2$tab,
    allowedColorTabs = _ref2.allowedColorTabs;
  if ('color' === tab) {
    return /*#__PURE__*/React.createElement(AtrcControlDropdownColorGradientTab, {
      label: __('Color', 'atrc-prefix-atrc'),
      value: {
        cl: value && value.bgCl,
        grd: value && value.bgGrd,
        clHover: value && value.bgClHover,
        clActive: value && value.bgClActive,
        grdHover: value && value.bgGrdHover,
        grdActive: value && value.bgGrdActive
      },
      onChange: setColor,
      allowedTabs: allowedColorTabs
    });
  }
  if ('image' === tab) {
    return /*#__PURE__*/React.createElement(AtrcControlBackgroundImage, {
      value: value,
      onChange: onChange,
      setImage: setImage
    });
  }
  if ('video' === tab) {
    return /*#__PURE__*/React.createElement(AtrcControlVideo, {
      label: __('Video', 'atrc-prefix-atrc'),
      value: {
        frm: value && value.bgVidFrm,
        id: value && value.bgVidId,
        url: value && value.bgVidUrl,
        onSettings: value && value.bgVidOnSet,
        loop: value && value.bgVidLoop,
        muted: value && value.bgVidMuted,
        onBgVidMb: value && value.onBgVidMb
      },
      allowSettings: true,
      allowDimensions: false,
      allowAutoplay: false,
      allowControls: false,
      allowPlaysInline: false,
      allowPreload: false,
      allowPoster: false,
      onChange: setVideo
    });
  }
  return null;
};
var AtrcControlBackground = function AtrcControlBackground(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Background', 'atrc-prefix-atrc') : _props$label,
    _props$help = props.help,
    help = _props$help === void 0 ? '' : _props$help,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value2 = props.value,
    value = _props$value2 === void 0 ? {} : _props$value2,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2,
    _props$allowColor = props.allowColor,
    allowColor = _props$allowColor === void 0 ? true : _props$allowColor,
    allowedColorTabs = props.allowedColorTabs,
    _props$allowImage = props.allowImage,
    allowImage = _props$allowImage === void 0 ? true : _props$allowImage,
    _props$allowVideo = props.allowVideo,
    allowVideo = _props$allowVideo === void 0 ? true : _props$allowVideo;
  var setColor = function setColor(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.bgCl;
    delete valueCloned.bgGrd;
    delete valueCloned.bgClHover;
    delete valueCloned.bgClActive;
    delete valueCloned.bgGrdHover;
    delete valueCloned.bgGrdActive;
    if (newVal.cl) {
      valueCloned.bgCl = newVal.cl;
    }
    if (newVal.grd) {
      valueCloned.bgGrd = newVal.grd;
    }
    if (newVal.clHover) {
      valueCloned.bgClHover = newVal.clHover;
    }
    if (newVal.grdHover) {
      valueCloned.bgGrdHover = newVal.grdHover;
    }
    if (newVal.clActive) {
      valueCloned.bgClActive = newVal.clActive;
    }
    if (newVal.grdActive) {
      valueCloned.bgGrdActive = newVal.grdActive;
    }
    onChange(valueCloned);
  };
  var setImage = function setImage(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.bgImgFrm;
    delete valueCloned.bgImgId;
    delete valueCloned.bgImgUrl;
    delete valueCloned.bgImgSz;
    if (newVal.frm) {
      valueCloned.bgImgFrm = newVal.frm;
    }
    if (newVal.id) {
      valueCloned.bgImgId = newVal.id;
    }
    if (newVal.url) {
      valueCloned.bgImgUrl = newVal.url;
    }
    if (newVal.size) {
      valueCloned.bgImgSz = newVal.size;
    }
    onChange(valueCloned);
  };
  var resetImage = function resetImage() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.bgImgFrm;
    delete valueCloned.bgImgId;
    delete valueCloned.bgImgUrl;
    delete valueCloned.bgImgSz;
    delete valueCloned.xsBgSz;
    delete valueCloned.smBgSz;
    delete valueCloned.mdBgSz;
    delete valueCloned.lgBgSz;
    delete valueCloned.xlBgSz;
    delete valueCloned.xxlBgSz;
    delete valueCloned.xsBgW;
    delete valueCloned.smBgW;
    delete valueCloned.mdBgW;
    delete valueCloned.lgBgW;
    delete valueCloned.xlBgW;
    delete valueCloned.xxlBgW;
    delete valueCloned.smBgH;
    delete valueCloned.mdBgH;
    delete valueCloned.lgBgH;
    delete valueCloned.xlBgH;
    delete valueCloned.xxlBgH;
    delete valueCloned.xsBgPosX;
    delete valueCloned.smBgPosX;
    delete valueCloned.mdBgPosX;
    delete valueCloned.lgBgPosX;
    delete valueCloned.xlBgPosX;
    delete valueCloned.xxlBgPosX;
    delete valueCloned.xsBgPosY;
    delete valueCloned.smBgPosY;
    delete valueCloned.mdBgPosY;
    delete valueCloned.lgBgPosY;
    delete valueCloned.xlBgPosY;
    delete valueCloned.xxlBgPosY;
    delete valueCloned.xsBgRpt;
    delete valueCloned.smBgRpt;
    delete valueCloned.mdBgRpt;
    delete valueCloned.lgBgRpt;
    delete valueCloned.xlBgRpt;
    delete valueCloned.xxlBgRpt;
    delete valueCloned.xsBgAtch;
    delete valueCloned.smBgAtch;
    delete valueCloned.mdBgAtch;
    delete valueCloned.lgBgAtch;
    delete valueCloned.xlBgAtch;
    delete valueCloned.xxlBgAtch;
    delete valueCloned.bgBlendMode;
    onChange(valueCloned);
  };
  var setVideo = function setVideo(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.bgVidFrm;
    delete valueCloned.bgVidId;
    delete valueCloned.bgVidUrl;
    delete valueCloned.bgVidOnSet;
    delete valueCloned.bgVidLoop;
    delete valueCloned.bgVidMuted;
    delete valueCloned.onBgVidMb;
    if (newVal.frm) {
      valueCloned.bgVidFrm = newVal.frm;
    }
    if (newVal.id) {
      valueCloned.bgVidId = newVal.id;
    }
    if (newVal.url) {
      valueCloned.bgVidUrl = newVal.url;
    }
    if (newVal.onSettings) {
      valueCloned.bgVidOnSet = newVal.onSettings;
    }
    if (newVal.loop) {
      valueCloned.bgVidLoop = newVal.loop;
    }
    if (newVal.muted) {
      valueCloned.bgVidMuted = newVal.muted;
    }
    if (newVal.onBgVidMb) {
      valueCloned.onBgVidMb = newVal.onBgVidMb;
    }
    onChange(valueCloned);
  };
  var resetVideo = function resetVideo() {
    var valueCloned = cloneDeep(value);
    delete valueCloned.bgVidFrm;
    delete valueCloned.bgVidId;
    delete valueCloned.bgVidUrl;
    delete valueCloned.bgVidOnSet;
    delete valueCloned.bgVidLoop;
    delete valueCloned.bgVidMuted;
    delete valueCloned.onBgVidMb;
    onChange(valueCloned);
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'color') {
      return !!(value.bgCl || value.bgGrd || value.bgClHover || value.bgClActive || value.bgGrdHover || value.bgGrdActive);
    }
    if (tab === 'image') {
      return !!(value.bgImgFrm || value.bgImgId || value.bgImgUrl || value.bgImgSz || value.xsBgSz || value.smBgSz || value.mdBgSz || value.lgBgSz || value.xlBgSz || value.xxlBgSz || value.xsBgW || value.smBgW || value.mdBgW || value.lgBgW || value.xlBgW || value.xxlBgW || value.xsBgH || value.smBgH || value.mdBgH || value.lgBgH || value.xlBgH || value.xxlBgH || value.xsBgPosX || value.smBgPosX || value.mdBgPosX || value.lgBgPosX || value.xlBgPosX || value.xxlBgPosX || value.xsBgPosY || value.smBgPosY || value.mdBgPosY || value.lgBgPosY || value.xlBgPosY || value.xxlBgPosY || value.xsBgRpt || value.smBgRpt || value.mdBgRpt || value.lgBgRpt || value.xlBgRpt || value.xxlBgRpt || value.xsBgAtch || value.smBgAtch || value.mdBgAtch || value.lgBgAtch || value.xlBgAtch || value.xxlBgAtch || value.bgBlendMode);
    }
    if (tab === 'video') {
      return !!(value.bgVidFrm || value.bgVidId || value.bgVidUrl || value.bgVidOnSet || value.bgVidLoop || value.bgVidMuted || value.onBgVidMb);
    }
    return false;
  };
  var AllTabs = [];
  if (allowColor) {
    AllTabs.push({
      name: 'color',
      title: __('Color', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('color'),
      onDeselect: function onDeselect() {
        return setColor({});
      }
    });
  }
  if (allowImage) {
    AllTabs.push({
      name: 'image',
      title: __('Image', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('image'),
      onDeselect: function onDeselect() {
        return resetImage();
      }
    });
  }
  if (allowVideo) {
    AllTabs.push({
      name: 'video',
      title: __('Video', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('video'),
      onDeselect: function onDeselect() {
        return resetVideo();
      }
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.bgGrd && value.bgImgUrl ? /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false
  }, __('Either use background gradient color or background image.', 'atrc-prefix-atrc')) : null, /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-bg'), className, variant ? AtrcPrefix('ctrl-bg') + '-' + variant : ''),
    label: label,
    help: help,
    resetAll: function resetAll() {
      return onChange({});
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: onChange,
        setColor: setColor,
        setImage: setImage,
        setVideo: setVideo,
        tab: tab,
        allowedColorTabs: allowedColorTabs,
        key: "at-ctrl-bg-".concat(iDx)
      });
    });
  }));
};
export default AtrcControlBackground;
//# sourceMappingURL=index.js.map