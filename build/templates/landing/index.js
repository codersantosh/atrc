"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _bs = require("react-icons/bs");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _span = _interopRequireDefault(require("../../atoms/span"));
var _word = _interopRequireDefault(require("../../atoms/word"));
var _link = _interopRequireDefault(require("../../atoms/link"));
var _img = _interopRequireDefault(require("../../atoms/img"));
var _hr = _interopRequireDefault(require("../../atoms/hr"));
var _notice = _interopRequireDefault(require("./../../molecules/notice"));
var _buttonGroup = _interopRequireDefault(require("./../../molecules/button-group"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "variant", "name", "logo", "notice", "banner", "bannerColumns", "links", "settingLinks", "changelog", "pluginUrl", "supportUrl", "email", "location", "facebook", "twitter"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('landing'), className, variant ? (0, _prefixVars.default)('landing') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-ctnr-fld"
  }, notice.on ? /*#__PURE__*/React.createElement(_notice.default, {
    autoDismiss: false,
    onRemove: notice.onRemove
  }, notice.text) : null, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('hero-banner'), 'at-bg-cl', 'at-p', 'at-m', 'at-typ', 'at-bdr-rad', 'at-bg-img')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-row at-al-itm-ctr"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-col-md-7')
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "h1",
    className: (0, _classnames.default)('at-m')
  }, name), /*#__PURE__*/React.createElement(_word.default, {
    tag: "p",
    className: (0, _classnames.default)((0, _prefixVars.default)('p-lead'), 'at-m')
  }, banner.leadText), /*#__PURE__*/React.createElement(_word.default, {
    className: (0, _classnames.default)('at-m'),
    tag: "p"
  }, banner.normalText), banner.buttons ? /*#__PURE__*/React.createElement(_buttonGroup.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('hero-btn-grp'))
  }, /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-p', 'at-btn', 'at-al-itm-ctr', 'at-flx'),
    variant: "primary",
    href: banner.buttons[0].url,
    target: banner.buttons[0].target
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)('at-m'),
    type: "bootstrap",
    icon: _bs.BsFillLightningChargeFill
  }), banner.buttons[0].text), banner.buttons[1] ? /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-p', 'at-btn', 'at-al-itm-ctr', 'at-flx'),
    variant: "outl",
    href: banner.buttons[1].url,
    target: banner.buttons[1].target
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)('at-m'),
    type: "bootstrap",
    icon: _bs.BsFiles
  }), banner.buttons[1].text) : null, banner.buttons[2] ? /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-p', 'at-btn', 'at-al-itm-ctr', 'at-flx'),
    variant: "secondary",
    href: banner.buttons[2].url,
    target: banner.buttons[2].target
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)('at-m'),
    type: "bootstrap",
    icon: _bs.BsGem
  }), banner.buttons[2].text) : null) : null), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-col-md-5"
  }, /*#__PURE__*/React.createElement(_img.default, {
    src: banner.image,
    alt: name
  })))), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-row"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-col-md-4 at-col-lg-3"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('intro-auth'), 'at-m')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card'),
    // AtrcPrefix('p-40'),
    (0, _prefixVars.default)('bg-white'), 'at-bg-cl', 'at-bdr-rad', 'at-p')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('intro-profile'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', 'at-m', (0, _prefixVars.default)('round-bdr'))
  }, /*#__PURE__*/React.createElement(_span.default, null, /*#__PURE__*/React.createElement(_img.default, {
    src: logo,
    alt: name
  }))), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('intro-profile-info'), 'at-txt-al')
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "h3"
  }, name), pluginUrl || supportUrl ? /*#__PURE__*/React.createElement(_buttonGroup.default, {
    className: (0, _classnames.default)('at-jfy-cont-ctr')
  }, pluginUrl ? /*#__PURE__*/React.createElement(_link.default, {
    variant: "primary",
    className: (0, _classnames.default)('at-p', 'at-btn'),
    href: pluginUrl,
    target: "__blank"
  }, (0, _i18n.__)('Visit Site', 'atrc-prefix-atrc')) : null, supportUrl ? /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-p', 'at-btn'),
    href: supportUrl,
    target: "__blank"
  }, (0, _i18n.__)('Get support', 'atrc-prefix-atrc')) : null) : null))), supportUrl || email || location ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('intro-auth--info'))
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card'),
    //AtrcPrefix('p-40'),
    (0, _prefixVars.default)('bg-white'), 'at-bg-cl', 'at-bdr-rad')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "h5",
    className: (0, _classnames.default)((0, _prefixVars.default)('card-heading'), (0, _prefixVars.default)('m-0'), 'at-m')
  }, (0, _i18n.__)('Contact Information', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)('at-m')
  }), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('prsn-detail'), 'at-flx', 'at-flx-col', 'at-gap')
  }, supportUrl ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', (0, _prefixVars.default)('prsn-icon-wrp'))
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsFiles
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span",
    variant: "bold"
  }, (0, _i18n.__)('Support:', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-btn'),
    href: supportUrl,
    target: "__blank"
  }, (0, _i18n.__)('Get support', 'atrc-prefix-atrc'))) : null, email ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', (0, _prefixVars.default)('prsn-icon-wrp'))
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsEnvelope
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span",
    variant: "bold"
  }, (0, _i18n.__)('Email:', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(_word.default, {
    tag: "a",
    href: 'mailto:' + email,
    target: "__blank"
  }, email)) : null, location ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', (0, _prefixVars.default)('prsn-icon-wrp'))
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsGeoAlt
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span",
    variant: "bold"
  }, (0, _i18n.__)('Location:', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span"
  }, location)) : null), facebook || twitter ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('social'), 'at-m')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-gap')
  }, facebook ? /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', (0, _prefixVars.default)('round-bdr')),
    href: facebook,
    target: "__blank"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)(),
    type: "bootstrap",
    icon: _bs.BsFacebook
  })) : null, twitter ? /*#__PURE__*/React.createElement(_link.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', (0, _prefixVars.default)('round-bdr')),
    href: twitter,
    target: "__blank"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)(),
    type: "bootstrap",
    icon: _bs.BsTwitter
  })) : null)) : null))) : null), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-col-md-8 at-col-lg-9"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-row"
  }, bannerColumns.map(function (bannerCol, iDx) {
    return /*#__PURE__*/React.createElement(_wrap.default, {
      className: "at-col-md-4",
      key: iDx
    }, /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('card'), (0, _prefixVars.default)('bg-grad-1'), 'at-bdr-rad', 'at-p', 'at-bg-img')
    }, /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-gap')
    }, /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('card-icon'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-w', 'at-h')
    }, /*#__PURE__*/React.createElement(_icon.default, {
      type: "bootstrap",
      icon: bannerCol.icon
    })), /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('txt-white'))
    }, /*#__PURE__*/React.createElement(_word.default, {
      tag: "p",
      variant: "lead",
      className: (0, _classnames.default)('at-m')
    }, bannerCol.title), /*#__PURE__*/React.createElement(_word.default, {
      tag: "h2",
      className: (0, _classnames.default)('at-m')
    }, bannerCol.subtitle)))));
  })), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-m', 'at-row')
  }, links.map(function (link, iDx) {
    return /*#__PURE__*/React.createElement(_wrap.default, {
      className: "at-col-md-3",
      key: iDx
    }, /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('card'), (0, _prefixVars.default)('bg-white'), 'at-bg-cl', 'at-bdr-rad')
    }, /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('card-header'), 'at-p')
    }, /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-gap')
    }, /*#__PURE__*/React.createElement(_icon.default, {
      type: "bootstrap",
      icon: link.icon
    }), /*#__PURE__*/React.createElement(_word.default, {
      tag: "h5",
      className: (0, _classnames.default)((0, _prefixVars.default)('card-heading'), 'at-m')
    }, link.title))), /*#__PURE__*/React.createElement(_hr.default, {
      className: (0, _classnames.default)('at-m')
    }), /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)((0, _prefixVars.default)('card-body'), 'at-p')
    }, /*#__PURE__*/React.createElement(_word.default, {
      tag: "p",
      className: (0, _classnames.default)('at-m')
    }, link.subtitle), /*#__PURE__*/React.createElement(_link.default, {
      variant: "primary",
      className: (0, _classnames.default)('at-m', 'at-btn'),
      href: link.buttonLink,
      target: "__blank"
    }, link.buttonText))));
  })), settingLinks ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card'),
    //AtrcPrefix('p-40'),
    (0, _prefixVars.default)('bg-white'), 'at-bg-cl', 'at-m', 'at-bdr-rad')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsLink45Deg
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "h5",
    className: (0, _classnames.default)((0, _prefixVars.default)('card-heading'), 'at-m')
  }, (0, _i18n.__)('Quick links to settings', 'atrc-prefix-atrc')))), /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)('at-m')
  }), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('btn-grp'), 'at-row', 'at-gap')
  }, settingLinks.map(function (settinLink, iDx) {
    return /*#__PURE__*/React.createElement(_wrap.default, {
      className: (0, _classnames.default)('at-col-md-2m3', 'at-flx'),
      key: iDx
    }, /*#__PURE__*/React.createElement(_link.default, {
      className: (0, _classnames.default)('at-jfy-cont-ctr', 'at-p', 'at-flx', 'at-al-itm-ctr', 'at-gap', 'at-flx-grw-1', 'at-btn'),
      href: settinLink.link
    }, /*#__PURE__*/React.createElement(_icon.default, {
      type: "bootstrap",
      icon: settinLink.icon
    }), settinLink.title));
  })))) : null, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-m', 'at-row')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-col-12"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card'), (0, _prefixVars.default)('bg-white'), 'at-bg-cl', 'at-bdr-rad')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsBell
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "h5",
    className: (0, _classnames.default)((0, _prefixVars.default)('card-heading'), 'at-m')
  }, "Change Log"))), /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)('at-m')
  }), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames.default)('at-changelog-wrap', 'at-p', 'at-bdr', 'at-bg-img')
  }, /*#__PURE__*/React.createElement("pre", {
    className: "at-changelog"
  }, changelog))))))))));
};
var _default = exports.default = AtrcLanding;
//# sourceMappingURL=index.js.map