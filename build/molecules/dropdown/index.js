var _excluded = ["className", "variant", "renderToggle", "renderContent", "renderContentStyle"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*WordPress*/
import { Dropdown } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcDropdown = function AtrcDropdown(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$renderToggle = props.renderToggle,
    _renderToggle = _props$renderToggle === void 0 ? '' : _props$renderToggle,
    _props$renderContent = props.renderContent,
    _renderContent = _props$renderContent === void 0 ? '' : _props$renderContent,
    _props$renderContentS = props.renderContentStyle,
    renderContentStyle = _props$renderContentS === void 0 ? {} : _props$renderContentS,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    className: classnames(AtrcPrefix('dropdown'), className, variant ? AtrcPrefix('dropdown') + '-' + variant : ''),
    renderToggle: function renderToggle(args) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        variant: "render-tog"
      }, _renderToggle(args));
    },
    renderContent: function renderContent(args) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        variant: "dropdown-cont",
        style: renderContentStyle
      }, _renderContent(args));
    }
  }, defaultProps));
};
export default AtrcDropdown;
//# sourceMappingURL=index.js.map