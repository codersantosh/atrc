function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalToolsPanelItem as ToolsPanelItem } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';
/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcToolsPanelItem = props => {
  const {
    children,
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(ToolsPanelItem, _extends({
    className: classnames(AtrcPrefix('tools-pnl-itm'), className, variant ? AtrcPrefix('tools-pnl-itm') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcToolsPanelItem;
//# sourceMappingURL=index.js.map