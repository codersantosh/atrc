function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';

/*Attributes Structure
Type Object
{
    xsBgSz : '',
    smBgSz : '',
    mdBgSz : '',
    lgBgSz : '',
    xlBgSz : '',
    xxlBgSz : '',

    xsBgW:'',
    smBgW:'',
    mdBgW:'',
    lgBgW:'',
    xlBgW:'',
    xxlBgW:'',
    xsBgH:'',
    smBgH:'',
    mdBgH:'',
    lgBgH:'',
    xlBgH:'',
    xxlBgH:'',
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/*Library*/
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlSelectDevice from '../control-select-device';

/* Internal */
import { BgSzOptions } from './options';

/*Local*/
export var mappingBgSzNewValues = function mappingBgSzNewValues(newVal, value) {
  if (newVal && newVal.xs) {
    value.xsBgSz = newVal.xs;
  } else {
    delete value.xsBgSz;
  }
  if (newVal && newVal.sm) {
    value.smBgSz = newVal.sm;
  } else {
    delete value.smBgSz;
  }
  if (newVal && newVal.md) {
    value.mdBgSz = newVal.md;
  } else {
    delete value.mdBgSz;
  }
  if (newVal && newVal.lg) {
    value.lgBgSz = newVal.lg;
  } else {
    delete value.lgBgSz;
  }
  if (newVal && newVal.xl) {
    value.xlBgSz = newVal.xl;
  } else {
    delete value.xlBgSz;
  }
  if (newVal && newVal.xxl) {
    value.xxlBgSz = newVal.xxl;
  } else {
    delete value.xxlBgSz;
  }
  return value;
};
var BackgroundSize = function BackgroundSize(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  var _value$xsBgSz = value.xsBgSz,
    xsBgSz = _value$xsBgSz === void 0 ? '' : _value$xsBgSz,
    _value$smBgSz = value.smBgSz,
    smBgSz = _value$smBgSz === void 0 ? '' : _value$smBgSz,
    _value$mdBgSz = value.mdBgSz,
    mdBgSz = _value$mdBgSz === void 0 ? '' : _value$mdBgSz,
    _value$lgBgSz = value.lgBgSz,
    lgBgSz = _value$lgBgSz === void 0 ? '' : _value$lgBgSz,
    _value$xlBgSz = value.xlBgSz,
    xlBgSz = _value$xlBgSz === void 0 ? '' : _value$xlBgSz,
    _value$xxlBgSz = value.xxlBgSz,
    xxlBgSz = _value$xxlBgSz === void 0 ? '' : _value$xxlBgSz,
    _value$xsBgW = value.xsBgW,
    xsBgW = _value$xsBgW === void 0 ? '' : _value$xsBgW,
    _value$smBgW = value.smBgW,
    smBgW = _value$smBgW === void 0 ? '' : _value$smBgW,
    _value$mdBgW = value.mdBgW,
    mdBgW = _value$mdBgW === void 0 ? '' : _value$mdBgW,
    _value$lgBgW = value.lgBgW,
    lgBgW = _value$lgBgW === void 0 ? '' : _value$lgBgW,
    _value$xlBgW = value.xlBgW,
    xlBgW = _value$xlBgW === void 0 ? '' : _value$xlBgW,
    _value$xxlBgW = value.xxlBgW,
    xxlBgW = _value$xxlBgW === void 0 ? '' : _value$xxlBgW,
    _value$xsBgH = value.xsBgH,
    xsBgH = _value$xsBgH === void 0 ? '' : _value$xsBgH,
    _value$smBgH = value.smBgH,
    smBgH = _value$smBgH === void 0 ? '' : _value$smBgH,
    _value$mdBgH = value.mdBgH,
    mdBgH = _value$mdBgH === void 0 ? '' : _value$mdBgH,
    _value$lgBgH = value.lgBgH,
    lgBgH = _value$lgBgH === void 0 ? '' : _value$lgBgH,
    _value$xlBgH = value.xlBgH,
    xlBgH = _value$xlBgH === void 0 ? '' : _value$xlBgH,
    _value$xxlBgH = value.xxlBgH,
    xxlBgH = _value$xxlBgH === void 0 ? '' : _value$xxlBgH;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var setBgSz = function setBgSz(newVal) {
    var newValues = mappingBgSzNewValues(newVal, value);
    onChange(newValues);
  };
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcControlSelectDevice, {
    label: __('Background size', 'atrc-prefix-atrc'),
    value: {
      xs: xsBgSz,
      sm: smBgSz,
      md: mdBgSz,
      lg: lgBgSz,
      xl: xlBgSz,
      xxl: xxlBgSz
    },
    options: BgSzOptions(),
    onChange: setBgSz,
    onTabChange: function onTabChange(newVal) {
      return setSelectedTab(newVal);
    }
  }), 'xs' === selectedTab && 'custom' === xsBgSz ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom width and height', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flex"
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Width', 'atrc-prefix-atrc'),
    value: xsBgW,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xsBgW');
    }
  }), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Height', 'atrc-prefix-atrc'),
    value: xsBgH,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xsBgH');
    }
  }))) : null, 'sm' === selectedTab && 'custom' === smBgSz ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom width and height', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flex"
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Width', 'atrc-prefix-atrc'),
    value: smBgW,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'smBgW');
    }
  }), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Height', 'atrc-prefix-atrc'),
    value: smBgH,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'smBgH');
    }
  }))) : null, 'md' === selectedTab && 'custom' === mdBgSz ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom width and height', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flex"
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Width', 'atrc-prefix-atrc'),
    value: mdBgW,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'mdBgW');
    }
  }), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Height', 'atrc-prefix-atrc'),
    value: mdBgH,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'mdBgH');
    }
  }))) : null, 'lg' === selectedTab && 'custom' === lgBgSz ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom width and height', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flex"
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Width', 'atrc-prefix-atrc'),
    value: lgBgW,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'lgBgW');
    }
  }), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Height', 'atrc-prefix-atrc'),
    value: lgBgH,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'lgBgH');
    }
  }))) : null, 'xl' === selectedTab && 'custom' === xlBgSz ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom width and height', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flex"
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Width', 'atrc-prefix-atrc'),
    value: xlBgW,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xlBgW');
    }
  }), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Height', 'atrc-prefix-atrc'),
    value: xlBgH,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xlBgH');
    }
  }))) : null, 'xxl' === selectedTab && 'custom' === xxlBgSz ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom width and height', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-flex"
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Width', 'atrc-prefix-atrc'),
    value: xxlBgW,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xxlBgW');
    }
  }), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Height', 'atrc-prefix-atrc'),
    value: xxlBgH,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xxlBgH');
    }
  }))) : null);
};
export default BackgroundSize;
//# sourceMappingURL=background-size.js.map