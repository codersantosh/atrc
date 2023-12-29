/*WordPress*/
import { ButtonGroup } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcButtonGroup = (props) => {
	const { className = '', variant = '', ...defaultProps } = props;

	return (
		<ButtonGroup
			className={classnames(
				AtrcPrefix('btn-grp'),
				'at-flx',
				'at-al-itm-ctr',
				'at-flx-wrp',
				'at-gap',
				className,
				variant ? AtrcPrefix('btn-grp') + '-' + variant : ''
			)}
			{...defaultProps}
		/>
	);
};
export default AtrcButtonGroup;
