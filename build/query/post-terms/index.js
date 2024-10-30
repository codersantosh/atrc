var _excluded = ["postType", "postId", "htmlTag", "taxonomy", "separator"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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