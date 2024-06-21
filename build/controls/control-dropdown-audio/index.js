var _excluded = ["isToolbar", "value", "onChange", "variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';

/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { audio } from '@wordpress/icons';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

/*Controls*/
import AtrcControlAudio from '../control-audio';

/*Molecules*/
import AtrcDropdown from '../../molecules/dropdown';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var AtrcControlDropdownAudio = function AtrcControlDropdownAudio(props) {
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
        title: __('Select audio', 'atrc-prefix-atrc'),
        onClick: onToggle,
        isActive: false
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        icon: audio
      })) : /*#__PURE__*/React.createElement(AtrcButton, {
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        icon: audio
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(AtrcControlAudio, {
        label: __('Audio', 'atrc-prefix-atrc'),
        value: value,
        onChange: onChange,
        allowSettings: false
      });
    }
  }, defaultProps));
};
export default AtrcControlDropdownAudio;
//# sourceMappingURL=index.js.map