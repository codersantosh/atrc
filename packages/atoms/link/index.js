/*Library*/
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

/*Inbuilt*/
import AtrcButton from '../button';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
/*
Local Components
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
		prefix = true,
		dangerouslySetInnerHTML = '',
		...defaultProps
	} = props;

	if (type === 'btn' || 'button' === type) {
		return (
			<AtrcButton
				className={classnames(
					prefix ? AtrcPrefix('lnk-btn') : null,
					className,
					variant ? AtrcPrefix('lnk') + '-' + variant : ''
				)}
				{...defaultProps}>
				{children}
			</AtrcButton>
		);
	}
	if (type === 'nav-lnk') {
		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					classnames(
						prefix ? AtrcPrefix('lnk') : null,
						AtrcPrefix('lnk-nav'),
						className,
						variant ? AtrcPrefix('lnk') + '-' + variant : '',
						isActive ? AtrcPrefix('lnk-active') : undefined
					)
				}
				{...defaultProps}>
				{children}
			</NavLink>
		);
	}

	if (type === 'router-link') {
		return (
			<Link
				className={classnames(
					prefix ? AtrcPrefix('lnk') : null,
					className,
					variant ? AtrcPrefix('lnk') + '-' + variant : ''
				)}
				to={to}
				{...defaultProps}>
				{children}
			</Link>
		);
	}
	if (dangerouslySetInnerHTML) {
		return (
			<a
				className={classnames(
					prefix ? AtrcPrefix('lnk') : null,
					className,
					variant ? AtrcPrefix('lnk') + '-' + variant : ''
				)}
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				{...defaultProps}
			/>
		);
	}
	return (
		<a
			className={classnames(
				prefix ? AtrcPrefix('lnk') : null,
				className,
				variant ? AtrcPrefix('lnk') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</a>
	);
};
export default AtrcLink;
