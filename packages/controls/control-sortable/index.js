/*Attributes Structure
items Object
Children can be anything.
{[
    {
        children: 'hello1',
    },
    {
        children: 'hello2',
    },
]}

* */

/*WordPress*/
import { sprintf, __ } from '@wordpress/i18n';

/*Library*/
import {
	sortableContainer,
	sortableElement,
	sortableHandle,
} from 'react-sortable-hoc';

import classnames from 'classnames';
import { find } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';
import AtrcWrap from '../../atoms/wrap';
import AtrcSpan from '../../atoms/span';
import { AtrcIconSvg } from '../../atoms/icon';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Controls */

/* Utils */
import AtrcMoveArrayValue from '../../utils/move-array-value';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export const AtrcSortableDragHandle = sortableHandle(() => (
	<AtrcSpan
		className={classnames(AtrcPrefix('ctrl-sort-drag-handle'), 'at-cur')}>
		<AtrcIconSvg
			className={classnames(AtrcPrefix('ctrl-sort-drag-handle-icon'))}
			svg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="at-svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"/></svg>'
		/>
	</AtrcSpan>
));

const SortableItem = sortableElement(
	({ sortableValue, items, useDragHandle, sortableItemProps }) => {
		const item = find(items, { value: sortableValue });
		if (!item) {
			return (
				<AtrcNotice>
					{sprintf(
						__('Item not found with value %s', 'atrc-prefix-atrc'),
						String(sortableValue)
					)}
				</AtrcNotice>
			);
		}
		const { className = '', variant = '', children, ...defaultProps } = item;

		return (
			<AtrcWrap
				className={classnames(
					AtrcPrefix('ctrl-sort-item'),
					'at-flx',
					'at-al-itm-st',
					'at-gap',
					'at-p',
					'at-bg-cl',
					'at-bdr',
					className,
					variant ? AtrcPrefix('ctrl-sort-item') + '-' + variant : ''
				)}
				{...sortableItemProps}
				{...defaultProps}>
				{useDragHandle ? <AtrcSortableDragHandle /> : null}
				<AtrcWrap
					className={classnames(
						AtrcPrefix('ctrl-sort-grp'),
						'at-flx-grw-1',
						!useDragHandle ? 'at-cur' : ''
					)}>
					{children}
				</AtrcWrap>
			</AtrcWrap>
		);
	}
);

const SortableContainer = sortableContainer((props) => {
	const {
		value = {},
		variant = '',
		className = '',
		onChange = () => {},
		children,
		...defaultProps
	} = props;
	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-sort'),
				className,
				'at-flx',
				'at-flx-col',
				'at-gap',
				variant ? AtrcPrefix('ctrl-sort') + '-' + variant : ''
			)}
			{...defaultProps}>
			{children}
		</AtrcWrap>
	);
});

const AtrcControlSortable = (props) => {
	const {
		label = '',
		variant = '',
		className = '',
		onChange = () => {},
		value = [],
		items = [{}],
		useDragHandle = true,
		sortableItemProps = {},
		...defaultProps
	} = props;

	const handleSortEnd = ({ oldIndex, newIndex }) => {
		const updatedValues = AtrcMoveArrayValue(value, oldIndex, newIndex);
		onChange(updatedValues);
	};

	return (
		<>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}
			<SortableContainer
				onSortEnd={handleSortEnd}
				useDragHandle={useDragHandle}>
				{value.map((sortableValue, index) => (
					<SortableItem
						key={`${AtrcPrefix('ctrl-sort')}-${index}`}
						index={index}
						sortableValue={sortableValue}
						items={items}
						useDragHandle={useDragHandle}
						sortableItemProps={sortableItemProps}
					/>
				))}
			</SortableContainer>
		</>
	);
};

export default AtrcControlSortable;
