/*WordPress*/
import { chevronUp, chevronDown } from '@wordpress/icons';
import { useState } from '@wordpress/element';

/*Inbuilt*/
import AtrcIcon from '../../atoms/icon';
import AtrcSpan from '../../atoms/span';
import AtrcLink from '../../atoms/link';
import AtrcTh from '../../atoms/th';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components and Functions*/
function getIcon(order, isHovered) {
  if (isHovered) {
    return order === 'asc' ? chevronUp : chevronDown;
  }
  return order === 'asc' ? chevronDown : chevronUp;
}
const AtrcSortableTh = ({
  icon,
  label = null,
  isActive,
  order,
  onOrder,
  colSpan = 1,
  className = null,
  variant = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return /*#__PURE__*/React.createElement(AtrcTh, {
    colSpan: colSpan,
    isSorting: true,
    isSortActive: isActive,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: classnames(AtrcPrefix('sortable-th'), className, variant ? AtrcPrefix('sortable-th') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcLink, {
    type: "btn",
    className: "at-flx at-al-itm-ctr",
    onClick: () => {
      if (order === 'asc') {
        onOrder('desc');
      } else {
        onOrder('asc');
      }
    }
  }, icon && /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "wp",
    icon: icon
  }), label && /*#__PURE__*/React.createElement(AtrcSpan, null, label), /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "wp",
    icon: getIcon(order, isHovered)
  })));
};
export default AtrcSortableTh;
//# sourceMappingURL=index.js.map