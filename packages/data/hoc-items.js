/*WordPress*/
import { withSelect, withDispatch, dispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

/* Library */
import { isObject } from 'lodash';
import { useLocation } from 'react-router-dom';

/* Internal */
import { AtrcGetQueryParams } from './utils';

/*Local*/

// This HOC takes a component as an argument and returns a new component
const withUrlChanged = (WrappedComponent) => {
	return (props) => {
		const [queryArgs, setQueryArgs] = useState(null);

		const {
			atrcStore = '',
			atrcStoreKey = '',
			refreshOnUrlChange = false,
		} = props;

		if (!refreshOnUrlChange) {
			return <WrappedComponent {...props} />;
		}

		let currentPath;
		try {
			// Attempt to use useLocation()
			const location = useLocation();
			currentPath = location.pathname;
		} catch (error) {
			console.error('Component is not inside a <Router>.', error);
			return <WrappedComponent {...props} />;
		}

		useEffect(() => {
			if (currentPath) {
				const newQueryArgs = AtrcGetQueryParams(atrcStoreKey);
				setQueryArgs(newQueryArgs);
				dispatch(atrcStore).setQueryArgs({
					key: atrcStoreKey,
					queryArgs: newQueryArgs,
					update: false,
				});
			}

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [currentPath]);

		/* queryArgs shoulbe be object either empty or not */
		if (null === queryArgs) {
			return null;
		}
		return <WrappedComponent {...props} />;
	};
};

// Creating the HOC using withSelect
const withSelectData = withSelect((select, ownProps) => {
	if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
		return null;
	}
	const {
		atrcStore = '',
		atrcStoreKey = '',
		hiddenQueryArgsData = {},
	} = ownProps;

	let queryArgs = AtrcGetQueryParams(atrcStoreKey);

	/* select called selectors */
	const itemsData = select(atrcStore).getData(
		atrcStoreKey,
		queryArgs,
		hiddenQueryArgsData,
		atrcStore
	);
	let isLoading = false;
	let canSave = false;
	let items = null;
	let countAllItems = null;
	let countQueryItems = null;
	let totalPages = null;
	let item = null;
	let selectedItems = null;
	let confirmDelete = null;

	let notices = [];
	let updateData = null;
	let extraData = null;

	if (itemsData && isObject(itemsData)) {
		({
			isLoading,
			canSave,
			queryArgs,
			items,
			countAllItems,
			countQueryItems,
			totalPages,
			item,
			selectedItems,
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
		countAllItems,
		countQueryItems,
		totalPages,
		item,
		selectedItems,
		confirmDelete,
		notices,
		updateData,
		extraData,
		getItem: (id) => select(atrcStore).getItem(atrcStoreKey, id, atrcStore),
	};
});

// Creating the HOC using withDispatch
// eslint-disable-next-line no-shadow
const withDispatchActions = withDispatch((dispatch, ownProps) => {
	if (!ownProps || !ownProps.atrcStore || !ownProps.atrcStoreKey) {
		return null;
	}
	const {
		atrcStore = '',
		atrcStoreKey = '',
		hiddenQueryArgsData = {},
	} = ownProps;

	/* dispatch called actions */
	return {
		setQueryArgs: (args = {}, update = true) =>
			dispatch(atrcStore).setQueryArgs({
				key: atrcStoreKey,
				queryArgs: args,
				update,
				hiddenQueryArgsData,
			}),
		toggleSelectAll: () =>
			dispatch(atrcStore).toggleSelectAll({ key: atrcStoreKey }),
		toggleSelect: (item) =>
			dispatch(atrcStore).toggleSelect({ key: atrcStoreKey, item }),
		setConfirmDelete: (data) =>
			dispatch(ownProps.atrcStore).setConfirmDelete({
				key: atrcStoreKey,
				data,
			}),
		deleteItems: (ids) =>
			dispatch(ownProps.atrcStore).deleteItems({ key: atrcStoreKey, ids }),
		updateItem: (item) =>
			dispatch(ownProps.atrcStore).updateItem({
				key: atrcStoreKey,
				data: item,
			}),
		insertItem: (item) =>
			dispatch(ownProps.atrcStore).insertItem({
				key: atrcStoreKey,
				data: item,
			}),
		setItem: (item) =>
			dispatch(ownProps.atrcStore).setItem({
				key: atrcStoreKey,
				data: item,
			}),
		updateItemData: (key, val) =>
			dispatch(ownProps.atrcStore).updateItemData({
				key: atrcStoreKey,
				dataKey: key,
				dataVal: val,
			}),
		setExtraData: (data) =>
			dispatch(ownProps.atrcStore).setExtraData({ key: atrcStoreKey, data }),
		setNotice: (notice) =>
			dispatch(ownProps.atrcStore).setNotice({ key: atrcStoreKey, notice }),
		setNotices: (notices) =>
			dispatch(ownProps.atrcStore).setNotice({ key: atrcStoreKey, notices }),
		removeNotice: (id) =>
			dispatch(ownProps.atrcStore).removeNotice({ key: atrcStoreKey, id }),
	};
});

// Combining both HOCs into a single HOC
const AtrcApplyWithItems = (WrappedComponent) => {
	const WithCombinedFunctionality = withUrlChanged(
		withSelectData(withDispatchActions(WrappedComponent))
	);
	return WithCombinedFunctionality;
};

export default AtrcApplyWithItems;
