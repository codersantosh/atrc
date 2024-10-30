var _excluded = ["className", "variant", "onCancel", "isOpen", "onConfirm", "confirm", "title", "help"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { BsExclamationCircle } from 'react-icons/bs';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Molecules */
import AtrcModal from '../modal';
import AtrcButtonGroup from '../button-group';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcModalConfirm = function AtrcModalConfirm(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onCancel = props.onCancel,
    onCancel = _props$onCancel === void 0 ? '' : _props$onCancel,
    _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
    _props$onConfirm = props.onConfirm,
    onConfirm = _props$onConfirm === void 0 ? '' : _props$onConfirm,
    _props$confirm = props.confirm,
    confirm = _props$confirm === void 0 ? __('Delete', 'atrc-prefix-atrc') : _props$confirm,
    _props$title = props.title,
    title = _props$title === void 0 ? __('Are you sure?', 'atrc-prefix-atrc') : _props$title,
    _props$help = props.help,
    help = _props$help === void 0 ? __('This action cannot be undone!', 'atrc-prefix-atrc') : _props$help,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  useEffect(function () {
    setIsShow(isOpen);
  }, [isOpen]);
  if (isShow) {
    return /*#__PURE__*/React.createElement(AtrcModal, _extends({
      onRequestClose: function onRequestClose() {
        return onCancel();
      },
      className: classnames(AtrcPrefix('modal-confirm'), className || '', variant ? AtrcPrefix('modal-confirm') + '-' + variant : '')
    }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('modal-confirm-body'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      className: classnames(AtrcPrefix('modal-confirm-icon'), 'at-m', 'at-cl'),
      type: "bootstrap",
      icon: BsExclamationCircle
    }), /*#__PURE__*/React.createElement(AtrcText, {
      tag: "h4",
      className: classnames('at-m')
    }, title), /*#__PURE__*/React.createElement(AtrcText, {
      tag: "p",
      className: classnames(AtrcPrefix('mt-0'))
    }, help)), /*#__PURE__*/React.createElement(AtrcWrap, {
      className: classnames(AtrcPrefix('modal-confirm-footer'), 'at-p')
    }, /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onCancel();
      },
      className: classnames('at-flx-grw-1')
    }, __('Cancel', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcButton, {
      onClick: function onClick() {
        return onConfirm();
      },
      variant: "danger",
      className: classnames('at-flx-grw-1')
    }, confirm))));
  }
  return null;
};
export default AtrcModalConfirm;
//# sourceMappingURL=index.js.map