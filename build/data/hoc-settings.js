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
        return dispatch(atrcStore).saveSettings(atrcStoreKey, data, true);
      },
      updateSetting: function updateSetting(key, val) {
        return dispatch(atrcStore).updateSetting(atrcStoreKey, key, val);
      },
      setNotice: function setNotice(notice) {
        return dispatch(ownProps.atrcStore).setNotice(atrcStoreKey, notice);
      },
      removeNotice: function removeNotice(id) {
        return dispatch(ownProps.atrcStore).removeNotice(atrcStoreKey, id);
      }
    };
  })(WrappedComponent));
};
export default AtrcApplyWithSettings;
//# sourceMappingURL=hoc-settings.js.map