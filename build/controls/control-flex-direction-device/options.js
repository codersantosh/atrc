import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { arrowDown, arrowLeft, arrowRight, arrowUp } from '@wordpress/icons';

/*Local*/
var FlexDirectionOptions = function FlexDirectionOptions() {
  return [{
    label: __('Horizontal(Row)', 'atrc-prefix-atrc'),
    value: 'row',
    icon: arrowRight
  }, {
    label: __('Vertical(Column)', 'atrc-prefix-atrc'),
    value: 'col',
    icon: arrowDown
  }, {
    label: __('Row reverse', 'atrc-prefix-atrc'),
    value: 'rowRev',
    icon: arrowLeft
  }, {
    label: __('Column reverse', 'atrc-prefix-atrc'),
    value: 'colRev',
    icon: arrowUp
  }];
};
export default FlexDirectionOptions;
//# sourceMappingURL=options.js.map