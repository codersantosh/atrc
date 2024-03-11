/*Library*/
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*
Local
Combination of all links which contain a tag and
* button components
* */
const AtrcLink = (props) => {
	const {
		className = '',
		variant = '',
		type = 'a',
		to = '#',
		children = '',
		isButton = false,
		isActive = false,
		dangerouslySetInnerHTML = '',
		...defaultProps
	} = props;

	const thisClassName = classnames(
		!isButton ? AtrcPrefix('lnk') : null,
		!isButton ? 'at-txt' : null,
		className,
		variant ? AtrcPrefix('lnk') + '-' + variant : '',
		isActive ? AtrcPrefix('lnk-active') : null
	);

	if (type === 'nav-lnk') {
		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					classnames(AtrcPrefix('lnk-nav'), thisClassName)
				}
				{...defaultProps}>
				{children}
			</NavLink>
		);
	}

	if (type === 'router-link') {
		return (
			<Link
				className={thisClassName}
				to={to}
				{...defaultProps}>
				{children}
			</Link>
		);
	}
	if (dangerouslySetInnerHTML) {
		return (
			<a
				className={thisClassName}
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				{...defaultProps}
			/>
		);
	}
	return (
		<a
			className={thisClassName}
			{...defaultProps}>
			{children}
		</a>
	);
};
export default AtrcLink;
