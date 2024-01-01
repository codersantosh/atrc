var _excluded = ["variant", "className", "allowReset"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { ComboboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../reset-button-icon';
import { AtrcResetWrap } from '../reset-button-icon';
import AtrcWrap from '../wrap';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var RenderComponent = function RenderComponent(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? false : _props$allowReset,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-flx-col', 'at-flx-grw-1')
  }, /*#__PURE__*/React.createElement(ComboboxControl, _extends({
    className: classnames(AtrcPrefix('cb'), className, variant ? AtrcPrefix('cb') + '-' + variant : '')
  }, defaultProps, {
    allowReset: allowReset
  })));
};
var AtrcCombobox = function AtrcCombobox(props) {
  var _props$allowReset2 = props.allowReset,
    allowReset = _props$allowReset2 === void 0 ? true : _props$allowReset2,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    onChange = props.onChange,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, _extends({}, wrapProps, {
      className: classnames(AtrcPrefix('combobox-rst'), wrapProps.className ? wrapProps.className : '')
    }), /*#__PURE__*/React.createElement(RenderComponent, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: value,
      onClick: function onClick() {
        return onChange('');
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderComponent, props);
};
export default AtrcCombobox;
//# sourceMappingURL=index.js.map