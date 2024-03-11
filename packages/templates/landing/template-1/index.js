/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../../atoms/wrap';
import { AtrcIconSvg } from '../../../atoms/icon';
import AtrcSpan from '../../../atoms/span';
import AtrcText from '../../../atoms/text';
import AtrcImg from '../../../atoms/img';
import AtrcHr from '../../../atoms/hr';
import AtrcButton from '../../../atoms/button';

import AtrcNotice from '../../../molecules/notice';
import AtrcButtonGroup from '../../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';
import AtrcPreTemplate1 from '../../components/pre/template-1';

/*Local*/
const AtrcLandingTemplate1 = (props) => {
	const {
		className = '',
		variant = '',
		notice,
		banner,
		identity,
		contact,
		bannerColumns,
		normalColumns,
		topicLinks,
		settingLinks,
		changelog,
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('landing'),
				AtrcPrefix('bg-cl'),
				className,
				variant ? AtrcPrefix('landing') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcWrap className='at-ctnr-fld'>
				{notice.on ? (
					<AtrcNotice
						autoDismiss={false}
						onRemove={notice.onRemove}>
						{notice.text}
					</AtrcNotice>
				) : null}

				{banner ? (
					<AtrcWrap
						className={classnames(
							AtrcPrefix('hero-banner'),
							'at-bg-cl',
							'at-p',
							'at-m',
							'at-typ',
							'at-bdr-rad',
							'at-bg-img'
						)}>
						<AtrcWrap className='at-row at-al-itm-ctr'>
							<AtrcWrap className={classnames('at-col-md-7')}>
								{banner.heading ? (
									<AtrcText
										tag='h1'
										className={classnames('at-m')}>
										{banner.heading}
									</AtrcText>
								) : null}

								{banner.leadText ? (
									<AtrcText
										tag='p'
										className={classnames(AtrcPrefix('p-lead'), 'at-m')}>
										{banner.leadText}
									</AtrcText>
								) : null}

								{banner.normalText ? (
									<AtrcText
										className={classnames('at-m')}
										tag='p'>
										{banner.normalText}
									</AtrcText>
								) : null}

								{banner.buttons ? (
									<AtrcButtonGroup
										className={classnames(AtrcPrefix('hero-btn-grp'), 'at-m')}>
										{banner.buttons.map((item, iDx) => (
											<AtrcButton
												isLink={true}
												hasIcon={true}
												key={`at-banner-button-${iDx}`}
												className={classnames('at-p')}
												variant={item.variant ? item.variant : null}
												href={item.url}
												target={item.target ? item.target : '__blank'}>
												<AtrcIconSvg svg={item.icon} />
												{item.text}
											</AtrcButton>
										))}
									</AtrcButtonGroup>
								) : null}
							</AtrcWrap>
							{banner.image ? (
								<AtrcWrap className='at-col-md-5'>
									<AtrcImg
										src={banner.image}
										alt={banner.heading || ''}
									/>
								</AtrcWrap>
							) : null}
						</AtrcWrap>
					</AtrcWrap>
				) : null}

				<AtrcWrap className='at-row'>
					{identity && contact ? (
						<AtrcWrap className='at-col-md-4 at-col-lg-3'>
							{identity ? (
								<AtrcWrap
									className={classnames(AtrcPrefix('intro-auth'), 'at-m')}>
									<AtrcWrap
										className={classnames(
											AtrcPrefix('card'),
											// AtrcPrefix('p-40'),
											AtrcPrefix('bg-white'),
											'at-bg-cl',
											'at-bdr-rad',
											'at-p'
										)}>
										{identity.logo ? (
											<AtrcWrap
												className={classnames(
													AtrcPrefix('intro-profile'),
													'at-flx',
													'at-al-itm-ctr',
													'at-jfy-cont-ctr',
													'at-bdr',
													'at-bdr-rad',
													'at-w',
													'at-h',
													'at-m',
													AtrcPrefix('round-bdr')
												)}>
												<AtrcSpan>
													<AtrcImg
														src={identity.logo}
														alt={identity.title}
													/>
												</AtrcSpan>
											</AtrcWrap>
										) : null}

										{identity.title || identity.buttons ? (
											<AtrcWrap
												className={classnames(
													AtrcPrefix('intro-profile-info'),
													'at-txt-al'
												)}>
												{identity.title ? (
													<AtrcText tag='h3'>{identity.title}</AtrcText>
												) : null}

												{identity.buttons ? (
													<AtrcButtonGroup
														className={classnames('at-jfy-cont-ctr', 'at-m')}>
														{identity.buttons.map((item, iDx) => (
															<AtrcButton
																isLink={true}
																key={`at-identity-button-${iDx}`}
																variant={item.variant ? item.variant : null}
																href={item.url}
																target={item.target ? item.target : '__blank'}
																target='__blank'>
																{item.text}
															</AtrcButton>
														))}
													</AtrcButtonGroup>
												) : null}
											</AtrcWrap>
										) : null}
									</AtrcWrap>
								</AtrcWrap>
							) : null}

							{contact ? (
								<AtrcWrap
									className={classnames(AtrcPrefix('intro-auth--info'))}>
									<AtrcWrap
										className={classnames(
											AtrcPrefix('card'),
											//AtrcPrefix('p-40'),
											AtrcPrefix('bg-white'),
											'at-bg-cl',
											'at-bdr-rad'
										)}>
										{contact.title ? (
											<>
												<AtrcWrap
													className={classnames(
														AtrcPrefix('card-header'),
														'at-p'
													)}>
													<AtrcText
														tag='h5'
														className={classnames(
															AtrcPrefix('card-heading'),
															AtrcPrefix('m-0'),
															'at-m'
														)}>
														{contact.title}
													</AtrcText>
												</AtrcWrap>
												<AtrcHr className={classnames('at-m')} />
											</>
										) : null}

										{contact.info || contact.social ? (
											<AtrcWrap
												className={classnames(AtrcPrefix('card-body'), 'at-p')}>
												{contact.info ? (
													<AtrcWrap
														className={classnames(
															AtrcPrefix('prsn-detail'),
															'at-flx',
															'at-flx-col',
															'at-gap'
														)}>
														{contact.info.map((item, iDx) => (
															<AtrcWrap
																key={`at-contact-info-${iDx}`}
																className={classnames(
																	'at-flx',
																	'at-al-itm-ctr'
																)}>
																{item.icon || item.title ? (
																	<>
																		<AtrcWrap
																			className={classnames(
																				'at-flx',
																				'at-al-itm-ctr',
																				'at-w',
																				'at-gap',
																				AtrcPrefix('prsn-icon-wrp')
																			)}>
																			{item.icon ? (
																				<AtrcIconSvg svg={item.icon} />
																			) : null}
																			{item.title ? (
																				<AtrcText
																					tag='span'
																					variant='bold'>
																					{item.title}
																				</AtrcText>
																			) : null}
																		</AtrcWrap>
																	</>
																) : null}

																{item.text && item.url ? (
																	<AtrcButton
																		isLink={true}
																		href={item.url}
																		className={classnames('at-p')}
																		variant={item.variant ? item.variant : null}
																		target={
																			item.target ? item.target : '__blank'
																		}>
																		{item.text}
																	</AtrcButton>
																) : item.text ? (
																	<AtrcText tag='span'>{item.text}</AtrcText>
																) : null}
															</AtrcWrap>
														))}
													</AtrcWrap>
												) : null}
												{contact.social ? (
													<AtrcWrap
														className={classnames(
															AtrcPrefix('social'),
															'at-m'
														)}>
														<AtrcWrap
															className={classnames(
																'at-flx',
																'at-al-itm-ctr',
																'at-jfy-cont-ctr',
																'at-gap'
															)}>
															{contact.social.map((item, iDx) => (
																<AtrcWrap
																	key={`at-social-${iDx}`}
																	className={classnames(
																		'at-flx',
																		'at-al-itm-ctr'
																	)}>
																	<AtrcButton
																		isLink={true}
																		hasIcon={true}
																		className={classnames(
																			'at-jfy-cont-ctr',
																			'at-bdr',
																			'at-bdr-rad',
																			'at-w',
																			'at-h',
																			AtrcPrefix('round-bdr')
																		)}
																		href={item.url}
																		variant={item.variant ? item.variant : null}
																		target={
																			item.target ? item.target : '__blank'
																		}>
																		<AtrcIconSvg svg={item.icon} />
																	</AtrcButton>
																</AtrcWrap>
															))}
														</AtrcWrap>
													</AtrcWrap>
												) : null}
											</AtrcWrap>
										) : null}
									</AtrcWrap>
								</AtrcWrap>
							) : null}
						</AtrcWrap>
					) : null}

					<AtrcWrap className='at-col-md-8 at-col-lg-9'>
						{bannerColumns ? (
							<AtrcWrap className='at-row'>
								{bannerColumns.map((item, iDx) => (
									<AtrcWrap
										key={`at-banner-column-${iDx}`}
										className='at-col-md-4'>
										<AtrcWrap
											className={classnames(
												AtrcPrefix('card'),
												AtrcPrefix('bg-grad-1'),
												'at-bdr-rad',
												'at-p',
												'at-bg-img'
											)}>
											<AtrcWrap
												className={classnames(
													'at-flx',
													'at-al-itm-ctr',
													'at-gap'
												)}>
												{item.icon ? (
													<AtrcWrap
														className={classnames(
															AtrcPrefix('card-icon'),
															'at-flx',
															'at-al-itm-ctr',
															'at-jfy-cont-ctr',
															'at-bdr',
															'at-w',
															'at-h'
														)}>
														<AtrcIconSvg svg={item.icon} />
													</AtrcWrap>
												) : null}

												{item.title ? (
													<AtrcWrap
														className={classnames(AtrcPrefix('txt-white'))}>
														<AtrcText
															tag='p'
															variant='lead'
															className={classnames('at-m')}>
															{item.title}
														</AtrcText>
													</AtrcWrap>
												) : null}
											</AtrcWrap>
										</AtrcWrap>
									</AtrcWrap>
								))}
							</AtrcWrap>
						) : null}

						{normalColumns ? (
							<AtrcWrap className={classnames('at-m', 'at-row')}>
								{normalColumns.map((item, iDx) => (
									<AtrcWrap
										key={`at-normal-column-${iDx}`}
										className='at-col-md-3'>
										<AtrcWrap
											className={classnames(
												AtrcPrefix('card'),
												AtrcPrefix('bg-white'),
												'at-bg-cl',
												'at-bdr-rad'
											)}>
											{item.icon || item.title ? (
												<>
													<AtrcWrap
														className={classnames(
															AtrcPrefix('card-header'),
															'at-p'
														)}>
														<AtrcWrap
															className={classnames(
																'at-flx',
																'at-al-itm-ctr',
																'at-gap'
															)}>
															{item.icon ? (
																<AtrcIconSvg svg={item.icon} />
															) : null}

															{item.title ? (
																<AtrcText
																	tag='h5'
																	className={classnames(
																		AtrcPrefix('card-heading'),
																		'at-m'
																	)}>
																	{item.title}
																</AtrcText>
															) : null}
														</AtrcWrap>
													</AtrcWrap>
													<AtrcHr className={classnames('at-m')} />
												</>
											) : null}

											{item.content || item.buttonText ? (
												<AtrcWrap
													className={classnames(
														AtrcPrefix('card-body'),
														'at-p'
													)}>
													{item.content ? (
														<AtrcText
															tag='p'
															className={classnames('at-m')}>
															{item.content}
														</AtrcText>
													) : null}

													{item.buttonText ? (
														<AtrcButton
															isLink={true}
															variant='primary'
															className={classnames('at-m')}
															href={item.buttonLink}
															target={item.target ? item.target : '__blank'}>
															{item.buttonText}
														</AtrcButton>
													) : null}
												</AtrcWrap>
											) : null}

											{/* end of card body */}
										</AtrcWrap>
										{/* end of card */}
									</AtrcWrap>
								))}
							</AtrcWrap>
						) : null}

						{/* end of row */}
						{topicLinks ? (
							<AtrcWrap
								className={classnames(
									AtrcPrefix('card'),
									AtrcPrefix('bg-white'),
									'at-bg-cl',
									'at-m',
									'at-bdr-rad'
								)}>
								{topicLinks.title || topicLinks.icon ? (
									<>
										<AtrcWrap
											className={classnames(AtrcPrefix('card-header'), 'at-p')}>
											<AtrcWrap
												className={classnames(
													'at-flx',
													'at-al-itm-ctr',
													'at-gap'
												)}>
												{topicLinks.icon ? (
													<AtrcIconSvg svg={topicLinks.icon} />
												) : null}
												{topicLinks.title ? (
													<AtrcText
														tag='h5'
														className={classnames(
															AtrcPrefix('card-heading'),
															'at-m'
														)}>
														{topicLinks.title}
													</AtrcText>
												) : null}
											</AtrcWrap>
										</AtrcWrap>
										<AtrcHr className={classnames('at-m')} />
									</>
								) : null}

								{topicLinks.columns ? (
									<AtrcWrap
										className={classnames(AtrcPrefix('card-body'), 'at-p')}>
										<AtrcWrap
											className={classnames(
												AtrcPrefix('col-btn-grp'),
												'at-row',
												'at-gap'
											)}>
											{topicLinks.columns.map((item, iDx) => (
												<AtrcWrap
													key={`at-topic-link-column-${iDx}`}
													className={classnames('at-col-md-2m3', 'at-flx')}>
													<AtrcButton
														isLink={true}
														hasIcon={true}
														variant={item.variant ? item.variant : null}
														className={classnames(
															'at-jfy-cont-ctr',
															'at-p',
															'at-flx-grw-1'
														)}
														href={item.link}
														target={item.target ? item.target : '__blank'}>
														{item.icon ? <AtrcIconSvg svg={item.icon} /> : null}
														{item.title}
													</AtrcButton>
												</AtrcWrap>
											))}
										</AtrcWrap>
										{/* end of row */}
									</AtrcWrap>
								) : null}

								{/* end of card body */}
							</AtrcWrap>
						) : null}
						{/* end of card */}

						{changelog ? (
							<AtrcWrap className={classnames('at-m', 'at-row')}>
								<AtrcWrap className='at-col-12'>
									<AtrcWrap
										className={classnames(
											AtrcPrefix('card'),
											AtrcPrefix('bg-white'),
											'at-bg-cl',
											'at-bdr-rad'
										)}>
										{changelog.title || changelog.icon ? (
											<>
												<AtrcWrap
													className={classnames(
														AtrcPrefix('card-header'),
														'at-p'
													)}>
													<AtrcWrap
														className={classnames(
															'at-flx',
															'at-al-itm-ctr',
															'at-gap'
														)}>
														{changelog.icon ? (
															<AtrcIconSvg svg={changelog.icon} />
														) : null}
														{changelog.title ? (
															<AtrcText
																tag='h5'
																className={classnames(
																	AtrcPrefix('card-heading'),
																	'at-m'
																)}>
																{changelog.title}
															</AtrcText>
														) : null}
													</AtrcWrap>
												</AtrcWrap>
												<AtrcHr className={classnames('at-m')} />
											</>
										) : null}

										{changelog.content ? (
											<AtrcWrap
												className={classnames(AtrcPrefix('card-body'), 'at-p')}>
												<AtrcPreTemplate1 content={changelog.content} />
											</AtrcWrap>
										) : null}

										{/* end of card body */}
									</AtrcWrap>
									{/* end of card */}
								</AtrcWrap>
								{/* end of col-md-7 */}
							</AtrcWrap>
						) : null}

						{/* end of row */}
					</AtrcWrap>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default AtrcLandingTemplate1;
