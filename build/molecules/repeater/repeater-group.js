function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp } from '@wordpress/icons';
import { useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { BsDashSquare } from 'react-icons/bs';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcHeader from '../../organisms/header';
import AtrcTooltip from '../tooltip';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcRepeaterGroup = function AtrcRepeaterGroup(props) {
  var groupIndex = props.groupIndex,
    deleteGroup = props.deleteGroup,
    children = props.children,
    _props$groupTitle = props.groupTitle,
    groupTitle = _props$groupTitle === void 0 ? __('Repeater fields', 'atrc-prefix-atrc') : _props$groupTitle,
    _props$deleteTitle = props.deleteTitle,
    deleteTitle = _props$deleteTitle === void 0 ? __('Delete repeater fields', 'atrc-prefix-atrc') : _props$deleteTitle;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    onToggle = _useState2[1];
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp'), 'at-m'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(AtrcHeader, {
    className: classnames(AtrcPrefix('repeater-grp-header'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', 'at-bg-cl', 'at-bdr')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, groupTitle), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-actions'), 'at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames('at-p', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "delete-icon",
    onClick: function onClick() {
      return deleteGroup(groupIndex);
    }
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: deleteTitle
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsDashSquare
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames('at-p', 'at-w', 'at-h', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr'),
    variant: "dropdown",
    onClick: function onClick() {
      return onToggle(!isOpen);
    }
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: isOpen ? __('Hide fields', 'atrc-prefix-atrc') : __('Show fields', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: 'wp',
    icon: isOpen ? chevronUp : chevronDown
  }))))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-itms'), 'at-bdr at-bg-cl', isOpen ? '' : 'at-d-non'),
    key: groupIndex
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('repeater-grp-itms-fields'), 'at-p')
  }, children)));
};
export default AtrcRepeaterGroup;
//# sourceMappingURL=repeater-group.js.map