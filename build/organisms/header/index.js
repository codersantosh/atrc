function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { useEffect } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcHeader = props => {
  const {
    isSticky = false,
    className = '',
    variant = '',
    children = '',
    ...defaultProps
  } = props;
  useEffect(() => {
    if (isSticky) {
      document.body.classList.add(AtrcPrefix('has-sticky'));
      return () => {
        document.body.classList.remove(AtrcPrefix('has-sticky'));
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "header",
    className: classnames(AtrcPrefix('header'), 'at-bg-cl', className, isSticky ? AtrcPrefix('header-sticky') : '')
  }, defaultProps), children);
};
export default AtrcHeader;
//# sourceMappingURL=index.js.map