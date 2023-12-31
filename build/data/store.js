/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { createReduxStore, register } from '@wordpress/data';

/* Library */
import { cloneDeep, isEqual } from 'lodash';

/* API */
import AtrcApis from './api';

/* Local */
/* For local storage */
const AtrcDataLocalStorageGetSettings = localStorageKey => {
  let data = null;
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Try to get the settings from local storage
    data = localStorage.getItem(localStorageKey);
  } else {
    // If local storage is not available, try to get the settings from a cookie
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const cookieName = cookie.substring(0, cookie.indexOf('='));
      const cookieValue = cookie.substring(cookie.indexOf('=') + 1);
      if (cookieName.trim() === localStorageKey) {
        data = cookieValue;
        break;
      }
    }
  }
  try {
    return {
      settings: JSON.parse(data)
    };
  } catch (err) {
    return {
      settings: data
    };
  }
};
const AtrcDataLocalStorageSaveSettings = (localStorageKey, data, expires = 365) => {
  const stringifiedData = JSON.stringify(data);
  if (!stringifiedData) {
    return AtrcDataLocalStorageRemoveSettings(localStorageKey);
  } else if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Try to save the settings to local storage
    localStorage.setItem(localStorageKey, stringifiedData);
  } else {
    // If local storage is not available, try to save the settings to a cookie
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); // expire after the specified number of days
    const expiresStr = '; expires=' + date.toUTCString();
    document.cookie = localStorageKey + '=' + stringifiedData + expiresStr + '; path=/';
  }
  return AtrcDataLocalStorageGetSettings(localStorageKey);
};
const AtrcDataLocalStorageRemoveSettings = key => {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    localStorage.removeItem(key);
  } else {
    const date = new Date();
    date.setTime(date.getTime() - 1);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = key + '=' + '' + expires + '; path=/';
  }
  return {};
};
export function AtrcGetandSetQueryParams(key, updateParams = {}) {
  let search;
  if (location.hash) {
    search = location.hash.indexOf('?') === -1 ? '' : location.hash.substring(location.hash.indexOf('?') + 1);
  } else {
    ({
      search
    } = location);
  }
  const params = new URLSearchParams(search);
  const {
    allowedParams
  } = AtrcStore.DEFAULT_STATE[key];
  const allowedParamsObject = {};
  if (allowedParams) {
    allowedParams.forEach(function (param) {
      if (params.has(param)) {
        allowedParamsObject[param] = params.getAll(param)[1] || params.get(param);
      }
    });
  }
  const queryArgs = {
    ...allowedParamsObject,
    ...updateParams
  };
  if (queryArgs && Object.keys(queryArgs).length > 0) {
    allowedParams.forEach(function (param) {
      if (param in queryArgs) {
        if (queryArgs[param]) {
          params.set(param, queryArgs[param]);
        } else {
          params.delete(param);
        }
      }
    });
    let newUrl = location.href;
    if (location.hash) {
      if (location.hash.indexOf('?') === -1) {
        newUrl += `?` + params.toString();
      } else {
        const newHash = location.hash.split('?')[0];
        newUrl = newUrl.replace(location.hash, `${newHash}?${params.toString()}`);
      }
    } else {
      newUrl = newUrl.replace(location.search, `?${params.toString()}`);
    }
    window.history.replaceState({}, document.title, decodeURI(newUrl));
    return queryArgs;
  }
  return null;
}
class ClassAtrcStore {
  constructor() {
    if (!ClassAtrcStore.instance) {
      ClassAtrcStore.instance = this;
      this.DEFAULT_STATE = {};
      this.TYPES = {};
    }
    return ClassAtrcStore.instance;
  }
  register(store) {
    this.addDefaults(store.key, store.type, store.queryArgs, store.allowedParams);
  }

