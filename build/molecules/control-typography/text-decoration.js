/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import { TextDecorationList } from './options';
import AtrcPanelRow from '../panel-row';

/*Library*/
import classnames from 'classnames';

/*Local Components*/
const TextDecoration = ({
  value,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Text decoration', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.txtDec,
    options: TextDecorationList,
    onChange: newVal => onChange(newVal, 'txtDec')
  }));
};
export default TextDecoration;
//# sourceMappingURL=text-decoration.js.map