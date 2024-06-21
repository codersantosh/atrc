import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';
import { BsList, BsFillGrid3X3GapFill } from 'react-icons/bs';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/*  Organisms*/

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcButton from '../../../../atoms/button';
import AtrcIcon from '../../../../atoms/icon';
import AtrcResetButtonIcon from '../../../../atoms/reset-button-icon';
import AtrcText from '../../../../atoms/text';
import AtrcSpinner from '../../../../atoms/spinner';
import AtrcHr from '../../../../atoms/hr';

/* Controls */
import AtrcControlCheckbox from '../../../../controls/control-checkbox';
import AtrcControlToggle from '../../../../controls/control-toggle';
import AtrcControlSelect from '../../../../controls/control-select';

/* Molecules */
import AtrcButtonGroup from '../../../../molecules/button-group';
import AtrcSearch from '../../../../molecules/search';
import AtrcTooltip from '../../../../molecules/tooltip';
import AtrcPagination from '../../../../molecules/pagination';

/* Local */
const MapElements = ({ place, elements, atrcProps }) => {
	return elements.map(function (element, iDx) {
		iDx = iDx + place;
		if ('word' === element) {
			return (
				<AtrcText
					key={`me-${iDx}`}
					{...atrcProps.word}
				/>
			);
		}
		if ('button' === element) {
			return <AtrcButton {...atrcProps.button} />;
		}
		if ('title' === element) {
			return (
				<AtrcText
					key={`me-${iDx}`}
					tag='h2'
					className={classnames(AtrcPrefix('m-0'), 'at-m')}
					{...atrcProps.title}
				/>
			);
		}

		if ('addNew' === element) {
			return (
				<AtrcButton
					key={`me-${iDx}`}
					isLink
					variant='primary'
					type='router-link'
					{...atrcProps.addNew}
				/>
			);
		}

		if ('toggleFilter' === element) {
			return (
				<AtrcControlToggle
					key={`me-${iDx}`}
					{...atrcProps.toggleFilter}
				/>
			);
		}

		if ('filterButtonGroup' === element || 'filterButtonGroup1' === element) {
			const buttons = atrcProps[element].buttons;
			return (
				<AtrcButtonGroup
					key={`me-${iDx}`}
					{...(buttons.buttonGroupProps ? buttons.buttonGroupProps : null)}>
					{buttons.map(function (buttonProps, btnIndex) {
						return (
							<AtrcButton
								key={`btn-${btnIndex}`}
								variant='light'
								{...buttonProps}
							/>
						);
					})}
				</AtrcButtonGroup>
			);
		}

		if ('filterSelectGroup' === element) {
			return (
				<AtrcWrap
					key={`me-${iDx}`}
					className={classnames('at-flx', 'at-al-itm-strh', 'at-gap')}>
					{atrcProps.filterSelectGroup.selects.map(function (
						selectProps,
						slIndex
					) {
						return (
							<AtrcControlSelect
								key={`sl-${slIndex}`}
								allowReset={false}
								{...selectProps}
							/>
						);
					})}
					<AtrcButton
						variant='secondary'
						{...atrcProps.filterSelectGroup.button}
					/>
				</AtrcWrap>
			);
		}

		if ('search' === element) {
			return (
				<AtrcSearch
					key={`me-${iDx}`}
					buttonProps={{
						variant: 'secondary',
					}}
					{...atrcProps.search}
				/>
			);
		}

		if ('bulkCheck' === element) {
			return (
				<AtrcWrap
					key={`me-${iDx}`}
					className={classnames('at-flx', 'at-al-itm-ctr', 'at-gap')}>
					<AtrcControlCheckbox {...atrcProps.bulkCheck.checkProps} />
					{atrcProps.bulkCheck.showBulkActions ? (
						<AtrcButtonGroup
							className={classnames(AtrcPrefix('bulk-wrp'), 'at-trs')}>
							{atrcProps.bulkCheck.actions.map(function (
								actionProps,
								btnIndex
							) {
								return (
									<AtrcButton
										key={`btn-next-${btnIndex}`}
										variant=''
										{...actionProps.buttonProps}>
										<AtrcTooltip {...actionProps.tooltipProps}>
											<AtrcIcon {...actionProps.iconProps} />
										</AtrcTooltip>
									</AtrcButton>
								);
							})}
						</AtrcButtonGroup>
					) : (
						<AtrcWrap
							className={classnames('at-flx', 'at-al-itm-ctr', 'at-gap')}
							key={`me-nexta-${iDx}`}>
							<MapElements
								place={place}
								elements={atrcProps.bulkCheck.toggleItems}
								atrcProps={atrcProps}
							/>
						</AtrcWrap>
					)}
				</AtrcWrap>
			);
		}

		if ('order' === element || 'sort' === element) {
			return (
				<AtrcWrap
					key={`me-${iDx}`}
					className={classnames('at-flx', 'at-al-itm-strh', 'at-sort')}>
					<AtrcControlSelect
						allowReset={false}
						{...atrcProps[element].selectProps}
					/>
					<AtrcButton
						variant='icon'
						className={classnames('at-w', 'at-h')}
						{...atrcProps[element].buttonProps}>
						<AtrcTooltip
							text={
								'asc' === atrcProps[element].order
									? __('Click for descending order', 'atrc-prefix-atrc')
									: __('Click for ascending order', 'atrc-prefix-atrc')
							}>
							<AtrcIcon
								className={classnames('at-flx')}
								type='svg'
								svg={
									'asc' === atrcProps[element].order
										? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>'
										: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>'
								}
							/>
						</AtrcTooltip>
					</AtrcButton>
				</AtrcWrap>
			);
		}

		if ('refresh' === element) {
			return (
				<AtrcTooltip
					key={`me-${iDx}`}
					text={__('Refresh', 'atrc-prefix-atrc')}>
					{atrcProps.refresh.isPending ? (
						<AtrcSpinner variant='inline' />
					) : (
						<AtrcResetButtonIcon
							value='1'
							{...atrcProps.refresh.buttonProps}
						/>
					)}
				</AtrcTooltip>
			);
		}

		if ('pagination' === element) {
			return (
				<AtrcPagination
					key={`me-${iDx}`}
					{...atrcProps.pagination}
				/>
			);
		}

		if ('listGrid' === element) {
			return (
				<AtrcTooltip
					key={`me-${iDx}`}
					text={
						atrcProps.listGrid.isList
							? __('List layout', 'atrc-prefix-atrc')
							: __('Grid layout', 'atrc-prefix-atrc')
					}>
					<AtrcButton
						className={classnames(AtrcPrefix('m-0'))}
						{...atrcProps.listGrid.buttonProps}>
						<AtrcIcon
							type='ri'
							icon={atrcProps.listGrid.isList ? BsList : BsFillGrid3X3GapFill}
						/>
					</AtrcButton>
				</AtrcTooltip>
			);
		}

		if (atrcProps[element]) {
			return atrcProps[element];
		}

		return null;
	});
};

