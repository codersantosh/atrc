"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcAudioIsHtml5 = AtrcAudioIsHtml5;
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WordPress */

/*Library*/

/*Local Components*/
function AtrcAudioIsHtml5(url) {
  // Check if the URL is a SoundCloud track
  if (url.includes('soundcloud.com') || url.includes('spotify.com') || url.includes('pocketcasts.com') || url.includes('mixcloud.com')) {
    return false;
  }
  return true;
}
var AtrcAudio = function AtrcAudio(props) {
  if (!props || !props.url) {
    return null;
  }
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$url = props.url,
    url = _props$url === void 0 ? '' : _props$url,
    _props$autoplay = props.autoplay,
    autoplay = _props$autoplay === void 0 ? false : _props$autoplay,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? false : _props$controls,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop,
    _props$muted = props.muted,
    muted = _props$muted === void 0 ? true : _props$muted,
    _props$controlslist = props.controlslist,
    controlslist = _props$controlslist === void 0 ? '' : _props$controlslist,
    _props$preload = props.preload,
    preload = _props$preload === void 0 ? '' : _props$preload,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? '' : _props$prefix;
  if (AtrcAudioIsHtml5(url)) {
    return /*#__PURE__*/React.createElement("audio", {
      className: (0, _classnames.default)('at-aud', className, variant ? (0, _prefixVars.default)('aud') + '-' + variant : ''),
      autoPlay: autoplay,
      controls: controls,
      loop: loop,
      muted: muted,
      controlsList: controlslist,
      preload: preload,
      src: url
    });
  }
  return /*#__PURE__*/React.createElement("iframe", {
    className: (0, _classnames.default)('at-aud', 'at-frame', className, variant ? (0, _prefixVars.default)('aud') + '-' + variant : ''),
    src: url,
    frameBorder: "0",
    title: (0, _i18n.__)('Other audio', 'atrc-prefix-atrc')
  });
};
var _default = exports.default = AtrcAudio;
//# sourceMappingURL=index.js.map