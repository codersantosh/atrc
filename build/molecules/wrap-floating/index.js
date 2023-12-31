function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import { Portal } from 'react-portal';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Inbuilt*/
const AtrcWrapFloating = props => {
  const {
    className = '',
    position = 'bottom-right',
    ...defaultProps
  } = props;
  const Position = () => {
    switch (position) {
      case 'bottom-right':
        return 'br';
      case 'bottom-left':
        return 'bl';
      case 'top-right':
        return 'tr';
      case 'top-left':
        return 'tl';
    }
  };
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    className: classnames(className, position ? AtrcPrefix('wrp-flt-') + Position() : '')
  })));
};
export default AtrcWrapFloating;
//# sourceMappingURL=index.js.map