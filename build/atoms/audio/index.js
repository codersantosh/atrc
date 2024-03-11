var _excluded = ["variant", "className", "url", "autoplay", "controls", "loop", "muted", "controlslist", "preload"],
  _excluded2 = ["wrapfigure", "figureProps"],
  _excluded3 = ["variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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