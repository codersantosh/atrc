/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalToolsPanelItem as ToolsPanelItem } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcToolsPanelItem = (props) => {
	const { children, className = '', variant = '', ...defaultProps } = props;

	return (
		<ToolsPanelItem
			className={classnames(
				AtrcPrefix('tools-pnl-itm'),
				className,
				variant ? AtrcPrefix('tools-pnl-itm') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</ToolsPanelItem>
	);
};
export default AtrcToolsPanelItem;
