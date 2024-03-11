/* Inbuilt */
import { AtrcTitleTemplate1, AtrcTitleTemplate2 } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/Title',
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/* Template 1 */
export const Template1 = () => {
	return <AtrcTitleTemplate1 title='Close' />;
};

/* Template 1 */
export const Template2 = () => {
	return <AtrcTitleTemplate2 title='Close' />;
};
