var _excluded = ["className", "variant", "isRounded", "isBordered", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcTable = function AtrcTable(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$isRounded = props.isRounded,
    isRounded = _props$isRounded === void 0 ? false : _props$isRounded,
    _props$isBordered = props.isBordered,
    isBordered = _props$isBordered === void 0 ? false : _props$isBordered,
    children = props.children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  console.log(props);
  return /*#__PURE__*/React.createElement("table", _extends({
    className: classnames(AtrcPrefix('tbl'), 'at-w', className, isBordered ? AtrcPrefix('tbl-bordered') : '', isRounded ? AtrcPrefix('tbl-rounded') : '', variant ? AtrcPrefix('tbl') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcTable;
//# sourceMappingURL=index.js.map