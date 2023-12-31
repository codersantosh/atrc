/*WordPress*/
import { withSelect, withDispatch } from '@wordpress/data';

/*Local*/
const AtrcApplyWithSettings = WrappedComponent => {
  return withSelect((select, ownProps) => {
    if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
      return null;
    }
    const {
      atrcStore = '',
      atrcStoreKey = ''
    } = ownProps;
    const settingsData = select(atrcStore).getSettings(atrcStoreKey);
    let isLoading = false;
    let canSave = false;
    let notices = [];
    let settings = null;
    if (settingsData && settingsData.settings) {
      ({
        isLoading,
        canSave,
        notices,
        settings
      } = settingsData);
    }
    return {
      isLoading,
      canSave,
      notices,
      settings
    };
  })(withDispatch((dispatch, ownProps) => {
    if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
      return null;
    }
    const {
      atrcStore = '',
      atrcStoreKey = ''
    } = ownProps;
    return {
      saveSettings: data => dispatch(atrcStore).saveSettings(atrcStoreKey, data, true),
      updateSetting: (key, val) => dispatch(atrcStore).updateSetting(atrcStoreKey, key, val),
      setNotice: notice => dispatch(ownProps.atrcStore).setNotice(atrcStoreKey, notice),
      removeNotice: id => dispatch(ownProps.atrcStore).removeNotice(atrcStoreKey, id)
    };
  })(WrappedComponent));
};
export default AtrcApplyWithSettings;
//# sourceMappingURL=hoc-settings.js.map