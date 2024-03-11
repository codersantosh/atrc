/* WordPress */
import { useMemo } from '@wordpress/element';
import { sprintf, __ } from '@wordpress/i18n';

/*Library*/
import { map, cloneDeep } from 'lodash';

/* Molecules */
import AtrcPanelBody from '../../molecules/panel-body';
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcNotice from '../../molecules/notice';

/* Controls */
import AtrcControlTextTag from '../../controls/control-text-tag';
import AtrcControlHtmlTag from '../../controls/control-html-tag';
import AtrcControlTextAlignDevice from '../../controls/control-text-align-device';
import AtrcControlAudio from './../../controls/control-audio';
import AtrcControlUnitDevice from '../../controls/control-unit-device';
import AtrcControlToggle from '../../controls/control-toggle';
import AtrcControlSelectButtonStyle from '../../controls/control-select-button-style';
import AtrcControlCounter from '../../controls/control-counter';
import AtrcControlDivider from '../../controls/control-divider';
import AtrcControlIconPicker from '../../controls/control-icon-picker';
import AtrcControlIconPickerDefaultIcons from '../../controls/control-icon-picker/default-icons';
import AtrcControlImg from '../../controls/control-img';
import AtrcControlMapGoogle from '../../controls/control-map-google';
import AtrcControlProgress from '../../controls/control-progress';
import AtrcControlVideo from '../../controls/control-video';

/* Internal */
import {
	AtrcBlocksSettingAllowHtmlTag,
	AtrcBlocksSettingAllowTextAlign,
	AtrcBlocksSettingAllowAudio,
	AtrcBlocksSettingAllowButtonStyle,
	AtrcBlocksSettingAllowOnText,
	AtrcBlocksSettingAllowGap,
	AtrcBlocksSettingAllowCounter,
	AtrcBlocksSettingAllowDivider,
	AtrcBlocksSettingAllowIcon,
	AtrcBlocksSettingAllowImg,
	AtrcBlocksSettingAllowMapGoogle,
	AtrcBlocksSettingAllowProgress,
	AtrcBlocksSettingAllowVideo,
} from './allow-settings';

