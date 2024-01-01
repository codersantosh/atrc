var _excluded = ["variant", "className", "defaultValue"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { RangeControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var RenderRange = function RenderRange(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultValue = props.defaultValue,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(RangeControl, _extends({
    className: classnames(AtrcPrefix('range'), className, variant ? AtrcPrefix('range') + '-' + variant : ''),
    allowReset: false
  }, defaultProps));
};
var AtrcRange = function AtrcRange(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    value = props.value,
    onChange = props.onChange,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? null : _props$defaultValue;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, {
      className: classnames(AtrcPrefix('range-rst'), 'at-flx-grw-1')
    }, /*#__PURE__*/React.createElement(RenderRange, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      defaultValue: defaultValue,
      onClick: function onClick() {
        return onChange(defaultValue);
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderRange, props);
};
export default AtrcRange;
//# sourceMappingURL=index.js.map