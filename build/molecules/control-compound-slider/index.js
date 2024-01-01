/* WordPress */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColSlider from './col-slider';
import ColInputs from './col-inputs';
import AtrcPanelRow from '../panel-row';

/* Local */
function createNewArray(arr, total) {
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
  var values = props.values,
    onChange = props.onChange,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Custom widths', 'atrc-prefix-atrc') : _props$label,
    className = props.className,
    variant = props.variant,
    _props$total = props.total,
    total = _props$total === void 0 ? 100 : _props$total;
  var InputsWidth = useMemo(function () {
    if (values && values.length) {
      return createNewArray(values, total);
    }
  }, [values, total]);
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-compound-slider'), className, variant ? AtrcPrefix('ctrl-compound-slider') + '-' + variant : '')
  }, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(ColSlider, {
    values: values,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(ColInputs, {
    values: InputsWidth
  })));
};
export default AtrcControlCompoundSlider;
//# sourceMappingURL=index.js.map