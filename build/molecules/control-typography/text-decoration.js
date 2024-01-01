/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import { TextDecorationList } from './options';
import AtrcPanelRow from '../panel-row';

/*Library*/
import classnames from 'classnames';

/*Local Components*/
var TextDecoration = function TextDecoration(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
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