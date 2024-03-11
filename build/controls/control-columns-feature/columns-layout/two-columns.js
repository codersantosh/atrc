/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { TwoColumnsOptions } from '../options';

/* Local */
var TwoColumnsLayout = function TwoColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Two columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: TwoColumnsOptions(),
    onChange: onChange,
    allowReset: false
  });
};
export default TwoColumnsLayout;
//# sourceMappingURL=two-columns.js.map