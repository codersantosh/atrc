/* Library */

/* Inbuilt */
import { AtrcTd, AtrcTr, AtrcTable } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Molecules/AtrcTable',
	component: AtrcTable,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultTable = () => {
	return (
		<AtrcTable
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

export const TableBordered = () => {
	return (
		<AtrcTable
			isBordered={true}
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
export const TableRounded = () => {
	return (
		<AtrcTable
			style={{
				'--at-bg-cl': '#d9d5d5',
			}}
			className='at-bg-cl'
			isRounded={true}
			tHeadProps={{
				style: {
					'--at-bg-cl': 'none',
				},
			}}
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

export const TableTrSticky = () => {
	return (
		<AtrcTable
			tHeadLabels={['Column 1', 'Column 2', 'Column 3']}
			renderTbody={
				<>
					<AtrcTr
						isSticky
						isEven>
						<AtrcTd>Data 1</AtrcTd>
						<AtrcTd>Data 2</AtrcTd>
						<AtrcTd>Data 3</AtrcTd>
					</AtrcTr>
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

export const TableTrLocked = () => {
	return (
		<>
			<AtrcTable
				tHeadLabels={['Column 1', 'Column 2', 'Column 3']}
				renderTbody={
					<>
						<AtrcTr
							isLocked
							isEven>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
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
		</>
	);
};

export const TableTrOdd = () => {
	return (
		<>
			<AtrcTable
				tHeadLabels={['Column 1', 'Column 2', 'Column 3']}
				renderTbody={
					<>
						<AtrcTr isOdd>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isOdd>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isOdd>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isOdd>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isOdd>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
					</>
				}
			/>
		</>
	);
};

export const TableTrEven = () => {
	return (
		<>
			<AtrcTable
				tHeadLabels={['Column 1', 'Column 2', 'Column 3']}
				renderTbody={
					<>
						<AtrcTr isEven>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isEven>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isEven>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isEven>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
						<AtrcTr isEven>
							<AtrcTd>Data 1</AtrcTd>
							<AtrcTd>Data 2</AtrcTd>
							<AtrcTd>Data 3</AtrcTd>
						</AtrcTr>
					</>
				}
			/>
		</>
	);
};
