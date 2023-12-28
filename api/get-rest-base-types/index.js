/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Local*/
export default async function AtrcGetRestBaseType({ postType }) {
	switch (postType) {
		case 'attachment':
			return 'media';

		case 'page':
			return 'pages';

		case 'post':
			return 'posts';

		case 'wp_block':
			return 'blocks';

		case 'wp_navigation':
			return 'navigation';

		case 'wp_template':
			return 'templates';

		case 'wp_template_part':
			return 'templates';

		default:
			/*unknown post types*/
			const types = await apiFetch({
				path: '/wp/v2/types/' + postType + '?context=view',
			});
			if (types && types.rest_base) {
				return types.rest_base;
			}
			return false;
	}
}
