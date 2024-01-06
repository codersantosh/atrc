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
	if (
		url.includes('soundcloud.com') ||
		url.includes('spotify.com') ||
		url.includes('pocketcasts.com') ||
		url.includes('mixcloud.com')
	) {
		return false;
	}

	return true;
}

const AtrcAudio = (props) => {
	if (!props || !props.url) {
		return null;
	}

	const {
		variant = '',
		className = '',

		url = '',

		autoplay = false,
		controls = true,
		loop = false,
		muted = true,
		controlslist = '',

		preload = '',
		prefix = '',
		...defaultProps
	} = props;

	if (AtrcAudioIsHtml5(url)) {
		return (
			<audio
				className={classnames(
					AtrcPrefix('aud'),
					className,
					variant ? AtrcPrefix('aud') + '-' + variant : ''
				)}
				autoPlay={autoplay}
				controls={controls}
				loop={loop}
				muted={muted}
				controlsList={controlslist}
				preload={preload}
				src={url}
				{...defaultProps}
			/>
		);
	}

	return (
		<AtrcIframe
			className={classnames(
				AtrcPrefix('aud'),
				className,
				variant ? AtrcPrefix('aud') + '-' + variant : ''
			)}
			src={url}
			frameBorder='0'
			title={__('Other audio', 'atrc-prefix-atrc')}
			{...defaultProps}
		/>
	);
};

export default AtrcAudio;
