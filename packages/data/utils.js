import React from 'react';

/* WordPress */
import { addQueryArgs } from '@wordpress/url';

/* Library */
import { cloneDeep, isObject, map } from 'lodash';

/* Internal */
import { AtrcStore } from './store';

/**
 * Remove query parameters from a URL.
 *
 * @param {Object} options            - The options object.
 * @param {string} options.currentUrl - The current URL to process (optional).
 * @return {string} The URL without query parameters.
 *
 * Example:
 *
 * // Given current URL: 'acmeit.org/blogs/page/2?sort=latest'
 * const urlWithoutParams = AtrcRemoveQueryFromUrl({ currentUrl: 'acmeit.org/blogs/page/2?sort=latest' });
 * console.log(urlWithoutParams); // Output: 'acmeit.org/blogs/page/2'
 */
export const AtrcRemoveQueryFromUrl = ({ currentUrl = '' }) => {
	if (!currentUrl) {
		currentUrl = window.location.href;
	}

	// Check if there are query parameters
	if (window.location.search.length > 0) {
		// Remove query parameters by replacing the URL
		const newUrl = currentUrl.split('?')[0];
		return newUrl;
	}
	return currentUrl;
};

/**
 * Remove a specific segment from the URL path.
 *
 * @param {string} url    - The URL to process.
 * @param {string} urlKey - The key of the segment to remove.
 * @return {string} The modified URL without the specified segment.
 *
 * Example:
 *
 * // Given URL: 'acmeit.org/blogs/page/2'
 * const urlWithoutPage = AtrcRemoveUrlArg('acmeit.org/blogs/page/2', 'page');
 * console.log(urlWithoutPage); // Output: 'acmeit.org/blogs'
 */
export const AtrcRemoveUrlArg = (url, urlKey) => {
	// Escape special characters in the key for creating a regular expression
	const escapedKey = urlKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	// Create a regular expression to match the key at the end of the URL path
	const regex = new RegExp(`\\/${escapedKey}(\\/\\d*)?$`, 'g');

	// Use the regular expression to remove the key and its value from the URL
	const newUrl = url.replace(regex, '');

	return newUrl;
};

/**
 * Add a new segment to the URL path with a given key and value.
 *
 * @param {string} url    - The URL to process.
 * @param {string} urlKey - The key of the segment to add.
 * @param {string} urlVal - The value of the segment to add.
 * @return {string} The modified URL with the added segment.
 *
 * Example:
 *
 * // Given URL: 'acmeit.org/blogs'
 * const urlWithCategory = AtrcAddUrlArg('acmeit.org/blogs', 'category', 'tech');
 * console.log(urlWithCategory); // Output: 'acmeit.org/blogs/category/tech'
 */
export const AtrcAddUrlArg = (url, urlKey, urlVal) => {
	// Encode the key and value to ensure proper URL formatting
	const encodedKey = encodeURIComponent(urlKey);
	const encodedVal = encodeURIComponent(urlVal);

	// Check if the key already exists in the URL
	const keyExists = url.includes(`/${encodedKey}/`);

	// Create the new URL with the added or updated path segment
	let newUrl;
	if (keyExists) {
		// If the key exists, update the existing value
		const regex = new RegExp(`(${encodedKey}/)[^/]*`);
		newUrl = url.replace(regex, `$1${encodedVal}`);
	} else {
		// If the key doesn't exist, append the new path segment
		const separator = url.endsWith('/') ? '' : '/';
		newUrl = `${url}${separator}${encodedKey}/${encodedVal}`;
	}

	return newUrl;
};

/**
 * Remove the first '/' from a string if it exists.
 *
 * @param {string} str - URL or URL part.
 * @return {string} The string without the leading '/'.
 *
 * Example:
 *
 * // Given string: '/blogs'
 * const strWithoutLeadingSlash = AtrcRemoveLeadingSlash('/blogs');
 * console.log(strWithoutLeadingSlash); // Output: 'blogs'
 */
