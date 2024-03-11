/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Options*/
var PositionOptions = function PositionOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Relative', 'atrc-prefix-atrc'),
    value: 'relative'
  }, {
    label: __('Static', 'atrc-prefix-atrc'),
    value: 'static'
  }, {
    label: __('Fixed', 'atrc-prefix-atrc'),
    value: 'fixed'
  }, {
    label: __('Absolute', 'atrc-prefix-atrc'),
    value: 'absolute'
  }, {
    label: __('Sticky', 'atrc-prefix-atrc'),
    value: 'sticky'
  }];
};
export default PositionOptions;
//# sourceMappingURL=options.js.map