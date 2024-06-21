import React from 'react';

/* WordPress */
import { __, sprintf } from '@wordpress/i18n';

/* Library */
import { cloneDeep, isEqual, isObject } from 'lodash';

/* Internal */
import { AtrcStore } from '../store';
import { AtrcFlushCache, AtrcGetQueryParts } from '../utils';

/* Local */
/* Error Notice */
const getItemErrorNotice = ({ error }) => {
	let message, code;

	if (error.message) {
		({ message } = error);
	} else {
		message = sprintf(
			// translators: %s: action type
			__('Error while data store process for %s.', 'atrc-prefix-atrc'),
			action.type
		);
	}
	return {
		type: 'error',
		code: code || 'GENERAL',
		message,
	};
};

/**
 * Reducer function for managing state updates based on dispatched actions.
 *
 * @param {Object|null} state - The previous state.
 * @param {Object}      act   - The action object.
 * @return {Object} The updated state.
 */
export const reducer = (state = AtrcStore.DEFAULT_STATE, act) => {
	if (!('key' in act)) {
		return state;
	}

	const action = cloneDeep(act);
	const { key } = action;

	let newState = {};

	if (null === state) {
		newState[key] = {};
	} else {
		newState = cloneDeep(state);
	}

	switch (action.type) {
		/* set isLoading true and and canSave false, if state is not set for the provided key, also selectedItems to empty since api will start for new data*/
		case 'BEFORE_DATA_API': {
			const { queryKey } = action;

			if (!newState[key]) {
				newState[key] = null;
			}
			let result = cloneDeep(newState[key]);

			/* Set default if state is not defined yet */
			if (!isObject(result)) {
				result[queryKey] = AtrcStore.CACHE_STATE[key];
			}

			result.isLoading = true;
			result.canSave = false;

			result.selectedItems = [];

			newState[key] = result;

			return newState;
		}

		/* set cachedData and current data to cachedData, cachedData is used specially on SET_QUERY_ARGS to set cached data to current data according to querykey, also selectedItems to empty since setting new data*/
		case 'SET_DATA': {
			const { data, queryArgs, queryKey } = action;

			if (!newState[key]) {
				newState[key] = {};
			}

			let result = cloneDeep(newState[key]);

			/* Set default if state is not defined yet */
			if (!isObject(result)) {
				result[queryKey] = AtrcStore.CACHE_STATE;
			}

			result.isLoading = false;

			const cachedData = {};
			if (data.error) {
				const newNotices = [...result.notices];
				newNotices.push(getItemErrorNotice({ error: data.error }));
				cachedData.notices = newNotices;
			} else {
				cachedData.items = data.items;
				cachedData.countQueryItems = data.countQueryItems;
				cachedData.totalPages = data.totalPages;
				cachedData.countAllItems = data.countAllItems;

				cachedData.queryArgs = cloneDeep(queryArgs) || {};
			}
			result[queryKey] = cachedData;
			result.currentCache = queryKey;

			result.selectedItems = [];

			result = {
				...result,
				...cachedData,
			};

			newState[key] = result;
			return newState;
		}

		/* set state of queryArgs to provided queryArgs and if cached data is available set cached data to current data according to querykey,also selectedItems to empty since fetching new data or settings new data from cached*/
		case 'SET_QUERY_ARGS': {
			let result = cloneDeep(newState[key]);

			const { queryArgs } = action;

			const queryParts = AtrcGetQueryParts(queryArgs);
			const { queryKey } = queryParts;

			/* Set default if state is not defined yet */
			if (!isObject(result)) {
				result[queryKey] = AtrcStore.CACHE_STATE[key];
			}

			result.currentCache = queryKey;
			if (result[queryKey]) {
				const cachedData = result[queryKey];
				result = {
					...result,
					...cachedData,
				};
			}
			result.queryArgs = queryArgs;

			result.selectedItems = [];

			newState[key] = result;

			return newState;
		}

		/* toggle state of all selected items to empty array or all items*/
		case 'TOGGLE_SELECT_ALL': {
			const result = cloneDeep(newState[key]);

			if (result.selectedItems.length === result.items.length) {
				result.selectedItems = [];
			} else {
				result.selectedItems = cloneDeep(result.items);
			}

			newState[key] = result;
			return newState;
		}

		/* toggle state of a selected item*/
		case 'TOGGLE_SELECT': {
			const result = cloneDeep(newState[key]);

			// eslint-disable-next-line eqeqeq
			if (result.selectedItems.find((item) => item.id == action.item.id)) {
				result.selectedItems = result.selectedItems.filter(
					// eslint-disable-next-line eqeqeq
					(item) => item.id != action.item.id
				);
			} else {
				result.selectedItems = [
					...result.selectedItems,
					result.items.find((item) => item.id === action.item.id),
				];
			}

			newState[key] = result;
			return newState;
		}

		/* Add/Edit Item */
		/* set isLoading true and and canSave false*/
		case 'BEFORE_ITEM_API': {
			const result = cloneDeep(newState[key]);

			result.isLoading = true;
			result.canSave = false;

			newState[key] = result;
			return newState;
		}

		/* set currently edit/view single item, set isLoading false and and canSave false since loading is completed and use need to update item data before it can be save*/
		case 'SET_ITEM': {
			const result = cloneDeep(newState[key]);
			result.item = cloneDeep(action.data);

			result.isLoading = false;
			result.canSave = false;

			newState[key] = result;
			return newState;
		}

		/* set item properties to user changed data, after setting item data if it is equal to original data no need to save it again*/
		case 'UPDATE_ITEM_DATA': {
			const result = cloneDeep(newState[key]);

			result.item[action.dataKey] = action.dataVal;
			if (isEqual(result.original, result.item)) {
				result.canSave = false;
			} else {
				result.canSave = true;
			}

			newState[key] = result;
			return newState;
		}

		/* add notice, updating a item data by id, and flush cache */
		case 'UPDATE_ITEM': {
			const { data } = action;

			const result = cloneDeep(newState[key]);

			const newNotices = [...result.notices];

			if (data.error) {
				newNotices.push(getItemErrorNotice({ error: data.error }));
			} else {
				const updatedItem = result.items.find((item) => item.id === data.id);
				if (updatedItem) {
					result.items = result.items.map((item) =>
						item.id === data.id ? data : item
					);
				} else {
					result.items = [...result.items, cloneDeep(data)];
				}

				result.item = cloneDeep(data);
				result.original = cloneDeep(data);

				/* Set success notice */
				newNotices.push({
					type: 'success',
					code: 'GENERAL',
					message: sprintf(
						// translators: %s: item id
						__(
							'The item with id %s is updated successfully',
							'atrc-prefix-atrc'
						),
						result.item.id
					),
				});
			}
			result.notices = newNotices;
			result.isLoading = false;
			result.canSave = false;

			/* flush all cache */
			AtrcFlushCache(result);

			newState[key] = result;

			return newState;
		}

		/* add notice, add a new item, and flush cache */
		case 'INSERT_ITEM': {
			const { data } = action;

			const result = cloneDeep(newState[key]);

			let newNotices = [...result.notices];

			if (data.error) {
				newNotices.push(getItemErrorNotice({ error: data.error }));
			} else {
				result.items = [...result.items, cloneDeep(data)];

				result.item = cloneDeep(data);
				result.original = cloneDeep(data);

				/* Set success notice */
				newNotices.push({
					type: 'success',
					code: 'GENERAL',
					message: sprintf(
						// translators: %s: item id
						__('The item with id %s is added successfully', 'atrc-prefix-atrc'),
						result.item.id
					),
				});
			}
			result.notices = newNotices;
			result.isLoading = false;
			result.canSave = false;

			/* flush all cache */
			AtrcFlushCache(result);

			newState[key] = result;

			return newState;
		}

		/* Delete Item/s */
		/* set array of ids to delete and is iopen in and object on confirmDelete key to delete item/s */
		case 'SET_CONFIRM_DELETE': {
			const result = cloneDeep(newState[key]);
			result.confirmDelete = action.data;

			newState[key] = result;

			return newState;
		}

		/* adding notice, deleting the item data, and flush cache */
		case 'DELETE_ITEMS': {
			const { data } = action;

			const result = cloneDeep(newState[key]);
			const newNotices = [...result.notices];

			data.forEach(function (item) {
				if (item.error) {
					newNotices.push(getItemErrorNotice({ error: item.error }));
				} else {
					newNotices.push({
						type: 'success',
						code: 'GENERAL',
						message: __('Deleted successfully', 'atrc-prefix-atrc'),
					});
				}
			});
			result.notices = newNotices;

			const dataWithoutError = data.filter((data) => !data.error);

			result.items = result.items.filter(
				(item1) => !dataWithoutError.some((item2) => item1.id === item2.id)
			);

			result.isLoading = false;
			result.confirmDelete = {};

			/* flush all cache */
			AtrcFlushCache(result);

			newState[key] = result;

			return newState;
		}

		/* Notice */
		/* Add notice to existing notices */
		case 'SET_NOTICE': {
			const result = cloneDeep(newState[key]);
			const newNotices = [...result.notices];

			newNotices.push(action.notice);
			result.notices = newNotices;

			newState[key] = result;
			return newState;
		}

		/* Remove notice*/
		case 'REMOVE_NOTICE': {
			const result = cloneDeep(newState[key]);

			const existingNotices = [...result.notices];

			// Using action.index instead of action.id
			const indexToDelete = action.id;

			if (indexToDelete >= 0 && indexToDelete < existingNotices.length) {
				existingNotices.splice(indexToDelete, 1);
			}

			result.notices = existingNotices;

			newState[key] = result;
			return newState;
		}

		/* replacing notices to new provided notices */
		case 'SET_NOTICES': {
			const result = cloneDeep(newState[key]);

			result.notices = cloneDeep(action.notices);

			newState[key] = result;
			return newState;
		}

		/* sometimes need extra data for some logic, called to reducer.js for adding extraData to new provided data */
		case 'SET_EXTRA_DATA': {
			const result = cloneDeep(newState[key]);

			result.extraData = cloneDeep(action.data);

			newState[key] = result;
			return newState;
		}

		/* Settings */
		/* set isLoading true and and canSave false, if state is not set for the provided key, add global default data to state*/
		case 'BEFORE_SETTINGS_API': {
			let result = cloneDeep(newState[key]);
			if (!isObject(result)) {
				result = AtrcStore.DEFAULT_STATE[key];
			}

			result.isLoading = true;
			result.canSave = false;

			newState[key] = result;

			return newState;
		}

		/* set new settings data to original and settings, original is for comparing and settings is changing on UPDATE_SETTING*/
		case 'SET_SETTINGS': {
			const { data, setNotice = false } = action;

			const result = cloneDeep(newState[key]);

			const newNotices = [...result.notices];

			if (data.error) {
				newNotices.push(getItemErrorNotice({ error: data.error }));

				result.notices = newNotices;
			} else {
				result.original = data.settings;
				result.settings = cloneDeep(data.settings);

				if (setNotice) {
					/* Set success notice */
					newNotices.push({
						type: 'success',
						code: 'GENERAL',
						message: __('Updated successfully', 'atrc-prefix-atrc'),
					});
					result.notices = newNotices;
				}
			}

			result.canSave = false;
			result.isLoading = false;

			newState[key] = result;
			return newState;
		}

		/* set a setting properties to user changed data, after setting setting data if it is equal to original data no need to save it again*/
		case 'UPDATE_SETTING': {
			const result = cloneDeep(newState[key]);

			result.settings[action.dataKey] = action.dataVal;

			if (isEqual(result.original, result.settings)) {
				result.canSave = false;
			} else {
				result.canSave = true;
			}
			newState[key] = result;
			return newState;
		}

		/* Internally used by actions from actions.js*/
		case 'SET_IS_LOADING': {
			const result = cloneDeep(newState[key]);
			result.isLoading = action.isLoading;
			result.canSave = !action.isLoading;

			newState[key] = result;
			return newState;
		}
	}

	return newState;
};
