var _excluded = ["onToggle", "onClose", "direction", "className", "variant", "children", "renderToggle", "renderContent"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import { PortalWithState } from 'react-portal';
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Organisms */
import AtrcSidebar from '../sidebar';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcFloatingSidebar = function AtrcFloatingSidebar(props) {
  var _props$onToggle = props.onToggle,
    onToggle = _props$onToggle === void 0 ? false : _props$onToggle,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? false : _props$onClose,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'right' : _props$direction,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$renderToggle = props.renderToggle,
    renderToggle = _props$renderToggle === void 0 ? function (args) {} : _props$renderToggle,
    _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? function (args) {} : _props$renderContent,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('sdbar-icon'), direction ? AtrcPrefix('sd-nav') + direction : '')
  }, defaultProps), /*#__PURE__*/React.createElement(PortalWithState, {
    closeOnOutsideClick: true,
    closeOnEsc: true
  }, function (_ref) {
    var openPortal = _ref.openPortal,
      closePortal = _ref.closePortal,
      isOpen = _ref.isOpen,
      portal = _ref.portal;
    var toggle = function toggle() {
      if (isOpen) {
        closePortal();
      } else {
        openPortal();
      }
    };
    var args = {
      isOpen: isOpen,
      openPortal: openPortal,
      onToggle: toggle,
      onClose: closePortal
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderToggle(args), portal(/*#__PURE__*/React.createElement(AtrcSidebar, {
      variant: "flt",
      className: "at-pos at-z-idx at-w at-h at-bg-cl at-p at-box-sdw",
      direction: direction
    }, renderContent(args))));
  }));
};
export default AtrcFloatingSidebar;
//# sourceMappingURL=index.js.map