import React from 'react';

/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Local*/
export default async function AtrcGetRestBaseTaxonomy({ tax }) {
	switch (tax) {
		case 'category':
			return 'categories';

		case 'nav_menu':
			return 'menus';

		case 'post_tag':
			return 'tags';

		default:
			/*unknown taxonomy*/
			const taxonomy = await apiFetch({
				path: '/wp/v2/taxonomies/' + tax + '?context=view',
			});
			if (taxonomy && taxonomy.rest_base) {
				return taxonomy.rest_base;
			}
			return false;
	}
}
