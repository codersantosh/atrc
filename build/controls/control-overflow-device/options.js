import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Options*/
var OverflowOptions = function OverflowOptions() {
  return [{
    label: __('Default', 'atrc-prefix-atrc'),
    value: ''
  }, {
    label: __('Visible', 'atrc-prefix-atrc'),
    value: 'visible'
  }, {
    label: __('Hidden', 'atrc-prefix-atrc'),
    value: 'hidden'
  }, {
    label: __('Scroll', 'atrc-prefix-atrc'),
    value: 'scroll'
  }, {
    label: __('Auto', 'atrc-prefix-atrc'),
    value: 'auto'
  }];
};
export default OverflowOptions;
//# sourceMappingURL=options.js.map