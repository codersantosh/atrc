var _excluded = ["postType", "postId", "htmlTag", "linkOptions", "size"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { addQueryArgs, removeQueryArgs } from '@wordpress/url';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';
import AtrcImg from '../../atoms/img';

/* Internal */
import AtrcUseUserAvatar from './use-user-avatar';

/* Local */
var AtrcPostAuthorImage = function AtrcPostAuthorImage(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    linkOptions = props.linkOptions,
    _props$size = props.size,
    size = _props$size === void 0 ? 24 : _props$size,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var authorId = useSelect(function (select) {
    var _getEditedEntityRecor;
    var _select = select(coreStore),
      getEditedEntityRecord = _select.getEditedEntityRecord;
    var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
    return _authorId;
  }, [postType, postId]);
  var avatar = AtrcUseUserAvatar({
    userId: authorId,
    postId: postId,
    postType: postType
  });
  var doubledSizedSrc = addQueryArgs(removeQueryArgs(avatar === null || avatar === void 0 ? void 0 : avatar.src, ['s']), {
    s: size * 2
  });
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: "figure"
  }), doubledSizedSrc ? /*#__PURE__*/React.createElement(AtrcImg, {
    src: doubledSizedSrc,
    alt: __('Author image', 'atrc-prefix-atrc')
  }) : __('Not author image found!', 'atrc-prefix-atrc'));
};
export default /*#__PURE__*/forwardRef(AtrcPostAuthorImage);
//# sourceMappingURL=index.js.map