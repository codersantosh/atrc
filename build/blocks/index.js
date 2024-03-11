function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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