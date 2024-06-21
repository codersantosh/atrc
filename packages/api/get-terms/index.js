import React from 'react';

/*WordPress*/
import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

/*Inbuilt*/
import AtrcGetRestBaseTaxonomy from '../get-rest-base-taxonomy';

/*Local*/
const AtrcGetTerms = async ({
	tax,
	restBase,
	restNamespace = '/wp/v2/',
	queryArgs = null,
}) => {
	if (!(restBase || tax)) {
		return [];
	}

	let path = restNamespace;
	if (!path) {
		path = '/wp/v2/';
	}

	if (restBase) {
		path += restBase;
	} else {
		const restBase1 = await AtrcGetRestBaseTaxonomy({ tax });
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
export default AtrcGetTerms;
