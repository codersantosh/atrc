var _excluded = ["postType", "postId", "htmlTag", "taxonomy", "separator"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';
import AtrcSpinner from '../../atoms/spinner';

/* Local */
import AtrcUsePostTerms from './use-post-terms';
var AtrcPostTerms = function AtrcPostTerms(props) {
  var _selectedTerm;
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    _props$taxonomy = props.taxonomy,
    taxonomy = _props$taxonomy === void 0 ? 'category' : _props$taxonomy,
    separator = props.separator,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _AtrcUsePostTerms = AtrcUsePostTerms({
      postId: postId,
      taxonomy: taxonomy
    }),
    postTerms = _AtrcUsePostTerms.postTerms,
    hasPostTerms = _AtrcUsePostTerms.hasPostTerms,
    isLoading = _AtrcUsePostTerms.isLoading;
  var hasPost = postType;
  var TermTag = htmlTag;
  return /*#__PURE__*/React.createElement(AtrcWrap, defaultProps, isLoading && hasPost && /*#__PURE__*/React.createElement(AtrcSpinner, null), hasPost && !isLoading && hasPostTerms && postTerms.map(function (postTerm) {
    return /*#__PURE__*/React.createElement(TermTag, {
      key: postTerm.id,
      className: "at-txt"
    }, /*#__PURE__*/React.createElement(AtrcLink, {
      prefix: false,
      href: postTerm.link,
      onClick: function onClick(event) {
        return event.preventDefault();
      }
    }, decodeEntities(postTerm.name)));
  }).reduce(function (prev, curr) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, prev, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: separator || ' '
      }
    }), curr);
  }), hasPost && !isLoading && !hasPostTerms && (((_selectedTerm = selectedTerm) === null || _selectedTerm === void 0 || (_selectedTerm = _selectedTerm.labels) === null || _selectedTerm === void 0 ? void 0 : _selectedTerm.no_terms) || __('Term items not found.', 'atrc-prefix-atrc')));
};
export default AtrcPostTerms;
//# sourceMappingURL=index.js.map