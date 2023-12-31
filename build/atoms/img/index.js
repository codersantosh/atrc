function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcImg = props => {
  const {
    variant = '',
    className = '',
    prefix = '',
    srcset = '',
    ...defaultProps
  } = props;
  if (!defaultProps.src) {
    return null;
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", _extends({
      className: classnames('at-img', className, variant ? AtrcPrefix('img') + '-' + variant : ''),
      srcSet: srcset
    }, defaultProps))
  );
};
export default AtrcImg;
//# sourceMappingURL=index.js.map