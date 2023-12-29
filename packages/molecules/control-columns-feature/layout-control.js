/*WordPress*/
import { withInstanceId } from '@wordpress/compose';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
import ColumnLayout from './columns-layout';

const AtrcControlColumnsAdvanced = (props) => {
	const {
		label,
		instanceId,
		value,
		columns,
		className = '',
		variant = '',
		onChange = () => {},
		allowedDevices = true,
		...defaultProps
	} = props;

	/* Return null since no device */
	if (!allowedDevices) {
		return null;
	}

	const id = `control-advanced-columns-${instanceId}`;

	return (
		<ColumnLayout
			id={id}
			className={classnames(
				AtrcPrefix('ctrl-select-device'),
				className,
				variant ? AtrcPrefix('ctrl-select-device') + '-' + variant : ''
			)}
			label={label}
			value={value}
			onChange={onChange}
			columns={columns}
			{...defaultProps}
		/>
	);
};

export default withInstanceId(AtrcControlColumnsAdvanced);
