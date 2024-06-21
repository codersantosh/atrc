import React from 'react';

/*Attributes Structure
Type Object
{
ppSrc: '',

======Link==========
ppUrl: '',
ppTarget: '',
ppTtl: '',
ppRel: '',
====== Image==========
"ppImgFrm":"",
"ppImgId":"",
"ppImgUrl":"",
"ppImgSz":"",

====== Video==========

ppVidFrm: '',
ppVidId: '',
ppVidUrl: '',
ppVidOnSet: '',
ppVidLoop: '',
ppVidMuted: '',
onBgVidMb: '',
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlImg from '../control-img';
import AtrcControlVideo from '../control-video';
import AtrcControlLink from '../control-link';
import AtrcControlSelect from '../control-select';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    setLink = _ref.setLink,
    setImage = _ref.setImage,
    setVideo = _ref.setVideo,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'img' : _ref$tab;
  if ('lnk' === tab) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlLink, {
      className: classnames('at-flx-grw-1'),
      value: {
        url: value && value.ppUrl
      },
      onChange: setLink,
      allowTarget: false,
      allowTitle: false
    }));
  }
  if ('img' === tab) {
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlImg, {
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
    return /*#__PURE__*/React.createElement(AtrcPanelRow, {
      className: classnames('at-m')
    }, /*#__PURE__*/React.createElement(AtrcControlVideo, {
      label: __('Video', 'atrc-prefix-atrc'),
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
    label = _props$label === void 0 ? __('Popup options', 'atrc-prefix-atrc') : _props$label,
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
  var SelectOptions = [{
    label: __('Select', 'atrc-prefix-atrc'),
    value: ''
  }];
  if (allowLink) {
    SelectOptions.push({
      label: __('Link', 'atrc-prefix-atrc'),
      value: 'lnk'
    });
  }
  if (allowImage) {
    SelectOptions.push({
      label: __('Image', 'atrc-prefix-atrc'),
      value: 'img'
    });
  }
  if (allowVideo) {
    SelectOptions.push({
      label: __('Video', 'atrc-prefix-atrc'),
      value: 'vid'
    });
  }
  var setLink = function setLink(newVal) {
    var valueCloned = cloneDeep(value);
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
    var valueCloned = cloneDeep(value);
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
    var valueCloned = cloneDeep(value);
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
    if (!value || isEmpty(value)) {
      return false;
    }
    return !!(value.ppUrl || value.ppTarget || value.ppTtl || value.ppRel || value.ppImgFrm || value.ppImgId || value.ppImgUrl || value.ppImgSz || value.ppVidFrm || value.ppVidId || value.ppVidUrl);
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
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
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-pp'), className, variant ? AtrcPrefix('ctrl-pp') + '-' + variant : ''),
    label: label,
    help: help,
    resetAll: function resetAll() {
      return onChange({});
    },
    allowTabs: true,
    tools: [{
      name: 'pp',
      title: __('Popup', 'atrc-prefix-atrc'),
      hasValue: hasTabValue(),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }]
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
        label: __('Source', 'atrc-prefix-atrc'),
        wrapProps: {
          className: 'at-flx-grw-1'
        },
        value: value && value.ppSrc,
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
export default AtrcControlPopup;
//# sourceMappingURL=index.js.map