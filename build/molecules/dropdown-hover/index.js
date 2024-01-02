var _excluded = ["className", "renderToggle", "renderContent", "width"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*WordPress*/
import { useRef, useEffect, useState } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import { Popover } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local components and functions*/
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
var AtrcDropdownHover = function AtrcDropdownHover(props) {
  var instanceId = AtrcUseInstanceId(AtrcDropdownHover, 'atrc-ctrl-dropdown-hover');
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
export default AtrcDropdownHover;
//# sourceMappingURL=index.js.map