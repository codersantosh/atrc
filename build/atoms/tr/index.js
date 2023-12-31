function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcTr = props => {
  const {
    variant = '',
    className = '',
    children = '',
    isSticky = false,
    isLocked = false,
    isEven = false,
    isOdd = false,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("tr", _extends({
    className: classnames(AtrcPrefix('tr'), className, variant ? AtrcPrefix('tr') + '-' + variant : '', isSticky ? AtrcPrefix('sticky') : '', isLocked ? AtrcPrefix('locked') : '', isEven ? AtrcPrefix('even') : '', isOdd ? AtrcPrefix('odd') : '')
  }, defaultProps), children);
};
export default AtrcTr;
//# sourceMappingURL=index.js.map