"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactPortal = require("react-portal");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "position"];
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Inbuilt*/
var AtrcWrapFloating = function AtrcWrapFloating(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$position = props.position,
    position = _props$position === void 0 ? 'bottom-right' : _props$position,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var Position = function Position() {
    switch (position) {
      case 'bottom-right':
        return 'br';
      case 'bottom-left':
        return 'bl';
      case 'top-right':
        return 'tr';
      case 'top-left':
        return 'tl';
    }
  };
  return /*#__PURE__*/React.createElement(_reactPortal.Portal, null, /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
    className: (0, _classnames.default)(className, position ? (0, _prefixVars.default)('wrp-flt-') + Position() : '')
  })));
};
var _default = exports.default = AtrcWrapFloating;
//# sourceMappingURL=index.js.map