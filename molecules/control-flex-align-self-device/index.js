/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcControlSelectButtonDevice } from '../index';

import AlignSelfOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlFlexAlignSelfDevice = (props) => {
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
				AtrcPrefix('ctrl-flx-al-slf-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-al-slf-device') + '-' + variant : ''
			)}
			options={AlignSelfOptions}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexAlignSelfDevice;
