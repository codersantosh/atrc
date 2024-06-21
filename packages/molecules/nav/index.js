import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcLink from '../../atoms/link';

/* Molecules */
import AtrcLi from '../list/li';
import AtrcList from '../list';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const NavLinkLoop = (props) => {
	const { navs, linkProps = {}, ...defaultProps } = props;

	if (!navs) {
		return null;
	}

	return navs.map(function (nav, key) {
		const newLinkProps = {
			...nav,
			...linkProps,
		};

		return (
			<AtrcLi
				key={key}
				className={classnames(AtrcPrefix('nav-li'))}
				{...defaultProps}>
				<AtrcLink
					type='nav-lnk'
					{...newLinkProps}
				/>
			</AtrcLi>
		);
	});
};

const AtrcNav = (props) => {
	const {
		className = '',
		variant = '',
		navs,
		ulProps = {},
		liProps = {},
		linkProps = {},
		...defaultProps
	} = props;

	return (
		<nav
			className={classnames(
				AtrcPrefix('nav'),
				className,
				variant ? AtrcPrefix('nav') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcList
				{...ulProps}
				className={classnames(
					AtrcPrefix('nav-ul'),
					ulProps.className || null,
					variant !== 'vertical' ? 'at-flx at-gap at-p' : ''
				)}>
				<NavLinkLoop
					{...liProps}
					className={classnames(
						liProps.className || null,
						variant !== 'vertical' ? 'at-m at-p' : ''
					)}
					navs={navs}
					linkProps={linkProps}
				/>
			</AtrcList>
		</nav>
	);
};
export default AtrcNav;
