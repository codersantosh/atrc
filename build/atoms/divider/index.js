function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __experimentalDivider as Divider } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcDivider = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Divider, _extends({
    className: classnames(AtrcPrefix('divider'), className, variant ? AtrcPrefix('divider') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcDivider;
//# sourceMappingURL=index.js.map