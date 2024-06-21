import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { chevronDown, chevronUp } from '@wordpress/icons';

import { useContext, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

import { sortableElement } from 'react-sortable-hoc';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcHr from '../../atoms/hr';

/* Molecules */
import AtrcButtonGroup from '../button-group';
import { AtrcRepeaterContextData } from './index';

/* Organisms */
import AtrcHeader from '../../organisms/header';
import AtrcFooter from '../../organisms/footer';

/* Controls */
import { AtrcSortableDragHandle } from '../../controls/control-sortable';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RepeaterGroup = (props) => {
	const {
		groupIndex,
		deleteGroup,
		children,
		groupTitle = __('Repeater fields', 'atrc-prefix-atrc'),
		deleteTitle = __('Delete', 'atrc-prefix-atrc'),
		cancelTitle = __('Cancel', 'atrc-prefix-atrc'),
	} = props;
	const sortableData = useContext(AtrcRepeaterContextData);
	const {
		isSortable = false /* for sortable */,
		useDragHandle = true /* for sortable */,
	} = sortableData;

	const [isOpen, onToggle] = useState(false);
	return (
		<AtrcWrap
			className={classnames(AtrcPrefix('rpt-grp'), 'at-m')}
			key={groupIndex}>
			<AtrcHeader
				className={classnames(
					AtrcPrefix('rpt-grp-hdr'),
					'at-flx',
					'at-al-itm-ctr',
					'at-bg-cl',
					'at-bdr'
				)}>
				{isSortable && useDragHandle ? <AtrcSortableDragHandle /> : null}
				<AtrcButton
					variant='link'
					className={classnames(
						'at-flx',
						'at-jfy-cont-st',
						'at-flx-grw-1',
						'at-m',
						AtrcPrefix('rpt-grp-hdr-btn')
					)}
					onClick={() => onToggle(!isOpen)}>
					{groupTitle}
				</AtrcButton>

				<AtrcWrap
					className={classnames(
						AtrcPrefix('rpt-grp-actions'),
						'at-flx',
						'at-al-itm-ctr',
						'at-gap',
						'at-p'
					)}>
					<AtrcButton
						className={classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr')}
						variant='link'
						onClick={() => onToggle(!isOpen)}>
						<AtrcIcon
							type={'wp'}
							size={18}
							icon={isOpen ? chevronUp : chevronDown}
						/>
					</AtrcButton>
				</AtrcWrap>
			</AtrcHeader>
			<AtrcWrap
				className={classnames(
					AtrcPrefix('rpt-grp-itms'),
					'at-bdr at-bg-cl',
					isOpen ? '' : 'at-d-non'
				)}
				key={groupIndex}>
				<AtrcWrap
					className={classnames(AtrcPrefix('rpt-grp-itms-fields'), 'at-p')}>
					{children}
				</AtrcWrap>
				<AtrcHr />
				<AtrcFooter className={classnames(AtrcPrefix('rpt-grp-ftr'), 'at-p')}>
					<AtrcButtonGroup>
						<AtrcButton
							variant='link'
							onClick={() => deleteGroup(groupIndex)}>
							{deleteTitle}
						</AtrcButton>
						<AtrcButton
							variant='link'
							onClick={() => onToggle(!isOpen)}>
							{cancelTitle}
						</AtrcButton>
					</AtrcButtonGroup>
				</AtrcFooter>
			</AtrcWrap>
		</AtrcWrap>
	);
};

const SortableItem = sortableElement((props) => {
	return <RepeaterGroup {...props} />;
});

const AtrcRepeaterGroup = (props) => {
	const { groupIndex, ...otherProps } = props;

	const sortableData = useContext(AtrcRepeaterContextData);
	const {
		isSortable = false /* for sortable */,
		useDragHandle = true /* for sortable */,
	} = sortableData;

	if (isSortable) {
		return (
			<SortableItem
				key={`${AtrcPrefix('ctrl-sort')}-${groupIndex}`}
				index={groupIndex}
				{...otherProps}
			/>
		);
	}
	return <RepeaterGroup {...props} />;
};
export default AtrcRepeaterGroup;
