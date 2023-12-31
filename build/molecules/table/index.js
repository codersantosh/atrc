function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcTable = props => {
  const {
    className = '',
    variant = '',
    isRounded = false,
    isBordered = false,
    children,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("table", _extends({
    className: classnames(AtrcPrefix('tbl'), className, isBordered ? AtrcPrefix('bordered') : '', isRounded ? AtrcPrefix('rounded') : '', variant ? AtrcPrefix('tbl') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcTable;
//# sourceMappingURL=index.js.map