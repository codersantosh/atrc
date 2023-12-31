/*WordPress*/
import { Tooltip } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcSpan from '../../atoms/span';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcTooltip = props => {
  const {
    children = '',
    className = '',
    variant = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(Tooltip, defaultProps, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('ttip'), className, variant ? AtrcPrefix('ttip') + '-' + variant : '')
  }, children));
};
export default AtrcTooltip;
//# sourceMappingURL=index.js.map