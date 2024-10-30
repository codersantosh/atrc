function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
export var AtrcRemoveQueryFromUrl = function AtrcRemoveQueryFromUrl(_ref) {
  var _ref$currentUrl = _ref.currentUrl,
    currentUrl = _ref$currentUrl === void 0 ? '' : _ref$currentUrl;
  if (!currentUrl) {
    currentUrl = window.location.href;
  }

  // Check if there are query parameters
  if (window.location.search.length > 0) {
    // Remove query parameters by replacing the URL
    var newUrl = currentUrl.split('?')[0];
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
export var AtrcRemoveUrlArg = function AtrcRemoveUrlArg(url, urlKey) {
  // Escape special characters in the key for creating a regular expression
  var escapedKey = urlKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create a regular expression to match the key at the end of the URL path
  var regex = new RegExp("\\/".concat(escapedKey, "(\\/\\d*)?$"), 'g');

  // Use the regular expression to remove the key and its value from the URL
  var newUrl = url.replace(regex, '');
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
export var AtrcAddUrlArg = function AtrcAddUrlArg(url, urlKey, urlVal) {
  // Encode the key and value to ensure proper URL formatting
  var encodedKey = encodeURIComponent(urlKey);
  var encodedVal = encodeURIComponent(urlVal);

  // Check if the key already exists in the URL
  var keyExists = url.includes("/".concat(encodedKey, "/"));

  // Create the new URL with the added or updated path segment
  var newUrl;
  if (keyExists) {
    // If the key exists, update the existing value
    var regex = new RegExp("(".concat(encodedKey, "/)[^/]*"));
    newUrl = url.replace(regex, "$1".concat(encodedVal));
  } else {
    // If the key doesn't exist, append the new path segment
    var separator = url.endsWith('/') ? '' : '/';
    newUrl = "".concat(url).concat(separator).concat(encodedKey, "/").concat(encodedVal);
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
export var AtrcRemoveLeadingSlash = function AtrcRemoveLeadingSlash(str) {
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
export var AtrcRemoveTrailingSlash = function AtrcRemoveTrailingSlash(str) {
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
export var AtrcGetUrlArgValue = function AtrcGetUrlArgValue(path, key) {
  if (!key || !path) {
    return '';
  }

  // Remove leading and trailing slashes
  var _path = AtrcRemoveLeadingSlash(AtrcRemoveTrailingSlash(path));

  // Split the path into parts
  var parts = _path.split('/');

  // Find the key section, if it exists. The next part of the URL is the value.
  var index = parts.indexOf(key);
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
  var newObject = cloneDeep(obj);
  for (var key in newObject) {
    // Check if the value is empty (empty string, null, or undefined)
    if (newObject[key] === '' || newObject[key] === null || newObject[key] === undefined) {
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
  var currentUrl = window.location.href;

  // Remove existing query parameters from the URL
  var newUrl = '';
  if (window.location.hash) {
    if (window.location.hash.indexOf('?') !== -1) {
      var newHash = window.location.hash.split('?')[0];
      newUrl = currentUrl.replace(window.location.hash, newHash);
    }
  } else {
    newUrl = AtrcRemoveQueryFromUrl({
      currentUrl: currentUrl
    });
  }
  var search;

  // Determine the search part of the URL based on the presence of a hash
  if (location.hash) {
    search = location.hash.indexOf('?') === -1 ? '' : location.hash.substring(location.hash.indexOf('?') + 1);
  } else {
    var _location = location;
    search = _location.search;
  }

  // Parse the search parameters
  var params = new URLSearchParams(search);

  // Extract allowed and specified query parameters from the registred store.
  var _AtrcStore$DEFAULT_ST = AtrcStore.DEFAULT_STATE[key],
    allowedParams = _AtrcStore$DEFAULT_ST.allowedParams,
    queryParams = _AtrcStore$DEFAULT_ST.queryParams;
  var defaultQueryArgs = AtrcStore.CACHE_STATE[key].queryArgs;
  var allowedParamsObject = {};
  if (allowedParams) {
    allowedParams.forEach(function (param) {
      if (params.has(param)) {
        allowedParamsObject[param] = params.getAll(param)[1] || params.get(param);
      }
    });
  }

  // Process queryParams with type 'url' and update newUrl accordingly
  if (queryParams) {
    map(queryParams, function (pVal, pKey) {
      if (pVal && pVal.type === 'url') {
        var newParamVal = AtrcGetUrlArgValue(newUrl, pKey);
        if (newParamVal) {
          allowedParamsObject[pKey] = newParamVal;
        }
        newUrl = AtrcRemoveUrlArg(newUrl, pKey);
      }
    });
  }
  var queryArgs = _objectSpread(_objectSpread({}, defaultQueryArgs), allowedParamsObject);
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
export function AtrcGetandSetQueryParams(key) {
  var updateParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Get the current URL
  var currentUrl = window.location.href;

  // Remove existing query parameters from the URL
  var newUrl = '';
  if (window.location.hash) {
    if (window.location.hash.indexOf('?') !== -1) {
      var newHash = window.location.hash.split('?')[0];
      newUrl = currentUrl.replace(window.location.hash, newHash);
    } else {
      newUrl = currentUrl;
    }
  } else {
    newUrl = AtrcRemoveQueryFromUrl({
      currentUrl: currentUrl
    });
  }
  var search;

  // Determine the search part of the URL based on the presence of a hash
  if (location.hash) {
    search = location.hash.indexOf('?') === -1 ? '' : location.hash.substring(location.hash.indexOf('?') + 1);
  } else {
    var _location2 = location;
    search = _location2.search;
  }

  // Parse the search parameters
  var params = new URLSearchParams(search);

  // Extract allowed and specified query parameters from the registred store.
  var _AtrcStore$DEFAULT_ST2 = AtrcStore.DEFAULT_STATE[key],
    allowedParams = _AtrcStore$DEFAULT_ST2.allowedParams,
    queryParams = _AtrcStore$DEFAULT_ST2.queryParams;
  var defaultQueryArgs = AtrcStore.CACHE_STATE[key].queryArgs;
  var allowedParamsObject = {};
  if (allowedParams) {
    allowedParams.forEach(function (param) {
      if (params.has(param)) {
        allowedParamsObject[param] = params.getAll(param)[1] || params.get(param);
      }
    });
  }

  // Process queryParams with type 'url' and update newUrl accordingly
  if (queryParams) {
    map(queryParams, function (pVal, pKey) {
      if (pVal && pVal.type === 'url') {
        var newParamVal = AtrcGetUrlArgValue(newUrl, pKey);
        if (newParamVal) {
          allowedParamsObject[pKey] = newParamVal;
        }
        newUrl = AtrcRemoveUrlArg(newUrl, pKey);
      }
    });
  }

  // Merge allowedParamsObject with updateParams
  var mergeArgs = _objectSpread(_objectSpread(_objectSpread({}, defaultQueryArgs), allowedParamsObject), updateParams);

  // Filter out key-value pairs with null values
  var queryArgs = Object.fromEntries(Object.entries(mergeArgs).filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return value !== null;
  }));

  // Process queryParams with type 'url' and update newUrl accordingly
  if (queryArgs) {
    map(queryArgs, function (pVal, param) {
      if (queryParams && queryParams.hasOwnProperty(param) && queryParams[param].type === 'url') {
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
          if (!(queryParams && queryParams.hasOwnProperty(param) && queryParams[param].type === 'url')) {
            params.set(param, queryArgs[param]);
          }
        } else {
          params.delete(param);
        }
      } else {
        params.delete(param);
      }
    });
    newUrl = newUrl.replace(newUrl, "".concat(newUrl));
    if (params.toString()) {
      newUrl = "".concat(newUrl, "?").concat(params.toString());
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
  var parts = {
    queryKey: 'atrcQueryKey',
    page: 1,
    perPage: 10,
    fields: null,
    include: null
  };
  if (!query) {
    return parts;
  }
  query = AtrcRemoveObjectEmptyValues(query);

  // Ensure stable key by sorting keys. Also more efficient for iterating.
  var keys = Object.keys(query).sort();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = query[key];
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
        parts.queryKey += (parts.queryKey ? '&' : 'atrcQueryKey-') + addQueryArgs('', _defineProperty({}, key, value)).slice(1);
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
  for (var key in obj) {
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
//# sourceMappingURL=utils.js.map