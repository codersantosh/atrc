"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextTransformList = exports.TextDecorationList = exports.SystemFontTypeList = exports.FontWeightList = exports.FontTypeList = exports.FontStyleList = exports.FontSizeList = void 0;
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
/*WordPress*/

/**
 * Font Type List
 *
 * @type {Array}
 */
var FontTypeList = exports.FontTypeList = [{
  label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: (0, _i18n.__)('System', 'atrc-prefix-atrc'),
  value: 'system'
}, {
  label: (0, _i18n.__)('Google', 'atrc-prefix-atrc'),
  value: 'google'
}];

/**
 * System Font List
 *
 * @type {Array}
 */
var SystemFontTypeList = exports.SystemFontTypeList = [{
  label: (0, _i18n.__)('Arial', 'atrc-prefix-atrc'),
  value: 'Arial'
}, {
  label: (0, _i18n.__)('Tahoma', 'atrc-prefix-atrc'),
  value: 'Tahoma'
}, {
  label: (0, _i18n.__)('Verdana', 'atrc-prefix-atrc'),
  value: 'Verdana'
}, {
  label: (0, _i18n.__)('Helvetica', 'atrc-prefix-atrc'),
  value: 'Helvetica'
}, {
  label: (0, _i18n.__)('Times New Roman', 'atrc-prefix-atrc'),
  value: 'Times New Roman'
}, {
  label: (0, _i18n.__)('Trebuchet MS', 'atrc-prefix-atrc'),
  value: 'Trebuchet MS'
}, {
  label: (0, _i18n.__)('Georgia', 'atrc-prefix-atrc'),
  value: 'Georgia'
}];

/**
 * Font Weight List
 *
 * @type {Array}
 */
var FontWeightList = exports.FontWeightList = [{
  label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
  value: 'normal'
}, {
  label: (0, _i18n.__)('Bold', 'atrc-prefix-atrc'),
  value: 'bold'
}, {
  label: (0, _i18n.__)('100', 'atrc-prefix-atrc'),
  value: '100'
}, {
  label: (0, _i18n.__)('200', 'atrc-prefix-atrc'),
  value: '200'
}, {
  label: (0, _i18n.__)('300', 'atrc-prefix-atrc'),
  value: '300'
}, {
  label: (0, _i18n.__)('400', 'atrc-prefix-atrc'),
  value: '400'
}, {
  label: (0, _i18n.__)('500', 'atrc-prefix-atrc'),
  value: '500'
}, {
  label: (0, _i18n.__)('600', 'atrc-prefix-atrc'),
  value: '600'
}, {
  label: (0, _i18n.__)('700', 'atrc-prefix-atrc'),
  value: '700'
}, {
  label: (0, _i18n.__)('800', 'atrc-prefix-atrc'),
  value: '800'
}, {
  label: (0, _i18n.__)('900', 'atrc-prefix-atrc'),
  value: '900'
}];

/**
 * Text Transform List
 *
 * @type {Array}
 */

var TextTransformList = exports.TextTransformList = [{
  label: (0, _i18n.__)('none', 'atrc-prefix-atrc'),
  value: 'none',
  icon: _icons.reset
}, {
  label: (0, _i18n.__)('Uppercase', 'atrc-prefix-atrc'),
  value: 'uppercase',
  icon: _icons.formatUppercase
}, {
  label: (0, _i18n.__)('Lowercase', 'atrc-prefix-atrc'),
  value: 'lowercase',
  icon: _icons.formatLowercase
}, {
  label: (0, _i18n.__)('Capitalize', 'atrc-prefix-atrc'),
  value: 'capitalize',
  icon: _icons.formatCapitalize
}];

/**
 * Font Style List
 *
 * @type {Array}
 */
var FontStyleList = exports.FontStyleList = [{
  label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
  value: 'normal'
}, {
  label: (0, _i18n.__)('Italic', 'atrc-prefix-atrc'),
  value: 'italic'
}, {
  label: (0, _i18n.__)('Oblique', 'atrc-prefix-atrc'),
  value: 'oblique'
}];

/**
 * Text Decoration List
 *
 * @type {Array}
 */
var TextDecorationList = exports.TextDecorationList = [{
  label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: (0, _i18n.__)('Underline', 'atrc-prefix-atrc'),
  value: 'underline'
}, {
  label: (0, _i18n.__)('Overline', 'atrc-prefix-atrc'),
  value: 'overline'
}, {
  label: (0, _i18n.__)('Line Through', 'atrc-prefix-atrc'),
  value: 'line-through'
}, {
  label: (0, _i18n.__)('None', 'atrc-prefix-atrc'),
  value: 'none'
}];
var FontSizeList = exports.FontSizeList = [{
  name: (0, _i18n.__)('XS', 'atrc-prefix-atrc'),
  slug: 'xs',
  size: '14px'
}, {
  name: (0, _i18n.__)('Small', 'atrc-prefix-atrc'),
  slug: 'small',
  size: '16px'
}, {
  name: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
  slug: 'Normal',
  size: '18px'
}, {
  name: (0, _i18n.__)('Medium', 'atrc-prefix-atrc'),
  slug: 'medium',
  size: '24px'
}, {
  name: (0, _i18n.__)('Large', 'atrc-prefix-atrc'),
  slug: 'large',
  size: '28px'
}];

/*Export Everything*/
//# sourceMappingURL=options.js.map