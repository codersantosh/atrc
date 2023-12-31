"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _blockEditor = require("@wordpress/block-editor");
var _data = require("@wordpress/data");
var _coreData = require("@wordpress/core-data");
var _classnames = _interopRequireDefault(require("classnames"));
var _bs = require("react-icons/bs");
var _lodash = require("lodash");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _select2 = _interopRequireDefault(require("../../atoms/select"));
var _text = _interopRequireDefault(require("../../atoms/text"));
var _toggle = _interopRequireDefault(require("../../atoms/toggle"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _video = _interopRequireWildcard(require("../../atoms/video"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _controlImg = _interopRequireDefault(require("../control-img"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "value", "variant", "className", "onChange", "allowSource", "allowSelf", "allowExternal", "allowSettings", "allowAutoplay", "allowLoop", "allowMuted", "allowControls", "allowPlaysInline", "allowPreload", "allowPoster", "allowMobile"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*Attributes Structure
Type Object
{
    frm = '',
    id = 0,
    url ='',
    onSettings = false,
    autoplay ='',
    ctrl ='',
    loop ='',
    muted ='',
    playsInline ='',
    preload ='',
    psrFrm ='',
    psrId ='',
    psrSz ='',
    psrUrl ='',
}
* */ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt*/
/*Local Components*/
var SelfHostedVideo = function SelfHostedVideo(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$frm = value.frm,
    frm = _value$frm === void 0 ? '' : _value$frm,
    _value$id = value.id,
    id = _value$id === void 0 ? null : _value$id,
    _value$url = value.url,
    url = _value$url === void 0 ? '' : _value$url,
    _value$autoplay = value.autoplay,
    autoplay = _value$autoplay === void 0 ? false : _value$autoplay,
    _value$ctrl = value.ctrl,
    ctrl = _value$ctrl === void 0 ? false : _value$ctrl,
    _value$loop = value.loop,
    loop = _value$loop === void 0 ? false : _value$loop,
    _value$muted = value.muted,
    muted = _value$muted === void 0 ? false : _value$muted,
    _value$preload = value.preload,
    preload = _value$preload === void 0 ? 'auto' : _value$preload,
    _value$psrUrl = value.psrUrl,
    psrUrl = _value$psrUrl === void 0 ? '' : _value$psrUrl;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setAttrs = function setAttrs(newVals) {
    var valueCloned = Object.assign({}, value);
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVals);
    onChange(valueCloned);
  };
  var setMedia = function setMedia(media) {
    if (!media || !media.id) {
      return;
    }
    var newVals = {
      id: media.id
    };
    newVals.url = media.url;
    setAttrs(newVals);
  };
  var video = (0, _data.useSelect)(function (select) {
    var _select = select(_coreData.store),
      getMedia = _select.getMedia;
    return id && '' === frm ? getMedia(id, {
      context: 'view'
    }) : null;
  }, [id, frm]);
  var videoUrl = (0, _element.useMemo)(function () {
    if (video && video.source_url) {
      return video.source_url;
    }
    return url;
  }, [video]);

  /*if new image url and old image URL is not same, update rl*/
  (0, _element.useEffect)(function () {
    if (videoUrl && videoUrl !== url) {
      setAttr(videoUrl, 'url');
    }
  }, [videoUrl]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_blockEditor.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-vid-slf-hosted'), 'at-pos', 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(_video.default, {
    url: videoUrl,
    autoplay: autoplay,
    controls: ctrl,
    loop: loop,
    muted: muted,
    preload: preload,
    poster: psrUrl
  }), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_blockEditor.MediaUpload, {
    onSelect: setMedia,
    allowedTypes: ['video'],
    title: (0, _i18n.__)('Select or upload background media', 'atrc-prefix-atrc'),
    value: id,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_button.default, {
        variant: "uploads",
        className: (0, _classnames.default)('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
        onClick: open
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsCameraVideo
      }), id ? (0, _i18n.__)('Replace video', 'atrc-prefix-atrc') : (0, _i18n.__)('Add video', 'atrc-prefix-atrc')), id ? /*#__PURE__*/React.createElement(_tooltip.default, {
        className: (0, _classnames.default)((0, _prefixVars.default)('uploads-del'), 'at-pos'),
        text: (0, _i18n.__)('Remove media', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_button.default, {
        className: (0, _classnames.default)('at-bdr-rad', 'at-flx', 'at-w', 'at-h', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
        variant: "delete",
        onClick: function onClick() {
          return setAttrs({
            id: null,
            url: null
          });
        }
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsTrash
      }))) : null);
    }
  })))));
};
var ExternalVideo = function ExternalVideo(props) {
  var _props$value2 = props.value,
    value = _props$value2 === void 0 ? {} : _props$value2,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2;
  var _value$frm2 = value.frm,
    frm = _value$frm2 === void 0 ? '' : _value$frm2,
    _value$url2 = value.url,
    url = _value$url2 === void 0 ? '' : _value$url2,
    _value$onSettings = value.onSettings,
    onSettings = _value$onSettings === void 0 ? false : _value$onSettings,
    _value$autoplay2 = value.autoplay,
    autoplay = _value$autoplay2 === void 0 ? false : _value$autoplay2,
    _value$ctrl2 = value.ctrl,
    ctrl = _value$ctrl2 === void 0 ? false : _value$ctrl2,
    _value$loop2 = value.loop,
    loop = _value$loop2 === void 0 ? false : _value$loop2,
    _value$muted2 = value.muted,
    muted = _value$muted2 === void 0 ? muted : _value$muted2;
  if (frm === '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-vid-ext'))
  }, /*#__PURE__*/React.createElement(_video.default, {
    className: "at-m",
    url: url,
    onSettings: onSettings,
    autoplay: autoplay,
    controls: ctrl,
    loop: loop,
    muted: muted
  }), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_text.default, {
    label: (0, _i18n.__)('Video URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  })));
};
var VideoSettings = function VideoSettings(props) {
  var _props$value3 = props.value,
    value = _props$value3 === void 0 ? {} : _props$value3,
    _props$onChange3 = props.onChange,
    onChange = _props$onChange3 === void 0 ? function () {} : _props$onChange3,
    _props$allowAutoplay = props.allowAutoplay,
    allowAutoplay = _props$allowAutoplay === void 0 ? true : _props$allowAutoplay,
    _props$allowLoop = props.allowLoop,
    allowLoop = _props$allowLoop === void 0 ? true : _props$allowLoop,
    _props$allowMuted = props.allowMuted,
    allowMuted = _props$allowMuted === void 0 ? true : _props$allowMuted,
    _props$allowControls = props.allowControls,
    allowControls = _props$allowControls === void 0 ? true : _props$allowControls,
    _props$allowPlaysInli = props.allowPlaysInline,
    allowPlaysInline = _props$allowPlaysInli === void 0 ? true : _props$allowPlaysInli,
    _props$allowPreload = props.allowPreload,
    allowPreload = _props$allowPreload === void 0 ? true : _props$allowPreload,
    _props$allowPoster = props.allowPoster,
    allowPoster = _props$allowPoster === void 0 ? true : _props$allowPoster,
    _props$allowMobile = props.allowMobile,
    allowMobile = _props$allowMobile === void 0 ? false : _props$allowMobile;
  var _value$autoplay3 = value.autoplay,
    autoplay = _value$autoplay3 === void 0 ? false : _value$autoplay3,
    _value$ctrl3 = value.ctrl,
    ctrl = _value$ctrl3 === void 0 ? false : _value$ctrl3,
    _value$loop3 = value.loop,
    loop = _value$loop3 === void 0 ? false : _value$loop3,
    _value$muted3 = value.muted,
    muted = _value$muted3 === void 0 ? false : _value$muted3,
    _value$playsInline = value.playsInline,
    playsInline = _value$playsInline === void 0 ? false : _value$playsInline,
    _value$preload2 = value.preload,
    preload = _value$preload2 === void 0 ? 'auto' : _value$preload2,
    _value$psrFrm = value.psrFrm,
    psrFrm = _value$psrFrm === void 0 ? '' : _value$psrFrm,
    _value$psrId = value.psrId,
    psrId = _value$psrId === void 0 ? '' : _value$psrId,
    _value$psrSz = value.psrSz,
    psrSz = _value$psrSz === void 0 ? '' : _value$psrSz,
    _value$psrUrl2 = value.psrUrl,
    psrUrl = _value$psrUrl2 === void 0 ? '' : _value$psrUrl2,
    _value$onBgVidMb = value.onBgVidMb,
    onBgVidMb = _value$onBgVidMb === void 0 ? false : _value$onBgVidMb;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetAttr = function resetAttr(type) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned[type];
    onChange(valueCloned);
  };
  var setPoster = function setPoster(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.psrFrm;
    delete valueCloned.psrId;
    delete valueCloned.psrUrl;
    delete valueCloned.psrSz;
    if (newVal.frm) {
      valueCloned.psrFrm = newVal.frm;
    }
    if (newVal.id) {
      valueCloned.psrId = newVal.id;
    }
    if (newVal.url) {
      valueCloned.psrUrl = newVal.url;
    }
    if (newVal.size) {
      valueCloned.psrSz = newVal.size;
    }
    onChange(valueCloned);
  };
  var resetPoster = function resetPoster() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.psrFrm;
    delete valueCloned.psrId;
    delete valueCloned.psrUrl;
    delete valueCloned.psrSz;
    onChange(valueCloned);
  };
  var autoPlayHelpText = (0, _i18n.__)('Autoplay may cause usability issues for some users.', 'atrc-prefix-atrc');
  var getAutoplayHelp = (0, _element.useCallback)(function (checked) {
    return checked ? autoPlayHelpText : null;
  }, []);
  var hasTabValue = function hasTabValue(tab) {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    return !!value[tab];
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [];
    if (allowAutoplay) {
      tabs.push({
        name: 'autoplay',
        title: (0, _i18n.__)('Autoplay', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('autoplay'),
        onDeselect: function onDeselect() {
          return resetAttr('autoplay');
        }
      });
    }
    if (allowLoop) {
      tabs.push({
        name: 'loop',
        title: (0, _i18n.__)('Loop', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('loop'),
        onDeselect: function onDeselect() {
          return resetAttr('loop');
        }
      });
    }
    if (allowMuted) {
      tabs.push({
        name: 'muted',
        title: (0, _i18n.__)('Muted', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('muted'),
        onDeselect: function onDeselect() {
          return resetAttr('muted');
        }
      });
    }
    if (allowControls) {
      tabs.push({
        name: 'ctrl',
        title: (0, _i18n.__)('Controls', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('ctrl'),
        onDeselect: function onDeselect() {
          return resetAttr('ctrl');
        }
      });
    }
    if (allowPlaysInline) {
      tabs.push({
        name: 'playsInline',
        title: (0, _i18n.__)('Play inline', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('playsInline'),
        onDeselect: function onDeselect() {
          return resetAttr('playsInline');
        }
      });
    }
    if (allowPreload) {
      tabs.push({
        name: 'preload',
        title: (0, _i18n.__)('Preload', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('preload'),
        onDeselect: function onDeselect() {
          return resetAttr('preload');
        }
      });
    }
    if (allowPoster) {
      tabs.push({
        name: 'psr',
        title: (0, _i18n.__)('Poster', 'atrc-prefix-atrc'),
        hasValue: !!(psrFrm || psrId || psrSz || psrUrl),
        onDeselect: function onDeselect() {
          return resetPoster();
        }
      });
    }
    if (allowMobile) {
      tabs.push({
        name: 'onBgVidMb',
        title: (0, _i18n.__)('Video on mobile', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('onBgVidMb'),
        onDeselect: function onDeselect() {
          return resetAttr('onBgVidMb');
        }
      });
    }
    return tabs;
  }, []);
  if (!allowAutoplay && !allowLoop && !allowMuted && !allowControls && !allowPlaysInline && !allowPreload && !allowPoster && !allowMobile) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    label: (0, _i18n.__)('Settings', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      if ('autoplay' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Autoplay', 'atrc-prefix-atrc'),
          checked: autoplay,
          onChange: function onChange() {
            return setAttr(!autoplay, 'autoplay');
          },
          help: getAutoplayHelp
        }));
      }
      if ('loop' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Loop', 'atrc-prefix-atrc'),
          checked: loop,
          onChange: function onChange() {
            return setAttr(!loop, 'loop');
          }
        }));
      }
      if ('muted' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Muted', 'atrc-prefix-atrc'),
          checked: muted,
          onChange: function onChange() {
            return setAttr(!muted, 'muted');
          }
        }));
      }
      if ('ctrl' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Playback controls', 'atrc-prefix-atrc'),
          checked: ctrl,
          onChange: function onChange() {
            return setAttr(!ctrl, 'ctrl');
          }
        }));
      }
      if ('playsInline' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Play inline', 'atrc-prefix-atrc'),
          checked: playsInline,
          onChange: function onChange() {
            return setAttr(!playsInline, 'playsInline');
          }
        }));
      }
      if ('preload' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_select2.default, {
          label: (0, _i18n.__)('Preload', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: preload,
          options: [{
            label: (0, _i18n.__)('Auto', 'atrc-prefix-atrc'),
            value: 'auto'
          }, {
            label: (0, _i18n.__)('Metadata', 'atrc-prefix-atrc'),
            value: 'metadata'
          }, {
            label: (0, _i18n.__)('None', 'atrc-prefix-atrc'),
            value: 'none'
          }],
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'preload');
          }
        }));
      }
      if ('psr' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_controlImg.default, {
          label: (0, _i18n.__)('Poster', 'atrc-prefix-atrc'),
          value: {
            frm: psrFrm,
            id: psrId,
            sz: psrSz,
            url: psrUrl
          },
          allowDetails: false,
          onChange: setPoster
        }));
      }
      if ('onBgVidMb' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Enable video on mobile', 'atrc-prefix-atrc'),
          checked: onBgVidMb,
          onChange: function onChange() {
            return setAttr(!onBgVidMb, 'onBgVidMb');
          }
        }));
      }
      return null;
    });
  });
};
var AtrcControlVideo = function AtrcControlVideo(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value4 = props.value,
    value = _props$value4 === void 0 ? {} : _props$value4,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange4 = props.onChange,
    onChange = _props$onChange4 === void 0 ? function () {} : _props$onChange4,
    _props$allowSource = props.allowSource,
    allowSource = _props$allowSource === void 0 ? true : _props$allowSource,
    _props$allowSelf = props.allowSelf,
    allowSelf = _props$allowSelf === void 0 ? true : _props$allowSelf,
    _props$allowExternal = props.allowExternal,
    allowExternal = _props$allowExternal === void 0 ? true : _props$allowExternal,
    _props$allowSettings = props.allowSettings,
    allowSettings = _props$allowSettings === void 0 ? true : _props$allowSettings,
    _props$allowAutoplay2 = props.allowAutoplay,
    allowAutoplay = _props$allowAutoplay2 === void 0 ? true : _props$allowAutoplay2,
    _props$allowLoop2 = props.allowLoop,
    allowLoop = _props$allowLoop2 === void 0 ? true : _props$allowLoop2,
    _props$allowMuted2 = props.allowMuted,
    allowMuted = _props$allowMuted2 === void 0 ? true : _props$allowMuted2,
    _props$allowControls2 = props.allowControls,
    allowControls = _props$allowControls2 === void 0 ? true : _props$allowControls2,
    _props$allowPlaysInli2 = props.allowPlaysInline,
    allowPlaysInline = _props$allowPlaysInli2 === void 0 ? true : _props$allowPlaysInli2,
    _props$allowPreload2 = props.allowPreload,
    allowPreload = _props$allowPreload2 === void 0 ? true : _props$allowPreload2,
    _props$allowPoster2 = props.allowPoster,
    allowPoster = _props$allowPoster2 === void 0 ? true : _props$allowPoster2,
    _props$allowMobile2 = props.allowMobile,
    allowMobile = _props$allowMobile2 === void 0 ? true : _props$allowMobile2,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$frm3 = value.frm,
    frm = _value$frm3 === void 0 ? '' : _value$frm3,
    _value$onSettings2 = value.onSettings,
    onSettings = _value$onSettings2 === void 0 ? false : _value$onSettings2;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setVideoUrl = function setVideoUrl(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.id;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  (0, _element.useEffect)(function () {
    if ('external' !== frm && 'onSettings' in value) {
      var valueCloned = Object.assign({}, value);
      delete value.onSettings;
      onChange(valueCloned);
    }
  }, [frm]);
  var isSettingOn = function isSettingOn() {
    if (!value.url) {
      return false;
    }
    if (!((0, _video.AtrcVideoIsHtml5)(value.url) || (0, _video.AtrcVideoIsYoutube)(value.url) || (0, _video.AtrcVideoIsVimeo)(value.url))) {
      return false;
    }
    if ('external' === frm) {
      return onSettings && allowSettings;
    } else if (allowSettings) {
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-vid'), 'at-flx-grw-1', className, variant ? (0, _prefixVars.default)('ctrl-vid') + '-' + variant : '')
  }, defaultProps), allowSource && /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select2.default, {
    label: (0, _i18n.__)('Video source', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: frm,
    options: [{
      label: (0, _i18n.__)('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: (0, _i18n.__)('URL', 'atrc-prefix-atrc'),
      value: 'external'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'frm');
    }
  })), allowSelf && /*#__PURE__*/React.createElement(SelfHostedVideo, {
    value: value,
    onChange: onChange
  }), allowExternal && /*#__PURE__*/React.createElement(ExternalVideo, {
    value: value,
    onChange: setVideoUrl
  }), 'external' === frm && allowSettings ? /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_toggle.default, {
    label: (0, _i18n.__)('Enable video settings', 'atrc-prefix-atrc'),
    help: (0, _i18n.__)('Enabling this setting will disable all video settings from the provided URL but will apply the defined settings.', 'atrc-prefix-atrc'),
    checked: onSettings,
    onChange: function onChange() {
      return setAttr(!onSettings, 'onSettings');
    }
  })) : null, isSettingOn() ? /*#__PURE__*/React.createElement(VideoSettings, {
    value: value,
    onChange: onChange,
    allowAutoplay: allowAutoplay,
    allowLoop: allowLoop,
    allowMuted: allowMuted,
    allowControls: allowControls,
    allowPlaysInline: allowPlaysInline,
    allowPreload: allowPreload,
    allowPoster: allowPoster,
    allowMobile: allowMobile
  }) : null);
};
var _default = exports.default = AtrcControlVideo;
//# sourceMappingURL=index.js.map