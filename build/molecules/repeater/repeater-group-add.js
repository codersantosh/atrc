/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import { BsPlusSquare } from 'react-icons/bs';
import classNames from 'classnames';

/* Atoms */
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/* Molecules */

/* Local */
var AtrcRepeaterGroupAdd = function AtrcRepeaterGroupAdd(props) {
  var addGroup = props.addGroup,
    _props$tooltipText = props.tooltipText,
    tooltipText = _props$tooltipText === void 0 ? __('Add repeater fields', 'atrc-prefix-atrc') : _props$tooltipText,
    _props$label = props.label,
    label = _props$label === void 0 ? __('Add repeater fields', 'atrc-prefix-atrc') : _props$label;
  return /*#__PURE__*/React.createElement(AtrcButton, {
    hasIcon: true,
    onClick: addGroup,
    className: classNames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsPlusSquare
  }), label);
};
export default AtrcRepeaterGroupAdd;
//# sourceMappingURL=repeater-group-add.js.map