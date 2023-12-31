function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
const RenderTabPanel = ({
  label = __('Enter value'),
  value,
  onChange,
  tab = 'normal',
  ...defaultProps
}) => {
  return /*#__PURE__*/React.createElement(AtrcControlBoxFourDevice, _extends({
    label: label,
    value: AtrcGetTabValues(value, tab, AtrcControlBoxFourDeviceAllowedKeys),
    onChange: onChange
  }, defaultProps));
};
const AtrcControlBoxFourDeviceTab = props => {
  const {
    value = {},
    label = '',
    onChange = () => {},
    variant = '',
    className = '',
    allowedTabs = ['normal', 'hover'],
    ...defaultProps
  } = props;
  const setTabAttr = (newVal, tab) => {
    onChange(AtrcUpdateTabValues(newVal, tab, value, AtrcControlBoxFourDeviceAllowedKeys));
  };
  const AllTabs = useMemo(() => {
    const tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('normal', value, AtrcControlBoxFourDeviceAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('normal', value, AtrcControlBoxFourDeviceAllowedKeys))
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('Hover', value, AtrcControlBoxFourDeviceAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('Hover', value, AtrcControlBoxFourDeviceAllowedKeys))
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: AtrcHasTabValues('ParentHover', value, AtrcControlBoxFourDeviceAllowedKeys),
        onDeselect: () => onChange(AtrcResetTab('ParentHover', value, AtrcControlBoxFourDeviceAllowedKeys))
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-box-four-device-tab'), className, variant ? AtrcPrefix('ctrl-box-four-device-tab') + '-' + variant : ''),
    label: label,
    resetAll: () => onChange(AtrcResetTabs(value, AtrcControlBoxFourDeviceAllowedKeys)),
    allowTabs: true,
    tools: AllTabs
  }, activeItems => map(activeItems, (tab, iDx) => /*#__PURE__*/React.createElement(RenderTabPanel, _extends({
    value: value,
    onChange: newVal => setTabAttr(newVal, tab),
    tab: tab,
    key: iDx
  }, defaultProps))));
};
export default AtrcControlBoxFourDeviceTab;
//# sourceMappingURL=index.js.map