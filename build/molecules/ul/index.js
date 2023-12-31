"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Library*/

/*Inbuilt*/

var AtrcUl = function AtrcUl(_ref) {
  var className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant,
    _ref$column = _ref.column,
    column = _ref$column === void 0 ? '' : _ref$column,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("ul", {
    className: (0, _classnames.default)((0, _prefixVars.default)('ul'), className, column ? (0, _prefixVars.default)('ul-col') + '-' + column : '', variant ? (0, _prefixVars.default)('ul') + '-' + variant : '')
  }, children);
};
var _default = exports.default = AtrcUl;
//# sourceMappingURL=index.js.map