  /* @param {string}        key          key data type eg: item, page, custom type, custom table etc */
  addDefaults(key, type = '', queryArgs, allowedParams) {
    this.TYPES[key] = type;
    if ('settings' === type || 'localStorage' === type) {
      // Register all methods for the key and path
      this.DEFAULT_STATE[key] = {
        isLoading: false,
        canSave: false,
        original: null /* store original settings */,
        settings: {} /* store state like settings */,
        notices: {},
        extraData: null,
        type
      };
    } else {
      // Register all methods for the key and path
      this.DEFAULT_STATE[key] = {
        isLoading: false,
        canSave: false,
        queryArgs: {
          context: 'edit',
          page: 1,
          per_page: 10,
          order: 'desc',
          orderby: 'created',
          search: null,
          author: null,
          author_exclude: null
          /* add others from queryArgs when registered*/
        },
        allowedParams: ['page', 'per_page', 'order', 'orderby', 'search', 'author', 'author_exclude'] /* allowed on query params */,
        items: [],
        //lists of items
        countAllItems: null,
        countQueryItems: null,
        totalPages: null,
        selectItems: [],
        // selected item data
        item: {},
        // like a state to  update data
        original: {},
        // a selected item data
        confirmDelete: {
          ids: [],
          open: false
        },
        notices: {},
        extraData: null // store extra data object
      };
    }
    if (queryArgs) {
      this.DEFAULT_STATE[key].queryArgs = queryArgs;
    }
    if (allowedParams) {
      this.DEFAULT_STATE[key].allowedParams = allowedParams;
    }
  }
  getDefaults(key = '') {
    if (key) {
      return this.DEFAULT_STATE[key] || null;
    }
    return this.DEFAULT_STATE;
  }
  setDefaults(key, defaults) {
    this.DEFAULT_STATE[key] = defaults;
  }
}
const AtrcStore = new ClassAtrcStore();
export { AtrcStore };

