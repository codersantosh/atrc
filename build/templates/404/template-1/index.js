var _excluded = ["className", "contentProps", "variant", "label", "right", "title", "description", "heading", "subHeading", "headingGroup", "buttons", "hasIcon"],
  _excluded2 = ["icon", "text"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Library*/
import classnames from 'classnames';
import { isEmpty } from 'lodash-es';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcText from '../../../atoms/text';
import { AtrcIconSvg } from '../../../atoms/icon';

/*Molecules*/
import AtrcButtonGroup from '../../../molecules/button-group';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var Atrc404Template1 = function Atrc404Template1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$contentProps = props.contentProps,
    contentProps = _props$contentProps === void 0 ? {} : _props$contentProps,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    _props$title = props.title,
    title = _props$title === void 0 ? {} : _props$title,
    description = props.description,
    heading = props.heading,
    subHeading = props.subHeading,
    _props$headingGroup = props.headingGroup,
    headingGroup = _props$headingGroup === void 0 ? {} : _props$headingGroup,
    _props$buttons = props.buttons,
    buttons = _props$buttons === void 0 ? [] : _props$buttons,
    hasIcon = props.hasIcon,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('404'), AtrcPrefix('404-tpl-1'), className, variant ? AtrcPrefix('404-tpl-1') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, contentProps, {
    className: classnames('at-flx', 'at-flx-col', 'at-jfy-cont-ctr', 'at-al-itm-ctr', AtrcPrefix('404-cont'), contentProps.className)
  }), !isEmpty(headingGroup) ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('404-cont-heading'), 'at-m')
  }, !isEmpty(headingGroup.subHeading) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "p",
    className: classnames(AtrcPrefix('404-cont-heading-sub-title'))
  }, headingGroup.subHeading)) : null, !isEmpty(headingGroup.heading) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "h3",
    className: classnames(AtrcPrefix('404-cont-heading-title'))
  }, headingGroup.heading)) : null) : null, !isEmpty(title) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "h2",
    className: classnames(AtrcPrefix('404-cont-title'))
  }, title)) : null, !isEmpty(description) ? /*#__PURE__*/React.createElement(AtrcText, _extends({
    tag: "p",
    className: classnames(AtrcPrefix('404-cont-desc'))
  }, description)) : null, !isEmpty(buttons) ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames('at-m')
  }, buttons.map(function (item, iDx) {
    var icon = item.icon,
      _item$text = item.text,
      text = _item$text === void 0 ? '' : _item$text,
      itemProps = _objectWithoutProperties(item, _excluded2);
    return /*#__PURE__*/React.createElement(AtrcButton, itemProps, item.hasIcon ? /*#__PURE__*/React.createElement(AtrcIconSvg, {
      svg: icon
    }) : '', text);
  })) : null));
};
export default Atrc404Template1;
//# sourceMappingURL=index.js.map