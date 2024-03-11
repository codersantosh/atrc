/*Attributes Structure
Type Object
{
    frm = '',
    id = 0,
    url ='',
    onSettings = false,
    autoplay ='',
    ctrl ='',
    loop ='',
    muted ='',
    playsInline ='',
    preload ='',
    psrFrm ='',
    psrId ='',
    psrSz ='',
    psrUrl ='',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useCallback, useEffect, useMemo } from '@wordpress/element';

import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import classnames from 'classnames';

import { BsCameraVideo, BsTrash } from 'react-icons/bs';

import { isEmpty, map, cloneDeep } from 'lodash';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcVideo from '../../atoms/video';
import {
	AtrcVideoIsHtml5,
	AtrcVideoIsYoutube,
	AtrcVideoIsVimeo,
} from '../../atoms/video';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlText from '../control-text';
import AtrcControlToggle from '../control-toggle';
import AtrcControlImg from '../control-img';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcTooltip from '../../molecules/tooltip';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const SelfHostedVideo = (props) => {
	const { value = {}, onChange = () => {} } = props;

	const {
		frm = '',
		id = null,
		url = '',
		autoplay = false,
		ctrl = false,
		loop = false,
		muted = false,
		preload = 'auto',
		psrUrl = '',
	} = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setAttrs = (newVals) => {
		let valueCloned = cloneDeep(value);

		valueCloned = {
			...valueCloned,
			...newVals,
		};

		onChange(valueCloned);
	};

	const setMedia = (media) => {
		if (!media || !media.id) {
			return;
		}

		const newVals = {
			id: media.id,
		};
		newVals.url = media.url;

		setAttrs(newVals);
	};

	const video = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			return id && '' === frm ? getMedia(id, { context: 'view' }) : null;
		},
		[id, frm]
	);

	const videoUrl = useMemo(() => {
		if (video && video.source_url) {
			return video.source_url;
		}
		return url;
	}, [video]);

	/*if new image url and old image URL is not same, update rl*/
	useEffect(() => {
		if (videoUrl && videoUrl !== url) {
			setAttr(videoUrl, 'url');
		}
	}, [videoUrl]);

	if (frm !== '') {
		return null;
	}

	return (
		<MediaUploadCheck>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcWrap
					className={classnames(
						AtrcPrefix('ctrl-vid-slf-hosted'),
						'at-pos',
						'at-flx-grw-1'
					)}>
					<AtrcVideo
						url={videoUrl}
						autoplay={autoplay}
						controls={ctrl}
						loop={loop}
						muted={muted}
						preload={preload}
						poster={psrUrl}
					/>
					<AtrcPanelRow className={classnames('at-m')}>
						<MediaUpload
							onSelect={setMedia}
							allowedTypes={['video']}
							title={__(
								'Select or upload background media',
								'atrc-prefix-atrc'
							)}
							value={id}
							render={({ open }) => (
								<>
									<AtrcButton
										variant='uploads'
										className={classnames(
											'at-gap',
											'at-flx',
											'at-al-itm-ctr',
											'at-jfy-cont-ctr',
											'at-w'
										)}
										onClick={open}>
										<AtrcIcon
											type='bootstrap'
											icon={BsCameraVideo}
										/>
										{id
											? __('Replace video', 'atrc-prefix-atrc')
											: __('Add video', 'atrc-prefix-atrc')}
									</AtrcButton>
									{id ? (
										<AtrcTooltip
											className={classnames(
												AtrcPrefix('uploads-del'),
												'at-pos'
											)}
											text={__('Remove media', 'atrc-prefix-atrc')}>
											<AtrcButton
												className={classnames(
													'at-bdr-rad',
													'at-flx',
													'at-w',
													'at-h',
													'at-al-itm-ctr',
													'at-jfy-cont-ctr'
												)}
												variant='delete'
												onClick={() =>
													setAttrs({
														id: null,
														url: null,
													})
												}>
												<AtrcIcon
													type='bootstrap'
													icon={BsTrash}
												/>
											</AtrcButton>
										</AtrcTooltip>
									) : null}
								</>
							)}
						/>
					</AtrcPanelRow>
				</AtrcWrap>
			</AtrcPanelRow>
		</MediaUploadCheck>
	);
};

const ExternalVideo = (props) => {
	const { value = {}, onChange = () => {} } = props;

	const {
		frm = '',
		url = '',
		onSettings = false,
		autoplay = false,
		ctrl = false,
		loop = false,
		muted = muted,
	} = value;

	if (frm === '') {
		return null;
	}

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Video URL', 'atrc-prefix-atrc')}
					value={url}
					type='url'
					onChange={onChange}
				/>
			</AtrcPanelRow>
			<AtrcVideo
				className={classnames('at-m')}
				url={url}
				onSettings={onSettings}
				autoplay={autoplay}
				controls={ctrl}
				loop={loop}
				muted={muted}
			/>
		</>
	);
};

