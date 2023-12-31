function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/*Inbuilt*/
import AtrcRepeater from '../repeater';
import AtrcRepeaterGroup from '../repeater/repeater-group';
import AtrcRepeaterGroupAdd from '../repeater/repeater-group-add';
import AtrcControlSelectGoogleFonts from '../control-select-google-fonts';

/*Local*/
const AtrcControlSelectGoogleFontsRepeater = props => {
  const {
    onChange,
    value = [],
    label = '',
    apiKey = '',
    ...defaultProps
  } = props;
  const [fonts, setFonts] = useState(value);
  const setFont = (newVal, iDx) => {
    const updatedFonts = [...fonts];
    updatedFonts[iDx] = newVal;
    setFonts(updatedFonts);
    onChange(updatedFonts);
  };
  const removeFont = iDx => {
    const updatedFonts = [...fonts];
    updatedFonts.splice(iDx, 1);
    setFonts(updatedFonts);
    onChange(updatedFonts);
  };
  return /*#__PURE__*/React.createElement(AtrcRepeater, _extends({
    label: label,
    groups: () => fonts.map((font, iDx) => /*#__PURE__*/React.createElement(AtrcRepeaterGroup, {
      groupIndex: iDx,
      deleteGroup: removeFont,
      groupTitle: __('Google font', 'atrc-prefix-atrc'),
      deleteTitle: __('Remove font', 'atrc-prefix-atrc'),
      key: iDx
    }, /*#__PURE__*/React.createElement(AtrcControlSelectGoogleFonts, {
      apiKey: apiKey,
      value: font,
      onChange: newVal => setFont(newVal, iDx)
    }))),
    addGroup: () => /*#__PURE__*/React.createElement(AtrcRepeaterGroupAdd, {
      addGroup: () => setFonts([...fonts, {}]),
      tooltipText: __('Add Google font', 'atrc-prefix-atrc'),
      label: __('Add Google font', 'atrc-prefix-atrc')
    })
  }, defaultProps));
};
export default AtrcControlSelectGoogleFontsRepeater;
//# sourceMappingURL=index.js.map