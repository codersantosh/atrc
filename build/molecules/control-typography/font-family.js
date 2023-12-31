"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _select = _interopRequireDefault(require("../../atoms/select"));
var _options = require("./options");
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*WordPress*/

/*Inbuilt*/

/*Library*/

/*Local Components*/
var FontFamily = function FontFamily(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    google = _ref.google,
    custom = _ref.custom;
  var GoogleFontsOptions = (0, _element.useMemo)(function () {
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
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Font family', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.fntFam,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'fntFam');
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, (0, _i18n.__)('Default', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement("optgroup", {
    label: (0, _i18n.__)('System fonts', 'atrc-prefix-atrc')
  }, _options.SystemFontTypeList.map(function (font) {
    return /*#__PURE__*/React.createElement("option", {
      key: font.value,
      value: font.value
    }, font.label);
  })), GoogleFontsOptions ? /*#__PURE__*/React.createElement("optgroup", {
    label: (0, _i18n.__)('Google fonts', 'atrc-prefix-atrc')
  }, GoogleFontsOptions.map(function (font) {
    return /*#__PURE__*/React.createElement("option", {
      key: font.value,
      value: font.value
    }, font.label);
  })) : null, custom && (0, _lodash.isArray)(custom) && custom.length ? /*#__PURE__*/React.createElement("optgroup", {
    label: (0, _i18n.__)('Custom fonts', 'atrc-prefix-atrc')
  }, custom.map(function (font) {
    return /*#__PURE__*/React.createElement("option", {
      key: font.value,
      value: font.value
    }, font.label);
  })) : null));
};
var _default = exports.default = FontFamily;
//# sourceMappingURL=font-family.js.map