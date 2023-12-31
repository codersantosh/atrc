"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _bs = require("react-icons/bs");
/*WordPress*/

/*Library*/

/* Align Options*/
var TextAlignOptions = [{
  label: (0, _i18n.__)('Left', 'atrc-prefix-atrc'),
  value: 'l',
  icon: _bs.BsTextLeft,
  iconType: 'bootstrap'
}, {
  label: (0, _i18n.__)('Justify', 'atrc-prefix-atrc'),
  value: 'jfy',
  icon: _bs.BsJustify,
  iconType: 'bootstrap'
}, {
  label: (0, _i18n.__)('Center', 'atrc-prefix-atrc'),
  value: 'ctr',
  icon: _bs.BsTextCenter,
  iconType: 'bootstrap'
}, {
  label: (0, _i18n.__)('Right', 'atrc-prefix-atrc'),
  value: 'r',
  icon: _bs.BsTextRight,
  iconType: 'bootstrap'
}];
var _default = exports.default = TextAlignOptions;
//# sourceMappingURL=options.js.map