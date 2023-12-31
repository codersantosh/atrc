function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { Spinner } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcSpinner = (props = {}) => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Spinner, _extends({
    className: classnames(AtrcPrefix('spinner'), className, variant ? AtrcPrefix('spinner') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcSpinner;
//# sourceMappingURL=index.js.map