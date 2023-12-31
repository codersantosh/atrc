"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlBorderRadiusAllowedKeys = void 0;
var _blockEditor = require("@wordpress/block-editor");
var _classnames = _interopRequireDefault(require("classnames"));
var _resetButtonIcon = _interopRequireWildcard(require("../../atoms/reset-button-icon"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["variant", "className", "values", "onChange"];
/*Attributes Structure
Type Object or string
{
    ''(string)
    =======OR==========
    tL: '',
    tR: '',
    bL: '',
    bR: '',
}
* */
/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlBorderRadiusAllowedKeys = exports.AtrcControlBorderRadiusAllowedKeys = ['tR', 'tL', 'bL', 'bR'];
var RenderBorderRadiusControl = function RenderBorderRadiusControl(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    values = props.values,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var newObj;
  if (_typeof(values) === 'object') {
    newObj = {
      topRight: values.tR,
      topLeft: values.tL,
      bottomLeft: values.bL,
      bottomRight: values.bR
    };
  } else {
    newObj = values;
  }
  return /*#__PURE__*/React.createElement(_blockEditor.__experimentalBorderRadiusControl, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-bdr-rad'), className, variant ? (0, _prefixVars.default)('ctrl-bdr-rad') + '-' + variant : ''),
    values: newObj,
    onChange: function onChange(newControl) {
      var newValues;
      if (_typeof(newControl) === 'object') {
        newValues = {
          tR: newControl.topRight,
          tL: newControl.topLeft,
          bL: newControl.bottomLeft,
          bR: newControl.bottomRight
        };
      } else {
        newValues = newControl;
      }
      _onChange(newValues);
    }
  }, defaultProps));
};
var AtrcControlBorderRadius = function AtrcControlBorderRadius(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$values = props.values,
    values = _props$values === void 0 ? '' : _props$values,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(_resetButtonIcon.AtrcResetWrap, {
      className: (0, _classnames.default)((0, _prefixVars.default)('bdr-rad-rst'))
    }, /*#__PURE__*/React.createElement(RenderBorderRadiusControl, props), /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
      value: values,
      onClick: function onClick() {
        return onChange({});
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderBorderRadiusControl, props);
};
var _default = exports.default = AtrcControlBorderRadius;
//# sourceMappingURL=index.js.map