const SingleRow = (props) => {
	const { place = {}, type = '', ...atrcProps } = props;
	const hasGrow = !place.left || !place.right ? 'at-flx-grw-1' : '';
	return (
		<>
			<AtrcWrap
				className={classnames(
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-p',
					AtrcPrefix('ls-fl-row'),
					'at-min-h'
				)}>
				{place.left ? (
					<AtrcWrap
						className={classnames(
							'at-flx',
							'at-al-itm-ctr',
							'at-jfy-cont-st',
							'at-gap',
							hasGrow
						)}
						key='left'>
						<MapElements
							place='left'
							elements={place.left}
							atrcProps={atrcProps}
						/>
					</AtrcWrap>
				) : null}
				{place.right ? (
					<AtrcWrap
						className={classnames(
							'at-flx',
							'at-al-itm-ctr',
							'at-jfy-cont-end',
							'at-gap',
							hasGrow
						)}
						key='right'>
						<MapElements
							place='right'
							elements={place.right}
							atrcProps={atrcProps}
						/>
					</AtrcWrap>
				) : null}
			</AtrcWrap>
			{false !== place.hr ? (
				<AtrcHr className={classnames(AtrcPrefix('m-0'))} />
			) : null}
		</>
	);
};

const MultiRows = (props) => {
	const { top = null, mid = null, bottom = null, ...defaultProps } = props;
	return (
		<>
			{/* top */}
			{top ? (
				<SingleRow
					{...defaultProps}
					place={top}
					type='top'
				/>
			) : null}

			{/* middle */}
			{mid ? (
				<SingleRow
					{...defaultProps}
					place={mid}
					type='mid'
				/>
			) : null}

			{/* bottom */}
			{bottom ? (
				<SingleRow
					{...defaultProps}
					place={bottom}
					type='bottom'
				/>
			) : null}
		</>
	);
};
const AtrcListFilterTemplate1 = (props) => {
	const {
		className = '',
		variant = '',
		allowWrap = true,
		wrapProps = {},
		...defaultProps
	} = props;

	if (allowWrap) {
		return (
			<AtrcWrap
				className={classnames(
					AtrcPrefix('ls-fl-tpl-1'),
					className,
					variant ? AtrcPrefix('ls-fl-tpl-1') + '-' + variant : ''
				)}
				{...wrapProps}>
				<MultiRows {...defaultProps} />
			</AtrcWrap>
		);
	}

	return <MultiRows {...defaultProps} />;
};
export default AtrcListFilterTemplate1;
