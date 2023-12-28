/*WordPress*/
import { ToggleControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcToggle = (props) => {
	const {
		variant = '',
		className = '',
		label = '',
		onChange = () => {},
		checked = false,
		...defaultProps
	} = props;

	return (
		<ToggleControl
			className={classnames(
				AtrcPrefix('tog'),
				className,
				variant ? AtrcPrefix('tog') + '-' + variant : ''
			)}
			label={label}
			checked={checked}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcToggle;
