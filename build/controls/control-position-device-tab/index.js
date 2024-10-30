var _excluded = ["value", "tab", "onChange"],
  _excluded2 = ["className", "variant", "label", "value", "onChange", "allowedTabs"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Value Structure
Type Object
{
========*Normal values*========
    "pos":"",
    "smPos":"",
    "mdPos":"",
    "lgPos":"",
    "xlPos":"",
    "xxlPos":""

    "t":"",
    "b":"",
    "r":"",
    "l":"",
    "xs":"",

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",
    "sm":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",
    "md": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",
    "lg":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",
    "xl":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",
    "xxl":"",

    ========*Normal values*========
    "posHover":"",
    "smPosHover":"",
    "mdPosHover":"",
    "lgPosHover":"",
    "xlPosHover":"",
    "xxlPosHover":""

    "tHover":"",
    "bHover":"",
    "rHover":"",
    "lHover":"",
    "Hover":"",

    "smTHover":"",
    "smBHover":"",
    "smRHover":"",
    "smLHover":"",
    "smHover":"",

    "mdTHover": "",
    "mdBHover": "",
    "mdRHover": "",
    "mdLHover": "",
    "mdHover": "",

    "lgTHover":"",
    "lgBHover":"",
    "lgRHover":"",
    "lgLHover":"",
    "lgHover":"",

    "xlTHover":"",
    "xlBHover":"",
    "xlRHover":"",
    "xlLHover":"",
    "xlHover":"",

    "xxlTHover":"",
    "xxlBHover":"",
    "xxlRHover":"",
    "xxlLHover":"",
    "xxlHover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map } from 'lodash';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';

/* Controls */
import AtrcControlPositionDevice from '../control-position-device';
import { AtrcControlPositionAllowedKeys } from '../control-position-device';

/*Utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
var RenderTabPanel = function RenderTabPanel(_ref) {
  var value = _ref.value,
    tab = _ref.tab,
    _onChange = _ref.onChange,
    defaultProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlPositionDevice, _extends({
    label: __('Position options'),
    value: AtrcGetTabValues(value, tab, AtrcControlPositionAllowedKeys),
    onChange: function onChange(newVal) {
      return _onChange(newVal, tab);
    }
  }, defaultProps));
};
var AtrcControlPositionDeviceTab = function AtrcControlPositionDeviceTab(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Position', 'atrc-prefix-atrc') : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlPositionAllowedKeys));
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('normal', value, AtrcControlPositionAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('normal', value, AtrcControlPositionAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('hover', value, AtrcControlPositionAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('hover', value, AtrcControlPositionAllowedKeys));
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-pos-device-tab'), className, variant ? AtrcPrefix('ctrl-pos-device-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlPositionAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value,
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
export default AtrcControlPositionDeviceTab;
//# sourceMappingURL=index.js.map