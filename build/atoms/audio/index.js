var _excluded = ["variant", "className", "url", "autoplay", "controls", "loop", "muted", "controlslist", "preload"],
  _excluded2 = ["wrapfigure", "figureProps"],
  _excluded3 = ["variant", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcIframe from '../iframe';

/* Molecules */
import AtrcFigure from '../../molecules/figure';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export function AtrcAudioIsHtml5(url) {
  // Check if the URL is a SoundCloud track
  if (url.includes('soundcloud.com') || url.includes('spotify.com') || url.includes('pocketcasts.com') || url.includes('mixcloud.com')) {
    return false;
  }
  return true;
}
export var AtrcAudioTag = function AtrcAudioTag(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$url = props.url,
    url = _props$url === void 0 ? '' : _props$url,
    _props$autoplay = props.autoplay,
    autoplay = _props$autoplay === void 0 ? false : _props$autoplay,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? true : _props$controls,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop,
    _props$muted = props.muted,
    muted = _props$muted === void 0 ? true : _props$muted,
    _props$controlslist = props.controlslist,
    controlslist = _props$controlslist === void 0 ? '' : _props$controlslist,
    _props$preload = props.preload,
    preload = _props$preload === void 0 ? '' : _props$preload,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("audio", _extends({
    className: classnames(AtrcPrefix('aud'), className, variant ? AtrcPrefix('aud') + '-' + variant : ''),
    autoPlay: autoplay,
    controls: controls,
    loop: loop,
    muted: muted,
    controlsList: controlslist,
    preload: preload,
    src: url
  }, defaultProps));
};
export var AtrcHtml5Audio = function AtrcHtml5Audio(props) {
  var _props$wrapfigure = props.wrapfigure,
    wrapfigure = _props$wrapfigure === void 0 ? true : _props$wrapfigure,
    _props$figureProps = props.figureProps,
    figureProps = _props$figureProps === void 0 ? {} : _props$figureProps,
    audioProps = _objectWithoutProperties(props, _excluded2);
  if (wrapfigure) {
    return /*#__PURE__*/React.createElement(AtrcFigure, _extends({}, figureProps, {
      variant: "aud"
    }), /*#__PURE__*/React.createElement(AtrcAudioTag, audioProps));
  }
  return /*#__PURE__*/React.createElement(AtrcAudioTag, audioProps);
};
var AtrcAudio = function AtrcAudio(props) {
  if (!props || !props.url) {
    return null;
  }
  var _props$url2 = props.url,
    url = _props$url2 === void 0 ? '' : _props$url2;
  if (AtrcAudioIsHtml5(url)) {
    return /*#__PURE__*/React.createElement(AtrcHtml5Audio, props);
  }
  var _props$variant2 = props.variant,
    variant = _props$variant2 === void 0 ? '' : _props$variant2,
    _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  return /*#__PURE__*/React.createElement(AtrcIframe, _extends({
    className: classnames(AtrcPrefix('aud'), className, variant ? AtrcPrefix('aud') + '-' + variant : ''),
    src: url,
    frameBorder: "0",
    title: __('Other audio', 'atrc-prefix-atrc')
  }, defaultProps));
};
export default AtrcAudio;
//# sourceMappingURL=index.js.map