var _excluded = ["iconPos", "iconProps", "children", "text"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/* Atoms */
import AtrcButton from '../../../../atoms/button';
import AtrcIcon from '../../../../atoms/icon';

/* Local */
var AtrcButtonIconTemplate1 = function AtrcButtonIconTemplate1(props) {
  var _props$iconPos = props.iconPos,
    iconPos = _props$iconPos === void 0 ? 'before' : _props$iconPos,
    _props$iconProps = props.iconProps,
    iconProps = _props$iconProps === void 0 ? null : _props$iconProps,
    children = props.children,
    _props$text = props.text,
    text = _props$text === void 0 ? '' : _props$text,
    buttonDefaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcButton, buttonDefaultProps, iconProps && 'after' !== iconPos ? /*#__PURE__*/React.createElement(AtrcIcon, iconProps) : null, children || text, iconProps && 'after' === iconPos ? /*#__PURE__*/React.createElement(AtrcIcon, iconProps) : null);
};
export default AtrcButtonIconTemplate1;
//# sourceMappingURL=index.js.map