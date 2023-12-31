"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlDividerDefaultSvg = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlSelectSvg = _interopRequireDefault(require("../control-select-svg"));
var _options = _interopRequireDefault(require("./options"));
var _excluded = ["value", "onChange"];
/* WordPress */
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var SelectedShape = function SelectedShape(value, options) {
  var selectedShape = options.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
var AtrcControlDividerDefaultSvg = exports.AtrcControlDividerDefaultSvg = function AtrcControlDividerDefaultSvg(_ref) {
  var svgDefd = _ref.svgDefd;
  var selectedShape = SelectedShape(svgDefd, _options.default);
  if (selectedShape) {
    return selectedShape.svg();
  }
  return null;
};
var AtrcControlDivider = function AtrcControlDivider(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setChange = function setChange(newVal) {
    var valueCloned = Object.assign({}, value);
    if (newVal) {
      if (newVal.svgDefd) {
        valueCloned.svgDefd = newVal.svgDefd;
        valueCloned.svg = '';
      } else if (newVal.svgCust) {
        valueCloned.svg = newVal.svgCust;
      }
      valueCloned.svgFrm = newVal.svgFrm;
    }
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Divider type', 'atrc-prefix-atrc'),
    value: value.type,
    options: [{
      label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: (0, _i18n.__)('Svg', 'atrc-prefix-atrc'),
      value: 'svg'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'type');
    }
  })), value && value.type === 'svg' ? /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlSelectSvg.default, _extends({
    value: {
      svgFrm: value.svgFrm,
      svgDefd: value.svgDefd,
      svgCust: 'cust' === value.svgFrm ? value.svg : ''
    },
    onChange: setChange,
    definedOptions: _options.default,
    alloweColor: false,
    alloweSettings: false
  }, defaultProps))) : null);
};
var _default = exports.default = AtrcControlDivider;
//# sourceMappingURL=index.js.map