/* WordPress */
import { __ } from '@wordpress/i18n';

import { AtrcPanelBody, AtrcText, AtrcWrap } from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Molecules/AtrcPanel',
	component: AtrcWrap,
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
		children: (
			<>
				<AtrcPanelBody
					title={__(
						'What is the "Coming Soon (Maintenance) mode"?',
						'acme-coming-soon'
					)}
					initialOpen={true}>
					<AtrcText tag='p'>
						{__(
							'"Coming Soon (Maintenance) mode" is a feature that allows you to create a temporary maintenance page for your website while you work on new site, updates or changes. This page is displayed to visitors when they try to access your website, letting them know that your website is temporarily unavailable.',
							'acme-coming-soon'
						)}
					</AtrcText>
				</AtrcPanelBody>
				<AtrcPanelBody
					title={__(
						'Who can access the site during maintenance mode?',
						'acme-coming-soon'
					)}
					initialOpen={false}>
					<AtrcText tag='p'>
						{__(
							"By default, only logged-in users with administrative privileges can access the site during maintenance mode. This is to ensure that visitors to your website don't see an unfinished or broken version of your site. However, you can customize this behaviour and allow `All logged-in` users.",
							'acme-coming-soon'
						)}
					</AtrcText>
				</AtrcPanelBody>
				<AtrcPanelBody
					title={__(
						'What content is displayed during maintenance mode?',
						'acme-coming-soon'
					)}
					initialOpen={false}>
					<AtrcText tag='p'>
						{__(
							'During maintenance mode, the content displayed on your website is determined by the maintenance page that you have selected. You can choose to display a simple message informing visitors that your website is currently undergoing maintenance, or you can add more detailed information about the updates or changes that you are making. You can also add your logo, branding, and other design elements to the maintenance page to make it more visually appealing. The design is on your hand.',
							'acme-coming-soon'
						)}
					</AtrcText>
				</AtrcPanelBody>
			</>
		),
	},
};
