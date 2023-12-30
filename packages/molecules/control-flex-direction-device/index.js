/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

import FlexDirectionOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlFlexDirectionDevice = (props) => {
	const {
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	return (
		<AtrcControlSelectButtonDevice
			className={classnames(
				AtrcPrefix('ctrl-flx-dir-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-dir-device') + '-' + variant : ''
			)}
			options={FlexDirectionOptions}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexDirectionDevice;
