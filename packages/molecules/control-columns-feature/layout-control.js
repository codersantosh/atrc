/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
import ColumnLayout from './columns-layout';

const AtrcControlColumnsAdvanced = (props) => {
	const {
		label,
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

	return (
		<ColumnLayout
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

export default AtrcControlColumnsAdvanced;
