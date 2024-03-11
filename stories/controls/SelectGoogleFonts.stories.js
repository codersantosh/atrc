/* WordPress */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Atrc */
import {
	AtrcPanelBody,
	AtrcPanelRow,
	AtrcText,
	AtrcControlText,
	AtrcControlToggle,
	AtrcControlSelectGoogleFonts,
	AtrcControlSelectGoogleFontsRepeater,
	AtrcGetGoogleFontsFromUrl,
	AtrcGetGoogleFontsUrl,
	AtrcLink,
	AtrcPrefix,
	AtrcWireFrameContentSidebar,
	AtrcPreTemplate1,
} from '../../packages';

export default {
	title: 'Controls/AtrcControlSelectGoogleFonts',
};

/* GoogleFontsRepeater Settings 1 */
export const GoogleFonts = () => {
	const [value, setValue] = useState({});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcControlSelectGoogleFonts
						label={__('Add default google fonts', 'atrc-prefix-atrc')}
						value={value}
						onChange={setValue}
					/>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(value, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};

export const GoogleFontsRepeater = () => {
	const [settings, setSettings] = useState({
		api: '',
		download: true,
		url: '',
	});

	const { api = '', download = true, url = '' } = settings;

	const updateSetting = (key, val) => {
		const clonedSettings = cloneDeep(settings);
		clonedSettings[key] = val;
		setSettings(clonedSettings);
	};

	return (
		<AtrcWireFrameContentSidebar
			renderContent={
				<>
					<AtrcPanelBody
						className={classnames(AtrcPrefix('m-0'))}
						title={__('Default Google fonts', 'atrc-prefix-atrc')}
						initialOpen={false}>
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcControlText
								label={__('Google fonts api key', 'atrc-prefix-atrc')}
								value={api}
								onChange={(newVal) => updateSetting('api', newVal)}
								help={
									!api ? (
										<>
											{__(
												'Enter your Google font API key to access all google fonts.',
												'atrc-prefix-atrc'
											)}
											&nbsp;
											<AtrcLink
												href='https://developers.google.com/fonts/docs/developer_api#identifying_your_application_to_google'
												target='_blank'
												rel='nofollow noopener noreferrer'>
												{__('Get Google font API key', 'atrc-prefix-atrc')}
											</AtrcLink>
										</>
									) : (
										''
									)
								}
							/>
						</AtrcPanelRow>
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcControlToggle
								className={classnames('at-m')}
								label={__('Download web fonts locally', 'atrc-prefix-atrc')}
								checked={download}
								onChange={() => updateSetting('download', !download)}
							/>
						</AtrcPanelRow>
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcText
								tag='p'
								variant='info-italic'
								className={classnames('at-m')}>
								{__(
									'Add default Google fonts for the site. Alternatively, Google fonts can be always added from the advanced editing mode.',
									'atrc-prefix-atrc'
								)}
							</AtrcText>
						</AtrcPanelRow>
						<AtrcControlSelectGoogleFontsRepeater
							label={__('Add default google fonts', 'atrc-prefix-atrc')}
							apiKey={api}
							value={AtrcGetGoogleFontsFromUrl(url)}
							onChange={(newVal) => {
								updateSetting('url', AtrcGetGoogleFontsUrl(newVal));
							}}
						/>
					</AtrcPanelBody>
				</>
			}
			renderSidebar={
				<>
					<AtrcText tag='h3'>{__('Value', 'atrc-prefix-atrc')}</AtrcText>
					<AtrcPreTemplate1 content={JSON.stringify(settings, null, 2)} />
				</>
			}
			sidebarProps={{ sidebarCol: 'at-col-6' }}
			contentProps={{ contentCol: 'at-col-6' }}
		/>
	);
};
