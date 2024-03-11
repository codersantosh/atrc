/*Library*/
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

import { arrowDown } from '@wordpress/icons';

import {
	BsChatLeftDots,
	BsPerson,
	BsSliders,
	BsThreeDots,
	BsTrash,
	BsXLg,
} from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcIcon from '../../../atoms/icon';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcSpan from '../../../atoms/span';
import AtrcText from '../../../atoms/text';
import AtrcImg from '../../../atoms/img';
import AtrcHr from '../../../atoms/hr';

/* Organisms */
import AtrcHeader from '../../../organisms/header';
import AtrcMain from '../../../organisms/main';
import AtrcSidebar from '../../../organisms/sidebar';

/*  Molecules */
import AtrcButtonGroup from '../../../molecules/button-group';
import AtrcPagination from '../../../molecules/pagination';
import AtrcSearch from '../../../molecules/search';
import AtrcTooltip from '../../../molecules/tooltip';
import AtrcNav from '../../../molecules/nav';
import AtrcDropdown from '../../../molecules/dropdown';
import AtrcMenuGroup from '../../../molecules/menu-group';
import AtrcMenuItemsChoice from '../../../molecules/menu-items-choice';

import AtrcTable from '../../../molecules/table';
import AtrcTh from '../../../molecules/table/th';
import AtrcThead from '../../../molecules/table/thead';
import AtrcTr from '../../../molecules/table/tr';
import AtrcTbody from '../../../molecules/table/tbody';
import AtrcTd from '../../../molecules/table/thead';

