function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/* WordPress */
import { BaseControl,
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
__experimentalVStack as VStack, TabPanel, ColorPalette, GradientPicker } from '@wordpress/components';

/* Internal */
import AtrcUseColors from '../../utils/use-colors';
import AtrcPrefix from '../../prefix-vars';

/* Local */
const colorsAndGradientKeys = ['colors', 'disableCustomColors', 'gradients', 'disableCustomGradients'];
const TAB_COLOR = {
  name: 'color',
  title: 'Solid',
  value: 'color'
};
const TAB_GRADIENT = {
  name: 'gradient',
  title: 'Gradient',
  value: 'gradient'
};
const TABS_SETTINGS = [TAB_COLOR, TAB_GRADIENT];
function ColorGradientControlInner({
  colors,
  gradients,
  disableCustomColors,
  disableCustomGradients,
  __experimentalIsRenderedInSidebar,
  className,
  label,
  onColorChange,
  onGradientChange,
  colorValue,
  gradientValue,
  clearable,
  showTitle = true,
  enableAlpha,
  headingLevel,
  variant = ''
}) {
  const canChooseAColor = onColorChange && (!isEmpty(colors) || !disableCustomColors);
  const canChooseAGradient = onGradientChange && (!isEmpty(gradients) || !disableCustomGradients);
  if (!canChooseAColor && !canChooseAGradient) {
    return null;
  }
  const tabPanels = {
    [TAB_COLOR.value]: /*#__PURE__*/React.createElement(ColorPalette, {
      value: colorValue,
      onChange: canChooseAGradient ? newColor => {
        onColorChange(newColor);
        onGradientChange();
      } : onColorChange,
      colors,
      disableCustomColors,
      __experimentalIsRenderedInSidebar: __experimentalIsRenderedInSidebar,
      clearable: clearable,
      enableAlpha: enableAlpha,
      headingLevel: headingLevel
    }),
    [TAB_GRADIENT.value]: /*#__PURE__*/React.createElement(GradientPicker, {
      __nextHasNoMargin: true,
      value: gradientValue,
      onChange: canChooseAColor ? newGradient => {
        onGradientChange(newGradient);
        onColorChange();
      } : onGradientChange,
      gradients,
      disableCustomGradients,
      __experimentalIsRenderedInSidebar: __experimentalIsRenderedInSidebar,
      clearable: clearable,
      headingLevel: headingLevel
    })
  };
  const renderPanelType = type => /*#__PURE__*/React.createElement("div", {
    className: "blk-ed-cl-grd-ctrl__pnl"
  }, tabPanels[type]);
  return /*#__PURE__*/React.createElement(BaseControl, {
    __nextHasNoMarginBottom: true,
    className: classnames('blk-ed-cl-grd-ctrl', className, variant ? AtrcPrefix('cl-grd') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement("fieldset", {
    className: "blk-ed-cl-grd-ctrl__fieldset"
  }, /*#__PURE__*/React.createElement(VStack, {
    spacing: 1
  }, showTitle && /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("div", {
    className: "blk-ed-cl-grd-ctrl__cl-ind"
  }, /*#__PURE__*/React.createElement(BaseControl.VisualLabel, null, label))), canChooseAColor && canChooseAGradient && /*#__PURE__*/React.createElement(TabPanel, {
    className: "blk-ed-cl-grd-control__tabs",
    tabs: TABS_SETTINGS,
    initialTabName: gradientValue ? TAB_GRADIENT.value : !!canChooseAColor && TAB_COLOR.value
  }, tab => renderPanelType(tab.value)), !canChooseAGradient && renderPanelType(TAB_COLOR.value), !canChooseAColor && renderPanelType(TAB_GRADIENT.value))));
}
function ColorGradientControlSelect(props) {
  const colorGradientSettings = {};
  const {
    allSolids,
    allGradients
  } = AtrcUseColors();
  colorGradientSettings.colors = allSolids;
  colorGradientSettings.gradients = allGradients;
  colorGradientSettings.disableCustomColors = props.disableCustomColors || false;
  colorGradientSettings.disableCustomGradients = props.disableCustomGradients || false;
  return /*#__PURE__*/React.createElement(ColorGradientControlInner, _extends({}, colorGradientSettings, props));
}
function AtrcColorGradientControl(props) {
  if (colorsAndGradientKeys.every(key => Object.prototype.hasOwnProperty.call(props, key))) {
    return /*#__PURE__*/React.createElement(ColorGradientControlInner, props);
  }
  return /*#__PURE__*/React.createElement(ColorGradientControlSelect, props);
}
export default AtrcColorGradientControl;
//# sourceMappingURL=index.js.map