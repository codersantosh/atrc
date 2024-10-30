function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

/* Local */
/* Slider rail */
var railOuterStyle = {
  position: 'absolute',
  width: '100%',
  height: 42,
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  cursor: 'pointer'
};
var railInnerStyle = {
  position: 'absolute',
  width: '100%',
  height: 3,
  backgroundColor: '#e2e4e7',
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  pointerEvents: 'none'
};
export var SliderRail = function SliderRail(_ref) {
  var getRailProps = _ref.getRailProps;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    style: railOuterStyle
  }, getRailProps())), /*#__PURE__*/React.createElement("div", {
    style: railInnerStyle
  }));
};

/* Slider handle */
export var Handle = function Handle(props) {
  var _props$domain = _slicedToArray(props.domain, 2),
    min = _props$domain[0],
    max = _props$domain[1],
    _props$handle = props.handle,
    id = _props$handle.id,
    value = _props$handle.value,
    percent = _props$handle.percent,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    getHandleProps = props.getHandleProps;
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    disabled: disabled,
    style: {
      left: "".concat(percent, "%")
    }
  }, getHandleProps(id)));
};
export var Tick = function Tick(_ref2) {
  var tick = _ref2.tick,
    count = _ref2.count;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 1,
      marginLeft: -0.5,
      width: 1,
      height: 8,
      backgroundColor: 'silver',
      left: "".concat(tick.percent, "%")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 5,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    }
  }, tick.value));
};
//# sourceMappingURL=rail-components.js.map