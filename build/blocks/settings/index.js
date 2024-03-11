var _excluded = ["value", "onChange", "blockName", "variant", "className", "tabProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* WordPress */

/* Library */
import { cloneDeep } from 'lodash';
import classnames from 'classnames';

/* Molecules */
import AtrcTabPanel from '../../molecules/tab-panel';

/* Controls */

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import AtrcBlocksGetTabs from './tabs';
import General from './general';

/* Local */
/* Settings is based on the Websit elements like atoms and molecules.
Eg text and button have different or same properties.
Properties are defined from the variable name of atomic css

*/
var RenderSettingTab = function RenderSettingTab(props) {
  var tab = props.tab,
    value = props.value,
    onChange = props.onChange,
    blockName = props.blockName,
    _props$settingProps = props.settingProps,
    settingProps = _props$settingProps === void 0 ? {} : _props$settingProps;
  var _value$style = value.style,
    style = _value$style === void 0 ? {} : _value$style,
    _value$link = value.link,
    link = _value$link === void 0 ? {} : _value$link,
    _value$content = value.content,
    content = _value$content === void 0 ? {} : _value$content,
    _value$conditional = value.conditional,
    conditional = _value$conditional === void 0 ? {} : _value$conditional;
  var _settingProps$general = settingProps.general,
    general = _settingProps$general === void 0 ? {
      on: true
    } : _settingProps$general;
  var updateValue = function updateValue(type, newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var updateStyle = function updateStyle(type, newVal) {
    var styleCloned = cloneDeep(style);
    styleCloned[type] = newVal;
    updateValue('style', styleCloned);
  };
  if ('basic' === tab.name) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, general.on ? /*#__PURE__*/React.createElement(General, {
      blockName: blockName,
      value: value,
      onChange: onChange,
      settingProps: settingProps
    }) : null);
  } else if ('style' === tab.name) {
    return 'Style';
  } else if ('advanced' === tab.name) {
    return 'advanced';
  }
  return null;
};
var AtrcBlocksSettings = function AtrcBlocksSettings(props) {
  var value = props.value,
    onChange = props.onChange,
    blockName = props.blockName,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    tabProps = props.tabProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcTabPanel, _extends({
    className: classnames(AtrcPrefix('blocks-settings'), className, variant ? AtrcPrefix('blocks-settings') + '-' + variant : ''),
    tabs: AtrcBlocksGetTabs(tabProps)
  }, defaultProps), function (tab) {
    return /*#__PURE__*/React.createElement(RenderSettingTab, {
      tab: tab,
      value: value,
      onChange: onChange,
      blockName: blockName
    });
  }));
};
export default AtrcBlocksSettings;
//# sourceMappingURL=index.js.map