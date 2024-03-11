/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { ThreeColumnsOptions } from '../options';

/* Local */
var ThreeColumnsLayout = function ThreeColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Three columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: ThreeColumnsOptions(),
    onChange: onChange,
    allowReset: false
  });
};
export default ThreeColumnsLayout;
//# sourceMappingURL=three-columns.js.map