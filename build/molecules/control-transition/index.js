/*Value Structure
Type Object
{
dur : 0,
tmgFn : '',
dla : 0,
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import AtrcPanelRow from '../panel-row';
import AtrcSelect from '../../atoms/select';
import AtrcRange from '../../atoms/range';
import TimingFunctionsOptions from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcControlTransition = function AtrcControlTransition(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions;
  var dur = value.dur,
    _value$tmgFn = value.tmgFn,
    tmgFn = _value$tmgFn === void 0 ? '' : _value$tmgFn,
    dla = value.dla;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetAttr = function resetAttr(type) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned[type];
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    return !!value[tab];
  };
  var AllTabs = useMemo(function () {
    var tabsOptions = [];
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('duration')) {
      tabsOptions.push({
        name: 'dur',
        title: __('Duration', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('dur'),
        onDeselect: function onDeselect() {
          return resetAttr('dur');
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('timingFunction')) {
      tabsOptions.push({
        name: 'tmgFn',
        title: __('Timing function', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('tmgFn'),
        onDeselect: function onDeselect() {
          return resetAttr('tmgFn');
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('delay')) {
      tabsOptions.push({
        name: 'dla',
        title: __('Delay', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('dla'),
        onDeselect: function onDeselect() {
          return resetAttr('dla');
        }
      });
    }
    return tabsOptions;
  }, [value]);
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-trs'), className, variant ? AtrcPrefix('ctrl-trs') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('dur' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcRange, {
          label: __('Duration', 'atrc-prefix-atrc'),
          help: __('In seconds', 'atrc-prefix-atrc'),
          value: dur,
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          },
          min: 0,
          max: 10,
          step: 0.1
        }));
      }
      if ('tmgFn' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcSelect, {
          label: __('Timing function', 'atrc-prefix-atrc'),
          wrapProps: {
            className: 'at-flx-grw-1'
          },
          value: tmgFn,
          options: TimingFunctionsOptions(),
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          }
        }));
      }
      if ('dla' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcRange, {
          label: __('Delay', 'atrc-prefix-atrc'),
          help: __('In seconds', 'atrc-prefix-atrc'),
          value: dla,
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          },
          min: 0,
          max: 10,
          step: 0.1
        }));
      }
      return null;
    });
  });
};
export default AtrcControlTransition;
//# sourceMappingURL=index.js.map