function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';
import AtrcSpinner from '../../atoms/spinner';

/* Local */
import AtrcUsePostTerms from './use-post-terms';
const AtrcPostTerms = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    taxonomy = 'category',
    separator,
    ...defaultProps
  } = props;
  const {
    postTerms,
    hasPostTerms,
    isLoading
  } = AtrcUsePostTerms({
    postId,
    taxonomy
  });
  const hasPost = postType;
  const TermTag = htmlTag;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref
  }), isLoading && hasPost && /*#__PURE__*/React.createElement(AtrcSpinner, null), hasPost && !isLoading && hasPostTerms && postTerms.map(postTerm => /*#__PURE__*/React.createElement(TermTag, {
    key: postTerm.id,
    className: "at-txt"
  }, /*#__PURE__*/React.createElement(AtrcLink, {
    prefix: false,
    href: postTerm.link,
    onClick: event => event.preventDefault()
  }, decodeEntities(postTerm.name)))).reduce((prev, curr) => /*#__PURE__*/React.createElement(React.Fragment, null, prev, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: separator || ' '
    }
  }), curr)), hasPost && !isLoading && !hasPostTerms && (selectedTerm?.labels?.no_terms || __('Term items not found.', 'atrc-prefix-atrc')));
};
export default forwardRef(AtrcPostTerms);
//# sourceMappingURL=index.js.map