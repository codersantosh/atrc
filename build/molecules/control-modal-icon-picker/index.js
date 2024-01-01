var _excluded = ["children", "custom", "lib", "label", "value", "onChange", "closeOnIconSelect", "modalProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isEmpty, map, reduce, isArray } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcModalToggle from '../modal-toggle';
import AtrcButtonGroup from '../button-group';
import AtrcTooltip from '../tooltip';
import AtrcSearch from '../search';
import { AtrcWireFrameSidebarContent, AtrcWireFrameHeaderContentFooter } from './../../templates/wireframe';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/* Icons Library === Important */
import * as ReactIconsAllFA from 'react-icons/fa';
import * as WpIconsAllF from '@wordpress/icons';
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
  var _useState = useState('all'),
    _useState2 = _slicedToArray(_useState, 2),
    iconType = _useState2[0],
    setIconType = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var foundIcons = useMemo(function () {
    if (!query) {
      return {
        wp: WpIconsAllF,
        fa: ReactIconsAllFA
      };
    }
    return {
      wp: reduce(WpIconsAllF, function (accumulator, currentValue, currentKey) {
        if (currentKey.toLowerCase().includes(query.toLowerCase())) {
          accumulator[currentKey] = currentValue;
        }
        return accumulator;
      }, {}),
      fa: reduce(ReactIconsAllFA, function (accumulator, currentValue, currentKey) {
        if (currentKey.toLowerCase().includes(query.toLowerCase())) {
          accumulator[currentKey] = currentValue;
        }
        return accumulator;
      }, {})
    };
  }, [query]);
  var allowedLib = useMemo(function () {
    return allowed;
  }, [allowed]);
  var selectedLibIcons = useMemo(function () {
    return selected;
  }, [allowed]);
  return /*#__PURE__*/React.createElement(AtrcModalToggle, _extends({
    renderToggle: function renderToggle(args) {
      if (children) {
        return children(args);
      }
      var isOpen = args.isOpen,
        onToggle = args.onToggle;
      return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(AtrcLabel, null, label), /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: __('Select icon', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        "aria-expanded": isOpen,
        variant: "icon",
        className: AtrcPrefix('m-5'),
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "wp",
        icon: WpIconsAllF.moreVertical
      }))));
    },
    renderContent: function renderContent(_ref) {
      var onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWireFrameSidebarContent, {
        wrapProps: {
          tag: 'section'
        },
        rowProps: {
          variant: 'm-0'
        },
        renderSidebar: /*#__PURE__*/React.createElement(AtrcButtonGroup, {
          variant: "vertical"
        }, /*#__PURE__*/React.createElement(AtrcTooltip, {
          text: __('All icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(AtrcButton, {
          isActive: 'all' === iconType,
          onClick: function onClick() {
            return setIconType('all');
          }
        }, __('All icons', 'atrc-prefix-atrc'))), selectedLibIcons && selectedLibIcons.length ? /*#__PURE__*/React.createElement(AtrcTooltip, {
          text: __('Available icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(AtrcButton, {
          isActive: 'selectedIcon' === iconType,
          onClick: function onClick() {
            return setIconType('selectedIcon');
          }
        }, __('Available icons', 'atrc-prefix-atrc'))) : /*#__PURE__*/React.createElement(React.Fragment, null, allowedLib.includes('wp') && /*#__PURE__*/React.createElement(AtrcTooltip, {
          text: __('WordPress icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(AtrcButton, {
          isActive: 'wp' === iconType,
          onClick: function onClick() {
            return setIconType('wp');
          }
        }, __('WordPress', 'atrc-prefix-atrc'))), allowedLib.includes('fa') && /*#__PURE__*/React.createElement(AtrcTooltip, {
          text: __('Font Awesome icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(AtrcButton, {
          isActive: 'fa' === iconType,
          onClick: function onClick() {
            return setIconType('fa');
          }
        }, __('Font Awesome', 'atrc-prefix-atrc')))), custom && isArray(custom) && custom.length ? /*#__PURE__*/React.createElement(AtrcTooltip, {
          text: __('Custom icons', 'atrc-prefix-atrc')
        }, /*#__PURE__*/React.createElement(AtrcButton, {
          isActive: 'custom' === iconType,
          onClick: function onClick() {
            return setIconType('custom');
          }
        }, __('Custom icons', 'atrc-prefix-atrc'))) : null),
        renderContent: /*#__PURE__*/React.createElement(AtrcWireFrameHeaderContentFooter, {
          renderHeader: /*#__PURE__*/React.createElement(AtrcSearch, {
            type: "keyDown",
            buttonProps: {
              variant: 'primary'
            },
            doSearch: function doSearch(input) {
              return setQuery(input);
            }
          }),
          renderContent: /*#__PURE__*/React.createElement(AtrcWrap, {
            className: classnames(AtrcPrefix('modal-icon-picker-cont'))
          }, selectedLibIcons && selectedLibIcons.length ? /*#__PURE__*/React.createElement(React.Fragment, null, 'all' === iconType || 'selectedIcon' === iconType ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, {
            className: classnames('at-m', 'at-blk')
          }, __('Available icons', 'atrc-prefix-atrc')), map(selectedLibIcons, function (icon, key) {
            var gotIcon = getIcon(icon);
            if (typeof gotIcon === 'function') {
              return /*#__PURE__*/React.createElement(AtrcButton, {
                className: classnames(AtrcPrefix('icon-ri')),
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
            return /*#__PURE__*/React.createElement(AtrcButton, {
              className: classnames(AtrcPrefix('icon-wp')),
              variant: "icon-picker",
              isActive: value.includes(icon),
              onClick: function onClick() {
                onChange(icon);
                if (closeOnIconSelect) {
                  onToggle();
                }
              }
            }, /*#__PURE__*/React.createElement(AtrcIcon, {
              className: classnames('at-w', 'at-h'),
              type: "wp",
              icon: gotIcon,
              size: 13
            }));
          })) : null) : /*#__PURE__*/React.createElement(React.Fragment, null, allowedLib.includes('wp') && !isEmpty(foundIcons.wp) && ('all' === iconType || 'wp' === iconType) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, {
            className: classnames('at-m', 'at-blk')
          }, __('WordPress', 'atrc-prefix-atrc')), map(foundIcons.wp, function (icon, key) {
            if ('Icon' !== key) {
              return /*#__PURE__*/React.createElement(AtrcButton, {
                className: classnames('at-w', 'at-h', 'at-m', 'at-p', AtrcPrefix('icon-wp')),
                variant: "icon-picker",
                isActive: value.includes(key),
                onClick: function onClick() {
                  onChange(key);
                  if (closeOnIconSelect) {
                    onToggle();
                  }
                },
                key: key
              }, /*#__PURE__*/React.createElement(AtrcIcon, {
                className: classnames('at-w', 'at-h'),
                type: "wp",
                icon: icon,
                size: 13
              }));
            }
            return null;
          })) : null, allowedLib.includes('fa') && !isEmpty(foundIcons.fa) && ('all' === iconType || 'fa' === iconType) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, {
            className: classnames('at-m', 'at-blk')
          }, __('Font Awesome', 'atrc-prefix-atrc')), map(foundIcons.fa, function (icon, key) {
            if (typeof icon === 'function') {
              return /*#__PURE__*/React.createElement(AtrcButton, {
                className: classnames('at-w', 'at-h', 'at-m', 'at-p', AtrcPrefix('icon-ri')),
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
          })) : null), isArray(custom) && custom.length && ('all' === iconType || 'custom' === iconType) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, {
            className: classnames('at-m', 'at-blk')
          }, __('Custom icons', 'atrc-prefix-atrc')), map(custom, function (icon, key) {
            return /*#__PURE__*/React.createElement(AtrcButton, {
              className: classnames('at-w', 'at-h', 'at-m', 'at-p', AtrcPrefix('icon-cstm')),
              variant: "icon-picker",
              isActive: value.includes(icon.value),
              onClick: function onClick() {
                onChange(icon.value);
                if (closeOnIconSelect) {
                  onToggle();
                }
              },
              key: key
            }, /*#__PURE__*/React.createElement(AtrcIcon, {
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
export default AtrcControlIconPicker;
//# sourceMappingURL=index.js.map