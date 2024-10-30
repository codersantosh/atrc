function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["allIcons", "isMulti", "children", "label", "value", "options", "onChange", "closeOnIconSelect", "modalProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';

/*
value object or array of object = {
    id:'',
    svg:''
}
[
    {
        id:'',
        svg:''
    }
    {
        id:'',
        svg:''
    }
]
options = [
			{
				label: __('WordPress icons', 'atrc-prefix-atrc'),
				id: 'wp',
				icons: [
					{
						id: '',
						svg: '',
					},
				],
			},
			{
				label: __('Fontawesome icons', 'atrc-prefix-atrc'),
				id: 'fa',
				icons: [
					{
						id: '',
						svg: '',
					},
				],
			},
		]
*/
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { isArray, isObject, map } from 'lodash';
import { BsEyedropper } from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon, { AtrcIconSvg } from '../../atoms/icon';
import AtrcText from '../../atoms/text';

/* Molecules */
import AtrcModalToggle from '../../molecules/modal-toggle';
import AtrcButtonGroup from '../../molecules/button-group';
import AtrcSearch from '../../molecules/search';

/* Wireframes */
import AtrcWireFrameSidebarContent from '../../wireframe/sidebar-content';
import AtrcWireFrameHeaderContentFooter from '../../wireframe/header-content-footer';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
var IconPickerToggle = function IconPickerToggle(_ref) {
  var value = _ref.value,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    onToggle = _ref.onToggle,
    onRemove = _ref.onRemove;
  if (isArray(value) && value.length) {
    //after icon is selected
    return value.map(function (valObj) {
      return /*#__PURE__*/React.createElement(AtrcButtonGroup, {
        className: classnames('at-bdr', 'at-p', 'at-al-itm-strh')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        className: classnames(AtrcPrefix('btn-icon-selected'), 'at-h', 'at-w', 'at-p', 'at-m'),
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
        className: "at-svg at-w at-h",
        svg: valObj.svg
      })), /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "danger",
        onClick: function onClick() {
          return onRemove(valObj.id);
        }
      }, __('Remove icon', 'atrc-prefix-atrc')));
    });
  }
  return (
    /*#__PURE__*/
    //icon picker placholder
    React.createElement(AtrcButton, {
      className: classnames(AtrcPrefix('btn-icon-selector'), 'at-h', 'at-w', 'at-p', 'at-m'),
      variant: "outline-light",
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: "bootstrap",
      icon: BsEyedropper
    }))
  );
};
var AtrcControlIconPicker = function AtrcControlIconPicker(props) {
  var _props$allIcons = props.allIcons,
    allIcons = _props$allIcons === void 0 ? {
      on: true,
      label: __('All icons', 'atrc-prefix-atrc')
    } : _props$allIcons,
    _props$isMulti = props.isMulti,
    isMulti = _props$isMulti === void 0 ? false : _props$isMulti,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    value = props.value,
    options = props.options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$closeOnIconSel = props.closeOnIconSelect,
    closeOnIconSelect = _props$closeOnIconSel === void 0 ? true : _props$closeOnIconSel,
    _props$modalProps = props.modalProps,
    modalProps = _props$modalProps === void 0 ? {} : _props$modalProps,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState('all'),
    _useState2 = _slicedToArray(_useState, 2),
    iconType = _useState2[0],
    setIconType = _useState2[1];

  /* for search */
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var foundIcons = useMemo(function () {
    if (!query) {
      return options;
    }
    var lowerCaseQuery = query.toLowerCase();
    return options.map(function (group) {
      return _objectSpread(_objectSpread({}, group), {}, {
        icons: group.icons.filter(function (icon) {
          return icon.id.toLowerCase().includes(lowerCaseQuery);
        })
      });
    }).filter(function (group) {
      return group.icons.length > 0;
    });
  }, [query]);
  var selectedIcons = useMemo(function () {
    var selectedIdsVal = {
      value: null,
      ids: []
    };
    if (!value) {
      return selectedIdsVal;
    }
    if (isArray(value) && value.length) {
      var selectedIDs = value.map(function (valObj) {
        return valObj.id;
      });
      selectedIdsVal.value = _toConsumableArray(value);
      selectedIdsVal.ids = selectedIDs;
    } else if (isObject(value) && value.id) {
      selectedIdsVal.value = [_objectSpread({}, value)];
      selectedIdsVal.ids = [value.id];
    }
    return selectedIdsVal;
  }, [value]);
  return /*#__PURE__*/React.createElement(AtrcModalToggle, _extends({
    renderToggle: function renderToggle(args) {
      if (children) {
        return children(args);
      }
      var isOpen = args.isOpen,
        onToggle = args.onToggle;
      return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(AtrcLabel, null, label), /*#__PURE__*/React.createElement(AtrcWrap, {
        className: classnames(AtrcPrefix('modal-icon-picker-preview'), 'at-flx', 'at-al-itm-ctr', 'at-gap'),
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(IconPickerToggle, {
        label: label,
        value: selectedIcons.value,
        onToggle: onToggle,
        onRemove: function onRemove(idToRemove) {
          if (isMulti) {
            if (isArray(value) && value.length) {
              var newValue = value.filter(function (obj) {
                return obj.id !== idToRemove;
              });
              onChange(newValue);
            } else {
              onChange(null);
            }
          } else {
            onChange(null);
          }
        }
      })));
    },
    renderContent: function renderContent(_ref2) {
      var onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWireFrameSidebarContent, {
        wrapProps: {
          tag: 'section'
        },
        rowProps: {
          variant: 'm-0'
        },
        renderSidebar: /*#__PURE__*/React.createElement(AtrcButtonGroup, {
          variant: "vertical"
        }, allIcons && allIcons.on ? /*#__PURE__*/React.createElement(AtrcButton, {
          isActive: 'all' === iconType,
          onClick: function onClick() {
            return setIconType('all');
          }
        }, allIcons.label || __('All icons', 'atrc-prefix-atrc')) : null, foundIcons && foundIcons.map(function (opt) {
          return /*#__PURE__*/React.createElement(AtrcButton, {
            isActive: opt.id === iconType,
            onClick: function onClick() {
              return setIconType(opt.id);
            }
          }, opt.label);
        })),
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
          }, !foundIcons ? /*#__PURE__*/React.createElement(AtrcText, null, __('No icons found!', 'atrc-prefix-atrc')) : foundIcons.map(function (opt) {
            return /*#__PURE__*/React.createElement(React.Fragment, null, 'all' === iconType || opt.id === iconType ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, {
              className: classnames('at-m', 'at-blk')
            }, opt.label), map(opt.icons, function (icon) {
              return /*#__PURE__*/React.createElement(AtrcButton, {
                className: "at-h at-w at-p at-m",
                variant: "secondary",
                isActive: selectedIcons.ids.includes(icon.id),
                onClick: function onClick() {
                  if (isMulti) {
                    if (isArray(value) && value.length) {
                      var clonedValue = _toConsumableArray(value);
                      clonedValue.push(icon);
                      onChange(clonedValue);
                    } else {
                      onChange([icon]);
                    }
                  } else {
                    onChange(icon);
                  }
                  if (closeOnIconSelect) {
                    onToggle();
                  }
                }
              }, /*#__PURE__*/React.createElement(AtrcIconSvg, {
                className: "at-svg at-w at-h",
                svg: icon.svg
              }));
            })) : null);
          })),
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