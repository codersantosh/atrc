"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _toggle = _interopRequireDefault(require("../../atoms/toggle"));
var _textarea = _interopRequireDefault(require("../../atoms/textarea"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlDropdownHtml = _interopRequireWildcard(require("../control-dropdown-html"));
var _controlDropdownColor = _interopRequireDefault(require("../control-dropdown-color"));
var _controlResponsiveWidthHeight = _interopRequireDefault(require("../control-responsive-width-height"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _lodash = require("lodash");
var _excluded = ["flipV", "flipH"];
/*Attributes Structure
Type Object
{
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    flipV = '',
    flipH = '',

    w = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    h = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components */
var SelectedShape = function SelectedShape(value, options) {
  var selectedShape = options.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
var SvgShapeDefined = function SvgShapeDefined(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    options = _ref.options;
  var selectedShape = SelectedShape(value, options);
  var icon = selectedShape && selectedShape.svg;
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlDropdownHtml.default, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, null, (0, _i18n.__)('Choose svg', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(_controlDropdownHtml.AtrcIconPreview, {
      icon: icon
    })),
    value: value,
    onChange: onChange,
    options: options
  }));
};
var SvgShape = function SvgShape(_ref2) {
  var from = _ref2.from,
    def = _ref2.def,
    cust = _ref2.cust,
    definedOptions = _ref2.definedOptions,
    _onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('Source', 'atrc-prefix-atrc'),
    value: from,
    options: [{
      label: (0, _i18n.__)('Defined', 'atrc-prefix-atrc'),
      value: 'def'
    }, {
      label: (0, _i18n.__)('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgFrm');
    }
  })), 'def' === from ? /*#__PURE__*/React.createElement(SvgShapeDefined, {
    value: def,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgDefd');
    },
    options: definedOptions
  }) : /*#__PURE__*/React.createElement(_textarea.default, {
    value: cust,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgCust');
    }
  }));
};
var ShapeSettings = function ShapeSettings(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$flipV = value.flipV,
    flipV = _value$flipV === void 0 ? false : _value$flipV,
    _value$flipH = value.flipH,
    flipH = _value$flipH === void 0 ? false : _value$flipH,
    imgProps = _objectWithoutProperties(value, _excluded);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setWidthHeight = function setWidthHeight(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.w;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.h;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVal);
    onChange(valueCloned);
  };
  var AllTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'flipV',
      title: (0, _i18n.__)('Flip vertically', 'atrc-prefix-atrc'),
      hasValue: flipV,
      onDeselect: function onDeselect() {
        return setAttr(false, 'flipV');
      }
    }, {
      name: 'flipH',
      title: (0, _i18n.__)('Flip horizontally', 'atrc-prefix-atrc'),
      hasValue: flipH,
      onDeselect: function onDeselect() {
        return setAttr(false, 'flipH');
      }
    }, {
      name: 'sz',
      title: (0, _i18n.__)('Size', 'atrc-prefix-atrc'),
      hasValue: !(0, _lodash.isEmpty)(imgProps),
      onDeselect: function onDeselect() {
        return setWidthHeight({});
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelTools.default, {
    label: (0, _i18n.__)('Shape options', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (item, iDx) {
      if ('flipV' === item) {
        return /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Flip vertically', 'atrc-prefix-atrc'),
          checked: flipV,
          onChange: function onChange() {
            return setAttr(!flipV, 'flipV');
          },
          key: iDx
        });
      }
      if ('flipH' === item) {
        return /*#__PURE__*/React.createElement(_toggle.default, {
          label: (0, _i18n.__)('Flip horizontally', 'atrc-prefix-atrc'),
          checked: flipH,
          onChange: function onChange() {
            return setAttr(!flipH, 'flipH');
          },
          key: iDx
        });
      }
      if ('sz' === item) {
        return /*#__PURE__*/React.createElement(_controlResponsiveWidthHeight.default, {
          label: (0, _i18n.__)('Size', 'atrc-prefix-atrc'),
          value: _objectSpread({}, imgProps),
          onChange: setWidthHeight,
          key: iDx
        });
      }
      return null;
    });
  }));
};
var AtrcControlSvg = function AtrcControlSvg(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$definedOptions = props.definedOptions,
    definedOptions = _props$definedOptions === void 0 ? [] : _props$definedOptions,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$alloweColor = props.alloweColor,
    alloweColor = _props$alloweColor === void 0 ? true : _props$alloweColor,
    _props$alloweSettings = props.alloweSettings,
    alloweSettings = _props$alloweSettings === void 0 ? true : _props$alloweSettings,
    _props$onChange2 = props.onChange,
    _onChange2 = _props$onChange2 === void 0 ? function () {} : _props$onChange2;
  var _value$svgFrm = value.svgFrm,
    svgFrm = _value$svgFrm === void 0 ? 'def' : _value$svgFrm,
    _value$svgDefd = value.svgDefd,
    svgDefd = _value$svgDefd === void 0 ? '' : _value$svgDefd,
    _value$svgCust = value.svgCust,
    svgCust = _value$svgCust === void 0 ? '' : _value$svgCust,
    _value$svgCl = value.svgCl,
    svgCl = _value$svgCl === void 0 ? '' : _value$svgCl,
    _value$flipV2 = value.flipV,
    flipV = _value$flipV2 === void 0 ? false : _value$flipV2,
    _value$flipH2 = value.flipH,
    flipH = _value$flipH2 === void 0 ? false : _value$flipH2,
    _value$w = value.w,
    w = _value$w === void 0 ? '' : _value$w,
    _value$smW = value.smW,
    smW = _value$smW === void 0 ? '' : _value$smW,
    _value$mdW = value.mdW,
    mdW = _value$mdW === void 0 ? '' : _value$mdW,
    _value$lgW = value.lgW,
    lgW = _value$lgW === void 0 ? '' : _value$lgW,
    _value$xlW = value.xlW,
    xlW = _value$xlW === void 0 ? '' : _value$xlW,
    _value$xxlW = value.xxlW,
    xxlW = _value$xxlW === void 0 ? '' : _value$xxlW,
    _value$h = value.h,
    h = _value$h === void 0 ? '' : _value$h,
    _value$smH = value.smH,
    smH = _value$smH === void 0 ? '' : _value$smH,
    _value$mdH = value.mdH,
    mdH = _value$mdH === void 0 ? '' : _value$mdH,
    _value$lgH = value.lgH,
    lgH = _value$lgH === void 0 ? '' : _value$lgH,
    _value$xlH = value.xlH,
    xlH = _value$xlH === void 0 ? '' : _value$xlH,
    _value$xxlH = value.xxlH,
    xxlH = _value$xxlH === void 0 ? '' : _value$xxlH;
  var setAttr = function setAttr(newVal, tp) {
    var valueCloned = Object.assign({}, value);
    switch (tp) {
      case 'svgDefd':
        delete valueCloned.svgCust;
        break;
      case 'svgCust':
        delete valueCloned.svgDefd;
        break;
      default:
        break;
    }
    valueCloned[tp] = newVal;
    _onChange2(valueCloned);
  };
  var setShapeSettings = function setShapeSettings(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.flipV;
    delete valueCloned.flipH;
    delete valueCloned.w;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.h;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVal);
    _onChange2(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-shp'), className, variant ? (0, _prefixVars.default)('ctrl-shp') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(SvgShape, {
    from: svgFrm,
    def: svgDefd,
    cust: svgCust,
    onChange: setAttr,
    definedOptions: definedOptions
  }), alloweColor && 'def' === svgFrm ? /*#__PURE__*/React.createElement(_controlDropdownColor.default, {
    label: (0, _i18n.__)('Color', 'atrc-prefix-atrc'),
    value: svgCl,
    onChange: function onChange(newVal) {
      return _onChange2(newVal, 'svgCl');
    }
  }) : null, alloweSettings && svgDefd ? /*#__PURE__*/React.createElement(ShapeSettings, {
    value: {
      flipV: flipV,
      flipH: flipH,
      w: w,
      smW: smW,
      mdW: mdW,
      lgW: lgW,
      xlW: xlW,
      xxlW: xxlW,
      h: h,
      smH: smH,
      mdH: mdH,
      lgH: lgH,
      xlH: xlH,
      xxlH: xxlH
    },
    onChange: setShapeSettings
  }) : null);
};
var _default = exports.default = AtrcControlSvg;
//# sourceMappingURL=index.js.map