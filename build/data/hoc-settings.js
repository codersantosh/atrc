import React from 'react';

/*WordPress*/
import { withSelect, withDispatch } from '@wordpress/data';

/*Local*/
var AtrcApplyWithSettings = function AtrcApplyWithSettings(WrappedComponent) {
  return withSelect(function (select, ownProps) {
    if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
      return null;
    }
    var _ownProps$atrcStore = ownProps.atrcStore,
      atrcStore = _ownProps$atrcStore === void 0 ? '' : _ownProps$atrcStore,
      _ownProps$atrcStoreKe = ownProps.atrcStoreKey,
      atrcStoreKey = _ownProps$atrcStoreKe === void 0 ? '' : _ownProps$atrcStoreKe;
    var settingsData = select(atrcStore).getSettings(atrcStoreKey);
    var isLoading = false;
    var canSave = false;
    var notices = [];
    var settings = null;
    if (settingsData && settingsData.settings) {
      isLoading = settingsData.isLoading;
      canSave = settingsData.canSave;
      notices = settingsData.notices;
      settings = settingsData.settings;
    }
    return {
      isLoading: isLoading,
      canSave: canSave,
      notices: notices,
      settings: settings
    };
  })(withDispatch(function (dispatch, ownProps) {
    if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
      return null;
    }
    var _ownProps$atrcStore2 = ownProps.atrcStore,
      atrcStore = _ownProps$atrcStore2 === void 0 ? '' : _ownProps$atrcStore2,
      _ownProps$atrcStoreKe2 = ownProps.atrcStoreKey,
      atrcStoreKey = _ownProps$atrcStoreKe2 === void 0 ? '' : _ownProps$atrcStoreKe2;
    return {
      saveSettings: function saveSettings(data) {
        return dispatch(atrcStore).saveSettings({
          key: atrcStoreKey,
          data: data,
          setNotice: true
        });
      },
      updateSetting: function updateSetting(key, val) {
        return dispatch(atrcStore).updateSetting({
          key: atrcStoreKey,
          dataKey: key,
          dataVal: val
        });
      },
      deleteSettings: function deleteSettings() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return dispatch(atrcStore).deleteSettings({
          key: atrcStoreKey,
          data: data
        });
      },
      setNotice: function setNotice(notice) {
        return dispatch(atrcStore).setNotice({
          key: atrcStoreKey,
          notice: notice
        });
      },
      setNotices: function setNotices(notices) {
        return dispatch(atrcStore).setNotice({
          key: atrcStoreKey,
          notices: notices
        });
      },
      removeNotice: function removeNotice(id) {
        return dispatch(atrcStore).removeNotice({
          key: atrcStoreKey,
          id: id
        });
      }
    };
  })(WrappedComponent));
};
export default AtrcApplyWithSettings;
//# sourceMappingURL=hoc-settings.js.map