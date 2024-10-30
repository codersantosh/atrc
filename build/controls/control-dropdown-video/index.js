var _excluded = ["isToolbar", "value", "onChange", "variant", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { video } from '@wordpress/icons';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/* Controls */
import AtrcControlVideo from '../control-video';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlDropdownVideo = function AtrcControlDropdownVideo(props) {
  var _props$isToolbar = props.isToolbar,
    isToolbar = _props$isToolbar === void 0 ? false : _props$isToolbar,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-img'), className, variant ? AtrcPrefix('ctrl-dropdown-img') + '-' + variant : ''),
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return isToolbar ? /*#__PURE__*/React.createElement(ToolbarButton, {
        name: "img",
        title: __('Select video', 'atrc-prefix-atrc'),
        onClick: onToggle,
        isActive: false
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        icon: video
      })) : /*#__PURE__*/React.createElement(AtrcButton, {
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        icon: video
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(AtrcControlVideo, {
        label: __('Video', 'atrc-prefix-atrc'),
        value: value,
        onChange: onChange,
        allowSettings: false
      });
    }
  }, defaultProps));
};
export default AtrcControlDropdownVideo;
//# sourceMappingURL=index.js.map