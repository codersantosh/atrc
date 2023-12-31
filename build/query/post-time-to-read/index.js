function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { _n, _x, sprintf } from '@wordpress/i18n';
import { useEntityBlockEditor, useEntityProp } from '@wordpress/core-data';
import { forwardRef, useMemo } from '@wordpress/element';
import {
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
__unstableSerializeAndClean as unstableSerializeAndClean } from '@wordpress/blocks';
import { count as wordCount } from '@wordpress/wordcount';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';

/* Local */
const AVERAGE_READING_RATE = 189;
const AtrcPostTimeToRead = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    ...defaultProps
  } = props;
  const [contentStructure] = useEntityProp('postType', postType, 'content', postId);
  const [blocks] = useEntityBlockEditor('postType', postType, {
    id: postId
  });
  const minutesToReadString = useMemo(() => {
    // Replicates the logic found in getEditedPostContent().
    let content;
    if (contentStructure instanceof Function) {
      content = contentStructure({
        blocks
      });
    } else if (blocks) {
      // If we have parsed blocks already, they should be our source of truth.
      // Parsing applies block deprecations and legacy block conversions that
      // unparsed content will not have.
      content = unstableSerializeAndClean(blocks);
    } else {
      content = contentStructure;
    }

    /*
     * translators: If your word count is based on single characters (e.g. East Asian characters),
     * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
     * Do not translate into your own language.
     */
    const wordCountType = _x('words', 'Word count type. Do not translate!');
    const minutesToRead = Math.max(1, Math.round(wordCount(content, wordCountType) / AVERAGE_READING_RATE));
    return sprintf( /* translators: %d is the number of minutes the post will take to read. */
    _n('%d minute', '%d minutes', minutesToRead), minutesToRead);
  }, [contentStructure, blocks]);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), minutesToReadString);
};
export default forwardRef(AtrcPostTimeToRead);
//# sourceMappingURL=index.js.map