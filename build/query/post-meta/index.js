function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcNotice from './../../molecules/notice';
import AtrcIsScalar from '../../utils/is-scalar';

/* Local */
const AtrcPostMeta = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    metaKey,
    ...defaultProps
  } = props;

  // eslint-disable-next-line @wordpress/no-unused-vars-before-return, no-unused-vars
  const [meta, updateMeta] = useEntityProp('postType', postType, 'meta', postId);
  const metaValue = meta?.[metaKey] || null;
  if (null === metaValue) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(AtrcNotice, {
      isDismissible: false,
      autoDismiss: false
    }, __('Meta value not found for the provided meta key and it should be accessible through the REST API.', 'atrc-prefix-atrc')));
  }
  if (!AtrcIsScalar(metaValue)) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(AtrcNotice, {
      isDismissible: false,
      autoDismiss: false
    }, __('Supported values are limited to strings, numbers, or scalar values only.', 'atrc-prefix-atrc')));
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), metaValue);
};
export default forwardRef(AtrcPostMeta);
//# sourceMappingURL=index.js.map