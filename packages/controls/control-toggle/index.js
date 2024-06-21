import React from 'react';

/*WordPress*/
import { ToggleControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlToggle = (props) => {
	const {
		variant = '',
		wrapProps = {},
		className = '',
		label = '',
		onChange = () => {},
		checked = false,
		...defaultProps
	} = props;

	return (
		<AtrcWrapLib {...wrapProps}>
			<ToggleControl
				className={classnames(
					AtrcPrefix('tog'),
					className,
					variant ? AtrcPrefix('tog') + '-' + variant : ''
				)}
				label={label}
				checked={checked}
				onChange={onChange}
				{...defaultProps}
			/>
		</AtrcWrapLib>
	);
};
export default AtrcControlToggle;
