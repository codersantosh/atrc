/*Value Structure

Type Object
{
    "normal":"",
    "hover":"",
}

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlDropdownColor from '../control-dropdown-color';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlDropdownColorTab = function AtrcControlDropdownColorTab(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Color', 'atrc-prefix-atrc') : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    return !!value[tab];
  };
  var resetTab = function resetTab(tab) {
    var valueCloned = cloneDeep(value);
    delete valueCloned[tab];
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
      hasValue: hasTabValue('normal'),
      onDeselect: function onDeselect() {
        return resetTab('normal');
      }
    });
  }
  if (allowedTabs.includes('hover')) {
    AllTabs.push({
      name: 'hover',
      title: __('Hover', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('hover'),
      onDeselect: function onDeselect() {
        return resetTab('hover');
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-range-tab'), className, variant ? AtrcPrefix('ctrl-range-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
        label: '',
        value: value && value[tab],
        onChange: function onChange(newVal) {
          return setAttr(newVal, tab);
        },
        key: iDx
      });
    });
  });
};
export default AtrcControlDropdownColorTab;
//# sourceMappingURL=index.js.map