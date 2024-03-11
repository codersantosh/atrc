import { AtrcButton, AtrcButtonGroup, AtrcIcon } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Molecules/AtrcButtonGroup',
	component: AtrcButtonGroup,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonGroup = {
	args: {
		children: (
			<>
				<AtrcButton>Primary Button</AtrcButton>
				<AtrcButton variant='secondary'>Secondary Button</AtrcButton>
				<AtrcButton variant='success'>Success Button</AtrcButton>
				<AtrcButton variant='danger'>Danger Button</AtrcButton>
				<AtrcButton variant='warning'>Warning Button</AtrcButton>
				<AtrcButton variant='info'>Info Button</AtrcButton>
				<AtrcButton variant='light'>Light Button</AtrcButton>
				<AtrcButton variant='dark'>Dark Button</AtrcButton>
				<AtrcButton variant='link'>Link Button</AtrcButton>
			</>
		),
	},
};
export const ButtonGroupButtonIcon = {
	args: {
		children: (
			<>
				<AtrcButton hasIcon={true}>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Primary Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='secondary'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Secondary Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='success'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Success Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='danger'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Danger Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='warning'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Warning Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='info'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Info Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='light'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Light Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='dark'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Dark Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='link'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Link Icon Button
				</AtrcButton>
			</>
		),
	},
};
export const ButtonGroupOutlineIcon = {
	args: {
		children: (
			<>
				<AtrcButton
					hasIcon={true}
					variant='outline-primary'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Primary Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-secondary'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Secondary Outline Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-success'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Success Outline Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-danger'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Danger Outline Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-warning'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Warning Outline Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-info'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Info Outline Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-light'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Light Outline Icon Button
				</AtrcButton>
				<AtrcButton
					hasIcon={true}
					variant='outline-dark'>
					<AtrcIcon
						type='svg'
						svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
					/>
					Dark Outline Icon Button
				</AtrcButton>
			</>
		),
	},
};
