var _excluded = ["className", "variant", "children"],
  _excluded2 = ["value", "variant", "className", "onChange", "children"],
  _excluded3 = ["label", "variant", "className", "onChange", "value", "items", "useDragHandle", "sortableItemProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
export var AtrcSortableDragHandle = sortableHandle(function () {
  return /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('ctrl-sort-drag-handle'), 'at-cur')
  }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
    className: classnames(AtrcPrefix('ctrl-sort-drag-handle-icon')),
    svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"at-svg\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" d=\"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z\"/></svg>"
  }));
});
var SortableItem = sortableElement(function (_ref) {
  var sortableValue = _ref.sortableValue,
    items = _ref.items,
    useDragHandle = _ref.useDragHandle,
    sortableItemProps = _ref.sortableItemProps;
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
  var handleSortEnd = function handleSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
      newIndex = _ref2.newIndex;
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