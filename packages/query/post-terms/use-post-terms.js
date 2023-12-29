/*WordPress*/
import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

/* Local */
const EMPTY_ARRAY = [];

export default function AtrcUsePostTerms({
	postId,
	taxonomy = 'category',
	showEmpty = false,
	showOnlyTopLevel = false,
}) {
	const term = useSelect(
		(select) => {
			if (!taxonomy) return {};
			const { getTaxonomy } = select(coreStore);
			const taxObj = getTaxonomy(taxonomy);

			return taxObj?.visibility?.publicly_queryable ? taxObj : {};
		},
		[taxonomy]
	);

	const { slug } = term;

	return useSelect(
		(select) => {
			const visible = term?.visibility?.publicly_queryable;
			if (!visible) {
				return {
					postTerms: EMPTY_ARRAY,
					isLoading: false,
					hasPostTerms: false,
				};
			}

			const { getEntityRecords, isResolving } = select(coreStore);
			const args = {
				per_page: -1,
				context: 'view',
				hide_empty: !showEmpty,
			};
			if (postId) {
				args.post = postId;
			}
			if (showOnlyTopLevel) {
				args.parent = 0;
			}

			const taxonomyArgs = ['taxonomy', slug, args];
			const terms = getEntityRecords(...taxonomyArgs);

			return {
				postTerms: terms,
				isLoading: isResolving('getEntityRecords', taxonomyArgs),
				hasPostTerms: !!terms?.length,
			};
		},
		[
			postId,
			term?.visibility?.publicly_queryable,
			slug,
			showEmpty,
			showOnlyTopLevel,
		]
	);
}
