function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { PanelBody } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcPanelBody = props => {
  const {
    children,
    className = '',
    variant = '',
    bodyProps = {},
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(PanelBody, _extends({
    className: classnames(AtrcPrefix('pnl-body'), className, defaultProps.variant ? null : 'at-m at-p at-bdr', variant ? AtrcPrefix('pnl-body') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, bodyProps, {
    className: classnames(AtrcPrefix('pnl-body-cont'), bodyProps.variant ? null : 'at-p at-bg-cl at-bdr', bodyProps.className ? bodyProps.className : null)
  }), children));
};
export default AtrcPanelBody;
//# sourceMappingURL=index.js.map