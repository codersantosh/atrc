/* Library */
/**
 * react-compound-slider
 * https://github.com/sghall/react-compound-slider
 */
import { Slider, Handles, Rail, Ticks } from 'react-compound-slider';

/**
 * Rail Slider Components
 * https://github.com/sghall/react-compound-slider
 */
import { SliderRail, Handle, Tick } from './rail-components';
import { isEqual } from 'lodash';

/* Local */
var sliderStyle = {
  position: 'relative',
  width: '100%'
};
var domain = [0, 100];
var ColSlider = function ColSlider(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(Slider, {
    className: "at-cpd-slider",
    rootStyle: sliderStyle,
    mode: 3,
    step: 1,
    onChange: function onChange(newVal) {
      if (!isEqual(newVal, value)) {
        _onChange(newVal);
      }
    },
    domain: domain // [min, max]
    ,
    values: value // slider value
  }, /*#__PURE__*/React.createElement(Rail, null, function (_ref2) {
    var getRailProps = _ref2.getRailProps;
    return /*#__PURE__*/React.createElement(SliderRail, {
      getRailProps: getRailProps
    });
  }), /*#__PURE__*/React.createElement(Handles, null, function (_ref3) {
    var handles = _ref3.handles,
      getHandleProps = _ref3.getHandleProps;
    return /*#__PURE__*/React.createElement("div", {
      className: "slider-handles"
    }, handles.map(function (handle) {
      return /*#__PURE__*/React.createElement(Handle, {
        key: handle.id,
        handle: handle,
        domain: domain,
        getHandleProps: getHandleProps
      });
    }));
  }), /*#__PURE__*/React.createElement(Ticks, {
    value: [0, 25, 50, 75, 100]
  }, function (_ref4) {
    var ticks = _ref4.ticks;
    return /*#__PURE__*/React.createElement("div", {
      className: "slider-ticks"
    }, ticks.map(function (tick) {
      return /*#__PURE__*/React.createElement(Tick, {
        key: tick.id,
        tick: tick,
        count: ticks.length
      });
    }));
  }));
};
export default ColSlider;
//# sourceMappingURL=col-slider.js.map