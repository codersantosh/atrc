/*Library*/
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

import {
	BsChatLeftDots,
	BsPerson,
	BsSliders,
	BsThreeDots,
	BsTrash,
	BsXLg,
} from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcSelect from '../../atoms/select';
import AtrcToggle from '../../atoms/toggle';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcSpan from '../../atoms/span';
import AtrcWord from '../../atoms/word';
import AtrcImg from '../../atoms/img';
import AtrcHr from '../../atoms/hr';
import AtrcTh from '../../atoms/th';
import AtrcCheckbox from '../../atoms/checkbox';
import AtrcThead from '../../atoms/thead';
import AtrcTr from '../../atoms/tr';
import AtrcTbody from '../../atoms/tbody';
import AtrcTd from '../../atoms/thead';

import AtrcHeader from '../../organisms/header';
import AtrcMain from '../../organisms/main';
import AtrcSidebar from '../../organisms/sidebar';

import AtrcButtonGroup from './../../molecules/button-group';
import AtrcBase from './../../molecules/base';
import AtrcPagination from './../../molecules/pagination';
import AtrcSearch from './../../molecules/search';
import AtrcTooltip from './../../molecules/tooltip';
import AtrcNav from './../../molecules/nav';
import AtrcTable from './../../molecules/table';
import AtrcDropdown from './../../molecules/dropdown';
import AtrcMenuGroup from './../../molecules/menu-group';
import AtrcMenuItemsChoice from './../../molecules/menu-items-choice';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

import { arrowDown } from '@wordpress/icons';

/*Local*/
const AtrcList = (props) => {
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
									<AtrcWord className={classnames(AtrcPrefix('m-0'))}>
										List
									</AtrcWord>

									<AtrcButton
										variant='primary'
										onClick={() => {}}
										className={classnames(AtrcPrefix('ml-15'))}>
										Add New
									</AtrcButton>

									<AtrcToggle
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
									<AtrcBase variant='select-plain'>
										<AtrcSelect
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
									</AtrcBase>

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
									<AtrcCheckbox />

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

									<AtrcBase variant='select-plain'>
										<AtrcSelect
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
									</AtrcBase>

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
												<AtrcCheckbox />
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcWord tag='span'>Author Name</AtrcWord>
												</AtrcSpan>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcWord tag='p'>Contrary to popular belief</AtrcWord>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcWord tag='span'>Author Name</AtrcWord>
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
												<AtrcCheckbox />
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcWord tag='span'>Author Name</AtrcWord>
												</AtrcSpan>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcWord tag='p'>Contrary to popular belief</AtrcWord>
											</AtrcTd>
											<AtrcTd className={classnames('at-p')}>
												<AtrcSpan
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcImg
														className={classnames(AtrcPrefix('mr-10'))}
														src='http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&#038;d=mm&#038;r=g'
													/>

													<AtrcWord tag='span'>Author Name</AtrcWord>
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

export default AtrcList;
