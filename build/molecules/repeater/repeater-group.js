/*WordPress*/
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp } from '@wordpress/icons';
import { useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { BsDashSquare } from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcHeader from '../../organisms/header';
import AtrcTooltip from '../tooltip';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcRepeaterGroup = props => {
  const {
    groupIndex,
    deleteGroup,
    children,
    groupTitle = __('Repeater fields', 'atrc-prefix-atrc'),
    deleteTitle = __('Delete repeater fields', 'atrc-prefix-atrc')
  } = props;
  const [isOpen, onToggle] = useState(false);
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp'), 'at-m'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(AtrcHeader, {
    className: classnames(AtrcPrefix('repeater-grp-header'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', 'at-bg-cl', 'at-bdr')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, groupTitle), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-actions'), 'at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames('at-p', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "delete-icon",
    onClick: () => deleteGroup(groupIndex)
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: deleteTitle
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsDashSquare
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames('at-p', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "dropdown",
    onClick: () => onToggle(!isOpen)
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: isOpen ? __('Hide fields', 'atrc-prefix-atrc') : __('Show fields', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: 'wp',
    icon: isOpen ? chevronUp : chevronDown
  }))))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-itms'), 'at-bdr at-bg-cl', isOpen ? '' : 'at-d-non'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-itms-fields'), 'at-p')
  }, children)));
};
export default AtrcRepeaterGroup;
//# sourceMappingURL=repeater-group.js.map