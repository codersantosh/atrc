/* WordPress */
import { __ } from '@wordpress/i18n';

/* Atrc */
import AtrcTooltip from '../tooltip';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import { BsPlusSquare } from 'react-icons/bs';
const AtrcRepeaterGroupAdd = props => {
  const {
    addGroup,
    tooltipText = __('Add repeater fields', 'atrc-prefix-atrc'),
    label = __('Add repeater fields', 'atrc-prefix-atrc')
  } = props;
  return /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "add",
    onClick: addGroup,
    className: "at-m"
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: "at-flx at-al-itm-ctr at-gap",
    text: tooltipText
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsPlusSquare
  }), label));
};
export default AtrcRepeaterGroupAdd;
//# sourceMappingURL=repeater-group-add.js.map