/*WordPress*/
import { BaseControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcBase = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<BaseControl
			className={classnames(
				AtrcPrefix('bs'),
				className,
				variant ? AtrcPrefix('bs') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcBase;
