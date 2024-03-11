/* Inbuilt */
import {
	AtrcListTableTemplate1,
	AtrcListTableTemplate2,
	AtrcTd,
	AtrcTr,
} from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/ListTable',
	component: AtrcListTableTemplate1,
	parameters: {
		layout: 'centered',
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Template1 = {
	args: {
		tHeadLabels: ['Column 1', 'Column 2', 'Column 3'],
		renderTbody: (
			<>
				<AtrcTr>
					<AtrcTd>Data 1</AtrcTd>
					<AtrcTd>Data 2</AtrcTd>
					<AtrcTd>Data 3</AtrcTd>
				</AtrcTr>
				<AtrcTr>
					<AtrcTd>Data 1</AtrcTd>
					<AtrcTd>Data 2</AtrcTd>
					<AtrcTd>Data 3</AtrcTd>
				</AtrcTr>
			</>
		),
	},
};

export const Template2 = () => {
	return (
		<AtrcListTableTemplate2
			tHeadLabels={['Column 1', 'Column 2', 'Column 3']}
			renderTbody={
				<>
					<AtrcTr>
						<AtrcTd>Data 1</AtrcTd>
						<AtrcTd>Data 2</AtrcTd>
						<AtrcTd>Data 3</AtrcTd>
					</AtrcTr>
					<AtrcTr>
						<AtrcTd>Data 1</AtrcTd>
						<AtrcTd>Data 2</AtrcTd>
						<AtrcTd>Data 3</AtrcTd>
					</AtrcTr>
				</>
			}
		/>
	);
};
