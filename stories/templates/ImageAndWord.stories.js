/* Inbuilt */
import { AtrcImgAndTextTemplate1 } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/ImgAndWord',
	component: AtrcImgAndTextTemplate1,
	parameters: {
		layout: 'centered',
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Template1 = {
	args: {
		imgProps: {
			src: 'https://www.cosmoswp.com/wp-content/uploads/2019/11/starter-sites-1.png',
		},
		wordProps: {
			children: 'Hello World!',
		},
	},
};
