import { useEffect, useState } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';

import AtrcApis from './api';
import AtrcRegisterStore, { AtrcStore } from './store';

AtrcApis.baseUrl(
	'atrc-prefix-atrc-global',
	'http://localhost/atrc-prefix-atrc'
);
// AtrcApis.baseUrl('posts', 'http://localhost/atrc-prefix-atrc');
AtrcApis.register('posts', 'wp/v2/posts/');
// eslint-disable-next-line no-undef
AtrcApis.xWpNonce(AtomicBuilderGutenbergBlocksLocalize.nonce);
console.log(AtrcApis);
console.log(AtrcStore);
console.log(AtrcRegisterStore('atrc-prefix-atrc'));

function ExampleItems({ items, isLoading, totalPages, currentPage, getItems }) {
	// eslint-disable-next-line no-unused-vars
	const [page, setPage] = useState(currentPage || 1);
	/* const handlePageChange = (newPage) => {
		setPage(newPage);
		fetchItems(newPage);
	}; */
	useEffect(() => {
		console.log('1');
		getItems();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!items || !items.items) {
		return null;
	}
	return (
		<div>
			Hello
			<ul>
				{items.items.map((item) => (
					<li key={item.id}>{item.title.rendered}</li>
				))}
			</ul>
		</div>
	);
}

const applyWithSelect = withSelect((select) => {
	return {
		items: select('atrc-prefix-atrc').getItems('posts'),
		isLoading: select('atrc-prefix-atrc').getItemsIsLoading(
			'posts'
		),
		totalPages: select('atrc-prefix-atrc').getItemsTotalPages(
			'posts'
		),
	};
});

const applyWithDispatch = withDispatch((dispatch) => {
	return {
		getItems: (args = {}) => {
			console.log('2');
			// dispatch('atrc-prefix-atrc').getItems('posts', args);
		},
		setIsLoading: (isLoading) => {
			dispatch('atrc-prefix-atrc').setIsLoading(
				'posts',
				isLoading
			);
		},
		setError: (error) => {
			dispatch('atrc-prefix-atrc').setError('posts', error);
		},
	};
});

export default applyWithSelect(applyWithDispatch(ExampleItems));
