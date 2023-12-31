/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Inbuilt*/
import AtrcSelect from '../../atoms/select';
import { FontWeightList } from './options';
import AtrcPanelRow from '../panel-row';
import classNames from 'classnames';
/*Library*/

/*Local Components*/
const FontWeight = ({
  value,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classNames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Font weight', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: value && value.fntWt,
    options: FontWeightList,
    onChange: newVal => onChange(newVal, 'fntWt')
  }));
};
export default FontWeight;
//# sourceMappingURL=font-weight.js.map