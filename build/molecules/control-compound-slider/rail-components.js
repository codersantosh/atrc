function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* Slider rail */
const railOuterStyle = {
  position: 'absolute',
  width: '100%',
  height: 42,
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  cursor: 'pointer'
};
const railInnerStyle = {
  position: 'absolute',
  width: '100%',
  height: 3,
  backgroundColor: '#e2e4e7',
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  pointerEvents: 'none'
};
export const SliderRail = ({
  getRailProps
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    style: railOuterStyle
  }, getRailProps())), /*#__PURE__*/React.createElement("div", {
    style: railInnerStyle
  }));
};

/* Slider handle */
export const Handle = props => {
  const {
    domain: [min, max],
    handle: {
      id,
      value,
      percent
    },
    disabled = false,
    getHandleProps
  } = props;
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    disabled: disabled,
    style: {
      left: `${percent}%`
    }
  }, getHandleProps(id)));
};
export const Tick = ({
  tick,
  count
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 1,
      marginLeft: -0.5,
      width: 1,
      height: 8,
      backgroundColor: 'silver',
      left: `${tick.percent}%`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 5,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: `${-(100 / count) / 2}%`,
      width: `${100 / count}%`,
      left: `${tick.percent}%`
    }
  }, tick.value));
};
//# sourceMappingURL=rail-components.js.map