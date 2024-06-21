function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';

/*Attributes Structure
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
    "rotA":"",
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
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, reduce, filter, keys, merge, pick, isArray, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlUnit from '../control-unit';
import AtrcControlAnimationAnimateCss from '../control-animation-animate-css';
import AtrcControlTransform from '../control-transform';

/* Molecules */
import AtrcNotice from '../../molecules/notice';
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/

/*same for initial and new*/
var mappingPredefinedValues = function mappingPredefinedValues(value) {
  var allowedProperties = keys({
    ani: 0,
    dla: 0,
    dur: 0,
    iter: 0
  });
  return value ? reduce(filter(keys(value), function (prop) {
    return allowedProperties.includes(prop);
  }), function (obj, prop) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, prop, value[prop]));
  }, {}) : {};
};

/*same for initial and new*/
var allowedProperties = keys({
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
  rotA: 0,
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
  return value ? reduce(filter(keys(value), function (prop) {
    return allowedProperties.includes(prop);
  }), function (obj, prop) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, prop, value[prop]));
  }, {}) : {};
};
var updateValueProps = function updateValueProps(newVal, value) {
  if (!newVal || isEmpty(newVal)) {
    return {};
  }
  var updatedValue = merge({}, value, newVal);
  return pick(updatedValue, allowedProperties);
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
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Use 3D Transforms', 'atrc-prefix-atrc'),
    checked: value && value.on3D,
    onChange: function onChange() {
      return setAttr(!(value && value.on3D), 'on3D');
    }
  })), value && value.on3D ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Perspective', 'atrc-prefix-atrc'),
    value: value && value.ppv,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ppv');
    }
  })) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Type', 'atrc-prefix-atrc'),
    value: value && value.type,
    options: [{
      label: __('Visible on scroll', 'atrc-prefix-atrc'),
      value: 'visible'
    }, {
      label: __('Progressive on scroll', 'atrc-prefix-atrc'),
      value: 'progressive'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'type');
    }
  })), /*#__PURE__*/React.createElement(AtrcControlTransform, {
    label: 'progressive' === value.type ? __('Final transform', 'atrc-prefix-atrc') : __('New transform', 'atrc-prefix-atrc'),
    value: mappingNewStyleInitialValues(value),
    onChange: setNewStyleValuesAttr,
    allow3D: value && value.on3D,
    allowExtra: true
  }), /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false,
    autoDismiss: false
  }, __('Optional:', 'atrc-prefix-atrc'), 'progressive' === value.type ? __('For initial transformation, use the transform options.', 'atrc-prefix-atrc') : __('For a smooth transformation, use the transition options.', 'atrc-prefix-atrc')));
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
    return /*#__PURE__*/React.createElement(AtrcControlAnimationAnimateCss, {
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
    label = _props$label === void 0 ? __('Animation scroll', 'atrc-prefix-atrc') : _props$label,
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
    delete valueCloned.rotA;
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
    onChange(doResetCustom(changedValues));
  };
  var setCustomAttr = function setCustomAttr(newVal) {
    onChange(doResetPredefined(newVal));
  };
  var resetPredefined = function resetPredefined() {
    var valueCloned = cloneDeep(value);
    onChange(doResetPredefined(valueCloned));
  };
  var resetCustom = function resetCustom() {
    var valueCloned = cloneDeep(value);
    onChange(doResetCustom(valueCloned));
  };
  var resetAll = function resetAll() {
    onChange({});
  };
  var hasTabValue = function hasTabValue(tab) {
    if (!value || isEmpty(value)) {
      return false;
    }
    if (tab === 'predefined') {
      return !!(value.ani || value.dla || value.dur || value.iter);
    }
    return !!(value.type || value.on3D || value.ppv || value.translX || value.translY || value.translZ || value.rotA || value.rotX || value.rotY || value.rotZ || value.sclX || value.sclY || value.sclZ || value.skewX || value.skewY || value.opa || value.blr);
  };
  var AllTabs = [];
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('predefined')) {
    AllTabs.push({
      name: 'predefined',
      title: __('Predefined', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('predefined'),
      onDeselect: function onDeselect() {
        return resetPredefined();
      }
    });
  }
  if (true === allowedOptions || isArray(allowedOptions) && allowedOptions.includes('custom')) {
    AllTabs.push({
      name: 'custom',
      title: __('Custom', 'atrc-prefix-atrc'),
      hasValue: hasTabValue('custom'),
      onDeselect: function onDeselect() {
        return resetCustom();
      }
    });
  }
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('ctrl-ani-scr'), className, variant ? AtrcPrefix('ctrl-ani-scr') + '-' + variant : ''),
    label: label,
    resetAll: resetAll,
    isRadio: true,
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (tab, iDx) {
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
export default AtrcControlAnimationScroll;
//# sourceMappingURL=index.js.map