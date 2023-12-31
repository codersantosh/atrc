"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtrcControlDateTimePicker = AtrcControlDateTimePicker;
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _date = require("@wordpress/date");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _bs = require("react-icons/bs");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _span = _interopRequireDefault(require("../../atoms/span"));
var _word = _interopRequireDefault(require("../../atoms/word"));
var _link = _interopRequireDefault(require("../../atoms/link"));
var _dropdown = _interopRequireDefault(require("../dropdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*Attributes Structure
Type string
**/

/*WordPress*/

var dateFormat = (0, _date.getSettings)().formats.date;

/*Inbuilt*/

/*Library*/

/*Inbuilt*/

/* Local components */
function UserDateToggle(_ref) {
  var isOpen = _ref.isOpen,
    onClick = _ref.onClick,
    date = _ref.date;
  return /*#__PURE__*/React.createElement(_link.default, {
    type: "btn",
    label: (0, _i18n.__)('Date', 'atrc-prefix-atrc'),
    showTooltip: true,
    "aria-expanded": isOpen,
    "aria-label": (0, _i18n.__)('Select date: Date', 'atrc-prefix-atrc'),
    onClick: onClick
  }, date ? (0, _date.dateI18n)(dateFormat, date) : (0, _i18n.__)('Immediately', 'atrc-prefix-atrc'));
}
function UserDateForm(_ref2) {
  var _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? (0, _i18n.__)('Date', 'atrc-prefix-atrc') : _ref2$label,
    onClose = _ref2.onClose,
    date = _ref2.date,
    onChange = _ref2.onChange;
  var onUpdateDate = function onUpdateDate(newDate) {
    onChange(newDate);
    onClose();
  };
  var settings = (0, _date.getSettings)();

  // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"
  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a.
  .replace(/\\\\/g, '') // Replace "//" with empty strings.
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash.
  );
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('p-10'))
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', (0, _prefixVars.default)('mt-0'), (0, _prefixVars.default)('mb-5 '), (0, _prefixVars.default)('bdr'), (0, _prefixVars.default)('bdr-b'), (0, _prefixVars.default)('pb-15'))
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "h6",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }, label), onClose && /*#__PURE__*/React.createElement(_link.default, {
    type: "btn",
    variant: "close",
    label: (0, _i18n.__)('Close', 'atrc-prefix-atrc'),
    onClick: onClose
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0')),
    type: "bootstrap",
    icon: _bs.BsX,
    size: "14"
  }))), /*#__PURE__*/React.createElement(_components.DateTimePicker, {
    startOfWeek: (0, _date.getSettings)().l10n.startOfWeek,
    __nextRemoveHelpButton: true,
    __nextRemoveResetButton: true,
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  }));
}
function AtrcControlDateTimePicker(_ref3) {
  var _ref3$label = _ref3.label,
    label = _ref3$label === void 0 ? (0, _i18n.__)('Date', 'atrc-prefix-atrc') : _ref3$label,
    _ref3$contentLabel = _ref3.contentLabel,
    contentLabel = _ref3$contentLabel === void 0 ? (0, _i18n.__)('Date', 'atrc-prefix-atrc') : _ref3$contentLabel,
    date = _ref3.date,
    _onChange = _ref3.onChange;
  var rowref = (0, _element.useRef)();
  return /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('date-time-picker'), 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', (0, _prefixVars.default)('mt-10'))
  }, /*#__PURE__*/React.createElement(_span.default, null, label), /*#__PURE__*/React.createElement(_dropdown.default, {
    width: "280px",
    popoverProps: {
      rowref: rowref,
      placement: 'bottom left'
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
  }));
}
var _default = exports.default = AtrcControlDateTimePicker;
//# sourceMappingURL=index.js.map