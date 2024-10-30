var _excluded = ["className", "variant", "children"],
  _excluded2 = ["value", "variant", "className", "onChange", "children"],
  _excluded3 = ["label", "variant", "className", "onChange", "value", "items", "useDragHandle", "sortableItemProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
items Object
Children can be anything.
{[
    {
        children: 'hello1',
    },
    {
        children: 'hello2',
    },
]}

* */

/*WordPress*/
import { sprintf, __ } from '@wordpress/i18n';

/*Library*/
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import classnames from 'classnames';
import { find } from 'lodash';

/*Atoms*/
import AtrcLabel from '../../atoms/label';
import AtrcWrap from '../../atoms/wrap';
import AtrcSpan from '../../atoms/span';
import { AtrcIconSvg } from '../../atoms/icon';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Controls */

/* Utils */
import AtrcMoveArrayValue from '../../utils/move-array-value';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcSortableDragHandle = sortableHandle(function (_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('ctrl-sort-drag-handle'), 'at-cur', className)
  }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
    className: classnames(AtrcPrefix('ctrl-sort-drag-handle-icon')),
    svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"at-svg\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" d=\"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z\"/></svg>"
  }));
});
var SortableItem = sortableElement(function (_ref2) {
  var sortableValue = _ref2.sortableValue,
    items = _ref2.items,
    useDragHandle = _ref2.useDragHandle,
    sortableItemProps = _ref2.sortableItemProps;
  var item = find(items, {
    value: sortableValue
  });
  if (!item) {
    return /*#__PURE__*/React.createElement(AtrcNotice, null, sprintf(__('Item not found with value %s', 'atrc-prefix-atrc'), String(sortableValue)));
  }
  var _item$className = item.className,
    className = _item$className === void 0 ? '' : _item$className,
    _item$variant = item.variant,
    variant = _item$variant === void 0 ? '' : _item$variant,
    children = item.children,
    defaultProps = _objectWithoutProperties(item, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-sort-item'), 'at-flx', 'at-al-itm-st', 'at-gap', 'at-p', 'at-bg-cl', 'at-bdr', className, variant ? AtrcPrefix('ctrl-sort-item') + '-' + variant : '')
  }, sortableItemProps, defaultProps), useDragHandle ? /*#__PURE__*/React.createElement(AtrcSortableDragHandle, null) : null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-sort-grp'), 'at-flx-grw-1', !useDragHandle ? 'at-cur' : '')
  }, children));
});
var SortableContainer = sortableContainer(function (props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-sort'), className, 'at-flx', 'at-flx-col', 'at-gap', variant ? AtrcPrefix('ctrl-sort') + '-' + variant : '')
  }, defaultProps), children);
});
var AtrcControlSortable = function AtrcControlSortable(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$variant2 = props.variant,
    variant = _props$variant2 === void 0 ? '' : _props$variant2,
    _props$className2 = props.className,
    className = _props$className2 === void 0 ? '' : _props$className2,
    _props$onChange2 = props.onChange,
    onChange = _props$onChange2 === void 0 ? function () {} : _props$onChange2,
    _props$value2 = props.value,
    value = _props$value2 === void 0 ? [] : _props$value2,
    _props$items = props.items,
    items = _props$items === void 0 ? [{}] : _props$items,
    _props$useDragHandle = props.useDragHandle,
    useDragHandle = _props$useDragHandle === void 0 ? true : _props$useDragHandle,
    _props$sortableItemPr = props.sortableItemProps,
    sortableItemProps = _props$sortableItemPr === void 0 ? {} : _props$sortableItemPr,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  var handleSortEnd = function handleSortEnd(_ref3) {
    var oldIndex = _ref3.oldIndex,
      newIndex = _ref3.newIndex;
    var updatedValues = AtrcMoveArrayValue(value, oldIndex, newIndex);
    onChange(updatedValues);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement(AtrcLabel, null, label) : null, /*#__PURE__*/React.createElement(SortableContainer, {
    onSortEnd: handleSortEnd,
    useDragHandle: useDragHandle
  }, value.map(function (sortableValue, index) {
    return /*#__PURE__*/React.createElement(SortableItem, {
      key: "".concat(AtrcPrefix('ctrl-sort'), "-").concat(index),
      index: index,
      sortableValue: sortableValue,
      items: items,
      useDragHandle: useDragHandle,
      sortableItemProps: sortableItemProps
    });
  })));
};
export default AtrcControlSortable;
//# sourceMappingURL=index.js.map