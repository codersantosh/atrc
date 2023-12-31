function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { ToggleControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcToggle = props => {
  const {
    variant = '',
    className = '',
    label = '',
    onChange = () => {},
    checked = false,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(ToggleControl, _extends({
    className: classnames(AtrcPrefix('tog'), className, variant ? AtrcPrefix('tog') + '-' + variant : ''),
    label: label,
    checked: checked,
    onChange: onChange
  }, defaultProps));
};
export default AtrcToggle;
//# sourceMappingURL=index.js.map