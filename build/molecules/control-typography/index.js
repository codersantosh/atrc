function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    "fntSz":"",
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

    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",

    "ltrSp":"",
    "smLtrSp":"",
    "mdLtrSp":"",
    "lgLtrSp":"",
    "xlLtrSp":"",
    "xxlLtrSp":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { forEach, isArray, isEmpty, map } from 'lodash';

/*Inbuilt*/
import AtrcPanelTools from '../panel-tools';
import FontSize from './font-size';
import FontFamily from './font-family';
import FontWeight from './font-weight';
import FontStyle from './font-style';
import TextDecoration from './text-decoration';
import TextTransform from './text-transform';
import LineHeight from './line-height';
import LetterSpacing from './letter-spacing';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { AtrcUcFirst } from './../../utils/string';
import { AtrcHasDeviceValues, AtrcHasValueKey, AtrcResetDevices, AtrcResetValueKey } from './../../utils/object-values-with-devices';

/*Local Components*/
export const AtrcControlTypographyAllowedKeys = ['fntSz', 'smFntSz', 'mdFntSz', 'lgFntSz', 'xlFntSz', 'xxlFntSz', 'fntFam', 'fntWt', 'fntSty', 'txtDec', 'txtTf', 'lnH', 'smLnH', 'mdLnH', 'lgLnH', 'xlLnH', 'xxlLnH', 'ltrSp', 'smLtrSp', 'mdLtrSp', 'lgLtrSp', 'xlLtrSp', 'xxlLtrSp'];
const AtrcControlTypography = props => {
  const {
    value,
    label,
    onChange = () => {},
    variant = '',
    className = '',
    google,
    custom,
    allowedOptions = true,
    //true means all options allowed
    ...defaultProps
  } = props;
  const resetAll = () => {
    onChange({});
  };
  const AllTabs = useMemo(() => {
    const tabsOptions = [];
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontSize')) {
      tabsOptions.push({
        name: 'fntSz',
        title: __('Font size', 'atrc-prefix-atrc'),
        hasValue: AtrcHasDeviceValues(value, 'fntSz'),
        onDeselect: () => onChange(AtrcResetDevices(value, 'fntSz'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontFamily')) {
      tabsOptions.push({
        name: 'fntFam',
        title: __('Font family', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'fntFam'),
        onDeselect: () => onChange(AtrcResetValueKey(value, 'fntFam'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontWeight')) {
      tabsOptions.push({
        name: 'fntWt',
        title: __('Font weight', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'fntWt'),
        onDeselect: () => onChange(AtrcResetValueKey(value, 'fntWt'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('fontStyle')) {
      tabsOptions.push({
        name: 'fntSty',
        title: __('Font style', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'fntSty'),
        onDeselect: () => onChange(AtrcResetValueKey(value, 'fntSty'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('textDecoration')) {
      tabsOptions.push({
        name: 'txtDec',
        title: __('Text decoration', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'txtDec'),
        onDeselect: () => onChange(AtrcResetValueKey(value, 'txtDec'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('textTransform')) {
      tabsOptions.push({
        name: 'txtTf',
        title: __('Text transform', 'atrc-prefix-atrc'),
        hasValue: AtrcHasValueKey(value, 'txtTf'),
        onDeselect: () => onChange(AtrcResetValueKey(value, 'txtTf'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('lineHeight')) {
      tabsOptions.push({
        name: 'lnH',
        title: __('Line height', 'atrc-prefix-atrc'),
        hasValue: AtrcHasDeviceValues(value, 'lnH'),
        onDeselect: () => onChange(AtrcResetDevices(value, 'lnH'))
      });
    }
    if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('letterSpacing')) {
      tabsOptions.push({
        name: 'ltrSp',
        title: __('Letter spacing', 'atrc-prefix-atrc'),
        hasValue: AtrcHasDeviceValues(value, 'ltrSp'),
        onDeselect: () => onChange(AtrcResetDevices(value, 'ltrSp'))
      });
    }
    return tabsOptions;
  }, []);
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcPanelTools, _extends({
    className: classnames(AtrcPrefix('ctrl-typ'), className, variant ? AtrcPrefix('ctrl-typ') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, defaultProps), activeItems => map(activeItems, (tab, iDx) => {
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
        onChange: newVal => {
          const valueCloned = Object.assign({}, value);
          const key = 'ltrSp';
          if (newVal && !isEmpty(newVal)) {
            forEach(newVal, (item, itemKey) => {
              let deviceKey;
              if (itemKey === 'xs') {
                deviceKey = key;
              } else {
                deviceKey = itemKey + AtrcUcFirst(key);
              }
              valueCloned[deviceKey] = item;
            });
          }
          onChange(valueCloned);
        },
        key: iDx
      });
    }
  }));
};
export default AtrcControlTypography;
//# sourceMappingURL=index.js.map