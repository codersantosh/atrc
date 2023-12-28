import { withStorage } from '@wordpress/data';

const store = createReduxStore('my-forum', {
	reducer,
	actions,
	selectors,
	controls,
	middleware,
});

const persistedStore = withStorage(store, {
	storage: window.localStorage,
	storageKey: 'my-forum-state',
});

register(persistedStore);
