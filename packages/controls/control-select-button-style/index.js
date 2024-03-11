/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ButtonStyleList from './options';

/*Local*/
const AtrcControlSelectButtonStyle = (props) => {
	const {
		value = '',
		label = __('Button style', 'atrc-prefix-atrc'),
		onChange = () => {},
		variant = '',
		className = '',
		...defaultProps
	} = props;

	return (
		<AtrcControlSelectButton
			className={classnames(
				AtrcPrefix('ctrl-select-btn-sty'),
				className,
				variant ? AtrcPrefix('ctrl-select-btn-sty') + '-' + variant : ''
			)}
			label={label}
			value={value}
			options={ButtonStyleList()}
			onChange={onChange}
			allowReset={true}
			{...defaultProps}
		/>
	);
};
export default AtrcControlSelectButtonStyle;
