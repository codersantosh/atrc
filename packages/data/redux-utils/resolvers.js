import React from 'react';

/* WordPress */
import { select } from '@wordpress/data';

/* Library */
import { find } from 'lodash';

/* Internal */
import { AtrcGetQueryParts } from '../utils';
import { actions } from './actions';

/* Local */
/**
 * A resolver is a side-effect for a selector.
 * If your selector result may need to be fulfilled from an external source,
 * you can define a resolver such that the first time the selector is called,
 * the fulfillment behavior is effected.
 */
export const resolvers = {
	/**
	 * Get fresh data from the API.
	 *
	 * @param {string} key            - The data key, e.g., fonts, icons, posts, page, etc.
	 * @param {Object} queryArgs      - Object containing query arguments.
	 * @param {Object} hiddenQueryArgsData - Additional data passed to the API (optional).
	 */
	*getData(key, queryArgs, hiddenQueryArgsData = {}) {
		const queryParts = AtrcGetQueryParts(queryArgs);
		const { queryKey } = queryParts;

		yield actions.beforeDataApi({
			key,
			queryArgs,
			queryKey,
			hiddenQueryArgsData,
		});

		const result = yield actions.getData({
			key,
			queryArgs,
			hiddenQueryArgsData,
		});

		yield actions.setData({
			key,
			data: result,
			queryArgs,
			queryKey,
		});
	},

	/**
	 * Get an item from already fetched items.
	 * If the item is not present in fetched items, get a fresh item from the API.
	 *
	 * @param {string} key       - The data key, e.g., fonts, icons, posts, page, etc.
	 * @param {string} id        - The identifier of the item to retrieve.
	 * @param {Object} atrcStore - The Atrc store object.
	 */
	*getItem(key, id, atrcStore) {
		const items = select(atrcStore).getItems(key);
		let result = null;
		if (items) {
			result = yield find(items, (itm) => itm.id === parseInt(id));
		}

		if (!result) {
			yield actions.beforeItemApi({
				key,
			});
			result = yield actions.getItem({ key, id });
		}

		yield actions.setItem({ key, data: result });
	},

	/**
	 * Get fresh settings from the API.
	 *
	 * @param {string}  key       - The settings key, mostly 'settings' or local storage data key.
	 * @param {boolean} setNotice - set notice of saved or not
	 */
	*getSettings(key, setNotice = false) {
		yield actions.beforeSettingsApi({
			key,
		});

		const result = yield actions.getSettings({ key });
		yield actions.setSettings({ key, data: result, setNotice });
	},
};
