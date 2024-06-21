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
import { CustomColumnOption, FiveColumnsOptions, NewValWithCustom, CustomColumnsExistingValue } from '../options';

/* Local */
var FiveColumnsLayout = function FiveColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var NewExistingValue = useMemo(function () {
    if (!value) {
      return {
        selectBtn: value,
        sliderVal: [20, 40, 60, 80],
        customWidth: '20-20-20-20-20'
      };
    }
    return CustomColumnsExistingValue({
      value: value,
      colNum: 5
    });
  }, [value]);
  var setColumn = function setColumn(newVal) {
    onChange(NewValWithCustom({
      newVal: newVal,
      NewExistingValue: NewExistingValue
    }));
  };
  var FiveColumnsOptionsCloned = cloneDeep(FiveColumnsOptions());
  FiveColumnsOptionsCloned.push({
    label: __('All full width', 'atrc-prefix-atrc'),
    value: '12-12-12-12-12',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,12.4H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,12.4ZM4,4H4v6.4H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,25.8H4a2,2,0,0,1-2-2V17.4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,25.8ZM4,17.4H4v6.4H64V17.4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,39.2H4a2,2,0,0,1-2-2V30.8a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,39.2ZM4,30.8H4v6.4H64V30.8Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,52.6H4a2,2,0,0,1-2-2V44.2a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v6.4A2,2,0,0,1,64,52.6ZM4,44.2H4v6.4H64V44.2Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H4a2,2,0,0,1-2-2V57.6a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,57.6H4V64H64V57.6Z"
      }));
    }
  });
  FiveColumnsOptionsCloned.push(CustomColumnOption());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Five columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: FiveColumnsOptionsCloned,
    onChange: setColumn,
    allowReset: false
  }), 'cust' === NewExistingValue.selectBtn ? /*#__PURE__*/React.createElement(AtrcControlCompoundSlider, {
    value: NewExistingValue.sliderVal,
    onChange: setColumn
  }) : null);
};
export default FiveColumnsLayout;
//# sourceMappingURL=five-columns.js.map