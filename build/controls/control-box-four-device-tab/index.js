var _excluded = ["label", "value", "onChange", "tab"],
  _excluded2 = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Value Structure
Per tab: 30 values
Type Object
{
========*Normal values*========
	'xs',TODO
	"xsT":"",
    "xsB":"",
    "xsR":"",
    "xsL":"",

	'sm',
	'smT',
	'smR',
	'smB',
	'smL',

	'md',
	'mdT',
	'mdR',
	'mdB',
	'mdL',

	'lg',
	'lgT',
	'lgR',
	'lgB',
	'lgL',

	'xl',
	'xlT',
	'xlR',
	'xlB',
	'xlL',

	'xxl',
	'xxlT',
	'xxlR',
	'xxlB',
	'xxlL',

========*Hover values*========

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
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { map } from 'lodash';
import classnames from 'classnames';

/*Controls*/
import AtrcControlBoxFourDevice from '../control-box-four-device';
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local */
/*Generate per tab 30 conditional variables
 *
 * @return String || Object
 * String single value
 * Object {
 *  t:'',
 *  r:'',
 *  b:'',
 *  l:''
 *  }
 * */
var RenderTabPanel = function RenderTabPanel(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Enter value', 'atrc-prefix-atrc') : _ref$label,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'normal' : _ref$tab,
    defaultProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(AtrcControlBoxFourDevice, _extends({
    label: label,
    value: AtrcGetTabValues(value, tab, AtrcControlBoxFourDeviceAllowedKeys),
    onChange: onChange
  }, defaultProps));
};
var AtrcControlBoxFourDeviceTab = function AtrcControlBoxFourDeviceTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  var setTabAttr = function setTabAttr(tab, newVal) {
    var getVal = AtrcUpdateTabValues(newVal, tab, value, AtrcControlBoxFourDeviceAllowedKeys);
    console.log(getVal);
    onChange(getVal);
  };
  var AllTabs = [];
  if (allowedTabs.includes('normal')) {
    AllTabs.push({
      name: 'normal',
      title: __('Normal', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('normal', value, AtrcControlBoxFourDeviceAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('normal', value, AtrcControlBoxFourDeviceAllowedKeys));
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: AtrcHasTabValues('hover', value, AtrcControlBoxFourDeviceAllowedKeys),
      onDeselect: function onDeselect() {
        return onChange(AtrcResetTab('hover', value, AtrcControlBoxFourDeviceAllowedKeys));
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-box-four-device-tab'), className, variant ? AtrcPrefix('ctrl-box-four-device-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange(AtrcResetTabs(value, AtrcControlBoxFourDeviceAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
        value: value,
        onChange: function onChange(newVal) {
          return setTabAttr(tab, newVal);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
export default AtrcControlBoxFourDeviceTab;
//# sourceMappingURL=index.js.map