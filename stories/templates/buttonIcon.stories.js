/* Inbuilt */
import { AtrcButtonIconTemplate1 } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/ButtonIcon',
	parameters: {
		layout: 'centered',
	},
};

/* Template 1 */
export const Template1 = () => {
	return (
		<AtrcButtonIconTemplate1
			iconProps={{
				type: 'svg',
				svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>',
			}}
			text='Close'
			variant='danger'
			className='at-btn-close at-flx at-al-itm-ctr'
		/>
	);
};
