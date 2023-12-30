/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcLink from '../../atoms/link';
import AtrcLi from '../../atoms/li';

import AtrcUl from '../ul';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
/*Local Components*/
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
			<AtrcUl
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
			</AtrcUl>
		</nav>
	);
};
export default AtrcNav;
