var _excluded = ["className", "variant", "logo", "primaryNav", "secondaryNav", "dropdownNav", "notification", "floatingSidebar", "button"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var AtrcCardHeaderMain = function AtrcCardHeaderMain(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$logo = props.logo,
    logo = _props$logo === void 0 ? null : _props$logo,
    _props$primaryNav = props.primaryNav,
    primaryNav = _props$primaryNav === void 0 ? null : _props$primaryNav,
    _props$secondaryNav = props.secondaryNav,
    secondaryNav = _props$secondaryNav === void 0 ? null : _props$secondaryNav,
    _props$dropdownNav = props.dropdownNav,
    dropdownNav = _props$dropdownNav === void 0 ? null : _props$dropdownNav,
    _props$notification = props.notification,
    notification = _props$notification === void 0 ? null : _props$notification,
    _props$floatingSideba = props.floatingSidebar,
    floatingSidebar = _props$floatingSideba === void 0 ? null : _props$floatingSideba,
    _props$button = props.button,
    button = _props$button === void 0 ? null : _props$button,
    defaultProps = _objectWithoutProperties(props, _excluded);
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
  }, function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcNav, _extends({
      variant: "vertical"
    }, dropdownNav)));
  }) : null, notification ? /*#__PURE__*/React.createElement(AtrcFloatingSidebar, {
    direction: "right",
    variant: "over",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: isOpen ? __('Close notification', 'atrc-prefix-atrc') : __('Open notification', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsBell
      })));
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: __('Close notification', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsX
      }))), notification);
    }
  }) : null, floatingSidebar ? /*#__PURE__*/React.createElement(AtrcFloatingSidebar, {
    direction: "right",
    variant: "over",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
        openPortal = _ref3.openPortal,
        onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: openPortal
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: isOpen ? __('Close sidebar', 'atrc-prefix-atrc') : __('Open sidebar', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsList
      })));
    },
    renderContent: function renderContent(_ref4) {
      var isOpen = _ref4.isOpen,
        onToggle = _ref4.onToggle,
        onClose = _ref4.onClose;
      return /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcWrap, {
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
      })))), floatingSidebar());
    }
  }) : null))));
};
export default AtrcCardHeaderMain;
//# sourceMappingURL=index.js.map