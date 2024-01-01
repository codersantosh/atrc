/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

import AlignContentOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlFlexAlignContentDevice = (props) => {
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
				AtrcPrefix('ctrl-flx-al-cont-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-al-cont-device') + '-' + variant : ''
			)}
			options={AlignContentOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexAlignContentDevice;
