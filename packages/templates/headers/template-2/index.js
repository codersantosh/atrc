/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

import {
	BsList,
	BsFillGrid3X3GapFill,
	BsCaretDownFill,
	BsCaretUpFill,
	BsGripVertical,
} from 'react-icons/bs';

/* Prefix */
import AtrcPrefix from '../../../prefix-vars';

/*  Organisms*/
import AtrcHeader from '../../../organisms/header';

/* Atoms */
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcIcon from '../../../atoms/icon';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcText from '../../../atoms/text';
import AtrcLink from '../../../atoms/link';
import AtrcSpinner from '../../../atoms/spinner';
import AtrcHr from '../../../atoms/hr';

/* Controls */
import AtrcControlCheckbox from '../../../controls/control-checkbox';
import AtrcControlToggle from '../../../controls/control-toggle';
import AtrcControlSelect from '../../../controls/control-select';

/* Molecules */
import AtrcButtonGroup from './../../../molecules/button-group';
import AtrcPagination from './../../../molecules/pagination';
import AtrcSearch from './../../../molecules/search';
import AtrcTooltip from './../../../molecules/tooltip';

/* Local */
const MapElements = ({ place, elements, atrcProps }) => {
	let ml;
	return elements.map(function (element, iDx) {
		iDx = iDx + place;
		ml = '';
		if (iDx) {
			ml = 'ml-15';
		}
		if ('word' === element) {
			return (
				<AtrcText
					key={`me-${iDx}`}
					className={classnames(AtrcPrefix('m-0'), ml ? AtrcPrefix(ml) : '')}
					{...atrcProps.word}
				/>
			);
		}
		if ('button' === element) {
			return (
				<AtrcTooltip
					key={`me-${iDx}`}
					{...atrcProps.button.tooltipProps}>
					{atrcProps.button.isPending ? <AtrcSpinner variant='inline' /> : null}
					<AtrcButton {...atrcProps.button.buttonProps} />
				</AtrcTooltip>
			);
		}
		if ('title' === element) {
			return (
				<AtrcText
					key={`me-${iDx}`}
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
					key={`me-${iDx}`}
					type='router-link'
					variant='primary'
					className={classnames('at-m')}
					{...atrcProps.addNew}
				/>
			);
		}

		if ('toggleFilter' === element) {
			return (
				<AtrcControlToggle
					key={`me-${iDx}`}
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
					key={`me-${iDx}`}
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
							onClick={atrcProps.filterButtonGroupWithReset.onReset}
							key={`rs-${iDx}`}>
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
					key={`me-${iDx}`}
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
							<AtrcControlSelect
								key={`sl-${slIndex}`}
								allowReset={false}
								{...selectProps}
							/>
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
					key={`me-${iDx}`}
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
					key={`me-${iDx}`}
					className={classnames(
						'at-flx',
						'at-al-itm-ctr',
						'at-gap',
						AtrcPrefix('bulk-wrp'),
						ml ? AtrcPrefix(ml) : ''
					)}>
					<AtrcControlCheckbox {...atrcProps.bulkCheck.checkProps} />
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
							)}
							key={`me-nexta-${iDx}`}>
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
					key={`me-${iDx}`}
					className={classnames(
						ml ? AtrcPrefix(ml) : '',
						'at-flx',
						'at-al-itm-ctr',
						'at-gap'
					)}>
					<AtrcWrap
						variant='select-plain'
						className={classnames(
							ml ? AtrcPrefix(ml) : '',
							'at-flx',
							'at-al-itm-ctr'
						)}>
						<AtrcControlSelect
							allowReset={false}
							{...atrcProps.order.selectProps}
						/>
					</AtrcWrap>
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
					className={classnames(ml ? AtrcPrefix(ml) : '')}
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
			return <AtrcWrap key={`me-${iDx}`}>{atrcProps[element]}</AtrcWrap>;
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
						className={classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-st')}
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
						className={classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-end')}
						key='right'>
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
const AtrcHeaderTemplate2 = (props) => {
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
export default AtrcHeaderTemplate2;
