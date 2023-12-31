function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalToolsPanel as ToolsPanel } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcToolsPanel = props => {
  const {
    children,
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(ToolsPanel, _extends({
    className: classnames(AtrcPrefix('tools-pnl'), className, variant ? AtrcPrefix('tools-pnl') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcToolsPanel;
//# sourceMappingURL=index.js.map