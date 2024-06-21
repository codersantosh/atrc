var _excluded = ["postType", "postId", "htmlTag", "taxonomy", "separator"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';

/* Atoms */
import AtrcSpan from '../../atoms/span';
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';
import AtrcSpinner from '../../atoms/spinner';

/* Internal */
import AtrcUsePostTerms from './use-post-terms';

/* Local */
var AtrcPostTerms = function AtrcPostTerms(props, ref) {
  var _selectedTerm;
  var postType = props.postType,
    postId = props.postId,
    _props$htmlTag = props.htmlTag,
    htmlTag = _props$htmlTag === void 0 ? 'div' : _props$htmlTag,
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
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref
  }), isLoading && hasPost && /*#__PURE__*/React.createElement(AtrcSpinner, null), hasPost && !isLoading && hasPostTerms && postTerms.map(function (postTerm) {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, prev, /*#__PURE__*/React.createElement(AtrcSpan, {
      dangerouslySetInnerHTML: {
        __html: separator || ' '
      }
    }), curr);
  }), hasPost && !isLoading && !hasPostTerms && (((_selectedTerm = selectedTerm) === null || _selectedTerm === void 0 || (_selectedTerm = _selectedTerm.labels) === null || _selectedTerm === void 0 ? void 0 : _selectedTerm.no_terms) || __('Term items not found.', 'atrc-prefix-atrc')));
};
export default /*#__PURE__*/forwardRef(AtrcPostTerms);
//# sourceMappingURL=index.js.map