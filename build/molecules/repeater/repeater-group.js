var _excluded = ["groupIndex"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp } from '@wordpress/icons';
import { useContext, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { sortableElement } from 'react-sortable-hoc';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcHr from '../../atoms/hr';

/* Molecules */
import AtrcButtonGroup from '../button-group';
import { AtrcRepeaterContextData } from './index';

/* Organisms */
import AtrcHeader from '../../organisms/header';
import AtrcFooter from '../../organisms/footer';

/* Controls */
import { AtrcSortableDragHandle } from '../../controls/control-sortable';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var RepeaterGroup = function RepeaterGroup(props) {
  var groupIndex = props.groupIndex,
    deleteGroup = props.deleteGroup,
    children = props.children,
    _props$groupTitle = props.groupTitle,
    groupTitle = _props$groupTitle === void 0 ? __('Repeater fields', 'atrc-prefix-atrc') : _props$groupTitle,
    _props$deleteTitle = props.deleteTitle,
    deleteTitle = _props$deleteTitle === void 0 ? __('Delete', 'atrc-prefix-atrc') : _props$deleteTitle,
    _props$cancelTitle = props.cancelTitle,
    cancelTitle = _props$cancelTitle === void 0 ? __('Cancel', 'atrc-prefix-atrc') : _props$cancelTitle;
  var sortableData = useContext(AtrcRepeaterContextData);
  var _sortableData$isSorta = sortableData.isSortable,
    isSortable = _sortableData$isSorta === void 0 ? false : _sortableData$isSorta,
    _sortableData$useDrag = sortableData.useDragHandle,
    useDragHandle = _sortableData$useDrag === void 0 ? true : _sortableData$useDrag;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    onToggle = _useState2[1];
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('rpt-grp'), 'at-m'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(AtrcHeader, {
    className: classnames(AtrcPrefix('rpt-grp-hdr'), 'at-flx', 'at-al-itm-ctr', 'at-bg-cl', 'at-bdr')
  }, isSortable && useDragHandle ? /*#__PURE__*/React.createElement(AtrcSortableDragHandle, {
    className: classnames('at-m')
  }) : null, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "link",
    className: classnames('at-flx', 'at-jfy-cont-st', 'at-flx-grw-1', 'at-m', AtrcPrefix('rpt-grp-hdr-btn')),
    onClick: function onClick() {
      return onToggle(!isOpen);
    }
  }, groupTitle), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('rpt-grp-actions'), 'at-flx', 'at-al-itm-ctr', 'at-gap', 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "link",
    onClick: function onClick() {
      return onToggle(!isOpen);
    }
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: 'wp',
    size: 18,
    icon: isOpen ? chevronUp : chevronDown
  })))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('rpt-grp-itms'), 'at-bdr at-bg-cl', isOpen ? '' : 'at-d-non'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('rpt-grp-itms-fields'), 'at-p')
  }, children), /*#__PURE__*/React.createElement(AtrcHr, null), /*#__PURE__*/React.createElement(AtrcFooter, {
    className: classnames(AtrcPrefix('rpt-grp-ftr'), 'at-p')
  }, /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "link",
    onClick: function onClick() {
      return deleteGroup(groupIndex);
    }
  }, deleteTitle), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "link",
    onClick: function onClick() {
      return onToggle(!isOpen);
    }
  }, cancelTitle)))));
};
var SortableItem = sortableElement(function (props) {
  return /*#__PURE__*/React.createElement(RepeaterGroup, props);
});
var AtrcRepeaterGroup = function AtrcRepeaterGroup(props) {
  var groupIndex = props.groupIndex,
    otherProps = _objectWithoutProperties(props, _excluded);
  var sortableData = useContext(AtrcRepeaterContextData);
  var _sortableData$isSorta2 = sortableData.isSortable,
    isSortable = _sortableData$isSorta2 === void 0 ? false : _sortableData$isSorta2,
    _sortableData$useDrag2 = sortableData.useDragHandle,
    useDragHandle = _sortableData$useDrag2 === void 0 ? true : _sortableData$useDrag2;
  if (isSortable) {
    return /*#__PURE__*/React.createElement(SortableItem, _extends({
      key: "".concat(AtrcPrefix('ctrl-sort'), "-").concat(groupIndex),
      index: groupIndex
    }, otherProps));
  }
  return /*#__PURE__*/React.createElement(RepeaterGroup, props);
};
export default AtrcRepeaterGroup;
//# sourceMappingURL=repeater-group.js.map