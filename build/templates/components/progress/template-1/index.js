function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "total", "processed", "percentage", "totalLabel", "processedLabel", "progressProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classNames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import AtrcProgress from '../../../../atoms/progress';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
var AtrcProgressTemplate1 = function AtrcProgressTemplate1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$total = props.total,
    total = _props$total === void 0 ? 0 : _props$total,
    _props$processed = props.processed,
    processed = _props$processed === void 0 ? 0 : _props$processed,
    _props$percentage = props.percentage,
    percentage = _props$percentage === void 0 ? 0 : _props$percentage,
    _props$totalLabel = props.totalLabel,
    totalLabel = _props$totalLabel === void 0 ? __('Total:', 'atrc-prefix-atrc') : _props$totalLabel,
    _props$processedLabel = props.processedLabel,
    processedLabel = _props$processedLabel === void 0 ? __('Processed:', 'atrc-prefix-atrc') : _props$processedLabel,
    _props$progressProps = props.progressProps,
    progressProps = _props$progressProps === void 0 ? {} : _props$progressProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (!total) {
    return null;
  }
  var progressPropsLocal = {
    className: classNames('at-bg-cl', 'at-m'),
    style: {
      '--at-bar-w': percentage + '%',
      '--at-h': '20px'
    }
  };
  var progressPropsFinal = _objectSpread(_objectSpread({}, progressPropsLocal), progressProps);
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classNames(className, 'at-bdr', 'at-p', 'at-bg-cl', AtrcPrefix('prog-tpl-1'))
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classNames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p"
  }, totalLabel + total), /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p"
  }, processedLabel + processed)), /*#__PURE__*/React.createElement(AtrcProgress, progressPropsFinal, percentage + '%'));
};
export default AtrcProgressTemplate1;
//# sourceMappingURL=index.js.map