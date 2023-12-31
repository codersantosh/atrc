"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _options = require("./options");
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["label", "instanceId", "value", "columns", "className", "variant", "onChange"];
/*WordPress*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var AtrcControlColumnsAdvancedLayoutPlaceholder = function AtrcControlColumnsAdvancedLayoutPlaceholder(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)('Select columns', 'atrc-prefix-atrc') : _props$label,
    instanceId = props.instanceId,
    value = props.value,
    columns = props.columns,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_components.Placeholder, _extends({
    icon: "screenoptions",
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-adv-col-plhldr'), className, variant ? (0, _prefixVars.default)('ctrl-adv-col-plhldr') + '-' + variant : ''),
    label: label
  }, defaultProps), _options.OneColumnOptions.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_tooltip.default, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onChange(1, item.value);
      }
    }, /*#__PURE__*/React.createElement(_icon.default, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), _options.TwoColumnsOptions.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_tooltip.default, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onChange(2, item.value);
      }
    }, /*#__PURE__*/React.createElement(_icon.default, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), _options.ThreeColumnsOptions.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_tooltip.default, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onChange(3, item.value);
      }
    }, /*#__PURE__*/React.createElement(_icon.default, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), _options.FourColumnsOptions.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_tooltip.default, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onChange(4, item.value);
      }
    }, /*#__PURE__*/React.createElement(_icon.default, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), _options.FiveColumnsOptions.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_tooltip.default, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onChange(5, item.value);
      }
    }, /*#__PURE__*/React.createElement(_icon.default, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }), _options.SixColumnsOptions.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_tooltip.default, {
      text: item.label,
      key: key
    }, /*#__PURE__*/React.createElement(_button.default, {
      onClick: function onClick() {
        return onChange(6, item.value);
      }
    }, /*#__PURE__*/React.createElement(_icon.default, {
      icon: item.icon,
      type: item.iconType || 'wp'
    })));
  }));
};
var _default = exports.default = AtrcControlColumnsAdvancedLayoutPlaceholder;
//# sourceMappingURL=layout-placeholder.js.map