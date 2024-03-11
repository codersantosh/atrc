/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcMain = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		dangerouslySetInnerHTML = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			tag='main'
			className={classnames(
				AtrcPrefix('main'),
				className,
				variant ? AtrcPrefix() + variant : ''
			)}
			id={AtrcPrefix('main')}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcMain;
