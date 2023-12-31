function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcButton = props => {
  const {
    className = '',
    variant = '',
    isActive = false,
    text = '',
    children = '',
    isPrimary = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classnames('at-btn', className, isActive ? AtrcPrefix('btn-active') : '', variant ? AtrcPrefix('btn') + '-' + variant : '')
  }, defaultProps), children || text);
};
export default AtrcButton;
//# sourceMappingURL=index.js.map