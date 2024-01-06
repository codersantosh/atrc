/** @type { import('@storybook/react').Preview } */
import './library/atomic-css/atomic.min.css';
import './library/atrc/index.css';
import './css/global.css';

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
