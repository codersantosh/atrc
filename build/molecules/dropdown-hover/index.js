var _excluded = ["className", "renderToggle", "renderContent", "width"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React from 'react';

/*WordPress*/
import { useRef, useEffect, useState } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import { Popover } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
function useObservableState(initialState, onStateChange) {
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  return [state, function (value) {
    setState(value);
    if (onStateChange) {
      onStateChange(value);
    }
  }];
}
function Dropdown(props) {
  var renderContent = props.renderContent,
    renderToggle = props.renderToggle,
    className = props.className,
    contentClassName = props.contentClassName,
    expandOnMobile = props.expandOnMobile,
    headerTitle = props.headerTitle,
    focusOnMount = props.focusOnMount,
    position = props.position,
    popoverProps = props.popoverProps,
    onClose = props.onClose,
    onToggle = props.onToggle,
    style = props.style;

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    fallbackPopoverAnchor = _useState4[0],
    setFallbackPopoverAnchor = _useState4[1];
  var containerRef = useRef();
  var _useObservableState = useObservableState(false, onToggle),
    _useObservableState2 = _slicedToArray(_useObservableState, 2),
    isOpen = _useObservableState2[0],
    setIsOpen = _useObservableState2[1];
  useEffect(function () {
    return function () {
      if (onToggle && isOpen) {
        onToggle(false);
      }
    };
  }, [onToggle, isOpen]);
  function toggle() {
    var tog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (tog !== null) {
      setIsOpen(tog);
    } else {
      setIsOpen(!isOpen);
    }
  }

  /**
   * Closes the popover when focus leaves it unless the toggle was pressed or
   * focus has moved to a separate dialog. The former is to let the toggle
   * handle closing the popover and the latter is to preserve presence in
   * case a dialog has opened, allowing focus to return when it's dismissed.
   */
  function closeIfFocusOutside() {
    var ownerDocument = containerRef.current.ownerDocument;
    var dialog = ownerDocument.activeElement.closest('[role="dialog"]');
    if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) {
      close();
    }
  }
  function close() {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  }
  var args = {
    isOpen: isOpen,
    onToggle: toggle,
    onClose: close
  };
  var popoverPropsHaveAnchor = !!(popoverProps !== null && popoverProps !== void 0 && popoverProps.anchor) ||
  // Note: `anchorRef`, `getAnchorRect` and `anchorRect` are deprecated and
  // be removed from `Popover` from WordPress 6.3
  !!(popoverProps !== null && popoverProps !== void 0 && popoverProps.anchorRef) || !!(popoverProps !== null && popoverProps !== void 0 && popoverProps.getAnchorRect) || !!(popoverProps !== null && popoverProps !== void 0 && popoverProps.anchorRect);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('components-dropdown', className),
    ref: useMergeRefs([setFallbackPopoverAnchor, containerRef])
    // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: "-1",
    style: style
  }, renderToggle(args), isOpen && /*#__PURE__*/React.createElement(Popover, _extends({
    position: position,
    onClose: close,
    onFocusOutside: closeIfFocusOutside,
    expandOnMobile: expandOnMobile,
    headerTitle: headerTitle,
    focusOnMount: focusOnMount
    // This value is used to ensure that the dropdowns
    // align with the editor header by default.
    ,
    offset: 13,
    anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : undefined
  }, popoverProps, {
    className: classnames('components-dropdown__content', popoverProps ? popoverProps.className : undefined, contentClassName)
  }), renderContent(args)));
}
var _AtrcDropdownHover = function AtrcDropdownHover(props) {
  var instanceId = AtrcUseInstanceId(_AtrcDropdownHover, 'atrc-ctrl-dropdown-hover');
  var timer;
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$renderToggle = props.renderToggle,
    _renderToggle = _props$renderToggle === void 0 ? '' : _props$renderToggle,
    _props$renderContent = props.renderContent,
    _renderContent = _props$renderContent === void 0 ? '' : _props$renderContent,
    _props$width = props.width,
    width = _props$width === void 0 ? '300px' : _props$width,
    defaultProps = _objectWithoutProperties(props, _excluded);
  function isInsideCurrent(element) {
    if (element.id === instanceId) {
      return true;
    }
    return element.closest('#' + instanceId);
  }
  function handleMouseLeave(onToggle, e) {
    timer = setTimeout(function () {
      document.addEventListener('mousemove', setDropdownToggle, false);
      function setDropdownToggle(e) {
        if (!isInsideCurrent(e.target)) {
          onToggle(false);
        }
        document.removeEventListener('mousemove', setDropdownToggle, false);
      }
    }, 300);
  }
  useEffect(function () {
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    className: classnames(AtrcPrefix('dropdown-hover'), className),
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        variant: "render-toggle",
        onMouseEnter: function onMouseEnter() {
          return onToggle(true);
        },
        onMouseLeave: function onMouseLeave(e) {
          return handleMouseLeave(onToggle, e);
        },
        "aria-expanded": isOpen
      }, _renderToggle);
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        id: instanceId,
        variant: "dropdown-hover-cont",
        style: {
          width: width
        },
        onMouseLeave: function onMouseLeave(e) {
          return handleMouseLeave(onToggle, e);
        }
      }, _renderContent);
    }
  }, defaultProps));
};
export default _AtrcDropdownHover;
//# sourceMappingURL=index.js.map