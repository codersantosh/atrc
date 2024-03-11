/*WordPress*/
import { CheckboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlCheckbox = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<CheckboxControl
			className={classnames(
				AtrcPrefix('checkbox'),
				className,
				variant ? AtrcPrefix('checkbox') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcControlCheckbox;
