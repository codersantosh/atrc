function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcHr from '../../atoms/hr';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcRepeater = props => {
  const {
    label = '',
    className = '',
    variant = '',
    groups,
    addGroup,
    labelProps = {
      className: 'at-m'
    },
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('repeater'), className, 'at-flx-col', variant ? AtrcPrefix() + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, labelProps, label), /*#__PURE__*/React.createElement(AtrcHr, {
    className: "at-m"
  })) : null, groups(), addGroup());
};
export default AtrcRepeater;
//# sourceMappingURL=index.js.map