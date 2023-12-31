function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { useRef, useEffect, useState } from '@wordpress/element';
import { useInstanceId, useMergeRefs } from '@wordpress/compose';
import { Popover } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local components and functions*/
function useObservableState(initialState, onStateChange) {
  const [state, setState] = useState(initialState);
  return [state, value => {
    setState(value);
    if (onStateChange) {
      onStateChange(value);
    }
  }];
}
function Dropdown(props) {
  const {
    renderContent,
    renderToggle,
    className,
    contentClassName,
    expandOnMobile,
    headerTitle,
    focusOnMount,
    position,
    popoverProps,
    onClose,
    onToggle,
    style
  } = props;
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = useState(null);
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useObservableState(false, onToggle);
  useEffect(() => () => {
    if (onToggle && isOpen) {
      onToggle(false);
    }
  }, [onToggle, isOpen]);
  function toggle(tog = null) {
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
    const {
      ownerDocument
    } = containerRef.current;
    const dialog = ownerDocument.activeElement.closest('[role="dialog"]');
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
  const args = {
    isOpen,
    onToggle: toggle,
    onClose: close
  };
  const popoverPropsHaveAnchor = !!popoverProps?.anchor ||
  // Note: `anchorRef`, `getAnchorRect` and `anchorRect` are deprecated and
  // be removed from `Popover` from WordPress 6.3
  !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
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
const AtrcDropdownHover = props => {
  const instanceId = useInstanceId(AtrcDropdownHover, AtrcPrefix('ctrl-dropdown-hover'));
  let timer;
  const {
    className = '',
    renderToggle = '',
    renderContent = '',
    width = '300px',
    ...defaultProps
  } = props;
  function isInsideCurrent(element) {
    if (element.id === instanceId) {
      return true;
    }
    return element.closest('#' + instanceId);
  }
  function handleMouseLeave(onToggle, e) {
    timer = setTimeout(() => {
      document.addEventListener('mousemove', setDropdownToggle, false);
      function setDropdownToggle(e) {
        if (!isInsideCurrent(e.target)) {
          onToggle(false);
        }
        document.removeEventListener('mousemove', setDropdownToggle, false);
      }
    }, 300);
  }
  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    className: classnames(AtrcPrefix('dropdown-hover'), className),
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWrap, {
      variant: "render-toggle",
      onMouseEnter: () => onToggle(true),
      onMouseLeave: e => handleMouseLeave(onToggle, e),
      "aria-expanded": isOpen
    }, renderToggle),
    renderContent: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWrap, {
      id: instanceId,
      variant: "dropdown-hover-cont",
      style: {
        width
      },
      onMouseLeave: e => handleMouseLeave(onToggle, e)
    }, renderContent)
  }, defaultProps));
};
export default AtrcDropdownHover;
//# sourceMappingURL=index.js.map