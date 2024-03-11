import { AtrcVideo } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Atoms/AtrcVideo',
	component: AtrcVideo,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HTML5Video = {
	args: {
		variant: '',
		className: '',

		url: require('../assets/video/gutentor.mp4'),

		autoplay: false,
		controls: true,
		loop: false,
		muted: true,
	},
};
export const YouTubeVideo = {
	args: {
		variant: '',
		className: '',

		url: 'https://youtu.be/bGMi7L78hVk?si=5VGrSdy68anZV7Yt',

		autoplay: false,
		controls: true,
		loop: false,
		muted: true,
	},
};
