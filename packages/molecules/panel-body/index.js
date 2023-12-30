/*WordPress*/
import { PanelBody } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcPanelBody = (props) => {
	const {
		children,
		className = '',
		variant = '',
		bodyProps = {},
		...defaultProps
	} = props;

	return (
		<PanelBody
			className={classnames(
				AtrcPrefix('pnl-body'),
				className,
				defaultProps.variant ? null : 'at-m at-p at-bdr',
				variant ? AtrcPrefix('pnl-body') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcWrap
				{...bodyProps}
				className={classnames(
					AtrcPrefix('pnl-body-cont'),
					bodyProps.variant ? null : 'at-p at-bg-cl at-bdr',
					bodyProps.className ? bodyProps.className : null
				)}>
				{children}
			</AtrcWrap>
		</PanelBody>
	);
};
export default AtrcPanelBody;
