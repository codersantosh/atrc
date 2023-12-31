function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcTh = props => {
  const {
    colSpan = 1,
    isSorting = false,
    isSortActive = false,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    className = '',
    variant = '',
    children = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement("th", _extends({
    className: classnames(AtrcPrefix('th'), className, isSorting ? AtrcPrefix('sorting') : '', isSortActive ? AtrcPrefix('sorting-active') : '', variant ? AtrcPrefix('th') + '-' + variant : ''),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    colSpan: colSpan
  }, defaultProps), children);
};
export default AtrcTh;
//# sourceMappingURL=index.js.map