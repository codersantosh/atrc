/* WordPress */
import { __ } from '@wordpress/i18n';

/* Inbuilt */
import AtrcControlSelectButton from '../../control-select-button';
import { SixColumnsOptions } from '../options';

/* Local */
const SixColumnsLayout = props => {
  const {
    value,
    onChange = () => {}
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Six columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: SixColumnsOptions,
    onChange: onChange,
    allowReset: false
  });
};
export default SixColumnsLayout;
//# sourceMappingURL=six-columns.js.map