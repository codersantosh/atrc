import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlSelectButton from '../control-select-button';

/* Internal */
import { TextTransformList } from './options';

/*Local*/
var TextTransform = function TextTransform(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelectButton, {
    label: __('Text transform', 'atrc-prefix-atrc'),
    value: value && value.txtTf,
    options: TextTransformList(),
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'txtTf');
    },
    allowReset: true
  }));
};
export default TextTransform;
//# sourceMappingURL=text-transform.js.map