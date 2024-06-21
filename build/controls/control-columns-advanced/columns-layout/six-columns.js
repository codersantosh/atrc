import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/* Library */
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';
import AtrcControlCompoundSlider from '../../control-compound-slider';

/* Internal */
import { CustomColumnOption, SixColumnsOptions, NewValWithCustom, CustomColumnsExistingValue } from '../options';

/* Local */
var SixColumnsLayout = function SixColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var NewExistingValue = useMemo(function () {
    if (!value) {
      return {
        selectBtn: value,
        sliderVal: [16.6, 33.2, 49.8, 66.4, 83],
        customWidth: '16.6-16.6-16.6-16.6-16.6,17'
      };
    }
    return CustomColumnsExistingValue({
      value: value,
      colNum: 6
    });
  }, [value]);
  var setColumn = function setColumn(newVal) {
    onChange(NewValWithCustom({
      newVal: newVal,
      NewExistingValue: NewExistingValue
    }));
  };
  var SixColumnsOptionsCloned = cloneDeep(SixColumnsOptions());
  SixColumnsOptionsCloned.push({
    label: __('4-4-4-4-4-4', 'atrc-prefix-atrc'),
    value: '4-4-4-4-4-4',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M19.3,32.5H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H19.3a2,2,0,0,1,2,2V30.5A2,2,0,0,1,19.3,32.5ZM4,4H4V30.5H19.3V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,32.5H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H41.7a2,2,0,0,1,2,2V30.5A2,2,0,0,1,41.7,32.5ZM26.3,4h0V30.5H41.7V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,32.5H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V30.5A2,2,0,0,1,64,32.5ZM48.7,4h0V30.5H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H4a2,2,0,0,1-2-2V37.5a2,2,0,0,1,2-2H19.3a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM4,37.5H4V64H19.3V37.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H26.3a2,2,0,0,1-2-2V37.5a2,2,0,0,1,2-2H41.7a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM26.3,37.5h0V64H41.7V37.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H48.7a2,2,0,0,1-2-2V37.5a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM48.7,37.5h0V64H64V37.5Z"
      }));
    }
  });
  SixColumnsOptionsCloned.push({
    label: __('6-6-6-6-6-6', 'atrc-prefix-atrc'),
    value: '6-6-6-6-6-6',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M30.5,21.3H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H30.5a2,2,0,0,1,2,2V19.3A2,2,0,0,1,30.5,21.3ZM4,4H4V19.3H30.5V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,21.3H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V19.3A2,2,0,0,1,64,21.3ZM37.5,4h0V19.3H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,43.7H4a2,2,0,0,1-2-2V26.3a2,2,0,0,1,2-2H30.5a2,2,0,0,1,2,2V41.7A2,2,0,0,1,30.5,43.7ZM4,26.3H4V41.7H30.5V26.3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,43.7H37.5a2,2,0,0,1-2-2V26.3a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V41.7A2,2,0,0,1,64,43.7ZM37.5,26.3h0V41.7H64V26.3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H4a2,2,0,0,1-2-2V48.7a2,2,0,0,1,2-2H30.5a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM4,48.7H4V64H30.5V48.7Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H37.5a2,2,0,0,1-2-2V48.7a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM37.5,48.7h0V64H64V48.7Z"
      }));
    }
  });
  SixColumnsOptionsCloned.push({
    label: __('All full width', 'atrc-prefix-atrc'),
    value: '12-12-12-12-12-12',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H4a2,2,0,0,1-2-2V59.8a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,59.8V64H64V59.8Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,54.8H4a2,2,0,0,1-2-2V48.7a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v4.2A2,2,0,0,1,64,54.8ZM4,48.7v4.2H64V48.7Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,43.7H4a2,2,0,0,1-2-2V37.5a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v4.2A2,2,0,0,1,64,43.7ZM4,37.5v4.2H64V37.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,32.5H4a2,2,0,0,1-2-2V26.3a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v4.2A2,2,0,0,1,64,32.5ZM4,26.3v4.2H64V26.3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,21.3H4a2,2,0,0,1-2-2V15.2a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v4.2A2,2,0,0,1,64,21.3ZM4,15.2v4.2H64V15.2Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,10.2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2V8.2A2,2,0,0,1,64,10.2ZM4,4V8.2H64V4Z"
      }));
    }
  });
  SixColumnsOptionsCloned.push(CustomColumnOption());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Six columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: SixColumnsOptionsCloned,
    onChange: setColumn,
    allowReset: false
  }), 'cust' === NewExistingValue.selectBtn ? /*#__PURE__*/React.createElement(AtrcControlCompoundSlider, {
    value: NewExistingValue.sliderVal,
    onChange: setColumn
  }) : null);
};
export default SixColumnsLayout;
//# sourceMappingURL=six-columns.js.map