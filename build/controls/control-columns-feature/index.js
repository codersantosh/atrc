var _excluded = ["label", "value", "columns", "className", "variant", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Internal */
import ColumnLayout from './columns-layout';

/* Local */
var AtrcControlColumnsFeature = function AtrcControlColumnsFeature(props) {
  var label = props.label,
    value = props.value,
    columns = props.columns,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(ColumnLayout, _extends({
    className: classnames(AtrcPrefix('ctrl-select-device'), className, variant ? AtrcPrefix('ctrl-select-device') + '-' + variant : ''),
    label: label,
    value: value,
    onChange: onChange,
    columns: columns
  }, defaultProps));
};
export default AtrcControlColumnsFeature;
//# sourceMappingURL=index.js.map