/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

/*Local*/
const AtrcGetTypes = async ({
	queryArgs = null,
	restNamespace = '/wp/v2/',
}) => {
	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}
	path += 'types';

	if (queryArgs) {
		path = addQueryArgs(path, queryArgs);
	}

	return await apiFetch({ path });
};
export default AtrcGetTypes;
