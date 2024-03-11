var _excluded = ["label", "className", "variant", "groups", "addGroup", "labelProps", "value", "onChange", "isSortable", "useDragHandle"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { createContext } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { sortableContainer } from 'react-sortable-hoc';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcHr from '../../atoms/hr';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Utils */
import AtrcMoveArrayValue from '../../utils/move-array-value';

/*Local*/
export var AtrcRepeaterContextData = createContext();
var SortableContainer = sortableContainer(function (props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-wrp'))
  }, children);
});
var RepeaterGroupWrap = function RepeaterGroupWrap(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-wrp'))
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
    className: classnames(AtrcPrefix('repeater'), className, 'at-flx-grw-1', variant ? AtrcPrefix() + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, labelProps, label), /*#__PURE__*/React.createElement(AtrcHr, {
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