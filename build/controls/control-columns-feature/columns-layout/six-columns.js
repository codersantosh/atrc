/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { SixColumnsOptions } from '../options';

/* Local */
var SixColumnsLayout = function SixColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Six columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: SixColumnsOptions(),
    onChange: onChange,
    allowReset: false
  });
};
export default SixColumnsLayout;
//# sourceMappingURL=six-columns.js.map