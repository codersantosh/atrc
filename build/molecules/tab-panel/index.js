function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { TabPanel } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcTabPanel = props => {
  const {
    children,
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(TabPanel, _extends({
    className: classnames(AtrcPrefix('tab-pnl'), className, variant ? AtrcPrefix('tab-pnl') + '-' + variant : '')
  }, defaultProps), tab => children(tab));
};
export default AtrcTabPanel;
//# sourceMappingURL=index.js.map