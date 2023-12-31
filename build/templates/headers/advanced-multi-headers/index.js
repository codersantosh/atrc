"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../../prefix-vars"));
var _header = _interopRequireDefault(require("../../../organisms/header"));
var _wrap = _interopRequireDefault(require("../../../atoms/wrap"));
var _select = _interopRequireDefault(require("../../../atoms/select"));
var _toggle = _interopRequireDefault(require("../../../atoms/toggle"));
var _button = _interopRequireDefault(require("../../../atoms/button"));
var _icon = _interopRequireDefault(require("../../../atoms/icon"));
var _resetButtonIcon = _interopRequireDefault(require("../../../atoms/reset-button-icon"));
var _word = _interopRequireDefault(require("../../../atoms/word"));
var _link = _interopRequireDefault(require("../../../atoms/link"));
var _spinner = _interopRequireDefault(require("../../../atoms/spinner"));
var _hr = _interopRequireDefault(require("../../../atoms/hr"));
var _checkbox = _interopRequireDefault(require("../../../atoms/checkbox"));
var _base = _interopRequireDefault(require("./../../../molecules/base"));
var _buttonGroup = _interopRequireDefault(require("./../../../molecules/button-group"));
var _pagination = _interopRequireDefault(require("./../../../molecules/pagination"));
var _search = _interopRequireDefault(require("./../../../molecules/search"));
var _tooltip = _interopRequireDefault(require("./../../../molecules/tooltip"));
var _bs = require("react-icons/bs");
var _excluded = ["place", "type"],
  _excluded2 = ["topHeader", "midHeader", "bottomHeader"],
  _excluded3 = ["allowHeader"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var MapElements = function MapElements(_ref) {
  var place = _ref.place,
    elements = _ref.elements,
    atrcProps = _ref.atrcProps;
  var ml;
  return elements.map(function (element, iDx) {
    ml = '';
    if (iDx) {
      ml = 'ml-15';
    }
    if ('word' === element) {
      return /*#__PURE__*/React.createElement(_word.default, _extends({
        key: "me-".concat(iDx),
        className: (0, _classnames.default)((0, _prefixVars.default)('m-0'), ml ? (0, _prefixVars.default)(ml) : '')
      }, atrcProps.word));
    }
    if ('button' === element) {
      return /*#__PURE__*/React.createElement(_tooltip.default, _extends({
        key: "me-".concat(iDx)
      }, atrcProps.button.tooltipProps), atrcProps.button.isPending ? /*#__PURE__*/React.createElement(_spinner.default, {
        variant: "inline"
      }) : null, /*#__PURE__*/React.createElement(_button.default, atrcProps.button.buttonProps));
    }
    if ('title' === element) {
      return /*#__PURE__*/React.createElement(_word.default, _extends({
        key: "me-".concat(iDx),
        className: (0, _classnames.default)((0, _prefixVars.default)('m-0'), 'at-m', ml ? (0, _prefixVars.default)(ml) : '')
      }, atrcProps.title));
    }
    if ('addNew' === element) {
      return /*#__PURE__*/React.createElement(_link.default, _extends({
        key: "me-".concat(iDx),
        type: "router-link",
        variant: "primary",
        className: (0, _classnames.default)('at-m')
      }, atrcProps.addNew));
    }
    if ('toggleFilter' === element) {
      return /*#__PURE__*/React.createElement(_toggle.default, _extends({
        key: "me-".concat(iDx),
        className: (0, _classnames.default)(ml ? (0, _prefixVars.default)(ml) : '')
      }, atrcProps.toggleFilter));
    }
    if ('filterButtonGroupWithReset' === element || 'filterButtonGroup' === element) {
      var buttons = 'filterButtonGroupWithReset' === element ? atrcProps.filterButtonGroupWithReset.buttons : atrcProps.filterButtonGroup.buttons;
      return /*#__PURE__*/React.createElement(_buttonGroup.default, {
        key: "me-".concat(iDx),
        className: (0, _classnames.default)(ml ? (0, _prefixVars.default)(ml) : '')
      }, buttons.map(function (buttonProps, btnIndex) {
        return /*#__PURE__*/React.createElement(_button.default, _extends({
          key: "btn-".concat(btnIndex),
          className: (0, _classnames.default)('at-p')
        }, buttonProps));
      }), 'filterButtonGroupWithReset' === element ? /*#__PURE__*/React.createElement(_button.default, {
        className: (0, _classnames.default)('at-m', 'at-p'),
        variant: "reset",
        onClick: atrcProps.filterButtonGroupWithReset.onReset
      }, /*#__PURE__*/React.createElement(_icon.default, {
        className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
        type: "bootstrap",
        icon: _bs.BsGripVertical
      }), atrcProps.filterButtonGroupWithReset.resetLabel) : null);
    }
    if ('filterSelectGroup' === element) {
      return /*#__PURE__*/React.createElement(_wrap.default, {
        key: "me-".concat(iDx),
        className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', ml ? (0, _prefixVars.default)(ml) : '')
      }, atrcProps.filterSelectGroup.selects.map(function (selectProps, slIndex) {
        return /*#__PURE__*/React.createElement(_base.default, {
          key: "sl-".concat(slIndex),
          variant: "select-plain"
        }, /*#__PURE__*/React.createElement(_select.default, _extends({
          allowReset: false
        }, selectProps)));
      }), /*#__PURE__*/React.createElement(_button.default, {
        variant: "primary",
        className: (0, _classnames.default)((0, _prefixVars.default)('ml-15')),
        onClick: atrcProps.filterSelectGroup.onApply
      }, atrcProps.filterSelectGroup.applyLabel));
    }
    if ('search' === element) {
      return /*#__PURE__*/React.createElement(_search.default, _extends({
        key: "me-".concat(iDx)
      }, atrcProps.search, {
        testProps: {
          className: (0, _classnames.default)(ml ? (0, _prefixVars.default)(ml) : 'test')
        },
        buttonProps: {
          variant: 'primary'
        }
      }));
    }
    if ('bulkCheck' === element) {
      return /*#__PURE__*/React.createElement(_wrap.default, {
        key: "me-".concat(iDx),
        className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-gap', (0, _prefixVars.default)('bulk-wrp'), ml ? (0, _prefixVars.default)(ml) : '')
      }, /*#__PURE__*/React.createElement(_checkbox.default, atrcProps.bulkCheck.checkProps), atrcProps.bulkCheck.checkedIds.length > 0 && atrcProps.bulkCheck.actions ? /*#__PURE__*/React.createElement(_buttonGroup.default, {
        className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
      }, atrcProps.bulkCheck.actions.map(function (actionProps, btnIndex) {
        return /*#__PURE__*/React.createElement(_tooltip.default, _extends({
          key: "btn-next-".concat(btnIndex)
        }, actionProps.tooltipProps), /*#__PURE__*/React.createElement(_button.default, _extends({
          variant: "icon",
          className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr-rad', 'at-w', 'at-h')
        }, actionProps.buttonProps), /*#__PURE__*/React.createElement(_icon.default, _extends({
          className: (0, _classnames.default)('at-w', 'at-h')
        }, actionProps.iconProps))));
      })) : null, atrcProps.bulkCheck.checkedIds.length < 1 && atrcProps.bulkCheck.toggleItems ? /*#__PURE__*/React.createElement(_wrap.default, {
        className: (0, _classnames.default)(
        // AtrcPrefix('ml-15'),
        'at-flx', 'at-al-itm-ctr', 'at-gap')
      }, /*#__PURE__*/React.createElement(MapElements, {
        place: place,
        elements: atrcProps.bulkCheck.toggleItems,
        atrcProps: atrcProps
      })) : null);
    }
    if ('order' === element) {
      return /*#__PURE__*/React.createElement(_wrap.default, {
        key: "me-".concat(iDx),
        className: (0, _classnames.default)(ml ? (0, _prefixVars.default)(ml) : '', 'at-flx', 'at-al-itm-ctr', 'at-gap')
      }, /*#__PURE__*/React.createElement(_base.default, {
        variant: "select-plain",
        className: (0, _classnames.default)(ml ? (0, _prefixVars.default)(ml) : '', 'at-flx', 'at-al-itm-ctr')
      }, /*#__PURE__*/React.createElement(_select.default, _extends({
        allowReset: false
      }, atrcProps.order.selectProps))), /*#__PURE__*/React.createElement(_tooltip.default, {
        text: 'asc' === atrcProps.order.order ? (0, _i18n.__)('Click for descending order', 'atrc-prefix-atrc') : (0, _i18n.__)('Click for ascending order', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_button.default, _extends({
        variant: "icon",
        className: (0, _classnames.default)('at-w', 'at-h')
      }, atrcProps.order.buttonProps), /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: 'asc' === atrcProps.order.order ? _bs.BsCaretDownFill : _bs.BsCaretUpFill
      }))));
    }
    if ('refresh' === element) {
      return /*#__PURE__*/React.createElement(_tooltip.default, {
        key: "me-".concat(iDx),
        text: 'asc' === atrcProps.order.order ? (0, _i18n.__)('Click for descending order', 'atrc-prefix-atrc') : (0, _i18n.__)('Click for ascending order', 'atrc-prefix-atrc')
      }, atrcProps.refresh.isPending ? /*#__PURE__*/React.createElement(_spinner.default, {
        variant: "inline"
      }) : /*#__PURE__*/React.createElement(_resetButtonIcon.default, _extends({
        value: "1"
      }, atrcProps.refresh.buttonProps)));
    }
    if ('pagination' === element) {
      return /*#__PURE__*/React.createElement(_pagination.default, _extends({
        key: "me-".concat(iDx),
        className: (0, _classnames.default)(ml ? (0, _prefixVars.default)(ml) : '')
      }, atrcProps.pagination));
    }
    if ('listGrid' === element) {
      return /*#__PURE__*/React.createElement(_tooltip.default, {
        key: "me-".concat(iDx),
        text: atrcProps.listGrid.isList ? (0, _i18n.__)('List layout', 'atrc-prefix-atrc') : (0, _i18n.__)('Grid layout', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_button.default, _extends({
        className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
      }, atrcProps.listGrid.buttonProps), /*#__PURE__*/React.createElement(_icon.default, {
        type: "ri",
        icon: atrcProps.listGrid.isList ? _bs.BsList : _bs.BsFillGrid3X3GapFill
      })));
    }
    if (atrcProps[element]) {
      return atrcProps[element];
    }
    return null;
  });
};
var SingleHeader = function SingleHeader(props) {
  var _props$place = props.place,
    place = _props$place === void 0 ? {} : _props$place,
    _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type,
    atrcProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p')
  }, place.left ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-st')
  }, /*#__PURE__*/React.createElement(MapElements, {
    place: "left",
    elements: place.left,
    atrcProps: atrcProps
  })) : null, place.right ? /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-end')
  }, /*#__PURE__*/React.createElement(MapElements, {
    place: "right",
    elements: place.right,
    atrcProps: atrcProps
  })) : null), 'bottom' !== type ? /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }) : null);
};
var MultiHeaders = function MultiHeaders(props) {
  var _props$topHeader = props.topHeader,
    topHeader = _props$topHeader === void 0 ? null : _props$topHeader,
    _props$midHeader = props.midHeader,
    midHeader = _props$midHeader === void 0 ? null : _props$midHeader,
    _props$bottomHeader = props.bottomHeader,
    bottomHeader = _props$bottomHeader === void 0 ? null : _props$bottomHeader,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(React.Fragment, null, topHeader ? /*#__PURE__*/React.createElement(SingleHeader, _extends({}, defaultProps, {
    place: topHeader,
    type: "top"
  })) : null, midHeader ? /*#__PURE__*/React.createElement(SingleHeader, _extends({}, defaultProps, {
    place: midHeader,
    type: "mid"
  })) : null, bottomHeader ? /*#__PURE__*/React.createElement(SingleHeader, _extends({}, defaultProps, {
    place: bottomHeader,
    type: "bottom"
  })) : null);
};
var AdvancedMultiHeaders = function AdvancedMultiHeaders(props) {
  var _props$allowHeader = props.allowHeader,
    allowHeader = _props$allowHeader === void 0 ? true : _props$allowHeader,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  if (allowHeader) {
    return /*#__PURE__*/React.createElement(_header.default, null, /*#__PURE__*/React.createElement(MultiHeaders, defaultProps));
  }
  return /*#__PURE__*/React.createElement(MultiHeaders, defaultProps);
};
var _default = exports.default = AdvancedMultiHeaders;
//# sourceMappingURL=index.js.map