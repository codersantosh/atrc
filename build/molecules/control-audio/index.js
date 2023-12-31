function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
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
import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import AtrcToggle from '../../atoms/toggle';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcAudio from '../../atoms/audio';
import { AtrcAudioIsHtml5 } from '../../atoms/audio';
import AtrcButtonGroup from './../button-group';
import AtrcPanelRow from './../panel-row';
import AtrcPanelTools from './../panel-tools';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const SelfHostedAudio = props => {
  const {
    value = {},
    onChange = () => {}
  } = props;
  const {
    frm = '',
    id = null,
    url = '',
    autoplay = false,
    ctrl = false,
    loop = false,
    muted = false,
    preload = 'auto',
    ctrlLs = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const setAttrs = newVals => {
    let valueCloned = Object.assign({}, value);
    valueCloned = {
      ...valueCloned,
      ...newVals
    };
    onChange(valueCloned);
  };
  const setMedia = media => {
    if (!media || !media.id) {
      return;
    }
    const newVals = {
      id: media.id
    };
    newVals.url = media.url;
    setAttrs(newVals);
  };
  const audio = useSelect(select => {
    const {
      getMedia
    } = select(coreStore);
    return id && '' === frm ? getMedia(id, {
      context: 'view'
    }) : null;
  }, [id, frm]);
  const audioUrl = useMemo(() => {
    if (audio && audio.source_url) {
      return audio.source_url;
    }
    return url;
  }, [audio]);

  /*if new Audio url and old Audio URL is not same, update rl*/
  useEffect(() => {
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
    render: ({
      open
    }) => /*#__PURE__*/React.createElement(AtrcButtonGroup, {
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
      onClick: () => setAttrs({
        id: null,
        url: null
      })
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      className: classnames(AtrcPrefix('mr-5')),
      type: "bi",
      icon: BsXCircleFill
    }), __('Remove media', 'atrc-prefix-atrc')) : null)
  })))));
};
const ExternalAudio = props => {
  const {
    value = {},
    onChange = () => {}
  } = props;
  const {
    frm = '',
    url = '',
    autoplay = false,
    ctrl = false,
    loop = false,
    muted = muted
  } = value;
  if (frm === '') {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-aud-ext'))
  }, /*#__PURE__*/React.createElement(AtrcAudio, {
    url: url,
    autoplay: autoplay,
    ctrl: ctrl,
    loop: loop,
    muted: muted
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Audio URL', 'atrc-prefix-atrc'),
    value: url,
    type: "url",
    onChange: onChange
  })));
};
const AudioSettings = props => {
  const {
    value = {},
    onChange = () => {},
    allowAutoplay = true,
    allowLoop = true,
    allowMuted = true,
    allowControls = true,
    allowPreload = true
  } = props;
  const {
    autoplay = false,
    ctrl = false,
    loop = false,
    muted = false,
    preload = 'auto',
    ctrlLs = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const resetAttr = type => {
    const valueCloned = Object.assign({}, value);
    delete valueCloned[type];
    onChange(valueCloned);
  };
  const autoPlayHelpText = __('Autoplay may cause usability issues for some users.', 'atrc-prefix-atrc');
  const getAutoplayHelp = useCallback(checked => {
    return checked ? autoPlayHelpText : null;
  }, []);
  const hasTabValue = tab => {
    if (!value || isEmpty(value)) {
      return false;
    }
    return !!value[tab];
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowAutoplay) {
      tabs.push({
        name: 'autoplay',
        title: __('Autoplay', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('autoplay'),
        onDeselect: () => resetAttr('autoplay')
      });
    }
    if (allowLoop) {
      tabs.push({
        name: 'loop',
        title: __('Loop', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('loop'),
        onDeselect: () => resetAttr('loop')
      });
    }
    if (allowMuted) {
      tabs.push({
        name: 'muted',
        title: __('Muted', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('muted'),
        onDeselect: () => resetAttr('muted')
      });
    }
    if (allowControls) {
      tabs.push({
        name: 'ctrl',
        title: __('Controls', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('ctrl'),
        onDeselect: () => resetAttr('ctrl')
      });
    }
    if (allowPreload) {
      tabs.push({
        name: 'preload',
        title: __('Preload', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('preload'),
        onDeselect: () => resetAttr('preload')
      });
    }
    if (allowPreload) {
      tabs.push({
        name: 'ctrlLs',
        title: __('Controlslist', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('ctrlLs'),
        onDeselect: () => resetAttr('ctrlLs')
      });
    }
    return tabs;
  }, []);
  if (!allowAutoplay && !allowLoop && !allowMuted && !allowControls && !allowPreload) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Settings', 'atrc-prefix-atrc'),
    resetAll: () => onChange({}),
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => {
    if ('autoplay' === tab) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Autoplay', 'atrc-prefix-atrc'),
        checked: autoplay,
        onChange: () => setAttr(!autoplay, 'autoplay'),
        help: getAutoplayHelp
      }));
    }
    if ('loop' === tab) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Loop', 'atrc-prefix-atrc'),
        checked: loop,
        onChange: () => setAttr(!loop, 'loop')
      }));
    }
    if ('muted' === tab) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Muted', 'atrc-prefix-atrc'),
        checked: muted,
        onChange: () => setAttr(!muted, 'muted')
      }));
    }
    if ('ctrl' === tab) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Playback ctrl', 'atrc-prefix-atrc'),
        checked: ctrl,
        onChange: () => setAttr(!ctrl, 'ctrl')
      }));
    }
    if ('preload' === tab) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcSelect, {
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
        onChange: newVal => setAttr(newVal, 'preload')
      }));
    }
    if ('ctrlLs' === tab) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcSelect, {
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
        onChange: newVal => setAttr(newVal, 'ctrlLs'),
        isMulti: true
      }));
    }
    return null;
  }));
};
const AtrcControlAudio = props => {
  const {
    label = '',
    value = {},
    variant = '',
    className = '',
    onChange = () => {},
    allowSource = true,
    allowSelf = true,
    allowExternal = true,
    allowSettings = true,
    allowAutoplay = true,
    allowLoop = true,
    allowMuted = true,
    allowControls = true,
    allowPreload = true,
    ...defaultProps
  } = props;
  const {
    frm = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const setAudioUrl = newVal => {
    const valueCloned = Object.assign({}, value);
    delete valueCloned.id;
    delete valueCloned.url;
    valueCloned.url = newVal;
    onChange(valueCloned);
  };
  const isSettingOn = () => {
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
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
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
    onChange: newVal => setAttr(newVal, 'frm')
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