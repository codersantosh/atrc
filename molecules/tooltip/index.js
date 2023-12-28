/*WordPress*/
import { Tooltip } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcSpan } from '../../atoms';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
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
