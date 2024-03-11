/*WordPress*/
import { createContext } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { sortableContainer } from 'react-sortable-hoc';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcHr from '../../atoms/hr';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcMoveArrayValue from '../../utils/move-array-value';

/*Local*/
export const AtrcRepeaterContextData = createContext();

const SortableContainer = sortableContainer((props) => {
	const { children } = props;
	return (
		<AtrcWrap className={classnames(AtrcPrefix('repeater-grp-wrp'))}>
			{children}
		</AtrcWrap>
	);
});

const RepeaterGroupWrap = ({ children }) => {
	return (
		<AtrcWrap className={classnames(AtrcPrefix('repeater-grp-wrp'))}>
			{children}
		</AtrcWrap>
	);
};

const AtrcRepeater = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		groups,
		addGroup,
		labelProps = {
			className: 'at-m',
		},
		value = [] /* for sortable */,
		onChange = () => {} /* for sortable */,
		isSortable = false /* for sortable */,
		useDragHandle = true /* for sortable */,
		...defaultProps
	} = props;

	const handleSortEnd = ({ oldIndex, newIndex }) => {
		const updatedValues = AtrcMoveArrayValue(value, oldIndex, newIndex);
		onChange(updatedValues);
	};

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('repeater'),
				className,
				'at-flx-grw-1',
				variant ? AtrcPrefix() + variant : ''
			)}
			{...defaultProps}>
			{label ? (
				<>
					<AtrcLabel {...labelProps}>{label}</AtrcLabel>
					<AtrcHr className={classnames('at-m')} />
				</>
			) : null}
			<AtrcRepeaterContextData.Provider value={{ isSortable, useDragHandle }}>
				{isSortable ? (
					<SortableContainer
						onSortEnd={handleSortEnd}
						useDragHandle={useDragHandle}>
						{groups()}
					</SortableContainer>
				) : (
					<RepeaterGroupWrap>{groups()}</RepeaterGroupWrap>
				)}
			</AtrcRepeaterContextData.Provider>
			{addGroup()}
		</AtrcWrap>
	);
};

export default AtrcRepeater;
