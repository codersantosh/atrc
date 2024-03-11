/* WordPress */
import { __ } from '@wordpress/i18n';

import { addQueryArgs } from '@wordpress/url';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcImg from '../img';
import AtrcIframe from '../iframe';
import AtrcPrefix from '../../prefix-vars';
import AtrcFigure from '../../molecules/figure';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/*Local*/

/*Source
 * https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-vid-id-from-a-url
 * */
export function AtrcVideoIsYoutube(url) {
	const regExp =
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
		match = url.match(regExp);

	return match && match[7].length === 11 ? match[7] : false;
}

export function AtrcGetYoutubeVideUrl(props) {
	if (!props || !props.id) {
		throw new Error('A YouTube vid ID is required');
	}

	let {
		id,
		autoplay = false,
		loop = false,
		muted = false,
		mute = false,
		controls = false,
		showInfo = false,
		playlist = '',
		start = 0, // default to the start of the vid
		end = 0, // default to the end of the vid
		playsinline = false,
	} = props;

	// Set the playlist prop if loop is true and no playlist is provided
	if (loop && !playlist) {
		playlist = id;
	}
	const quryArgs = {
		autoplay,
		loop,
		mute: mute || muted,
		controls,
		showInfo,
		start,
		end,
		playsinline,
	};
	if (playlist) {
		quryArgs.playlist = playlist;
	}

	return addQueryArgs(`https://www.youtube.com/embed/${id}`, quryArgs);
}

export function AtrcVideoIsVimeo(url) {
	const regEx =
			/(https?:\/\/)?(www\.)?(player\.)?vimeo\.com\/?(showcase\/)*([0-9))([a-z]*\/)*([0-9]{6,11})[?]?.*/,
		match = url.match(regEx);

	return match && match.length === 7 ? match[6] : false;
}

export function AtrcGetVimeoVideoUrl(props) {
	// Validate the props object
	if (!props || !props.id) {
		throw new Error('A Vimeo vid ID is required');
	}

	// Set default values for the props
	const {
		id,
		autoplay = false,
		loop = false,
		muted = false,
		controls = false,
		playsinline = false,
		speed = true,
	} = props;

	// Build the URL
	return `https://player.vimeo.com/vid/${id}?autoplay=${autoplay}&loop=${loop}&muted=${muted}&controls=${controls}&playsinline=${playsinline}&speed=${speed}`;
}

export function AtrcVideoIsHtml5(url) {
	// Check if the last part of the URL contains a valid vid file string
	const urlParts = url.split('/');
	const lastPart = urlParts[urlParts.length - 1];
	return lastPart.includes('.mp4');
}

export function AtrcIsImageUrl(url) {
	// Check if the last part of the URL contains a valid image file string
	const urlParts = url.split('/');
	const lastPart = urlParts[urlParts.length - 1];
	return (
		lastPart.includes('.png') ||
		lastPart.includes('.jpg') ||
		lastPart.includes('.jpeg') ||
		lastPart.includes('.gif') ||
		lastPart.includes('.bmp')
	);
}

export const AtrcVideoTag = (props) => {
	const {
		variant = '',
		className = '',

		url = '',
		onSettings = false,

		autoplay = false,
		controls = false,
		loop = false,
		muted = true,
		playsInline = false,
		width = '',
		height = '',

		preload = '',
		poster = '',
		...defaultProps
	} = props;
	return (
		<video
			className={classnames(
				AtrcPrefix('vid'),
				className,
				variant ? AtrcPrefix('vid') + '-' + variant : ''
			)}
			autoPlay={autoplay}
			controls={controls}
			loop={loop}
			muted={muted}
			playsInline={playsInline}
			width={width}
			height={height}
			preload={preload}
			src={url}
			poster={poster}
			{...defaultProps}
		/>
	);
};

export const AtrcHtml5Video = (props) => {
	const { wrapfigure = true, figureProps = {}, ...videoProps } = props;

	if (wrapfigure) {
		return (
			<AtrcFigure
				{...figureProps}
				variant='vid'>
				<AtrcVideoTag {...videoProps} />
			</AtrcFigure>
		);
	}

	return <AtrcVideoTag {...videoProps} />;
};

const AtrcVideo = (props) => {
	if (!props || !props.url) {
		return null;
	}

	const { url = '' } = props;

	if (AtrcVideoIsHtml5(url)) {
		return <AtrcHtml5Video {...props} />;
	}
	const {
		variant = '',
		className = '',

		onSettings = false,

		autoplay = false,
		controls = false,
		loop = false,
		muted = true,
		playsInline = false,
		width = '',
		height = '',

		allowFullScreen = false,

		preload = '',
		poster = '',
		...defaultProps
	} = props;

	if (AtrcIsImageUrl(url)) {
		return (
			<AtrcImg
				src={url}
				width={width}
				height={height}
				{...defaultProps}
			/>
		);
	}
	if (AtrcVideoIsYoutube(url)) {
		const youtubeVideUrl = onSettings
			? url
			: AtrcGetYoutubeVideUrl({
					id: AtrcVideoIsYoutube(url),
					autoplay,
					loop,
					muted,
					controls,
					showInfo: false,
					playsinline: playsInline,
			  });

		return (
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcIframe
					height={height}
					width={width}
					className={classnames(
						AtrcPrefix('vid'),
						className,
						variant ? AtrcPrefix('vid') + '-' + variant : ''
					)}
					src={youtubeVideUrl}
					frameBorder='0'
					allowFullScreen={allowFullScreen}
					title={__('Youtube video', 'atrc-prefix-atrc')}
					{...defaultProps}
				/>
			</AtrcPanelRow>
		);
	}
	if (AtrcVideoIsVimeo(url)) {
		const vimeoUrl = onSettings
			? AtrcGetVimeoVideoUrl({
					id: AtrcVideoIsVimeo(url),
					autoplay,
					loop,
					muted,
					controls,
					playsinline: playsInline,
			  })
			: url;
		return (
			<AtrcIframe
				height={height}
				width={width}
				className={classnames(
					AtrcPrefix('vid'),
					className,
					variant ? AtrcPrefix('vid') + '-' + variant : ''
				)}
				src={vimeoUrl}
				frameBorder='0'
				allowFullScreen={allowFullScreen}
				title={__('Vimeo video', 'atrc-prefix-atrc')}
				{...defaultProps}
			/>
		);
	}

	return (
		<AtrcIframe
			height={height}
			width={width}
			className={classnames(
				AtrcPrefix('vid'),
				className,
				variant ? AtrcPrefix('vid') + '-' + variant : ''
			)}
			src={url}
			frameBorder='0'
			allowFullScreen={allowFullScreen}
			title={__('Other video', 'atrc-prefix-atrc')}
			{...defaultProps}
		/>
	);
};

export default AtrcVideo;
