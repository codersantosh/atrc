import React from 'react';

/**
 * Get settings from local storage or a cookie based on the provided key.
 *
 * @param {string} localStorageKey - The key used to retrieve the settings.
 * @return {Object} An object containing the retrieved settings.
 *
 * Example:
 *
 * // Given localStorageKey: 'userSettings'
 * const settingsData = AtrcDataLocalStorageGetSettings('userSettings');
 * console.log(settingsData);
 * // Output: { settings: { /* Retrieved settings object /* } }
 */
export var AtrcDataLocalStorageGetSettings = function AtrcDataLocalStorageGetSettings(localStorageKey) {
  var data = null;

  // Check if localStorage is available in the current environment
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Try to get the settings from local storage
    data = localStorage.getItem(localStorageKey);
  } else {
    // If local storage is not available, try to get the settings from a cookie
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var cookieName = cookie.substring(0, cookie.indexOf('='));
      var cookieValue = cookie.substring(cookie.indexOf('=') + 1);
      if (cookieName.trim() === localStorageKey) {
        data = cookieValue;
        break;
      }
    }
  }
  try {
    // Try to parse the retrieved data as JSON
    return {
      settings: JSON.parse(data)
    };
  } catch (err) {
    // If parsing fails, return the data as is
    return {
      settings: data
    };
  }
};

/**
 * Save settings to local storage or a cookie based on the provided key.
 *
 * @param {string} localStorageKey - The key used to save the settings.
 * @param {Object} data            - The settings data to be saved.
 * @param {number} expires         - Number of days until the data expires (default: 365 days).
 * @return {Object} An object containing the saved settings.
 *
 * Example:
 *
 * // Given localStorageKey: 'userSettings', data: { theme: 'dark', language: 'en' }
 * const savedSettings = AtrcDataLocalStorageSaveSettings('userSettings', { theme: 'dark', language: 'en' });
 * console.log(savedSettings);
 * // Output: { settings: { theme: 'dark', language: 'en' } }
 */
export var AtrcDataLocalStorageSaveSettings = function AtrcDataLocalStorageSaveSettings(localStorageKey, data) {
  var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
  var stringifiedData = JSON.stringify(data);

  // If the data is empty, remove the settings
  if (!stringifiedData) {
    return AtrcDataLocalStorageRemoveSettings(localStorageKey);
  } else if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Try to save the settings to local storage
    localStorage.setItem(localStorageKey, stringifiedData);
  } else {
    // If local storage is not available, try to save the settings to a cookie
    var date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); // expire after the specified number of days
    var expiresStr = '; expires=' + date.toUTCString();
    document.cookie = localStorageKey + '=' + stringifiedData + expiresStr + '; path=/';
  }

  // Retrieve and return the saved settings
  return AtrcDataLocalStorageGetSettings(localStorageKey);
};

/**
 * Remove settings from local storage or a cookie based on the provided key.
 *
 * @param {string} key - The key used to remove the settings.
 * @return {Object} An empty object indicating that the settings have been removed.
 *
 * Example:
 *
 * // Given key: 'userSettings'
 * const removedSettings = AtrcDataLocalStorageRemoveSettings('userSettings');
 * console.log(removedSettings);
 * // Output: {}
 */
var AtrcDataLocalStorageRemoveSettings = function AtrcDataLocalStorageRemoveSettings(key) {
  // Check if localStorage is available in the current environment
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    // Remove the settings from local storage
    localStorage.removeItem(key);
  } else {
    // If local storage is not available, remove the settings from a cookie
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var expires = '; expires=' + date.toUTCString();
    document.cookie = key + '=' + '' + expires + '; path=/';
  }

  // Return an empty object indicating that the settings have been removed
  return {};
};
//# sourceMappingURL=local-storage.js.map