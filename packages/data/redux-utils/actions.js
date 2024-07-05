import React from 'react';

/* Internal */
import AtrcApis from '../api';
import { AtrcDataLocalStorageSaveSettings } from '../local-storage';
import { AtrcStore } from '../store';
import {
    AtrcGetQueryParts,
    AtrcGetandSetQueryParams,
    AtrcIsFlushed,
} from '../utils';

/* Local */
// The actions object should describe all action creators available for your store.
export const actions = {
    /* CURD Start
    most of actions for CURD, only two below are for SETTINGS
    */

    /**
     * Action called before making a data API request. Updates state, especially isLoading to true and canSave to false.
     * Called mainly from resolvers.js.
     *
     * @param {Object} params           - Parameters for the action.
     * @param {string} params.key       - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.queryArgs - Object containing query arguments.
     * @param {string} params.queryKey  - The query key.
     * @return {Object} Action object.
     */
    beforeDataApi({ key, queryArgs, queryKey }) {
        return {
            type: 'BEFORE_DATA_API',
            key,
            queryArgs,
            queryKey,
        };
    },

    /**
     * Action to initiate a data retrieval from the API. Called mainly from resolvers.js.
     *
     * @param {Object} params                - Parameters for the action.
     * @param {string} params.key            - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.queryArgs      - Object containing query arguments.
     * @param {Object} params.hiddenQueryArgsData - Additional data passed to the API (optional).
     * @return {Object} Action object.
     */
    getData({ key, queryArgs, hiddenQueryArgsData = null }) {
        return {
            type: 'GET_DATA',
            key,
            queryArgs,
            hiddenQueryArgsData,
        };
    },

    /**
     * Action called after successful data retrieval from the API. Updates state with data from the API.
     * Called mainly from resolvers.js.
     *
     * @param {Object} params           - Parameters for the action.
     * @param {string} params.key       - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.data      - Data obtained from the API.
     * @param {Object} params.queryArgs - Object containing query arguments (optional).
     * @param {string} params.queryKey  - The query key.
     * @return {Object} Action object.
     */
    setData({ key, data, queryArgs = null, queryKey }) {
        return {
            type: 'SET_DATA',
            key,
            data,
            queryArgs,
            queryKey,
        };
    },

    /**
     * Action to update the state of query arguments (`queryArgs`), query key (`queryKey`),
     * and cached data that matches the specified query.
     * Called mainly from hoc-items.js.
     *
     * @param {Object}  params                       - Parameters for the action.
     * @param {string}  params.key                   - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object}  params.queryArgs             - Object containing query arguments.
     * @param {boolean} [params.update=true]         - Whether to update the query arguments.
     * @param {Object}  [params.hiddenQueryArgsData=null] - Additional hidden data for the query.
     * @return {Function} Async function representing the action.
     */
    setQueryArgs:
        ({
            key,
            queryArgs,
            update = true,
            hiddenQueryArgsData = null,
            refresh = false,
        }) =>
            // eslint-disable-next-line no-unused-vars
            async ({ select, resolveSelect, dispatch }) => {
                if (update) {
                    queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
                }

                const queryParts = AtrcGetQueryParts(queryArgs);
                const { queryKey } = queryParts;

                const data = await resolveSelect.getCachedData(key, queryKey);
                /* need refetch */
                if (AtrcIsFlushed(data) || refresh) {
                    dispatch({
                        type: 'SET_IS_LOADING',
                        key,
                        isLoading: true,
                    });

                    const result = await AtrcApis.doApi({
                        key,
                        type: 'getItems',
                        data: queryArgs,
                        hiddenQueryArgsData,
                    });
                    dispatch({
                        type: 'SET_DATA',
                        key,
                        data: result,
                        queryArgs,
                        queryKey,
                    });
                } else {
                    dispatch({
                        type: 'SET_QUERY_ARGS',
                        key,
                        queryArgs,
                    });
                }
            },

    /**
     * Action to update the state of all selected items in the specified data key.
     * Called mainly from hoc-items.js.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
     * @return {Object} Action object.
     */
    toggleSelectAll({ key }) {
        return {
            type: 'TOGGLE_SELECT_ALL',
            key,
        };
    },

    /**
     * Action to update the state of a selected item in the specified data key.
     * Called mainly from hoc-items.js.
     *
     * @param {Object} params      - Parameters for the action.
     * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.item - The item to toggle.
     * @return {Object} Action object.
     */
    toggleSelect({ key, item }) {
        return {
            type: 'TOGGLE_SELECT',
            key,
            item,
        };
    },

    /**
     * Action to indicate that an item API request is about to be made.
     * Updates the state, especially setting isLoading to true and canSave to false.
     * Called mainly from resolvers.js.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
     * @return {Object} Action object.
     */
    beforeItemApi({ key }) {
        return {
            type: 'BEFORE_ITEM_API',
            key,
        };
    },

    /**
     * Action to request an item from the API.
     * Called mainly from resolvers.js. This function may not always be called
     * since resolver.js tries to get items for already available items, but it's
     * called when directly accessing an item on 2nd or greater pages.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {string} params.id  - The identifier of the item to get.
     * @return {Object} Action object.
     */
    getItem({ key, id }) {
        return {
            type: 'GET_ITEM',
            key,
            id,
        };
    },

    /**
     * Action to update the state to an item obtained from the API or existing items.
     * The item is currently an edit/view single item.
     *
     * @param {Object} params      - Parameters for the action.
     * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.data - The item data to set in the state.
     * @return {Object} Action object.
     */
    setItem({ key, data }) {
        return {
            type: 'SET_ITEM',
            key,
            data,
        };
    },

    /**
     * Action to update the state to item properties obtained from user input.
     *
     * @param {Object} params         - Parameters for the action.
     * @param {string} params.key     - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {string} params.dataKey - The key of the item property to update.
     * @param {string} params.dataVal - The new value of the item property.
     * @return {Object} Action object.
     */
    updateItemData({ key, dataKey, dataVal }) {
        return {
            type: 'UPDATE_ITEM_DATA',
            key,
            dataKey,
            dataVal,
        };
    },

    /**
     * Action to update an item via API. First, sets loading to true and canSave to false (!loading).
     * Sends data to the API, and the result to reducer.js for updating notice, updating the item data, and flushing the cache.
     *
     * @param {Object} params      - Parameters for the action.
     * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.data - The item data to update via API.
     * @return {Function} Async function representing the action.
     */
    updateItem({ key, data }) {
        // eslint-disable-next-line no-unused-vars
        return async ({ select, resolveSelect, dispatch }) => {
            dispatch({
                type: 'SET_IS_LOADING',
                key,
                isLoading: true,
            });

            const result = await AtrcApis.doApi({
                key,
                type: 'updateItem',
                data,
                rowId: data.id,
            });

            dispatch({
                type: 'UPDATE_ITEM',
                key,
                data: result,
            });
        };
    },

    /**
     * Action to add an item via API. First, sets loading to true and canSave to false (!loading).
     * Sends data to the API, and the result to reducer.js for adding notice, adding the item data, and flushing the cache.
     *
     * @param {Object} params      - Parameters for the action.
     * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.data - The item data to add via API.
     * @return {Function} Async function representing the action.
     */
    insertItem({ key, data }) {
        // eslint-disable-next-line no-unused-vars
        return async ({ select, resolveSelect, dispatch }) => {
            dispatch({
                type: 'SET_IS_LOADING',
                key,
                isLoading: true,
            });
            const result = await AtrcApis.doApi({ key, type: 'insertItem', data });

            dispatch({
                type: 'INSERT_ITEM',
                key,
                data: result,
            });
        };
    },

    /**
     * Action to set an array of item IDs to delete and an object on the `confirmDelete` key to manage deleting items.
     *
     * @param {Object} params      - Parameters for the action.
     * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.data - Data containing an array of item IDs and an object for confirming deletion.
     * @return {Object} Action object.
     */
    setConfirmDelete({ key, data }) {
        return {
            type: 'SET_CONFIRM_DELETE',
            key,
            data,
        };
    },

    /**
     * Action to delete an item or items via API.
     * First, sets loading to true, and can save to false (!loading).
     * Sends data to the API, and the result to reducer.js for adding notice, deleting the item(s), and flushing the cache.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Array}  params.ids - An array of item IDs to delete.
     * @return {Function} Async function representing the action.
     */
    deleteItems({ key, ids }) {
        return async ({ select, resolveSelect, dispatch }) => {
            dispatch({
                type: 'SET_IS_LOADING',
                key,
                isLoading: true,
            });
            const promises = ids.map(
                async (id) =>
                    await AtrcApis.doApi({ key, type: 'deleteItem', rowId: id })
            );
            const result = await Promise.all(promises);
            dispatch({
                type: 'DELETE_ITEMS',
                key,
                data: result,
            });
        };
    },

    /* Notice */
    /**
     * Action to add a notice. Called mainly from hoc.
     *
     * @param {Object} params        - Parameters for the action.
     * @param {string} params.key    - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.notice - The notice object to add.
     * @return {Object} Action object.
     */
    setNotice({ key, notice }) {
        return {
            type: 'SET_NOTICE',
            key,
            notice,
        };
    },

    /**
     * Action to remove a notice. Called mainly from hoc.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {string} params.id  - The identifier of the notice to remove.
     * @return {Object} Action object.
     */
    removeNotice({ key, id }) {
        return {
            type: 'REMOVE_NOTICE',
            key,
            id,
        };
    },

    /**
     * Action to replace notices with new provided notices. Called mainly from hoc.
     *
     * @param {Object} params         - Parameters for the action.
     * @param {string} params.key     - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Array}  params.notices - An array of notice objects to set.
     * @return {Object} Action object.
     */
    setNotices({ key, notices }) {
        return {
            type: 'SET_NOTICES',
            key,
            notices,
        };
    },

    /**
     * Action to add extra data for some logic. Called mainly from hoc-items.js, rarely used.
     *
     * @param {Object} params      - Parameters for the action.
     * @param {string} params.key  - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {Object} params.data - The extra data to add.
     * @return {Object} Action object.
     */
    setExtraData({ key, data }) {
        return {
            type: 'SET_EXTRA_DATA',
            key,
            data,
        };
    },

    /**
     * Settings actions
     */

    /**
     * Action to indicate that a settings API request is about to be made.
     * Updates the state, especially setting isLoading to true and canSave to false.
     * Called mainly from resolvers.js.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The settings key.
     * @return {Object} Action object.
     */
    beforeSettingsApi({ key }) {
        return {
            type: 'BEFORE_SETTINGS_API',
            key,
        };
    },

    /**
     * Action to request settings from API or local storage.
     * Called mainly from resolvers.js.
     *
     * @param {Object} params     - Parameters for the action.
     * @param {string} params.key - The settings key.
     * @return {Object} Action object.
     */
    getSettings({ key }) {
        return {
            type: 'GET_SETTINGS',
            key,
        };
    },

    /**
     * Action to update the state with all settings data obtained from API.
     * Sets notice if setNotice is true (sometimes notice not needed).
     * Called mainly from resolvers.js.
     *
     * @param {Object}  params                  - Parameters for the action.
     * @param {string}  params.key              - The settings key.
     * @param {Object}  params.data             - The settings data to set in the state.
     * @param {boolean} [params.setNotice=true] - Whether to set a notice.
     * @return {Object} Action object.
     */
    setSettings({ key, data, setNotice = true }) {
        return {
            type: 'SET_SETTINGS',
            key,
            data,
            setNotice,
        };
    },

    /**
     * Action to update the state with item properties obtained from user input.
     *
     * @param {Object} params         - Parameters for the action.
     * @param {string} params.key     - The data key, e.g., fonts, icons, posts, page, etc.
     * @param {string} params.dataKey - The key of the data property to update.
     * @param {any}    params.dataVal - The value to set for the data property.
     * @return {Object} Action object.
     */
    updateSetting({ key, dataKey, dataVal }) {
        return {
            type: 'UPDATE_SETTING',
            key,
            dataKey,
            dataVal,
        };
    },

    /**
     * Action to update settings via API or local storage.
     * First, sets loading to true, and can save to false (!loading).
     * Sends data to the API or local storage and the result to reducer.js for updating notice and updating the settings data.
     *
     * @param {string}  key               - The settings key.
     * @param {Object}  data              - The settings data to save.
     * @param {boolean} [setNotice=false] - Whether to set a notice.
     * @return {Function} Async function representing the action.
     */
    saveSettings({ key, data, setNotice = false }) {
        // eslint-disable-next-line no-unused-vars
        return async ({ select, resolveSelect, dispatch }) => {
            dispatch({
                type: 'SET_IS_LOADING',
                key,
                isLoading: true,
            });
            let result;
            if ('localStorage' === AtrcStore.TYPES[key]) {
                result = AtrcDataLocalStorageSaveSettings(key, data);
            } else {
                result = await AtrcApis.doApi({
                    key,
                    type: 'saveSettings',
                    data,
                });
            }

            dispatch({
                type: 'SET_SETTINGS',
                key,
                data: result,
                setNotice,
            });
        };
    },

    /**
     * Action to delete settings via API.
     * First, sets loading to true, and can save to false (!loading).
     * If there is data, Sends data to the API, and the result to reducer.js for adding notice, deleting the item(s), and flushing the cache.
     *
     * @param {string}  key               - The settings key.
     * @param {Object}  data              - The settings data to save.
     * @param {boolean} [setNotice=false] - Whether to set a notice.
     * @return {Function} Async function representing the action.
     */
    deleteSettings({ key, data = null, setNotice = false }) {
        return async ({ select, resolveSelect, dispatch }) => {
            dispatch({
                type: 'SET_IS_LOADING',
                key,
                isLoading: true,
            });

            let result;
            if ('localStorage' === AtrcStore.TYPES[key]) {
                result = AtrcDataLocalStorageSaveSettings(key, data);
            } else {
                result = await AtrcApis.doApi({
                    key,
                    type: 'deleteSettings',
                    data,
                });
            }

            dispatch({
                type: 'SET_SETTINGS',
                key,
                data: result,
                setNotice,
            });

        };
    },
    /**
     * Custom Dispatch action.
     * Allows using this store with custom solutions by providing a callback function.
     *
     * @param {Function} callback - The callback function to be executed.
     * @return {Function} Function representing the custom dispatch action.
     */
    customDispatch(callback) {
        return ({ select, resolveSelect, dispatch, registry }) => {
            callback(select, resolveSelect, dispatch, AtrcStore, AtrcApis, registry);
        };
    },
};
