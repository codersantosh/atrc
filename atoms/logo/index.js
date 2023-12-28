/*Inbuilt*/
import { AtrcImg, AtrcWrap, AtrcLink } from '../index';
import classnames from 'classnames';

/*Inbuilt*/
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
