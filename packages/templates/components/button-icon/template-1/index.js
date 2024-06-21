import React from 'react';

/* Atoms */
import AtrcButton from '../../../../atoms/button';
import AtrcIcon from '../../../../atoms/icon';

/* Local */
const AtrcButtonIconTemplate1 = (props) => {
	const {
		iconPos = 'before',
		iconProps = null,
		children,
		text = '',
		...buttonDefaultProps
	} = props;

	return (
		<AtrcButton {...buttonDefaultProps}>
			{iconProps && 'after' !== iconPos ? <AtrcIcon {...iconProps} /> : null}
			{children || text}
			{iconProps && 'after' === iconPos ? <AtrcIcon {...iconProps} /> : null}
		</AtrcButton>
	);
};

export default AtrcButtonIconTemplate1;
