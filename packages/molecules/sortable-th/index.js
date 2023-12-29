/*WordPress*/
import { chevronUp, chevronDown } from '@wordpress/icons';

import { useState } from '@wordpress/element';

/*Inbuilt*/
import { AtrcTh, AtrcSpan, AtrcIcon, AtrcLink } from '../../atoms';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components and Functions*/
function getIcon(order, isHovered) {
	if (isHovered) {
		return order === 'asc' ? chevronUp : chevronDown;
	}

	return order === 'asc' ? chevronDown : chevronUp;
}

const AtrcSortableTh = ({
	icon,
	label = null,
	isActive,
	order,
	onOrder,
	colSpan = 1,
	className = null,
	variant = '',
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<AtrcTh
			colSpan={colSpan}
			isSorting={true}
			isSortActive={isActive}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={classnames(
				AtrcPrefix('sortable-th'),
				className,
				variant ? AtrcPrefix('sortable-th') + '-' + variant : ''
			)}>
			<AtrcLink
				type='btn'
				className='at-flx at-al-itm-ctr'
				onClick={() => {
					if (order === 'asc') {
						onOrder('desc');
					} else {
						onOrder('asc');
					}
				}}>
				{icon && (
					<AtrcIcon
						type='wp'
						icon={icon}
					/>
				)}
				{label && <AtrcSpan>{label}</AtrcSpan>}
				<AtrcIcon
					type='wp'
					icon={getIcon(order, isHovered)}
				/>
			</AtrcLink>
		</AtrcTh>
	);
};
export default AtrcSortableTh;
