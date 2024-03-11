/*Attributes Structure
Type Object
{
    frm: '',
    id: 0,
    url: '',
    autoplay: '',
    ctrl: '',
    loop: '',
    muted: '',
    preload: '',
    ctrlLs: '',
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

import { BsFillFileMusicFill, BsXCircleFill } from 'react-icons/bs';

import { isEmpty, map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcAudio from '../../atoms/audio';
import { AtrcAudioIsHtml5 } from '../../atoms/audio';

/* Controls */
import AtrcControlText from '../control-text';
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcButtonGroup from '../../molecules/button-group';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const SelfHostedAudio = (props) => {
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
		ctrlLs = '',
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

	const audio = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			return id && '' === frm ? getMedia(id, { context: 'view' }) : null;
		},
		[id, frm]
	);

	const audioUrl = useMemo(() => {
		if (audio && audio.source_url) {
			return audio.source_url;
		}
		return url;
	}, [audio]);

	/*if new Audio url and old Audio URL is not same, update rl*/
	useEffect(() => {
		if (audioUrl && audioUrl !== url) {
			setAttr(audioUrl, 'url');
		}
	}, [audioUrl]);

	if (frm !== '') {
		return null;
	}

	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<MediaUploadCheck>
				<AtrcWrap
					className={classnames(
						AtrcPrefix('ctrl-aud-slf-hosted'),
						'at-flx-grw-1'
					)}>
					<AtrcAudio
						className={classnames('at-m')}
						url={audioUrl}
						autoplay={false}
						controls={ctrl}
						loop={loop}
						muted={muted}
						preload={preload}
						controlsList={ctrlLs}
					/>

					<AtrcPanelRow className={classnames('at-m')}>
						<MediaUpload
							onSelect={setMedia}
							allowedTypes={['audio']}
							title={__(
								'Select or upload background media',
								'atrc-prefix-atrc'
							)}
							value={id}
							render={({ open }) => (
								<AtrcButtonGroup className='at-flx-grw-1'>
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
											type='ri'
											icon={BsFillFileMusicFill}
										/>
										{id
											? __('Replace audio', 'atrc-prefix-atrc')
											: __('Add audio', 'atrc-prefix-atrc')}
									</AtrcButton>
									{id ? (
										<AtrcButton
											variant='uploads'
											className={classnames(
												'at-gap',
												'at-flx',
												'at-al-itm-ctr',
												'at-jfy-cont-ctr',
												'at-w'
											)}
											onClick={() =>
												setAttrs({
													id: null,
													url: null,
												})
											}>
											<AtrcIcon
												className={classnames(AtrcPrefix('mr-5'))}
												type='bi'
												icon={BsXCircleFill}
											/>
											{__('Remove media', 'atrc-prefix-atrc')}
										</AtrcButton>
									) : null}
								</AtrcButtonGroup>
							)}
						/>
					</AtrcPanelRow>
				</AtrcWrap>
			</MediaUploadCheck>
		</AtrcPanelRow>
	);
};

const ExternalAudio = (props) => {
	const { value = {}, onChange = () => {} } = props;

	const {
		frm = '',
		url = '',
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
					label={__('Audio URL', 'atrc-prefix-atrc')}
					value={url}
					type='url'
					onChange={onChange}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcAudio
					url={url}
					autoplay={autoplay}
					ctrl={ctrl}
					loop={loop}
					muted={muted}
				/>
			</AtrcPanelRow>
		</>
	);
};

const AudioSettings = (props) => {
	const {
		value = {},
		onChange = () => {},
		allowAutoplay = true,
		allowLoop = true,
		allowMuted = true,
		allowControls = true,
		allowPreload = true,
	} = props;

	const {
		autoplay = false,
		ctrl = false,
		loop = false,
		muted = false,
		preload = 'auto',
		ctrlLs = '',
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

	if (allowPreload) {
		AllTabs.push({
			name: 'preload',
			title: __('Preload', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('preload'),
			onDeselect: () => resetAttr('preload'),
		});
	}

	if (allowPreload) {
		AllTabs.push({
			name: 'ctrlLs',
			title: __('Controlslist', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('ctrlLs'),
			onDeselect: () => resetAttr('ctrlLs'),
		});
	}

	if (
		!allowAutoplay &&
		!allowLoop &&
		!allowMuted &&
		!allowControls &&
		!allowPreload
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
									label={__('Playback ctrl', 'atrc-prefix-atrc')}
									checked={ctrl}
									onChange={() => setAttr(!ctrl, 'ctrl')}
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

					if ('ctrlLs' === tab) {
						return (
							<AtrcPanelRow
								className={classnames('at-m')}
								key={iDx}>
								<AtrcControlSelect
									label={__('Controlslist', 'atrc-prefix-atrc')}
									wrapProps={{
										className: 'at-flx-grw-1',
									}}
									value={ctrlLs}
									multiValType='string'
									options={[
										{
											label: __('nodownload', 'atrc-prefix-atrc'),
											value: 'nodownload',
										},
										{
											label: __('nofullscreen', 'atrc-prefix-atrc'),
											value: 'nofullscreen',
										},
										{
											label: __('noremoteplayback', 'atrc-prefix-atrc'),
											value: 'noremoteplayback',
										},
									]}
									onChange={(newVal) => setAttr(newVal, 'ctrlLs')}
									isMulti
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

const AtrcControlAudio = (props) => {
	const {
		label = __('Audio', 'atrc-prefix-atrc'),
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
		allowPreload = true,
		...defaultProps
	} = props;

	const { frm = '' } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setAudioUrl = (newVal) => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.id;
		delete valueCloned.url;

		valueCloned.url = newVal;
		onChange(valueCloned);
	};

	const isSettingOn = () => {
		if (!value.url) {
			return false;
		}
		if (!AtrcAudioIsHtml5(value.url)) {
			return false;
		}
		if (allowSettings) {
			return true;
		}
		return false;
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-aud'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-aud') + '-' + variant : ''
			)}
			{...defaultProps}>
			{label && <AtrcLabel>{label}</AtrcLabel>}
			{allowSource && (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlSelect
						label={__('Audio source', 'atrc-prefix-atrc')}
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
				<SelfHostedAudio
					value={value}
					onChange={onChange}
				/>
			)}
			{allowExternal && (
				<ExternalAudio
					value={value}
					onChange={setAudioUrl}
				/>
			)}
			{isSettingOn() ? (
				<AudioSettings
					value={value}
					onChange={onChange}
					allowAutoplay={allowAutoplay}
					allowLoop={allowLoop}
					allowMuted={allowMuted}
					allowControls={allowControls}
					allowPreload={allowPreload}
				/>
			) : null}
		</AtrcWrap>
	);
};

export default AtrcControlAudio;
