/* Inbuilt */
import { AtrcFileTreeTemplate1 } from '../../packages';

const exampleFilePaths = {
	0: {
		name: 'theme.json',
		url: '#',
	},
	assets: {
		fonts: [
			{
				name: 'roboto_italic_100.ttf',
				url: '#',
			},
			{
				name: 'roboto_italic_300.ttf',
				url: '#',
			},
		],
	},
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/FileTree',
	parameters: {
		layout: 'centered',
	},
};

/* Template 1 */
export const Template1 = () => {
	return <AtrcFileTreeTemplate1 value={exampleFilePaths} />;
};
