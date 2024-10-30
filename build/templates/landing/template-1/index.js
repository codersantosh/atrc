function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "variant", "notice", "banner", "identity", "contact", "bannerColumns", "normalColumns", "topicLinks", "settingLinks", "changelog"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../../atoms/wrap';
import { AtrcIconSvg } from '../../../atoms/icon';
import AtrcSpan from '../../../atoms/span';
import AtrcText from '../../../atoms/text';
import AtrcImg from '../../../atoms/img';
import AtrcHr from '../../../atoms/hr';
import AtrcButton from '../../../atoms/button';
import AtrcNotice from '../../../molecules/notice';
import AtrcButtonGroup from '../../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';
import AtrcPreTemplate1 from '../../components/pre/template-1';

/*Local*/
var AtrcLandingTemplate1 = function AtrcLandingTemplate1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    notice = props.notice,
    banner = props.banner,
    identity = props.identity,
    contact = props.contact,
    bannerColumns = props.bannerColumns,
    normalColumns = props.normalColumns,
    topicLinks = props.topicLinks,
    settingLinks = props.settingLinks,
    changelog = props.changelog,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('landing'), AtrcPrefix('bg-cl'), className, variant ? AtrcPrefix('landing') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-ctnr-fld"
  }, notice.on ? /*#__PURE__*/React.createElement(AtrcNotice, {
    autoDismiss: false,
    onRemove: notice.onRemove
  }, notice.text) : null, banner ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('hero-banner'), 'at-bg-cl', 'at-p', 'at-m', 'at-typ', 'at-bdr-rad', 'at-bg-img')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-row at-al-itm-ctr"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-col-md-7')
  }, banner.heading ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h1",
    className: classnames('at-m')
  }, banner.heading) : null, banner.leadText ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p",
    className: classnames(AtrcPrefix('p-lead'), 'at-m')
  }, banner.leadText) : null, banner.normalText ? /*#__PURE__*/React.createElement(AtrcText, {
    className: classnames('at-m'),
    tag: "p"
  }, banner.normalText) : null, banner.buttons ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames(AtrcPrefix('hero-btn-grp'), 'at-m')
  }, banner.buttons.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcButton, {
      isLink: true,
      hasIcon: true,
      key: "at-banner-button-".concat(iDx),
      className: classnames('at-p'),
      variant: item.variant ? item.variant : null,
      href: item.url,
      target: item.target ? item.target : '__blank'
    }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    }), item.text);
  })) : null), banner.image ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-md-5"
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    src: banner.image,
    alt: banner.heading || ''
  })) : null)) : null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-row"
  }, identity && contact ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-md-4 at-col-lg-3"
  }, identity ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-auth'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'),
    // AtrcPrefix('p-40'),
    AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad', 'at-p')
  }, identity.logo ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-profile'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', 'at-m', AtrcPrefix('round-bdr'))
  }, /*#__PURE__*/React.createElement(AtrcSpan, null, /*#__PURE__*/React.createElement(AtrcImg, {
    src: identity.logo,
    alt: identity.title
  }))) : null, identity.title || identity.buttons ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-profile-info'), 'at-txt-al')
  }, identity.title ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h3"
  }, identity.title) : null, identity.buttons ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames('at-jfy-cont-ctr', 'at-m')
  }, identity.buttons.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcButton, _defineProperty({
      isLink: true,
      key: "at-identity-button-".concat(iDx),
      variant: item.variant ? item.variant : null,
      href: item.url,
      target: item.target ? item.target : '__blank'
    }, "target", "__blank"), item.text);
  })) : null) : null)) : null, contact ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('intro-auth--info'))
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'),
    //AtrcPrefix('p-40'),
    AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad')
  }, contact.title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h5",
    className: classnames(AtrcPrefix('card-heading'), AtrcPrefix('m-0'), 'at-m')
  }, contact.title)), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  })) : null, contact.info || contact.social ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-body'), 'at-p')
  }, contact.info ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('prsn-detail'), 'at-flx', 'at-flx-col', 'at-gap')
  }, contact.info.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      key: "at-contact-info-".concat(iDx),
      className: classnames('at-flx', 'at-al-itm-ctr')
    }, item.icon || item.title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-flx', 'at-al-itm-ctr', 'at-w', 'at-gap', AtrcPrefix('prsn-icon-wrp'))
    }, item.icon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    }) : null, item.title ? /*#__PURE__*/React.createElement(AtrcText, {
      tag: "span",
      variant: "bold"
    }, item.title) : null)) : null, item.text && item.url ? /*#__PURE__*/React.createElement(AtrcButton, {
      isLink: true,
      href: item.url,
      className: classnames('at-p'),
      variant: item.variant ? item.variant : null,
      target: item.target ? item.target : '__blank'
    }, item.text) : item.text ? /*#__PURE__*/React.createElement(AtrcText, {
      tag: "span"
    }, item.text) : null);
  })) : null, contact.social ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('social'), 'at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-gap')
  }, contact.social.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      key: "at-social-".concat(iDx),
      className: classnames('at-flx', 'at-al-itm-ctr')
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      isLink: true,
      hasIcon: true,
      className: classnames('at-jfy-cont-ctr', 'at-bdr', 'at-bdr-rad', 'at-w', 'at-h', AtrcPrefix('round-bdr')),
      href: item.url,
      variant: item.variant ? item.variant : null,
      target: item.target ? item.target : '__blank'
    }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    })));
  }))) : null) : null)) : null) : null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-md-8 at-col-lg-9"
  }, bannerColumns ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-row"
  }, bannerColumns.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      key: "at-banner-column-".concat(iDx),
      className: "at-col-md-4"
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-grad-1'), 'at-bdr-rad', 'at-p', 'at-bg-img')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
    }, item.icon ? /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card-icon'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr', 'at-w', 'at-h')
    }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    })) : null, item.title ? /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('txt-white'))
    }, /*#__PURE__*/React.createElement(AtrcText, {
      tag: "p",
      variant: "lead",
      className: classnames('at-m')
    }, item.title)) : null)));
  })) : null, normalColumns ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-m', 'at-row')
  }, normalColumns.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      key: "at-normal-column-".concat(iDx),
      className: "at-col-md-3"
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad')
    }, item.icon || item.title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card-header'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
    }, item.icon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    }) : null, item.title ? /*#__PURE__*/React.createElement(AtrcText, {
      tag: "h5",
      className: classnames(AtrcPrefix('card-heading'), 'at-m')
    }, item.title) : null)), /*#__PURE__*/React.createElement(AtrcHr, {
      className: classnames('at-m')
    })) : null, item.content || item.buttonText ? /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('card-body'), 'at-p')
    }, item.content ? /*#__PURE__*/React.createElement(AtrcText, {
      tag: "p",
      className: classnames('at-m')
    }, item.content) : null, item.buttonText ? /*#__PURE__*/React.createElement(AtrcButton, {
      isLink: true,
      variant: "primary",
      className: classnames('at-m'),
      href: item.buttonLink,
      target: item.target ? item.target : '__blank'
    }, item.buttonText) : null) : null));
  })) : null, topicLinks ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-white'), 'at-bg-cl', 'at-m', 'at-bdr-rad')
  }, topicLinks.title || topicLinks.icon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, topicLinks.icon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
    svg: topicLinks.icon
  }) : null, topicLinks.title ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h5",
    className: classnames(AtrcPrefix('card-heading'), 'at-m')
  }, topicLinks.title) : null)), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  })) : null, topicLinks.columns ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('col-btn-grp'), 'at-row', 'at-gap')
  }, topicLinks.columns.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement(AtrcWrap, {
      key: "at-topic-link-column-".concat(iDx),
      className: classnames('at-col-md-2m3', 'at-flx')
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      isLink: true,
      hasIcon: true,
      variant: item.variant ? item.variant : null,
      className: classnames('at-jfy-cont-ctr', 'at-p', 'at-flx-grw-1'),
      href: item.link,
      target: item.target ? item.target : '__blank'
    }, item.icon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: item.icon
    }) : null, item.title));
  }))) : null) : null, changelog ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-m', 'at-row')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-12"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card'), AtrcPrefix('bg-white'), 'at-bg-cl', 'at-bdr-rad')
  }, changelog.title || changelog.icon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-header'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
  }, changelog.icon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
    svg: changelog.icon
  }) : null, changelog.title ? /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h5",
    className: classnames(AtrcPrefix('card-heading'), 'at-m')
  }, changelog.title) : null)), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  })) : null, changelog.content ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('card-body'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcPreTemplate1, {
    content: changelog.content
  })) : null))) : null))));
};
export default AtrcLandingTemplate1;
//# sourceMappingURL=index.js.map