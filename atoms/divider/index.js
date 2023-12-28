/*WordPress*/
import { __experimentalDivider as Divider } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcDivider = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<Divider
			className={classnames(
				AtrcPrefix('divider'),
				className,
				variant ? AtrcPrefix('divider') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcDivider;
