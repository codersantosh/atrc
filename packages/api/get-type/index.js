import React from 'react';

/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

/*Local*/
const AtrcGetType = async ({ postType, restNamespace = '/wp/v2/' }) => {
	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}
	path += 'types' + '/' + postType;

	return await apiFetch({ path });
};
export default AtrcGetType;
