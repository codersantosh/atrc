var _excluded = ["label", "value", "onChange", "tab"],
  _excluded2 = ["value", "label", "onChange", "variant", "className", "allowedTabs"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Value Structure
Per tab: 30 values
Type Object
{
========*Normal values*========
	'xs',
	't',
	'b',
	'r',
	'l',

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

========*ParentHover values*========

    "tParentHover":"",
    "bParentHover":"",
    "rParentHover":"",
    "lParentHover":"",
    "ParentHover":"",

    "smTParentHover":"",
    "smBParentHover":"",
    "smRParentHover":"",
    "smLParentHover":"",
    "smParentHover":"",

    "mdTParentHover": "",
    "mdBParentHover": "",
    "mdRParentHover": "",
    "mdLParentHover": "",
    "mdParentHover": "",

    "lgTParentHover":"",
    "lgBParentHover":"",
    "lgRParentHover":"",
    "lgLParentHover":"",
    "lgParentHover":"",

    "xlTParentHover":"",
    "xlBParentHover":"",
    "xlRParentHover":"",
    "xlLParentHover":"",
    "xlParentHover":"",

    "xxlTParentHover":"",
    "xxlBParentHover":"",
    "xxlRParentHover":"",
    "xxlLParentHover":"",
    "xxlParentHover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import { map } from 'lodash';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcControlBoxFourDevice from '../control-box-four-device';
import { AtrcControlBoxFourDeviceAllowedKeys } from '../control-box-four-device';

/*Inbuilt utils*/
import { AtrcGetTabValues, AtrcHasTabValues, AtrcUpdateTabValues, AtrcResetTab, AtrcResetTabs } from '../../utils/object-values-with-allowed-keys-and-tabs';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components */
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
    label = _ref$label === void 0 ? __('Enter value') : _ref$label,
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
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlBoxFourDeviceAllowedKeys));
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlBoxFourDeviceAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('normal', value, AtrcControlBoxFourDeviceAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlBoxFourDeviceAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('Hover', value, AtrcControlBoxFourDeviceAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlBoxFourDeviceAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetTab('ParentHover', value, AtrcControlBoxFourDeviceAllowedKeys));
        }
      });
    }
    return tabs;
  }, []);
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
          return setTabAttr(newVal, tab);
        },
        tab: tab,
        key: iDx
      }, defaultProps));
    });
  });
};
export default AtrcControlBoxFourDeviceTab;
//# sourceMappingURL=index.js.map