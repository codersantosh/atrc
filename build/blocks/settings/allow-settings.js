/*Local*/
export var AtrcBlocksSettingAllowHtmlTag = function AtrcBlocksSettingAllowHtmlTag(_ref) {
  var blockName = _ref.blockName,
    value = _ref.value;
  if (['text'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowTextAlign = function AtrcBlocksSettingAllowTextAlign(_ref2) {
  var blockName = _ref2.blockName,
    value = _ref2.value;
  if (['text'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowAudio = function AtrcBlocksSettingAllowAudio(_ref3) {
  var blockName = _ref3.blockName,
    value = _ref3.value;
  if (['audio'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowButtonStyle = function AtrcBlocksSettingAllowButtonStyle(_ref4) {
  var blockName = _ref4.blockName,
    value = _ref4.value;
  if (['button', 'buttonIcon'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowOnText = function AtrcBlocksSettingAllowOnText(_ref5) {
  var blockName = _ref5.blockName,
    value = _ref5.value;
  if (['buttonIcon'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowGap = function AtrcBlocksSettingAllowGap(_ref6) {
  var blockName = _ref6.blockName,
    value = _ref6.value;
  if (['buttonIcon'].includes(blockName)) {
    if (value && value.content && value.content.onTxt) {
      return true;
    }
  }
  return false;
};
export var AtrcBlocksSettingAllowCounter = function AtrcBlocksSettingAllowCounter(_ref7) {
  var blockName = _ref7.blockName,
    value = _ref7.value;
  if (['counter'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowDivider = function AtrcBlocksSettingAllowDivider(_ref8) {
  var blockName = _ref8.blockName,
    value = _ref8.value;
  if (['divider'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowIcon = function AtrcBlocksSettingAllowIcon(_ref9) {
  var blockName = _ref9.blockName,
    value = _ref9.value;
  if (['icon'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowImg = function AtrcBlocksSettingAllowImg(_ref10) {
  var blockName = _ref10.blockName,
    value = _ref10.value;
  if (['img'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowMapGoogle = function AtrcBlocksSettingAllowMapGoogle(_ref11) {
  var blockName = _ref11.blockName,
    value = _ref11.value;
  if (['mapGoogle'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowProgress = function AtrcBlocksSettingAllowProgress(_ref12) {
  var blockName = _ref12.blockName,
    value = _ref12.value;
  if (['progressBar', 'progressCircle'].includes(blockName)) {
    return true;
  }
  return false;
};
export var AtrcBlocksSettingAllowVideo = function AtrcBlocksSettingAllowVideo(_ref13) {
  var blockName = _ref13.blockName,
    value = _ref13.value;
  if (['video'].includes(blockName)) {
    return true;
  }
  return false;
};
//# sourceMappingURL=allow-settings.js.map