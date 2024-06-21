import React from 'react';

/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlAlignmentMatrix = (props) => {
	const {
		label = '',
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		...defaultProps
	} = props;

	return (
		<>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}

			<AlignmentMatrixControl
				className={classnames(
					AtrcPrefix('ctrl-al-matrix'),
					className,
					variant ? AtrcPrefix('ctrl-al-matrix') + '-' + variant : ''
				)}
				value={value}
				onChange={onChange}
				label={label}
				{...defaultProps}
			/>
		</>
	);
};
export default AtrcControlAlignmentMatrix;
