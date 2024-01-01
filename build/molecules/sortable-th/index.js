function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*WordPress*/
import { chevronUp, chevronDown } from '@wordpress/icons';
import { useState } from '@wordpress/element';

/*Inbuilt*/
import AtrcIcon from '../../atoms/icon';
import AtrcSpan from '../../atoms/span';
import AtrcLink from '../../atoms/link';
import AtrcTh from '../../atoms/th';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components and Functions*/
function getIcon(order, isHovered) {
  if (isHovered) {
    return order === 'asc' ? chevronUp : chevronDown;
  }
  return order === 'asc' ? chevronDown : chevronUp;
}
var AtrcSortableTh = function AtrcSortableTh(_ref) {
  var icon = _ref.icon,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    isActive = _ref.isActive,
    order = _ref.order,
    onOrder = _ref.onOrder,
    _ref$colSpan = _ref.colSpan,
    colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? null : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  return /*#__PURE__*/React.createElement(AtrcTh, {
    colSpan: colSpan,
    isSorting: true,
    isSortActive: isActive,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    },
    className: classnames(AtrcPrefix('sortable-th'), className, variant ? AtrcPrefix('sortable-th') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcLink, {
    type: "btn",
    className: "at-flx at-al-itm-ctr",
    onClick: function onClick() {
      if (order === 'asc') {
        onOrder('desc');
      } else {
        onOrder('asc');
      }
    }
  }, icon && /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "wp",
    icon: icon
  }), label && /*#__PURE__*/React.createElement(AtrcSpan, null, label), /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "wp",
    icon: getIcon(order, isHovered)
  })));
};
export default AtrcSortableTh;
//# sourceMappingURL=index.js.map