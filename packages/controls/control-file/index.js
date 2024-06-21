import React from 'react';

/*Attributes Structure
Type Object
{
    frm: '',
    data: [
        {
            id: '',
            url: '',
        },
        {
            id: '',
            url: '',
        },
    ],
}

map(obj, (currentValue, currentKey) => ( { value: key, label: key } ))

wp_enqueue_media(); is needed to work this
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useMemo, useState } from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import classnames from 'classnames';

import { BsPlus, BsTrash } from 'react-icons/bs';

import { cloneDeep, omit } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/* Molecules */
import AtrcNotice from '../../molecules/notice';
import AtrcButtonGroup from '../../molecules/button-group';
import AtrcPreviewFile from '../../molecules/preview-file';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlText from '../control-text';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcPanelRow from '../../molecules/panel-row';

/*Local*/
/* urlOnly display a text url only
buttonOnly display a button only
*/
const SelfHostedFile = (props) => {
	const {
		type = '',
		value = {
			frm: '',
			data: [],
		},
		addButtonProps = {},
		removeButtonProps = {},
		frameProps,
		onChange = () => {},
	} = props;

	const { frm = '', data = [] } = value;

	if (!(typeof wp !== 'undefined' && wp.media)) {
		return (
			<AtrcNotice isDismissible={false}>
				{__('Add wp_enqueue_media(); on the page', 'atrc-prefix-atrc')}
			</AtrcNotice>
		);
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const memoFrameProps = useMemo(() => {
		if (frameProps) {
			return frameProps;
		}
		return {
			title: __('Select or upload file', 'atrc-prefix-atrc'),
			button: {
				text: __('Select', 'atrc-prefix-atrc'),
			},
			multiple: false,
			library: {
				type: 'image',
			},
		};
	}, [frameProps]);

	const openMediaUploadFrame = () => {
		const frame = wp.media(cloneDeep(memoFrameProps));

		frame.on('select', () => {
			const attachments = frame.state().get('selection').toJSON();
			setMedia(attachments);
		});

		frame.open();
	};

	const setMedia = (media) => {
		if (!media || !media[0].id) {
			return;
		}
		const newProps = {
			frm: value.frm || '',
			data: [],
		};

		if (memoFrameProps.multiple) {
			newProps.data = media.slice(0);
		} else {
			newProps.data.push(media[0]);
		}
		onChange(newProps);
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const files = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			return data && '' === frm
				? data.map((obj) => getMedia(obj.id, { context: 'view' }))
				: null;
		},
		[data, frm]
	);

	if (frm !== '') {
		return null;
	}

	return (
		<AtrcPanelRow
			className={classnames(
				AtrcPrefix('control-file-self-hosted'),
				'at-flx-col',
				'at-al-itm-st'
			)}>
			{!['urlOnly', 'buttonOnly'].includes(type) && files
				? files.map((obj, key) => (
						<AtrcPreviewFile
							fileName={obj && obj.source_url}
							key={key}
						/>
				  ))
				: null}
			<AtrcButtonGroup>
				<AtrcButton
					hasIcon={true}
					variant='primary'
					onClick={openMediaUploadFrame}
					{...omit(addButtonProps, 'text')}>
					<AtrcIcon
						type='bootstrap'
						icon={BsPlus}
					/>
					{/* eslint-disable-next-line no-nested-ternary */}
					{addButtonProps.text
						? addButtonProps.text
						: // eslint-disable-next-line no-nested-ternary
						data.length > 0
						? memoFrameProps.multiple
							? __('Replace files', 'atrc-prefix-atrc')
							: __('Replace file', 'atrc-prefix-atrc')
						: memoFrameProps.multiple
						? __('Add files', 'atrc-prefix-atrc')
						: __('Add file', 'atrc-prefix-atrc')}
				</AtrcButton>
				{!['urlOnly', 'buttonOnly'].includes(type) && data.length > 0 ? (
					<AtrcButton
						hasIcon={true}
						variant='danger'
						onClick={() => {
							const newProps = {
								frm: value.frm || '',
								data: [],
							};
							onChange(newProps);
						}}
						{...omit(removeButtonProps, 'text')}>
						<AtrcIcon
							type='bootstrap'
							icon={BsTrash}
						/>
						{removeButtonProps.text
							? removeButtonProps.text
							: // eslint-disable-next-line no-nested-ternary
							memoFrameProps.multiple
							? __('Reset files', 'atrc-prefix-atrc')
							: __('Remove file', 'atrc-prefix-atrc')}
					</AtrcButton>
				) : null}
			</AtrcButtonGroup>
		</AtrcPanelRow>
	);
};

