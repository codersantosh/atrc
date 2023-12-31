"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _toggle = _interopRequireDefault(require("../../atoms/toggle"));
var _controlUnit = _interopRequireDefault(require("../../atoms/control-unit"));
var _controlAnimationAnimateCss = _interopRequireDefault(require("./../control-animation-animate-css"));
var _controlTransform = _interopRequireDefault(require("./../control-transform"));
var _notice = _interopRequireDefault(require("./../notice"));
var _panelTools = _interopRequireDefault(require("./../panel-tools"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*Attributes Structure
 Type Object
 {
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",

    "type":"",
    "on3D":"",
    "ppv":"",

    "translX":"",
    "translY":"",
    "rotX":"",
    "rotY":"",
    "sclX":"",
    "sclY":"",
    "skewX":"",
    "skewY":"",
    "orgX":"",
    "orgY":"",
    "opa":"",
    "blr":"",
}
 * */ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt*/
/*Local Components*/

/*same for initial and new*/
var mappingPredefinedValues = function mappingPredefinedValues(value) {
  var allowedProperties = (0, _lodash.keys)({
    ani: 0,
    dla: 0,
    dur: 0,
    iter: 0
  });
  return value ? (0, _lodash.reduce)((0, _lodash.filter)((0, _lodash.keys)(value), function (prop) {
    return allowedProperties.includes(prop);
  }), function (obj, prop) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, prop, value[prop]));
  }, {}) : {};
};

