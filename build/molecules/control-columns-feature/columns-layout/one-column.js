/* WordPress */
import { __ } from '@wordpress/i18n';

/* Inbuilt */
import AtrcControlSelectButton from '../../control-select-button';
import { OneColumnOptions } from '../options';

/* Local */
const OneColumnLayout = props => {
  const {
    value,
    onChange = () => {}
  } = props;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Single column layout', 'atrc-prefix-atrc'),
    value: value,
    options: OneColumnOptions,
    onChange: onChange,
    allowReset: false
  });
};
export default OneColumnLayout;
//# sourceMappingURL=one-column.js.map