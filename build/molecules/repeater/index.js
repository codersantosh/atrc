var _excluded = ["label", "className", "variant", "groups", "addGroup", "labelProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcHr from '../../atoms/hr';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcRepeater = function AtrcRepeater(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    groups = props.groups,
    addGroup = props.addGroup,
    _props$labelProps = props.labelProps,
    labelProps = _props$labelProps === void 0 ? {
      className: 'at-m'
    } : _props$labelProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('repeater'), className, 'at-flx-col', variant ? AtrcPrefix() + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, labelProps, label), /*#__PURE__*/React.createElement(AtrcHr, {
    className: "at-m"
  })) : null, groups(), addGroup());
};
export default AtrcRepeater;
//# sourceMappingURL=index.js.map