import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Controls */
import AtrcControlSelect from '../control-select';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Internal */
import { FontStyleList } from './options';

/*Local*/
var FontStyle = function FontStyle(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Font style', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.fntSty,
    options: FontStyleList(),
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'fntSty');
    }
  }));
};
export default FontStyle;
//# sourceMappingURL=font-style.js.map