function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*Attributes Structure
Type Object
{
    xsBgPosX : '',
    smBgPosX : '',
    mdBgPosX : '',
    lgBgPosX : '',
    xlBgPosX : '',
    xxlBgPosX : '',
    xsBgPosY : '',
    smBgPosY : '',
    mdBgPosY : '',
    lgBgPosY : '',
    xlBgPosY : '',
    xxlBgPosY : '',
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlSelectDevice from '../control-select-device';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/*Utils*/
import AtrcIsNumeric from '../../utils/is-numeric';

/* Internal */
import { PositionOptions } from './options';

/*Local*/
var BackgroundPosition = function BackgroundPosition(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  var _value$xsBgPosX = value.xsBgPosX,
    xsBgPosX = _value$xsBgPosX === void 0 ? '' : _value$xsBgPosX,
    _value$smBgPosX = value.smBgPosX,
    smBgPosX = _value$smBgPosX === void 0 ? '' : _value$smBgPosX,
    _value$mdBgPosX = value.mdBgPosX,
    mdBgPosX = _value$mdBgPosX === void 0 ? '' : _value$mdBgPosX,
    _value$lgBgPosX = value.lgBgPosX,
    lgBgPosX = _value$lgBgPosX === void 0 ? '' : _value$lgBgPosX,
    _value$xlBgPosX = value.xlBgPosX,
    xlBgPosX = _value$xlBgPosX === void 0 ? '' : _value$xlBgPosX,
    _value$xxlBgPosX = value.xxlBgPosX,
    xxlBgPosX = _value$xxlBgPosX === void 0 ? '' : _value$xxlBgPosX,
    _value$xsBgPosY = value.xsBgPosY,
    xsBgPosY = _value$xsBgPosY === void 0 ? '' : _value$xsBgPosY,
    _value$smBgPosY = value.smBgPosY,
    smBgPosY = _value$smBgPosY === void 0 ? '' : _value$smBgPosY,
    _value$mdBgPosY = value.mdBgPosY,
    mdBgPosY = _value$mdBgPosY === void 0 ? '' : _value$mdBgPosY,
    _value$lgBgPosY = value.lgBgPosY,
    lgBgPosY = _value$lgBgPosY === void 0 ? '' : _value$lgBgPosY,
    _value$xlBgPosY = value.xlBgPosY,
    xlBgPosY = _value$xlBgPosY === void 0 ? '' : _value$xlBgPosY,
    _value$xxlBgPosY = value.xxlBgPosY,
    xxlBgPosY = _value$xxlBgPosY === void 0 ? '' : _value$xxlBgPosY;
  var getInitialState = function getInitialState() {
    var concatXY = xsBgPosX.trim() + ' ' + xsBgPosY.trim();
    var smConcatXY = smBgPosX.trim() + ' ' + smBgPosY.trim();
    var mdConcatXY = mdBgPosX.trim() + ' ' + mdBgPosY.trim();
    var lgConcatXY = lgBgPosX.trim() + ' ' + lgBgPosY.trim();
    var xlConcatXY = xlBgPosX.trim() + ' ' + xlBgPosY.trim();
    var xxlConcatXY = xxlBgPosX.trim() + ' ' + xxlBgPosY.trim();
    if ('' !== concatXY && AtrcIsNumeric(Array.from(concatXY)[0])) {
      concatXY = 'custom';
    }
    if ('' !== smConcatXY && AtrcIsNumeric(Array.from(smConcatXY)[0])) {
      smConcatXY = 'custom';
    }
    if ('' !== mdConcatXY && AtrcIsNumeric(Array.from(mdConcatXY)[0])) {
      mdConcatXY = 'custom';
    }
    if ('' !== lgConcatXY && AtrcIsNumeric(Array.from(lgConcatXY)[0])) {
      lgConcatXY = 'custom';
    }
    if ('' !== xlConcatXY && AtrcIsNumeric(Array.from(xlConcatXY)[0])) {
      xlConcatXY = 'custom';
    }
    if ('' !== xxlConcatXY && AtrcIsNumeric(Array.from(xxlConcatXY)[0])) {
      xxlConcatXY = 'custom';
    }
    return {
      xsBgPosXY: concatXY,
      smBgPosXY: smConcatXY,
      mdBgPosXY: mdConcatXY,
      lgBgPosXY: lgConcatXY,
      xlBgPosXY: xlConcatXY,
      xxlBgPosXY: xxlConcatXY
    };
  };
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedBgPos = _useState2[0],
    setSelectedBgPos = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedTab = _useState4[0],
    setSelectedTab = _useState4[1];

  /*Run only once on mount*/
  useEffect(function () {
    setSelectedTab('xs');
    setSelectedBgPos(getInitialState());
  }, []);

  /*Run on change selectedBgPos*/
  useEffect(function () {
    if (!(selectedBgPos && selectedBgPos.doUseEffect)) {
      return;
    }
    var valueCloned = cloneDeep(value);
    var newBgPosX = '',
      newBgPosY = '';
    if ('custom' !== selectedBgPos.xsBgPosXY) {
      if (selectedBgPos.xsBgPosXY) {
        var result = selectedBgPos.xsBgPosXY.trim().split(/\s+/);
        if (result.length === 2) {
          newBgPosX = result[0].trim();
          newBgPosY = result[1].trim();
        } else {
          newBgPosX = '';
          newBgPosY = '';
        }
      }
      valueCloned.xsBgPosX = newBgPosX;
      valueCloned.xsBgPosY = newBgPosY;
    }
    var newSmBgPosX = '',
      newSmBgPosY = '';
    if ('custom' !== selectedBgPos.smBgPosXY) {
      if (selectedBgPos.smBgPosXY) {
        var _result = selectedBgPos.smBgPosXY.trim().split(/\s+/);
        if (_result.length === 2) {
          newSmBgPosX = _result[0].trim();
          newSmBgPosY = _result[1].trim();
        } else {
          newSmBgPosX = '';
          newSmBgPosY = '';
        }
      }
      valueCloned.smBgPosX = newSmBgPosX;
      valueCloned.smBgPosY = newSmBgPosY;
    }
    var newMdBgPosX = '',
      newMdBgPosY = '';
    if ('custom' !== selectedBgPos.mdBgPosXY) {
      if (selectedBgPos.mdBgPosXY) {
        var _result2 = selectedBgPos.mdBgPosXY.trim().split(/\s+/);
        if (_result2.length === 2) {
          newMdBgPosX = _result2[0].trim();
          newMdBgPosY = _result2[1].trim();
        } else {
          newMdBgPosX = '';
          newMdBgPosY = '';
        }
      }
      valueCloned.mdBgPosX = newMdBgPosX;
      valueCloned.mdBgPosY = newMdBgPosY;
    }
    var newLgBgPosX = '',
      newLgBgPosY = '';
    if ('custom' !== selectedBgPos.lgBgPosXY) {
      if (selectedBgPos.lgBgPosXY) {
        var _result3 = selectedBgPos.lgBgPosXY.trim().split(/\s+/);
        if (_result3.length === 2) {
          newLgBgPosX = _result3[0].trim();
          newLgBgPosY = _result3[1].trim();
        } else {
          newLgBgPosX = '';
          newLgBgPosY = '';
        }
      }
      valueCloned.lgBgPosX = newLgBgPosX;
      valueCloned.lgBgPosY = newLgBgPosY;
    }
    var newXlBgPosX = '',
      newXlBgPosY = '';
    if ('custom' !== selectedBgPos.xlBgPosXY) {
      if (selectedBgPos.xlBgPosXY) {
        var _result4 = selectedBgPos.xlBgPosXY.trim().split(/\s+/);
        if (_result4.length === 2) {
          newXlBgPosX = _result4[0].trim();
          newXlBgPosY = _result4[1].trim();
        } else {
          newXlBgPosX = '';
          newXlBgPosY = '';
        }
      }
      valueCloned.xlBgPosX = newXlBgPosX;
      valueCloned.xlBgPosY = newXlBgPosY;
    }
    var newXxlBgPosX = '',
      newXxlBgPosY = '';
    if ('custom' !== selectedBgPos.xxlBgPosXY) {
      if (selectedBgPos.xxlBgPosXY) {
        var _result5 = selectedBgPos.xxlBgPosXY.trim().split(/\s+/);
        if (_result5.length === 2) {
          newXxlBgPosX = _result5[0].trim();
          newXxlBgPosY = _result5[1].trim();
        } else {
          newXxlBgPosX = '';
          newXxlBgPosY = '';
        }
      }
      valueCloned.xxlBgPosX = newXxlBgPosX;
      valueCloned.xxlBgPosY = newXxlBgPosY;
    }
    onChange(valueCloned);
  }, [selectedBgPos]);
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  if (null === selectedTab || null === selectedBgPos) {
    return '';
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcControlSelectDevice, {
    label: __('Background position', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: {
      xs: selectedBgPos.xsBgPosXY,
      sm: selectedBgPos.smBgPosXY,
      md: selectedBgPos.mdBgPosXY,
      lg: selectedBgPos.lgBgPosXY,
      xl: selectedBgPos.xlBgPosXY,
      xxl: selectedBgPos.xxlBgPosXY
    },
    options: PositionOptions(),
    onChange: function onChange(newVal) {
      return setSelectedBgPos({
        xsBgPosXY: newVal && newVal.xs,
        smBgPosXY: newVal && newVal.sm,
        mdBgPosXY: newVal && newVal.md,
        lgBgPosXY: newVal && newVal.lg,
        xlBgPosXY: newVal && newVal.xl,
        xxlBgPosXY: newVal && newVal.xxl,
        doUseEffect: true
      });
    },
    onTabChange: function onTabChange(newVal) {
      return setSelectedTab(newVal);
    }
  }), 'xs' === selectedTab && 'custom' === selectedBgPos.xsBgPosXY ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m', 'at-al-itm-st')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: xsBgPosX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xsBgPosX');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: xsBgPosY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xsBgPosY');
    }
  }))) : null, 'sm' === selectedTab && 'custom' === selectedBgPos.smBgPosXY ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m', 'at-al-itm-st')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: smBgPosX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'smBgPosX');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: smBgPosY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'smBgPosY');
    }
  }))) : null, 'md' === selectedTab && 'custom' === selectedBgPos.mdBgPosXY ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m', 'at-al-itm-st')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: mdBgPosX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'mdBgPosX');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: mdBgPosY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'mdBgPosY');
    }
  }))) : null, 'lg' === selectedTab && 'custom' === selectedBgPos.lgBgPosXY ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m', 'at-al-itm-st')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: lgBgPosX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'lgBgPosX');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: lgBgPosY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'lgBgPosY');
    }
  }))) : null, 'xl' === selectedTab && 'custom' === selectedBgPos.xlBgPosXY ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m', 'at-al-itm-st')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: xlBgPosX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xlBgPosX');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: xlBgPosY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xlBgPosY');
    }
  }))) : null, 'xxl' === selectedTab && 'custom' === selectedBgPos.xxlBgPosXY ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m', 'at-al-itm-st')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Custom', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: xxlBgPosX,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xxlBgPosX');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: xxlBgPosY,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'xxlBgPosY');
    }
  }))) : null);
};
export default BackgroundPosition;
//# sourceMappingURL=background-position.js.map