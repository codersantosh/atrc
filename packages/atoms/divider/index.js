import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcIcon, { AtrcIconSvg } from '../icon';

/* Controls */
import { AtrcControlDividerDefaultSvg } from '../../controls/control-divider';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcDivider = (props) => {
	const { className = '', variant = '', value, ...defaultProps } = props;
	const thisClassnames = classnames(
		AtrcPrefix('divider'),
		className,
		variant ? AtrcPrefix('divider') + '-' + variant : ''
	);
	if (value) {
		if ('cust' === value.svgFrm && value.svg) {
			return (
				<AtrcIconSvg
					svg={value.svg}
					className={thisClassnames}
				/>
			);
		}
		if (value.svgDefd) {
			return (
				<AtrcIcon
					className={thisClassnames}
					icon={AtrcControlDividerDefaultSvg({
						svgDefd: value.svgDefd,
					})}
				/>
			);
		}
	}

	return null;
};
export default AtrcDivider;
