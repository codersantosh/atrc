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
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    flipV = '',
    flipH = '',

    xsW = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    xsH = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { map, cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlToggle from '../control-toggle';
import AtrcControlTextarea from '../control-textarea';
import AtrcControlDropdownHtml from '../control-dropdown-html';
import AtrcControlDropdownColor from '../control-dropdown-color';
import AtrcControlWidthHeight from '../control-width-height';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcPanelRow from '../../molecules/panel-row';

/* Utils */
import AtrcObjDeleteEmptyKey from '../../utils/object-delete-empty-key';
import { AtrcHasDeviceValues } from '../../utils/object-values-with-devices';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* Local */
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-flx-grw-1 at-m')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Choose svg', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-flx-grw-1 at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownHtml, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(AtrcIcon, {
      icon: icon
    }) : /*#__PURE__*/React.createElement(AtrcText, null, __('Choose svg', 'atrc-prefix-atrc'))),
    value: value,
    onChange: onChange,
    options: options
  })));
};
var SvgShape = function SvgShape(_ref2) {
  var from = _ref2.from,
    def = _ref2.def,
    cust = _ref2.cust,
    definedOptions = _ref2.definedOptions,
    _onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Source', 'atrc-prefix-atrc'),
    value: from,
    options: [{
      label: __('Defined', 'atrc-prefix-atrc'),
      value: 'def'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
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
  }) : /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlTextarea, {
    className: classnames('at-flx-grw-1'),
    value: cust,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'svgCust');
    }
  })));
};
var ShapeSettings = function ShapeSettings(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var _value$flipV = value.flipV,
    flipV = _value$flipV === void 0 ? false : _value$flipV,
    _value$flipH = value.flipH,
    flipH = _value$flipH === void 0 ? false : _value$flipH,
    xsW = value.xsW,
    smW = value.smW,
    mdW = value.mdW,
    lgW = value.lgW,
    xlW = value.xlW,
    xxlW = value.xxlW,
    xsH = value.xsH,
    smH = value.smH,
    mdH = value.mdH,
    lgH = value.lgH,
    xlH = value.xlH,
    xxlH = value.xxlH;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  var setWidthHeight = function setWidthHeight(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.xsW;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.xsH;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    if (newVal.h) {
      valueCloned.xsH = newVal.h.xs;
      valueCloned.smH = newVal.h.sm;
      valueCloned.mdH = newVal.h.md;
      valueCloned.lgH = newVal.h.lg;
      valueCloned.xlH = newVal.h.xl;
      valueCloned.xxlH = newVal.h.xxl;
    }
    if (newVal.w) {
      valueCloned.xsW = newVal.w.xs;
      valueCloned.smW = newVal.w.sm;
      valueCloned.mdW = newVal.w.md;
      valueCloned.lgW = newVal.w.lg;
      valueCloned.xlW = newVal.w.xl;
      valueCloned.xxlW = newVal.w.xxl;
    }
    onChange(valueCloned);
  };
  var AllTabs = [{
    name: 'flipV',
    title: __('Flip vertically', 'atrc-prefix-atrc'),
    hasValue: flipV,
    onDeselect: function onDeselect() {
      return setAttr(false, 'flipV');
    }
  }, {
    name: 'flipH',
    title: __('Flip horizontally', 'atrc-prefix-atrc'),
    hasValue: flipH,
    onDeselect: function onDeselect() {
      return setAttr(false, 'flipH');
    }
  }, {
    name: 'sz',
    title: __('Size', 'atrc-prefix-atrc'),
    hasValue: AtrcHasDeviceValues(value, 'w') || AtrcHasDeviceValues(value, 'h'),
    onDeselect: function onDeselect() {
      return setWidthHeight({});
    }
  }];
  return /*#__PURE__*/React.createElement(AtrcPanelTools, {
    label: __('Shape options', 'atrc-prefix-atrc'),
    resetAll: function resetAll() {
      return onChange({});
    },
    tools: AllTabs
  }, function (activeItems) {
    return map(activeItems, function (item, iDx) {
      if ('flipV' === item) {
        return /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Flip vertically', 'atrc-prefix-atrc'),
          checked: flipV,
          onChange: function onChange() {
            return setAttr(!flipV, 'flipV');
          },
          key: iDx
        });
      }
      if ('flipH' === item) {
        return /*#__PURE__*/React.createElement(AtrcControlToggle, {
          label: __('Flip horizontally', 'atrc-prefix-atrc'),
          checked: flipH,
          onChange: function onChange() {
            return setAttr(!flipH, 'flipH');
          },
          key: iDx
        });
      }
      if ('sz' === item) {
        return /*#__PURE__*/React.createElement(AtrcControlWidthHeight, {
          label: __('Size', 'atrc-prefix-atrc'),
          allowHeight: true,
          allowWidth: true,
          type: 'device',
          value: {
            h: {
              xs: xsH,
              sm: smH,
              md: mdH,
              lg: lgH,
              xl: xlH,
              xxl: xxlH
            },
            w: {
              xs: xsW,
              sm: smW,
              md: mdW,
              lg: lgW,
              xl: xlW,
              xxl: xxlW
            }
          },
          onChange: setWidthHeight,
          className: classnames('at-flx-grw-1'),
          key: iDx
        });
      }
      return null;
    });
  });
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
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2;
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
    _value$xsW = value.xsW,
    xsW = _value$xsW === void 0 ? '' : _value$xsW,
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
    _value$xsH = value.xsH,
    xsH = _value$xsH === void 0 ? '' : _value$xsH,
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
  var doOnchange = function doOnchange(newValues) {
    onChange(AtrcObjDeleteEmptyKey(newValues));
  };
  var setAttr = function setAttr(newVal, tp) {
    var valueCloned = cloneDeep(value);
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
    doOnchange(valueCloned);
  };
  var setShapeSettings = function setShapeSettings(newVal) {
    var valueCloned = cloneDeep(value);
    delete valueCloned.flipV;
    delete valueCloned.flipH;
    delete valueCloned.xsW;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.xsH;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    valueCloned = _objectSpread(_objectSpread({}, valueCloned), newVal);
    doOnchange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-shp'), 'at-flx-grw-1', className, variant ? AtrcPrefix('ctrl-shp') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(SvgShape, {
    from: svgFrm,
    def: svgDefd,
    cust: svgCust,
    onChange: setAttr,
    definedOptions: definedOptions
  }), alloweColor && 'def' === svgFrm ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-flx-grw-1 at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
    label: __('Color', 'atrc-prefix-atrc'),
    value: svgCl,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'svgCl');
    }
  })) : null, alloweSettings && svgDefd ? /*#__PURE__*/React.createElement(ShapeSettings, {
    value: {
      flipV: flipV,
      flipH: flipH,
      xsW: xsW,
      smW: smW,
      mdW: mdW,
      lgW: lgW,
      xlW: xlW,
      xxlW: xxlW,
      xsH: xsH,
      smH: smH,
      mdH: mdH,
      lgH: lgH,
      xlH: xlH,
      xxlH: xxlH
    },
    onChange: setShapeSettings
  }) : null);
};
export default AtrcControlSvg;
//# sourceMappingURL=index.js.map