/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */

/* Atrc */
import {
	AtrcContent,
	AtrcWireFrameContentSidebar,
	AtrcWireFrameHeaderContentFooter,
	AtrcTitleTemplate2,
	AtrcPanelBody,
	AtrcText,
	AtrcPanelRow,
	AtrcControlToggle,
	AtrcControlSelect,
	AtrcFooterTemplate1,
	AtrcButtonSaveTemplate1,
} from '../../packages';

/* Local */
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'Wireframe/AtrcWireFrameContentSidebar',
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const MainContent = () => {
	return (
		<AtrcContent>
			<AtrcPanelRow>
				<AtrcControlToggle
					label={__('Toggle', 'atrc-prefix-atrc')}
					checked={true}
					onChange={() => {}}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow>
				<AtrcControlSelect
					label={__('Select', 'atrc-prefix-atrc')}
					wrapProps={{
						className: 'at-flx-grw-1',
					}}
					value=''
					options={[
						{
							value: '',
							label: __('None', 'atrc-prefix-atrc'),
						},
						{
							value: 'admin',
							label: __('Admin only', 'atrc-prefix-atrc'),
						},
						{
							value: 'login',
							label: __('Login user', 'atrc-prefix-atrc'),
						},

						{
							value: 'roles',
							label: __('Selected roles', 'atrc-prefix-atrc'),
						},
					]}
					onChange={(newVal) => {}}
				/>
			</AtrcPanelRow>
			<AtrcPanelRow>
				<AtrcPanelBody
					title={__('Panel body', 'atrc-prefix-atrc')}
					initialOpen={true}>
					<AtrcPanelRow>
						<AtrcControlToggle
							label={__(
								'Allow search bots during maintenance mode.',
								'atrc-prefix-atrc'
							)}
							help={__(
								'Enable access for search bots while the website is in "Coming Soon" or maintenance mode.',
								'atrc-prefix-atrc'
							)}
							checked={true}
							onChange={() => {}}
						/>
					</AtrcPanelRow>
				</AtrcPanelBody>
			</AtrcPanelRow>
		</AtrcContent>
	);
};

const Documentation = () => {
	return (
		<>
			<AtrcWireFrameHeaderContentFooter
				renderHeader={
					<AtrcTitleTemplate2
						title={__('Documentation', 'atrc-prefix-atrc')}
						buttons={[
							{
								iconProps: {
									type: 'svg',
									svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>',
								},

								variant: 'danger',
								className: 'at-btn-close at-flx at-al-itm-ctr',
							},
						]}
					/>
				}
				renderContent={
					<>
						<AtrcPanelBody
							title={__(
								'What is the "Coming Soon (Maintenance) mode"?',
								'atrc-prefix-atrc'
							)}
							initialOpen={true}>
							<AtrcText tag='p'>
								{__(
									'"Coming Soon (Maintenance) mode" is a feature that allows you to create a temporary maintenance page for your website while you work on new site, updates or changes. This page is displayed to visitors when they try to access your website, letting them know that your website is temporarily unavailable.',
									'atrc-prefix-atrc'
								)}
							</AtrcText>
						</AtrcPanelBody>
						<AtrcPanelBody
							title={__(
								'Who can access the site during maintenance mode?',
								'atrc-prefix-atrc'
							)}
							initialOpen={false}>
							<AtrcText tag='p'>
								{__(
									"By default, only logged-in users with administrative privileges can access the site during maintenance mode. This is to ensure that visitors to your website don't see an unfinished or broken version of your site. However, you can customize this behaviour and allow `All logged-in` users.",
									'atrc-prefix-atrc'
								)}
							</AtrcText>
						</AtrcPanelBody>
						<AtrcPanelBody
							title={__(
								'What content is displayed during maintenance mode?',
								'atrc-prefix-atrc'
							)}
							initialOpen={false}>
							<AtrcText tag='p'>
								{__(
									'During maintenance mode, the content displayed on your website is determined by the maintenance page that you have selected. You can choose to display a simple message informing visitors that your website is currently undergoing maintenance, or you can add more detailed information about the updates or changes that you are making. You can also add your logo, branding, and other design elements to the maintenance page to make it more visually appealing. The design is on your hand.',
									'atrc-prefix-atrc'
								)}
							</AtrcText>
						</AtrcPanelBody>
					</>
				}
			/>
		</>
	);
};

export const Default = () => {
	return (
		<>
			<AtrcWireFrameContentSidebar
				wrapProps={{
					allowContainer: true,
					type: 'fluid',
				}}
				allowRow={true}
				renderContent={<MainContent />}
				renderSidebar={<Documentation />}
				contentProps={{
					contentCol: 'at-col-7',
				}}
				sidebarProps={{
					sidebarCol: 'at-col-5',
				}}
			/>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry's standard dummy text ever since the
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book. It has survived not only five centuries, but
			also the leap into electronic typesetting, remaining essentially
			unchanged. It was popularised in the 1960s with the release of Letraset
			sheets containing Lorem Ipsum passages, and more recently with desktop
			publishing software like Aldus PageMaker including versions of Lorem
			Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
			industry. Lorem Ipsum has been the industry's standard dummy text ever
			since the 1500s, when an unknown printer took a galley of type and
			scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining
			essentially unchanged. It was popularised in the 1960s with the release of
			Letraset sheets containing Lorem Ipsum passages, and more recently with
			desktop publishing software like Aldus PageMaker including versions of
			Lorem Ipsum.
			<AtrcFooterTemplate1 useDynamicPosition={true}>
				<AtrcButtonSaveTemplate1
					isLoading={false}
					canSave={true}
					text={{
						saved: __('Saved', 'atrc-prefix-atrc'),
						save: __('Save settings', 'atrc-prefix-atrc'),
					}}
					disabled={false}
					onClick={() => {}}
				/>
			</AtrcFooterTemplate1>
		</>
	);
};