export const AtrcRemoveLeadingSlash = (str) => {
	return str.replace(/^\//, '');
};

/**
 * Remove the last '/' from a string if it exists.
 *
 * @param {string} str - URL or URL part.
 * @return {string} The string without the trailing '/'.
 *
 * Example:
 *
 * // Given string: 'blogs/'
 * const strWithoutTrailingSlash = AtrcRemoveTrailingSlash('blogs/');
 * console.log(strWithoutTrailingSlash); // Output: 'blogs'
 */
export const AtrcRemoveTrailingSlash = (str) => {
	return str.replace(/\/$/, '');
};

/**
 * Retrieve a given key from the URL path.
 * A query string will take precedence; otherwise, it will fall back to the value in the path.
 * For example, in '/category/blog/page/2', the value for category is blog, and page is 2.
 * This could also be written as `?category=blog&page=2` or `/category/blog/?page=2`.
 *
 * @param {string} path - A URL path and query string.
 * @param {string} key  - The query var to extract, e.g., `categories`, `page`.
 * @return {string} The value of the requested key.
 *
 * Example:
 *
 * // Given URL path: 'acmeit.org/blogs/category/tech/page/2'
 * const categoryValue = getValueFromPath('acmeit.org/blogs/category/tech/page/2', 'category');
 * console.log(categoryValue); // Output: 'tech'
 */
export const AtrcGetUrlArgValue = (path, key) => {
	if (!key || !path) {
		return '';
	}

	// Remove leading and trailing slashes
	const _path = AtrcRemoveLeadingSlash(AtrcRemoveTrailingSlash(path));

	// Split the path into parts
	const parts = _path.split('/');

	// Find the key section, if it exists. The next part of the URL is the value.
	const index = parts.indexOf(key);
	if (index === -1 || index === parts.length - 1) {
		return '';
	}

	return parts[index + 1] || '';
};

/**
 * Removes key-value pairs from an object where the value is considered empty.
 *
 * @param {Object} obj - The input object.
 * @returns {Object} - A new object with empty values removed. The input object remains unchanged.
 */
export function AtrcRemoveObjectEmptyValues(obj) {
	if (!isObject(obj)) {
		return obj;
	}

	const newObject = cloneDeep(obj);

	for (let key in newObject) {
		// Check if the value is empty (empty string, null, or undefined)
		if (
			newObject[key] === '' ||
			newObject[key] === null ||
			newObject[key] === undefined
		) {
			// Delete the key-value pair
			delete newObject[key];
		}
	}

	return newObject;
}

/**
 * Get and set query parameters in the URL based on the provided key and updateParams.
 *
 * @param {string} key          - The key used to identify the query parameters configuration.
 * @param {Object} updateParams - The parameters to update or add to the URL (default: {}).
 * @return {Object} An object containing the updated or added query parameters.
 *
 * Example:
 *
 * // Given key: 'userSettings'
 * const updatedQueryParams = AtrcGetandSetQueryParams('userSettings');
 * console.log(updatedQueryParams);
 * // Output: { theme: 'dark', language: 'en' }
 */
export function AtrcGetQueryParams(key) {
	// Get the current URL
	const currentUrl = window.location.href;

	// Remove existing query parameters from the URL
	let newUrl = '';
	if (window.location.hash) {
		if (window.location.hash.indexOf('?') !== -1) {
			const newHash = window.location.hash.split('?')[0];
			newUrl = currentUrl.replace(window.location.hash, newHash);
		}
	} else {
		newUrl = AtrcRemoveQueryFromUrl({ currentUrl });
	}

	let search;

	// Determine the search part of the URL based on the presence of a hash
	if (location.hash) {
		search =
			location.hash.indexOf('?') === -1
				? ''
				: location.hash.substring(location.hash.indexOf('?') + 1);
	} else {
		({ search } = location);
	}

	// Parse the search parameters
	const params = new URLSearchParams(search);

	// Extract allowed and specified query parameters from the registred store.
	const { allowedParams, queryParams } = AtrcStore.DEFAULT_STATE[key];
	const { queryArgs: defaultQueryArgs } = AtrcStore.CACHE_STATE[key];

	const allowedParamsObject = {};
	if (allowedParams) {
		allowedParams.forEach(function (param) {
			if (params.has(param)) {
				allowedParamsObject[param] =
					params.getAll(param)[1] || params.get(param);
			}
		});
	}

	// Process queryParams with type 'url' and update newUrl accordingly
	if (queryParams) {
		map(queryParams, (pVal, pKey) => {
			if (pVal && pVal.type === 'url') {
				const newParamVal = AtrcGetUrlArgValue(newUrl, pKey);
				if (newParamVal) {
					allowedParamsObject[pKey] = newParamVal;
				}
				newUrl = AtrcRemoveUrlArg(newUrl, pKey);
			}
		});
	}

	const queryArgs = {
		...defaultQueryArgs,
		...allowedParamsObject,
	};
	return queryArgs;
}

/**
 * Get and set query parameters in the URL based on the provided key and updateParams.
 *
 * @param {string} key          - The key used to identify the query parameters configuration.
 * @param {Object} updateParams - The parameters to update or add to the URL (default: {}).
 * @return {Object} An object containing the updated or added query parameters.
 *
 * Example:
 *
 * // Given key: 'userSettings', updateParams: { theme: 'dark', language: 'en' }
 * const updatedQueryParams = AtrcGetandSetQueryParams('userSettings', { theme: 'dark', language: 'en' });
 * console.log(updatedQueryParams);
 * // Output: { theme: 'dark', language: 'en' }
 */
export function AtrcGetandSetQueryParams(key, updateParams = {}) {
	// Get the current URL
	const currentUrl = window.location.href;

	// Remove existing query parameters from the URL
	let newUrl = '';
	if (window.location.hash) {
		if (window.location.hash.indexOf('?') !== -1) {
			const newHash = window.location.hash.split('?')[0];
			newUrl = currentUrl.replace(window.location.hash, newHash);
		} else {
			newUrl = currentUrl;
		}
	} else {
		newUrl = AtrcRemoveQueryFromUrl({ currentUrl });
	}

	let search;

	// Determine the search part of the URL based on the presence of a hash
	if (location.hash) {
		search =
			location.hash.indexOf('?') === -1
				? ''
				: location.hash.substring(location.hash.indexOf('?') + 1);
	} else {
		({ search } = location);
	}

	// Parse the search parameters
	const params = new URLSearchParams(search);

	// Extract allowed and specified query parameters from the registred store.
	const { allowedParams, queryParams } = AtrcStore.DEFAULT_STATE[key];
	const { queryArgs: defaultQueryArgs } = AtrcStore.CACHE_STATE[key];

	const allowedParamsObject = {};
	if (allowedParams) {
		allowedParams.forEach(function (param) {
			if (params.has(param)) {
				allowedParamsObject[param] =
					params.getAll(param)[1] || params.get(param);
			}
		});
	}

	// Process queryParams with type 'url' and update newUrl accordingly
	if (queryParams) {
		map(queryParams, (pVal, pKey) => {
			if (pVal && pVal.type === 'url') {
				const newParamVal = AtrcGetUrlArgValue(newUrl, pKey);
				if (newParamVal) {
					allowedParamsObject[pKey] = newParamVal;
				}
				newUrl = AtrcRemoveUrlArg(newUrl, pKey);
			}
		});
	}

	// Merge allowedParamsObject with updateParams
	const mergeArgs = {
		...defaultQueryArgs,
		...allowedParamsObject,
		...updateParams,
	};

	// Filter out key-value pairs with null values
	const queryArgs = Object.fromEntries(
		Object.entries(mergeArgs).filter(([key, value]) => value !== null)
	);

	// Process queryParams with type 'url' and update newUrl accordingly
	if (queryArgs) {
		map(queryArgs, (pVal, param) => {
			if (
				queryParams &&
				queryParams.hasOwnProperty(param) &&
				queryParams[param].type === 'url'
			) {
				newUrl = AtrcAddUrlArg(newUrl, param, pVal);
			}
		});
	}

	// setting new query params
	// exclude type 'url'. It need to add on url not on param.

	if (queryArgs && Object.keys(queryArgs).length > 0) {
		allowedParams.forEach(function (param) {
			if (param in queryArgs) {
				if (queryArgs[param] !== '') {
					if (
						!(
							queryParams &&
							queryParams.hasOwnProperty(param) &&
							queryParams[param].type === 'url'
						)
					) {
						params.set(param, queryArgs[param]);
					}
				} else {
					params.delete(param);
				}
			} else {
				params.delete(param);
			}
		});

		newUrl = newUrl.replace(newUrl, `${newUrl}`);
		if (params.toString()) {
			newUrl = `${newUrl}?${params.toString()}`;
		}

		// Replace the current history state with the modified URL
		window.history.replaceState({}, document.title, decodeURI(newUrl));

		// Return the updated or added query parameters
		return queryArgs;
	}

	// Return null if there are no updated or added query parameters
	return null;
}

/**
 * Given a value which can be specified as one or the other of a comma-separated
 * string or an array, returns a value normalized to an array of strings, or
 * null if the value cannot be interpreted as either.
 *
 * @param {string|string[]|*} value
 *
 * @return {?(string[])} Normalized field value.
 */
function getNormalizedCommaSeparable(value) {
	if (typeof value === 'string') {
		return value.split(',');
	} else if (Array.isArray(value)) {
		return value;
	}

	return null;
}

/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number}      page     The query page (1-based index, default 1).
 * @property {number}      perPage  Items per page for query (default 10).
 * @property {string}      queryKey An encoded stable string of all non-
 *                                  pagination, non-fields query parameters.
 * @property {?(string[])} fields   Target subset of fields to derive from
 *                                  item objects.
 * @property {?(number[])} include  Specific item IDs to include.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `queryKey` value.
 * Link https://github.com/WordPress/gutenberg/blob/e12881c79441ca874fb2b2c2adffba8ed0792103/packages/core-data/src/queried-data/get-query-parts.js#L34
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */
export function AtrcGetQueryParts(query) {
	/**
	 * @type {WPQueriedDataQueryParts}
	 */
	const parts = {
		queryKey: 'atrcQueryKey',
		page: 1,
		perPage: 10,
		fields: null,
		include: null,
	};
	if (!query) {
		return parts;
	}
	query = AtrcRemoveObjectEmptyValues(query);

	// Ensure stable key by sorting keys. Also more efficient for iterating.
	const keys = Object.keys(query).sort();

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		let value = query[key];

		switch (key) {
			// case 'page':
			// 	parts[key] = Number(value);
			// 	break;

			// case 'per_page':
			// 	parts.perPage = Number(value);
			// 	break;

			// case 'include':
			// 	parts.include = getNormalizedCommaSeparable(value).map(Number);
			// 	break;

			default:
				// While in theory, we could exclude "_fields" from the queryKey
				// because two request with different fields have the same results
				// We're not able to ensure that because the server can decide to omit
				// fields from the response even if we explicitely asked for it.
				// Example: Asking for titles in posts without title support.
				if (key === '_fields') {
					parts.fields = getNormalizedCommaSeparable(value);
					// Make sure to normalize value for `queryKey`
					value = parts.fields.join();
				}

				// While it could be any deterministic string, for simplicity's
				// sake mimic querystring encoding for stable key.
				//
				// TODO: For consistency with PHP implementation, addQueryArgs
				// should accept a key value pair, which may optimize its
				// implementation for our use here, vs. iterating an object
				// with only a single key.
				parts.queryKey +=
					(parts.queryKey ? '&' : 'atrcQueryKey-') +
					addQueryArgs('', { [key]: value }).slice(1);
		}
	}

	return parts;
}

/**
 * Removes all key-value pairs from the given object where the key contains the specified substring.
 *
 * @param {Object} obj       - The object from which to remove key-value pairs.
 * @param {string} substring - The substring to match in the keys for removal.
 * @return {void} without cloned delete
 */
export function AtrcObjAddFlushedKey(obj, substring) {
	for (const key in obj) {
		if (key.includes(substring)) {
			obj[key] = 'atrcFlushed';
		}
	}
}

/**
 * Flushes the cache by removing all key-value pairs with keys containing the atrcQueryKey.
 *
 * @param {Object} cache - The cache object to be flushed.
 * @return {void}
 */
export function AtrcFlushCache(cache) {
	AtrcObjAddFlushedKey(cache, 'atrcQueryKey');
}

/**
 * Flushes the cache by removing all key-value pairs with keys containing the atrcQueryKey.
 *
 * @param {any} data - The cache object or string.
 * @return {void}
 */
export function AtrcIsFlushed(data) {
	return 'atrcFlushed' === data;
}
