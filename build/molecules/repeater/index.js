var _excluded = ["label", "className", "variant", "groups", "addGroup", "labelProps", "value", "onChange", "isSortable", "useDragHandle"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { createContext } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { sortableContainer } from 'react-sortable-hoc';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcHr from '../../atoms/hr';
import AtrcText from '../../atoms/text';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcMoveArrayValue from '../../utils/move-array-value';

/*Local*/
export var AtrcRepeaterContextData = createContext();
var SortableContainer = sortableContainer(function (props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('rpt-grp-wrp'))
  }, children);
});
var RepeaterGroupWrap = function RepeaterGroupWrap(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('rpt-grp-wrp'))
  }, children);
};
var AtrcRepeater = function AtrcRepeater(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    groups = props.groups,
    addGroup = props.addGroup,
    _props$labelProps = props.labelProps,
    labelProps = _props$labelProps === void 0 ? {
      className: 'at-m'
    } : _props$labelProps,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$isSortable = props.isSortable,
    isSortable = _props$isSortable === void 0 ? false : _props$isSortable,
    _props$useDragHandle = props.useDragHandle,
    useDragHandle = _props$useDragHandle === void 0 ? true : _props$useDragHandle,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var handleSortEnd = function handleSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
      newIndex = _ref2.newIndex;
    var updatedValues = AtrcMoveArrayValue(value, oldIndex, newIndex);
    onChange(updatedValues);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('rpt'), className, 'at-flx-grw-1', variant ? AtrcPrefix() + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcText, _extends({
    variant: "rpt-grp-ttl"
  }, labelProps), label), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  })) : null, /*#__PURE__*/React.createElement(AtrcRepeaterContextData.Provider, {
    value: {
      isSortable: isSortable,
      useDragHandle: useDragHandle
    }
  }, isSortable ? /*#__PURE__*/React.createElement(SortableContainer, {
    onSortEnd: handleSortEnd,
    useDragHandle: useDragHandle
  }, groups()) : /*#__PURE__*/React.createElement(RepeaterGroupWrap, null, groups())), addGroup());
};
export default AtrcRepeater;
//# sourceMappingURL=index.js.map