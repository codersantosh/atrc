import React from 'react';

/*WordPress*/
import { withSelect, withDispatch } from '@wordpress/data';

/*Local*/
const AtrcApplyWithSettings = (WrappedComponent) => {
    return withSelect((select, ownProps) => {
        if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
            return null;
        }

        const { atrcStore = '', atrcStoreKey = '' } = ownProps;

        const settingsData = select(atrcStore).getSettings(atrcStoreKey);
        let isLoading = false;
        let canSave = false;
        let notices = [];
        let settings = null;
        if (settingsData && settingsData.settings) {
            ({ isLoading, canSave, notices, settings } = settingsData);
        }
        return { isLoading, canSave, notices, settings };
    })(
        withDispatch((dispatch, ownProps) => {
            if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
                return null;
            }
            const { atrcStore = '', atrcStoreKey = '' } = ownProps;
            return {
                saveSettings: (data) =>
                    dispatch(atrcStore).saveSettings({
                        key: atrcStoreKey,
                        data,
                        setNotice: true,
                    }),
                updateSetting: (key, val) =>
                    dispatch(atrcStore).updateSetting({
                        key: atrcStoreKey,
                        dataKey: key,
                        dataVal: val,
                    }),
                deleteSettings: (data = null) =>
                    dispatch(atrcStore).deleteSettings({ key: atrcStoreKey, data }),
                setNotice: (notice) =>
                    dispatch(atrcStore).setNotice({ key: atrcStoreKey, notice }),
                setNotices: (notices) =>
                    dispatch(atrcStore).setNotice({
                        key: atrcStoreKey,
                        notices,
                    }),
                removeNotice: (id) =>
                    dispatch(atrcStore).removeNotice({ key: atrcStoreKey, id }),
            };
        })(WrappedComponent)
    );
};

export default AtrcApplyWithSettings;
