/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalToolsPanel as ToolsPanel } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcToolsPanel = (props) => {
	const { children, className = '', variant = '', ...defaultProps } = props;

	return (
		<ToolsPanel
			className={classnames(
				AtrcPrefix('tools-pnl'),
				className,
				variant ? AtrcPrefix('tools-pnl') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</ToolsPanel>
	);
};
export default AtrcToolsPanel;
