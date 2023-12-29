/*WordPress*/
import { PanelRow } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcPanelRow = (props) => {
	const { children, className = '', variant = '', ...defaultProps } = props;

	return (
		<PanelRow
			className={classnames(
				AtrcPrefix('pnl-row'),
				className,
				variant ? AtrcPrefix('pnl-row') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</PanelRow>
	);
};
export default AtrcPanelRow;
