"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _bs = require("react-icons/bs");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../../atoms/wrap"));
var _button = _interopRequireDefault(require("../../../atoms/button"));
var _icon = _interopRequireDefault(require("../../../atoms/icon"));
var _logo = _interopRequireDefault(require("../../../atoms/logo"));
var _tooltip = _interopRequireDefault(require("./../../../molecules/tooltip"));
var _nav = _interopRequireDefault(require("./../../../molecules/nav"));
var _dropdownMenu = _interopRequireDefault(require("./../../../molecules/dropdown-menu"));
var _header = _interopRequireDefault(require("../../../organisms/header"));
var _floatingSidebar = _interopRequireDefault(require("../../../organisms/floating-sidebar"));
var _prefixVars = _interopRequireDefault(require("../../../prefix-vars"));
var _excluded = ["className", "variant", "logo", "primaryNav", "secondaryNav", "dropdownNav", "notification", "floatingSidebar", "button"];
/*WordPress*/
/*Library*/
/*Atrc*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  return /*#__PURE__*/React.createElement(_header.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('main-header'), className, variant ? (0, _prefixVars.default)('ls-header-admin') + '-' + variant : '', 'at-flx', 'at-flx-col', 'at-pos', 'at-z-idx', 'at-p')
  }, defaultProps), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-flx at-jfy-cont-btw"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-flx at-jfy-cont-st at-al-itm-ctr"
  }, logo ? /*#__PURE__*/React.createElement(_logo.default, logo) : null, primaryNav ? /*#__PURE__*/React.createElement(_nav.default, _extends({
    className: (0, _classnames.default)('at-p'),
    variant: "primary"
  }, primaryNav)) : null), /*#__PURE__*/React.createElement(_wrap.default, {
    className: "at-flx at-jfy-cont-end at-al-itm-ctr"
  }, secondaryNav ? /*#__PURE__*/React.createElement(_nav.default, _extends({
    className: (0, _classnames.default)('at-p'),
    variant: "secondary"
  }, secondaryNav)) : null, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', ' at-gap', (0, _prefixVars.default)('btn-grp-gap'))
  }, button ? /*#__PURE__*/React.createElement(_button.default, _extends({
    variant: "primary"
  }, button)) : null, dropdownNav ? /*#__PURE__*/React.createElement(_dropdownMenu.default, {
    icon: _icons.moreHorizontalMobile,
    label: (0, _i18n.__)('More', 'atrc-prefix-atrc')
  }, function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_nav.default, _extends({
      variant: "vertical"
    }, dropdownNav)));
  }) : null, notification ? /*#__PURE__*/React.createElement(_floatingSidebar.default, {
    direction: "right",
    variant: "over",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_button.default, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(_tooltip.default, {
        text: isOpen ? (0, _i18n.__)('Close notification', 'atrc-prefix-atrc') : (0, _i18n.__)('Open notification', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsBell
      })));
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wrap.default, null, /*#__PURE__*/React.createElement(_button.default, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(_tooltip.default, {
        text: (0, _i18n.__)('Close notification', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsX
      }))), notification);
    }
  }) : null, floatingSidebar ? /*#__PURE__*/React.createElement(_floatingSidebar.default, {
    direction: "right",
    variant: "over",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
        openPortal = _ref3.openPortal,
        onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(_button.default, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: openPortal
      }, /*#__PURE__*/React.createElement(_tooltip.default, {
        text: isOpen ? (0, _i18n.__)('Close sidebar', 'atrc-prefix-atrc') : (0, _i18n.__)('Open sidebar', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsList
      })));
    },
    renderContent: function renderContent(_ref4) {
      var isOpen = _ref4.isOpen,
        onToggle = _ref4.onToggle,
        onClose = _ref4.onClose;
      return /*#__PURE__*/React.createElement(_wrap.default, null, /*#__PURE__*/React.createElement(_wrap.default, {
        className: (0, _classnames.default)('at-flx', 'at-jfy-cont-end')
      }, /*#__PURE__*/React.createElement(_button.default, {
        variant: "close",
        "aria-expanded": isOpen,
        onClick: onClose,
        className: (0, _classnames.default)('at-p', 'at-m', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr')
      }, /*#__PURE__*/React.createElement(_tooltip.default, {
        text: (0, _i18n.__)('Close notification', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsX
      })))), floatingSidebar());
    }
  }) : null))));
};
var _default = exports.default = AtrcCardHeaderMain;
//# sourceMappingURL=index.js.map