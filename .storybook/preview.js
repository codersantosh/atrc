/* WordPress */
import { __ } from '@wordpress/i18n';

/* Atrc */
import AtrcButton from '../packages/atoms/button';

/** @type { import('@storybook/react').Preview } */
import './library/wp-components/style.css';
import '../../../atomic-css/css/atomic.css';
import '../build/index.css';
import './css/global.css';

export const decorators = [
	(Story) => {
		return (
			<>
				<AtrcButton
					onClick={() => {
						const body = document.documentElement;
						const currentTheme = body.getAttribute('data-at-theme');

						if (currentTheme === 'dark') {
							body.removeAttribute('data-at-theme');
						} else {
							body.setAttribute('data-at-theme', 'dark');
						}
					}}
					style={{
						position: 'fixed',
						top: 0,
						right: 0,
					}}>
					{__('Toggle theme', 'atrc-prefix-atrc')}
				</AtrcButton>
				<Story />
			</>
		);
	},
];
