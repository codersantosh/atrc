var _excluded = ["label", "className", "variant", "value", "onChange"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
from = num, 
to = num
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/

/* Controls */
import AtrcControlText from '../control-text';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */

/*Local*/
var AtrcControlCounter = function AtrcControlCounter(props) {
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
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$frm = value.frm,
    frm = _value$frm === void 0 ? 32 : _value$frm,
    _value$to = value.to,
    to = _value$to === void 0 ? 100 : _value$to;
  var setAttr = function setAttr(type, newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Initial value', 'atrc-prefix-atrc'),
    type: "number",
    value: frm,
    onChange: function onChange(newVal) {
      setAttr('frm', newVal);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Final value', 'atrc-prefix-atrc'),
    type: "number",
    value: to,
    onChange: function onChange(newVal) {
      setAttr('to', newVal);
    }
  })));
};
export default AtrcControlCounter;
//# sourceMappingURL=index.js.map