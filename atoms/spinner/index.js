/*WordPress*/
import { Spinner } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcSpinner = (props = {}) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<Spinner
			className={classnames(
				AtrcPrefix('spinner'),
				className,
				variant ? AtrcPrefix('spinner') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcSpinner;
