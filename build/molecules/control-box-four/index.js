"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _element = require("@wordpress/element");
var _components = require("@wordpress/components");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _resetButtonIcon = _interopRequireWildcard(require("../../atoms/reset-button-icon"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["variant", "className", "values", "onChange"];
/*
* Values Structure
Type Object
{
    "r":"",
    "b":"",
    "r":"",
    "l":""
* }
* 
* Expected:
*  also if single value string
* */
/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
/*Library*/
/*Inbuilt*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var RenderBoxControl = function RenderBoxControl(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    values = props.values,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var newObj = {};
  if (values.t) {
    newObj.top = values.t;
  }
  if (values.r) {
    newObj.right = values.r;
  }
  if (values.b) {
    newObj.bottom = values.b;
  }
  if (values.l) {
    newObj.left = values.l;
  }
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-box-four'), className, variant ? (0, _prefixVars.default)('ctrl-box-four') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(_components.__experimentalBoxControl, _extends({
    allowReset: false,
    values: newObj,
    onChange: function onChange(newControl) {
      var newValues = {};
      if (newControl.top) {
        newValues.t = newControl.top;
      }
      if (newControl.right) {
        newValues.r = newControl.right;
      }
      if (newControl.bottom) {
        newValues.b = newControl.bottom;
      }
      if (newControl.left) {
        newValues.l = newControl.left;
      }
      _onChange(newValues);
    },
    inputProps: {
      min: -1000
    }
  }, defaultProps)));
};
var AtrcControlBoxFour = function AtrcControlBoxFour(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$values = props.values,
    values = _props$values === void 0 ? '' : _props$values,
    _props$valueType = props.valueType,
    valueType = _props$valueType === void 0 ? '' : _props$valueType,
    _props$splitOnAxis = props.splitOnAxis,
    splitOnAxis = _props$splitOnAxis === void 0 ? false : _props$splitOnAxis,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? undefined : _props$defaultValue,
    onChange = props.onChange;
  var setChange = function setChange(newValues) {
    if ('string' === valueType) {
      /* split is for inhouse fix */
      var stringValue = '';
      if (splitOnAxis) {
        var topVal = newValues.t || '';
        var splitedTopVal = topVal.split(' ');
        var rightVal = newValues.r || '';
        var splitedRightVal = rightVal.split(' ');
        stringValue = "".concat(splitedTopVal[0], " ").concat(splitedRightVal[0]);
      } else {
        var _topVal = newValues.t || '';
        var _splitedTopVal = _topVal.split(' ');
        var _rightVal = newValues.r || '';
        var _splitedRightVal = _rightVal.split(' ');
        var bottomVal = newValues.b || '';
        var splitedBottomVal = bottomVal.split(' ');
        var leftVal = newValues.l || '';
        var splitedLeftVal = leftVal.split(' ');
        stringValue = "".concat(_splitedTopVal[0], " ").concat(_splitedRightVal[0], " ").concat(splitedBottomVal[0], " ").concat(splitedLeftVal[0]);
      }
      onChange(stringValue);
    } else {
      onChange(newValues);
    }
  };
  var objValues = (0, _element.useMemo)(function () {
    var objVal = {};
    if (typeof values === 'string') {
      var splitedValues = values.split(' ');
      var countValues = splitedValues.length;
      if (splitOnAxis) {
        objVal.t = splitedValues[0];
        objVal.r = splitedValues[1];
        objVal.b = splitedValues[0];
        objVal.l = splitedValues[1];
      } else {
        switch (countValues) {
          case 1:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[0];
            objVal.b = splitedValues[0];
            objVal.l = splitedValues[0];
            break;
          case 2:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[1];
            objVal.b = splitedValues[0];
            objVal.l = splitedValues[1];
            break;
          case 3 /* css shorthand */:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[1];
            objVal.b = splitedValues[3];
            objVal.l = splitedValues[1];
            break;
          case 4:
            objVal.t = splitedValues[0];
            objVal.r = splitedValues[1];
            objVal.b = splitedValues[2];
            objVal.l = splitedValues[3];
            break;
          default:
            break;
        }
      }
    } else if (values) {
      objVal = (0, _lodash.cloneDeep)(values);
    }
    return objVal;
  }, [values, valueType, values]);
  if (allowReset) {
    return /*#__PURE__*/React.createElement(_resetButtonIcon.AtrcResetWrap, {
      className: (0, _classnames.default)((0, _prefixVars.default)('box-four-rst'))
    }, /*#__PURE__*/React.createElement(RenderBoxControl, _extends({}, props, {
      values: objValues,
      splitOnAxis: splitOnAxis,
      onChange: setChange
    })), /*#__PURE__*/React.createElement(_resetButtonIcon.default, {
      defaultValue: defaultValue,
      value: objValues,
      onClick: function onClick() {
        return onChange(undefined);
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderBoxControl, props);
};
var _default = exports.default = AtrcControlBoxFour;
//# sourceMappingURL=index.js.map