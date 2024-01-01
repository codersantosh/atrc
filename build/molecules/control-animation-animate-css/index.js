var _excluded = ["value", "variant", "className", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Attributes Structure
Type Object
{
    "ani":"",
    "dla":"",
    "dur":"",
    "iter":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcSelect from '../../atoms/select';
import AtrcText from '../../atoms/text';
import { AnimationOptions } from './options';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcControlAnimationAnimateCss = function AtrcControlAnimationAnimateCss(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _value$ani = value.ani,
    ani = _value$ani === void 0 ? '' : _value$ani,
    _value$dla = value.dla,
    dla = _value$dla === void 0 ? '' : _value$dla,
    _value$dur = value.dur,
    dur = _value$dur === void 0 ? '' : _value$dur,
    _value$iter = value.iter,
    iter = _value$iter === void 0 ? '' : _value$iter;
  var setAttr = function setAttr(newVal, type) {
    var valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-ani-animate-css'), className, variant ? AtrcPrefix('ctrl-ani-animate-css') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Animation', 'atrc-prefix-atrc'),
    value: ani,
    options: AnimationOptions(),
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'ani');
    }
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Delay (Seconds)', 'atrc-prefix-atrc'),
    value: dla,
    type: "number",
    min: 0,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'dla');
    }
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Duration (Seconds)', 'atrc-prefix-atrc'),
    value: dur,
    type: "number",
    min: 0,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'dur');
    }
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Iteration', 'atrc-prefix-atrc'),
    value: iter,
    type: "number",
    min: 1,
    onChange: function onChange(newVal) {
      return setAttr(newVal, 'iter');
    }
  }));
};
export default AtrcControlAnimationAnimateCss;
//# sourceMappingURL=index.js.map