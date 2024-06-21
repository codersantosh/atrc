import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColSlider from './col-slider';
import ColInputs from './col-inputs';

/* Local */
export function AtrcControlCompoundSliderGetWidth(arr) {
  var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push(parseFloat(arr[i].toFixed(1))); // Parse and format the first element
    } else {
      var diff = parseFloat((arr[i] - arr[i - 1]).toFixed(1)); // Calculate and format the difference
      result.push(diff);
    }
  }
  // Add the last value (total - last element of the original array)
  result.push(parseFloat((total - arr[arr.length - 1]).toFixed(1)));
  return result;
}
var AtrcControlCompoundSlider = function AtrcControlCompoundSlider(props) {
  var value = props.value,
    onChange = props.onChange,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Custom widths', 'atrc-prefix-atrc') : _props$label,
    className = props.className,
    variant = props.variant,
    _props$total = props.total,
    total = _props$total === void 0 ? 100 : _props$total;
  var InputsWidth = useMemo(function () {
    if (value && value.length) {
      return AtrcControlCompoundSliderGetWidth(value, total);
    }
    return [];
  }, [value, total]);
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-compound-slider'), className, variant ? AtrcPrefix('ctrl-compound-slider') + '-' + variant : '')
  }, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(ColSlider, {
    value: value,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(ColInputs, {
    value: InputsWidth
  })));
};
export default AtrcControlCompoundSlider;
//# sourceMappingURL=index.js.map