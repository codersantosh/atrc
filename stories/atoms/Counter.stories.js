/* WordPress */

/* Atrc */
import { AtrcCounter } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Atoms/AtrcCounter',
	component: AtrcCounter,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Counter = {
	args: {
		value: {
			frm: 10,
			to: 100,
		},
	},
};
