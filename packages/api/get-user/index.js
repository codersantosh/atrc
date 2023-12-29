/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Local*/
const AtrcGetUser = async ({ userId, restNamespace = '/wp/v2/' }) => {
	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}
	path += 'users/' + userId;

	return await apiFetch({ path });
};
export default AtrcGetUser;
