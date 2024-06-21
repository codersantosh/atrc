import React from 'react';

/* Internal */
import OneColumnLayout from './one-column';
import TwoColumnsLayout from './two-columns';
import ThreeColumnsLayout from './three-columns';
import FourColumnsLayout from './four-columns';
import FiveColumnsLayout from './five-columns';
import SixColumnsLayout from './six-columns';

/* Local */
var ColumnLayout = function ColumnLayout(props) {
  var columns = props.columns,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  columns = parseInt(columns);
  if (1 === columns) {
    return /*#__PURE__*/React.createElement(OneColumnLayout, {
      value: value,
      onChange: onChange
    });
  } else if (2 === columns) {
    return /*#__PURE__*/React.createElement(TwoColumnsLayout, {
      value: value,
      onChange: onChange
    });
  } else if (3 === columns) {
    return /*#__PURE__*/React.createElement(ThreeColumnsLayout, {
      value: value,
      onChange: onChange
    });
  } else if (4 === columns) {
    return /*#__PURE__*/React.createElement(FourColumnsLayout, {
      value: value,
      onChange: onChange
    });
  } else if (5 === columns) {
    return /*#__PURE__*/React.createElement(FiveColumnsLayout, {
      value: value,
      onChange: onChange
    });
  } else if (6 === columns) {
    return /*#__PURE__*/React.createElement(SixColumnsLayout, {
      value: value,
      onChange: onChange
    });
  }
  return null;
};
export default ColumnLayout;
//# sourceMappingURL=index.js.map