/** WordPress*/
import { __ } from '@wordpress/i18n';

import { useEffect, useRef, useMemo } from '@wordpress/element';

import { MenuGroup, MenuItem } from '@wordpress/components';

import {
	moreVertical,
	plus,
	chevronDown,
	chevronUp,
	reset,
	check,
} from '@wordpress/icons';

import { speak } from '@wordpress/a11y';

/** Library*/
import classnames from 'classnames';

import { map, forEach, sortBy, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcSpan from '../../atoms/span';

/* Molecules */
import AtrcNotice from '../notice';
import AtrcDropdown from '../dropdown';
import AtrcTooltip from '../tooltip';
import AtrcTabPanel from '../tab-panel';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcUseInstanceId from '../../utils/use-instance-id';
import AtrcUseStateCallback from './../../utils/use-state-callback';

/*Local*/
export function AtrcPanelTools(props) {
	const {
		label = '',
		help = '',
		children = '',
		tools = [],
		resetAll = () => {},
		variant = '',
		className = '',
		allowTabs = false,
		isRadio = false,
		tolsBodyProps = {},
	} = props;

	const localAllowTabs = useMemo(() => {
		if (!allowTabs) {
			return allowTabs;
		}
		if (tools.length < 2) {
			return false;
		}
		return allowTabs;
	}, [allowTabs, tools]);

	const [panelToolsState, setPanelToolsState] = AtrcUseStateCallback({
		activeItems: null,
		tabs: [],
		showChildren: false,
	});

	const rowref = useRef();

	const instanceId = AtrcUseInstanceId(AtrcPanelTools, 'atrc-pnl-tools');

	const getTabs = (newActiveItems) => {
		const newTabs = [];

		forEach(tools, (item) => {
			if (newActiveItems.includes(item.name)) {
				newTabs.push({
					name: item.name,
					title: item.title,
					className: item.className ? item.className : null,
					icon:
						item.icon &&
						(!item.iconType || (item.iconType && 'wp' === item.iconType))
							? item.icon
							: null,
				});
			}
		});

		return newTabs;
	};

	const orderTools = useMemo(() => {
		if (!tools) {
			return false;
		}
		return map(tools, 'name');
	}, [tools]);

	const orderActiveItems = useMemo(() => {
		if (!orderTools || !panelToolsState.activeItems) {
			return false;
		}
		return sortBy(panelToolsState.activeItems, (tool) => {
			const iDx = orderTools.indexOf(tool);
			return iDx === -1 ? Infinity : iDx;
		});
	}, [panelToolsState.activeItems]);

	const handleToolSelection = (item, isReset = true) => {
		const newActiveItems = panelToolsState.activeItems.slice(0);
		if (!newActiveItems.includes(item.name) && !isReset) {
			newActiveItems.push(item.name);
		} else if (newActiveItems.includes(item.name)) {
			const iDx = newActiveItems.indexOf(item.name);
			newActiveItems.splice(iDx, 1);
		}

		const valueCloned = cloneDeep(panelToolsState);

		valueCloned.activeItems = newActiveItems;
		valueCloned.showChildren = newActiveItems.length;
		if (localAllowTabs) {
			valueCloned.tabs = getTabs(newActiveItems);
		}
		if (isRadio) {
			const handleRadio = [];
			if (newActiveItems.includes(item.name)) {
				handleRadio.push(item.name);
			}
			valueCloned.activeItems = handleRadio;
		}

		setPanelToolsState(
			() => valueCloned,
			() => {
				if (isReset && item.onDeselect) {
					item.onDeselect();
				} else if (newActiveItems.includes(item.name)) {
					if (item.onSelect) {
						item.onSelect();
					}
				}
			}
		);
	};

	useEffect(() => {
		const newActiveItems = [];
		map(tools, function (item) {
			if (item.hasValue) {
				newActiveItems.push(item.name);
			}
		});
		const valueCloned = cloneDeep(panelToolsState);

		valueCloned.activeItems = newActiveItems;
		if (localAllowTabs) {
			valueCloned.tabs = getTabs(newActiveItems);
		}

		setPanelToolsState(valueCloned);
	}, []);

	if (null === panelToolsState.activeItems) {
		return null;
	}

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-pnl-tools'),
				'at-m',
				className,
				variant ? AtrcPrefix('ctrl-pnl-tools') + '-' + variant : ''
			)}>
			<AtrcWrap
				className={classnames(
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-p',
					'at-bdr',
					'at-bg-cl',
					AtrcPrefix('ctrl-pnl-tools-header')
				)}>
				{label && (
					<AtrcLabel className={classnames(AtrcPrefix('m-0'))}>
						{label}
					</AtrcLabel>
				)}
				<AtrcWrap className={classnames(AtrcPrefix('ctrl-pnl-tools-actions'))}>
					<AtrcDropdown
						// width='160px'
						popoverProps={{ rowref }}
						focusOnMount
						renderToggle={({ isOpen, onToggle }) => (
							<AtrcButton
								variant='dropdown'
								aria-expanded={isOpen}
								onClick={onToggle}>
								<AtrcTooltip
									text={label + ' ' + __('options', 'atrc-prefix-atrc')}>
									<AtrcIcon
										type={'wp'}
										icon={
											panelToolsState.activeItems.length ? moreVertical : plus
										}
									/>
								</AtrcTooltip>
							</AtrcButton>
						)}
						renderContent={() => {
							return (
								<>
									<MenuGroup>
										{tools?.flatMap((control, iDx) => {
											const controlInfo = () => {
												if (
													!panelToolsState.activeItems.includes(control.name)
												) {
													return control.info
														? control.info
														: __('Show') + ' ' + control.title;
												}
												return __('Hide') + ' ' + control.title;
											};

											if (control.on !== false) {
												return (
													<AtrcWrap
														className={classnames(
															AtrcPrefix('menu-itm-wrp'),
															'at-flx'
														)}
														key={`${instanceId}-${iDx}-${control.name}`}>
														<MenuItem
															isSelected={panelToolsState.activeItems.includes(
																control.name
															)}
															onClick={(event) => {
																event.stopPropagation();
																handleToolSelection(control, false);
															}}
															id={`${instanceId}-${control.name}`}
															role='menuitemcheckbox'
															aria-label={controlInfo}
															aria-checked={panelToolsState.activeItems.includes(
																control.name
															)}>
															<AtrcWrap
																className={classnames(
																	'at-flx',
																	'at-al-itm-ctr',
																	AtrcPrefix('ctrl-pnl-tools-header-cont')
																)}>
																{isRadio && control.hasValue ? (
																	<AtrcTooltip
																		className={classnames(
																			'at-m',
																			AtrcPrefix('active-radio')
																		)}
																		text={__('Active', 'atrc-prefix-atrc')}>
																		<AtrcIcon
																			type={'wp'}
																			icon={check}
																		/>
																	</AtrcTooltip>
																) : null}
																<AtrcTooltip text={controlInfo()}>
																	{control.icon ? (
																		<AtrcIcon
																			type={
																				control.iconType
																					? control.iconType
																					: 'wp'
																			}
																			icon={control.icon}
																			size={control.iconSize || 16}
																		/>
																	) : null}
																	<AtrcLabel>{control.title}</AtrcLabel>
																</AtrcTooltip>

																{/* {panelToolsState.activeItems.includes(control.name)? <AtrcResetButtonIcon
                                                                    disabled={!control.hasValue}
                                                                    value={{}}
                                                                />:null} */}
															</AtrcWrap>
														</MenuItem>
														<AtrcResetButtonIcon
															onClick={(event) => {
																event.stopPropagation();
																handleToolSelection(control, true);
															}}
															defaultValue={{}}
															value={{}}
														/>
													</AtrcWrap>
												);
											}
											return null;
										})}
									</MenuGroup>
									{tools.length > 1 ? (
										<MenuGroup>
											<MenuItem
												aria-disabled={!panelToolsState.activeItems.length}
												variant={'tertiary'}
												onClick={() => {
													if (panelToolsState.activeItems.length) {
														const valueCloned = cloneDeep(panelToolsState);

														valueCloned.activeItems = [];
														valueCloned.tabs = [];
														valueCloned.showChildren = false;
														setPanelToolsState(
															() => valueCloned,
															() => {
																resetAll();
															}
														);

														speak(__('All options reset'), 'assertive');
													}
												}}>
												<AtrcSpan
													variant='reset'
													className={classnames(
														'at-flx',
														'at-jfy-cont-btw',
														'at-flx-grw-1',
														' at-al-itm-ctr'
													)}>
													<AtrcSpan>
														{__('Reset all', 'atrc-prefix-atrc')}
													</AtrcSpan>

													<AtrcIcon
														type={'wp'}
														icon={reset}
													/>
												</AtrcSpan>
											</MenuItem>
										</MenuGroup>
									) : null}
								</>
							);
						}}
					/>
					{panelToolsState.activeItems.length ? (
						<AtrcButton
							variant='dropdown'
							onClick={() => {
								const valueCloned = cloneDeep(panelToolsState);

								valueCloned.showChildren = !valueCloned.showChildren;
								setPanelToolsState(valueCloned);
							}}>
							<AtrcTooltip
								text={
									panelToolsState.showChildren
										? __('Show options', 'atrc-prefix-atrc')
										: __('Hide options', 'atrc-prefix-atrc')
								}>
								<AtrcIcon
									type={'wp'}
									icon={panelToolsState.showChildren ? chevronUp : chevronDown}
								/>
							</AtrcTooltip>
						</AtrcButton>
					) : null}
				</AtrcWrap>
			</AtrcWrap>
			{panelToolsState.showChildren && orderActiveItems ? (
				<AtrcWrap
					{...tolsBodyProps}
					className={classnames(
						AtrcPrefix('ctrl-pnl-tools-body'),
						tolsBodyProps.variant ? null : 'at-p at-bg-cl at-bdr',
						tolsBodyProps.className ? tolsBodyProps.className : null
					)}>
					{help ? (
						<AtrcNotice
							isDismissible={false}
							autoDismiss={false}>
							{help}
						</AtrcNotice>
					) : (
						''
					)}

					{localAllowTabs ? (
						<AtrcTabPanel
							variant='inner'
							tabs={panelToolsState.tabs}>
							{(tab) => children([tab.name])}
						</AtrcTabPanel>
					) : (
						children(orderActiveItems)
					)}
				</AtrcWrap>
			) : null}
		</AtrcWrap>
	);
}

export default AtrcPanelTools;
