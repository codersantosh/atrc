function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* WordPress */
import { __ } from '@wordpress/i18n';

/*Local*/
var AtrcBlocksGetTabs = function AtrcBlocksGetTabs() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$basic = props.basic,
    basic = _props$basic === void 0 ? {
      on: true,
      props: {
        title: __('Basic', 'atomic-builder-gutenberg-blocks'),
        className: 'basic'
      }
    } : _props$basic,
    _props$style = props.style,
    style = _props$style === void 0 ? {
      on: true,
      props: {
        title: __('Style', 'atomic-builder-gutenberg-blocks'),
        className: 'style'
      }
    } : _props$style,
    _props$advanced = props.advanced,
    advanced = _props$advanced === void 0 ? {
      on: true,
      props: {
        title: __('Expert', 'atomic-builder-gutenberg-blocks'),
        className: 'advanced'
      }
    } : _props$advanced;
  var tabs = [];
  if (basic.on) {
    tabs.push(_objectSpread(_objectSpread({}, basic.props), {}, {
      name: 'basic'
    }));
  }
  if (style.on) {
    tabs.push(_objectSpread(_objectSpread({}, style.props), {}, {
      name: 'style'
    }));
  }
  if (advanced.on) {
    tabs.push(_objectSpread(_objectSpread({}, advanced.props), {}, {
      name: 'advanced'
    }));
  }
  return tabs;
};
export default AtrcBlocksGetTabs;
//# sourceMappingURL=tabs.js.map