function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcTd = props => {
  const {
    className = '',
    variant = '',
    children = '',
    colSpan = 1,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("td", _extends({
    className: classnames(AtrcPrefix('td'), className, variant ? AtrcPrefix('td') + '-' + variant : ''),
    colSpan: colSpan
  }, defaultProps), children);
};
export default AtrcTd;
//# sourceMappingURL=index.js.map