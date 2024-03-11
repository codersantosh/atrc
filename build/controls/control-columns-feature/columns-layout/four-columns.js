/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { FourColumnsOptions } from '../options';

/* Local */
var FourColumnsLayout = function FourColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Four columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: FourColumnsOptions(),
    onChange: onChange,
    allowReset: false
  });
};
export default FourColumnsLayout;
//# sourceMappingURL=four-columns.js.map