// The actions object should describe all action creators available for your store.
const actions = {
  /* CURD Start
  most of actions for CURD, only two below are for SETTINGS
  */
  /* getItems:
  	(key, queryArgs) =>
  	// eslint-disable-next-line no-unused-vars
  	async ({ select, resolveSelect, dispatch }) => {
  		console.log('Hello world');
  		dispatch({
  			type: 'SET_IS_LOADING',
  			key,
  			isLoading: true,
  		});
  		console.log(queryArgs);
  
  		dispatch({
  			type: 'GET_ITEMS',
  			key,
  			queryArgs,
  		});
  	}, */

  getItems(key, queryArgs) {
    return {
      type: 'GET_ITEMS',
      key,
      queryArgs
    };
  },
  getItem(key, id) {
    return {
      type: 'GET_ITEM',
      key,
      id
    };
  },
  /* Set/update state data of item/s*/
  setItems(key, data, queryArgs = null) {
    return {
      type: 'SET_ITEMS',
      key,
      data,
      queryArgs
    };
  },
  setItemsItems(key, items) {
    return {
      type: 'SET_ITEMS_ITEMS',
      key,
      items
    };
  },
  setItem(key, item) {
    return {
      type: 'SET_ITEM',
      key,
      item
    };
  },
  updateItemDatas(key, data) {
    return {
      type: 'UPDATE_ITEM_DATAS',
      key,
      data
    };
  },
  updateItemData(key, dataKey, dataVal) {
    return {
      type: 'UPDATE_ITEM_DATA',
      key,
      dataKey,
      dataVal
    };
  },
  /* Insert item */
  insertItem: (key, data) =>
  // eslint-disable-next-line no-unused-vars
  async ({
    select,
    resolveSelect,
    dispatch
  }) => {
    dispatch({
      type: 'SET_IS_LOADING',
      key,
      isLoading: true
    });
    const result = await AtrcApis.doApi(key, 'insertItem', data);
    dispatch({
      type: 'INSERT_ITEM',
      key,
      data: result
    });
  },
  insertItems(key, data) {
    return {
      type: 'INSERT_ITEMS',
      key,
      data
    };
  },
  /* Update Item */
  updateItem: (key, data) =>
  // eslint-disable-next-line no-unused-vars
  async ({
    select,
    resolveSelect,
    dispatch
  }) => {
    dispatch({
      type: 'SET_IS_LOADING',
      key,
      isLoading: true
    });
    const result = await AtrcApis.doApi(key, 'updateItem', data, data.id);
    dispatch({
      type: 'UPDATE_ITEM',
      key,
      data: result
    });
  },
  updateItems(key, data) {
    return {
      type: 'UPDATE_ITEMS',
      key,
      data
    };
  },
  /* Delete item/s */
  setConfirmDelete(key, confirmDelete) {
    return {
      type: 'SET_CONFIRM_DELETE',
      key,
      confirmDelete
    };
  },
  deleteItems: (key, ids) =>
  // eslint-disable-next-line no-unused-vars
  async ({
    select,
    resolveSelect,
    dispatch
  }) => {
    dispatch({
      type: 'SET_IS_LOADING',
      key,
      isLoading: true
    });
    const promises = ids.map(async id => await AtrcApis.doApi(key, 'deleteItem', null, id));
    const result = await Promise.all(promises);
    dispatch({
      type: 'DELETE_ITEMS',
      key,
      data: result
    });
  },
  setQueryArgs: (key, queryArgs, doFetch = true) => doFetch ?
  // eslint-disable-next-line no-unused-vars
  async ({
    select,
    resolveSelect,
    dispatch
  }) => {
    queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
    dispatch({
      type: 'GET_ITEMS',
      key,
      queryArgs
    });
    const result = await AtrcApis.doApi(key, 'getItems', queryArgs);
    dispatch({
      type: 'SET_ITEMS',
      key,
      data: result
    });
  } : {
    type: 'SET_QUERY_ARGS',
    key,
    queryArgs
  },
  setQueryArg: (key, dataKey, dataVal, doFetch = true) => doFetch ?
  // eslint-disable-next-line no-unused-vars
  async ({
    select,
    resolveSelect,
    dispatch
  }) => {
    const queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
    queryArgs[dataKey] = dataVal;
    dispatch({
      type: 'GET_ITEMS',
      key,
      queryArgs
    });
    const result = await AtrcApis.doApi(key, 'getItems', queryArgs);
    dispatch({
      type: 'SET_ITEMS',
      key,
      data: result
    });
  } : {
    type: 'SET_QUERY_ARG',
    key,
    dataKey,
    dataVal
  },
  setIsLoading(key, isLoading) {
    return {
      type: 'SET_IS_LOADING',
      key,
      isLoading
    };
  },
  setCountAllItems(key, countAllItems) {
    return {
      type: 'SET_COUNT_ALL_ITEMS',
      key,
      countAllItems
    };
  },
  setCountQueryItems(key, countQueryItems) {
    return {
      type: 'SET_COUNT_QUERY_ITEMS',
      key,
      countQueryItems
    };
  },
  setTotalPages(key, totalPages) {
    return {
      type: 'SET_TOTAL_PAGES',
      key,
      totalPages
    };
  },
  /* select itmes */
  toggleSelectAll(key) {
    return {
      type: 'TOGGLE_SELECT_ALL',
      key
    };
  },
  toggleSelect(key, item) {
    return {
      type: 'TOGGLE_SELECT',
      key,
      item
    };
  },
  setCanSave(key, canSave) {
    return {
      type: 'SET_CAN_SAVE',
      key,
      canSave
    };
  },
  /* Notice */
  setNotice(key, notice) {
    return {
      type: 'SET_NOTICE',
      key,
      notice
    };
  },
  removeNotice(key, id) {
    return {
      type: 'REMOVE_NOTICE',
      key,
      id
    };
  },
  setNotices(key, notices) {
    return {
      type: 'SET_NOTICES',
      key,
      notices
    };
  },
  setExtraData(key, data) {
    return {
      type: 'SET_EXTRA_DATA',
      key,
      data
    };
  },
  /* Settings */
  getSettings(key) {
    return {
      type: 'GET_SETTINGS',
      key
    };
  },
  setSettings(key, data) {
    return {
      type: 'SET_SETTINGS',
      key,
      data
    };
  },
  updateSetting(key, dataKey, dataVal) {
    return {
      type: 'UPDATE_SETTING',
      key,
      dataKey,
      dataVal
    };
  },
  saveSettings: (key, data, setNotice = false) =>
  // eslint-disable-next-line no-unused-vars
  async ({
    select,
    resolveSelect,
    dispatch
  }) => {
    dispatch({
      type: 'SET_IS_LOADING',
      key,
      isLoading: true
    });
    let result;
    if ('localStorage' === AtrcStore.TYPES[key]) {
      result = AtrcDataLocalStorageSaveSettings(key, data);
    } else {
      result = await AtrcApis.doApi(key, 'saveSettings', data);
    }
    dispatch({
      type: 'SET_SETTINGS',
      key,
      data: result,
      setNotice
    });
  },
  /* 
  Wanna use this store but need custom solutions use following
  Custom Dispatch*/
  customDispatch: callback =>
  // eslint-disable-next-line no-unused-vars
  ({
    select,
    resolveSelect,
    dispatch,
    registry
  }) => {
    callback(select, resolveSelect, dispatch, AtrcStore, AtrcApis, registry);
  }
};

