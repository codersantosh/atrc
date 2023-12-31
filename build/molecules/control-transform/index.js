"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AtrcControlTransformAllowedKeys = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _panelTools = _interopRequireDefault(require("../panel-tools"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _controlUnit = _interopRequireDefault(require("../../atoms/control-unit"));
var _range = _interopRequireDefault(require("../../atoms/range"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _objectValuesWithAllowedKeysAndTabs = require("./../../utils/object-values-with-allowed-keys-and-tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
Type Object
{
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
}
* */

/*WordPress*/

/*Library*/

/*Inbuilt*/

/*Inbuilt*/

/*Local Components*/
var AtrcControlTransformAllowedKeys = exports.AtrcControlTransformAllowedKeys = ['on3D', 'translX', 'translY', 'translZ', 'rotA', 'rotX', 'rotY', 'rotZ', 'sclX', 'sclY', 'sclZ', 'skewX', 'skewY'];
var RenderTabPanel = function RenderTabPanel(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    value = _ref.value,
    setAttr = _ref.setAttr,
    _ref$allow3D = _ref.allow3D,
    allow3D = _ref$allow3D === void 0 ? false : _ref$allow3D,
    _ref$tab = _ref.tab,
    tab = _ref$tab === void 0 ? 'translate' : _ref$tab;
  if ('translate' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, null, label), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlUnit.default, {
      label: (0, _i18n.__)('TranslateX', 'atrc-prefix-atrc'),
      value: value && value.translX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'translX');
      }
    })), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlUnit.default, {
      label: (0, _i18n.__)('TranslateY', 'atrc-prefix-atrc'),
      value: value && value.translY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'translY');
      }
    })), allow3D && /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_controlUnit.default, {
      label: (0, _i18n.__)('TranslateZ', 'atrc-prefix-atrc'),
      value: value && value.translZ,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'translZ');
      }
    })));
  }
  if ('rotate' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, null, label), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('Rotate angle', 'atrc-prefix-atrc'),
      help: (0, _i18n.__)('Unit: deg', 'atrc-prefix-atrc'),
      value: value && value.rotA,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotA');
      },
      min: -360,
      max: 360
    })), allow3D && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('RotateX', 'atrc-prefix-atrc'),
      value: value && value.rotX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotX');
      },
      min: -360,
      max: 360
    })), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('RotateY', 'atrc-prefix-atrc'),
      value: value && value.rotY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotY');
      },
      min: -360,
      max: 360
    })), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('RotateZ', 'atrc-prefix-atrc'),
      value: value && value.rotZ,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'rotZ');
      },
      min: -360,
      max: 360
    }))));
  }
  if ('scale' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, null, label), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('ScaleX', 'atrc-prefix-atrc'),
      value: value && value.sclX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'sclX');
      },
      min: -5,
      max: 5,
      step: 0.1
    })), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('ScaleY', 'atrc-prefix-atrc'),
      value: value && value.sclY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'sclY');
      },
      min: -5,
      max: 5,
      step: 0.1
    })), allow3D && /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('ScaleZ', 'atrc-prefix-atrc'),
      value: value && value.sclZ,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'sclZ');
      },
      min: -5,
      max: 5,
      step: 0.1
    })));
  }
  if ('skew' === tab) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, null, label), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('SkewX', 'atrc-prefix-atrc'),
      help: (0, _i18n.__)('Unit: deg', 'atrc-prefix-atrc'),
      value: value && value.skewX,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'skewX');
      },
      min: -360,
      max: 360
    })), /*#__PURE__*/React.createElement(_panelRow.default, {
      className: (0, _classnames.default)('at-m')
    }, /*#__PURE__*/React.createElement(_range.default, {
      label: (0, _i18n.__)('SkewY', 'atrc-prefix-atrc'),
      help: (0, _i18n.__)('Unit: deg', 'atrc-prefix-atrc'),
      value: value && value.skewY,
      onChange: function onChange(newVal) {
        return setAttr(newVal, 'skewY');
      },
      min: -360,
      max: 360
    })));
  }
  return null;
};
var AtrcControlTransform = function AtrcControlTransform(props) {
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
    _props$allow3D = props.allow3D,
    allow3D = _props$allow3D === void 0 ? false : _props$allow3D;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var resetTranslate = function resetTranslate() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.translX;
    delete valueCloned.translY;
    delete valueCloned.translZ;
    onChange(valueCloned);
  };
  var resetRotate = function resetRotate() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.rotA;
    delete valueCloned.rotX;
    delete valueCloned.rotY;
    delete valueCloned.rotZ;
    onChange(valueCloned);
  };
  var resetScale = function resetScale() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.sclX;
    delete valueCloned.sclY;
    delete valueCloned.sclZ;
    onChange(valueCloned);
  };
  var resetSkew = function resetSkew() {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.skewX;
    delete valueCloned.skewY;
    onChange(valueCloned);
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || (0, _lodash.isEmpty)(value)) {
      return false;
    }
    if (tab === 'translate') {
      return !!((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'translX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'translY') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'translZ'));
    }
    if (tab === 'rotate') {
      return !!((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotY') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotZ') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'rotA'));
    }
    if (tab === 'scale') {
      return !!((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sclX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sclY ') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'sclZ'));
    }
    if (tab === 'skew') {
      return !!((0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'skewX') || (0, _objectValuesWithAllowedKeysAndTabs.AtrcIsKeyWithValueNotEmpty)(value, 'skewY'));
    }
    return false;
  };
  var AllTabs = (0, _element.useMemo)(function () {
    var tabs = [{
      name: 'translate',
      title: (0, _i18n.__)('Translate', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('translate'),
      onDeselect: function onDeselect() {
        return resetTranslate();
      }
    }, {
      name: 'rotate',
      title: (0, _i18n.__)('Rotate', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('rotate'),
      onDeselect: function onDeselect() {
        return resetRotate();
      }
    }, {
      name: 'scale',
      title: (0, _i18n.__)('Scale', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('scale'),
      onDeselect: function onDeselect() {
        return resetScale();
      }
    }, {
      name: 'skew',
      title: (0, _i18n.__)('Skew', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('skew'),
      onDeselect: function onDeselect() {
        return resetSkew();
      }
    }];
    return tabs;
  }, [value]);
  return /*#__PURE__*/React.createElement(_panelTools.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-tf'), className, variant ? (0, _prefixVars.default)('ctrl-tf') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    tools: AllTabs
  }, function (activeItems) {
    return (0, _lodash.map)(activeItems, function (tab, iDx) {
      return /*#__PURE__*/React.createElement(RenderTabPanel, {
        value: value,
        tab: tab,
        setAttr: setAttr,
        allow3D: allow3D,
        key: iDx
      });
    });
  });
};
var _default = exports.default = AtrcControlTransform;
//# sourceMappingURL=index.js.map