import React from 'react';

/*Library*/
import classnames from 'classnames';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
var AtrcList = function AtrcList(_ref) {
  var className = _ref.className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant,
    _ref$column = _ref.column,
    column = _ref$column === void 0 ? '' : _ref$column,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'ul' : _ref$type,
    children = _ref.children;
  var Tag = 'ol' === type ? 'ol' : 'ul';
  return /*#__PURE__*/React.createElement(Tag, {
    className: classnames(AtrcPrefix('ls'), className, column ? AtrcPrefix('ls-col') + '-' + column : '', variant ? AtrcPrefix('ls') + '-' + variant : '')
  }, children);
};
export default AtrcList;
//# sourceMappingURL=index.js.map