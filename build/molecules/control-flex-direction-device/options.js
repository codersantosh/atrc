"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
/*WordPress*/

/*Local Components*/
var FlexDirectionOptions = [{
  label: (0, _i18n.__)('Horizontal(Row)', 'atrc-prefix-atrc'),
  value: 'row',
  icon: _icons.arrowRight
}, {
  label: (0, _i18n.__)('Vertical(Column)', 'atrc-prefix-atrc'),
  value: 'col',
  icon: _icons.arrowDown
}, {
  label: (0, _i18n.__)('Row reverse', 'atrc-prefix-atrc'),
  value: 'rowRev',
  icon: _icons.arrowLeft
}, {
  label: (0, _i18n.__)('Column reverse', 'atrc-prefix-atrc'),
  value: 'colRev',
  icon: _icons.arrowUp
}];
var _default = exports.default = FlexDirectionOptions;
//# sourceMappingURL=options.js.map