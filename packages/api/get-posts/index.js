import React from 'react';

/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

/*Inbuilt*/
import AtrcGetRestBaseType from '../get-rest-base-type';

/*Local*/
const AtrcGetPosts = async ({
	postType,
	restBase,
	restNamespace = '/wp/v2/',
	queryArgs = null,
}) => {
	if (!(restBase || postType)) {
		return [];
	}

	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}

	if (restBase) {
		path += restBase;
	} else {
		const restBase1 = await AtrcGetRestBaseType({ postType });
		if (restBase1) {
			path += restBase1;
		} else {
			return [];
		}
	}

	if (queryArgs) {
		path = addQueryArgs(path, queryArgs);
	}

	return await apiFetch({ path });
};
export default AtrcGetPosts;
