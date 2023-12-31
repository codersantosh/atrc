/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { DateTimePicker } from '@wordpress/components';
import { useRef } from '@wordpress/element';
import { dateI18n, getSettings } from '@wordpress/date';
const dateFormat = getSettings().formats.date;

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Library*/
import { BsX } from 'react-icons/bs';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcIcon from '../../atoms/icon';
import AtrcSpan from '../../atoms/span';
import AtrcWord from '../../atoms/word';
import AtrcLink from '../../atoms/link';
import AtrcDropdown from '../dropdown';

/* Local components */
function UserDateToggle({
  isOpen,
  onClick,
  date
}) {
  return /*#__PURE__*/React.createElement(AtrcLink, {
    type: "btn",
    label: __('Date', 'atrc-prefix-atrc'),
    showTooltip: true,
    "aria-expanded": isOpen,
    "aria-label": __('Select date: Date', 'atrc-prefix-atrc'),
    onClick: onClick
  }, date ? dateI18n(dateFormat, date) : __('Immediately', 'atrc-prefix-atrc'));
}
function UserDateForm({
  label = __('Date', 'atrc-prefix-atrc'),
  onClose,
  date,
  onChange
}) {
  const onUpdateDate = newDate => {
    onChange(newDate);
    onClose();
  };
  const settings = getSettings();

  // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"
  const is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a.
  .replace(/\\\\/g, '') // Replace "//" with empty strings.
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash.
  );
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('p-10'))
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', AtrcPrefix('mt-0'), AtrcPrefix('mb-5 '), AtrcPrefix('bdr'), AtrcPrefix('bdr-b'), AtrcPrefix('pb-15'))
  }, /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h6",
    className: classnames(AtrcPrefix('m-0'))
  }, label), onClose && /*#__PURE__*/React.createElement(AtrcLink, {
    type: "btn",
    variant: "close",
    label: __('Close', 'atrc-prefix-atrc'),
    onClick: onClose
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('m-0')),
    type: "bootstrap",
    icon: BsX,
    size: "14"
  }))), /*#__PURE__*/React.createElement(DateTimePicker, {
    startOfWeek: getSettings().l10n.startOfWeek,
    __nextRemoveHelpButton: true,
    __nextRemoveResetButton: true,
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  }));
}
export function AtrcControlDateTimePicker({
  label = __('Date', 'atrc-prefix-atrc'),
  contentLabel = __('Date', 'atrc-prefix-atrc'),
  date,
  onChange
}) {
  const rowref = useRef();
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('date-time-picker'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', AtrcPrefix('mt-10'))
  }, /*#__PURE__*/React.createElement(AtrcSpan, null, label), /*#__PURE__*/React.createElement(AtrcDropdown, {
    width: "280px",
    popoverProps: {
      rowref,
      placement: 'bottom left'
    },
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(UserDateToggle, {
      isOpen: isOpen,
      onClick: onToggle,
      date: date
    }),
    renderContent: ({
      onClose
    }) => /*#__PURE__*/React.createElement(UserDateForm, {
      label: contentLabel,
      onClose: onClose,
      date: date,
      onChange: newVal => {
        onChange(newVal.replace('T', ' '));
      }
    })
  }));
}
export default AtrcControlDateTimePicker;
//# sourceMappingURL=index.js.map