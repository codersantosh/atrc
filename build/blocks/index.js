function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */

/* Molecules */

/* Controls */

/* Internal */
import AtrcText from '../atoms/text';
import AtrcMapGoogle from '../atoms/map-google';

/* Local */
/* Settings is based on the Websit elements like atoms and molecules.
Eg text and button have different or same properties.
Properties are defined from the variable name of atomic css
*/
var AtrcBlocks = function AtrcBlocks(props) {
  var value = props.value,
    blockName = props.blockName,
    blockProps = props.blockProps,
    wrapProps = props.wrapProps,
    _props$htmlTag = props.htmlTag,
    htmlTag = _props$htmlTag === void 0 ? 'p' : _props$htmlTag,
    _props$componentType = props.componentType,
    componentType = _props$componentType === void 0 ? 'client' : _props$componentType;
  var _value$content = value.content,
    content = _value$content === void 0 ? {} : _value$content;
  if ('text' === blockName) {
    return /*#__PURE__*/React.createElement(AtrcText, _extends({
      tag: htmlTag,
      dangerouslySetInnerHTML: {
        __html: content.value
      } /* support html tag on value, support Richtext */
    }, blockProps));
  }
  if ('mapGoogle' === blockName) {
    return /*#__PURE__*/React.createElement(AtrcMapGoogle, _extends({
      value: content
    }, blockProps));
  }
  return __('No blocks found!', 'atrc-prefix-atrc');
};
export default AtrcBlocks;
//# sourceMappingURL=index.js.map