/* Controls */
import AtrcControlSelect from '../../../controls/control-select';
import AtrcControlToggle from '../../../controls/control-toggle';
import AtrcControlCheckbox from '../../../controls/control-checkbox';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcPageListTemplate1 = (props) => {
	const {
		className = '',
		variant = '',
		label,
		right = null,
		...defaultProps
	} = props;

	return (
		<AtrcMain
			className={classnames(
				AtrcPrefix('ls'),
				AtrcPrefix('mt-40'),
				className,
				variant ? AtrcPrefix('list') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcWrap
				tag='section'
				className={classnames(AtrcPrefix('m-0'), 'at-row')}>
				<AtrcSidebar className='at-col-1'>
					<AtrcNav
						variant='vrt'
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
					/>
				</AtrcSidebar>

				<AtrcWrap
					tag='section'
					className='at-col-11'>
					<AtrcWrap className={classnames(AtrcPrefix('bg-white'), 'at-bg-cl')}>
						<AtrcHeader
							className={classnames(
								AtrcPrefix('single-header'),
								className,
								variant ? AtrcPrefix('single-header') + '-' + variant : ''
							)}>
							{/* top header */}
							<AtrcWrap
								className={classnames(
									'at-p',
									'at-flx',
									'at-al-itm-ctr',
									'at-jfy-cont-btw'
								)}>
								<AtrcWrap className={classnames('at-flx', 'at-al-itm-ctr')}>
									<AtrcText className={classnames(AtrcPrefix('m-0'))}>
										List
									</AtrcText>

									<AtrcButton
										variant='primary'
										onClick={() => {}}
										className={classnames(AtrcPrefix('ml-15'))}>
										Add New
									</AtrcButton>

									<AtrcControlToggle
										label={__('Advanced Filter', 'atrc-prefix-atrc')}
										className={classnames(
											AtrcPrefix('ml-15'),
											AtrcPrefix('mb-0')
										)}
									/>
								</AtrcWrap>

								<AtrcButtonGroup>
									<AtrcButton
										className={classnames(
											// AtrcPrefix('pl-15'),
											// AtrcPrefix('pr-15'),
											// AtrcPrefix('pt-10'),
											// AtrcPrefix('pb-10')
											'at-p'
										)}>
										Awating mod reply(0)
									</AtrcButton>
									<AtrcButton
										className={classnames(
											// AtrcPrefix('pl-15'),
											// AtrcPrefix('pr-15'),
											// AtrcPrefix('pt-10'),
											// AtrcPrefix('pb-10')
											'at-p'
										)}>
										Awating client reply(0)
									</AtrcButton>
									<AtrcButton
										className={classnames(
											// AtrcPrefix('pl-15'),
											// AtrcPrefix('pr-15'),
											// AtrcPrefix('pt-10'),
											// AtrcPrefix('pb-10')
											'at-p'
										)}>
										New(0)
									</AtrcButton>
									<AtrcButton
										className={classnames(
											// AtrcPrefix('pl-15'),
											// AtrcPrefix('pr-15'),
											// AtrcPrefix('pt-10'),
											// AtrcPrefix('pb-10')
											'at-p'
										)}>
										Closed(0)
									</AtrcButton>
									<AtrcButton
										className={classnames(
											// AtrcPrefix('pl-15'),
											// AtrcPrefix('pr-15'),
											// AtrcPrefix('pt-10'),
											// AtrcPrefix('pb-10')
											'at-p'
										)}
										variant='active'>
										All(0)
									</AtrcButton>

									<AtrcButton
										className={classnames(
											// AtrcPrefix('pl-15'),
											// AtrcPrefix('pr-15'),
											// AtrcPrefix('pt-10'),
											// AtrcPrefix('pb-10')
											'at-p'
										)}
										variant='reset'>
										<AtrcIcon
											className={classnames(AtrcPrefix('mr-10'))}
											type='bootstrap'
											icon={BsSliders}
										/>
										Reset Filter
									</AtrcButton>
								</AtrcButtonGroup>
							</AtrcWrap>

							<AtrcHr className={classnames(AtrcPrefix('m-0'))}></AtrcHr>

							{/* middle header */}
							<AtrcWrap
								className={classnames(
									'at-p',
									'at-flx',
									'at-al-itm-ctr',
									'at-jfy-cont-btw'
								)}>
								<AtrcWrap className={classnames('at-flx', 'at-al-itm-ctr')}>
									<AtrcControlSelect
										value=''
										options={[
											{ label: 'Big', value: '100%' },
											{
												label: 'Medium',
												value: '50%',
											},
											{
												label: 'Small',
												value: '25%',
											},
										]}
										onChange={() => {}}
										allowReset={false}
									/>

									<AtrcButton
										variant='primary'
										onClick={() => {}}
										className={classnames(AtrcPrefix('ml-15'))}>
										Apply
									</AtrcButton>
								</AtrcWrap>

								<AtrcWrap
									className={classnames(
										'at-flx',
										'at-al-itm-ctr',
										'at-jfy-cont-btw'
									)}>
									<AtrcButtonGroup>
										<AtrcButton
											variant='active'
											className={classnames(
												AtrcPrefix('ml-15'),
												// AtrcPrefix('pr-15'),
												// AtrcPrefix('pt-10'),
												// AtrcPrefix('pb-10'),
												// AtrcPrefix('pl-10')
												'at-p'
											)}>
											All(0)
										</AtrcButton>
										<AtrcButton
											className={classnames(
												AtrcPrefix('ml-15'),
												// AtrcPrefix('pr-15'),
												// AtrcPrefix('pt-10'),
												// AtrcPrefix('pb-10'),
												// AtrcPrefix('pl-10')
												'at-p'
											)}>
											Unsolved(0)
										</AtrcButton>
										<AtrcButton
											className={classnames(
												AtrcPrefix('ml-15'),
												// AtrcPrefix('pr-15'),
												// AtrcPrefix('pt-10'),
												// AtrcPrefix('pb-10'),
												// AtrcPrefix('pl-10')
												'at-p'
											)}>
											Solved(0)
										</AtrcButton>
									</AtrcButtonGroup>

									<AtrcSearch
										buttonProps={{
											variant: 'primary',
										}}
									/>
								</AtrcWrap>
							</AtrcWrap>

							<AtrcHr className={classnames(AtrcPrefix('m-0'))}></AtrcHr>

							{/* bottom header */}

							<AtrcWrap
								className={classnames(
									'at-p',
									'at-flx',
									'at-al-itm-ctr',
									'at-jfy-cont-btw'
								)}>
								<AtrcWrap className={classnames('at-flx', 'at-al-itm-ctr')}>
									<AtrcControlCheckbox />

									<AtrcButtonGroup className={classnames(AtrcPrefix('mr-10'))}>
										<AtrcButton
											variant='icon'
											className={classnames(AtrcPrefix('m-5'))}>
											<AtrcTooltip text='This is tooltip'>
												<AtrcIcon
													type='bootstrap'
													icon={BsTrash}
												/>
											</AtrcTooltip>
										</AtrcButton>
										<AtrcButton
											variant='icon'
											className={classnames(AtrcPrefix('m-5'))}>
											<AtrcTooltip text='This is tooltip'>
												<AtrcIcon
													type='bootstrap'
													icon={BsPerson}
												/>
											</AtrcTooltip>
										</AtrcButton>
										<AtrcButton
											variant='icon'
											className={classnames(AtrcPrefix('m-5'))}>
											<AtrcTooltip text='This is tooltip'>
												<AtrcIcon
													type='bootstrap'
													icon={BsChatLeftDots}
												/>
											</AtrcTooltip>
										</AtrcButton>
										<AtrcButton
											variant='icon'
											className={classnames(AtrcPrefix('m-5'))}>
											<AtrcTooltip text='This is tooltip'>
												<AtrcIcon
													type='bootstrap'
													icon={BsXLg}
												/>
											</AtrcTooltip>
										</AtrcButton>
									</AtrcButtonGroup>

									<AtrcControlSelect
										value=''
										options={[
											{ label: 'Big', value: '100%' },
											{
												label: 'Medium',
												value: '50%',
											},
											{
												label: 'Small',
												value: '25%',
											},
										]}
										onChange={() => {}}
										allowReset={false}
									/>

									<AtrcResetButtonIcon />
								</AtrcWrap>

								{/* pagination */}

								<AtrcPagination
									totalItems={100}
									doPagination={() => {}}
									currentPage={10}
									totalPages={10}
								/>
							</AtrcWrap>
						</AtrcHeader>

						<AtrcWrap
							className={classnames(
								AtrcPrefix('ls-body'),
								className,
								variant ? AtrcPrefix('ls-body') + '-' + variant : ''
							)}>
							<AtrcWrap className={classnames(AtrcPrefix('pt-15'))}>
								<AtrcTable>
									<AtrcThead
										className={classnames(AtrcPrefix('bg-primary-light'))}>
										<AtrcTr>
											<AtrcTh className={classnames('at-p')}></AtrcTh>
											<AtrcTh className={classnames('at-p')}>Author</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Details</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Mod</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Visibility</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Priority</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Status</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Date</AtrcTh>
											<AtrcTh className={classnames('at-p')}>Actions</AtrcTh>
										</AtrcTr>
									</AtrcThead>
									<AtrcTbody>
										<AtrcTr>
											<AtrcTd className={classnames('at-p')}>
												<AtrcControlCheckbox />
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcText tag='span'>Author Name</AtrcText>
												</AtrcSpan>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcText tag='p'>Contrary to popular belief</AtrcText>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcText tag='span'>Author Name</AtrcText>
												</AtrcSpan>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip
													className={classnames(AtrcPrefix('badge'))}
													text='This is tooltip'>
													<AtrcIcon
														className={classnames(AtrcPrefix('mr-5'))}
														type='bootstrap'
														icon={BsPerson}
													/>
													Visibility
												</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip
													className={classnames(
														AtrcPrefix('badge'),
														AtrcPrefix('priority-normal')
													)}
													text='This is tooltip'>
													Normal
												</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip
													className={classnames(
														AtrcPrefix('badge'),
														AtrcPrefix('mr-5')
													)}
													text='This is tooltip'>
													Pending
												</AtrcTooltip>
												<AtrcTooltip
													className={classnames(
														AtrcPrefix('badge'),
														AtrcPrefix('priority-normal')
													)}
													text='This is tooltip'>
													<AtrcIcon
														className={classnames(AtrcPrefix('mr-5'))}
														type='bootstrap'
														icon={BsPerson}
													/>
													Unsolved
												</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip text='Date'>Date Goes here</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcButton
													variant='icon'
													className={classnames(AtrcPrefix('m-5'))}>
													<AtrcTooltip text='This is tooltip'>
														<AtrcIcon
															type='bootstrap'
															icon={BsTrash}
														/>
													</AtrcTooltip>
												</AtrcButton>
												<AtrcButton
													variant='icon'
													className={classnames(AtrcPrefix('m-5'))}>
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
															variant='icon'
															className={classnames(AtrcPrefix('m-5'))}>
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
											</AtrcTd>
										</AtrcTr>
										<AtrcTr isEven>
											<AtrcTd className={classnames('at-p')}>
												<AtrcControlCheckbox />
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcText tag='span'>Author Name</AtrcText>
												</AtrcSpan>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcText tag='p'>Contrary to popular belief</AtrcText>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcText tag='span'>Author Name</AtrcText>
												</AtrcSpan>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip
													className={classnames(AtrcPrefix('badge'))}
													text='This is tooltip'>
													<AtrcIcon
														className={classnames(AtrcPrefix('mr-10'))}
														type='bootstrap'
														icon={BsPerson}
													/>
													Visibility
												</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip
													className={classnames(
														AtrcPrefix('badge'),
														AtrcPrefix('priority-high')
													)}
													text='This is tooltip'>
													High
												</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip
													className={classnames(
														AtrcPrefix('badge'),
														AtrcPrefix('mr-5')
													)}
													text='This is tooltip'>
													Pending
												</AtrcTooltip>
												<AtrcTooltip
													className={classnames(
														AtrcPrefix('badge'),
														AtrcPrefix('priority-normal')
													)}
													text='This is tooltip'>
													<AtrcIcon
														className={classnames(AtrcPrefix('mr-5'))}
														type='bootstrap'
														icon={BsPerson}
													/>
													Unsolved
												</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcTooltip text='Date'>Date Goes here</AtrcTooltip>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcButton
													variant='icon'
													className={classnames(AtrcPrefix('m-5'))}>
													<AtrcTooltip text='This is tooltip'>
														<AtrcIcon
															type='bootstrap'
															icon={BsTrash}
														/>
													</AtrcTooltip>
												</AtrcButton>
												<AtrcButton
													variant='icon'
													className={classnames(AtrcPrefix('m-5'))}>
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
															variant='icon'
															className={classnames(AtrcPrefix('m-5'))}>
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
											</AtrcTd>
										</AtrcTr>
									</AtrcTbody>
								</AtrcTable>

								<AtrcWrap
									className={classnames('at-p', 'at-flx', 'at-jfy-cont-end')}>
									{/* pagination */}

									<AtrcPagination
										totalItems={100}
										doPagination={() => {}}
										currentPage={10}
										totalPages={10}
										isFooter={true}
									/>
								</AtrcWrap>
							</AtrcWrap>
						</AtrcWrap>
					</AtrcWrap>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcMain>
	);
};

export default AtrcPageListTemplate1;
