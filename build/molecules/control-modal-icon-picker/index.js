"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _modalToggle = _interopRequireDefault(require("../modal-toggle"));
var _buttonGroup = _interopRequireDefault(require("../button-group"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _search = _interopRequireDefault(require("../search"));
var _wireframe = require("./../../templates/wireframe");
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var ReactIconsAllFA = _interopRequireWildcard(require("react-icons/fa"));
var WpIconsAllF = _interopRequireWildcard(require("@wordpress/icons"));
var _excluded = ["children", "custom", "lib", "label", "value", "onChange", "closeOnIconSelect", "modalProps"];
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Prefix*/
/* Icons Library === Important */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getIcon = function getIcon(value) {
  if (!value) {
    return null;
  }
  if (ReactIconsAllFA[value]) {
    return ReactIconsAllFA[value];
  }
  if (WpIconsAllF[value]) {
    return WpIconsAllF[value];
  }
  return null;
};

/*Local*/
var AtrcControlIconPicker = function AtrcControlIconPicker(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    custom = props.custom,
    _props$lib = props.lib,
    lib = _props$lib === void 0 ? {
      allowed: ['wp', 'fa'],
      selected: []
    } : _props$lib,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$closeOnIconSel = props.closeOnIconSelect,
    closeOnIconSelect = _props$closeOnIconSel === void 0 ? false : _props$closeOnIconSel,
    _props$modalProps = props.modalProps,
    modalProps = _props$modalProps === void 0 ? {} : _props$modalProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _lib$allowed = lib.allowed,
    allowed = _lib$allowed === void 0 ? [] : _lib$allowed,
    _lib$selected = lib.selected,
    selected = _lib$selected === void 0 ? [] : _lib$selected;
  var _useState = (0, _element.useState)('all'),
    _useState2 = _slicedToArray(_useState, 2),
    iconType = _useState2[0],
    setIconType = _useState2[1];
  var _useState3 = (0, _element.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var foundIcons = (0, _element.useMemo)(function () {
    if (!query) {
      return {
        wp: WpIconsAllF,
        fa: ReactIconsAllFA
      };
    }
    return {
      wp: (0, _lodash.reduce)(WpIconsAllF, function (accumulator, currentValue, currentKey) {
        if (currentKey.toLowerCase().includes(query.toLowerCase())) {
          accumulator[currentKey] = currentValue;
        }
        return accumulator;
      }, {}),
      fa: (0, _lodash.reduce)(ReactIconsAllFA, function (accumulator, currentValue, currentKey) {
        if (currentKey.toLowerCase().includes(query.toLowerCase())) {
          accumulator[currentKey] = currentValue;
        }
        return accumulator;
      }, {})
    };
  }, [query]);
  var allowedLib = (0, _element.useMemo)(function () {
    return allowed;
  }, [allowed]);
  var selectedLibIcons = (0, _element.useMemo)(function () {
    return selected;
  }, [allowed]);
  return /*#__PURE__*/React.createElement(_modalToggle.default, _extends({
    renderToggle: function renderToggle(args) {
      if (children) {
        return children(args);
      }
      var isOpen = args.isOpen,
        onToggle = args.onToggle;
      return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(_label.default, null, label), /*#__PURE__*/React.createElement(_tooltip.default, {
        text: (0, _i18n.__)('Select icon', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_button.default, {
        "aria-expanded": isOpen,
        variant: "icon",
        className: (0, _prefixVars.default)('m-5'),
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "wp",
        icon: WpIconsAllF.moreVertical
      }))));
    },
    renderContent: function renderContent(_ref) {
      var onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_wireframe.AtrcWireFrameSidebarContent, {
        wrapProps: {
          tag: 'section'
        },
        rowProps: {
          variant: 'm-0'
        },
        renderSidebar: /*#__PURE__*/React.createElement(_buttonGroup.default, {
          variant: "vertical"
        }, /*#__PURE__*/React.createElement(_tooltip.default, {
          text: (0, _i18n.__)('All icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(_button.default, {
          isActive: 'all' === iconType,
          onClick: function onClick() {
            return setIconType('all');
          }
        }, (0, _i18n.__)('All icons', 'atrc-prefix-atrc'))), selectedLibIcons && selectedLibIcons.length ? /*#__PURE__*/React.createElement(_tooltip.default, {
          text: (0, _i18n.__)('Available icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(_button.default, {
          isActive: 'selectedIcon' === iconType,
          onClick: function onClick() {
            return setIconType('selectedIcon');
          }
        }, (0, _i18n.__)('Available icons', 'atrc-prefix-atrc'))) : /*#__PURE__*/React.createElement(React.Fragment, null, allowedLib.includes('wp') && /*#__PURE__*/React.createElement(_tooltip.default, {
          text: (0, _i18n.__)('WordPress icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(_button.default, {
          isActive: 'wp' === iconType,
          onClick: function onClick() {
            return setIconType('wp');
          }
        }, (0, _i18n.__)('WordPress', 'atrc-prefix-atrc'))), allowedLib.includes('fa') && /*#__PURE__*/React.createElement(_tooltip.default, {
          text: (0, _i18n.__)('Font Awesome icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(_button.default, {
          isActive: 'fa' === iconType,
          onClick: function onClick() {
            return setIconType('fa');
          }
        }, (0, _i18n.__)('Font Awesome', 'atrc-prefix-atrc')))), custom && (0, _lodash.isArray)(custom) && custom.length ? /*#__PURE__*/React.createElement(_tooltip.default, {
          text: (0, _i18n.__)('Custom icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(_button.default, {
          isActive: 'custom' === iconType,
          onClick: function onClick() {
            return setIconType('custom');
          }
        }, (0, _i18n.__)('Custom icons', 'atrc-prefix-atrc'))) : null),
        renderContent: /*#__PURE__*/React.createElement(_wireframe.AtrcWireFrameHeaderContentFooter, {
          renderHeader: /*#__PURE__*/React.createElement(_search.default, {
            type: "keyDown",
            buttonProps: {
              variant: 'primary'
            },
            doSearch: function doSearch(input) {
              return setQuery(input);
            }
          }),
          renderContent: /*#__PURE__*/React.createElement(_wrap.default, {
            className: (0, _classnames.default)((0, _prefixVars.default)('modal-icon-picker-cont'))
          }, selectedLibIcons && selectedLibIcons.length ? /*#__PURE__*/React.createElement(React.Fragment, null, 'all' === iconType || 'selectedIcon' === iconType ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, {
            className: (0, _classnames.default)('at-m', 'at-blk')
          }, (0, _i18n.__)('Available icons', 'atrc-prefix-atrc')), (0, _lodash.map)(selectedLibIcons, function (icon, key) {
            var gotIcon = getIcon(icon);
            if (typeof gotIcon === 'function') {
              return /*#__PURE__*/React.createElement(_button.default, {
                className: (0, _classnames.default)((0, _prefixVars.default)('icon-ri')),
                variant: "icon-picker",
                isActive: value.includes(icon),
                onClick: function onClick() {
                  onChange(icon);
                  if (closeOnIconSelect) {
                    onToggle();
                  }
                },
                key: key
              }, gotIcon());
            }
            return /*#__PURE__*/React.createElement(_button.default, {
              className: (0, _classnames.default)((0, _prefixVars.default)('icon-wp')),
              variant: "icon-picker",
              isActive: value.includes(icon),
              onClick: function onClick() {
                onChange(icon);
                if (closeOnIconSelect) {
                  onToggle();
                }
              }
            }, /*#__PURE__*/React.createElement(_icon.default, {
              className: (0, _classnames.default)('at-w', 'at-h'),
              type: "wp",
              icon: gotIcon,
              size: 13
            }));
          })) : null) : /*#__PURE__*/React.createElement(React.Fragment, null, allowedLib.includes('wp') && !(0, _lodash.isEmpty)(foundIcons.wp) && ('all' === iconType || 'wp' === iconType) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, {
            className: (0, _classnames.default)('at-m', 'at-blk')
          }, (0, _i18n.__)('WordPress', 'atrc-prefix-atrc')), (0, _lodash.map)(foundIcons.wp, function (icon, key) {
            if ('Icon' !== key) {
              return /*#__PURE__*/React.createElement(_button.default, {
                className: (0, _classnames.default)('at-w', 'at-h', 'at-m', 'at-p', (0, _prefixVars.default)('icon-wp')),
                variant: "icon-picker",
                isActive: value.includes(key),
                onClick: function onClick() {
                  onChange(key);
                  if (closeOnIconSelect) {
                    onToggle();
                  }
                },
                key: key
              }, /*#__PURE__*/React.createElement(_icon.default, {
                className: (0, _classnames.default)('at-w', 'at-h'),
                type: "wp",
                icon: icon,
                size: 13
              }));
            }
            return null;
          })) : null, allowedLib.includes('fa') && !(0, _lodash.isEmpty)(foundIcons.fa) && ('all' === iconType || 'fa' === iconType) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, {
            className: (0, _classnames.default)('at-m', 'at-blk')
          }, (0, _i18n.__)('Font Awesome', 'atrc-prefix-atrc')), (0, _lodash.map)(foundIcons.fa, function (icon, key) {
            if (typeof icon === 'function') {
              return /*#__PURE__*/React.createElement(_button.default, {
                className: (0, _classnames.default)('at-w', 'at-h', 'at-m', 'at-p', (0, _prefixVars.default)('icon-ri')),
                variant: "icon-picker",
                isActive: value.includes(key),
                onClick: function onClick() {
                  onChange(key);
                  if (closeOnIconSelect) {
                    onToggle();
                  }
                },
                key: key
              }, icon());
            }
            return null;
          })) : null), (0, _lodash.isArray)(custom) && custom.length && ('all' === iconType || 'custom' === iconType) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_label.default, {
            className: (0, _classnames.default)('at-m', 'at-blk')
          }, (0, _i18n.__)('Custom icons', 'atrc-prefix-atrc')), (0, _lodash.map)(custom, function (icon, key) {
            return /*#__PURE__*/React.createElement(_button.default, {
              className: (0, _classnames.default)('at-w', 'at-h', 'at-m', 'at-p', (0, _prefixVars.default)('icon-cstm')),
              variant: "icon-picker",
              isActive: value.includes(icon.value),
              onClick: function onClick() {
                onChange(icon.value);
                if (closeOnIconSelect) {
                  onToggle();
                }
              },
              key: key
            }, /*#__PURE__*/React.createElement(_icon.default, {
              type: "url",
              iconUrl: icon.url
            }));
          })) : null),
          allowHeaderRow: false,
          allowHeaderCol: false,
          allowContentRow: false,
          allowContentCol: false
        }),
        contentProps: {
          tag: 'div',
          contentCol: 'at-col-md-10'
        },
        sidebarProps: {
          sidebarCol: 'at-col-md-2'
        }
      });
    },
    modalProps: modalProps
  }, defaultProps));
};
var _default = exports.default = AtrcControlIconPicker;
//# sourceMappingURL=index.js.map