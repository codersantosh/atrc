import React from 'react';

/*WordPress*/
import { Tooltip } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcSpan from '../../atoms/span';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcTooltip = (props) => {
	const {
		children = '',
		className = '',
		variant = '',
		...defaultProps
	} = props;

	return (
		<Tooltip {...defaultProps}>
			<AtrcSpan
				className={classnames(
					AtrcPrefix('ttip'),
					className,
					variant ? AtrcPrefix('ttip') + '-' + variant : ''
				)}>
				{children}
			</AtrcSpan>
		</Tooltip>
	);
};
export default AtrcTooltip;
