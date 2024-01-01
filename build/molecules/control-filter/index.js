/*Attributes Structure
Type Object
{
    blr : '',
    brgtNess : '',
    ctrs : '',
    grayScl : '',
    hueRot : '',
    inv : '',
    opa : '',
    sart : '',
    sepia : '',

    hSdw : '',
    vSdw : '',
    sdwBlr : '',
    sdwSprd : '',
    sdwCl : ''
}
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcLabel from '../../atoms/label';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';
import AtrcRange from '../../atoms/range';
import AtrcPanelTools from '../panel-tools';
import AtrcPanelRow from '../panel-row';
import AtrcControlDropdownColor from '../control-dropdown-color';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { AtrcHasValueKey } from './../../utils/object-values-with-devices';
import { AtrcResetValueKey } from '../../utils/object-values-with-devices';

/*Local*/
export var AtrcControlFilterAllowedKeys = ['blr', 'brgtNess', 'ctrs', 'grayScl', 'hueRot', 'inv', 'opa', 'sart', 'sepia', 'hSdw', 'vSdw', 'sdwBlr', 'sdwSprd', 'sdwCl'];
var AtrcControlFilter = function AtrcControlFilter(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions;
  var hSdw = value.hSdw,
    vSdw = value.vSdw,
    sdwBlr = value.sdwBlr,
    sdwSprd = value.sdwSprd,
    sdwCl = value.sdwCl;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetDropShadow = function resetDropShadow() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.hSdw;
    delete valueCloned.vSdw;
    delete valueCloned.sdwBlr;
    delete valueCloned.sdwSprd;
    delete valueCloned.sdwCl;
    onChange(valueCloned);
  };
  var hasDropShadow = function hasDropShadow() {
    if (!value || isEmpty(value)) {
      return false;
    }
    return !!(hSdw || vSdw || sdwBlr || sdwSprd || sdwCl);
  };
  var AllTabs = useMemo(function () {
    var tabsOptions = [];
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('blur')) {
      tabsOptions.push({
        name: 'blr',
        title: __('Blur', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'blr'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'blr'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('brightness')) {
      tabsOptions.push({
        name: 'brgtNess',
        title: __('Brightness', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'brgtNess'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'brgtNess'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('contrast')) {
      tabsOptions.push({
        name: 'ctrs',
        title: __('Contrast', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'ctrs'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'ctrs'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('grayscale')) {
      tabsOptions.push({
        name: 'grayScl',
        title: __('Grayscale', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'grayScl'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'grayScl'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('hueRotate')) {
      tabsOptions.push({
        name: 'hueRot',
        title: __('Hue rotate', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'hueRot'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'hueRot'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('invert')) {
      tabsOptions.push({
        name: 'inv',
        title: __('Invert', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'inv'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'inv'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('opacity')) {
      tabsOptions.push({
        name: 'opa',
        title: __('Opacity', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'opa'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'opa'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('saturate')) {
      tabsOptions.push({
        name: 'sart',
        title: __('Saturate', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'sart'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'sart'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('sepia')) {
      tabsOptions.push({
        name: 'sepia',
        title: __('Sepia', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'sepia'),
        onDeselect: function onDeselect() {
          return onChange(AtrcResetValueKey(value, 'sepia'));
        }
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('dropShadow')) {
      tabsOptions.push({
        name: 'dropSdw',
        title: __('Drop shadow', 'atrc-prefix-atrc'),
        hasValue: hasDropShadow(),
        onDeselect: function onDeselect() {
          return resetDropShadow();
        }
      });
    }
    return tabsOptions;
  }, []);
  var resetAll = function resetAll() {
    onChange({});
  };
  if (!AllTabs.length) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-fl'), className, variant ? AtrcPrefix('ctrl-fl') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('dropSdw' === tab) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames(AtrcPrefix('ctrl-fl-drop-sdw'), 'at-m', 'at-flx-col', 'at-al-itm-st', 'at-jfy-cont-st '),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Drop shadow', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcRange, {
          label: __('H-shadow', 'atrc-prefix-atrc'),
          help: __('px', 'atrc-prefix-atrc'),
          value: hSdw,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'hSdw');
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcRange, {
          label: __('V-shadow', 'atrc-prefix-atrc'),
          help: __('px', 'atrc-prefix-atrc'),
          value: vSdw,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'vSdw');
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcRange, {
          label: __('Shadow blur', 'atrc-prefix-atrc'),
          help: __('px', 'atrc-prefix-atrc'),
          value: sdwBlr,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'sdwBlr');
          }
        })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m')
        }, /*#__PURE__*/React.createElement(AtrcResetWrap, {
          className: classnames(AtrcPrefix('lbl-rst'))
        }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
          label: __('Shadow color', 'atrc-prefix-atrc'),
          value: sdwCl,
          onChange: function onChange(newVal) {
            return setAttr(newVal, 'sdwCl');
          }
        }))));
      }
      var tabLabel = '';
      var helpTxt = '';
      switch (tab) {
        case 'blr':
          tabLabel = __('Blur', 'atrc-prefix-atrc');
          helpTxt = __('px', 'atrc-prefix-atrc');
          break;
        case 'brgtNess':
          tabLabel = __('Brightness', 'atrc-prefix-atrc');
          break;
        case 'ctrs':
          tabLabel = __('Contrast', 'atrc-prefix-atrc');
          break;
        case 'grayScl':
          tabLabel = __('Grayscale', 'atrc-prefix-atrc');
          break;
        case 'hueRot':
          tabLabel = __('Hue rotate', 'atrc-prefix-atrc');
          helpTxt = __('deg', 'atrc-prefix-atrc');
          break;
        case 'inv':
          tabLabel = __('Invert', 'atrc-prefix-atrc');
          break;
        case 'opa':
          tabLabel = __('Opacity', 'atrc-prefix-atrc');
          break;
        case 'sart':
          tabLabel = __('Saturate', 'atrc-prefix-atrc');
          break;
        case 'sepia':
          tabLabel = __('Sepia', 'atrc-prefix-atrc');
          break;
        default:
          break;
      }
      if (tabLabel) {
        return /*#__PURE__*/React.createElement(AtrcPanelRow, {
          className: classnames('at-m'),
          key: iDx
        }, /*#__PURE__*/React.createElement(AtrcRange, {
          label: tabLabel,
          help: helpTxt || __('%', 'atrc-prefix-atrc'),
          value: value[tab],
          onChange: function onChange(newVal) {
            return setAttr(newVal, tab);
          }
        }));
      }
      return null;
    });
  });
};
export default AtrcControlFilter;
//# sourceMappingURL=index.js.map