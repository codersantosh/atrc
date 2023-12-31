"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcProgressSvgGradientColor = void 0;
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../wrap"));
var _isGradientColor = _interopRequireWildcard(require("../../utils/is-gradient-color"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["className", "type", "variant", "barColor", "uniqueId", "hasAnimation", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*WordPress*/ /*Library*/ /*Inbuilt*/
/*Local Components*/
var AtrcProgressSvgGradientColor = exports.AtrcProgressSvgGradientColor = function AtrcProgressSvgGradientColor(_ref) {
  var gradient = _ref.gradient,
    uniqueId = _ref.uniqueId;
  // Extracting the degree value
  if (!gradient.includes('linear') || !gradient.match(/(\d+)deg/)) {
    return null;
  }
  var deg = gradient.match(/(\d+)deg/)[1];

  // Extracting the color stops
  var colorStopRegex = /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\s*\)\s*(\d+%)/g;
  var colorStops = [];
  var match;
  while ((match = colorStopRegex.exec(gradient)) !== null) {
    var _match = match,
      _match2 = _slicedToArray(_match, 6),
      r = _match2[1],
      g = _match2[2],
      b = _match2[3],
      a = _match2[4],
      offset = _match2[5];
    var colorValues = [r, g, b];
    if (a !== undefined) {
      colorValues.push(a);
    }
    colorStops.push({
      offset: offset,
      color: "rgba(".concat(colorValues.join(', '), ")")
    });
  }

  // Creating the object.
  var gradientObject = {
    deg: "rotate(".concat(deg, ")"),
    colors: colorStops
  };
  return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: 'at-lg-' + uniqueId,
    gradientTransform: "".concat(gradientObject.deg)
  }, gradientObject.colors.map(function (item, iDx) {
    return /*#__PURE__*/React.createElement("stop", {
      key: iDx,
      offset: item.offset,
      stopColor: item.color
    });
  })));
};
var AtrcProgress = function AtrcProgress(props, ref) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$barColor = props.barColor,
    barColor = _props$barColor === void 0 ? '' : _props$barColor,
    _props$uniqueId = props.uniqueId,
    uniqueId = _props$uniqueId === void 0 ? '' : _props$uniqueId,
    _props$hasAnimation = props.hasAnimation,
    hasAnimation = _props$hasAnimation === void 0 ? '' : _props$hasAnimation,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if ('cir' === type) {
    return /*#__PURE__*/React.createElement(_wrap.default, _extends({
      className: (0, _classnames.default)('at-prog', 'at-prog-cir', className, variant ? (0, _prefixVars.default)('prog') + '-' + variant : ''),
      ref: ref
    }, defaultProps), /*#__PURE__*/React.createElement("svg", {
      className: "at-svg at-w at-h",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-1 -1 34 34"
    }, (0, _isGradientColor.AtrcIsLinearGradientColor)(barColor) ? /*#__PURE__*/React.createElement(AtrcProgressSvgGradientColor, {
      gradient: barColor,
      uniqueId: uniqueId
    }) : null, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.9155",
      className: (0, _classnames.default)('at-svg-cir', 'at-prog-cir__trk')
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.9155",
      className: (0, _classnames.default)('at-svg-cir', 'at-prog-cir__bar', hasAnimation ? 'at-prog-cir__bar-ani' : null)
    })), children ? /*#__PURE__*/React.createElement(_wrap.default, {
      className: "at-prog-cir-txt at-pos"
    }, children) : null);
  }
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)('at-prog', 'at-prog-hor', className, variant ? (0, _prefixVars.default)('prog') + '-' + variant : ''),
    ref: ref
  }, defaultProps), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-prog-bar at-ovf at-h at-w at-trs', (0, _isGradientColor.default)(barColor) ? 'at-bg-img' : 'at-bg-cl')
  }, children));
};
var _default = exports.default = (0, _element.forwardRef)(AtrcProgress);
//# sourceMappingURL=index.js.map