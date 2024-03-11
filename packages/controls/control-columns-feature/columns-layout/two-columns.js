/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { TwoColumnsOptions } from '../options';

/* Local */
const TwoColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;
	return (
		<AtrcControlSelectButton
			label={__('Two columns layout', 'atrc-prefix-atrc')}
			value={value}
			options={TwoColumnsOptions()}
			onChange={onChange}
			allowReset={false}
		/>
	);
};

export default TwoColumnsLayout;
