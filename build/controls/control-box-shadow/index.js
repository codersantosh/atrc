var _excluded = ["label", "value", "variant", "className", "onChange", "disableUnits"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
    cl : '',
    x : '',
    y " '',
    blr : '',
    sprd : '',
    pos : '',
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcControlUnit from '../control-unit';
import AtrcControlDropdownColor from '../control-dropdown-color';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcControlBoxShadowAllowedKeys = ['cl', 'x', 'y', 'blr', 'sprd', 'pos'];
var AtrcControlBoxShadow = function AtrcControlBoxShadow(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? __('Box shadow', 'atrc-prefix-atrc') : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$cl = value.cl,
    cl = _value$cl === void 0 ? '' : _value$cl,
    _value$x = value.x,
    x = _value$x === void 0 ? '' : _value$x,
    _value$y = value.y,
    y = _value$y === void 0 ? '' : _value$y,
    _value$blr = value.blr,
    blr = _value$blr === void 0 ? '' : _value$blr,
    _value$sprd = value.sprd,
    sprd = _value$sprd === void 0 ? '' : _value$sprd,
    _value$pos = value.pos,
    pos = _value$pos === void 0 ? '' : _value$pos;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-box-sdw'), className, variant ? AtrcPrefix('ctrl-box-sdw') + '-' + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
    value: cl,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'cl');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Position', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: pos,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Inset', 'atrc-prefix-atrc'),
      value: 'inset'
    }],
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'pos');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('X', 'atrc-prefix-atrc'),
    value: x,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'x');
    },
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Y', 'atrc-prefix-atrc'),
    value: y,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'y');
    },
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Blur', 'atrc-prefix-atrc'),
    value: blr,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'blr');
    },
    disableUnits: disableUnits
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Spread', 'atrc-prefix-atrc'),
    value: sprd,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'sprd');
    },
    disableUnits: disableUnits
  })));
};
export default AtrcControlBoxShadow;
//# sourceMappingURL=index.js.map