import React from 'react';

/*Attributes Structure
Type Object
{
    frm = '',
    id = 0,
    url ='',
    alt ='',
    ttl ='',
    sz ='',
    w ='',
    h ='',
}

map(obj, (currentValue, currentKey) => ( { value: key, label: key } ))
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useMemo, useState, useRef } from '@wordpress/element';

import {
	MediaUpload,
	MediaUploadCheck,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

/*Library*/
import classnames from 'classnames';
import { BsImage, BsTrash } from 'react-icons/bs';

import { isEmpty, map, reduce, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcImg from '../../atoms/img';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlText from '../control-text';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcNotice from '../../molecules/notice';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcTooltip from '../../molecules/tooltip';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const SelfHostedImg = (props) => {
	const isFirstRender = useRef(true);

	if (!(typeof wp !== 'undefined' && wp.media)) {
		return (
			<AtrcNotice isDismissible={false}>
				{__('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc')}
			</AtrcNotice>
		);
	}

	const { value = {}, onChange = () => {} } = props;

	const {
		frm = '',
		id = null,
		sizes = null,
		srcset = '',
		alt = null,
		ttl = null,
		sz = 'full',
		w = null,
		h = null,
		url = '',
	} = value;

	/* for local management */
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [media, setMedia] = useState(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [imgSz, setImgSize] = useState(sz);

	/* On change handler */
	const setAttrs = (newVals) => {
		const valueCloned = cloneDeep(value);

		onChange({
			...valueCloned,
			...newVals,
		});
	};

	/* Run at first, only once for first time*/
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (id && !media) {
			/* Need to use wp.media becuase const { getMedia } = select(coreStore); doesnot provide same and alos required properties */
			wp.media.attachment(id).fetch({
				success(attachment) {
					if (attachment.attributes) {
						setMedia(attachment.attributes);
					}
				},
			});
		}
	}, []);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const imageSizes = useSelect(
		(select) => {
			const settings = select(blockEditorStore).getSettings();
			return id && '' === frm ? settings.imageSizes : null;
		},
		[id, frm]
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const imageSizesOptions = useMemo(() => {
		if (media && media.sizes) {
			const keyValues = reduce(
				imageSizes,
				(accumulator, { name, slug }) => {
					accumulator[slug] = { value: slug, label: name };
					return accumulator;
				},
				{}
			);

			return {
				keys: Object.keys(keyValues),
				options: reduce(
					media.sizes,
					(accumulator, currentValue, currentKey) => {
						if (keyValues[currentKey]) {
							accumulator.push(keyValues[currentKey]);
						} else {
							accumulator.push({ value: currentKey, label: currentKey });
						}
						return accumulator;
					},
					[]
				),
			};
		}
		return null;
	}, [imageSizes, media]);

	/* set attributes when media change */
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
		} else {
			if (!media || !media.id) {
				return;
			}

			const newVals = {
				id: media.id,
			};

			let mediaSize = imgSz;
			if (!mediaSize) {
				mediaSize = 'full';
			}
			if (media.sizes && media.sizes[mediaSize] && media.sizes[mediaSize].url) {
				newVals.url =
					media.sizes && media.sizes[mediaSize] && media.sizes[mediaSize].url
						? media.sizes[mediaSize].url
						: media.url;
			} else {
				newVals.url = media.url;
			}

			if (media.sizes[mediaSize]) {
				const { width, height, abSrcset } = media.sizes[mediaSize];

				newVals.w = width + 'px';
				newVals.h = height + 'px';
				newVals.srcset = abSrcset;
				newVals.sizes = `(max-width: ${width}px) 100vw, ${width}px)`;
			}

			newVals.alt = media.alt;
			newVals.ttl = media.title;
			newVals.sz = mediaSize;
			setAttrs(newVals);
		}
	}, [media, imgSz]);

	if (frm !== '') {
		return null;
	}

	return (
		<AtrcPanelRow className={classnames('at-m')}>
			<MediaUploadCheck>
				<AtrcWrap
					className={classnames(
						AtrcPrefix('ctrl-img-slf-hosted'),
						'at-pos',
						'at-flx-grw-1'
					)}>
					<AtrcImg
						src={url}
						alt={alt}
						title={ttl}
						sizes={sizes}
						srcset={srcset}
						width={w}
						height={h}
					/>
					<AtrcPanelRow className={classnames('at-m')}>
						<MediaUpload
							onSelect={setMedia}
							allowedTypes={['image', 'video']}
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
											icon={BsImage}
										/>
										{id
											? __('Replace media', 'atrc-prefix-atrc')
											: __('Add media', 'atrc-prefix-atrc')}
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
					{imageSizesOptions && imageSizesOptions.options ? (
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcControlSelect
								label={__('Image size', 'atrc-prefix-atrc')}
								wrapProps={{
									className: 'at-flx-grw-1',
								}}
								value={sz}
								defaultValue='full'
								options={imageSizesOptions.options}
								onChange={setImgSize}
							/>
						</AtrcPanelRow>
					) : null}
				</AtrcWrap>
			</MediaUploadCheck>
		</AtrcPanelRow>
	);
};

