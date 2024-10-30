var _excluded = ["postType", "postId", "htmlTag", "linkOptions"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
var AtrcPostAuthorName = function AtrcPostAuthorName(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useSelect = useSelect(function (select) {
      var _getEditedEntityRecor;
      var _select = select(coreStore),
        getEditedEntityRecord = _select.getEditedEntityRecord,
        getUser = _select.getUser;
      var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
      return {
        authorName: _authorId ? getUser(_authorId) : null
      };
    }, [postType, postId]),
    authorName = _useSelect.authorName;
  var displayName = (authorName === null || authorName === void 0 ? void 0 : authorName.name) || __('Author Name', 'atrc-prefix-atrc');
  var displayAuthor = linkOptions && linkOptions.on ? /*#__PURE__*/React.createElement(AtrcLink, {
    prefix: false,
    href: "#author-pseudo-link",
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, displayName) : displayName;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), displayAuthor);
};
export default /*#__PURE__*/forwardRef(AtrcPostAuthorName);
//# sourceMappingURL=index.js.map