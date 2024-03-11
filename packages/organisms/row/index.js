/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcRow = (props) => {
	const {
		className = '',
		variant = '',
		children = '',
		...defaultProps
	} = props;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('row'),
				className,
				variant ? AtrcPrefix('row') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};
export default AtrcRow;
