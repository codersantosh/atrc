import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

import AtrcPrefix from '../../../prefix-vars';

import { AtrcHeader } from '../../../organisms';

import {
	AtrcButton,
	AtrcCheckbox,
	AtrcHr,
	AtrcIcon,
	AtrcLink,
	AtrcResetButtonIcon,
	AtrcSelect,
	AtrcSpinner,
	AtrcToggle,
	AtrcWord,
	AtrcWrap,
} from '../../../atoms';

import {
	AtrcBase,
	AtrcButtonGroup,
	AtrcPagination,
	AtrcSearch,
	AtrcTooltip,
} from '../../../molecules';

import {
	BsList,
	BsFillGrid3X3GapFill,
	BsCaretDownFill,
	BsCaretUpFill,
	BsGripVertical,
} from 'react-icons/bs';

const MapElements = ({ place, elements, atrcProps }) => {
	let ml;
	return elements.map(function (element, index) {
		ml = '';
		if (index) {
			ml = 'ml-15';
		}
		if ('word' === element) {
			return (
				<AtrcWord
					key={`me-${index}`}
					className={classnames(AtrcPrefix('m-0'), ml ? AtrcPrefix(ml) : '')}
					{...atrcProps.word}
				/>
			);
		}
		if ('button' === element) {
			return (
				<AtrcTooltip
					key={`me-${index}`}
					{...atrcProps.button.tooltipProps}>
					{atrcProps.button.isPending ? <AtrcSpinner variant='inline' /> : null}
					<AtrcButton {...atrcProps.button.buttonProps} />
				</AtrcTooltip>
			);
		}
		if ('title' === element) {
			return (
				<AtrcWord
					key={`me-${index}`}
					className={classnames(
						AtrcPrefix('m-0'),
						'at-m',
						ml ? AtrcPrefix(ml) : ''
					)}
					{...atrcProps.title}
				/>
			);
		}

		if ('addNew' === element) {
			return (
				<AtrcLink
					key={`me-${index}`}
					type='router-link'
					variant='primary'
					className={classnames('at-m')}
					{...atrcProps.addNew}
				/>
			);
		}

		if ('toggleFilter' === element) {
			return (
				<AtrcToggle
					key={`me-${index}`}
					className={classnames(ml ? AtrcPrefix(ml) : '')}
					{...atrcProps.toggleFilter}
				/>
			);
		}

		if (
			'filterButtonGroupWithReset' === element ||
			'filterButtonGroup' === element
		) {
			const buttons =
				'filterButtonGroupWithReset' === element
					? atrcProps.filterButtonGroupWithReset.buttons
					: atrcProps.filterButtonGroup.buttons;
			return (
				<AtrcButtonGroup
					key={`me-${index}`}
					className={classnames(ml ? AtrcPrefix(ml) : '')}>
					{buttons.map(function (buttonProps, btnIndex) {
						return (
							<AtrcButton
								key={`btn-${btnIndex}`}
								className={classnames('at-p')}
								{...buttonProps}
							/>
						);
					})}
					{'filterButtonGroupWithReset' === element ? (
						<AtrcButton
							className={classnames('at-m', 'at-p')}
							variant='reset'
							onClick={atrcProps.filterButtonGroupWithReset.onReset}>
							<AtrcIcon
								className={classnames(AtrcPrefix('mr-10'))}
								type='bootstrap'
								icon={BsGripVertical}
							/>
							{atrcProps.filterButtonGroupWithReset.resetLabel}
						</AtrcButton>
					) : null}
				</AtrcButtonGroup>
			);
		}

		if ('filterSelectGroup' === element) {
			return (
				<AtrcWrap
					key={`me-${index}`}
					className={classnames(
						'at-flx',
						'at-al-itm-ctr',
						ml ? AtrcPrefix(ml) : ''
					)}>
					{atrcProps.filterSelectGroup.selects.map(function (
						selectProps,
						slIndex
					) {
						return (
							<AtrcBase
								key={`sl-${slIndex}`}
								variant='select-plain'>
								<AtrcSelect
									allowReset={false}
									{...selectProps}
								/>
							</AtrcBase>
						);
					})}
					<AtrcButton
						variant='primary'
						className={classnames(AtrcPrefix('ml-15'))}
						onClick={atrcProps.filterSelectGroup.onApply}>
						{atrcProps.filterSelectGroup.applyLabel}
					</AtrcButton>
				</AtrcWrap>
			);
		}

		if ('search' === element) {
			return (
				<AtrcSearch
					key={`me-${index}`}
					{...atrcProps.search}
					testProps={{
						className: classnames(ml ? AtrcPrefix(ml) : 'test'),
					}}
					buttonProps={{
						variant: 'primary',
					}}
				/>
			);
		}

		if ('bulkCheck' === element) {
			return (
				<AtrcWrap
					key={`me-${index}`}
					className={classnames(
						'at-flx',
						'at-al-itm-ctr',
						'at-gap',
						AtrcPrefix('bulk-wrp'),
						ml ? AtrcPrefix(ml) : ''
					)}>
					<AtrcCheckbox {...atrcProps.bulkCheck.checkProps} />
					{atrcProps.bulkCheck.checkedIds.length > 0 &&
					atrcProps.bulkCheck.actions ? (
						<AtrcButtonGroup className={classnames(AtrcPrefix('m-0'))}>
							{atrcProps.bulkCheck.actions.map(function (
								actionProps,
								btnIndex
							) {
								return (
									<AtrcTooltip
										key={`btn-next-${btnIndex}`}
										{...actionProps.tooltipProps}>
										<AtrcButton
											variant='icon'
											className={classnames(
												'at-flx',
												'at-al-itm-ctr',
												'at-jfy-cont-ctr',
												'at-bdr-rad',
												'at-w',
												'at-h'
											)}
											{...actionProps.buttonProps}>
											<AtrcIcon
												className={classnames('at-w', 'at-h')}
												{...actionProps.iconProps}
											/>
										</AtrcButton>
									</AtrcTooltip>
								);
							})}
						</AtrcButtonGroup>
					) : null}
					{atrcProps.bulkCheck.checkedIds.length < 1 &&
					atrcProps.bulkCheck.toggleItems ? (
						<AtrcWrap
							className={classnames(
								// AtrcPrefix('ml-15'),
								'at-flx',
								'at-al-itm-ctr',
								'at-gap'
							)}>
							<MapElements
								place={place}
								elements={atrcProps.bulkCheck.toggleItems}
								atrcProps={atrcProps}
							/>
						</AtrcWrap>
					) : null}
				</AtrcWrap>
			);
		}

		if ('order' === element) {
			return (
				<AtrcWrap
					key={`me-${index}`}
					className={classnames(
						ml ? AtrcPrefix(ml) : '',
						'at-flx',
						'at-al-itm-ctr',
						'at-gap'
					)}>
					<AtrcBase
						variant='select-plain'
						className={classnames(
							ml ? AtrcPrefix(ml) : '',
							'at-flx',
							'at-al-itm-ctr'
						)}>
						<AtrcSelect
							allowReset={false}
							{...atrcProps.order.selectProps}
						/>
					</AtrcBase>
					<AtrcTooltip
						text={
							'asc' === atrcProps.order.order
								? __('Click for descending order', 'atrc-prefix-atrc')
								: __('Click for ascending order', 'atrc-prefix-atrc')
						}>
						<AtrcButton
							variant='icon'
							className={classnames('at-w', 'at-h')}
							{...atrcProps.order.buttonProps}>
							<AtrcIcon
								type='bootstrap'
								icon={
									'asc' === atrcProps.order.order
										? BsCaretDownFill
										: BsCaretUpFill
								}
							/>
						</AtrcButton>
					</AtrcTooltip>
				</AtrcWrap>
			);
		}

		if ('refresh' === element) {
			return (
				<AtrcTooltip
					key={`me-${index}`}
					text={
						'asc' === atrcProps.order.order
							? __('Click for descending order', 'atrc-prefix-atrc')
							: __('Click for ascending order', 'atrc-prefix-atrc')
					}>
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
					key={`me-${index}`}
					className={classnames(ml ? AtrcPrefix(ml) : '')}
					{...atrcProps.pagination}
				/>
			);
		}

		if ('listGrid' === element) {
			return (
				<AtrcTooltip
					key={`me-${index}`}
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

const SingleHeader = (props) => {
	const { place = {}, type = '', ...atrcProps } = props;
	return (
		<>
			<AtrcWrap
				className={classnames(
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-p'
				)}>
				{place.left ? (
					<AtrcWrap
						className={classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-st')}>
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
							'at-jfy-cont-end'
						)}>
						<MapElements
							place='right'
							elements={place.right}
							atrcProps={atrcProps}
						/>
					</AtrcWrap>
				) : null}
			</AtrcWrap>
			{'bottom' !== type ? (
				<AtrcHr className={classnames(AtrcPrefix('m-0'))} />
			) : null}
		</>
	);
};

const MultiHeaders = (props) => {
	const {
		topHeader = null,
		midHeader = null,
		bottomHeader = null,
		...defaultProps
	} = props;
	return (
		<>
			{/* top header */}
			{topHeader ? (
				<SingleHeader
					{...defaultProps}
					place={topHeader}
					type='top'
				/>
			) : null}

			{/* middle header */}
			{midHeader ? (
				<SingleHeader
					{...defaultProps}
					place={midHeader}
					type='mid'
				/>
			) : null}

			{/* bottom header */}
			{bottomHeader ? (
				<SingleHeader
					{...defaultProps}
					place={bottomHeader}
					type='bottom'
				/>
			) : null}
		</>
	);
};
const AdvancedMultiHeaders = (props) => {
	const { allowHeader = true, ...defaultProps } = props;

	if (allowHeader) {
		return (
			<AtrcHeader>
				<MultiHeaders {...defaultProps} />
			</AtrcHeader>
		);
	}

	return <MultiHeaders {...defaultProps} />;
};
export default AdvancedMultiHeaders;
