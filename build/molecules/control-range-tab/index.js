function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    "normal":"",
    "hover":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcRange from '../../atoms/range';
import AtrcPanelTools from '../panel-tools';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcControlRangeTab = function AtrcControlRangeTab(props) {
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
    _props$inputProps = props.inputProps,
    inputProps = _props$inputProps === void 0 ? {} : _props$inputProps;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
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
    var valueCloned = Object.assign({}, value);
    delete valueCloned[tab];
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var AllTabs = useMemo(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: __('Normal', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('normal'),
        onDeselect: function onDeselect() {
          return resetTab('normal');
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'hover',
        title: __('Hover', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('hover'),
        onDeselect: function onDeselect() {
          return resetTab('hover');
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'parentHover',
        title: __('Parent hover', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('parentHover'),
        onDeselect: function onDeselect() {
          return resetTab('parentHover');
        }
      });
    }
    return tabs;
  }, []);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-range-tab'), className, variant ? AtrcPrefix('ctrl-range-tab') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    allowTabs: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(AtrcRange, _extends({}, inputProps, {
        label: __('Enter value', 'atrc-prefix-atrc'),
        value: value && value[tab],
        onChange: function onChange(newVal) {
          return setAttr(newVal, tab);
        },
        key: iDx
      }));
    });
  });
};
export default AtrcControlRangeTab;
//# sourceMappingURL=index.js.map