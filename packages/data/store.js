/*WordPress*/
import { createReduxStore, register } from '@wordpress/data';

/* Internal */
import { actions } from './redux-utils/actions';
import { reducer } from './redux-utils/reducer';
import { controls } from './redux-utils/controls';
import { selectors } from './redux-utils/selectors';
import { resolvers } from './redux-utils/resolvers';

/* Local */
class ClassAtrcStore {
	constructor() {
		if (!ClassAtrcStore.instance) {
			ClassAtrcStore.instance = this;
			this.DEFAULT_STATE = {};
			this.CACHE_STATE = {};
			this.TYPES = {};
		}
		return ClassAtrcStore.instance;
	}

	register(store) {
		this.addDefaults(
			store.key,
			store.type,
			store.queryArgs,
			store.allowedParams,
			store.queryParams
		);
	}

	/* @param {string}        key          key data type eg: item, page, custom type, custom table etc */
	addDefaults(key, type = '', queryArgs, allowedParams, queryParams) {
		this.TYPES[key] = type;

		if ('settings' === type || 'localStorage' === type) {
			// Register all methods for the key and path
			this.DEFAULT_STATE[key] = {
				isLoading: true,
				canSave: false,
				original: {} /* store original settings */,
				settings: {} /* store state like settings */,
				notices: [],
				extraData: null,
				type,
			};
		} else {
			// Register all methods for the key and path
			this.DEFAULT_STATE[key] = {
				isLoading: true,
				canSave: false,
				allowedParams: [
					'page',
					'per_page',
					'order',
					'orderby',
					'search',
					'author',
					'author_exclude',
				] /* allowed on query params */,
				selectedItems: [], // selected item data
				item: {}, // like a state to  update data
				original: {}, // a selected item data
				confirmDelete: {
					ids: [],
					open: false,
				},
				notices: [],
				extraData: null, // store extra data object
				currentCache: null, // store extra data object,
			};
			this.CACHE_STATE[key] = {
				queryArgs: {},
				// {
				// 	context: 'edit',
				// 	page: 1,
				// 	per_page: 10,
				// 	order: 'desc',
				// 	orderby: 'created',
				// 	search: null,
				// 	author: null,
				// 	author_exclude: null,
				// 	/* add others from queryArgs when registered*/
				// }
				items: [], //lists of items
				countAllItems: null,
				countQueryItems: null,
				totalPages: null,
				notices: [],
				extraData: null, // store extra data object
			};
		}
		if (queryArgs) {
			this.CACHE_STATE[key].queryArgs = queryArgs;
		}
		if (allowedParams) {
			this.DEFAULT_STATE[key].allowedParams = allowedParams;
		}
		/* param type if url, param is present in url eg page/2, category/tech */
		if (queryParams) {
			this.DEFAULT_STATE[key].queryParams = queryParams;
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

export const AtrcStore = new ClassAtrcStore();

export default function AtrcRegisterStore(name) {
	const store = createReduxStore(name, {
		reducer,
		actions,
		controls,
		selectors,
		resolvers,
	});
	register(store);
	return store;
}
