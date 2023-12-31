function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcWord = props => {
  const {
    tag = 'h2',
    className = '',
    variant = '',
    children = '',
    ...defaultProps
  } = props;
  const HTag = tag;
  return /*#__PURE__*/React.createElement(HTag, _extends({
    className: classnames('at-txt', className, AtrcPrefix('txt') + '-' + tag, variant ? AtrcPrefix('txt') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcWord;
//# sourceMappingURL=index.js.map