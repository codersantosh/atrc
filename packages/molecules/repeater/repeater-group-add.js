/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import { BsPlusSquare } from 'react-icons/bs';
import classNames from 'classnames';

/* Atoms */
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/* Molecules */

/* Local */
const AtrcRepeaterGroupAdd = (props) => {
	const {
		addGroup,
		tooltipText = __('Add repeater fields', 'atrc-prefix-atrc'),
		label = __('Add repeater fields', 'atrc-prefix-atrc'),
	} = props;

	return (
		<AtrcButton
			hasIcon={true}
			onClick={addGroup}
			className={classNames('at-m')}>
			<AtrcIcon
				type='bootstrap'
				icon={BsPlusSquare}
			/>
			{label}
		</AtrcButton>
	);
};

export default AtrcRepeaterGroupAdd;
