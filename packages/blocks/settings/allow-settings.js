import React from 'react';

/*Local*/
export const AtrcBlocksSettingAllowHtmlTag = ({ blockName, value }) => {
	if (['text'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowTextAlign = ({ blockName, value }) => {
	if (['text'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowAudio = ({ blockName, value }) => {
	if (['audio'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowButtonStyle = ({ blockName, value }) => {
	if (['button', 'buttonIcon'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowOnText = ({ blockName, value }) => {
	if (['buttonIcon'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowGap = ({ blockName, value }) => {
	if (['buttonIcon'].includes(blockName)) {
		if (value && value.content && value.content.onTxt) {
			return true;
		}
	}
	return false;
};

export const AtrcBlocksSettingAllowCounter = ({ blockName, value }) => {
	if (['counter'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowDivider = ({ blockName, value }) => {
	if (['divider'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowIcon = ({ blockName, value }) => {
	if (['icon'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowImg = ({ blockName, value }) => {
	if (['img'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowMapGoogle = ({ blockName, value }) => {
	if (['mapGoogle'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowProgress = ({ blockName, value }) => {
	if (['progressBar', 'progressCircle'].includes(blockName)) {
		return true;
	}
	return false;
};

export const AtrcBlocksSettingAllowVideo = ({ blockName, value }) => {
	if (['video'].includes(blockName)) {
		return true;
	}
	return false;
};
