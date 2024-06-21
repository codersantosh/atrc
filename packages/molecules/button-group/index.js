import React from 'react';

/*WordPress*/
import { ButtonGroup } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcButtonGroup = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<ButtonGroup
			className={classnames(
				AtrcPrefix('btn-grp'),
				'at-flx',
				'at-flx-wrp',
				'at-gap',
				className,
				variant ? AtrcPrefix('btn-grp') + '-' + variant : '',
				variant === 'vertical' ? 'at-al-itm-st at-flx-col' : 'at-al-itm-ctr'
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcButtonGroup;
