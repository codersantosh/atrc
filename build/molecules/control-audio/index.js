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
var _label = _interopRequireDefault(require("../../atoms/label"));
var _select2 = _interopRequireDefault(require("../../atoms/select"));
var _text = _interopRequireDefault(require("../../atoms/text"));
var _toggle = _interopRequireDefault(require("../../atoms/toggle"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _audio = _interopRequireWildcard(require("../../atoms/audio"));
var _buttonGroup = _interopRequireDefault(require("./../button-group"));
var _panelRow = _interopRequireDefault(require("./../panel-row"));
var _panelTools = _interopRequireDefault(require("./../panel-tools"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "value", "variant", "className", "onChange", "allowSource", "allowSelf", "allowExternal", "allowSettings", "allowAutoplay", "allowLoop", "allowMuted", "allowControls", "allowPreload"];
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
    autoplay ='',
    ctrl ='',
    loop ='',
    muted ='',
    preload =''
    ctrlLs =''
}
* */ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt*/
/*Local Components*/
var SelfHostedAudio = function SelfHostedAudio(props) {
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
    _value$ctrlLs = value.ctrlLs,
    ctrlLs = _value$ctrlLs === void 0 ? '' : _value$ctrlLs;
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
  var audio = (0, _data.useSelect)(function (select) {
    var _select = select(_coreData.store),
      getMedia = _select.getMedia;
    return id && '' === frm ? getMedia(id, {
      context: 'view'
    }) : null;
  }, [id, frm]);
  var audioUrl = (0, _element.useMemo)(function () {
    if (audio && audio.source_url) {
      return audio.source_url;
    }
    return url;
  }, [audio]);

  /*if new Audio url and old Audio URL is not same, update rl*/
  (0, _element.useEffect)(function () {
    if (audioUrl && audioUrl !== url) {
      setAttr(audioUrl, 'url');
    }
  }, [audioUrl]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_blockEditor.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-aud-slf-hosted'), 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(_audio.default, {
    className: (0, _classnames.default)('at-m'),
    url: audioUrl,
    autoplay: false,
    controls: ctrl,
    loop: loop,
    muted: muted,
    preload: preload,
    controlsList: ctrlLs
  }), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_blockEditor.MediaUpload, {
    onSelect: setMedia,
    allowedTypes: ['audio'],
    title: (0, _i18n.__)('Select or upload background media', 'atrc-prefix-atrc'),
    value: id,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement(_buttonGroup.default, {
        className: "at-flx-grw-1"
      }, /*#__PURE__*/React.createElement(_button.default, {
        variant: "uploads",
        className: (0, _classnames.default)('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
        onClick: open
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "ri",
        icon: _bs.BsFillFileMusicFill
      }), id ? (0, _i18n.__)('Replace audio', 'atrc-prefix-atrc') : (0, _i18n.__)('Add audio', 'atrc-prefix-atrc')), id ? /*#__PURE__*/React.createElement(_button.default, {
        variant: "uploads",
        className: (0, _classnames.default)('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
        onClick: function onClick() {
          return setAttrs({
            id: null,
            url: null
          });
        }
      }, /*#__PURE__*/React.createElement(_icon.default, {
        className: (0, _classnames.default)((0, _prefixVars.default)('mr-5')),
        type: "bi",
        icon: _bs.BsXCircleFill
      }), (0, _i18n.__)('Remove media', 'atrc-prefix-atrc')) : null);
    }
  })))));
};
var ExternalAudio = function ExternalAudio(props) {
  var _props$value2 = props.value,
    value = _props$value2 === void 0 ? {} : _props$value2,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2;
  var _value$frm2 = value.frm,
    frm = _value$frm2 === void 0 ? '' : _value$frm2,
    _value$url2 = value.url,
    url = _value$url2 === void 0 ? '' : _value$url2,
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
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-aud-ext'))
  }, /*#__PURE__*/React.createElement(_audio.default, {
    url: url,
    autoplay: autoplay,
    ctrl: ctrl,
    loop: loop,
    muted: muted
  }), /*#__PURE__*/React.createElement(_text.default, {
    label: (0, _i18n.__)('Audio URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  })));
};
var AudioSettings = function AudioSettings(props) {
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
    _props$allowPreload = props.allowPreload,
    allowPreload = _props$allowPreload === void 0 ? true : _props$allowPreload;
  var _value$autoplay3 = value.autoplay,
    autoplay = _value$autoplay3 === void 0 ? false : _value$autoplay3,
    _value$ctrl3 = value.ctrl,
    ctrl = _value$ctrl3 === void 0 ? false : _value$ctrl3,
    _value$loop3 = value.loop,
    loop = _value$loop3 === void 0 ? false : _value$loop3,
    _value$muted3 = value.muted,
    muted = _value$muted3 === void 0 ? false : _value$muted3,
    _value$preload2 = value.preload,
    preload = _value$preload2 === void 0 ? 'auto' : _value$preload2,
    _value$ctrlLs2 = value.ctrlLs,
    ctrlLs = _value$ctrlLs2 === void 0 ? '' : _value$ctrlLs2;
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
    if (allowPreload) {
      tabs.push({
        name: 'ctrlLs',
        title: (0, _i18n.__)('Controlslist', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('ctrlLs'),
        onDeselect: function onDeselect() {
          return resetAttr('ctrlLs');
        }
      });
    }
    return tabs;
  }, []);
  if (!allowAutoplay && !allowLoop && !allowMuted && !allowControls && !allowPreload) {
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
          label: (0, _i18n.__)('Playback ctrl', 'atrc-prefix-atrc'),
          checked: ctrl,
          onChange: function onChange() {
            return setAttr(!ctrl, 'ctrl');
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
      if ('ctrlLs' === tab) {
        return /*#__PURE__*/React.createElement(_panelRow.default, {
          className: (0, _classnames.default)('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(_select2.default, {
          label: (0, _i18n.__)('Controlslist', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: ctrlLs,
          multiValType: "string",
          options: [{
            label: (0, _i18n.__)('nodownload', 'atrc-prefix-atrc'),
            value: 'nodownload'
          }, {
            label: (0, _i18n.__)('nofullscreen', 'atrc-prefix-atrc'),
            value: 'nofullscreen'
          }, {
            label: (0, _i18n.__)('noremoteplayback', 'atrc-prefix-atrc'),
            value: 'noremoteplayback'
          }],
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'ctrlLs');
          },
          isMulti: true
        }));
      }
      return null;
    });
  });
};
var AtrcControlAudio = function AtrcControlAudio(props) {
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
    _props$allowPreload2 = props.allowPreload,
    allowPreload = _props$allowPreload2 === void 0 ? true : _props$allowPreload2,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$frm3 = value.frm,
    frm = _value$frm3 === void 0 ? '' : _value$frm3;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setAudioUrl = function setAudioUrl(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.id;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  var isSettingOn = function isSettingOn() {
    if (!value.url) {
      return false;
    }
    if (!(0, _audio.AtrcAudioIsHtml5)(value.url)) {
      return false;
    }
    if (allowSettings) {
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-aud'), 'at-flx-grw-1', className, variant ? (0, _prefixVars.default)('ctrl-aud') + '-' + variant : '')
  }, defaultProps), label && /*#__PURE__*/React.createElement(_label.default, null, label), allowSource && /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select2.default, {
    label: (0, _i18n.__)('Audio source', 'atrc-prefix-atrc'),
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
  })), allowSelf && /*#__PURE__*/React.createElement(SelfHostedAudio, {
    value: value,
    onChange: onChange
  }), allowExternal && /*#__PURE__*/React.createElement(ExternalAudio, {
    value: value,
    onChange: setAudioUrl
  }), isSettingOn() ? /*#__PURE__*/React.createElement(AudioSettings, {
    value: value,
    onChange: onChange,
    allowAutoplay: allowAutoplay,
    allowLoop: allowLoop,
    allowMuted: allowMuted,
    allowControls: allowControls,
    allowPreload: allowPreload
  }) : null);
};
var _default = exports.default = AtrcControlAudio;
//# sourceMappingURL=index.js.map