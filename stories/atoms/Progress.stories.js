/* WordPress */

/* Atrc */
import { AtrcProgress } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Atoms/AtrcProgress',
	component: AtrcProgress,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProgressHorizontal = {
	args: {
		variant: '',
	},
};
export const ProgressHorizontalStriped = {
	args: {
		variant: '',
		hasStriped: true,
	},
};
export const ProgressHorizontalStripedAnimated = {
	args: {
		variant: '',
		hasStriped: true,
		hasAnimation: true,
	},
};

export const ProgressCircular = {
	args: {
		type: 'cir',
		barColor: '#000',
	},
};
export const ProgressCircularGradient = {
	args: {
		type: 'cir',
		uniqueId: 'gradient',
		barColor:
			'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) 10%, rgba(0,0,255,1) 100%)',
	},
};
