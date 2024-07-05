var _excluded = ["className", "type", "variant", "barColor", "uniqueId", "hasAnimation", "hasStriped", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcIsGradientColor from '../../utils/is-gradient-color';
import { AtrcIsLinearGradientColor } from '../../utils/is-gradient-color';

/*Local*/
export var AtrcProgressSvgGradientColor = function AtrcProgressSvgGradientColor(_ref) {
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
    id: uniqueId,
    gradientTransform: "".concat(gradientObject.deg)
  }, gradientObject.colors.map(function (item, index) {
    return /*#__PURE__*/React.createElement("stop", {
      key: index,
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
    _props$hasStriped = props.hasStriped,
    hasStriped = _props$hasStriped === void 0 ? '' : _props$hasStriped,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if ('cir' === type) {
    var uniqueIdLocal = 'at-' + uniqueId;
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      className: classnames(AtrcPrefix('prog'), AtrcPrefix('prog-cir'), className, variant ? AtrcPrefix('prog') + '-' + variant : ''),
      ref: ref
    }, defaultProps), /*#__PURE__*/React.createElement("svg", {
      className: classnames(AtrcPrefix('svg'), 'at-w', 'at-h'),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-1 -1 34 34"
    }, uniqueId && AtrcIsLinearGradientColor(barColor) ? /*#__PURE__*/React.createElement(AtrcProgressSvgGradientColor, {
      gradient: barColor,
      uniqueId: uniqueIdLocal
    }) : null, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "15.9155",
      className: classnames('at-svg-cir', 'at-prog-cir__trk')
    }), /*#__PURE__*/React.createElement("circle", _extends({
      cx: "16",
      cy: "16",
      r: "15.9155",
      className: classnames('at-svg-cir', 'at-prog-cir__bar')
    }, uniqueId && AtrcIsLinearGradientColor(barColor) ? {
      style: {
        '--at-cl': "url(#".concat(uniqueIdLocal, ")")
      }
    } : {}))), children ? /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('prog-cir-txt'), 'at-pos')
    }, children) : null);
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('prog'), AtrcPrefix('prog-hor'), className, variant ? AtrcPrefix('prog') + '-' + variant : ''),
    ref: ref
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('prog-bar'), 'at-ovf', 'at-h', 'at-w', 'at-trs', 'at-p', hasAnimation ? 'at-prog-bar-animated' : null, hasStriped ? 'at-prog-bar-striped' : null, AtrcIsGradientColor(barColor) ? 'at-bg-img' : 'at-bg-cl')
  }, children));
};
export default /*#__PURE__*/forwardRef(AtrcProgress);
//# sourceMappingURL=index.js.map