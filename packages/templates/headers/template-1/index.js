/*WordPress*/
import { __ } from '@wordpress/i18n';

import { moreHorizontalMobile } from '@wordpress/icons';

/*Library*/
import { BsBell, BsList, BsX } from 'react-icons/bs';

import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcIcon from '../../../atoms/icon';
import AtrcLogo from '../../../atoms/logo';

/* Molecules */
import AtrcTooltip from '../../../molecules/tooltip';
import AtrcNav from '../../../molecules/nav';
import AtrcDropdownMenu from '../../../molecules/dropdown-menu';

/* Organisms */
import AtrcHeader from '../../../organisms/header';
import AtrcFloatingSidebar from '../../../organisms/floating-sidebar';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcHeaderTemplate1 = (props) => {
	const {
		className = '',
		variant = '',
		logo = null,
		primaryNav = null,
		secondaryNav = null,
		dropdownNav = null,
		notification = null,
		floatingSidebar = null,
		button = null,
		...defaultProps
	} = props;

	return (
		<AtrcHeader
			className={classnames(
				AtrcPrefix('main-header'),
				className,
				variant ? AtrcPrefix('ls-header-admin') + '-' + variant : '',
				'at-flx',
				'at-flx-col',
				'at-p'
			)}
			{...defaultProps}>
			<AtrcWrap className='at-flx at-jfy-cont-btw'>
				<AtrcWrap className='at-flx at-jfy-cont-st at-al-itm-ctr'>
					{logo ? <AtrcLogo {...logo} /> : null}
					{primaryNav ? (
						<AtrcNav
							className={classnames('at-p')}
							variant='primary'
							{...primaryNav}
						/>
					) : null}
				</AtrcWrap>
				<AtrcWrap className='at-flx at-jfy-cont-end at-al-itm-ctr'>
					{secondaryNav ? (
						<AtrcNav
							className={classnames('at-p')}
							variant='secondary'
							{...secondaryNav}
						/>
					) : null}
					<AtrcWrap
						className={classnames(
							'at-flx',
							'at-al-itm-ctr',
							' at-gap',
							AtrcPrefix('btn-grp-gap')
						)}>
						{button ? (
							<AtrcButton
								variant='primary'
								{...button}
							/>
						) : null}
						{dropdownNav ? (
							<AtrcDropdownMenu
								icon={moreHorizontalMobile}
								label={__('More', 'atrc-prefix-atrc')}>
								{() => (
									<>
										<AtrcNav
											variant='vertical'
											{...dropdownNav}
										/>
									</>
								)}
							</AtrcDropdownMenu>
						) : null}
						{notification ? (
							<AtrcFloatingSidebar
								direction='right'
								variant='over'
								renderToggle={({ isOpen, onToggle }) => (
									<AtrcButton
										variant='devices'
										aria-expanded={isOpen}
										onClick={onToggle}>
										<AtrcTooltip
											text={
												isOpen
													? __('Close notification', 'atrc-prefix-atrc')
													: __('Open notification', 'atrc-prefix-atrc')
											}>
											<AtrcIcon
												type='bootstrap'
												icon={BsBell}
											/>
										</AtrcTooltip>
									</AtrcButton>
								)}
								renderContent={({ isOpen, onToggle }) => (
									<AtrcWrap>
										<AtrcButton
											variant='devices'
											aria-expanded={isOpen}
											onClick={onToggle}>
											<AtrcTooltip
												text={__('Close notification', 'atrc-prefix-atrc')}>
												<AtrcIcon
													type='bootstrap'
													icon={BsX}
												/>
											</AtrcTooltip>
										</AtrcButton>
										{notification}
									</AtrcWrap>
								)}
							/>
						) : null}
						{floatingSidebar ? (
							<AtrcFloatingSidebar
								direction='right'
								variant='over'
								renderToggle={({ isOpen, openPortal, onToggle }) => (
									<AtrcButton
										variant='devices'
										aria-expanded={isOpen}
										onClick={openPortal}>
										<AtrcTooltip
											text={
												isOpen
													? __('Close sidebar', 'atrc-prefix-atrc')
													: __('Open sidebar', 'atrc-prefix-atrc')
											}>
											<AtrcIcon
												type='bootstrap'
												icon={BsList}
											/>
										</AtrcTooltip>
									</AtrcButton>
								)}
								renderContent={({ isOpen, onToggle, onClose }) => (
									<AtrcWrap>
										<AtrcWrap
											className={classnames('at-flx', 'at-jfy-cont-end')}>
											<AtrcButton
												variant='close'
												aria-expanded={isOpen}
												onClick={onClose}
												className={classnames(
													'at-p',
													'at-m',
													'at-w',
													'at-h',
													'at-flx',
													'at-al-itm-ctr',
													'at-jfy-cont-ctr'
												)}>
												<AtrcTooltip
													text={__('Close notification', 'atrc-prefix-atrc')}>
													<AtrcIcon
														type='bootstrap'
														icon={BsX}
													/>
												</AtrcTooltip>
											</AtrcButton>
										</AtrcWrap>
										{floatingSidebar()}
									</AtrcWrap>
								)}
							/>
						) : null}
					</AtrcWrap>
				</AtrcWrap>
			</AtrcWrap>
		</AtrcHeader>
	);
};

export default AtrcHeaderTemplate1;
