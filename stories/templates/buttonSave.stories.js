/* Inbuilt */
import { AtrcButtonSaveTemplate1 } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/ButtonSave',
	parameters: {
		layout: 'centered',
	},
};

/* Template 1 Is Loading*/
export const Template1IsLoading = () => {
	return (
		<AtrcButtonSaveTemplate1
			isLoading={true}
			canSave={false}
		/>
	);
};

/* Template 1 Allow Save*/
export const Template1AllowSave = () => {
	return (
		<AtrcButtonSaveTemplate1
			isLoading={false}
			canSave={true}
		/>
	);
};

/* Template 1 Allow Save*/
export const Template1DisAllowSave = () => {
	return (
		<AtrcButtonSaveTemplate1
			isLoading={false}
			canSave={false}
		/>
	);
};
