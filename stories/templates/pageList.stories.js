/* WordPress */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/* Library */
import classnames from 'classnames';
import { BsSliders, BsTrash, BsPerson, BsThreeDots } from 'react-icons/bs';

/* Inbuilt */
import {
	AtrcNav,
	AtrcIcon,
	AtrcTr,
	AtrcTd,
	AtrcSpan,
	AtrcText,
	AtrcImg,
	AtrcTooltip,
	AtrcWrap,
	AtrcButtonGroup,
	AtrcButton,
	AtrcDropdown,
	AtrcControlCheckbox,
	AtrcPageListTemplate1,
	AtrcTable,
	AtrcMenuGroup,
	AtrcMenuItemsChoice,
	AtrcHashRouter,
	AtrcBadge,
} from '../../packages';
import { arrowDown } from '@wordpress/icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/PageList',
};

/* Template 1 */
export const Template1 = () => {
	const [toggleFilter, setToggleFilter] = useState(false);
	const [showBulkActions, setShowBulkActions] = useState(false);
	return (
		<AtrcHashRouter basename='/'>
			<AtrcPageListTemplate1
				renderContent={
					<AtrcTable
						tHeadLabels={[
							__('', 'atrc-prefix-atrc'),
							__('Author', 'atrc-prefix-atrc'),
							__('Details', 'atrc-prefix-atrc'),
							__('Mod', 'atrc-prefix-atrc'),
							__('Visibility', 'atrc-prefix-atrc'),
							__('Priority', 'atrc-prefix-atrc'),
							__('Status', 'atrc-prefix-atrc'),
							__('Date', 'atrc-prefix-atrc'),
							__('Actions', 'atrc-prefix-atrc'),
						]}
						renderTbody={
							<>
								<AtrcTr
									className={classnames('at-bg-cl')}
									isOdd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcControlCheckbox />
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcSpan
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcImg src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g' />

											<AtrcText tag='span'>
												{__('Author Name', 'atrc-prefix-atrc')}
											</AtrcText>
										</AtrcSpan>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcText tag='p'>
											{__('Contrary to popular belief', 'atrc-prefix-atrc')}
										</AtrcText>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcSpan
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcImg src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g' />

											<AtrcText tag='span'>
												{__('Author Name', 'atrc-prefix-atrc')}
											</AtrcText>
										</AtrcSpan>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip
											className={classnames('at-flx')}
											text='This is tooltip'>
											<AtrcBadge
												hasIcon
												childVariant='dark'
												variant='accent'>
												<AtrcIcon
													type='bootstrap'
													icon={BsPerson}
												/>
												{__('Public', 'atrc-prefix-atrc')}
											</AtrcBadge>
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip
											className={classnames('at-flx')}
											text='This is tooltip'>
											<AtrcBadge variant='info'>
												{__('Normal', 'atrc-prefix-atrc')}
											</AtrcBadge>
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcWrap
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcTooltip
												className={classnames('at-flx')}
												text='This is tooltip'>
												<AtrcBadge variant='tertiary'>
													{__('Pending', 'atrc-prefix-atrc')}
												</AtrcBadge>
											</AtrcTooltip>

											<AtrcTooltip
												className={classnames('at-flx')}
												text='This is tooltip'>
												<AtrcBadge
													hasIcon
													variant='danger'>
													<AtrcIcon
														type='bootstrap'
														icon={BsPerson}
													/>
													{__('Unsolved', 'atrc-prefix-atrc')}
												</AtrcBadge>
											</AtrcTooltip>
										</AtrcWrap>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip text='Date'>
											{__('Date Goes here', 'atrc-prefix-atrc')}
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcButtonGroup>
											<AtrcButton variant='light'>
												<AtrcTooltip text='This is tooltip'>
													<AtrcIcon
														type='bootstrap'
														icon={BsTrash}
													/>
												</AtrcTooltip>
											</AtrcButton>
											<AtrcButton variant='light'>
												<AtrcTooltip text='This is tooltip'>
													<AtrcIcon
														type='bootstrap'
														icon={BsPerson}
													/>
												</AtrcTooltip>
											</AtrcButton>

											<AtrcDropdown
												renderContentStyle={{
													width: '200px',
												}}
												popoverProps={{ placement: 'bottom left' }}
												focusOnMount
												renderToggle={({ isOpen, onToggle }) => (
													<AtrcButton
														aria-expanded={isOpen}
														onClick={onToggle}
														variant='light'>
														<AtrcTooltip text='This is tooltip'>
															<AtrcIcon
																type='bootstrap'
																icon={BsThreeDots}
															/>
														</AtrcTooltip>
													</AtrcButton>
												)}
												renderContent={({ onToggle }) => (
													<AtrcWrap>
														<AtrcMenuGroup
															label={__('Change Status', 'atrc-prefix-atrc')}>
															<AtrcMenuItemsChoice
																choices={[
																	{
																		value: 'pending',
																		label: __('Pending', 'atrc-prefix-atrc'),
																		info: __(
																			'Awaiting for approval.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaiting',
																		label: __('Awaiting', 'atrc-prefix-atrc'),
																		info: __(
																			'Awaiting first reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'closed',
																		label: __('Closed', 'atrc-prefix-atrc'),
																		info: __(
																			'Closed to new reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaitingc',
																		label: __(
																			'Awaiting client reply',
																			'atrc-prefix-atrc'
																		),
																		info: __(
																			'Awaiting client reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaitinga',
																		label: __(
																			'Awaiting mod reply',
																			'atrc-prefix-atrc'
																		),
																		info: __(
																			'Awaiting mod reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'flag',
																		label: __('Flag', 'atrc-prefix-atrc'),
																		info: __(
																			'Mark as flagged',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'trash',
																		label: __('Trash', 'atrc-prefix-atrc'),
																		info: __(
																			'Move to the trash',
																			'atrc-prefix-atrc'
																		),
																	},
																]}
																icon={arrowDown}
																value=''
																onSelect={(
																	newStatus
																) => {}}></AtrcMenuItemsChoice>
														</AtrcMenuGroup>
													</AtrcWrap>
												)}
											/>
										</AtrcButtonGroup>
									</AtrcTd>
								</AtrcTr>
								<AtrcTr
									className={classnames('at-bg-cl')}
									isEven>
									<AtrcTd className={classnames('at-p')}>
										<AtrcControlCheckbox />
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcSpan
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcImg src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g' />

											<AtrcText tag='span'>
												{__('Author Name', 'atrc-prefix-atrc')}
											</AtrcText>
										</AtrcSpan>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcText tag='p'>
											{__('Contrary to popular belief', 'atrc-prefix-atrc')}
										</AtrcText>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcSpan
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcImg src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g' />

											<AtrcText tag='span'>
												{__('Author Name', 'atrc-prefix-atrc')}
											</AtrcText>
										</AtrcSpan>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip
											className={classnames('at-flx')}
											text='This is tooltip'>
											<AtrcBadge
												hasIcon
												variant='quaternary'>
												<AtrcIcon
													type='bootstrap'
													icon={BsPerson}
												/>
												{__('Private', 'atrc-prefix-atrc')}
											</AtrcBadge>
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip
											className={classnames('at-flx')}
											text='This is tooltip'>
											<AtrcBadge variant='warning'>
												{__('High', 'atrc-prefix-atrc')}
											</AtrcBadge>
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcWrap
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcTooltip
												className={classnames('at-flx')}
												text='This is tooltip'>
												<AtrcBadge variant='tertiary'>
													{__('Pending', 'atrc-prefix-atrc')}
												</AtrcBadge>
											</AtrcTooltip>

											<AtrcTooltip
												className={classnames('at-flx')}
												text='This is tooltip'>
												<AtrcBadge
													hasIcon
													variant='danger'>
													<AtrcIcon
														type='bootstrap'
														icon={BsPerson}
													/>
													{__('Unsolved', 'atrc-prefix-atrc')}
												</AtrcBadge>
											</AtrcTooltip>
										</AtrcWrap>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip text='Date'>
											{__('Date Goes here', 'atrc-prefix-atrc')}
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcButtonGroup>
											<AtrcButton variant='light'>
												<AtrcTooltip text='This is tooltip'>
													<AtrcIcon
														type='bootstrap'
														icon={BsTrash}
													/>
												</AtrcTooltip>
											</AtrcButton>
											<AtrcButton variant='light'>
												<AtrcTooltip text='This is tooltip'>
													<AtrcIcon
														type='bootstrap'
														icon={BsPerson}
													/>
												</AtrcTooltip>
											</AtrcButton>

											<AtrcDropdown
												renderContentStyle={{
													width: '200px',
												}}
												popoverProps={{ placement: 'bottom left' }}
												focusOnMount
												renderToggle={({ isOpen, onToggle }) => (
													<AtrcButton
														aria-expanded={isOpen}
														onClick={onToggle}
														variant='light'>
														<AtrcTooltip text='This is tooltip'>
															<AtrcIcon
																type='bootstrap'
																icon={BsThreeDots}
															/>
														</AtrcTooltip>
													</AtrcButton>
												)}
												renderContent={({ onToggle }) => (
													<AtrcWrap>
														<AtrcMenuGroup
															label={__('Change Status', 'atrc-prefix-atrc')}>
															<AtrcMenuItemsChoice
																choices={[
																	{
																		value: 'pending',
																		label: __('Pending', 'atrc-prefix-atrc'),
																		info: __(
																			'Awaiting for approval.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaiting',
																		label: __('Awaiting', 'atrc-prefix-atrc'),
																		info: __(
																			'Awaiting first reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'closed',
																		label: __('Closed', 'atrc-prefix-atrc'),
																		info: __(
																			'Closed to new reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaitingc',
																		label: __(
																			'Awaiting client reply',
																			'atrc-prefix-atrc'
																		),
																		info: __(
																			'Awaiting client reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaitinga',
																		label: __(
																			'Awaiting mod reply',
																			'atrc-prefix-atrc'
																		),
																		info: __(
																			'Awaiting mod reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'flag',
																		label: __('Flag', 'atrc-prefix-atrc'),
																		info: __(
																			'Mark as flagged',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'trash',
																		label: __('Trash', 'atrc-prefix-atrc'),
																		info: __(
																			'Move to the trash',
																			'atrc-prefix-atrc'
																		),
																	},
																]}
																icon={arrowDown}
																value=''
																onSelect={(
																	newStatus
																) => {}}></AtrcMenuItemsChoice>
														</AtrcMenuGroup>
													</AtrcWrap>
												)}
											/>
										</AtrcButtonGroup>
									</AtrcTd>
								</AtrcTr>
								<AtrcTr
									className={classnames('at-bg-cl')}
									isOdd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcControlCheckbox />
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcSpan
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcImg src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g' />

											<AtrcText tag='span'>
												{__('Author Name', 'atrc-prefix-atrc')}
											</AtrcText>
										</AtrcSpan>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcText tag='p'>
											{__('Contrary to popular belief', 'atrc-prefix-atrc')}
										</AtrcText>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcSpan
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcImg src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g' />

											<AtrcText tag='span'>
												{__('Author Name', 'atrc-prefix-atrc')}
											</AtrcText>
										</AtrcSpan>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip
											className={classnames('at-flx')}
											text='This is tooltip'>
											<AtrcBadge
												hasIcon
												variant='quaternary'>
												<AtrcIcon
													type='bootstrap'
													icon={BsPerson}
												/>
												{__('Visibility', 'atrc-prefix-atrc')}
											</AtrcBadge>
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip
											className={classnames('at-flx')}
											text='This is tooltip'>
											<AtrcBadge variant='info'>
												{__('Normal', 'atrc-prefix-atrc')}
											</AtrcBadge>
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcWrap
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcTooltip
												className={classnames('at-flx')}
												text='This is tooltip'>
												<AtrcBadge
													childVariant='dark'
													variant='secondary'>
													{__('Awaiting', 'atrc-prefix-atrc')}
												</AtrcBadge>
											</AtrcTooltip>

											<AtrcTooltip
												className={classnames('at-flx')}
												text='This is tooltip'>
												<AtrcBadge
													hasIcon
													variant='success'>
													<AtrcIcon
														type='bootstrap'
														icon={BsPerson}
													/>
													{__('Solved', 'atrc-prefix-atrc')}
												</AtrcBadge>
											</AtrcTooltip>
										</AtrcWrap>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcTooltip text='Date'>
											{__('Date Goes here', 'atrc-prefix-atrc')}
										</AtrcTooltip>
									</AtrcTd>
									<AtrcTd className={classnames('at-p')}>
										<AtrcButtonGroup>
											<AtrcButton variant='light'>
												<AtrcTooltip text='This is tooltip'>
													<AtrcIcon
														type='bootstrap'
														icon={BsTrash}
													/>
												</AtrcTooltip>
											</AtrcButton>
											<AtrcButton variant='light'>
												<AtrcTooltip text='This is tooltip'>
													<AtrcIcon
														type='bootstrap'
														icon={BsPerson}
													/>
												</AtrcTooltip>
											</AtrcButton>

											<AtrcDropdown
												renderContentStyle={{
													width: '200px',
												}}
												popoverProps={{ placement: 'bottom left' }}
												focusOnMount
												renderToggle={({ isOpen, onToggle }) => (
													<AtrcButton
														aria-expanded={isOpen}
														onClick={onToggle}
														variant='light'>
														<AtrcTooltip text='This is tooltip'>
															<AtrcIcon
																type='bootstrap'
																icon={BsThreeDots}
															/>
														</AtrcTooltip>
													</AtrcButton>
												)}
												renderContent={({ onToggle }) => (
													<AtrcWrap>
														<AtrcMenuGroup
															label={__('Change Status', 'atrc-prefix-atrc')}>
															<AtrcMenuItemsChoice
																choices={[
																	{
																		value: 'pending',
																		label: __('Pending', 'atrc-prefix-atrc'),
																		info: __(
																			'Awaiting for approval.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaiting',
																		label: __('Awaiting', 'atrc-prefix-atrc'),
																		info: __(
																			'Awaiting first reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'closed',
																		label: __('Closed', 'atrc-prefix-atrc'),
																		info: __(
																			'Closed to new reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaitingc',
																		label: __(
																			'Awaiting client reply',
																			'atrc-prefix-atrc'
																		),
																		info: __(
																			'Awaiting client reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'awaitinga',
																		label: __(
																			'Awaiting mod reply',
																			'atrc-prefix-atrc'
																		),
																		info: __(
																			'Awaiting mod reply.',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'flag',
																		label: __('Flag', 'atrc-prefix-atrc'),
																		info: __(
																			'Mark as flagged',
																			'atrc-prefix-atrc'
																		),
																	},
																	{
																		value: 'trash',
																		label: __('Trash', 'atrc-prefix-atrc'),
																		info: __(
																			'Move to the trash',
																			'atrc-prefix-atrc'
																		),
																	},
																]}
																icon={arrowDown}
																value=''
																onSelect={(
																	newStatus
																) => {}}></AtrcMenuItemsChoice>
														</AtrcMenuGroup>
													</AtrcWrap>
												)}
											/>
										</AtrcButtonGroup>
									</AtrcTd>
								</AtrcTr>
							</>
						}
					/>
				}
				renderSidebar={
					<AtrcNav
						variant='vertical'
						navs={[
							{
								to: 'menu1',
								children: __('Menu 1', 'atrc-prefix-atrc'),
							},
							{
								to: 'menu2',
								children: __('Menu 2', 'atrc-prefix-atrc'),
							},
						]}
						linkProps={{
							type: 'a',
						}}
					/>
				}
				renderHeader={{
					elements: [
						'title',
						'word',
						'button',
						'addNew',
						'toggleFilter',
						'filterSelectGroup',
						'filterButtonGroup',
						'filterButtonGroup1',
						'search',
						'bulkCheck',
						'sort',
						'refresh',
						'listGrid',
						'pagination',
						'extra',
					],
					top: {
						left: ['title', 'addNew', 'toggleFilter'],
						right: ['button', 'word', 'filterButtonGroup'],
					},
					mid: {
						left: ['filterSelectGroup'],
						right: ['filterButtonGroup1', 'search'],
					},
					bottom: {
						left: ['bulkCheck'],
						right: ['extra', 'listGrid', 'pagination'],
						hr: false,
					},
					word: {
						children: __('Title', 'atrc-prefix-atrc'),
					},
					button: {
						onClick: () => setToggleFilter(!toggleFilter),
						children: __('Button only', 'atrc-prefix-atrc'),
					},
					title: {
						children: __('Title', 'atrc-prefix-atrc'),
					},
					addNew: {
						to: 'create',
						children: __('Add new', 'atrc-prefix-atrc'),
					},
					toggleFilter: {
						label: __('Advanced Filter', 'atrc-prefix-atrc'),
						checked: toggleFilter,
						onChange: () => setToggleFilter(!toggleFilter),
					},
					filterButtonGroup: {
						buttons: [
							{
								children: __('Button 1(0)', 'atrc-prefix-atrc'),
								onClick: () => setToggleFilter(!toggleFilter),
							},
							{
								children: __('Button 2(300)', 'atrc-prefix-atrc'),
								onClick: () => setToggleFilter(!toggleFilter),
							},
							{
								isActive: true,
								variant: '',
								children: __('Button 3(50)', 'atrc-prefix-atrc'),
								onClick: () => setToggleFilter(!toggleFilter),
							},
							{
								hasIcon: true,
								variant: 'secondary',
								children: (
									<>
										<AtrcIcon
											type='bootstrap'
											icon={BsSliders}
										/>
										Reset Filter
									</>
								),
								onClick: () => setToggleFilter(!toggleFilter),
								icon: {
									type: 'bootstrap',
									icon: BsSliders,
								},
							},
						],
					},
					filterButtonGroup1: {
						buttons: [
							{
								children: __('Button 1(0)', 'atrc-prefix-atrc'),
								onClick: () => setToggleFilter(!toggleFilter),
							},
							{
								children: __('Button 2(300)', 'atrc-prefix-atrc'),
								onClick: () => setToggleFilter(!toggleFilter),
							},
							{
								isActive: true,
								variant: '',
								children: __('Button 3(50)', 'atrc-prefix-atrc'),
								onClick: () => setToggleFilter(!toggleFilter),
							},
						],
					},
					filterSelectGroup: {
						selects: [
							{
								value: '',
								options: [
									{ label: 'Big', value: '100%' },
									{ label: 'Medium', value: '50%' },
									{ label: 'Small', value: '25%' },
								],
								onChange: () => setToggleFilter(!toggleFilter),
							},
							{
								value: '',
								options: [
									{ label: 'Big', value: '100%' },
									{ label: 'Medium', value: '50%' },
									{ label: 'Small', value: '25%' },
								],
								onChange: () => setToggleFilter(!toggleFilter),
							},
							{
								value: '',
								options: [
									{ label: 'Big', value: '100%' },
									{ label: 'Medium', value: '50%' },
									{ label: 'Small', value: '25%' },
								],
								onChange: () => setToggleFilter(!toggleFilter),
							},
						],
						button: {
							onClick: () => setToggleFilter(!toggleFilter),
							children: __('Apply', 'atrc-prefix-atrc'),
						},
					},
					search: {
						doSearch: () => setToggleFilter(!toggleFilter),
					},
					bulkCheck: {
						checkProps: {
							checked: showBulkActions,
							onChange: () => setShowBulkActions(!showBulkActions),
						},
						showBulkActions: showBulkActions,
						actions: [
							{
								buttonProps: {
									onClick: () => setToggleFilter(!toggleFilter),
								},
								tooltipProps: {
									text: __('Delete permanently', 'atrc-prefix-atrc'),
								},
								iconProps: {
									className: 'at-flx',
									type: 'svg',
									svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>',
								},
							},
							{
								buttonProps: {
									onClick: () => setToggleFilter(!toggleFilter),
								},
								tooltipProps: {
									text: __('Mark as active', 'atrc-prefix-atrc'),
								},
								iconProps: {
									className: 'at-flx',
									type: 'svg',
									svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"> <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/><path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/></svg>',
								},
							},
							{
								buttonProps: {
									onClick: () => setToggleFilter(!toggleFilter),
								},
								tooltipProps: {
									text: __('Mark as inactive', 'atrc-prefix-atrc'),
								},
								iconProps: {
									className: 'at-flx',
									type: 'svg',
									svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>',
								},
							},
						],
						toggleItems: ['sort', 'refresh'],
					},
					sort: {
						selectProps: {
							value: '',
							options: [
								{ label: 'Big', value: '100%' },
								{ label: 'Medium', value: '50%' },
								{ label: 'Small', value: '25%' },
							],
							onChange: () => setToggleFilter(!toggleFilter),
						},
						order: 'desc',
					},
					refresh: {
						onClick: () => setToggleFilter(!toggleFilter),
					},
					listGrid: {
						isList: toggleFilter,
						buttonProps: {
							onClick: () => setToggleFilter(!toggleFilter),
						},
					},
					pagination: {
						totalItems: 100,
						doPagination: () => {},
						currentPage: 10,
						totalPages: 10,
					},
					extra: <>{__('Extra can be anything', 'atrc-prefix-atrc')}</>,
				}}
				renderFooter={{
					elements: ['pagination'],
					top: {
						right: ['pagination'],
						hr: false,
					},
					pagination: {
						totalItems: 100,
						doPagination: () => {},
						currentPage: 10,
						totalPages: 10,
						isFooter: true,
					},
				}}
			/>
		</AtrcHashRouter>
	);
};
