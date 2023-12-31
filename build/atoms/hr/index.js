function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcHr = props => {
  const {
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: classnames(AtrcPrefix('hr'), className, variant ? AtrcPrefix('hr') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcHr;
//# sourceMappingURL=index.js.map