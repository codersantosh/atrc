"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactPortal = require("react-portal");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _sidebar = _interopRequireDefault(require("../sidebar"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["onToggle", "onClose", "direction", "className", "variant", "children", "renderToggle", "renderContent"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var AtrcFloatingSidebar = function AtrcFloatingSidebar(props) {
  var _props$onToggle = props.onToggle,
    onToggle = _props$onToggle === void 0 ? false : _props$onToggle,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? false : _props$onClose,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'right' : _props$direction,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$renderToggle = props.renderToggle,
    renderToggle = _props$renderToggle === void 0 ? function (args) {} : _props$renderToggle,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? function (args) {} : _props$renderContent,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('sidebar-icon'), direction ? (0, _prefixVars.default)('side-nav') + direction : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_reactPortal.PortalWithState, {
    closeOnOutsideClick: true,
    closeOnEsc: true
  }, function (_ref) {
    var openPortal = _ref.openPortal,
      closePortal = _ref.closePortal,
      isOpen = _ref.isOpen,
      portal = _ref.portal;
    var toggle = function toggle() {
      if (isOpen) {
        closePortal();
      } else {
        openPortal();
      }
    };
    var args = {
      isOpen: isOpen,
      openPortal: openPortal,
      onToggle: toggle,
      onClose: closePortal
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderToggle(args), portal( /*#__PURE__*/React.createElement(_sidebar.default, {
      variant: "floating",
      className: "at-pos at-z-idx at-w at-h at-bg-cl at-p at-box-sdw",
      direction: direction
    }, renderContent(args))));
  }));
};
var _default = exports.default = AtrcFloatingSidebar;
//# sourceMappingURL=index.js.map