"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _label = _interopRequireDefault(require("../../atoms/label"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _toggle = _interopRequireDefault(require("../../atoms/toggle"));
var _controlUnit = _interopRequireDefault(require("../../atoms/control-unit"));
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _notice = _interopRequireDefault(require("../notice"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlTransform = _interopRequireWildcard(require("../control-transform"));
var _objectValuesWithAllowedKeysAndTabs = require("../../utils/object-values-with-allowed-keys-and-tabs");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*Attributes Structure
Type Object
{
========*Global values*========
    "on3D":"",
    "ppv":"",
    "orgX":"",
    "orgY":"",
    "orgZ":"",

========*Normal values*========
    "translX":"",
    "translY":"",
    "translZ":"",
    "rotA":"",
    "rotX":"",
    "rotY":"",
    "rotZ":"",
    "sclX":"",
    "sclY":"",
    "sclZ":"",
    "skewX":"",
    "skewY":"",

========*Hover values*========
    "translXHover":"",
    "translYHover":"",
    "translZHover":"",
    "rotAHover":"",
    "rotXHover":"",
    "rotYHover":"",
    "rotZHover":"",
    "sclXHover":"",
    "sclYHover":"",
    "sclZHover":"",
    "skewXHover":"",
    "skewYHover":"",
}
* */ /*WordPress*/ /*Library*/ /*Inbuilt*/ /*Inbuilt utils*/ /*Prefix*/
/*Local Components*/
var AtrcOrigin = function AtrcOrigin(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$allow3D = _ref.allow3D,
    allow3D = _ref$allow3D === void 0 ? false : _ref$allow3D;
  var _value$orgX = value.orgX,
    orgX = _value$orgX === void 0 ? '' : _value$orgX,
    _value$orgY = value.orgY,
    orgY = _value$orgY === void 0 ? '' : _value$orgY,
    _value$orgZ = value.orgZ,
    orgZ = _value$orgZ === void 0 ? '' : _value$orgZ;
  var _useState = (0, _element.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    selectedX = _useState2[0],
    setSelectedX = _useState2[1];
  var _useState3 = (0, _element.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedY = _useState4[0],
    setSelectedY = _useState4[1];

  /*Run only once on mount*/
  (0, _element.useEffect)(function () {
    if (!['', 'left', 'center', 'right'].includes(orgX)) {
      setSelectedX('custom');
    } else {
      setSelectedX(orgX);
    }
    if (!['', 'top', 'center', 'bottom'].includes(orgX)) {
      setSelectedY('custom');
    } else {
      setSelectedY(orgY);
    }
  }, []);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  /*Run on change selectedTransform*/
  (0, _element.useEffect)(function () {
    var valueCloned = Object.assign({}, value);
    if ('custom' !== selectedX) {
      valueCloned.orgX = selectedX;
    } else {
      valueCloned.orgX = 0;
    }
    if ('custom' !== selectedY) {
      valueCloned.orgY = selectedY;
    } else {
      valueCloned.orgY = 0;
    }
    onChange(valueCloned);
  }, [selectedX, selectedY]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, null, allow3D ? (0, _i18n.__)('3D transformations origin', 'atrc-prefix-atrc') : (0, _i18n.__)('2D transformations origin', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('OriginX', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: selectedX,
    options: [{
      label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: (0, _i18n.__)('Left', 'atrc-prefix-atrc'),
      value: 'left'
    }, {
      label: (0, _i18n.__)('Center', 'atrc-prefix-atrc'),
      value: 'center'
    }, {
      label: (0, _i18n.__)('Right', 'atrc-prefix-atrc'),
      value: 'right'
    }, {
      label: (0, _i18n.__)('Custom', 'atrc-prefix-atrc'),
      value: 'custom'
    }],
    onChange: function onChange(newVal) {
      return setSelectedX(newVal);
    }
  })), 'custom' === selectedX ? /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('Custom value', 'atrc-prefix-atrc'),
    value: orgX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'orgX');
    }
  })) : null, /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_select.default, {
    label: (0, _i18n.__)('OriginY', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: selectedY,
    options: [{
      label: (0, _i18n.__)('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: (0, _i18n.__)('Top', 'atrc-prefix-atrc'),
      value: 'top'
    }, {
      label: (0, _i18n.__)('Center', 'atrc-prefix-atrc'),
      value: 'center'
    }, {
      label: (0, _i18n.__)('Bottom', 'atrc-prefix-atrc'),
      value: 'bottom'
    }, {
      label: (0, _i18n.__)('Custom', 'atrc-prefix-atrc'),
      value: 'custom'
    }],
    onChange: function onChange(newVal) {
      return setSelectedY(newVal);
    }
  })), 'custom' === selectedY ? /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('OriginY', 'atrc-prefix-atrc'),
    value: orgY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'orgY');
    }
  })) : null, allow3D ? /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('OriginZ', 'atrc-prefix-atrc'),
    value: orgZ,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'orgZ');
    }
  })) : null);
};
var RenderTabPanel = function RenderTabPanel(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    setAttr = _ref2.setAttr,
    AllTabs = _ref2.AllTabs,
    setTabAttr = _ref2.setTabAttr,
    resetOrigin = _ref2.resetOrigin,
    OriginTabs = _ref2.OriginTabs,
    setOrigin = _ref2.setOrigin;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_toggle.default, {
    label: (0, _i18n.__)('Use 3D Transforms', 'atrc-prefix-atrc'),
    checked: value && value.on3D,
    onChange: function onChange() {
      return setAttr(!(value && value.on3D), 'on3D');
    }
  })), value && value.on3D && /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnit.default, {
    label: (0, _i18n.__)('Perspective', 'atrc-prefix-atrc'),
    value: value && value.ppv,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ppv');
    }
  })), /*#__PURE__*/React.createElement(_panelTools.default, {
    label: (0, _i18n.__)('Transform options', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTabs)(value, _controlTransform.AtrcControlTransformAllowedKeys));
    },
    allowTabs: true,
    tools: AllTabs
  }, function (activeInnerItems) {
    return (0, _lodash.map)(activeInnerItems, function (innerTab, iDx1) {
      return /*#__PURE__*/React.createElement(_element.Fragment, {
        key: iDx1 + innerTab
      }, /*#__PURE__*/React.createElement(_controlTransform.default, {
        label: (0, _i18n.__)('Add transform options', 'atrc-prefix-atrc'),
        value: (0, _objectValuesWithAllowedKeysAndTabs.AtrcGetTabValues)(value, innerTab, _controlTransform.AtrcControlTransformAllowedKeys),
        onChange: function onChange(newVal) {
          return setTabAttr(newVal, innerTab);
        },
        allow3D: value && value.on3D
      }), 'normal' !== innerTab ? /*#__PURE__*/React.createElement(_notice.default, {
        isDismissible: false,
        autoDismiss: false
      }, (0, _i18n.__)('For a smooth transformation on hover, use the transition options properly.', 'atrc-prefix-atrc')) : null);
    });
  }), /*#__PURE__*/React.createElement(_panelTools.default, {
    label: (0, _i18n.__)('Origin', 'atrc-prefix-atrc'),
    resetAll: resetOrigin,
    tools: OriginTabs
  }, function (activeInnerItems) {
    return (0, _lodash.map)(activeInnerItems, function (tab2, iDx2) {
      return /*#__PURE__*/React.createElement(AtrcOrigin, {
        value: {
          orgX: value && value.orgX,
          orgY: value && value.orgY,
          orgZ: value && value.orgZ
        },
        onChange: setOrigin,
        allow3D: value && value.on3D,
        key: 'org' + iDx2
      });
    });
  }));
};
var AtrcControlTransformTab = function AtrcControlTransformTab(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$allowedTabs = props.allowedTabs,
    allowedTabs = _props$allowedTabs === void 0 ? ['normal', 'hover'] : _props$allowedTabs;
  var setTabAttr = function setTabAttr(newVal, tab) {
    onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcUpdateTabValues)(newVal, tab, value, _controlTransform.AtrcControlTransformAllowedKeys));
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setOrigin = function setOrigin(newVal) {
    var valueCloned = Object.assign({}, value);
    if (newVal.orgX) {
      valueCloned.orgX = newVal.orgX;
    } else {
      delete valueCloned.orgX;
    }
    if (newVal.orgY) {
      valueCloned.orgY = newVal.orgY;
    } else {
      delete valueCloned.orgY;
    }
    if (newVal.orgZ) {
      valueCloned.orgZ = newVal.orgZ;
    } else {
      delete valueCloned.orgZ;
    }
    onChange(valueCloned);
  };
  var resetOrigin = function resetOrigin() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.orgX;
    delete valueCloned.orgY;
    delete valueCloned.orgZ;
    onChange(valueCloned);
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [];
    if (allowedTabs.includes('normal'.toLowerCase())) {
      tabs.push({
        name: 'normal',
        title: (0, _i18n.__)('Normal', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('normal', value, _controlTransform.AtrcControlTransformAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('normal', value, _controlTransform.AtrcControlTransformAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('hover'.toLowerCase())) {
      tabs.push({
        name: 'Hover',
        title: (0, _i18n.__)('Hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('Hover', value, _controlTransform.AtrcControlTransformAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('Hover', value, _controlTransform.AtrcControlTransformAllowedKeys));
        }
      });
    }
    if (allowedTabs.includes('parenthover'.toLowerCase())) {
      tabs.push({
        name: 'ParentHover',
        title: (0, _i18n.__)('Parent hover', 'atrc-prefix-atrc'),
        hasValue: (0, _objectValuesWithAllowedKeysAndTabs.AtrcHasTabValues)('ParentHover', value, _controlTransform.AtrcControlTransformAllowedKeys),
        onDeselect: function onDeselect() {
          return onChange((0, _objectValuesWithAllowedKeysAndTabs.AtrcResetTab)('ParentHover', value, _controlTransform.AtrcControlTransformAllowedKeys));
        }
      });
    }
    return tabs;
  }, [value]);
  var OriginTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'origin',
      title: (0, _i18n.__)('Origin', 'atrc-prefix-atrc'),
      hasValue: !!(value && (value.orgX || value.orgY || value.orgZ)),
      onDeselect: function onDeselect() {
        return resetOrigin();
      }
    }];
  }, []);
  var TransformMainTabs = (0, _element.useMemo)(function () {
    return [{
      name: 'transform',
      title: label,
      hasValue: !(0, _lodash.isEmpty)(value),
      onDeselect: function onDeselect() {
        return onChange({});
      }
    }];
  }, []);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-tf-tab'), className, variant ? (0, _prefixVars.default)('ctrl-tf-tab') + '-' + variant : ''),
    label: label,
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: TransformMainTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        onChange: onChange,
        tab: tab,
        setAttr: setAttr,
        AllTabs: AllTabs,
        setTabAttr: setTabAttr,
        resetOrigin: resetOrigin,
        OriginTabs: OriginTabs,
        setOrigin: setOrigin,
        key: iDx
      });
    });
  });
};
var _default = exports.default = AtrcControlTransformTab;
//# sourceMappingURL=index.js.map