const ExternalFile = (props) => {
	const { value = {}, onChange = () => {} } = props;

	const { data } = value;

	const doOnChange = (newVal) => {
		const newData = [
			{
				url: newVal,
			},
		];
		const clonedValue = cloneDeep(value);
		clonedValue.data = newData;
		onChange(clonedValue);
	};

	return (
		<AtrcPanelRow>
			{data && data[0] && data[0].url ? (
				<AtrcPreviewFile src={data[0].url} />
			) : null}

			<AtrcControlText
				label={__('File URL', 'atrc-prefix-atrc')}
				value={data && data[0] && data[0].url}
				type='url'
				onChange={doOnChange}
			/>
		</AtrcPanelRow>
	);
};

const AtrcControlFile = (props) => {
	const {
		label = '',
		value,
		variant = '',
		className = '',
		type = '',
		onChange = () => {},
		allowSource = true,
		allowSelf = true,
		allowExternal = true,
		frameProps,
		selectSourceProps = {},
		addButtonProps,
		removeButtonProps,
		...defaultProps
	} = props;

	const [frm, setMediaFrom] = useState(value.frm);

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		if ('frm' === type) {
			setMediaFrom(newVal);
		}
		onChange(valueCloned);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-file'),
				'at-flx-grw-1',
				className,
				variant ? AtrcPrefix('ctrl-file') + '-' + variant : '',
				'urlOnly' === type ? 'at-flx at-al-itm-end at-jfy-cont-btw at-gap' : ''
			)}
			{...defaultProps}>
			{!['urlOnly', 'buttonOnly'].includes(type) && label ? (
				<AtrcLabel>{label}</AtrcLabel>
			) : null}
			{['urlOnly'].includes(type) ? (
				<AtrcControlText
					label={label}
					value={value && value.data && value.data[0] && value.data[0].url}
					type='url'
					onChange={(newVal) => {
						const valueCloned = cloneDeep(value);
						if (!('frm' in valueCloned)) {
							valueCloned.frm = '';
						}
						if (!('data' in valueCloned)) {
							valueCloned.data = [];
						}
						if (!valueCloned.data[0]) {
							valueCloned.data[0] = {};
						}
						valueCloned.data[0].url = newVal;
						onChange(valueCloned);
					}}
					resetProps={{
						className: classnames('at-gap', 'at-flx-grw-1'),
					}}
				/>
			) : null}
			{!['urlOnly', 'buttonOnly'].includes(type) && allowSource ? (
				<AtrcControlSelect
					label={__('File source', 'atrc-prefix-atrc')}
					value={frm}
					options={[
						{
							label: __('Self hosted', 'atrc-prefix-atrc'),
							value: '',
						},
						{
							label: __('External', 'atrc-prefix-atrc'),
							value: 'external',
						},
					]}
					onChange={(newVal) => setAttr(newVal, 'frm')}
					{...selectSourceProps}
				/>
			) : null}
			{allowSelf && !frm ? (
				<SelfHostedFile
					value={value}
					onChange={onChange}
					type={type}
					frameProps={frameProps}
					addButtonProps={addButtonProps}
					removeButtonProps={removeButtonProps}
					{...defaultProps}
				/>
			) : null}
			{allowExternal && 'external' === frm ? (
				<ExternalFile
					value={value}
					onChange={onChange}
				/>
			) : null}
		</AtrcWrap>
	);
};

export default AtrcControlFile;
