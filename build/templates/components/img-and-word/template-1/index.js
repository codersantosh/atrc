function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';

/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcSpan from '../../../../atoms/span';
import AtrcText from '../../../../atoms/text';
import AtrcImg from '../../../../atoms/img';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
var AtrcImgAndTextTemplate1 = function AtrcImgAndTextTemplate1(props) {
  var imgProps = props.imgProps,
    wordProps = props.wordProps;
  return /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames(AtrcPrefix('img-txt'), 'at-flx', 'at-al-itm-ctr', 'at-gap')
  }, /*#__PURE__*/React.createElement(AtrcImg, imgProps), /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "span"
  }, wordProps)));
};
export default AtrcImgAndTextTemplate1;
//# sourceMappingURL=index.js.map