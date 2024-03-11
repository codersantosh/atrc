/* WordPress */

/* Atrc */
import { AtrcProgress } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Atoms/AtrcProgress',
	component: AtrcProgress,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProgressBar = {
	args: {
		variant: '',
		barColor: 'red',
	},
};

export const ProgressCircular = {
	args: {
		type: 'cir',
		barColor: 'red',
	},
};
