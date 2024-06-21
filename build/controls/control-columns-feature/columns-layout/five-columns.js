import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { FiveColumnsOptions } from '../options';

/* Local */
var FiveColumnsLayout = function FiveColumnsLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Five columns layout', 'atrc-prefix-atrc'),
    value: value,
    options: FiveColumnsOptions(),
    onChange: onChange,
    allowReset: false
  });
};
export default FiveColumnsLayout;
//# sourceMappingURL=five-columns.js.map