/* In general show only options which are common in use */
const General = ({ blockName, value, onChange, settingProps }) => {
	/* Value */
	const { style = {}, link = {}, content = {}, conditional = {} } = value;

	/* Settings properties */
	const {
		tag = {},
		txtAlign = {},
		audio = {},
		buttonStyle = {},
		onText = {},
		gap = {},
		counter = {},
		divider = {},
		icon = {},
		img = {},
		mapGoogle = {},
		progress = {},
		video = {},
		generalProps = {},
	} = settingProps;

	/* HTML Tag */
	const { hasDynamicLink, ...tagProps } = tag;

	/* Audio */
	const { ...audProps } = audio;

	/* Button style */
	const { ...btnStyProps } = buttonStyle;

	/* On Text */
	const { ...onTxtProps } = onText;

	/* Counter */
	const { ...counterProps } = counter;

	/* Divider */
	const { ...dividerProps } = divider;

	/* Icon */
	const { ...iconProps } = icon;

	/* Image */
	const { ...imgProps } = img;

	/* Google Map */
	const { ...mapGoogleProps } = mapGoogle;

	/* Progress bar/circle */
	const { ...progressProps } = progress;

	/* Video */
	const { ...videoProps } = video;

	/* Text Align */
	const { ...txtAlProps } = txtAlign;

	/* Gap */
	const { ...gapProps } = gap;
	/* All Controls */
	const AllControls = useMemo(() => {
		const tools = [];

		if (AtrcBlocksSettingAllowHtmlTag({ blockName, value })) {
			/* Tag is HTML element tag */
			tools.push('tag');
		}

		if (AtrcBlocksSettingAllowTextAlign({ blockName, value })) {
			/* Align can be various, here is text align */
			tools.push('txtAl');
		}

		if (AtrcBlocksSettingAllowAudio({ blockName, value })) {
			/* Audio*/
			tools.push('aud');
		}

		if (AtrcBlocksSettingAllowButtonStyle({ blockName, value })) {
			/* Button Style*/
			tools.push('btnSty');
		}

		if (AtrcBlocksSettingAllowOnText({ blockName, value })) {
			/* Specially use on Button on Text*/
			tools.push('onTxt');
		}

		if (AtrcBlocksSettingAllowCounter({ blockName, value })) {
			/* Counter*/
			tools.push('counter');
		}

		if (AtrcBlocksSettingAllowDivider({ blockName, value })) {
			/* Divider*/
			tools.push('divr');
		}

		if (AtrcBlocksSettingAllowIcon({ blockName, value })) {
			/* Icon*/
			tools.push('icon');
		}

		if (AtrcBlocksSettingAllowImg({ blockName, value })) {
			/* Image*/
			tools.push('img');
		}

		if (AtrcBlocksSettingAllowMapGoogle({ blockName, value })) {
			/* Google map*/
			tools.push('mapGoogle');
		}

		if (AtrcBlocksSettingAllowProgress({ blockName, value })) {
			/* Progress Bar or Circle*/
			tools.push('progress');
		}

		if (AtrcBlocksSettingAllowVideo({ blockName, value })) {
			/* Video*/
			tools.push('video');
		}

		if (AtrcBlocksSettingAllowGap({ blockName, value })) {
			/* Gap*/
			tools.push('gap');
		}

		return tools;
	}, [blockName, style]);

	/* Update Values */
	const updateValue = (type, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[type] = newVal;
		onChange(valueCloned);
	};

	const updateContent = (type, newValue) => {
		const clonedContent = cloneDeep(content);
		clonedContent[type] = newValue;
		updateValue('content', clonedContent);
	};

	const updateStyle = (type, newValue) => {
		const clonedStyle = cloneDeep(style);
		clonedStyle[type] = newValue;
		updateValue('style', clonedStyle);
	};

	/* Return null if controls empty */
	if (!AllControls.length) {
		return null;
	}

	/* Components */
	return (
		<AtrcPanelBody
			title={__('General', 'atrc-prefix-atrc')}
			initialOpen={true}
			{...generalProps}>
			{map(AllControls, function (item, key) {
				/* content props */
				if ('tag' === item) {
					if (['text'].includes(blockName)) {
						if (tag.hasDynamicLink) {
							return (
								<AtrcPanelRow key={key}>
									<AtrcNotice isDismissible={false}>
										{sprintf(
											// translators: %s: tag name a
											__(
												'Since a dynamic link is selected, the tag is %s.',
												'atrc-prefix-atrc'
											),
											'a'
										)}
									</AtrcNotice>
								</AtrcPanelRow>
							);
						}
						return (
							<AtrcPanelRow key={key}>
								<AtrcControlTextTag
									value={content[item]}
									onChange={(newVal) => updateContent(item, newVal)}
									{...tagProps}
								/>
							</AtrcPanelRow>
						);
					}
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlHtmlTag
								value={content[item]}
								onChange={(newVal) => updateContent(item, newVal)}
								{...tagProps}
							/>
						</AtrcPanelRow>
					);
				}

				/* style props */
				if ('txtAl' === item) {
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlTextAlignDevice
								value={style[item]}
								onChange={(newVal) => updateStyle(item, newVal)}
								{...txtAlProps}
							/>
						</AtrcPanelRow>
					);
				}

				/* content props */
				if ('aud' === item) {
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlAudio
								value={content}
								onChange={(newVal) => updateValue('content', newVal)}
								{...audProps}
							/>
						</AtrcPanelRow>
					);
				}

				/* style props(generate class name)*/
				if ('btnSty' === item) {
					return (
						<AtrcControlSelectButtonStyle
							value={style[item]}
							onChange={(newVal) => updateStyle(item, newVal)}
							{...audProps}
						/>
					);
				}

				if ('onTxt' === item) {
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlToggle
								label={__('Add Text', 'atrc-prefix-atrc')}
								checked={content[item]}
								onChange={() => updateContent(item, !content[item])}
								{...onTxtProps}
							/>
						</AtrcPanelRow>
					);
				}

				if ('counter' === item) {
					return (
						<AtrcControlCounter
							value={content}
							onChange={(newVal) => updateValue('content', newVal)}
							{...counterProps}
						/>
					);
				}

				if ('divr' === item) {
					return (
						<AtrcControlDivider
							key={key}
							value={content}
							onChange={(newVal) => updateValue('content', newVal)}
							{...dividerProps}
						/>
					);
				}
				if ('icon' === item) {
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlIconPicker
								value={content}
								onChange={(newVal) => updateValue('content', newVal)}
								options={AtrcControlIconPickerDefaultIcons()}
								{...iconProps}
							/>
						</AtrcPanelRow>
					);
				}
				if ('img' === item) {
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlImg
								value={content}
								onChange={(newVal) => updateValue('content', newVal)}
								options={AtrcControlIconPickerDefaultIcons()}
								{...imgProps}
							/>
						</AtrcPanelRow>
					);
				}
				if ('mapGoogle' === item) {
					return (
						<AtrcControlMapGoogle
							value={content}
							onChange={(newVal) => updateValue('content', newVal)}
							{...mapGoogleProps}
						/>
					);
				}
				if ('progress' === item) {
					return (
						<AtrcControlProgress
							value={content}
							onChange={(newVal) => updateValue('content', newVal)}
							{...progressProps}
						/>
					);
				}
				if ('video' === item) {
					return (
						<AtrcControlVideo
							value={content}
							onChange={(newVal) => updateValue('content', newVal)}
							{...videoProps}
						/>
					);
				}

				if ('gap' === item) {
					return (
						<AtrcPanelRow key={key}>
							<AtrcControlUnitDevice
								label={__('Gap', 'atrc-prefix-atrc')}
								value={style[item]}
								onChange={(newVal) => updateStyle(item, newVal)}
								{...gapProps}
							/>
						</AtrcPanelRow>
					);
				}
				return null;
			})}
		</AtrcPanelBody>
	);
};

export default General;
