/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

/*Local*/
const AtrcGetUsers = async ({
	queryArgs = null,
	restNamespace = '/wp/v2/',
}) => {
	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}
	path += 'users';

	if (queryArgs) {
		path = addQueryArgs(path, queryArgs);
	}

	return await apiFetch({ path });
};
export default AtrcGetUsers;
