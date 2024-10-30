var _excluded = ["value", "onChange", "blockName", "variant", "className", "tabProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

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