import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColumnLayout from './columns-layout';

/* Local */
const AtrcControlColumnsFeature = (props) => {
	const {
		label,
		value,
		columns,
		className = '',
		variant = '',
		onChange = () => {},
		...defaultProps
	} = props;

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

export default AtrcControlColumnsFeature;
