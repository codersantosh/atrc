var _excluded = ["label", "disableUnits", "value", "onChange"],
  _excluded2 = ["value", "label", "onChange", "disableUnits", "variant", "className", "allowedTabs"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
    "normal":'',
    "hover":'',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map, cloneDeep } from 'lodash';

/* Controls */
import AtrcControlUnit from '../control-unit';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Utils*/

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTabPanel = function RenderTabPanel(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Enter value', 'atrc-prefix-atrc') : _ref$label,
    disableUnits = _ref.disableUnits,
    value = _ref.value,
    onChange = _ref.onChange,
    defaultProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlUnit, _extends({
    label: label,
    value: value,
    onChange: onChange,
    disableUnits: disableUnits
  }, defaultProps));
};
var AtrcControlUnitTab = function AtrcControlUnitTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var resetAttr = function resetAttr(attr) {
    var valueCloned = cloneDeep(value);
    delete valueCloned[attr];
    onChange(valueCloned);
  };
  var setAttr = function setAttr(attr, newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned[attr] = newVal;
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: !!value.normal,
      onDeselect: function onDeselect() {
        return resetAttr('normal');
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: !!value.hover,
      onDeselect: function onDeselect() {
        return resetAttr('hover');
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-unit-tab'), className, variant ? AtrcPrefix('ctrl-unit-tab') + '-' + variant : ''),
    label: label,
    rresetAll: function rresetAll() {
      return resetAll();
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value && value[tab],
        disableUnits: disableUnits,
        onChange: function onChange(newVal) {
          return setAttr(tab, newVal);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
export default AtrcControlUnitTab;
//# sourceMappingURL=index.js.map