const ExternalImg = (props) => {
	const { value = {}, onChange = () => {} } = props;

	const { frm = '', url = '', alt = '', ttl = '' } = value;

	if (frm === '') {
		return null;
	}

	return (
		<>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Image URL', 'atrc-prefix-atrc')}
					value={url}
					type='url'
					onChange={onChange}
				/>
			</AtrcPanelRow>
			{url ? (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcImg
						src={url}
						alt={alt}
						title={ttl}
					/>
				</AtrcPanelRow>
			) : null}
		</>
	);
};

const ImgDetails = (props) => {
	const { value = {}, onChange = () => {} } = props;

	const { alt = '', ttl = '' } = value;

	return (
		<AtrcWrap className={classnames(AtrcPrefix('ctrl-img-img-details'))}>
			<AtrcLabel>{__('Image details', 'atrc-prefix-atrc')}</AtrcLabel>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Alt text', 'atrc-prefix-atrc')}
					value={alt}
					onChange={(newVal) => onChange(newVal, 'alt')}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Title', 'atrc-prefix-atrc')}
					value={ttl}
					onChange={(newVal) => onChange(newVal, 'ttl')}
				/>
			</AtrcPanelRow>
		</AtrcWrap>
	);
};

const ImgSettings = (props) => {
	const { value = {}, onChange = () => {}, allowDetails = true } = props;

	const resetDetails = () => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.alt;
		delete valueCloned.ttl;
		onChange(valueCloned);
	};

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const hasTabValue = (tab) => {
		if (!value || isEmpty(value)) {
			return false;
		}

		if (tab === 'details') {
			return !!(value.alt || value.ttl);
		}

		return false;
	};

	const AllTabs = [];

	if (allowDetails) {
		AllTabs.push({
			name: 'details',
			title: __('Image details', 'atrc-prefix-atrc'),
			hasValue: hasTabValue('details'),
			onDeselect: () => resetDetails(),
		});
	}
	if (!allowDetails) {
		return null;
	}

	return (
		<AtrcPanelTools
			label={__('Settings', 'atrc-prefix-atrc')}
			resetAll={() => onChange({})}
			tools={AllTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => {
					if ('details' === tab) {
						return (
							<ImgDetails
								value={value}
								onChange={setAttr}
								key={iDx}
							/>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};

const AtrcControlImg = (props) => {
	const {
		label = '',
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		allowSource = true,
		allowSelf = true,
		allowExternal = true,
		allowDetails = true,
		allowSettings = true,
		...defaultProps
	} = props;

	const { frm = '' } = value;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const setExternal = (newVal) => {
		const valueCloned = cloneDeep(value);

		delete valueCloned.id;
		delete valueCloned.sz;
		delete valueCloned.url;

		valueCloned.url = newVal;
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-img'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-img') + '-' + variant : ''
			)}
			{...defaultProps}>
			{label && <AtrcLabel>{label}</AtrcLabel>}
			{allowSource && (
				<AtrcPanelRow className={classnames('at-m')}>
					<AtrcControlSelect
						label={__('Image source', 'atrc-prefix-atrc')}
						value={frm}
						options={[
							{
								label: __('Self hosted', 'atrc-prefix-atrc'),
								value: '',
							},
							{
								label: __('External', 'atrc-prefix-atrc'),
								value: 'ext',
							},
						]}
						onChange={(newVal) => setAttr(newVal, 'frm')}
					/>
				</AtrcPanelRow>
			)}
			{allowSelf && '' === frm ? (
				<SelfHostedImg
					value={value}
					onChange={onChange}
				/>
			) : null}
			{allowExternal && 'ext' === frm ? (
				<ExternalImg
					value={value}
					onChange={setExternal}
				/>
			) : null}
			{allowSettings && 'ext' === frm && (value.id || value.url) ? (
				<ImgSettings
					value={value}
					onChange={onChange}
					allowDetails={allowDetails}
				/>
			) : null}
		</AtrcWrap>
	);
};

export default AtrcControlImg;
