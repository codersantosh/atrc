function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { CheckboxControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcCheckbox = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(CheckboxControl, _extends({
    className: classnames(AtrcPrefix('checkbox'), className, variant ? AtrcPrefix('checkbox') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcCheckbox;
//# sourceMappingURL=index.js.map