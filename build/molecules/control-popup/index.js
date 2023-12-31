"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlImg = _interopRequireDefault(require("../control-img"));
var _controlVideo = _interopRequireDefault(require("../control-video"));
var _controlLink = _interopRequireDefault(require("../control-link"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _select = _interopRequireDefault(require("../../atoms/select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
 Type Object
 {
	ppSrc
 ======Link==========
ppUrl;

 ====== Image==========
"ppImgFrm":"",
"ppImgId":"",
"ppImgUrl":"",
"ppImgSz":"",

 ====== Video==========

"ppVidFrm":"",
"ppVidId":"",
"ppVidUrl":"",
}
 * */

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Local Components*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    setLink = _ref.setLink,
    setImage = _ref.setImage,
    setVideo = _ref.setVideo,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'img' : _ref$tab;
  if ('lnk' === tab) {
    return /*#__PURE__*/React.createElement(_controlLink.default, {
      label: (0, _i18n.__)('Link', 'atrc-prefix-atrc'),
      value: {
        url: value && value.ppUrl
      },
      onChange: setLink,
      allowTarget: false,
      allowTitle: false
    });
  }
  if ('img' === tab) {
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlImg.default, {
      label: (0, _i18n.__)('Image', 'atrc-prefix-atrc'),
      value: {
        frm: value && value.ppImgFrm,
        id: value && value.ppImgId,
        sz: value && value.ppImgSz,
        url: value && value.ppImgUrl
      },
      allowDimensions: false,
      allowDetails: false,
      onChange: setImage
    }));
  }
  if ('vid' === tab) {
    return /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlVideo.default, {
      label: (0, _i18n.__)('Video', 'atrc-prefix-atrc'),
      value: {
        frm: value && value.ppVidFrm,
        id: value && value.ppVidId,
        url: value && value.ppVidUrl,
        onSettings: value && value.ppVidOnSet,
        loop: value && value.ppVidLoop,
        muted: value && value.ppVidMuted,
        onBgVidMobile: value && value.onBgVidMb
      },
      allowSettings: false,
      onChange: setVideo
    }));
  }
  return null;
};
var AtrcControlPopup = function AtrcControlPopup(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)('Popup options', 'atrc-prefix-atrc') : _props$label,
    _props$help = props.help,
    help = _props$help === void 0 ? '' : _props$help,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowLink = props.allowLink,
    allowLink = _props$allowLink === void 0 ? true : _props$allowLink,
    _props$allowImage = props.allowImage,
    allowImage = _props$allowImage === void 0 ? true : _props$allowImage,
    _props$allowVideo = props.allowVideo,
    allowVideo = _props$allowVideo === void 0 ? true : _props$allowVideo;
  var SelectOptions = [];
  if (allowLink) {
    SelectOptions.push({
      label: (0, _i18n.__)('Link', 'atrc-prefix-atrc'),
      value: 'lnk'
    });
  }
  if (allowImage) {
    SelectOptions.push({
      label: (0, _i18n.__)('Image', 'atrc-prefix-atrc'),
      value: 'img'
    });
  }
  if (allowVideo) {
    SelectOptions.push({
      label: (0, _i18n.__)('Video', 'atrc-prefix-atrc'),
      value: 'vid'
    });
  }
  var setLink = function setLink(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.ppUrl;
    delete valueCloned.ppTarget;
    delete valueCloned.ppTtl;
    delete valueCloned.ppRel;
    valueCloned.ppSrc = 'lnk';
    if (newVal.url) {
      valueCloned.ppUrl = newVal.url;
    }
    if (newVal.target) {
      valueCloned.ppTarget = newVal.target;
    }
    if (newVal.ttl) {
      valueCloned.ppTtl = newVal.ttl;
    }
    if (newVal.rel) {
      valueCloned.ppRel = newVal.rel;
    }
    onChange(valueCloned);
  };
  var setImage = function setImage(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.ppImgFrm;
    delete valueCloned.ppImgId;
    delete valueCloned.ppImgUrl;
    delete valueCloned.ppImgSz;
    valueCloned.ppSrc = 'img';
    if (newVal.frm) {
      valueCloned.ppImgFrm = newVal.frm;
    }
    if (newVal.id) {
      valueCloned.ppImgId = newVal.id;
    }
    if (newVal.url) {
      valueCloned.ppImgUrl = newVal.url;
    }
    if (newVal.size) {
      valueCloned.ppImgSz = newVal.size;
    }
    onChange(valueCloned);
  };
  var setVideo = function setVideo(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.ppVidFrm;
    delete valueCloned.ppVidId;
    delete valueCloned.ppVidUrl;
    valueCloned.ppSrc = 'vid';
    if (newVal.frm) {
      valueCloned.ppVidFrm = newVal.frm;
    }
    if (newVal.id) {
      valueCloned.ppVidId = newVal.id;
    }
    if (newVal.url) {
      valueCloned.ppVidUrl = newVal.url;
    }
    onChange(valueCloned);
  };
  var hasTabValue = function hasTabValue() {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    return !!(value.ppUrl || value.ppTarget || value.ppTtl || value.ppRel || value.ppImgFrm || value.ppImgId || value.ppImgUrl || value.ppImgSz || value.ppVidFrm || value.ppVidId || value.ppVidUrl);
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    if (newVal) {
      valueCloned[type] = newVal;
    } else {
      delete valueCloned[type];
    }
    var resetLink = function resetLink() {
      delete valueCloned.ppUrl;
      delete valueCloned.ppTarget;
      delete valueCloned.ppTtl;
      delete valueCloned.ppRel;
    };
    var resetImage = function resetImage() {
      delete valueCloned.ppImgFrm;
      delete valueCloned.ppImgId;
      delete valueCloned.ppImgUrl;
      delete valueCloned.ppImgSz;
    };
    var resetVideo = function resetVideo() {
      delete valueCloned.ppVidFrm;
      delete valueCloned.ppVidId;
      delete valueCloned.ppVidUrl;
    };
    switch (newVal) {
      case 'lnk':
        resetVideo();
        resetImage();
        break;
      case 'img':
        resetVideo();
        resetLink();
        break;
      case 'vid':
        resetVideo();
        resetImage();
        break;
      default:
        break;
    }
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-pp'), className, variant ? (0, _prefixVars.default)('ctrl-pp') + '-' + variant : ''),
    label: label,
    help: help,
    resetAll: function resetAll() {
      return onChange({});
    },
    allowTabs: true,
    tools: [{
      name: 'pp',
      title: (0, _i18n.__)('Popup', 'atrc-prefix-atrc'),
      hasValue: hasTabValue(),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }]
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (item, iDx) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelRow.default, {
        className: "at-m",
        key: iDx
      }, /*#__PURE__*/React.createElement(_select.default, {
        label: (0, _i18n.__)('Source', 'atrc-prefix-atrc'),
        wrapProps: {
          className: 'at-flx-grw-1'
        },
        value: value && value.ppSrc || 'img',
        options: SelectOptions,
        onChange: function onChange(newVal) {
          return setAttr(newVal, 'ppSrc');
        }
      })), /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: onChange,
        setLink: setLink,
        setImage: setImage,
        setVideo: setVideo,
        tab: value && value.ppSrc,
        key: iDx
      }));
    });
  });
};
var _default = exports.default = AtrcControlPopup;
//# sourceMappingURL=index.js.map