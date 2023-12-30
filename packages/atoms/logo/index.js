/* Library */
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../wrap';
import AtrcImg from '../img';
import AtrcLink from '../link';

import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcLogo = (props) => {
	const {
		variant = '',
		className = '',
		src = '',
		imgProps = {},
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('logo'),
				className,
				variant ? AtrcPrefix('logo') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcLink
				type='nav-lnk'
				to={'/'}
				end={true}>
				<AtrcImg
					variant='logo'
					src={src}
					{...imgProps}
				/>
			</AtrcLink>
		</AtrcWrap>
	);
};

export default AtrcLogo;
