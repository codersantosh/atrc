import { withStorage } from '@wordpress/data';
var store = createReduxStore('my-forum', {
  reducer: reducer,
  actions: actions,
  selectors: selectors,
  controls: controls,
  middleware: middleware
});
var persistedStore = withStorage(store, {
  storage: window.localStorage,
  storageKey: 'my-forum-state'
});
register(persistedStore);
//# sourceMappingURL=store-with-persistence.js.map