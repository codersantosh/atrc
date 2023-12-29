/*Library*/
import classnames from 'classnames';
import AtrcPrefix from '../../prefix-vars';

/*Inbuilt*/
import { AtrcControlSelectButtonDevice } from '../index';

import JustifyContentOptions from './options';

/*Local Components*/
const AtrcControlFlexJustifyContentDevice = (props) => {
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
				AtrcPrefix('ctrl-flx-jfy-cont-device'),
				className,
				variant ? AtrcPrefix('ctrl-flx-jfy-cont-device') + '-' + variant : ''
			)}
			options={JustifyContentOptions}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlFlexJustifyContentDevice;
