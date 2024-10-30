var _excluded = ["groupIndex"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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