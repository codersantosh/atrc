/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState, useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, reduce, isArray } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

import AtrcModalToggle from '../modal-toggle';
import AtrcButtonGroup from '../button-group';
import AtrcTooltip from '../tooltip';
import AtrcSearch from '../search';

import {
	AtrcWireFrameSidebarContent,
	AtrcWireFrameHeaderContentFooter,
} from './../../templates/wireframe';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Icons Library === Important */
import * as ReactIconsAllFA from 'react-icons/fa';
import * as WpIconsAllF from '@wordpress/icons';

const getIcon = (value) => {
	if (!value) {
		return null;
	}
	if (ReactIconsAllFA[value]) {
		return ReactIconsAllFA[value];
	}

	if (WpIconsAllF[value]) {
		return WpIconsAllF[value];
	}

	return null;
};

/*Local*/
const AtrcControlIconPicker = (props) => {
	const {
		children = '',
		custom,
		lib = {
			allowed: ['wp', 'fa'],
			selected: [],
		},
		label = '',
		value = [],
		onChange = () => {},
		closeOnIconSelect = false,
		modalProps = {},
		...defaultProps
	} = props;

	const { allowed = [], selected = [] } = lib;

	const [iconType, setIconType] = useState('all');
	const [query, setQuery] = useState('');
	const foundIcons = useMemo(() => {
		if (!query) {
			return {
				wp: WpIconsAllF,
				fa: ReactIconsAllFA,
			};
		}
		return {
			wp: reduce(
				WpIconsAllF,
				(accumulator, currentValue, currentKey) => {
					if (currentKey.toLowerCase().includes(query.toLowerCase())) {
						accumulator[currentKey] = currentValue;
					}
					return accumulator;
				},
				{}
			),
			fa: reduce(
				ReactIconsAllFA,
				(accumulator, currentValue, currentKey) => {
					if (currentKey.toLowerCase().includes(query.toLowerCase())) {
						accumulator[currentKey] = currentValue;
					}
					return accumulator;
				},
				{}
			),
		};
	}, [query]);

	const allowedLib = useMemo(() => {
		return allowed;
	}, [allowed]);

	const selectedLibIcons = useMemo(() => {
		return selected;
	}, [allowed]);

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
						<AtrcTooltip text={__('Select icon', 'atrc-prefix-atrc')}>
							<AtrcButton
								aria-expanded={isOpen}
								variant='icon'
								className={AtrcPrefix('m-5')}
								onClick={onToggle}>
								<AtrcIcon
									type='wp'
									icon={WpIconsAllF.moreVertical}
								/>
							</AtrcButton>
						</AtrcTooltip>
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
							<AtrcTooltip text={__('All icons', 'atrc-prefix-atrc')}>
								<AtrcButton
									isActive={'all' === iconType}
									onClick={() => setIconType('all')}>
									{__('All icons', 'atrc-prefix-atrc')}
								</AtrcButton>
							</AtrcTooltip>
							{selectedLibIcons && selectedLibIcons.length ? (
								<AtrcTooltip text={__('Available icons', 'atrc-prefix-atrc')}>
									<AtrcButton
										isActive={'selectedIcon' === iconType}
										onClick={() => setIconType('selectedIcon')}>
										{__('Available icons', 'atrc-prefix-atrc')}
									</AtrcButton>
								</AtrcTooltip>
							) : (
								<>
									{allowedLib.includes('wp') && (
										<AtrcTooltip
											text={__('WordPress icons', 'atrc-prefix-atrc')}>
											<AtrcButton
												isActive={'wp' === iconType}
												onClick={() => setIconType('wp')}>
												{__('WordPress', 'atrc-prefix-atrc')}
											</AtrcButton>
										</AtrcTooltip>
									)}

									{allowedLib.includes('fa') && (
										<AtrcTooltip
											text={__('Font Awesome icons', 'atrc-prefix-atrc')}>
											<AtrcButton
												isActive={'fa' === iconType}
												onClick={() => setIconType('fa')}>
												{__('Font Awesome', 'atrc-prefix-atrc')}
											</AtrcButton>
										</AtrcTooltip>
									)}
								</>
							)}
							{custom && isArray(custom) && custom.length ? (
								<AtrcTooltip text={__('Custom icons', 'atrc-prefix-atrc')}>
									<AtrcButton
										isActive={'custom' === iconType}
										onClick={() => setIconType('custom')}>
										{__('Custom icons', 'atrc-prefix-atrc')}
									</AtrcButton>
								</AtrcTooltip>
							) : null}
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
									{selectedLibIcons && selectedLibIcons.length ? (
										<>
											{'all' === iconType || 'selectedIcon' === iconType ? (
												<>
													<AtrcLabel className={classnames('at-m', 'at-blk')}>
														{__('Available icons', 'atrc-prefix-atrc')}
													</AtrcLabel>
													{map(selectedLibIcons, (icon, key) => {
														const gotIcon = getIcon(icon);
														if (typeof gotIcon === 'function') {
															return (
																<AtrcButton
																	className={classnames(AtrcPrefix('icon-ri'))}
																	variant='icon-picker'
																	isActive={value.includes(icon)}
																	onClick={() => {
																		onChange(icon);
																		if (closeOnIconSelect) {
																			onToggle();
																		}
																	}}
																	key={key}>
																	{gotIcon()}
																</AtrcButton>
															);
														}
														return (
															<AtrcButton
																className={classnames(AtrcPrefix('icon-wp'))}
																variant='icon-picker'
																isActive={value.includes(icon)}
																onClick={() => {
																	onChange(icon);
																	if (closeOnIconSelect) {
																		onToggle();
																	}
																}}>
																<AtrcIcon
																	className={classnames('at-w', 'at-h')}
																	type='wp'
																	icon={gotIcon}
																	size={13}
																/>
															</AtrcButton>
														);
													})}
												</>
											) : null}
										</>
									) : (
										<>
											{allowedLib.includes('wp') &&
											!isEmpty(foundIcons.wp) &&
											('all' === iconType || 'wp' === iconType) ? (
												<>
													<AtrcLabel className={classnames('at-m', 'at-blk')}>
														{__('WordPress', 'atrc-prefix-atrc')}
													</AtrcLabel>
													{map(foundIcons.wp, (icon, key) => {
														if ('Icon' !== key) {
															return (
																<AtrcButton
																	className={classnames(
																		'at-w',
																		'at-h',
																		'at-m',
																		'at-p',
																		AtrcPrefix('icon-wp')
																	)}
																	variant='icon-picker'
																	isActive={value.includes(key)}
																	onClick={() => {
																		onChange(key);
																		if (closeOnIconSelect) {
																			onToggle();
																		}
																	}}
																	key={key}>
																	<AtrcIcon
																		className={classnames('at-w', 'at-h')}
																		type='wp'
																		icon={icon}
																		size={13}
																	/>
																</AtrcButton>
															);
														}
														return null;
													})}
												</>
											) : null}
											{allowedLib.includes('fa') &&
											!isEmpty(foundIcons.fa) &&
											('all' === iconType || 'fa' === iconType) ? (
												<>
													<AtrcLabel className={classnames('at-m', 'at-blk')}>
														{__('Font Awesome', 'atrc-prefix-atrc')}
													</AtrcLabel>
													{map(foundIcons.fa, (icon, key) => {
														if (typeof icon === 'function') {
															return (
																<AtrcButton
																	className={classnames(
																		'at-w',
																		'at-h',
																		'at-m',
																		'at-p',
																		AtrcPrefix('icon-ri')
																	)}
																	variant='icon-picker'
																	isActive={value.includes(key)}
																	onClick={() => {
																		onChange(key);
																		if (closeOnIconSelect) {
																			onToggle();
																		}
																	}}
																	key={key}>
																	{icon()}
																</AtrcButton>
															);
														}
														return null;
													})}
												</>
											) : null}
										</>
									)}
									{isArray(custom) &&
									custom.length &&
									('all' === iconType || 'custom' === iconType) ? (
										<>
											<AtrcLabel className={classnames('at-m', 'at-blk')}>
												{__('Custom icons', 'atrc-prefix-atrc')}
											</AtrcLabel>
											{map(custom, (icon, key) => {
												return (
													<AtrcButton
														className={classnames(
															'at-w',
															'at-h',
															'at-m',
															'at-p',
															AtrcPrefix('icon-cstm')
														)}
														variant='icon-picker'
														isActive={value.includes(icon.value)}
														onClick={() => {
															onChange(icon.value);
															if (closeOnIconSelect) {
																onToggle();
															}
														}}
														key={key}>
														<AtrcIcon
															type='url'
															iconUrl={icon.url}
														/>
													</AtrcButton>
												);
											})}
										</>
									) : null}
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
