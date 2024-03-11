/*WordPress*/
import { Dropdown } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcDropdown = (props) => {
	const {
		className = '',
		variant = '',
		renderToggle = '',
		renderContent = '',
		renderContentStyle = {},
		...defaultProps
	} = props;

	return (
		<Dropdown
			className={classnames(
				AtrcPrefix('dropdown'),
				className,
				variant ? AtrcPrefix('dropdown') + '-' + variant : ''
			)}
			renderToggle={(args) => (
				<AtrcWrap variant='render-tog'>{renderToggle(args)}</AtrcWrap>
			)}
			renderContent={(args) => (
				<AtrcWrap
					variant='dropdown-cont'
					style={renderContentStyle}>
					{renderContent(args)}
				</AtrcWrap>
			)}
			{...defaultProps}
		/>
	);
};

export default AtrcDropdown;
