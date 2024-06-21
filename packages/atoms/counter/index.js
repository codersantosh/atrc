import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcText from '../text';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcCounter = (props) => {
	const { className = '', value = {}, ...defaultProps } = props;

	return (
		<AtrcText
			className={classnames(AtrcPrefix('cntr'), className)}
			dataFrom={value.frm}
			dataTo={value.to}
			{...defaultProps}>
			{value.frm}
		</AtrcText>
	);
};

export default AtrcCounter;
