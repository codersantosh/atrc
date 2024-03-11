var _excluded = ["children", "className", "variant"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { Tooltip } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcSpan from '../../atoms/span';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcTooltip = function AtrcTooltip(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Tooltip, defaultProps, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('ttip'), className, variant ? AtrcPrefix('ttip') + '-' + variant : '')
  }, children));
};
export default AtrcTooltip;
//# sourceMappingURL=index.js.map