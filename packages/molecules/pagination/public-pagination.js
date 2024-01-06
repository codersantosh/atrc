/* WordPress */
import { __, _x, sprintf } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcUl from './../ul';
import AtrcLi from './../../atoms/li';
import AtrcLink from '../../atoms/link';

/* Local Component */
/**
 * Get the collapsed list of page numbers for a given range of pages, used to paginate queries.
 *
 * This will return an array of page numbers (1, 2, 3, etc) for a given length (number of pages). If there are
 * less than 5 pages (inclusive), it will return 1 through 5. If there are more, it will collapse between the
 * start and end with an ellipsis. If the current page is in the middle, it will add pages to the middle.
 * *
 * @param {number}  length  The total number of pages.
 * @param {?number} current The current page, used to output extra pages if necessary. Default 1.
 * @return {Array.<number|string>} Array of numbers and … used to display pagination links.
 */
export function AtrcGetPaginationList(length, current = 1) {
	const range = Array.from({ length }, (val, i) => i + 1);
	const list = [];
	if (length <= 5) {
		return range;
	}
	list.push(...range.slice(0, 2));
	if (current >= 2 && current <= length - 1) {
		list.push(...range.slice(current - 2, current + 1));
	}
	list.push(...range.slice(-2));

	return (
		list
			// Remove duplicates.
			.filter((value, i, a) => a.indexOf(value) === i)
			// Add in … where there's a jump larger than 1.
			.reduce((acc, value, i, a) => {
				if (i === 0) {
					acc.push(value);
					return acc;
				}
				const diff = Math.abs(a[i] - a[i - 1]);
				if (diff === 0) {
					return acc;
				}
				if (diff > 1) {
					acc.push('…');
				}
				acc.push(value);
				return acc;
			}, [])
	);
}

const AtrcPublicPagination = (props) => {
	const {
		currentPage,
		totalPages,
		doPagination = () => {},
		getPageUrl = () => {},
		className = '',
		variant = '',
		isFooter = false,
		ulProps = {},
		liProps = {},
		aProps = {},
		...defaultProps
	} = props;

	const hasNext = currentPage < totalPages,
		hasPrevious = currentPage > 1;

	// Create an array of page numbers or '...' for ellipsis
	const pages = AtrcGetPaginationList(totalPages, currentPage);

	return (
		<AtrcWrap
			tag='nav'
			className={classnames(
				AtrcPrefix('pagination'),
				'at-flx',
				'at-al-itm-ctr',
				className,
				variant ? AtrcPrefix('pagination') + '-' + variant : ''
			)}
			aria-label={__('Pagination', 'atrc-prefix-atrc')}
			{...defaultProps}>
			<AtrcUl
				className={classnames(
					AtrcPrefix('pagination-list'),
					(ulProps && ulProps.className) || ''
				)}
				{...ulProps}>
				{hasPrevious && (
					<AtrcLi
						className={classnames(
							AtrcPrefix('pagination-item'),
							AtrcPrefix('pagination-item-prev'),
							(liProps && liProps.className) || ''
						)}
						{...liProps}>
						<AtrcLink
							className={classnames(
								AtrcPrefix('pagination-link'),
								(aProps && aProps.className) || ''
							)}
							href={getPageUrl(currentPage - 1)}
							onClick={() => doPagination(event, currentPage - 1)}
							{...aProps}>
							<span className='screen-reader-text'>
								{__('Previous page', 'atrc-prefix-atrc')}
							</span>
							<span aria-hidden>
								{_x('Previous', 'previous page link label', 'atrc-prefix-atrc')}
							</span>
						</AtrcLink>
					</AtrcLi>
				)}

				{pages.map((page, index) => (
					<AtrcLi
						className={classnames(
							AtrcPrefix('pagination-item'),
							AtrcPrefix('pagination-item-dash'),
							(liProps && liProps.className) || ''
						)}
						key={`${index}-${page}`}
						{...liProps}>
						{page === '...' ? (
							page
						) : (
							<AtrcLink
								className={classnames(
									AtrcPrefix('pagination-link'),
									(aProps && aProps.className) || ''
								)}
								href={getPageUrl(page)}
								onClick={(event) => doPagination(event, page)}
								aria-current={page === currentPage ? 'page' : undefined}
								{...aProps}>
								<span className='screen-reader-text'>
									{sprintf(
										// translators: %s is the page number.
										__('Page %s', 'atrc-prefix-atrc'),
										page
									)}
								</span>
								<span aria-hidden>{page}</span>
							</AtrcLink>
						)}
					</AtrcLi>
				))}

				{hasNext && (
					<AtrcLi
						className={classnames(
							AtrcPrefix('pagination-item'),
							AtrcPrefix('pagination-item-next'),
							(liProps && liProps.className) || ''
						)}
						{...liProps}>
						<AtrcLink
							className={classnames(
								AtrcPrefix('pagination-link'),
								(aProps && aProps.className) || ''
							)}
							href={getPageUrl(currentPage + 1)}
							onClick={() => doPagination(event, currentPage + 1)}
							{...aProps}>
							<span className='screen-reader-text'>
								{__('Next page', 'atrc-prefix-atrc')}
							</span>
							<span aria-hidden>
								{_x('Next', 'previous page link label', 'atrc-prefix-atrc')}
							</span>
						</AtrcLink>
					</AtrcLi>
				)}
			</AtrcUl>
		</AtrcWrap>
	);
};

export default AtrcPublicPagination;
