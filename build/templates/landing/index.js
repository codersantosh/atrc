var _excluded = ["className", "variant", "name", "logo", "notice", "banner", "bannerColumns", "links", "settingLinks", "changelog", "pluginUrl", "supportUrl", "email", "location", "facebook", "twitter"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { BsBell, BsEnvelope, BsFacebook, BsFiles, BsGeoAlt, BsLink45Deg, BsTwitter, BsFillLightningChargeFill, BsGem } from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcIcon from '../../atoms/icon';
import AtrcSpan from '../../atoms/span';
import AtrcWord from '../../atoms/word';
import AtrcLink from '../../atoms/link';
import AtrcImg from '../../atoms/img';
import AtrcHr from '../../atoms/hr';
import AtrcNotice from './../../molecules/notice';
import AtrcButtonGroup from './../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcLanding = function AtrcLanding(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    name = props.name,
    logo = props.logo,
    notice = props.notice,
    banner = props.banner,
    bannerColumns = props.bannerColumns,
    links = props.links,
    settingLinks = props.settingLinks,
    changelog = props.changelog,
    pluginUrl = props.pluginUrl,
    supportUrl = props.supportUrl,
    email = props.email,
    location = props.location,
    facebook = props.facebook,
    twitter = props.twitter,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('landing'), className, variant ? AtrcPrefix('landing') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-ctnr-fld"
  }, notice.on ? /*#__PURE__*/React.createElement(AtrcNotice, {
    autoDismiss: false,
    onRemove: notice.onRemove
  }, notice.text) : null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('hero-banner'), 'at-bg-cl', 'at-p', 'at-m', 'at-typ', 'at-bdr-rad', 'at-bg-img')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-row at-al-itm-ctr"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-col-md-7')
  }, /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h1",
    className: classnames('at-m')
  }, name), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "p",
    className: classnames(AtrcPrefix('p-lead'), 'at-m')
  }, banner.leadText), /*#__PURE__*/React.createElement(AtrcWord, {
    className: classnames('at-m'),
    tag: "p"
  }, banner.normalText), banner.buttons ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames(AtrcPrefix('hero-btn-grp'))
  }, /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-p', 'at-btn', 'at-al-itm-ctr', 'at-flx'),
    variant: "primary",
    href: banner.buttons[0].url,
    target: banner.buttons[0].target
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames('at-m'),
    type: "bootstrap",
    icon: BsFillLightningChargeFill
  }), banner.buttons[0].text), banner.buttons[1] ? /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-p', 'at-btn', 'at-al-itm-ctr', 'at-flx'),
    variant: "outl",
    href: banner.buttons[1].url,
    target: banner.buttons[1].target
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames('at-m'),
    type: "bootstrap",
    icon: BsFiles
  }), banner.buttons[1].text) : null, banner.buttons[2] ? /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-p', 'at-btn', 'at-al-itm-ctr', 'at-flx'),
    variant: "secondary",
    href: banner.buttons[2].url,
    target: banner.buttons[2].target
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames('at-m'),
    type: "bootstrap",
    icon: BsGem
  }), banner.buttons[2].text) : null) : null), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-md-5"
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    src: banner.image,
    alt: name
  })))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-row"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-md-4 at-col-lg-3"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-auth'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'),
    // AtrcPrefix('p-40'),
    AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad', 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-profile'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', 'at-m', AtrcPrefix('round-bdr'))
  }, /*#__PURE__*/React.createElement(AtrcSpan, null, /*#__PURE__*/React.createElement(AtrcImg, {
    src: logo,
    alt: name
  }))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-profile-info'), 'at-txt-al')
  }, /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h3"
  }, name), pluginUrl || supportUrl ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames('at-jfy-cont-ctr')
  }, pluginUrl ? /*#__PURE__*/React.createElement(AtrcLink, {
    variant: "primary",
    className: classnames('at-p', 'at-btn'),
    href: pluginUrl,
    target: "__blank"
  }, __('Visit Site', 'atrc-prefix-atrc')) : null, supportUrl ? /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-p', 'at-btn'),
    href: supportUrl,
    target: "__blank"
  }, __('Get support', 'atrc-prefix-atrc')) : null) : null))), supportUrl || email || location ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-auth--info'))
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'),
    //AtrcPrefix('p-40'),
    AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h5",
    className: classnames(AtrcPrefix('card-heading'), AtrcPrefix('m-0'), 'at-m')
  }, __('Contact Information', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('prsn-detail'), 'at-flx', 'at-flx-col', 'at-gap')
  }, supportUrl ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', AtrcPrefix('prsn-icon-wrp'))
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsFiles
  }), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "span",
    variant: "bold"
  }, __('Support:', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-btn'),
    href: supportUrl,
    target: "__blank"
  }, __('Get support', 'atrc-prefix-atrc'))) : null, email ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', AtrcPrefix('prsn-icon-wrp'))
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsEnvelope
  }), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "span",
    variant: "bold"
  }, __('Email:', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "a",
    href: 'mailto:' + email,
    target: "__blank"
  }, email)) : null, location ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', AtrcPrefix('prsn-icon-wrp'))
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsGeoAlt
  }), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "span",
    variant: "bold"
  }, __('Location:', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "span"
  }, location)) : null), facebook || twitter ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('social'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-gap')
  }, facebook ? /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', AtrcPrefix('round-bdr')),
    href: facebook,
    target: "__blank"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(),
    type: "bootstrap",
    icon: BsFacebook
  })) : null, twitter ? /*#__PURE__*/React.createElement(AtrcLink, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', AtrcPrefix('round-bdr')),
    href: twitter,
    target: "__blank"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(),
    type: "bootstrap",
    icon: BsTwitter
  })) : null)) : null))) : null), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-md-8 at-col-lg-9"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-row"
  }, bannerColumns.map(function (bannerCol, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-col-md-4",
      key: iDx
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-grad-1'), 'at-bdr-rad', 'at-p', 'at-bg-img')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card-icon'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-w', 'at-h')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: bannerCol.icon
    })), /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('txt-white'))
    }, /*#__PURE__*/React.createElement(AtrcWord, {
      tag: "p",
      variant: "lead",
      className: classnames('at-m')
    }, bannerCol.title), /*#__PURE__*/React.createElement(AtrcWord, {
      tag: "h2",
      className: classnames('at-m')
    }, bannerCol.subtitle)))));
  })), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-m', 'at-row')
  }, links.map(function (link, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: "at-col-md-3",
      key: iDx
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card-header'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: link.icon
    }), /*#__PURE__*/React.createElement(AtrcWord, {
      tag: "h5",
      className: classnames(AtrcPrefix('card-heading'), 'at-m')
    }, link.title))), /*#__PURE__*/React.createElement(AtrcHr, {
      className: classnames('at-m')
    }), /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card-body'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcWord, {
      tag: "p",
      className: classnames('at-m')
    }, link.subtitle), /*#__PURE__*/React.createElement(AtrcLink, {
      variant: "primary",
      className: classnames('at-m', 'at-btn'),
      href: link.buttonLink,
      target: "__blank"
    }, link.buttonText))));
  })), settingLinks ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'),
    //AtrcPrefix('p-40'),
    AtrcPrefix('bg-white'), 'at-bg-cl', 'at-m', 'at-bdr-rad')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsLink45Deg
  }), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h5",
    className: classnames(AtrcPrefix('card-heading'), 'at-m')
  }, __('Quick links to settings', 'atrc-prefix-atrc')))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('btn-grp'), 'at-row', 'at-gap')
  }, settingLinks.map(function (settinLink, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-col-md-2m3', 'at-flx'),
      key: iDx
    }, /*#__PURE__*/React.createElement(AtrcLink, {
      className: classnames('at-jfy-cont-ctr', 'at-p', 'at-flx', 'at-al-itm-ctr', 'at-gap', 'at-flx-grw-1', 'at-btn'),
      href: settinLink.link
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: settinLink.icon
    }), settinLink.title));
  })))) : null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-m', 'at-row')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-12"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsBell
  }), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h5",
    className: classnames(AtrcPrefix('card-heading'), 'at-m')
  }, "Change Log"))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('at-changelog-wrap', 'at-p', 'at-bdr', 'at-bg-img')
  }, /*#__PURE__*/React.createElement("pre", {
    className: "at-changelog"
  }, changelog))))))))));
};
export default AtrcLanding;
//# sourceMappingURL=index.js.map