/* Error Notice */
const getItemErrorNotice = (result, action) => {
  let message, code;
  const {
    error
  } = result;
  if (error.message) {
    ({
      message
    } = error);
  } else {
    message = sprintf(
    // translators: %s: action type
    __('Error while data store process for %s.', 'atrc-prefix-atrc'), action.type);
  }
  return {
    type: 'error',
    code: code || 'GENERAL',
    message
  };
};

// Controls are used to handle side-effects that are triggered by the dispatch of an action.
const controls = {
  GET_ITEMS: action => AtrcApis.doApi(action.key, 'getItems', action.queryArgs),
  GET_ITEM: action => AtrcApis.doApi(action.key, 'getItem', null, action.id),
  GET_SETTINGS: action => {
    if ('localStorage' === AtrcStore.TYPES[action.key]) {
      return AtrcDataLocalStorageGetSettings(action.key);
    }
    return AtrcApis.doApi(action.key, 'getSettings');
  }
};
// The selectors object includes a set of functions for accessing and deriving state values.
const selectors = {
  getItems: (state, key, all = true) => all ? state[key] : state[key].items,
  getItem: (state, key) => state[key].item,
  getSelectedItems: (state, key) => state[key].selectItems,
  getQueryArgs: (state, key) => state[key].queryArgs,
  getIsLoading: (state, key) => state[key].isLoading,
  getCountAllItems: (state, key) => state[key].countAllItems,
  getCountQueryItems: (state, key) => state[key].countQueryItems,
  getTotalPages: (state, key) => state[key].totalPages,
  getCanSave: (state, key) => state[key].canSave,
  getConfirmDelete: (state, key) => state[key].confirmDelete,
  getItemsNotices: (state, key) => state[key].notices,
  getSettings: (state, key, all = true, innerOptName = false) => {
    if (all) {
      return state[key];
    }
    if (!innerOptName) {
      return state[key].settings;
    }
    const {
      settings
    } = state[key];
    return settings && settings[innerOptName] ? settings[innerOptName] : null;
  }
};

// A resolver is a side-effect for a selector.
const resolvers = {
  *getItems(key, all, queryArgs) {
    queryArgs = AtrcGetandSetQueryParams(key, queryArgs);
    const result = yield actions.getItems(key, queryArgs);
    return actions.setItems(key, result, queryArgs);
  },
  *getItem(key, id) {
    const result = yield actions.getItem(key, id);
    return actions.setItem(key, result);
  },
  *getSettings(key) {
    const result = yield actions.getSettings(key);
    return actions.setSettings(key, result);
  }
};

