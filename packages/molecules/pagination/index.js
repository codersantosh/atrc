/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';
import AtrcSpan from '../../atoms/span';

/*Local*/
const AtrcPagination = (props) => {
	const {
		className = '',
		variant = '',
		totalItems,
		doPagination,
		currentPage,
		totalPages,
		isFooter = false,
		...defaultProps
	} = props;

	const nextDisabled = totalPages <= currentPage,
		prevDisabled = parseInt(currentPage) === 1,
		prevPage = currentPage > 1 ? currentPage - 1 : 1,
		nextPage = totalPages > currentPage ? currentPage + 1 : totalPages;

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('pagination'),
				'at-flx',
				'at-al-itm-ctr',
				className,
				variant ? AtrcPrefix('pagination') + '-' + variant : ''
			)}
			{...defaultProps}>
			{totalItems && (
				<AtrcSpan isNum={true}>
					{totalItems}
					&nbsp;
					{__('items', 'atrc-prefix-atrc')}
				</AtrcSpan>
			)}
			<AtrcWrap className={classnames('at-flx', 'at-al-itm-ctr')}>
				<AtrcButton
					variant='pagination'
					onClick={() => doPagination(1)}
					disabled={prevDisabled}>
					<AtrcSpan className={classnames('screen-reader-text')}>
						{__('First page', 'atrc-prefix-atrc')}
					</AtrcSpan>
					<AtrcSpan aria-hidden='true'>«</AtrcSpan>
				</AtrcButton>
				<AtrcButton
					variant='pagination'
					onClick={() => doPagination(prevPage)}
					disabled={prevDisabled}>
					<AtrcSpan className={classnames('screen-reader-text')}>
						{__('Previous page', 'atrc-prefix-atrc')}
					</AtrcSpan>
					<AtrcSpan aria-hidden='true'>‹</AtrcSpan>
				</AtrcButton>

				<AtrcSpan className={classnames('at-flx', 'at-al-itm-ctr')}>
					{isFooter ? (
						currentPage
					) : (
						<AtrcText
							variant='small'
							value={currentPage}
							type='number'
							min={1}
							max={totalPages}
							onChange={(newVal) => {
								doPagination(newVal);
							}}
							allowReset={false}
						/>
					)}
					<AtrcSpan>
						&nbsp;
						{__('of', 'atrc-helpdesk')}
						&nbsp;
						<AtrcSpan>{totalPages}</AtrcSpan>
					</AtrcSpan>
				</AtrcSpan>

				<AtrcButton
					variant='pagination'
					onClick={() => doPagination(nextPage)}
					disabled={nextDisabled}>
					<AtrcSpan className={classnames('screen-reader-text')}>
						{__('Next page', 'atrc-prefix-atrc')}
					</AtrcSpan>
					<AtrcSpan aria-hidden='true'>›</AtrcSpan>
				</AtrcButton>

				<AtrcButton
					variant='pagination'
					onClick={() => doPagination(totalPages)}
					disabled={nextDisabled}>
					<AtrcSpan className={classnames('screen-reader-text')}>
						{__('Last page', 'atrc-prefix-atrc')}
					</AtrcSpan>
					<AtrcSpan aria-hidden='true'>»</AtrcSpan>
				</AtrcButton>
			</AtrcWrap>
		</AtrcWrap>
	);
};

export default AtrcPagination;
