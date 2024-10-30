var _excluded = ["className", "type", "variant", "barColor", "uniqueId", "hasAnimation", "hasStriped", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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