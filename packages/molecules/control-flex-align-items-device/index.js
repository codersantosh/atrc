/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

import AlignItemsOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlFlexAlignItemsDevice = (props) => {
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
				AtrcPrefix('ctrl-flx-al-itms-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-al-itms-device') + '-' + variant : ''
			)}
			options={AlignItemsOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexAlignItemsDevice;
