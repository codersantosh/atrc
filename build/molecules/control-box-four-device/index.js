function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type Object
{
    "t":"",
    "b":"",
    "r":"",
    "l":"",
    "xs":"",

    "smT":"",
    "smB":"",
    "smR":"",
    "smL":"",
    "sm":"",

    "mdT": "",
    "mdB": "",
    "mdR": "",
    "mdL": "",
    "md": "",

    "lgT":"",
    "lgB":"",
    "lgR":"",
    "lgL":"",
    "lg":"",

    "xlT":"",
    "xlB":"",
    "xlR":"",
    "xlL":"",
    "xl":"",

    "xxlT":"",
    "xxlB":"",
    "xxlR":"",
    "xxlL":"",
    "xxl":"",
}
* */

/*Library*/
import { isArray, isString } from 'lodash';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcControlBoxFour from '../control-box-four';
import AtrcDropdownDevice from '../dropdown-device';

/*Inbuilt Utils*/
import AtrcAvailableDevices from '../../utils/available-devices';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export var AtrcControlBoxFourDeviceAllowedKeys = ['xs', 't', 'b', 'r', 'l', 'sm', 'smT', 'smR', 'smB', 'smL', 'md', 'mdT', 'mdR', 'mdB', 'mdL', 'lg', 'lgT', 'lgR', 'lgB', 'lgL', 'xl', 'xlT', 'xlR', 'xlB', 'xlL', 'xxl', 'xxlT', 'xxlR', 'xxlB', 'xxlL'];
function mappingDeviceBoxFourValues(_ref) {
  var value = _ref.value,
    device = _ref.device,
    valueType = _ref.valueType,
    splitOnAxis = _ref.splitOnAxis;
  if (value && value[device]) {
    if ('string' === valueType) {
      return value[device];
    }
    return {
      t: value[device],
      r: value[device],
      b: value[device],
      l: value[device]
    };
  }
  if ('xs' === device) {
    if ('string' === valueType) {
      return value && value.t;
    }
    return {
      t: value && value.t,
      r: value && value.r,
      b: value && value.b,
      l: value && value.l
    };
  }
  if ('string' === valueType) {
    return value && value[device + 'T'];
  }
  return {
    t: value && value[device + 'T'],
    r: value && value[device + 'R'],
    b: value && value[device + 'B'],
    l: value && value[device + 'L']
  };
}
var RenderTab = function RenderTab(_ref2) {
  var device = _ref2.device,
    value = _ref2.value,
    _onChange = _ref2.onChange,
    _ref2$boxFourProps = _ref2.boxFourProps,
    boxFourProps = _ref2$boxFourProps === void 0 ? {} : _ref2$boxFourProps;
  var _boxFourProps$valueTy = boxFourProps.valueType,
    valueType = _boxFourProps$valueTy === void 0 ? '' : _boxFourProps$valueTy,
    _boxFourProps$splitOn = boxFourProps.splitOnAxis,
    splitOnAxis = _boxFourProps$splitOn === void 0 ? false : _boxFourProps$splitOn;
  return /*#__PURE__*/React.createElement(AtrcControlBoxFour, _extends({
    label: "",
    values: mappingDeviceBoxFourValues({
      value: value,
      device: device,
      valueType: valueType,
      splitOnAxis: splitOnAxis
    }),
    onChange: function onChange(newVal) {
      return _onChange(newVal, device);
    }
  }, boxFourProps));
};

/*XS*/
var mappingNormalNewXsValues = function mappingNormalNewXsValues(value) {
  if (value && value.t === value.r === value.b === value.l) {
    return {
      xs: value.t
    };
  }
  /*string check done below*/
  return {
    t: value && value.t,
    r: value && value.r,
    b: value && value.b,
    l: value && value.l
  };
};

/*Other responsive devices*/
var mappingNormalNewResponsiveValues = function mappingNormalNewResponsiveValues(value, device) {
  if (value && value.t === value.r === value.b === value.l) {
    return _defineProperty({}, device, value.t);
  }
  /*string check done below*/
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, device + 'T', value && value.t), device + 'R', value && value.r), device + 'B', value && value.b), device + 'L', value && value.l);
};
function mappingDeviceNewValues(_ref5) {
  var value = _ref5.value,
    device = _ref5.device,
    newVal = _ref5.newVal;
  var valueCloned = Object.assign({}, value);
  var newValues = {};
  if ('xs' === device) {
    delete valueCloned.t;
    delete valueCloned.r;
    delete valueCloned.b;
    delete valueCloned.l;
    delete valueCloned.xs;
    if (isString(newVal)) {
      valueCloned.xs = newVal;
      newValues = valueCloned;
    } else {
      var changedValues = mappingNormalNewXsValues(newVal);
      newValues = _objectSpread(_objectSpread({}, valueCloned), changedValues);
    }
  } else {
    delete valueCloned[device + 'T'];
    delete valueCloned[device + 'R'];
    delete valueCloned[device + 'B'];
    delete valueCloned[device + 'L'];
    delete valueCloned[device];
    if (isString(newVal)) {
      valueCloned[device] = newVal;
      newValues = valueCloned;
    } else {
      var _changedValues = mappingNormalNewResponsiveValues(newVal, device);
      newValues = _objectSpread(_objectSpread({}, valueCloned), _changedValues);
    }
  }
  return newValues;
}
var AtrcControlBoxFourDevice = function AtrcControlBoxFourDevice(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    _onChange2 = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowedDevices = props.allowedDevices,
    allowedDevices = _props$allowedDevices === void 0 ? true : _props$allowedDevices,
    _props$boxFourProps = props.boxFourProps,
    boxFourProps = _props$boxFourProps === void 0 ? {} : _props$boxFourProps;

  /* Return null since no device */
  if (!allowedDevices) {
    return null;
  }
  var Devices = function Devices() {
    if (isArray(allowedDevices)) {
      return allowedDevices;
    }
    return AtrcAvailableDevices();
  };
  return /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: label,
    tabs: Devices(),
    className: classnames(AtrcPrefix('ctrl-box-four-device'), className, variant ? AtrcPrefix('ctrl-box-four-device') + '-' + variant : '')
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: function onChange(newVal, device) {
        return _onChange2(mappingDeviceNewValues({
          value: value,
          device: device,
          newVal: newVal
        }));
      },
      boxFourProps: boxFourProps
    });
  });
};
export default AtrcControlBoxFourDevice;
//# sourceMappingURL=index.js.map