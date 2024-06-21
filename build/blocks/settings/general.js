var _excluded = ["hasDynamicLink"];
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

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
import { AtrcBlocksSettingAllowHtmlTag, AtrcBlocksSettingAllowTextAlign, AtrcBlocksSettingAllowAudio, AtrcBlocksSettingAllowButtonStyle, AtrcBlocksSettingAllowOnText, AtrcBlocksSettingAllowGap, AtrcBlocksSettingAllowCounter, AtrcBlocksSettingAllowDivider, AtrcBlocksSettingAllowIcon, AtrcBlocksSettingAllowImg, AtrcBlocksSettingAllowMapGoogle, AtrcBlocksSettingAllowProgress, AtrcBlocksSettingAllowVideo } from './allow-settings';

/* In general show only options which are common in use */
var General = function General(_ref) {
  var blockName = _ref.blockName,
    value = _ref.value,
    onChange = _ref.onChange,
    settingProps = _ref.settingProps;
  /* Value */
  var _value$style = value.style,
    style = _value$style === void 0 ? {} : _value$style,
    _value$link = value.link,
    link = _value$link === void 0 ? {} : _value$link,
    _value$content = value.content,
    content = _value$content === void 0 ? {} : _value$content,
    _value$conditional = value.conditional,
    conditional = _value$conditional === void 0 ? {} : _value$conditional;

  /* Settings properties */
  var _settingProps$tag = settingProps.tag,
    tag = _settingProps$tag === void 0 ? {} : _settingProps$tag,
    _settingProps$txtAlig = settingProps.txtAlign,
    txtAlign = _settingProps$txtAlig === void 0 ? {} : _settingProps$txtAlig,
    _settingProps$audio = settingProps.audio,
    audio = _settingProps$audio === void 0 ? {} : _settingProps$audio,
    _settingProps$buttonS = settingProps.buttonStyle,
    buttonStyle = _settingProps$buttonS === void 0 ? {} : _settingProps$buttonS,
    _settingProps$onText = settingProps.onText,
    onText = _settingProps$onText === void 0 ? {} : _settingProps$onText,
    _settingProps$gap = settingProps.gap,
    gap = _settingProps$gap === void 0 ? {} : _settingProps$gap,
    _settingProps$counter = settingProps.counter,
    counter = _settingProps$counter === void 0 ? {} : _settingProps$counter,
    _settingProps$divider = settingProps.divider,
    divider = _settingProps$divider === void 0 ? {} : _settingProps$divider,
    _settingProps$icon = settingProps.icon,
    icon = _settingProps$icon === void 0 ? {} : _settingProps$icon,
    _settingProps$img = settingProps.img,
    img = _settingProps$img === void 0 ? {} : _settingProps$img,
    _settingProps$mapGoog = settingProps.mapGoogle,
    mapGoogle = _settingProps$mapGoog === void 0 ? {} : _settingProps$mapGoog,
    _settingProps$progres = settingProps.progress,
    progress = _settingProps$progres === void 0 ? {} : _settingProps$progres,
    _settingProps$video = settingProps.video,
    video = _settingProps$video === void 0 ? {} : _settingProps$video,
    _settingProps$general = settingProps.generalProps,
    generalProps = _settingProps$general === void 0 ? {} : _settingProps$general;

  /* HTML Tag */
  var hasDynamicLink = tag.hasDynamicLink,
    tagProps = _objectWithoutProperties(tag, _excluded);

  /* Audio */
  var audProps = _extends({}, (_objectDestructuringEmpty(audio), audio));

  /* Button style */
  var btnStyProps = _extends({}, (_objectDestructuringEmpty(buttonStyle), buttonStyle));

  /* On Text */
  var onTxtProps = _extends({}, (_objectDestructuringEmpty(onText), onText));

  /* Counter */
  var counterProps = _extends({}, (_objectDestructuringEmpty(counter), counter));

  /* Divider */
  var dividerProps = _extends({}, (_objectDestructuringEmpty(divider), divider));

  /* Icon */
  var iconProps = _extends({}, (_objectDestructuringEmpty(icon), icon));

  /* Image */
  var imgProps = _extends({}, (_objectDestructuringEmpty(img), img));

  /* Google Map */
  var mapGoogleProps = _extends({}, (_objectDestructuringEmpty(mapGoogle), mapGoogle));

  /* Progress bar/circle */
  var progressProps = _extends({}, (_objectDestructuringEmpty(progress), progress));

  /* Video */
  var videoProps = _extends({}, (_objectDestructuringEmpty(video), video));

  /* Text Align */
  var txtAlProps = _extends({}, (_objectDestructuringEmpty(txtAlign), txtAlign));

  /* Gap */
  var gapProps = _extends({}, (_objectDestructuringEmpty(gap), gap));
  /* All Controls */
  var AllControls = useMemo(function () {
    var tools = [];
    if (AtrcBlocksSettingAllowHtmlTag({
      blockName: blockName,
      value: value
    })) {
      /* Tag is HTML element tag */
      tools.push('tag');
    }
    if (AtrcBlocksSettingAllowTextAlign({
      blockName: blockName,
      value: value
    })) {
      /* Align can be various, here is text align */
      tools.push('txtAl');
    }
    if (AtrcBlocksSettingAllowAudio({
      blockName: blockName,
      value: value
    })) {
      /* Audio*/
      tools.push('aud');
    }
    if (AtrcBlocksSettingAllowButtonStyle({
      blockName: blockName,
      value: value
    })) {
      /* Button Style*/
      tools.push('btnSty');
    }
    if (AtrcBlocksSettingAllowOnText({
      blockName: blockName,
      value: value
    })) {
      /* Specially use on Button on Text*/
      tools.push('onTxt');
    }
    if (AtrcBlocksSettingAllowCounter({
      blockName: blockName,
      value: value
    })) {
      /* Counter*/
      tools.push('counter');
    }
    if (AtrcBlocksSettingAllowDivider({
      blockName: blockName,
      value: value
    })) {
      /* Divider*/
      tools.push('divr');
    }
    if (AtrcBlocksSettingAllowIcon({
      blockName: blockName,
      value: value
    })) {
      /* Icon*/
      tools.push('icon');
    }
    if (AtrcBlocksSettingAllowImg({
      blockName: blockName,
      value: value
    })) {
      /* Image*/
      tools.push('img');
    }
    if (AtrcBlocksSettingAllowMapGoogle({
      blockName: blockName,
      value: value
    })) {
      /* Google map*/
      tools.push('mapGoogle');
    }
    if (AtrcBlocksSettingAllowProgress({
      blockName: blockName,
      value: value
    })) {
      /* Progress Bar or Circle*/
      tools.push('progress');
    }
    if (AtrcBlocksSettingAllowVideo({
      blockName: blockName,
      value: value
    })) {
      /* Video*/
      tools.push('video');
    }
    if (AtrcBlocksSettingAllowGap({
      blockName: blockName,
      value: value
    })) {
      /* Gap*/
      tools.push('gap');
    }
    return tools;
  }, [blockName, style]);

  /* Update Values */
  var updateValue = function updateValue(type, newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var updateContent = function updateContent(type, newValue) {
    var clonedContent = cloneDeep(content);
    clonedContent[type] = newValue;
    updateValue('content', clonedContent);
  };
  var updateStyle = function updateStyle(type, newValue) {
    var clonedStyle = cloneDeep(style);
    clonedStyle[type] = newValue;
    updateValue('style', clonedStyle);
  };

  /* Return null if controls empty */
  if (!AllControls.length) {
    return null;
  }

  /* Components */
  return /*#__PURE__*/React.createElement(AtrcPanelBody, _extends({
    title: __('General', 'atrc-prefix-atrc'),
    initialOpen: true
  }, generalProps), map(AllControls, function (item, key) {
    /* content props */
    if ('tag' === item) {
      if (['text'].includes(blockName)) {
        if (tag.hasDynamicLink) {
          return /*#__PURE__*/React.createElement(AtrcPanelRow, {
            key: key
          }, /*#__PURE__*/React.createElement(AtrcNotice, {
            isDismissible: false
          }, sprintf(
          // translators: %s: tag name a
          __('Since a dynamic link is selected, the tag is %s.', 'atrc-prefix-atrc'), 'a')));
        }
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          key: key
        }, /*#__PURE__*/React.createElement(AtrcControlTextTag, _extends({
          value: content[item],
          onChange: function onChange(newVal) {
            return updateContent(item, newVal);
          }
        }, tagProps)));
      }
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlHtmlTag, _extends({
        value: content[item],
        onChange: function onChange(newVal) {
          return updateContent(item, newVal);
        }
      }, tagProps)));
    }

    /* style props */
    if ('txtAl' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlTextAlignDevice, _extends({
        value: style[item],
        onChange: function onChange(newVal) {
          return updateStyle(item, newVal);
        }
      }, txtAlProps)));
    }

    /* content props */
    if ('aud' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlAudio, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        }
      }, audProps)));
    }

    /* style props(generate class name)*/
    if ('btnSty' === item) {
      return /*#__PURE__*/React.createElement(AtrcControlSelectButtonStyle, _extends({
        value: style[item],
        onChange: function onChange(newVal) {
          return updateStyle(item, newVal);
        }
      }, audProps));
    }
    if ('onTxt' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlToggle, _extends({
        label: __('Add Text', 'atrc-prefix-atrc'),
        checked: content[item],
        onChange: function onChange() {
          return updateContent(item, !content[item]);
        }
      }, onTxtProps)));
    }
    if ('counter' === item) {
      return /*#__PURE__*/React.createElement(AtrcControlCounter, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        }
      }, counterProps));
    }
    if ('divr' === item) {
      return /*#__PURE__*/React.createElement(AtrcControlDivider, _extends({
        key: key,
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        }
      }, dividerProps));
    }
    if ('icon' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlIconPicker, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        },
        options: AtrcControlIconPickerDefaultIcons()
      }, iconProps)));
    }
    if ('img' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlImg, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        },
        options: AtrcControlIconPickerDefaultIcons()
      }, imgProps)));
    }
    if ('mapGoogle' === item) {
      return /*#__PURE__*/React.createElement(AtrcControlMapGoogle, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        }
      }, mapGoogleProps));
    }
    if ('progress' === item) {
      return /*#__PURE__*/React.createElement(AtrcControlProgress, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        }
      }, progressProps));
    }
    if ('video' === item) {
      return /*#__PURE__*/React.createElement(AtrcControlVideo, _extends({
        value: content,
        onChange: function onChange(newVal) {
          return updateValue('content', newVal);
        }
      }, videoProps));
    }
    if ('gap' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        key: key
      }, /*#__PURE__*/React.createElement(AtrcControlUnitDevice, _extends({
        label: __('Gap', 'atrc-prefix-atrc'),
        value: style[item],
        onChange: function onChange(newVal) {
          return updateStyle(item, newVal);
        }
      }, gapProps)));
    }
    return null;
  }));
};
export default General;
//# sourceMappingURL=general.js.map