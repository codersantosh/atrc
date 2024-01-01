/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import { SystemFontTypeList } from './options';
import AtrcPanelRow from '../panel-row';

/*Library*/
import classnames from 'classnames';
import { isArray } from 'lodash';

/*Local Components*/
var FontFamily = function FontFamily(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    google = _ref.google,
    custom = _ref.custom;
  var GoogleFontsOptions = useMemo(function () {
    if (!google) {
      return null;
    }
    return google.map(function (font) {
      return {
        label: font.family,
        value: font.family
      };
    });
  }, [google]);
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Font family', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.fntFam,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'fntFam');
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, __('Default', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("optgroup", {
    label: __('System fonts', 'atrc-prefix-atrc')
  }, SystemFontTypeList().map(function (font) {
    return /*#__PURE__*/React.createElement("option", {
      key: font.value,
      value: font.value
    }, font.label);
  })), GoogleFontsOptions ? /*#__PURE__*/React.createElement("optgroup", {
    label: __('Google fonts', 'atrc-prefix-atrc')
  }, GoogleFontsOptions.map(function (font) {
    return /*#__PURE__*/React.createElement("option", {
      key: font.value,
      value: font.value
    }, font.label);
  })) : null, custom && isArray(custom) && custom.length ? /*#__PURE__*/React.createElement("optgroup", {
    label: __('Custom fonts', 'atrc-prefix-atrc')
  }, custom.map(function (font) {
    return /*#__PURE__*/React.createElement("option", {
      key: font.value,
      value: font.value
    }, font.label);
  })) : null));
};
export default FontFamily;
//# sourceMappingURL=font-family.js.map