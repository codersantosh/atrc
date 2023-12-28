/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Local*/
const AtrcGetTaxonomy = async ({ tax = null, restNamespace = '/wp/v2/' }) => {
	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}
	path += 'taxonomies' + '/' + tax;

	return await apiFetch({ path });
};
export default AtrcGetTaxonomy;
