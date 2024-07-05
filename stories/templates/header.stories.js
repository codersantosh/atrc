/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */

/* Atrc */
import {
	AtrcHeaderTemplate1,
	AtrcHashRouter,
	AtrcWrap,
	AtrcButton,
} from '../../packages';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Templates/Header',
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const primaryNav = [
	{
		to: '/',
		children: __('Getting started', 'atrc-prefix-atrc'),
		end: true,
	},
	{
		to: '/maintenance',
		children: __('Settings', 'atrc-prefix-atrc'),
	},
];

export const Template1 = () => {
	return (
		<AtrcHashRouter basename='/'>
			<AtrcHeaderTemplate1
				isSticky={true}
				logo={{
					src: 'https://www.acmeit.org/wp-content/uploads/2020/03/acmeit-logo.png',
				}}
				primaryNav={{ navs: primaryNav }}
				floatingSidebar={() => (
					<AtrcWrap>
						<AtrcButton onClick={() => {}}>
							{__(
								'Show all hidden informations, notices and documentations ',
								'atrc-prefix-atrc'
							)}
						</AtrcButton>
					</AtrcWrap>
				)}
			/>
		</AtrcHashRouter>
	);
};
