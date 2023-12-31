"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _icons = require("@wordpress/icons");
var _classnames = _interopRequireDefault(require("classnames"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _dropdown = _interopRequireDefault(require("../dropdown"));
var _controlVideo = _interopRequireDefault(require("../control-video"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["isToolbar", "value", "onChange", "variant", "className"];
/*Attributes Structure
Type string
**/
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/

var AtrcControlDropdownVideo = function AtrcControlDropdownVideo(props) {
  var _props$isToolbar = props.isToolbar,
    isToolbar = _props$isToolbar === void 0 ? false : _props$isToolbar,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_dropdown.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-dropdown-img'), className, variant ? (0, _prefixVars.default)('ctrl-dropdown-img') + '-' + variant : ''),
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return isToolbar ? /*#__PURE__*/React.createElement(_components.ToolbarButton, {
        name: "img",
        title: (0, _i18n.__)('Select video', 'atrc-prefix-atrc'),
        onClick: onToggle,
        isActive: false
      }, /*#__PURE__*/React.createElement(_icon.default, {
        icon: _icons.video
      })) : /*#__PURE__*/React.createElement(_button.default, {
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(_icon.default, {
        icon: _icons.video
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_controlVideo.default, {
        label: (0, _i18n.__)('Video', 'atrc-prefix-atrc'),
        value: value,
        onChange: onChange,
        allowSettings: false
      });
    }
  }, defaultProps));
};
var _default = exports.default = AtrcControlDropdownVideo;
//# sourceMappingURL=index.js.map