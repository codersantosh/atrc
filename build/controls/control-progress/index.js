var _excluded = ["label", "className", "variant", "value", "onChange"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
val = num, 
max = num
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
var AtrcControlProgress = function AtrcControlProgress(props) {
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
  var _value$val = value.val,
    val = _value$val === void 0 ? 32 : _value$val,
    _value$max = value.max,
    max = _value$max === void 0 ? 100 : _value$max;
  var setAttr = function setAttr(type, newVal) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Progress value', 'atrc-prefix-atrc'),
    help: __('The progress value should be less or equal to the maximum value.', 'atrc-prefix-atrc'),
    type: "number",
    value: val,
    onChange: function onChange(newVal) {
      setAttr('val', newVal);
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlText, {
    label: __('Progress maximum value', 'atrc-prefix-atrc'),
    type: "number",
    value: max,
    onChange: function onChange(newVal) {
      setAttr('max', newVal);
    }
  })));
};
export default AtrcControlProgress;
//# sourceMappingURL=index.js.map