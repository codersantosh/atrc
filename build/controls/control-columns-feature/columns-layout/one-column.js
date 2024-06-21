import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Controls */
import AtrcControlSelectButton from '../../control-select-button';

/* Internal */
import { OneColumnOptions } from '../options';

/* Local */
var OneColumnLayout = function OneColumnLayout(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Single column layout', 'atrc-prefix-atrc'),
    value: value,
    options: OneColumnOptions(),
    onChange: onChange,
    allowReset: false
  });
};
export default OneColumnLayout;
//# sourceMappingURL=one-column.js.map