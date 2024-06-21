import React from 'react';

/*Attributes Structure
Type string
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { DateTimePicker } from '@wordpress/components';
import { useRef } from '@wordpress/element';
import { dateI18n, getSettings } from '@wordpress/date';

/*Library*/
import { BsX } from 'react-icons/bs';
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcIcon from '../../atoms/icon';
import AtrcText from '../../atoms/text';
import AtrcButton from '../../atoms/button';

/* Molecules */
import AtrcDropdown from '../../molecules/dropdown';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Local */
function UserDateToggle(_ref) {
  var isOpen = _ref.isOpen,
    onClick = _ref.onClick,
    date = _ref.date;
  var dateFormat = getSettings().formats.date;
  return /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "link",
    "aria-expanded": isOpen,
    "aria-label": __('Select date: Date', 'atrc-prefix-atrc'),
    onClick: onClick
  }, date ? dateI18n(dateFormat, date) : __('Immediately', 'atrc-prefix-atrc'));
}
function UserDateForm(_ref2) {
  var _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? __('Date', 'atrc-prefix-atrc') : _ref2$label,
    onClose = _ref2.onClose,
    date = _ref2.date,
    onChange = _ref2.onChange;
  var onUpdateDate = function onUpdateDate(newDate) {
    onChange(newDate);
    onClose();
  };
  var settings = getSettings();

  // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"
  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a.
  .replace(/\\\\/g, '') // Replace "//" with empty strings.
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash.
  );
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('date-time-picker-cont'))
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-bdr', 'at-m', AtrcPrefix('date-time-picker-cont-hdr'))
  }, /*#__PURE__*/React.createElement(AtrcText, {
    tag: "h6",
    className: classnames(AtrcPrefix('m-0'), 'at-m')
  }, label), onClose && /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "link",
    label: __('Close', 'atrc-prefix-atrc'),
    onClick: onClose
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsX,
    size: "16"
  }))), /*#__PURE__*/React.createElement(DateTimePicker, {
    startOfWeek: getSettings().l10n.startOfWeek,
    __nextRemoveHelpButton: true,
    __nextRemoveResetButton: true,
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  }));
}
export function AtrcControlDateTimePicker(_ref3) {
  var _ref3$contentLabel = _ref3.contentLabel,
    contentLabel = _ref3$contentLabel === void 0 ? __('Date', 'atrc-prefix-atrc') : _ref3$contentLabel,
    date = _ref3.date,
    _onChange = _ref3.onChange;
  var rowref = useRef();
  return /*#__PURE__*/React.createElement(AtrcDropdown, {
    width: "280px",
    popoverProps: {
      rowref: rowref,
      placement: 'bottom-start'
    },
    focusOnMount: true,
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
        onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(UserDateToggle, {
        isOpen: isOpen,
        onClick: onToggle,
        date: date
      });
    },
    renderContent: function renderContent(_ref5) {
      var onClose = _ref5.onClose;
      return /*#__PURE__*/React.createElement(UserDateForm, {
        label: contentLabel,
        onClose: onClose,
        date: date,
        onChange: function onChange(newVal) {
          _onChange(newVal.replace('T', ' '));
        }
      });
    }
  });
}
export default AtrcControlDateTimePicker;
//# sourceMappingURL=index.js.map