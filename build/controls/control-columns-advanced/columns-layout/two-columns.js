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
import { CustomColumnOption, CustomColumnsExistingValue, NewValWithCustom, TwoColumnsOptions } from '../options';

/* Local */
var TwoColumnsLayout = function TwoColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var NewExistingValue = useMemo(function () {
    if (!value) {
      return {
        selectBtn: value,
        sliderVal: [50],
        customWidth: '50-50'
      };
    }
    return CustomColumnsExistingValue({
      value: value,
      colNum: 2
    });
  }, [value]);
  var setColumn = function setColumn(newVal) {
    onChange(NewValWithCustom({
      newVal: newVal,
      NewExistingValue: NewExistingValue
    }));
  };
  var TwoColumnsOptionsCloned = cloneDeep(TwoColumnsOptions());
  TwoColumnsOptionsCloned.push({
    label: __('All full width', 'atrc-prefix-atrc'),
    value: '12-12',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M4,35.5H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V37.5A2,2,0,0,1,4,35.5Zm60,2H4V64H64Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4,2H64a2,2,0,0,1,2,2V30.5a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2ZM64,4H4V30.5H64Z"
      }));
    }
  });
  TwoColumnsOptionsCloned.push(CustomColumnOption());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Two columns layout', 'atrc-prefix-atrc'),
    value: NewExistingValue.selectBtn,
    options: TwoColumnsOptionsCloned,
    onChange: setColumn,
    allowReset: false
  }), 'cust' === NewExistingValue.selectBtn ? /*#__PURE__*/React.createElement(AtrcControlCompoundSlider, {
    value: NewExistingValue.sliderVal,
    onChange: setColumn
  }) : null);
};
export default TwoColumnsLayout;
//# sourceMappingURL=two-columns.js.map