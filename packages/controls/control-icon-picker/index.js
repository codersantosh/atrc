import React from 'react';

/*
value object or array of object = {
    id:'',
    svg:''
}
[
    {
        id:'',
        svg:''
    }
    {
        id:'',
        svg:''
    }
]
options = [
			{
				label: __('WordPress icons', 'atrc-prefix-atrc'),
				id: 'wp',
				icons: [
					{
						id: '',
						svg: '',
					},
				],
			},
			{
				label: __('Fontawesome icons', 'atrc-prefix-atrc'),
				id: 'fa',
				icons: [
					{
						id: '',
						svg: '',
					},
				],
			},
		]
*/
/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState, useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray, isObject, map } from 'lodash';
import { BsEyedropper } from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon, { AtrcIconSvg } from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Molecules */
import AtrcModalToggle from '../../molecules/modal-toggle';
import AtrcButtonGroup from '../../molecules/button-group';
import AtrcSearch from '../../molecules/search';

/* Wireframes */
import AtrcWireFrameSidebarContent from '../../wireframe/sidebar-content';
import AtrcWireFrameHeaderContentFooter from '../../wireframe/header-content-footer';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const IconPickerToggle = ({ value, label = '', onToggle, onRemove }) => {
	if (isArray(value) && value.length) {
		//after icon is selected
		return value.map((valObj) => (
			<AtrcButtonGroup
				className={classnames('at-bdr', 'at-p', 'at-al-itm-strh')}>
				<AtrcButton
					className={classnames(
						AtrcPrefix('btn-icon-selected'),
						'at-h',
						'at-w',
						'at-p',
						'at-m'
					)}
					onClick={onToggle}>
					<AtrcIconSvg
						className='at-svg at-w at-h'
						svg={valObj.svg}
					/>
				</AtrcButton>
				<AtrcButton
					variant='danger'
					onClick={() => onRemove(valObj.id)}>
					{__('Remove icon', 'atrc-prefix-atrc')}
				</AtrcButton>
			</AtrcButtonGroup>
		));
	}

	return (
		//icon picker placholder
		<AtrcButton
			className={classnames(
				AtrcPrefix('btn-icon-selector'),
				'at-h',
				'at-w',
				'at-p',
				'at-m'
			)}
			variant='outline-light'
			onClick={onToggle}>
			<AtrcIcon
				type='bootstrap'
				icon={BsEyedropper}
			/>
		</AtrcButton>
	);
};

const AtrcControlIconPicker = (props) => {
	let {
		allIcons = {
			on: true,
			label: __('All icons', 'atrc-prefix-atrc'),
		},
		isMulti = false,
		children = '',
		label = '',
		value,
		options,
		onChange = () => {},
		closeOnIconSelect = true,
		modalProps = {},
		...defaultProps
	} = props;

	const [iconType, setIconType] = useState('all');

	/* for search */
	const [query, setQuery] = useState('');

	const foundIcons = useMemo(() => {
		if (!query) {
			return options;
		}

		const lowerCaseQuery = query.toLowerCase();

		return options
			.map((group) => ({
				...group,
				icons: group.icons.filter((icon) =>
					icon.id.toLowerCase().includes(lowerCaseQuery)
				),
			}))
			.filter((group) => group.icons.length > 0);
	}, [query]);

	const selectedIcons = useMemo(() => {
		const selectedIdsVal = {
			value: null,
			ids: [],
		};

		if (!value) {
			return selectedIdsVal;
		}
		if (isArray(value) && value.length) {
			const selectedIDs = value.map((valObj) => valObj.id);
			selectedIdsVal.value = [...value];
			selectedIdsVal.ids = selectedIDs;
		} else if (isObject(value) && value.id) {
			selectedIdsVal.value = [
				{
					...value,
				},
			];
			selectedIdsVal.ids = [value.id];
		}
		return selectedIdsVal;
	}, [value]);

	return (
		<AtrcModalToggle
			renderToggle={(args) => {
				if (children) {
					return children(args);
				}
				const { isOpen, onToggle } = args;
				return (
					<>
						{label && <AtrcLabel>{label}</AtrcLabel>}
						<AtrcWrap
							className={classnames(
								AtrcPrefix('modal-icon-picker-preview'),
								'at-flx',
								'at-al-itm-ctr',
								'at-gap'
							)}
							aria-expanded={isOpen}>
							<IconPickerToggle
								label={label}
								value={selectedIcons.value}
								onToggle={onToggle}
								onRemove={(idToRemove) => {
									if (isMulti) {
										if (isArray(value) && value.length) {
											const newValue = value.filter(
												(obj) => obj.id !== idToRemove
											);
											onChange(newValue);
										} else {
											onChange(null);
										}
									} else {
										onChange(null);
									}
								}}
							/>
						</AtrcWrap>
					</>
				);
			}}
			renderContent={({ onToggle }) => (
				<AtrcWireFrameSidebarContent
					wrapProps={{
						tag: 'section',
					}}
					rowProps={{
						variant: 'm-0',
					}}
					renderSidebar={
						<AtrcButtonGroup variant='vertical'>
							{allIcons && allIcons.on ? (
								<AtrcButton
									isActive={'all' === iconType}
									onClick={() => setIconType('all')}>
									{allIcons.label || __('All icons', 'atrc-prefix-atrc')}
								</AtrcButton>
							) : null}
							{foundIcons &&
								foundIcons.map((opt) => (
									<AtrcButton
										isActive={opt.id === iconType}
										onClick={() => setIconType(opt.id)}>
										{opt.label}
									</AtrcButton>
								))}
						</AtrcButtonGroup>
					}
					renderContent={
						<AtrcWireFrameHeaderContentFooter
							renderHeader={
								<AtrcSearch
									type='keyDown'
									buttonProps={{
										variant: 'primary',
									}}
									doSearch={(input) => setQuery(input)}
								/>
							}
							renderContent={
								<AtrcWrap
									className={classnames(AtrcPrefix('modal-icon-picker-cont'))}>
									{!foundIcons ? (
										<AtrcText>
											{__('No icons found!', 'atrc-prefix-atrc')}
										</AtrcText>
									) : (
										foundIcons.map((opt) => (
											<>
												{'all' === iconType || opt.id === iconType ? (
													<>
														<AtrcLabel className={classnames('at-m', 'at-blk')}>
															{opt.label}
														</AtrcLabel>
														{map(opt.icons, (icon) => (
															<AtrcButton
																className='at-h at-w at-p at-m'
																variant='secondary'
																isActive={selectedIcons.ids.includes(icon.id)}
																onClick={() => {
																	if (isMulti) {
																		if (isArray(value) && value.length) {
																			const clonedValue = [...value];
																			clonedValue.push(icon);
																			onChange(clonedValue);
																		} else {
																			onChange([icon]);
																		}
																	} else {
																		onChange(icon);
																	}
																	if (closeOnIconSelect) {
																		onToggle();
																	}
																}}>
																<AtrcIconSvg
																	className='at-svg at-w at-h'
																	svg={icon.svg}
																/>
															</AtrcButton>
														))}
													</>
												) : null}
											</>
										))
									)}
								</AtrcWrap>
							}
							allowHeaderRow={false}
							allowHeaderCol={false}
							allowContentRow={false}
							allowContentCol={false}
						/>
					}
					contentProps={{
						tag: 'div',
						contentCol: 'at-col-md-10',
					}}
					sidebarProps={{
						sidebarCol: 'at-col-md-2',
					}}
				/>
			)}
			modalProps={modalProps}
			{...defaultProps}
		/>
	);
};
export default AtrcControlIconPicker;
