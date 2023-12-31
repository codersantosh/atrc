function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { moreHorizontalMobile } from '@wordpress/icons';

/*Library*/
import { BsBell, BsList, BsX } from 'react-icons/bs';
import classnames from 'classnames';

/*Atrc*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcIcon from '../../../atoms/icon';
import AtrcLogo from '../../../atoms/logo';
import AtrcTooltip from './../../../molecules/tooltip';
import AtrcNav from './../../../molecules/nav';
import AtrcControlDropdownMenu from './../../../molecules/dropdown-menu';
import AtrcHeader from '../../../organisms/header';
import AtrcFloatingSidebar from '../../../organisms/floating-sidebar';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
const AtrcCardHeaderMain = props => {
  const {
    className = '',
    variant = '',
    logo = null,
    primaryNav = null,
    secondaryNav = null,
    dropdownNav = null,
    notification = null,
    floatingSidebar = null,
    button = null,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcHeader, _extends({
    className: classnames(AtrcPrefix('main-header'), className, variant ? AtrcPrefix('ls-header-admin') + '-' + variant : '', 'at-flx', 'at-flx-col', 'at-pos', 'at-z-idx', 'at-p')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flx at-jfy-cont-btw"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flx at-jfy-cont-st at-al-itm-ctr"
  }, logo ? /*#__PURE__*/React.createElement(AtrcLogo, logo) : null, primaryNav ? /*#__PURE__*/React.createElement(AtrcNav, _extends({
    className: classnames('at-p'),
    variant: "primary"
  }, primaryNav)) : null), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flx at-jfy-cont-end at-al-itm-ctr"
  }, secondaryNav ? /*#__PURE__*/React.createElement(AtrcNav, _extends({
    className: classnames('at-p'),
    variant: "secondary"
  }, secondaryNav)) : null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', ' at-gap', AtrcPrefix('btn-grp-gap'))
  }, button ? /*#__PURE__*/React.createElement(AtrcButton, _extends({
    variant: "primary"
  }, button)) : null, dropdownNav ? /*#__PURE__*/React.createElement(AtrcControlDropdownMenu, {
    icon: moreHorizontalMobile,
    label: __('More', 'atrc-prefix-atrc')
  }, () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcNav, _extends({
    variant: "vertical"
  }, dropdownNav)))) : null, notification ? /*#__PURE__*/React.createElement(AtrcFloatingSidebar, {
    direction: "right",
    variant: "over",
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "devices",
      "aria-expanded": isOpen,
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: isOpen ? __('Close notification', 'atrc-prefix-atrc') : __('Open notification', 'atrc-prefix-atrc')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsBell
    }))),
    renderContent: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "devices",
      "aria-expanded": isOpen,
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: __('Close notification', 'atrc-prefix-atrc')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsX
    }))), notification)
  }) : null, floatingSidebar ? /*#__PURE__*/React.createElement(AtrcFloatingSidebar, {
    direction: "right",
    variant: "over",
    renderToggle: ({
      isOpen,
      openPortal,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "devices",
      "aria-expanded": isOpen,
      onClick: openPortal
    }, /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: isOpen ? __('Close sidebar', 'atrc-prefix-atrc') : __('Open sidebar', 'atrc-prefix-atrc')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsList
    }))),
    renderContent: ({
      isOpen,
      onToggle,
      onClose
    }) => /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames('at-flx', 'at-jfy-cont-end')
    }, /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "close",
      "aria-expanded": isOpen,
      onClick: onClose,
      className: classnames('at-p', 'at-m', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr')
    }, /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: __('Close notification', 'atrc-prefix-atrc')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsX
    })))), floatingSidebar())
  }) : null))));
};
export default AtrcCardHeaderMain;
//# sourceMappingURL=index.js.map