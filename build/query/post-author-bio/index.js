var _excluded = ["postType", "postId", "htmlTag"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*React*/
import { forwardRef } from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/* Atoms */
import AtrcWrap from '../../atoms/wrap';

/* Local */
var AtrcPostAuthorBio = function AtrcPostAuthorBio(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useSelect = useSelect(function (select) {
      var _getEditedEntityRecor;
      var _select = select(coreStore),
        getEditedEntityRecord = _select.getEditedEntityRecord,
        getUser = _select.getUser;
      var _authorId = (_getEditedEntityRecor = getEditedEntityRecord('postType', postType, postId)) === null || _getEditedEntityRecor === void 0 ? void 0 : _getEditedEntityRecor.author;
      return {
        authorDetails: _authorId ? getUser(_authorId) : null
      };
    }, [postType, postId]),
    authorDetails = _useSelect.authorDetails;
  var displayAuthorBiography = (authorDetails === null || authorDetails === void 0 ? void 0 : authorDetails.description) || __('Author Biography', 'atrc-prefix-atrc');
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag,
    dangerouslySetInnerHTML: {
      __html: displayAuthorBiography
    }
  }));
};
export default /*#__PURE__*/forwardRef(AtrcPostAuthorBio);
//# sourceMappingURL=index.js.map