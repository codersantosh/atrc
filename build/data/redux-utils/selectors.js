/* Local */

// The selectors object includes a set of functions for accessing and deriving state values.
// the select function is used to access the current state or data from the store. The select function is typically a memoized selector, which means that it returns a cached result if the parameters passed to it are the same as the previous invocation.
export var selectors = {
  /**
   * return cached data, data have manythings items, item, selectedItems etc
   *
   * @param {Object} state - All state
   * @param {string} key   - current data key eg fonts, icons, posts, page etc
   * @return {Object} state of current key
   */
  getData: function getData(state, key) {
    if (!state || !state[key]) {
      return null;
    }
    return state[key];
  },
  /**
   * return cached data, data have manythings items, item, selectedItems etc
   *
   * @param {Object} state    - All state
   * @param {string} key      - current data key eg fonts, icons, posts, page etc
   * @param          queryKey
   * @return {Object} state of current key
   */
  getCachedData: function getCachedData(state, key, queryKey) {
    if (!state || !state[key] || !state[key][queryKey]) {
      return null;
    }
    return state[key][queryKey];
  },
  /**
   * return items of state of current data
   *
   * @param {Object} state - All state
   * @param {string} key   - current data key eg fonts, icons, posts, page etc
   * @return {Object} state of current key items
   */
  getItems: function getItems(state, key) {
    if (!state || !state[key] || !state[key].items) {
      return null;
    }
    return state[key].items;
  },
  /**
   * return item of state
   *
   * @param {Object} state - All state
   * @param {string} key   - current data key eg fonts, icons, posts, page etc
   * @return {Object} state of current key item
   */
  getItem: function getItem(state, key) {
    if (!state || !state[key] || !state[key].item) {
      return null;
    }
    return state[key].item;
  },
  /**
   * return settings
   *
   * @param {Object} state - All state
   * @param {string} key   - current data key, mostly 'settings' or local storage data key
   * @return {Object} state of current key item
   */
  getSettings: function getSettings(state, key) {
    if (!state) {
      return null;
    }
    if (state[key]) {
      return state[key];
    }
    return null;
  }
};
//# sourceMappingURL=selectors.js.map