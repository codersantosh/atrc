/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import AtrcPanelRow from '../panel-row';
import AtrcControlSelectButton from '../control-select-button';
import { TextTransformList } from './options';
/*Library*/
import classnames from 'classnames';
/*Local Components*/
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