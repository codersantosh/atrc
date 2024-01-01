/* WordPress */
import { __ } from '@wordpress/i18n';

/* Atrc */
import AtrcTooltip from '../tooltip';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import { BsPlusSquare } from 'react-icons/bs';
var AtrcRepeaterGroupAdd = function AtrcRepeaterGroupAdd(props) {
  var addGroup = props.addGroup,
    _props$tooltipText = props.tooltipText,
    tooltipText = _props$tooltipText === void 0 ? __('Add repeater fields', 'atrc-prefix-atrc') : _props$tooltipText,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Add repeater fields', 'atrc-prefix-atrc') : _props$label;
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