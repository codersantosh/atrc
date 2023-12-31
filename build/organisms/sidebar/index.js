function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSidebar = props => {
  const {
    direction = 'right',
    className = '',
    variant = '' /*over and push*/,
    children = '',
    ...defaultProps
  } = props;
  const Direction = () => {
    switch (direction) {
      case 'right':
        return 'r';
      case 'left':
        return 'l';
      case 'top':
        return 't';
      case 'bottom':
        return 'b';
    }
  };
  const Variant = () => {
    switch (variant) {
      case 'float':
      case 'floating':
        return 'flt';
    }
    return variant;
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "aside",
    className: classnames(AtrcPrefix('sidebar'), className, variant ? AtrcPrefix('sidebar') + '-' + Variant() : '', direction ? AtrcPrefix('sidebar') + '-' + Direction() : '')
  }, defaultProps), children);
};
export default AtrcSidebar;
//# sourceMappingURL=index.js.map