import React from 'react';

/* Internal */
import AtrcApis from '../api';
import { AtrcStore } from '../store';
import { AtrcDataLocalStorageGetSettings } from './../local-storage';

/* Local */
/**
 * Controls are used to handle side-effects that are triggered by the dispatch of an action.
 */
export const controls = {
	/**
	 * Perform an API call to get data.
	 *
	 * @param {Object} action                - The action object with information about the request.
	 * @param {string} action.key            - The data key, e.g., fonts, icons, posts, page, etc.
	 * @param {Object} action.queryArgs      - Object containing query arguments.
	 * @param {Object} action.hiddenQueryArgsData - Additional data passed to the API (optional).
	 * @return {Promise} A promise representing the result of the API call.
	 */
	GET_DATA: (action) => {
		return AtrcApis.doApi({
			key: action.key,
			type: 'getItems',
			data: action.queryArgs,
			hiddenQueryArgsData: action.hiddenQueryArgsData || null,
		});
	},

	/**
	 * Perform an API call to get a specific item.
	 *
	 * @param {Object} action     - The action object with information about the request.
	 * @param {string} action.key - The data key, e.g., fonts, icons, posts, page, etc.
	 * @param {string} action.id  - The identifier of the item to retrieve.
	 * @return {Promise} A promise representing the result of the API call.
	 */
	GET_ITEM: (action) =>
		AtrcApis.doApi({
			key: action.key,
			type: 'getItem',
			rowId: action.id,
		}),

	/**
	 * Perform an API call to get settings.
	 *
	 * @param {Object} action     - The action object with information about the request.
	 * @param {string} action.key - The settings key, mostly 'settings' or local storage data key.
	 * @return {Promise} A promise representing the result of the API call.
	 */
	GET_SETTINGS: (action) => {
		if ('localStorage' === AtrcStore.TYPES[action.key]) {
			return AtrcDataLocalStorageGetSettings(action.key);
		}
		return AtrcApis.doApi({ key: action.key, type: 'getSettings' });
	},
};
