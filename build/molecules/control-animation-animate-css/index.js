function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
const AtrcControlAnimationAnimateCss = props => {
  const {
    value = {},
    variant = '',
    className = '',
    onChange = () => {},
    ...defaultProps
  } = props;
  const {
    ani = '',
    dla = '',
    dur = '',
    iter = ''
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('ctrl-ani-animate-css'), className, variant ? AtrcPrefix('ctrl-ani-animate-css') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Animation', 'atrc-prefix-atrc'),
    value: ani,
    options: AnimationOptions,
    onChange: newVal => setAttr(newVal, 'ani')
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Delay (Seconds)', 'atrc-prefix-atrc'),
    value: dla,
    type: "number",
    min: 0,
    onChange: newVal => setAttr(newVal, 'dla')
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Duration (Seconds)', 'atrc-prefix-atrc'),
    value: dur,
    type: "number",
    min: 0,
    onChange: newVal => setAttr(newVal, 'dur')
  }), /*#__PURE__*/React.createElement(AtrcText, {
    label: __('Iteration', 'atrc-prefix-atrc'),
    value: iter,
    type: "number",
    min: 1,
    onChange: newVal => setAttr(newVal, 'iter')
  }));
};
export default AtrcControlAnimationAnimateCss;
//# sourceMappingURL=index.js.map