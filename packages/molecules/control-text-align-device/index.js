/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcControlSelectButtonDevice } from '../index';

import TextAlignOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlTextAlignDevice = (props) => {
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
				AtrcPrefix('ctrl-txt-al-device'),
				className,
				variant ? AtrcPrefix('ctrl-txt-al-device') + '-' + variant : ''
			)}
			options={TextAlignOptions}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlTextAlignDevice;
