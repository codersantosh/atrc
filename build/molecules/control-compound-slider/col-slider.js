"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactCompoundSlider = require("react-compound-slider");
var _railComponents = require("./rail-components");
var _lodash = require("lodash");
/**
 * react-compound-slider
 * https://github.com/sghall/react-compound-slider
 */

/**
 * Rail Slider Components
 * https://github.com/sghall/react-compound-slider
 */

/* Local */
var sliderStyle = {
  position: 'relative',
  width: '100%'
};
var domain = [0, 100];
var ColSlider = function ColSlider(_ref) {
  var values = _ref.values,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_reactCompoundSlider.Slider, {
    className: "g-r-col-slider",
    rootStyle: sliderStyle,
    mode: 3,
    step: 0.1,
    onChange: function onChange(newVal) {
      if (!(0, _lodash.isEqual)(newVal, values)) {
        _onChange(newVal);
      }
    },
    domain: domain // [min, max]
    ,
    values: values // slider values
  }, /*#__PURE__*/React.createElement(_reactCompoundSlider.Rail, null, function (_ref2) {
    var getRailProps = _ref2.getRailProps;
    return /*#__PURE__*/React.createElement(_railComponents.SliderRail, {
      getRailProps: getRailProps
    });
  }), /*#__PURE__*/React.createElement(_reactCompoundSlider.Handles, null, function (_ref3) {
    var handles = _ref3.handles,
      getHandleProps = _ref3.getHandleProps;
    return /*#__PURE__*/React.createElement("div", {
      className: "slider-handles"
    }, handles.map(function (handle) {
      return /*#__PURE__*/React.createElement(_railComponents.Handle, {
        key: handle.id,
        handle: handle,
        domain: domain,
        getHandleProps: getHandleProps
      });
    }));
  }), /*#__PURE__*/React.createElement(_reactCompoundSlider.Ticks, {
    values: [0, 25, 50, 75, 100]
  }, function (_ref4) {
    var ticks = _ref4.ticks;
    return /*#__PURE__*/React.createElement("div", {
      className: "slider-ticks"
    }, ticks.map(function (tick) {
      return /*#__PURE__*/React.createElement(_railComponents.Tick, {
        key: tick.id,
        tick: tick,
        count: ticks.length
      });
    }));
  }));
};
var _default = exports.default = ColSlider;
//# sourceMappingURL=col-slider.js.map