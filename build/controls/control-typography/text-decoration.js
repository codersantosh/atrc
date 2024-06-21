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
import { TextDecorationList } from './options';

/*Local*/
var TextDecoration = function TextDecoration(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Text decoration', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.txtDec,
    options: TextDecorationList(),
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'txtDec');
    }
  }));
};
export default TextDecoration;
//# sourceMappingURL=text-decoration.js.map