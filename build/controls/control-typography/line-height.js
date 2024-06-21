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
    "lnH":"",
    "smLnH":"",
    "mdLnH":"",
    "lgLnH":"",
    "xlLnH":"",
    "xxlLnH":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlText from '../control-text';
import AtrcControlUnit from '../control-unit';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcDropdownDevice from '../../molecules/dropdown-device';

/* Utils */
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceKey, AtrcMappingDeviceKeyValues } from '../../utils/object-values-with-devices';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    disableUnits = _ref.disableUnits,
    value = _ref.value,
    _onChange = _ref.onChange;
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var deviceValue = AtrcMappingDeviceKeyValues(value, device, 'lnH');
  useEffect(function () {
    if (!deviceValue) {
      setType('');
    } else if ('normal' === deviceValue) {
      setType('normal');
    } else if (/^\d+$/.test(deviceValue)) {
      setType('number');
    } else {
      setType('length');
    }
  }, [deviceValue]);
  if (type === undefined) {
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: type,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Normal', 'atrc-prefix-atrc'),
      value: 'normal'
    }, {
      label: __('Number', 'atrc-prefix-atrc'),
      value: 'number'
    }, {
      label: __('Length unit', 'atrc-prefix-atrc'),
      value: 'length'
    }],
    onChange: function onChange(newVal) {
      switch (newVal) {
        case '':
        case 'normal':
          _onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'));
          break;
        case 'number':
          _onChange(1, AtrcMappingDeviceKey(device, 'lnH'));
          break;
        case 'length':
          _onChange('1px', AtrcMappingDeviceKey(device, 'lnH'));
          break;
      }
    }
  })), 'number' === type ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: "",
    value: deviceValue,
    onChange: function onChange(newVal) {
      return _onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'));
    },
    type: "number"
  })) : null, 'length' === type ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: "",
    value: deviceValue,
    onChange: function onChange(newVal) {
      return _onChange(newVal, AtrcMappingDeviceKey(device, 'lnH'));
    },
    disableUnits: disableUnits
  })) : null);
};
var LineHeight = function LineHeight(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    _ref2$disableUnits = _ref2.disableUnits,
    disableUnits = _ref2$disableUnits === void 0 ? false : _ref2$disableUnits;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    className: classnames(AtrcPrefix('typ-ln-h'), 'at-flx-grw-1'),
    label: __('Line height', 'atrc-prefix-atrc'),
    tabs: AtrcAvailableDevices()
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      disableUnits: disableUnits,
      onChange: onChange
    });
  }));
};
export default LineHeight;
//# sourceMappingURL=line-height.js.map