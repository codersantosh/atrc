function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';
import AtrcLink from '../../atoms/link';

/* Local */
const AtrcPostDate = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    displayType = 'date',
    linkOptions,
    format,
    ...defaultProps
  } = props;
  const [date] = useEntityProp('postType', postType, displayType, postId);
  const dateSettings = getDateSettings();
  const [siteFormat = dateSettings.formats.date] = useEntityProp('root', 'site', 'date_format');
  const dateLabel = displayType === 'date' ? __('Post date', 'atrc-prefix-atrc') : __('Post modified date', 'atrc-prefix-atrc');
  let postDate = date ? /*#__PURE__*/React.createElement("time", {
    dateTime: dateI18n('c', date)
  }, dateI18n(format || siteFormat, date)) : dateLabel;
  if (linkOptions && linkOptions.on && date) {
    postDate = /*#__PURE__*/React.createElement(AtrcLink, {
      prefix: false,
      href: "#post-date-pseudo-link",
      onClick: event => event.preventDefault()
    }, postDate);
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), postDate);
};
export default forwardRef(AtrcPostDate);
//# sourceMappingURL=index.js.map