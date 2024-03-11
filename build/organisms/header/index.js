var _excluded = ["isSticky", "className", "variant", "children"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { useEffect, useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
export var AtrcHeaderTag = function AtrcHeaderTag(props) {
  var _props$isSticky = props.isSticky,
    isSticky = _props$isSticky === void 0 ? false : _props$isSticky,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "header",
    className: classnames(AtrcPrefix('hdr'), 'at-bg-cl', className, isSticky ? AtrcPrefix('hdr-stky') + ' at-pos at-z-idx' : '', variant && AtrcPrefix('hdr') + variant)
  }, defaultProps), children);
};

/* Gutenberg block render doesnot support HOOKS */
var AtrcHeaderClient = function AtrcHeaderClient(props) {
  var _props$isSticky2 = props.isSticky,
    isSticky = _props$isSticky2 === void 0 ? false : _props$isSticky2,
    _props$useDynamicHeig = props.useDynamicHeight,
    useDynamicHeight = _props$useDynamicHeig === void 0 ? true : _props$useDynamicHeig;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    headerHeight = _useState2[0],
    setHeaderHeight = _useState2[1];
  var updateHeight = function updateHeight() {
    var stickyHeader = document.getElementsByClassName('at-hdr-stky');
    if (stickyHeader && stickyHeader[0]) {
      setHeaderHeight(stickyHeader[0].offsetHeight + 16);
    }
  };
  useEffect(function () {
    var timeoutId;
    var handleHeight = function handleHeight() {
      if (isSticky && useDynamicHeight) {
        timeoutId = setTimeout(updateHeight, 300);
      }
    };
    var handleResize = function handleResize() {
      clearTimeout(timeoutId);
    };
    window.addEventListener('resize', handleHeight);
    handleHeight();
    return function () {
      window.removeEventListener('resize', handleHeight);
      clearTimeout(timeoutId);
    };
  }, [isSticky, useDynamicHeight]);
  useEffect(function () {
    if (headerHeight && isSticky && useDynamicHeight) {
      var atMain = document.getElementById('at-main');
      if (atMain) {
        atMain.style.marginTop = "".concat(headerHeight, "px");
      }
    }
  }, [isSticky, headerHeight, useDynamicHeight]);
  return /*#__PURE__*/React.createElement(AtrcHeaderTag, props);
};
var AtrcHeader = function AtrcHeader(props) {
  var _props$useDynamicHeig2 = props.useDynamicHeight,
    useDynamicHeight = _props$useDynamicHeig2 === void 0 ? false : _props$useDynamicHeig2;
  if (useDynamicHeight) {
    return /*#__PURE__*/React.createElement(AtrcHeaderClient, props);
  }
  return /*#__PURE__*/React.createElement(AtrcHeaderTag, props);
};
export default AtrcHeader;
//# sourceMappingURL=index.js.map