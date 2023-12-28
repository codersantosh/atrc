/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import {
	BsBell,
	BsEnvelope,
	BsFacebook,
	BsFiles,
	BsGeoAlt,
	BsLink45Deg,
	BsTwitter,
	BsFillLightningChargeFill,
	BsGem,
} from 'react-icons/bs';

/*Inbuilt*/
import {
	AtrcWrap,
	AtrcWord,
	AtrcIcon,
	AtrcLink,
	AtrcSpan,
	AtrcImg,
	AtrcHr,
} from '../../atoms';

import { AtrcButtonGroup, AtrcNotice } from '../../molecules';
/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcLanding = (props) => {
	const {
		className = '',
		variant = '',
		name,
		logo,
		notice,
		banner,
		bannerColumns,
		links,
		settingLinks,
		changelog,
		pluginUrl,
		supportUrl,
		email,
		location,
		facebook,
		twitter,
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('landing'),
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
							<AtrcWord
								tag='h1'
								className={classnames('at-m')}>
								{name}
							</AtrcWord>
							<AtrcWord
								tag='p'
								className={classnames(AtrcPrefix('p-lead'), 'at-m')}>
								{banner.leadText}
							</AtrcWord>
							<AtrcWord
								className={classnames('at-m')}
								tag='p'>
								{banner.normalText}
							</AtrcWord>
							{banner.buttons ? (
								<AtrcButtonGroup
									className={classnames(AtrcPrefix('hero-btn-grp'))}>
									<AtrcLink
										className={classnames(
											'at-p',
											'at-btn',
											'at-al-itm-ctr',
											'at-flx'
										)}
										variant='primary'
										href={banner.buttons[0].url}
										target={banner.buttons[0].target}>
										<AtrcIcon
											className={classnames('at-m')}
											type='bootstrap'
											icon={BsFillLightningChargeFill}
										/>
										{banner.buttons[0].text}
									</AtrcLink>
									{banner.buttons[1] ? (
										<AtrcLink
											className={classnames(
												'at-p',
												'at-btn',
												'at-al-itm-ctr',
												'at-flx'
											)}
											variant='outl'
											href={banner.buttons[1].url}
											target={banner.buttons[1].target}>
											<AtrcIcon
												className={classnames('at-m')}
												type='bootstrap'
												icon={BsFiles}
											/>
											{banner.buttons[1].text}
										</AtrcLink>
									) : null}
									{banner.buttons[2] ? (
										<AtrcLink
											className={classnames(
												'at-p',
												'at-btn',
												'at-al-itm-ctr',
												'at-flx'
											)}
											variant='secondary'
											href={banner.buttons[2].url}
											target={banner.buttons[2].target}>
											<AtrcIcon
												className={classnames('at-m')}
												type='bootstrap'
												icon={BsGem}
											/>
											{banner.buttons[2].text}
										</AtrcLink>
									) : null}
								</AtrcButtonGroup>
							) : null}
						</AtrcWrap>
						<AtrcWrap className='at-col-md-5'>
							<AtrcImg
								src={banner.image}
								alt={name}
							/>
						</AtrcWrap>
					</AtrcWrap>
				</AtrcWrap>

				<AtrcWrap className='at-row'>
					<AtrcWrap className='at-col-md-4 at-col-lg-3'>
						<AtrcWrap className={classnames(AtrcPrefix('intro-auth'), 'at-m')}>
							<AtrcWrap
								className={classnames(
									AtrcPrefix('card'),
									// AtrcPrefix('p-40'),
									AtrcPrefix('bg-white'),
									'at-bg-cl',
									'at-bdr-rad',
									'at-p'
								)}>
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
											src={logo}
											alt={name}
										/>
									</AtrcSpan>
								</AtrcWrap>

								<AtrcWrap
									className={classnames(
										AtrcPrefix('intro-profile-info'),
										'at-txt-al'
									)}>
									<AtrcWord tag='h3'>{name}</AtrcWord>
									{pluginUrl || supportUrl ? (
										<AtrcButtonGroup className={classnames('at-jfy-cont-ctr')}>
											{pluginUrl ? (
												<AtrcLink
													variant='primary'
													className={classnames('at-p', 'at-btn')}
													href={pluginUrl}
													target='__blank'>
													{__('Visit Site', 'atrc-prefix-atrc')}
												</AtrcLink>
											) : null}
											{supportUrl ? (
												<AtrcLink
													className={classnames('at-p', 'at-btn')}
													href={supportUrl}
													target='__blank'>
													{__('Get support', 'atrc-prefix-atrc')}
												</AtrcLink>
											) : null}
										</AtrcButtonGroup>
									) : null}
								</AtrcWrap>
							</AtrcWrap>
						</AtrcWrap>

						{supportUrl || email || location ? (
							<AtrcWrap className={classnames(AtrcPrefix('intro-auth--info'))}>
								<AtrcWrap
									className={classnames(
										AtrcPrefix('card'),
										//AtrcPrefix('p-40'),
										AtrcPrefix('bg-white'),
										'at-bg-cl',
										'at-bdr-rad'
									)}>
									<AtrcWrap
										className={classnames(AtrcPrefix('card-header'), 'at-p')}>
										<AtrcWord
											tag='h5'
											className={classnames(
												AtrcPrefix('card-heading'),
												AtrcPrefix('m-0'),
												'at-m'
											)}>
											{__('Contact Information', 'atrc-prefix-atrc')}
										</AtrcWord>
									</AtrcWrap>
									<AtrcHr className={classnames('at-m')} />

									<AtrcWrap
										className={classnames(AtrcPrefix('card-body'), 'at-p')}>
										<AtrcWrap
											className={classnames(
												AtrcPrefix('prsn-detail'),
												'at-flx',
												'at-flx-col',
												'at-gap'
											)}>
											{supportUrl ? (
												<AtrcWrap
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcWrap
														className={classnames(
															'at-flx',
															'at-al-itm-ctr',
															'at-w',
															'at-gap',
															AtrcPrefix('prsn-icon-wrp')
														)}>
														<AtrcIcon
															type='bootstrap'
															icon={BsFiles}
														/>
														<AtrcWord
															tag='span'
															variant='bold'>
															{__('Support:', 'atrc-prefix-atrc')}
														</AtrcWord>
													</AtrcWrap>
													<AtrcLink
														className={classnames('at-btn')}
														href={supportUrl}
														target='__blank'>
														{__('Get support', 'atrc-prefix-atrc')}
													</AtrcLink>
												</AtrcWrap>
											) : null}

											{email ? (
												<AtrcWrap
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcWrap
														className={classnames(
															'at-flx',
															'at-al-itm-ctr',
															'at-w',
															'at-gap',
															AtrcPrefix('prsn-icon-wrp')
														)}>
														<AtrcIcon
															type='bootstrap'
															icon={BsEnvelope}
														/>
														<AtrcWord
															tag='span'
															variant='bold'>
															{__('Email:', 'atrc-prefix-atrc')}
														</AtrcWord>
													</AtrcWrap>

													<AtrcWord
														tag='a'
														href={'mailto:' + email}
														target='__blank'>
														{email}
													</AtrcWord>
												</AtrcWrap>
											) : null}
											{location ? (
												<AtrcWrap
													className={classnames('at-flx', 'at-al-itm-ctr')}>
													<AtrcWrap
														className={classnames(
															'at-flx',
															'at-al-itm-ctr',
															'at-w',
															'at-gap',
															AtrcPrefix('prsn-icon-wrp')
														)}>
														<AtrcIcon
															type='bootstrap'
															icon={BsGeoAlt}
														/>
														<AtrcWord
															tag='span'
															variant='bold'>
															{__('Location:', 'atrc-prefix-atrc')}
														</AtrcWord>
													</AtrcWrap>
													<AtrcWord tag='span'>{location}</AtrcWord>
												</AtrcWrap>
											) : null}
										</AtrcWrap>

										{facebook || twitter ? (
											<AtrcWrap
												className={classnames(AtrcPrefix('social'), 'at-m')}>
												<AtrcWrap
													className={classnames(
														'at-flx',
														'at-al-itm-ctr',
														'at-jfy-cont-ctr',
														'at-gap'
													)}>
													{facebook ? (
														<AtrcLink
															className={classnames(
																'at-flx',
																'at-al-itm-ctr',
																'at-jfy-cont-ctr',
																'at-bdr',
																'at-bdr-rad',
																'at-w',
																'at-h',
																AtrcPrefix('round-bdr')
															)}
															href={facebook}
															target='__blank'>
															<AtrcIcon
																className={classnames()}
																type='bootstrap'
																icon={BsFacebook}
															/>
														</AtrcLink>
													) : null}

													{twitter ? (
														<AtrcLink
															className={classnames(
																'at-flx',
																'at-al-itm-ctr',
																'at-jfy-cont-ctr',
																'at-bdr',
																'at-bdr-rad',
																'at-w',
																'at-h',
																AtrcPrefix('round-bdr')
															)}
															href={twitter}
															target='__blank'>
															<AtrcIcon
																className={classnames()}
																type='bootstrap'
																icon={BsTwitter}
															/>
														</AtrcLink>
													) : null}
												</AtrcWrap>
											</AtrcWrap>
										) : null}
									</AtrcWrap>
								</AtrcWrap>
							</AtrcWrap>
						) : null}
					</AtrcWrap>

					<AtrcWrap className='at-col-md-8 at-col-lg-9'>
						<AtrcWrap className='at-row'>
							{bannerColumns.map((bannerCol, iDx) => (
								<AtrcWrap
									className='at-col-md-4'
									key={iDx}>
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
												<AtrcIcon
													type='bootstrap'
													icon={bannerCol.icon}
												/>
											</AtrcWrap>
											<AtrcWrap className={classnames(AtrcPrefix('txt-white'))}>
												<AtrcWord
													tag='p'
													variant='lead'
													className={classnames('at-m')}>
													{bannerCol.title}
												</AtrcWord>
												<AtrcWord
													tag='h2'
													className={classnames('at-m')}>
													{bannerCol.subtitle}
												</AtrcWord>
											</AtrcWrap>
										</AtrcWrap>
									</AtrcWrap>
								</AtrcWrap>
							))}
						</AtrcWrap>

						<AtrcWrap className={classnames('at-m', 'at-row')}>
							{links.map((link, iDx) => (
								<AtrcWrap
									className='at-col-md-3'
									key={iDx}>
									<AtrcWrap
										className={classnames(
											AtrcPrefix('card'),
											AtrcPrefix('bg-white'),
											'at-bg-cl',
											'at-bdr-rad'
										)}>
										<AtrcWrap
											className={classnames(AtrcPrefix('card-header'), 'at-p')}>
											<AtrcWrap
												className={classnames(
													'at-flx',
													'at-al-itm-ctr',
													'at-gap'
												)}>
												<AtrcIcon
													type='bootstrap'
													icon={link.icon}
												/>
												<AtrcWord
													tag='h5'
													className={classnames(
														AtrcPrefix('card-heading'),
														'at-m'
													)}>
													{link.title}
												</AtrcWord>
											</AtrcWrap>
										</AtrcWrap>
										<AtrcHr className={classnames('at-m')} />

										<AtrcWrap
											className={classnames(AtrcPrefix('card-body'), 'at-p')}>
											<AtrcWord
												tag='p'
												className={classnames('at-m')}>
												{link.subtitle}
											</AtrcWord>
											<AtrcLink
												variant='primary'
												className={classnames('at-m', 'at-btn')}
												href={link.buttonLink}
												target='__blank'>
												{link.buttonText}
											</AtrcLink>
										</AtrcWrap>
										{/* end of card body */}
									</AtrcWrap>
									{/* end of card */}
								</AtrcWrap>
							))}
						</AtrcWrap>
						{/* end of row */}

						{settingLinks ? (
							<AtrcWrap
								className={classnames(
									AtrcPrefix('card'),
									//AtrcPrefix('p-40'),
									AtrcPrefix('bg-white'),
									'at-bg-cl',
									'at-m',
									'at-bdr-rad'
								)}>
								<AtrcWrap
									className={classnames(AtrcPrefix('card-header'), 'at-p')}>
									<AtrcWrap
										className={classnames('at-flx', 'at-al-itm-ctr', 'at-gap')}>
										<AtrcIcon
											type='bootstrap'
											icon={BsLink45Deg}
										/>
										<AtrcWord
											tag='h5'
											className={classnames(
												AtrcPrefix('card-heading'),
												'at-m'
											)}>
											{__('Quick links to settings', 'atrc-prefix-atrc')}
										</AtrcWord>
									</AtrcWrap>
								</AtrcWrap>
								<AtrcHr className={classnames('at-m')} />

								<AtrcWrap
									className={classnames(AtrcPrefix('card-body'), 'at-p')}>
									<AtrcWrap
										className={classnames(
											AtrcPrefix('btn-grp'),
											'at-row',
											'at-gap'
										)}>
										{settingLinks.map((settinLink, iDx) => (
											<AtrcWrap
												className={classnames('at-col-md-2m3', 'at-flx')}
												key={iDx}>
												<AtrcLink
													className={classnames(
														'at-jfy-cont-ctr',
														'at-p',
														'at-flx',
														'at-al-itm-ctr',
														'at-gap',
														'at-flx-grw-1',
														'at-btn'
													)}
													href={settinLink.link}>
													<AtrcIcon
														type='bootstrap'
														icon={settinLink.icon}
													/>
													{settinLink.title}
												</AtrcLink>
											</AtrcWrap>
										))}
									</AtrcWrap>
									{/* end of row */}
								</AtrcWrap>
								{/* end of card body */}
							</AtrcWrap>
						) : null}
						{/* end of card */}

						<AtrcWrap className={classnames('at-m', 'at-row')}>
							<AtrcWrap className='at-col-12'>
								<AtrcWrap
									className={classnames(
										AtrcPrefix('card'),
										AtrcPrefix('bg-white'),
										'at-bg-cl',
										'at-bdr-rad'
									)}>
									<AtrcWrap
										className={classnames(AtrcPrefix('card-header'), 'at-p')}>
										<AtrcWrap
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-gap'
											)}>
											<AtrcIcon
												type='bootstrap'
												icon={BsBell}
											/>
											<AtrcWord
												tag='h5'
												className={classnames(
													AtrcPrefix('card-heading'),
													'at-m'
												)}>
												Change Log
											</AtrcWord>
										</AtrcWrap>
									</AtrcWrap>
									<AtrcHr className={classnames('at-m')} />

									<AtrcWrap
										className={classnames(AtrcPrefix('card-body'), 'at-p')}>
										<div
											className={classnames(
												'at-changelog-wrap',
												'at-p',
												'at-bdr',
												'at-bg-img'
											)}>
											<pre className='at-changelog'>{changelog}</pre>
										</div>
									</AtrcWrap>
									{/* end of card body */}
								</AtrcWrap>
								{/* end of card */}
							</AtrcWrap>
							{/* end of col-md-7 */}
						</AtrcWrap>
						{/* end of row */}
					</AtrcWrap>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default AtrcLanding;
