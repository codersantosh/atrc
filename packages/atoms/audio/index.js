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

export const AtrcAudioTag = (props) => {
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
		...defaultProps
	} = props;

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
};

export const AtrcHtml5Audio = (props) => {
	const { wrapfigure = true, figureProps = {}, ...audioProps } = props;

	if (wrapfigure) {
		return (
			<AtrcFigure
				{...figureProps}
				variant='aud'>
				<AtrcAudioTag {...audioProps} />
			</AtrcFigure>
		);
	}
	return <AtrcAudioTag {...audioProps} />;
};

const AtrcAudio = (props) => {
	if (!props || !props.url) {
		return null;
	}

	const { url = '' } = props;

	if (AtrcAudioIsHtml5(url)) {
		return <AtrcHtml5Audio {...props} />;
	}

	const { variant = '', className = '', ...defaultProps } = props;

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
