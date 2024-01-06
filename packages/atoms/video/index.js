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
	const regExp =
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
		match = url.match(regExp);

	return match && match[7].length === 11 ? match[7] : false;
}

function AtrcGetYoutubeVideUrl(props) {
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

function vimeoVideoUrl(props) {
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
	// Check if the URL is a valid vid file
	return /^(https?:)?\/\//.test(url) && /\.(mp4|webm|ogv|mov)$/.test(url);
}
export function AtrcIsImageUrl(url) {
	// Check if the URL is a valid image file
	return /^(https?:)?\/\//.test(url) && /\.(png|jpe?g|gif|bmp)$/.test(url);
}

const AtrcVideo = (props) => {
	if (!props || !props.url) {
		return null;
	}

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

		allowFullScreen = false,

		preload = '',
		poster = '',
		...defaultProps
	} = props;

	if (AtrcVideoIsHtml5(url)) {
		return (
			<video
				className={classnames(
					'at-vid',
					className,
					variant ? 'at-vid-' + variant : ''
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
	}
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
		);
	}
	if (AtrcVideoIsVimeo(url)) {
		const vimeoUrl = onSettings
			? vimeoVideoUrl({
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
