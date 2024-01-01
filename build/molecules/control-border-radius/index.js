var _excluded = ["variant", "className", "values", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Attributes Structure
Type Object or string
{
    ''(string)
    =======OR==========
    tL: '',
    tR: '',
    bL: '',
    bR: '',
}
* */

/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalBorderRadiusControl as BorderRadiusControl } from '@wordpress/block-editor';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export var AtrcControlBorderRadiusAllowedKeys = ['tR', 'tL', 'bL', 'bR'];
var RenderBorderRadiusControl = function RenderBorderRadiusControl(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    values = props.values,
    _onChange = props.onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var newObj;
  if (_typeof(values) === 'object') {
    newObj = {
      topRight: values.tR,
      topLeft: values.tL,
      bottomLeft: values.bL,
      bottomRight: values.bR
    };
  } else {
    newObj = values;
  }
  return /*#__PURE__*/React.createElement(BorderRadiusControl, _extends({
    className: classnames(AtrcPrefix('ctrl-bdr-rad'), className, variant ? AtrcPrefix('ctrl-bdr-rad') + '-' + variant : ''),
    values: newObj,
    onChange: function onChange(newControl) {
      var newValues;
      if (_typeof(newControl) === 'object') {
        newValues = {
          tR: newControl.topRight,
          tL: newControl.topLeft,
          bL: newControl.bottomLeft,
          bR: newControl.bottomRight
        };
      } else {
        newValues = newControl;
      }
      _onChange(newValues);
    }
  }, defaultProps));
};
var AtrcControlBorderRadius = function AtrcControlBorderRadius(props) {
  var _props$allowReset = props.allowReset,
    allowReset = _props$allowReset === void 0 ? true : _props$allowReset,
    _props$values = props.values,
    values = _props$values === void 0 ? '' : _props$values,
    onChange = props.onChange;
  if (allowReset) {
    return /*#__PURE__*/React.createElement(AtrcResetWrap, {
      className: classnames(AtrcPrefix('bdr-rad-rst'))
    }, /*#__PURE__*/React.createElement(RenderBorderRadiusControl, props), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
      value: values,
      onClick: function onClick() {
        return onChange({});
      }
    }));
  }
  return /*#__PURE__*/React.createElement(RenderBorderRadiusControl, props);
};
export default AtrcControlBorderRadius;
//# sourceMappingURL=index.js.map