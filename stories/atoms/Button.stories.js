import { AtrcButton, AtrcIcon } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Atoms/AtrcButton',
	component: AtrcButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		text: 'Primary Button',
	},
};

export const Secondary = {
	args: {
		variant: 'secondary',
		text: 'Secondary Button',
	},
};
export const Success = {
	args: {
		variant: 'success',
		text: 'Success Button',
	},
};
export const Danger = {
	args: {
		variant: 'danger',
		text: 'Danger Button',
	},
};
export const Warning = {
	args: {
		variant: 'warning',
		text: 'Warning Button',
	},
};
export const Info = {
	args: {
		variant: 'info',
		text: 'Info Button',
	},
};
export const Light = {
	args: {
		variant: 'light',
		text: 'Light Button',
	},
};
export const Dark = {
	args: {
		variant: 'dark',
		text: 'Dark Button',
	},
};
export const Link = {
	args: {
		variant: 'link',
		text: 'Link Button',
	},
};
export const OutlinePrimary = {
	args: {
		variant: 'outline-primary',
		text: 'Primary Outline Button',
	},
};
export const OutlineSecondary = {
	args: {
		variant: 'outline-secondary',
		text: 'Secondary Outline Button',
	},
};
export const OutlineSuccess = {
	args: {
		variant: 'outline-success',
		text: 'Success Outline Button',
	},
};
export const OutlineDanger = {
	args: {
		variant: 'outline-danger',
		text: 'Danger Outline Button',
	},
};
export const OutlineWarning = {
	args: {
		variant: 'outline-warning',
		text: 'Warning Outline Button',
	},
};
export const OutlineInfo = {
	args: {
		variant: 'outline-info',
		text: 'Info Outline Button',
	},
};
export const OutlineLight = {
	args: {
		variant: 'outline-light',
		text: 'Light Outline Button',
	},
};
export const OutlineDark = {
	args: {
		variant: 'outline-dark',
		text: 'Dark Outline Button',
	},
};

export const PrimarybuttonIcon = {
	args: {
		hasIcon: true,
		children: (
			<>
				<AtrcIcon
					type='svg'
					svg='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>'
				/>
				Primary Icon Button
			</>
		),
	},
};
