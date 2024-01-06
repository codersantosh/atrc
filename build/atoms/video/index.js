var _excluded = ["variant", "className", "url", "onSettings", "autoplay", "controls", "loop", "muted", "playsInline", "width", "height", "allowFullScreen", "preload", "poster"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';

/*Library*/
import classnames from 'classnames';
import AtrcImg from '../img';
import AtrcIframe from '../iframe';
/*Local Components*/

/*Source
 * https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-vid-id-from-a-url
 * */
export function AtrcVideoIsYoutube(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}
function AtrcGetYoutubeVideUrl(props) {
  if (!props || !props.id) {
    throw new Error('A YouTube vid ID is required');
  }
  var id = props.id,
    _props$autoplay = props.autoplay,
    autoplay = _props$autoplay === void 0 ? false : _props$autoplay,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop,
    _props$muted = props.muted,
    muted = _props$muted === void 0 ? false : _props$muted,
    _props$mute = props.mute,
    mute = _props$mute === void 0 ? false : _props$mute,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? false : _props$controls,
    _props$showInfo = props.showInfo,
    showInfo = _props$showInfo === void 0 ? false : _props$showInfo,
    _props$playlist = props.playlist,
    playlist = _props$playlist === void 0 ? '' : _props$playlist,
    _props$start = props.start,
    start = _props$start === void 0 ? 0 : _props$start,
    _props$end = props.end,
    end = _props$end === void 0 ? 0 : _props$end,
    _props$playsinline = props.playsinline,
    playsinline = _props$playsinline === void 0 ? false : _props$playsinline;

  // Set the playlist prop if loop is true and no playlist is provided
  if (loop && !playlist) {
    playlist = id;
  }
  var quryArgs = {
    autoplay: autoplay,
    loop: loop,
    mute: mute || muted,
    controls: controls,
    showInfo: showInfo,
    start: start,
    end: end,
    playsinline: playsinline
  };
  if (playlist) {
    quryArgs.playlist = playlist;
  }
  return addQueryArgs("https://www.youtube.com/embed/".concat(id), quryArgs);
}
export function AtrcVideoIsVimeo(url) {
  var regEx = /(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/?(showcase\/)*([0-9))([a-z]*\/)*([0-9]{6,11})[?]?.*/,
    match = url.match(regEx);
  return match && match.length === 7 ? match[6] : false;
}
function vimeoVideoUrl(props) {
  // Validate the props object
  if (!props || !props.id) {
    throw new Error('A Vimeo vid ID is required');
  }

  // Set default values for the props
  var id = props.id,
    _props$autoplay2 = props.autoplay,
    autoplay = _props$autoplay2 === void 0 ? false : _props$autoplay2,
    _props$loop2 = props.loop,
    loop = _props$loop2 === void 0 ? false : _props$loop2,
    _props$muted2 = props.muted,
    muted = _props$muted2 === void 0 ? false : _props$muted2,
    _props$controls2 = props.controls,
    controls = _props$controls2 === void 0 ? false : _props$controls2,
    _props$playsinline2 = props.playsinline,
    playsinline = _props$playsinline2 === void 0 ? false : _props$playsinline2,
    _props$speed = props.speed,
    speed = _props$speed === void 0 ? true : _props$speed;

  // Build the URL
  return "https://player.vimeo.com/vid/".concat(id, "?autoplay=").concat(autoplay, "&loop=").concat(loop, "&muted=").concat(muted, "&controls=").concat(controls, "&playsinline=").concat(playsinline, "&speed=").concat(speed);
}
export function AtrcVideoIsHtml5(url) {
  // Check if the URL is a valid vid file
  return /^(https?:)?\/\//.test(url) && /\.(mp4|webm|ogv|mov)$/.test(url);
}
export function AtrcIsImageUrl(url) {
  // Check if the URL is a valid image file
  return /^(https?:)?\/\//.test(url) && /\.(png|jpe?g|gif|bmp)$/.test(url);
}
var AtrcVideo = function AtrcVideo(props) {
  if (!props || !props.url) {
    return null;
  }
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$url = props.url,
    url = _props$url === void 0 ? '' : _props$url,
    _props$onSettings = props.onSettings,
    onSettings = _props$onSettings === void 0 ? false : _props$onSettings,
    _props$autoplay3 = props.autoplay,
    autoplay = _props$autoplay3 === void 0 ? false : _props$autoplay3,
    _props$controls3 = props.controls,
    controls = _props$controls3 === void 0 ? false : _props$controls3,
    _props$loop3 = props.loop,
    loop = _props$loop3 === void 0 ? false : _props$loop3,
    _props$muted3 = props.muted,
    muted = _props$muted3 === void 0 ? true : _props$muted3,
    _props$playsInline = props.playsInline,
    playsInline = _props$playsInline === void 0 ? false : _props$playsInline,
    _props$width = props.width,
    width = _props$width === void 0 ? '' : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? '' : _props$height,
    _props$allowFullScree = props.allowFullScreen,
    allowFullScreen = _props$allowFullScree === void 0 ? false : _props$allowFullScree,
    _props$preload = props.preload,
    preload = _props$preload === void 0 ? '' : _props$preload,
    _props$poster = props.poster,
    poster = _props$poster === void 0 ? '' : _props$poster,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (AtrcVideoIsHtml5(url)) {
    return /*#__PURE__*/React.createElement("video", _extends({
      className: classnames('at-vid', className, variant ? 'at-vid-' + variant : ''),
      autoPlay: autoplay,
      controls: controls,
      loop: loop,
      muted: muted,
      playsInline: playsInline,
      width: width,
      height: height,
      preload: preload,
      src: url,
      poster: poster
    }, defaultProps));
  }
  if (AtrcIsImageUrl(url)) {
    return /*#__PURE__*/React.createElement(AtrcImg, _extends({
      src: url,
      width: width,
      height: height
    }, defaultProps));
  }
  if (AtrcVideoIsYoutube(url)) {
    var youtubeVideUrl = onSettings ? url : AtrcGetYoutubeVideUrl({
      id: AtrcVideoIsYoutube(url),
      autoplay: autoplay,
      loop: loop,
      muted: muted,
      controls: controls,
      showInfo: false,
      playsinline: playsInline
    });
    return /*#__PURE__*/React.createElement(AtrcIframe, _extends({
      height: height,
      width: width,
      className: classnames(AtrcPrefix('vid'), className, variant ? AtrcPrefix('vid') + '-' + variant : ''),
      src: youtubeVideUrl,
      frameBorder: "0",
      allowFullScreen: allowFullScreen,
      title: __('Youtube video', 'atrc-prefix-atrc')
    }, defaultProps));
  }
  if (AtrcVideoIsVimeo(url)) {
    var vimeoUrl = onSettings ? vimeoVideoUrl({
      id: AtrcVideoIsVimeo(url),
      autoplay: autoplay,
      loop: loop,
      muted: muted,
      controls: controls,
      playsinline: playsInline
    }) : url;
    return /*#__PURE__*/React.createElement(AtrcIframe, _extends({
      height: height,
      width: width,
      className: classnames(AtrcPrefix('vid'), className, variant ? AtrcPrefix('vid') + '-' + variant : ''),
      src: vimeoUrl,
      frameBorder: "0",
      allowFullScreen: allowFullScreen,
      title: __('Vimeo video', 'atrc-prefix-atrc')
    }, defaultProps));
  }
  return /*#__PURE__*/React.createElement(AtrcIframe, _extends({
    height: height,
    width: width,
    className: classnames(AtrcPrefix('vid'), className, variant ? AtrcPrefix('vid') + '-' + variant : ''),
    src: url,
    frameBorder: "0",
    allowFullScreen: allowFullScreen,
    title: __('Other video', 'atrc-prefix-atrc')
  }, defaultProps));
};
export default AtrcVideo;
//# sourceMappingURL=index.js.map