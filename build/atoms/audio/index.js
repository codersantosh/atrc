var _excluded = ["variant", "className", "url", "autoplay", "controls", "loop", "muted", "controlslist", "preload", "prefix"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import AtrcPrefix from '../../prefix-vars';

/* Inbuilt */
import AtrcIframe from '../iframe';

/*Local*/
export function AtrcAudioIsHtml5(url) {
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
    controls = _props$controls === void 0 ? true : _props$controls,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop,
    _props$muted = props.muted,
    muted = _props$muted === void 0 ? true : _props$muted,
    _props$controlslist = props.controlslist,
    controlslist = _props$controlslist === void 0 ? '' : _props$controlslist,
    _props$preload = props.preload,
    preload = _props$preload === void 0 ? '' : _props$preload,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? '' : _props$prefix,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (AtrcAudioIsHtml5(url)) {
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
  }
  return /*#__PURE__*/React.createElement(AtrcIframe, _extends({
    className: classnames(AtrcPrefix('aud'), className, variant ? AtrcPrefix('aud') + '-' + variant : ''),
    src: url,
    frameBorder: "0",
    title: __('Other audio', 'atrc-prefix-atrc')
  }, defaultProps));
};
export default AtrcAudio;
//# sourceMappingURL=index.js.map