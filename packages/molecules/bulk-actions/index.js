import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcBulkActions = (props) => {
	const { className = '', children = '', ...defaultProps } = props;
	return (
		<AtrcWrap
			className={classnames(AtrcPrefix('bulk-actions'), className)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
};

export default AtrcBulkActions;
