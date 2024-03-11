/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: [
		'../stories/**/*.stories.@(js|ts)',
		'../stories/**/**/*.stories.@(js|ts)',
	],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: 'automatic',
				},
			},
		},
	}),
	docs: {
		autodocs: 'tag',
	},
};

export default config;