const VideoSettings = (props) => {
	const {
		value = {},
		onChange = () => {},
		allowAutoplay = true,
		allowLoop = true,
		allowMuted = true,
		allowControls = true,
		allowPlaysInline = true,
		allowPreload = true,
		allowPoster = true,
		allowMobile = false,
	} = props;

	const {
		autoplay = false,
		ctrl = false,
		loop = false,
		muted = false,
		playsInline = false,
		preload = 'auto',
		psrFrm = '',
		psrId = '',
		psrSz = '',
		psrUrl = '',
		onBgVidMb = false,
	} = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const resetAttr = (type) => {
		const valueCloned = cloneDeep(value);

		delete valueCloned[type];
		onChange(valueCloned);
	};

	const setPoster = (newVal) => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.psrFrm;
		delete valueCloned.psrId;
		delete valueCloned.psrUrl;
		delete valueCloned.psrSz;

		if (newVal.frm) {
			valueCloned.psrFrm = newVal.frm;
		}
		if (newVal.id) {
			valueCloned.psrId = newVal.id;
		}
		if (newVal.url) {
			valueCloned.psrUrl = newVal.url;
		}
		if (newVal.size) {
			valueCloned.psrSz = newVal.size;
		}

		onChange(valueCloned);
	};

	const resetPoster = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.psrFrm;
		delete valueCloned.psrId;
		delete valueCloned.psrUrl;
		delete valueCloned.psrSz;
		onChange(valueCloned);
	};

	const autoPlayHelpText = __(
		'Autoplay may cause usability issues for some users.',
		'atrc-prefix-atrc'
	);
	const getAutoplayHelp = useCallback((checked) => {
		return checked ? autoPlayHelpText : null;
	}, []);

	const hasTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		return !!value[tab];
	};

	const AllTabs = [];
	if (allowAutoplay) {
		AllTabs.push({
			name: 'autoplay',
			title: __('Autoplay', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('autoplay'),
			onDeselect: () => resetAttr('autoplay'),
		});
	}

	if (allowLoop) {
		AllTabs.push({
			name: 'loop',
			title: __('Loop', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('loop'),
			onDeselect: () => resetAttr('loop'),
		});
	}

	if (allowMuted) {
		AllTabs.push({
			name: 'muted',
			title: __('Muted', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('muted'),
			onDeselect: () => resetAttr('muted'),
		});
	}

	if (allowControls) {
		AllTabs.push({
			name: 'ctrl',
			title: __('Controls', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('ctrl'),
			onDeselect: () => resetAttr('ctrl'),
		});
	}
	if (allowPlaysInline) {
		AllTabs.push({
			name: 'playsInline',
			title: __('Play inline', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('playsInline'),
			onDeselect: () => resetAttr('playsInline'),
		});
	}
	if (allowPreload) {
		AllTabs.push({
			name: 'preload',
			title: __('Preload', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('preload'),
			onDeselect: () => resetAttr('preload'),
		});
	}
	if (allowPoster) {
		AllTabs.push({
			name: 'psr',
			title: __('Poster', 'atrc-prefix-atrc'),
			hasValue: !!(psrFrm || psrId || psrSz || psrUrl),
			onDeselect: () => resetPoster(),
		});
	}
	if (allowMobile) {
		AllTabs.push({
			name: 'onBgVidMb',
			title: __('Video on mobile', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('onBgVidMb'),
			onDeselect: () => resetAttr('onBgVidMb'),
		});
	}

	if (
		!allowAutoplay &&
		!allowLoop &&
		!allowMuted &&
		!allowControls &&
		!allowPlaysInline &&
		!allowPreload &&
		!allowPoster &&
		!allowMobile
	) {
		return null;
	}

	return (
		<AtrcPanelTools
			label={__('Settings', 'atrc-prefix-atrc')}
			resetAll={() => onChange({})}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => {
					if ('autoplay' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlToggle
									label={__('Autoplay', 'atrc-prefix-atrc')}
									checked={autoplay}
									onChange={() => setAttr(!autoplay, 'autoplay')}
									help={getAutoplayHelp}
								/>
							</AtrcPanelRow>
						);
					}
					if ('loop' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlToggle
									label={__('Loop', 'atrc-prefix-atrc')}
									checked={loop}
									onChange={() => setAttr(!loop, 'loop')}
								/>
							</AtrcPanelRow>
						);
					}
					if ('muted' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlToggle
									label={__('Muted', 'atrc-prefix-atrc')}
									checked={muted}
									onChange={() => setAttr(!muted, 'muted')}
								/>
							</AtrcPanelRow>
						);
					}
					if ('ctrl' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlToggle
									label={__('Playback controls', 'atrc-prefix-atrc')}
									checked={ctrl}
									onChange={() => setAttr(!ctrl, 'ctrl')}
								/>
							</AtrcPanelRow>
						);
					}
					if ('playsInline' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlToggle
									label={__('Play inline', 'atrc-prefix-atrc')}
									checked={playsInline}
									onChange={() => setAttr(!playsInline, 'playsInline')}
								/>
							</AtrcPanelRow>
						);
					}
					if ('preload' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlSelect
									label={__('Preload', 'atrc-prefix-atrc')}
									wrapProps={{
										className: 'at-flx-grw-1',
									}}
									value={preload}
									options={[
										{
											label: __('Auto', 'atrc-prefix-atrc'),
											value: 'auto',
										},
										{
											label: __('Metadata', 'atrc-prefix-atrc'),
											value: 'metadata',
										},
										{
											label: __('None', 'atrc-prefix-atrc'),
											value: 'none',
										},
									]}
									onChange={(newVal) => setAttr(newVal, 'preload')}
								/>
							</AtrcPanelRow>
						);
					}
					if ('psr' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlImg
									label={__('Poster', 'atrc-prefix-atrc')}
									value={{
										frm: psrFrm,
										id: psrId,
										sz: psrSz,
										url: psrUrl,
									}}
									allowDetails={false}
									onChange={setPoster}
								/>
							</AtrcPanelRow>
						);
					}
					if ('onBgVidMb' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlToggle
									label={__('Enable video on mobile', 'atrc-prefix-atrc')}
									checked={onBgVidMb}
									onChange={() => setAttr(!onBgVidMb, 'onBgVidMb')}
								/>
							</AtrcPanelRow>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};

const AtrcControlVideo = (props) => {
	const {
		label = '',
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		allowSource = true,
		allowSelf = true,
		allowExternal = true,
		allowSettings = true,
		allowAutoplay = true,
		allowLoop = true,
		allowMuted = true,
		allowControls = true,
		allowPlaysInline = true,
		allowPreload = true,
		allowPoster = true,
		allowMobile = true,
		...defaultProps
	} = props;

	const { frm = '', onSettings = false } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setVideoUrl = (newVal) => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.id;
		delete valueCloned.url;

		valueCloned.url = newVal;
		onChange(valueCloned);
	};

	useEffect(() => {
		if ('external' !== frm && 'onSettings' in value) {
			const valueCloned = cloneDeep(value);

			delete value.onSettings;
			onChange(valueCloned);
		}
	}, [frm]);

	const isSettingOn = () => {
		if (!value.url) {
			return false;
		}
		if (
			!(
				AtrcVideoIsHtml5(value.url) ||
				AtrcVideoIsYoutube(value.url) ||
				AtrcVideoIsVimeo(value.url)
			)
		) {
			return false;
		}

		if ('external' === frm) {
			return onSettings && allowSettings;
		} else if (allowSettings) {
			return true;
		}
		return false;
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-vid'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-vid') + '-' + variant : ''
			)}
			{...defaultProps}>
			{/* {label && <AtrcLabel>{label}</AtrcLabel>} */}
			{allowSource && (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlSelect
						label={__('Video source', 'atrc-prefix-atrc')}
						wrapProps={{
							className: 'at-flx-grw-1',
						}}
						value={frm}
						options={[
							{
								label: __('Self hosted', 'atrc-prefix-atrc'),
								value: '',
							},
							{
								label: __('URL', 'atrc-prefix-atrc'),
								value: 'external',
							},
						]}
						onChange={(newVal) => setAttr(newVal, 'frm')}
					/>
				</AtrcPanelRow>
			)}
			{allowSelf && (
				<SelfHostedVideo
					value={value}
					onChange={onChange}
				/>
			)}
			{allowExternal && (
				<ExternalVideo
					value={value}
					onChange={setVideoUrl}
				/>
			)}
			{'external' === frm && allowSettings ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlToggle
						label={__('Enable video settings', 'atrc-prefix-atrc')}
						help={__(
							'Enabling this setting will disable all video settings from the provided URL but will apply the defined settings.',
							'atrc-prefix-atrc'
						)}
						checked={onSettings}
						onChange={() => setAttr(!onSettings, 'onSettings')}
					/>
				</AtrcPanelRow>
			) : null}
			{isSettingOn() ? (
				<VideoSettings
					value={value}
					onChange={onChange}
					allowAutoplay={allowAutoplay}
					allowLoop={allowLoop}
					allowMuted={allowMuted}
					allowControls={allowControls}
					allowPlaysInline={allowPlaysInline}
					allowPreload={allowPreload}
					allowPoster={allowPoster}
					allowMobile={allowMobile}
				/>
			) : null}
		</AtrcWrap>
	);
};

export default AtrcControlVideo;
