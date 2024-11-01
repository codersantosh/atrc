var _excluded = ["label", "value", "variant", "className", "onChange", "allowSource", "allowSelf", "allowExternal", "allowSettings", "allowAutoplay", "allowLoop", "allowMuted", "allowControls", "allowPreload"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';

/*Attributes Structure
Type Object
{
    frm: '',
    id: 0,
    url: '',
    autoplay: '',
    ctrl: '',
    loop: '',
    muted: '',
    preload: '',
    ctrlLs: '',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useCallback, useEffect, useMemo } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import classnames from 'classnames';
import { BsFillFileMusicFill, BsXCircleFill } from 'react-icons/bs';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcAudio from '../../atoms/audio';
import { AtrcAudioIsHtml5 } from '../../atoms/audio';

/* Controls */
import AtrcControlText from '../control-text';
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcButtonGroup from '../../molecules/button-group';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
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
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setAttrs = function setAttrs(newVals) {
    var valueCloned = cloneDeep(value);
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
  var audio = useSelect(function (select) {
    var _select = select(coreStore),
      getMedia = _select.getMedia;
    return id && '' === frm ? getMedia(id, {
      context: 'view'
    }) : null;
  }, [id, frm]);
  var audioUrl = useMemo(function () {
    if (audio && audio.source_url) {
      return audio.source_url;
    }
    return url;
  }, [audio]);

  /*if new Audio url and old Audio URL is not same, update rl*/
  useEffect(function () {
    if (audioUrl && audioUrl !== url) {
      setAttr(audioUrl, 'url');
    }
  }, [audioUrl]);
  if (frm !== '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-aud-slf-hosted'), 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(AtrcAudio, {
    className: classnames('at-m'),
    url: audioUrl,
    autoplay: false,
    controls: ctrl,
    loop: loop,
    muted: muted,
    preload: preload,
    controlsList: ctrlLs
  }), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: setMedia,
    allowedTypes: ['audio'],
    title: __('Select or upload background media', 'atrc-prefix-atrc'),
    value: id,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement(AtrcButtonGroup, {
        className: "at-flx-grw-1"
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "uploads",
        className: classnames('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
        onClick: open
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "ri",
        icon: BsFillFileMusicFill
      }), id ? __('Replace audio', 'atrc-prefix-atrc') : __('Add audio', 'atrc-prefix-atrc')), id ? /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "uploads",
        className: classnames('at-gap', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-w'),
        onClick: function onClick() {
          return setAttrs({
            id: null,
            url: null
          });
        }
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        className: classnames(AtrcPrefix('mr-5')),
        type: "bi",
        icon: BsXCircleFill
      }), __('Remove media', 'atrc-prefix-atrc')) : null);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Audio URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcAudio, {
    url: url,
    autoplay: autoplay,
    ctrl: ctrl,
    loop: loop,
    muted: muted
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
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetAttr = function resetAttr(type) {
    var valueCloned = cloneDeep(value);
    delete valueCloned[type];
    onChange(valueCloned);
  };
  var autoPlayHelpText = __('Autoplay may cause usability issues for some users.', 'atrc-prefix-atrc');
  var getAutoplayHelp = useCallback(function (checked) {
    return checked ? autoPlayHelpText : null;
  }, []);
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    return !!value[tab];
  };
  var AllTabs = [];
  if (allowAutoplay) {
    AllTabs.push({
      name: 'autoplay',
      title: __('Autoplay', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('autoplay'),
      onDeselect: function onDeselect() {
        return resetAttr('autoplay');
      }
    });
  }
  if (allowLoop) {
    AllTabs.push({
      name: 'loop',
      title: __('Loop', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('loop'),
      onDeselect: function onDeselect() {
        return resetAttr('loop');
      }
    });
  }
  if (allowMuted) {
    AllTabs.push({
      name: 'muted',
      title: __('Muted', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('muted'),
      onDeselect: function onDeselect() {
        return resetAttr('muted');
      }
    });
  }
  if (allowControls) {
    AllTabs.push({
      name: 'ctrl',
      title: __('Controls', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('ctrl'),
      onDeselect: function onDeselect() {
        return resetAttr('ctrl');
      }
    });
  }
  if (allowPreload) {
    AllTabs.push({
      name: 'preload',
      title: __('Preload', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('preload'),
      onDeselect: function onDeselect() {
        return resetAttr('preload');
      }
    });
  }
  if (allowPreload) {
    AllTabs.push({
      name: 'ctrlLs',
      title: __('Controlslist', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('ctrlLs'),
      onDeselect: function onDeselect() {
        return resetAttr('ctrlLs');
      }
    });
  }
  if (!allowAutoplay && !allowLoop && !allowMuted && !allowControls && !allowPreload) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Settings', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('autoplay' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Autoplay', 'atrc-prefix-atrc'),
          checked: autoplay,
          onChange: function onChange() {
            return setAttr(!autoplay, 'autoplay');
          },
          help: getAutoplayHelp
        }));
      }
      if ('loop' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Loop', 'atrc-prefix-atrc'),
          checked: loop,
          onChange: function onChange() {
            return setAttr(!loop, 'loop');
          }
        }));
      }
      if ('muted' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Muted', 'atrc-prefix-atrc'),
          checked: muted,
          onChange: function onChange() {
            return setAttr(!muted, 'muted');
          }
        }));
      }
      if ('ctrl' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Playback ctrl', 'atrc-prefix-atrc'),
          checked: ctrl,
          onChange: function onChange() {
            return setAttr(!ctrl, 'ctrl');
          }
        }));
      }
      if ('preload' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
          label: __('Preload', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: preload,
          options: [{
            label: __('Auto', 'atrc-prefix-atrc'),
            value: 'auto'
          }, {
            label: __('Metadata', 'atrc-prefix-atrc'),
            value: 'metadata'
          }, {
            label: __('None', 'atrc-prefix-atrc'),
            value: 'none'
          }],
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'preload');
          }
        }));
      }
      if ('ctrlLs' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
          label: __('Controlslist', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: ctrlLs,
          multiValType: "string",
          options: [{
            label: __('nodownload', 'atrc-prefix-atrc'),
            value: 'nodownload'
          }, {
            label: __('nofullscreen', 'atrc-prefix-atrc'),
            value: 'nofullscreen'
          }, {
            label: __('noremoteplayback', 'atrc-prefix-atrc'),
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
    label = _props$label === void 0 ? __('Audio', 'atrc-prefix-atrc') : _props$label,
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
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setAudioUrl = function setAudioUrl(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.id;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  var isSettingOn = function isSettingOn() {
    if (!value.url) {
      return false;
    }
    if (!AtrcAudioIsHtml5(value.url)) {
      return false;
    }
    if (allowSettings) {
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-aud'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-aud') + '-' + variant : '')
  }, defaultProps), label && /*#__PURE__*/React.createElement(AtrcLabel, null, label), allowSource && /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Audio source', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: frm,
    options: [{
      label: __('Self hosted', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('URL', 'atrc-prefix-atrc'),
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
export default AtrcControlAudio;
//# sourceMappingURL=index.js.map