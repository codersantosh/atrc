"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcControlBorderAllowedKeys = void 0;
exports.AtrcControlBorderColorShorthand = AtrcControlBorderColorShorthand;
exports.AtrcControlBorderStyleShorthand = AtrcControlBorderStyleShorthand;
exports.AtrcControlBorderWidthShorthand = AtrcControlBorderWidthShorthand;
exports.default = void 0;
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _resetButtonIcon = _interopRequireWildcard(require("../../atoms/reset-button-icon"));
var _css = require("../control-box-four/css");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["variant", "className", "value", "onChange"];
/*Values Structure
Type Object
{
    cl: '#72aee6',
    sty: 'solid',
    w: '1px'
    =======OR==========
	tCl: '#72aee6',
    tSty: 'solid',
    tW: '1px'

	rCl: '#72aee6',
    rSty: 'solid',
    rW: '1px'

	bCl: '#72aee6',
    bSty: 'solid',
    bW: '1px'

	lCl: '#72aee6',
    lSty: 'solid',
    lW: '1px'
}
* */
/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var AtrcControlBorderAllowedKeys = exports.AtrcControlBorderAllowedKeys = ['cl', 'sty', 'w', 'tCl', 'tSty', 'tW', 'rCl', 'rSty', 'rW', 'bCl', 'bSty', 'bW', 'lCl', 'lSty', 'lW'];
function AtrcControlBorderColorShorthand(t, r, b, l) {
  return (0, _css.AtrcControlBoxFourShorthandCssOnly)({
    t: t,
    r: r,
    b: b,
    l: l
  }, '', 'transparent');
}
function AtrcControlBorderStyleShorthand(t, r, b, l) {
  return (0, _css.AtrcControlBoxFourShorthandCssOnly)({
    t: t,
    r: r,
    b: b,
    l: l
  }, '', 'none');
}
function AtrcControlBorderWidthShorthand(t, r, b, l) {
  return (0, _css.AtrcControlBoxFourShorthandCssOnly)({
    t: t,
    r: r,
    b: b,
    l: l
  }, '');
}
var RenderBorderBoxControl = function RenderBorderBoxControl(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    value = props.value,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);

  /*Color*/
  var newObj = {};
  if (value.cl || value.sty || value.w) {
    newObj.color = value.cl;
    newObj.style = value.sty;
    newObj.width = value.w;
  } else {
    newObj.top = {
      color: value.tCl,
      style: value.tSty,
      width: value.tW
    };
    newObj.right = {
      color: value.rCl,
      style: value.rSty,
      width: value.rW
    };
    newObj.bottom = {
      color: value.bCl,
      style: value.bSty,
      width: value.bW
    };
    newObj.left = {
      color: value.lCl,
      style: value.lSty,
      width: value.lW
    };
  }
  return /*#__PURE__*/React.createElement(_components.__experimentalBorderBoxControl, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-bdr'), 'at-flx-grw-1', className, variant ? (0, _prefixVars.default)('ctrl-bdr') + '-' + variant : ''),
    value: newObj,
    onChange: function onChange(newControl) {
      var newValues = {};
      if (newControl.color || newControl.style || newControl.width) {
        newValues.cl = newControl.color;
        newValues.sty = newControl.style;
        newValues.w = newControl.width;
      } else {
        if (newControl.top) {
          newValues.tCl = newControl.top.color;
          newValues.tSty = newControl.top.style;
          newValues.tW = newControl.top.width;
        }
        if (newControl.right) {
          newValues.rCl = newControl.right.color;
          newValues.rSty = newControl.right.style;
          newValues.rW = newControl.right.width;
        }
        if (newControl.bottom) {
          newValues.bCl = newControl.bottom.color;
          newValues.bSty = newControl.bottom.style;
          newValues.bW = newControl.bottom.width;
        }
        if (newControl.left) {
          newValues.lCl = newControl.left.color;
          newValues.lSty = newControl.left.style;
          newValues.lW = newControl.left.width;
        }
      }
      _onChange(newValues);
    }
  }, defaultProps));
};
var AtrcControlBorder = function AtrcControlBorder(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? undefined : _props$defaultValue,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(_resetButtonIcon.AtrcResetWrap, {
      className: (0, _classnames.default)((0, _prefixVars.default)('bdr-rst'))
    }, /*#__PURE__*/React.createElement(RenderBorderBoxControl, props), /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
      defaultValue: defaultValue,
      value: value,
      onClick: function onClick() {
        return onChange({});
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderBorderBoxControl, props);
};
var _default = exports.default = AtrcControlBorder;
//# sourceMappingURL=index.js.map