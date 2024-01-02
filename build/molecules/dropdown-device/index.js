function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/** WordPress*/
import { useState, useEffect, useRef } from '@wordpress/element';
import { MenuGroup, MenuItem } from '@wordpress/components';

/** Library*/
import { find } from 'lodash';
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcWord from '../../atoms/word';
import AtrcDropdown from '../dropdown';
import AtrcTooltip from '../tooltip';
import AtrcUseInstanceId from '../../utils/use-instance-id';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export function AtrcDropdownDevice(_ref) {
  var _selectedTab$name;
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    className = _ref.className,
    children = _ref.children,
    tabs = _ref.tabs,
    initialTabName = _ref.initialTabName,
    onSelect = _ref.onSelect,
    _ref$wrapProps = _ref.wrapProps,
    wrapProps = _ref$wrapProps === void 0 ? {} : _ref$wrapProps;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var rowref = useRef();
  var instanceId = AtrcUseInstanceId(AtrcDropdownDevice, 'atrc-dropdown-device');
  var handleTabSelection = function handleTabSelection(tabName) {
    var nSelectedTab = find(tabs, {
      name: tabName
    });
    setSelectedTab(nSelectedTab);
    onSelect === null || onSelect === void 0 || onSelect(tabName);
  };
  var selectedId = "".concat(instanceId, "-").concat((_selectedTab$name = selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.name) !== null && _selectedTab$name !== void 0 ? _selectedTab$name : 'none');
  useEffect(function () {
    if (!(selectedTab !== null && selectedTab !== void 0 && selectedTab.name) && tabs.length > 0) {
      handleTabSelection(initialTabName || tabs[0].name);
    }
  }, [tabs, selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.name, initialTabName]);
  if (!selectedTab) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, wrapProps, {
    className: classnames(AtrcPrefix('dropdown-device'), className, wrapProps.className ? wrapProps.className : '')
  }), label && /*#__PURE__*/React.createElement(AtrcLabel, {
    variant: "dropdown-device-lbl"
  }, label), /*#__PURE__*/React.createElement(AtrcDropdown, {
    popoverProps: {
      rowref: rowref
    },
    focusOnMount: true,
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "devices",
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: selectedTab.info
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: selectedTab.iconType ? selectedTab.iconType : 'wp',
        icon: selectedTab.icon,
        size: selectedTab.iconSize || 16
      })));
    },
    renderContent: function renderContent(props) {
      return /*#__PURE__*/React.createElement(MenuGroup, {
        className: classnames(AtrcPrefix('dropdown-device-cont'))
      }, tabs === null || tabs === void 0 ? void 0 : tabs.flatMap(function (control) {
        if (control.on) {
          return /*#__PURE__*/React.createElement(MenuItem, {
            onClick: function onClick(event) {
              event.stopPropagation();
              setSelectedTab(control);
              props.onClose();
            },
            id: "".concat(instanceId, "-").concat(control.name)
          }, /*#__PURE__*/React.createElement(AtrcTooltip, {
            className: "at-flx at-al-itm-ctr at-gap",
            text: control.info
          }, /*#__PURE__*/React.createElement(AtrcIcon, {
            type: control.iconType ? control.iconType : 'wp',
            icon: control.icon,
            size: control.iconSize || 16
          }), /*#__PURE__*/React.createElement(AtrcWord, {
            tag: "span"
          }, control.title)));
        }
        return null;
      }));
    }
  }), selectedTab && /*#__PURE__*/React.createElement(AtrcWrap, {
    key: selectedTab.name,
    "aria-labelledby": selectedId,
    role: "tabpanel",
    id: "".concat(selectedId, "-view")
  }, children(selectedTab)));
}
export default AtrcDropdownDevice;
//# sourceMappingURL=index.js.map