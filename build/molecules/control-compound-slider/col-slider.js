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
const sliderStyle = {
  position: 'relative',
  width: '100%'
};
const domain = [0, 100];
const ColSlider = ({
  values,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(Slider, {
    className: "g-r-col-slider",
    rootStyle: sliderStyle,
    mode: 3,
    step: 0.1,
    onChange: newVal => {
      if (!isEqual(newVal, values)) {
        onChange(newVal);
      }
    },
    domain: domain // [min, max]
    ,
    values: values // slider values
  }, /*#__PURE__*/React.createElement(Rail, null, ({
    getRailProps
  }) => /*#__PURE__*/React.createElement(SliderRail, {
    getRailProps: getRailProps
  })), /*#__PURE__*/React.createElement(Handles, null, ({
    handles,
    getHandleProps
  }) => /*#__PURE__*/React.createElement("div", {
    className: "slider-handles"
  }, handles.map(handle => /*#__PURE__*/React.createElement(Handle, {
    key: handle.id,
    handle: handle,
    domain: domain,
    getHandleProps: getHandleProps
  })))), /*#__PURE__*/React.createElement(Ticks, {
    values: [0, 25, 50, 75, 100]
  }, ({
    ticks
  }) => /*#__PURE__*/React.createElement("div", {
    className: "slider-ticks"
  }, ticks.map(tick => /*#__PURE__*/React.createElement(Tick, {
    key: tick.id,
    tick: tick,
    count: ticks.length
  })))));
};
export default ColSlider;
//# sourceMappingURL=col-slider.js.map