/*same for initial and new*/
var allowedProperties = (0, _lodash.keys)({
  ani: 0,
  dla: 0,
  dur: 0,
  iter: 0,
  type: 0,
  on3D: 0,
  ppv: 0,
  translX: 0,
  translY: 0,
  translZ: 0,
  rotX: 0,
  rotY: 0,
  rotZ: 0,
  sclX: 0,
  sclY: 0,
  sclZ: 0,
  skewX: 0,
  skewY: 0,
  opa: 0,
  blr: 0
});
var mappingNewStyleInitialValues = function mappingNewStyleInitialValues(value) {
  return value ? (0, _lodash.reduce)((0, _lodash.filter)((0, _lodash.keys)(value), function (prop) {
    return allowedProperties.includes(prop);
  }), function (obj, prop) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, prop, value[prop]));
  }, {}) : {};
};
var updateValueProps = function updateValueProps(newVal, value) {
  if (!newVal || (0, _lodash.isEmpty)(newVal)) {
    return {};
  }
  var updatedValue = (0, _lodash.merge)({}, value, newVal);
  return (0, _lodash.pick)(updatedValue, allowedProperties);
};
var CustomAnimation = function CustomAnimation(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    value = _ref.value,
    onChange = _ref.onChange,
    resetCustom = _ref.resetCustom;
  var setNewStyleValuesAttr = function setNewStyleValuesAttr(newVal) {
    var newValues = updateValueProps(newVal, value);
    onChange(newValues);
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_toggle.default, {
    label: (0, _i18n.__)('Use 3D Transforms', 'atrc-prefix-atrc'),
    checked: value && value.on3D,
    onChange: function onChange() {
      return setAttr(!(value && value.on3D), 'on3D');
    }
  }), value && value.on3D ? /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('Perspective', 'atrc-prefix-atrc'),
    value: value && value.ppv,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ppv');
    }
  }) : null, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Type', 'atrc-prefix-atrc'),
    value: value && value.type,
    options: [{
      label: (0, _i18n.__)('Visible on scroll', 'atrc-prefix-atrc'),
      value: 'visible'
    }, {
      label: (0, _i18n.__)('Progressive on scroll', 'atrc-prefix-atrc'),
      value: 'progressive'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'type');
    }
  }), /*#__PURE__*/React.createElement(_controlTransform.default, {
    label: 'progressive' === value.type ? (0, _i18n.__)('Final transform', 'atrc-prefix-atrc') : (0, _i18n.__)('New transform', 'atrc-prefix-atrc'),
    value: mappingNewStyleInitialValues(value),
    onChange: setNewStyleValuesAttr,
    allow3D: value && value.on3D,
    allowExtra: true
  }), /*#__PURE__*/React.createElement(_notice.default, {
    isDismissible: false,
    autoDismiss: false
  }, (0, _i18n.__)('Optional:', 'atrc-prefix-atrc'), 'progressive' === value.type ? (0, _i18n.__)('For initial transformation, use the transform options.', 'atrc-prefix-atrc') : (0, _i18n.__)('For a smooth transformation, use the transition options.', 'atrc-prefix-atrc')));
};
var RenderTabPanel = function RenderTabPanel(_ref2) {
  var _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? '' : _ref2$label,
    value = _ref2.value,
    onChange = _ref2.onChange,
    _ref2$tab = _ref2.tab,
    tab = _ref2$tab === void 0 ? 'predefined' : _ref2$tab,
    resetCustom = _ref2.resetCustom;
  if ('predefined' === tab) {
    return /*#__PURE__*/React.createElement(_controlAnimationAnimateCss.default, {
      label: label,
      value: mappingPredefinedValues(value),
      onChange: onChange
    });
  }
  return /*#__PURE__*/React.createElement(CustomAnimation, {
    label: label,
    value: value,
    onChange: onChange,
    resetCustom: resetCustom
  });
};
var AtrcControlAnimationScroll = function AtrcControlAnimationScroll(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedOptions = props.allowedOptions,
    allowedOptions = _props$allowedOptions === void 0 ? true : _props$allowedOptions;
  var doResetPredefined = function doResetPredefined(valueCloned) {
    delete valueCloned.ani;
    delete valueCloned.dla;
    delete valueCloned.dur;
    delete valueCloned.iter;
    return valueCloned;
  };
  var doResetCustom = function doResetCustom(valueCloned) {
    delete valueCloned.type;
    delete valueCloned.on3D;
    delete valueCloned.ppv;
    delete valueCloned.translX;
    delete valueCloned.translY;
    delete valueCloned.translZ;
    delete valueCloned.rotX;
    delete valueCloned.rotY;
    delete valueCloned.rotZ;
    delete valueCloned.sclX;
    delete valueCloned.sclY;
    delete valueCloned.sclZ;
    delete valueCloned.skewX;
    delete valueCloned.skewY;
    delete valueCloned.opa;
    delete valueCloned.blr;
    return valueCloned;
  };
  var setPredefinedAttr = function setPredefinedAttr(newVal) {
    var changedValues = mappingPredefinedValues(newVal);
    onChange(changedValues);
  };
  var setCustomAttr = function setCustomAttr(newVal) {
    onChange(newVal);
  };
  var resetPredefined = function resetPredefined() {
    var valueCloned = Object.assign({}, value);
    onChange(doResetPredefined(valueCloned));
  };
  var resetCustom = function resetCustom() {
    var valueCloned = Object.assign({}, value);
    onChange(doResetCustom(valueCloned));
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    if (tab === 'predefined') {
      return !!(value.ani || value.dla || value.dur || value.iter);
    }
    return !!(value.type || value.on3D || value.ppv || value.translX || value.translY || value.translZ || value.rotX || value.rotY || value.rotZ || value.sclX || value.sclY || value.sclZ || value.skewX || value.skewY || value.opa || value.blr);
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabsOptions = [];
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('predefined')) {
      tabsOptions.push({
        name: 'predefined',
        title: (0, _i18n.__)('Predefined', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('predefined'),
        onDeselect: function onDeselect() {
          return resetPredefined();
        }
      });
    }
    if (true === allowedOptions || (0, _lodash.isArray)(allowedOptions) && allowedOptions.includes('custom')) {
      tabsOptions.push({
        name: 'custom',
        title: (0, _i18n.__)('Custom', 'atrc-prefix-atrc'),
        hasValue: hasTabValue('custom'),
        onDeselect: function onDeselect() {
          return resetCustom();
        }
      });
    }
    return tabsOptions;
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-ani-scr'), className, variant ? (0, _prefixVars.default)('ctrl-ani-scr') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    isRadio: true,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: function onChange(newVal) {
          if ('predefined' === tab) {
            setPredefinedAttr(newVal);
          } else {
            setCustomAttr(newVal);
          }
        },
        tab: tab,
        resetCustom: resetCustom,
        key: iDx
      });
    });
  });
};
var _default = exports.default = AtrcControlAnimationScroll;
//# sourceMappingURL=index.js.map