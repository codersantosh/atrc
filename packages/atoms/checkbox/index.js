/*WordPress*/
import { CheckboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcCheckbox = (props) => {
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
export default AtrcCheckbox;
