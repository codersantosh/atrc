/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export function AtrcAudioIsHtml5(url) {
  // Check if the URL is a SoundCloud track
  if (url.includes('soundcloud.com') || url.includes('spotify.com') || url.includes('pocketcasts.com') || url.includes('mixcloud.com')) {
    return false;
  }
  return true;
}
const AtrcAudio = props => {
  if (!props || !props.url) {
    return null;
  }
  const {
    variant = '',
    className = '',
    url = '',
    autoplay = false,
    controls = false,
    loop = false,
    muted = true,
    controlslist = '',
    preload = '',
    prefix = ''
  } = props;
  if (AtrcAudioIsHtml5(url)) {
    return /*#__PURE__*/React.createElement("audio", {
      className: classnames('at-aud', className, variant ? AtrcPrefix('aud') + '-' + variant : ''),
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
    className: classnames('at-aud', 'at-frame', className, variant ? AtrcPrefix('aud') + '-' + variant : ''),
    src: url,
    frameBorder: "0",
    title: __('Other audio', 'atrc-prefix-atrc')
  });
};
export default AtrcAudio;
//# sourceMappingURL=index.js.map