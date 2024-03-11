/*Library*/
import classnames from 'classnames';

/*Controls*/
import AtrcControlSelectButtonDevice from '../control-select-button-device';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import TextAlignOptions from './options';
import { __ } from '@wordpress/i18n';

/*Local*/
const AtrcControlTextAlignDevice = (props) => {
	const {
		label = __('Text align', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		...defaultProps
	} = props;

	return (
		<AtrcControlSelectButtonDevice
			label={label}
			className={classnames(
				AtrcPrefix('ctrl-txt-al-device'),
				className,
				variant ? AtrcPrefix('ctrl-txt-al-device') + '-' + variant : ''
			)}
			options={TextAlignOptions()}
			value={value}
			onChange={onChange}
			{...defaultProps}
		/>
	);
};
export default AtrcControlTextAlignDevice;
