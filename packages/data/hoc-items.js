/*WordPress*/
import { withSelect, withDispatch } from '@wordpress/data';

/*Local*/
const AtrcApplyWithItems = (WrappedComponent) => {
	return withSelect((select, ownProps) => {
		if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
			return null;
		}
		const { atrcStore = '', atrcStoreKey = '' } = ownProps;

		const itemsData = select(atrcStore).getItems(atrcStoreKey);
		let isLoading = false;
		let canSave = false;
		let queryArgs = {};
		let items = null;
		let countAllItem = null;
		let countQueryItems = null;
		let totalPages = null;
		let item = null;
		let selectItems = null;
		let confirmDelete = null;

		let notices = [];
		let updateData = null;
		let extraData = null;

		if (itemsData && itemsData.items) {
			({
				isLoading,
				canSave,
				queryArgs,
				items,
				countAllItem,
				countQueryItems,
				totalPages,
				item,
				selectItems,
				confirmDelete,
				notices,
				updateData,
				extraData,
			} = itemsData);
		}
		return {
			isLoading,
			canSave,
			queryArgs,
			items,
			countAllItem,
			countQueryItems,
			totalPages,
			item,
			selectItems,
			confirmDelete,
			notices,
			updateData,
			extraData,
			getItem: (id) => select(atrcStore).getItem(atrcStoreKey, id),
		};
	})(
		withDispatch((dispatch, ownProps) => {
			if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
				return null;
			}
			const { atrcStore = '', atrcStoreKey = '' } = ownProps;

			return {
				setQueryArgs: (args) =>
					dispatch(atrcStore).setQueryArgs(atrcStoreKey, args),
				toggleSelectAll: () =>
					dispatch(atrcStore).toggleSelectAll(atrcStoreKey),
				toggleSelect: (item) =>
					dispatch(atrcStore).toggleSelect(atrcStoreKey, item),
				setConfirmDelete: (val) =>
					dispatch(ownProps.atrcStore).setConfirmDelete(atrcStoreKey, val),
				deleteItems: (ids) =>
					dispatch(ownProps.atrcStore).deleteItems(atrcStoreKey, ids),
				updateItem: (item) =>
					dispatch(ownProps.atrcStore).updateItem(atrcStoreKey, item),
				insertItem: (item) =>
					dispatch(ownProps.atrcStore).insertItem(atrcStoreKey, item),
				setItem: (item) =>
					dispatch(ownProps.atrcStore).setItem(atrcStoreKey, item),
				updateItemData: (key, val) =>
					dispatch(ownProps.atrcStore).updateItemData(atrcStoreKey, key, val),
				setExtraData: (data) =>
					dispatch(ownProps.atrcStore).setExtraData(atrcStoreKey, data),
				setNotice: (notice) =>
					dispatch(ownProps.atrcStore).setNotice(atrcStoreKey, notice),
				removeNotice: (id) =>
					dispatch(ownProps.atrcStore).removeNotice(atrcStoreKey, id),
			};
		})(WrappedComponent)
	);
};

export default AtrcApplyWithItems;