// A reducer is a function accepting the previous state and action as arguments and returns an updated state value.
const reducer = (state = AtrcStore.DEFAULT_STATE, act) => {
  if (!('key' in act)) {
    return state;
  }
  const newState = cloneDeep(state);
  const action = cloneDeep(act);
  const {
    key
  } = action;
  const items = cloneDeep(newState[key]);
  switch (action.type) {
    case 'GET_ITEMS':
      {
        items.queryArgs = cloneDeep(action.queryArgs) || {};
        items.isLoading = true;
        items.canSave = false;
        break;
      }
    case 'GET_ITEM':
      items.isLoading = true;
      items.canSave = false;
      break;
    case 'SET_ITEMS':
      items.isLoading = false;
      items.canSave = false;
      if (action.data.error) {
        const newNotices = items.notices;
        const newKey = 'abc-' + Object.keys(newNotices).length;
        newNotices[newKey] = getItemErrorNotice();
        items.notices = newNotices;
      } else {
        items.items = action.data.items;
        items.countQueryItems = action.data.countQueryItems;
        items.totalPages = action.data.totalPages;
        items.countAllItems = action.data.countAllItems;
        if (action.queryArgs) {
          items.queryArgs = cloneDeep(action.queryArgs) || {};
        }
      }
      break;

    /* Query args */
    case 'SET_QUERY_ARGS':
      items.queryArgs = {
        ...items.queryArgs,
        ...action.queryArgs
      };
      break;
    case 'SET_QUERY_ARG':
      items.queryArgs[action.dataKey] = action.dataVal;
      break;
    case 'SET_IS_LOADING':
      items.isLoading = action.isLoading;
      break;
    case 'SET_ITEMS_ITEMS':
      items.items = action.items;
      break;
    case 'SET_COUNT_ALL_ITEMS':
      items.countAllItems = action.countAllItems;
      break;
    case 'SET_COUNT_QUERY_ITEMS':
      items.countQueryItems = action.countQueryItems;
      break;
    case 'SET_TOTAL_PAGES':
      items.totalPages = action.totalPages;
      break;
    case 'TOGGLE_SELECT_ALL':
      if (items.selectItems.length === items.items.length) {
        items.selectItems = [];
      } else {
        items.selectItems = cloneDeep(items.items);
      }
      break;
    case 'TOGGLE_SELECT':
      // eslint-disable-next-line eqeqeq
      if (items.selectItems.find(item => item.id == action.item.id)) {
        items.selectItems = items.selectItems.filter(
        // eslint-disable-next-line eqeqeq
        item => item.id != action.item.id);
      } else {
        items.selectItems = [...items.selectItems, items.items.find(item => item.id === action.item.id)];
      }
      break;
    case 'SET_CAN_SAVE':
      items.canSave = action.canSave;
      break;

    /* Notice */
    case 'SET_NOTICE':
      {
        const newNotices = cloneDeep(items.notices);
        const newKey = 'abc-' + Object.keys(newNotices).length;
        newNotices[newKey] = cloneDeep(action.notice);
        items.notices = newNotices;
        break;
      }
    case 'REMOVE_NOTICE':
      {
        const newNotices = cloneDeep(items.notices);
        const newKey = action.id;
        delete newNotices[newKey];
        items.notices = newNotices;
        break;
      }
    case 'SET_NOTICES':
      items.notices = cloneDeep(action.notices);
      break;
    case 'INSERT_ITEM':
      {
        const newNotices = items.notices;
        const newKey = 'abc-' + Object.keys(newNotices).length;
        if (action.data.error) {
          newNotices[newKey] = getItemErrorNotice();
        } else {
          items.items = [...items.items, cloneDeep(action.data)];
          items.item = cloneDeep(action.data);

          /* Set success notice */
          newNotices[newKey] = {
            type: 'success',
            code: 'GENERAL',
            message: sprintf(
            // translators: %s: item id
            __('The item with id %s is added successfully', 'atrc-prefix-atrc'), items.item.id)
          };
        }
        items.notices = newNotices;
        items.isLoading = false;
        items.canSave = false;
        break;
      }
    case 'INSERT_ITEMS':
      if (action.data.error) {
        const newNotices = items.notices;
        const newKey = 'abc-' + Object.keys(newNotices).length;
        newNotices[newKey] = getItemErrorNotice();
        items.notices = newNotices;
      } else {
        items.isLoading = false;
        items.items = [...items.items, ...action.data];
      }
      items.isLoading = false;
      items.canSave = false;
      break;

    /* Delete Item/s */
    case 'SET_CONFIRM_DELETE':
      items.confirmDelete = action.confirmDelete;
      break;
    case 'DELETE_ITEMS':
      {
        const newNotices = items.notices;
        action.data.forEach(function (item) {
          const newKey = 'abc-' + Object.keys(newNotices).length;
          if (item.error) {
            newNotices[newKey] = getItemErrorNotice(item);
            items.notices = newNotices;
          } else {
            newNotices[newKey] = {
              type: 'success',
              code: 'GENERAL',
              message: __('Deleted successfully', 'atrc-prefix-atrc')
            };
            items.notices = newNotices;
          }
        });
        const dataWithoutError = action.data.filter(data => !data.error);
        items.items = items.items.filter(item1 => !dataWithoutError.some(item2 => item1.id === item2.id));
        items.isLoading = false;
        items.confirmDelete = {};
        break;
      }

    /* Add/Edit Item */
    case 'SET_ITEM':
      items.item = cloneDeep(action.item);
      items.original = action.item;
      break;
    case 'UPDATE_ITEM':
      {
        const newNotices = items.notices;
        const newKey = 'abc-' + Object.keys(newNotices).length;
        if (action.data.error) {
          newNotices[newKey] = getItemErrorNotice();
        } else {
          const updatedItem = items.items.find(item => item.id === action.data.id);
          if (updatedItem) {
            items.items = items.items.map(item => item.id === action.data.id ? action.data : item);
          } else {
            items.items = [...items.items, cloneDeep(action.data)];
          }
          items.item = cloneDeep(action.data);
          items.original = action.data;

          /* Set success notice */
          newNotices[newKey] = {
            type: 'success',
            code: 'GENERAL',
            message: sprintf(
            // translators: %s: item id
            __('The item with id %s is updated successfully', 'atrc-prefix-atrc'), items.item.id)
          };
        }
        items.notices = newNotices;
        items.isLoading = false;
        items.canSave = false;
        break;
      }
    case 'UPDATE_ITEMS':
      {
        const newNotices = items.notices;
        const newKey = 'abc-' + Object.keys(newNotices).length;
        if (action.data.error) {
          newNotices[newKey] = getItemErrorNotice();
          items.notices = newNotices;
        } else {
          items.isLoading = false;
          items.items = [...items.items, ...action.data];
        }
        items.isLoading = false;
        items.canSave = false;
        break;
      }
    case 'UPDATE_ITEM_DATAS':
      {
        items.items = action.data;
        if (isEqual(items.original, items.item)) {
          items.canSave = false;
        } else {
          items.canSave = true;
        }
        break;
      }
    case 'UPDATE_ITEM_DATA':
      {
        items.item[action.dataKey] = action.dataVal;
        if (isEqual(items.original, items.item)) {
          items.canSave = false;
        } else {
          items.canSave = true;
        }
        break;
      }

    /* Settings */
    case 'GET_SETTINGS':
      {
        items.canSave = false;
        items.isLoading = true;
        break;
      }
    case 'SET_SETTINGS':
      {
        const newNotices = items.notices;
        const newKey = 'abc-' + Object.keys(newNotices).length;
        if (action.data.error) {
          newNotices[newKey] = getItemErrorNotice();
          items.notices = newNotices;
        } else {
          items.original = action.data.settings;
          items.settings = cloneDeep(action.data.settings);
          if (action.setNotice) {
            /* Set success notice */
            newNotices[newKey] = {
              type: 'success',
              code: 'GENERAL',
              message: __('Updated successfully', 'atrc-prefix-atrc')
            };
            items.notices = newNotices;
          }
        }
        items.canSave = false;
        items.isLoading = false;
        break;
      }
    case 'UPDATE_SETTING':
      {
        items.settings[action.dataKey] = action.dataVal;
        if (isEqual(items.original, items.settings)) {
          items.canSave = false;
        } else {
          items.canSave = true;
        }
        break;
      }
  }
  newState[key] = items;
  return newState;
};
export default function AtrcRegisterStore(name) {
  const store = createReduxStore(name, {
    reducer,
    actions,
    controls,
    selectors,
    resolvers
  });
  return register(store);
}
//# sourceMappingURL=store.js.map