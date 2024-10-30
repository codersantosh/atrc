var _excluded = ["value", "variant", "className", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type Object
{
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Molecules*/
import AtrcPanelRow from '../../molecules/panel-row';

/* Controls */
import AtrcControlSelect from '../control-select';
import AtrcTextControl from '../control-text';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import { AnimationOptions } from './options';

/*Local*/
var AtrcControlAnimationAnimateCss = function AtrcControlAnimationAnimateCss(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$ani = value.ani,
    ani = _value$ani === void 0 ? '' : _value$ani,
    _value$dla = value.dla,
    dla = _value$dla === void 0 ? '' : _value$dla,
    _value$dur = value.dur,
    dur = _value$dur === void 0 ? '' : _value$dur,
    _value$iter = value.iter,
    iter = _value$iter === void 0 ? '' : _value$iter;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = cloneDeep(value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-ani-animate-css'), className, variant ? AtrcPrefix('ctrl-ani-animate-css') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    label: __('Animation', 'atrc-prefix-atrc'),
    value: ani,
    options: AnimationOptions(),
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ani');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcTextControl, {
    label: __('Delay (Seconds)', 'atrc-prefix-atrc'),
    value: dla,
    type: "number",
    min: 0,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'dla');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcTextControl, {
    label: __('Duration (Seconds)', 'atrc-prefix-atrc'),
    value: dur,
    type: "number",
    min: 0,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'dur');
    }
  })), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcTextControl, {
    label: __('Iteration', 'atrc-prefix-atrc'),
    value: iter,
    type: "number",
    min: 1,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'iter');
    }
  })));
};
export default AtrcControlAnimationAnimateCss;
//# sourceMappingURL=index.js.map