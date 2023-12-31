function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { audio } from '@wordpress/icons';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcDropdown from '../dropdown';
import AtrcControlAudio from '../control-audio';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcControlDropdownAudio = props => {
  const {
    isToolbar = false,
    value,
    onChange = () => {},
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcDropdown, _extends({
    className: classnames(AtrcPrefix('ctrl-dropdown-img'), className, variant ? AtrcPrefix('ctrl-dropdown-img') + '-' + variant : ''),
    renderToggle: ({
      isOpen,
      onToggle
    }) => isToolbar ? /*#__PURE__*/React.createElement(ToolbarButton, {
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
    })),
    renderContent: () => /*#__PURE__*/React.createElement(AtrcControlAudio, {
      label: __('Audio', 'atrc-prefix-atrc'),
      value: value,
      onChange: onChange,
      allowSettings: false
    })
  }, defaultProps));
};
export default AtrcControlDropdownAudio;
//# sourceMappingURL=index.js.map