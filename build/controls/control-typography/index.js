var _excluded = ["value", "label", "onChange", "variant", "className", "google", "custom", "allowedOptions"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
    "xsFntSz":"",
    "smFntSz":"",
    "smFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",

    "fntFam": "",
    "fntWt": "",
    "fntSty": "",
    "txtTf": "",
    "txtDec": "",

    "xsLnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",

    "xsLtrSp":"",
    "smLtrSp":"",
    "mdLtrSp":"",
    "lgLtrSp":"",
    "xlLtrSp":"",
    "xxlLtrSp":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { forEach, isArray, isEmpty, map, cloneDeep } from 'lodash';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import { AtrcUcFirst } from '../../utils/string';
import { AtrcHasDeviceValues, AtrcHasValueKey, AtrcResetDevices, AtrcResetValueKey } from '../../utils/object-values-with-devices';

/*Internal*/
import FontSize from './font-size';
import FontFamily from './font-family';
import FontWeight from './font-weight';
import FontStyle from './font-style';
import TextDecoration from './text-decoration';
import TextTransform from './text-transform';
import LineHeight from './line-height';
import LetterSpacing from './letter-spacing';

/* Local */
export var AtrcControlTypographyAllowedKeys = ['xsFntSz', 'smFntSz', 'mdFntSz', 'lgFntSz', 'xlFntSz', 'xxlFntSz', 'fntFam', 'fntWt', 'fntSty', 'txtDec', 'txtTf', 'xsLnH', 'smLnH', 'mdLnH', 'lgLnH', 'xlLnH', 'xxlLnH', 'xsLtrSp', 'smLtrSp', 'mdLtrSp', 'lgLtrSp', 'xlLtrSp', 'xxlLtrSp'];
var AtrcControlTypography = function AtrcControlTypography(props) {
  var value = props.value,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Typography', 'atrc-prefix-atrc') : _props$label,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    google = props.google,
    custom = props.custom,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var resetAll = function resetAll() {
    _onChange({});
  };
  var AllTabs = [];
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontSize')) {
    AllTabs.push({
      name: 'fntSz',
      title: __('Font size', 'atrc-prefix-atrc'),
      hasValue: AtrcHasDeviceValues(value, 'fntSz'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetDevices(value, 'fntSz'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontFamily')) {
    AllTabs.push({
      name: 'fntFam',
      title: __('Font family', 'atrc-prefix-atrc'),
      hasValue: AtrcHasValueKey(value, 'fntFam'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetValueKey(value, 'fntFam'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontWeight')) {
    AllTabs.push({
      name: 'fntWt',
      title: __('Font weight', 'atrc-prefix-atrc'),
      hasValue: AtrcHasValueKey(value, 'fntWt'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetValueKey(value, 'fntWt'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontStyle')) {
    AllTabs.push({
      name: 'fntSty',
      title: __('Font style', 'atrc-prefix-atrc'),
      hasValue: AtrcHasValueKey(value, 'fntSty'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetValueKey(value, 'fntSty'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('textDecoration')) {
    AllTabs.push({
      name: 'txtDec',
      title: __('Text decoration', 'atrc-prefix-atrc'),
      hasValue: AtrcHasValueKey(value, 'txtDec'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetValueKey(value, 'txtDec'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('textTransform')) {
    AllTabs.push({
      name: 'txtTf',
      title: __('Text transform', 'atrc-prefix-atrc'),
      hasValue: AtrcHasValueKey(value, 'txtTf'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetValueKey(value, 'txtTf'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('lineHeight')) {
    AllTabs.push({
      name: 'lnH',
      title: __('Line height', 'atrc-prefix-atrc'),
      hasValue: AtrcHasDeviceValues(value, 'lnH'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetDevices(value, 'lnH'));
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('letterSpacing')) {
    AllTabs.push({
      name: 'ltrSp',
      title: __('Letter spacing', 'atrc-prefix-atrc'),
      hasValue: AtrcHasDeviceValues(value, 'ltrSp'),
      onDeselect: function onDeselect() {
        return _onChange(AtrcResetDevices(value, 'ltrSp'));
      }
    });
  }
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    if (!valueCloned) {
      valueCloned = {};
    }
    valueCloned[type] = newVal;
    _onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-typ'), className, variant ? AtrcPrefix('ctrl-typ') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, defaultProps), function (activeItems) {
    return map(activeItems, function (tab, iDx) {
      if ('fntSz' === tab) {
        return /*#__PURE__*/React.createElement(FontSize, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('fntFam' === tab) {
        return /*#__PURE__*/React.createElement(FontFamily, {
          value: value,
          onChange: setAttr,
          google: google,
          custom: custom,
          key: iDx
        });
      }
      if ('fntWt' === tab) {
        return /*#__PURE__*/React.createElement(FontWeight, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('fntSty' === tab) {
        return /*#__PURE__*/React.createElement(FontStyle, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('txtDec' === tab) {
        return /*#__PURE__*/React.createElement(TextDecoration, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('txtTf' === tab) {
        return /*#__PURE__*/React.createElement(TextTransform, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('lnH' === tab) {
        return /*#__PURE__*/React.createElement(LineHeight, {
          value: value,
          onChange: setAttr,
          key: iDx
        });
      }
      if ('ltrSp' === tab) {
        return /*#__PURE__*/React.createElement(LetterSpacing, {
          value: value,
          onChange: function onChange(newVal) {
            var valueCloned = cloneDeep(value);
            if (!valueCloned) {
              valueCloned = {};
            }
            var key = 'ltrSp';
            if (newVal && !isEmpty(newVal)) {
              forEach(newVal, function (item, itemKey) {
                var deviceKey;
                deviceKey = itemKey + AtrcUcFirst(key);
                valueCloned[deviceKey] = item;
              });
            }
            _onChange(valueCloned);
          },
          key: iDx
        });
      }
    });
  });
};
export default AtrcControlTypography;
//# sourceMappingURL=index.js.map