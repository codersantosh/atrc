function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/** WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useMemo } from '@wordpress/element';
import { MenuGroup, MenuItem } from '@wordpress/components';
import { moreVertical, plus, chevronDown, chevronUp, reset, check } from '@wordpress/icons';
import { speak } from '@wordpress/a11y';

/** Library*/
import classnames from 'classnames';
import { map, forEach, sortBy } from 'lodash';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import AtrcSpan from '../../atoms/span';
import AtrcNotice from '../notice';
import AtrcDropdown from '../dropdown';
import AtrcTooltip from '../tooltip';
import AtrcTabPanel from '../tab-panel';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import AtrcUseInstanceId from '../../utils/use-instance-id';
import AtrcUseStateCallback from './../../utils/use-state-callback';

/*Local Components*/
export function AtrcPanelTools(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$help = props.help,
    help = _props$help === void 0 ? '' : _props$help,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$tools = props.tools,
    tools = _props$tools === void 0 ? [] : _props$tools,
    _props$resetAll = props.resetAll,
    resetAll = _props$resetAll === void 0 ? function () {} : _props$resetAll,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$allowTabs = props.allowTabs,
    allowTabs = _props$allowTabs === void 0 ? false : _props$allowTabs,
    _props$isRadio = props.isRadio,
    isRadio = _props$isRadio === void 0 ? false : _props$isRadio,
    _props$tolsBodyProps = props.tolsBodyProps,
    tolsBodyProps = _props$tolsBodyProps === void 0 ? {} : _props$tolsBodyProps;
  var localAllowTabs = useMemo(function () {
    if (!allowTabs) {
      return allowTabs;
    }
    if (tools.length < 2) {
      return false;
    }
    return allowTabs;
  }, [allowTabs, tools]);
  var _AtrcUseStateCallback = AtrcUseStateCallback({
      activeItems: null,
      tabs: [],
      showChildren: false
    }),
    _AtrcUseStateCallback2 = _slicedToArray(_AtrcUseStateCallback, 2),
    panelToolsState = _AtrcUseStateCallback2[0],
    setPanelToolsState = _AtrcUseStateCallback2[1];
  var rowref = useRef();
  var instanceId = AtrcUseInstanceId(AtrcPanelTools, 'atrc-pnl-tools');
  var getTabs = function getTabs(newActiveItems) {
    var newTabs = [];
    forEach(tools, function (item) {
      if (newActiveItems.includes(item.name)) {
        newTabs.push({
          name: item.name,
          title: item.title,
          className: item.className ? item.className : null,
          icon: item.icon && (!item.iconType || item.iconType && 'wp' === item.iconType) ? item.icon : null
        });
      }
    });
    return newTabs;
  };
  var orderTools = useMemo(function () {
    if (!tools) {
      return false;
    }
    return map(tools, 'name');
  }, [tools]);
  var orderActiveItems = useMemo(function () {
    if (!orderTools || !panelToolsState.activeItems) {
      return false;
    }
    return sortBy(panelToolsState.activeItems, function (tool) {
      var iDx = orderTools.indexOf(tool);
      return iDx === -1 ? Infinity : iDx;
    });
  }, [panelToolsState.activeItems]);
  var handleToolSelection = function handleToolSelection(item) {
    var isReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var newActiveItems = panelToolsState.activeItems.slice(0);
    if (!newActiveItems.includes(item.name) && !isReset) {
      newActiveItems.push(item.name);
    } else if (newActiveItems.includes(item.name)) {
      var iDx = newActiveItems.indexOf(item.name);
      newActiveItems.splice(iDx, 1);
    }
    var valueCloned = Object.assign({}, panelToolsState);
    valueCloned.activeItems = newActiveItems;
    valueCloned.showChildren = newActiveItems.length;
    if (localAllowTabs) {
      valueCloned.tabs = getTabs(newActiveItems);
    }
    if (isRadio) {
      var handleRadio = [];
      if (newActiveItems.includes(item.name)) {
        handleRadio.push(item.name);
      }
      valueCloned.activeItems = handleRadio;
    }
    setPanelToolsState(function () {
      return valueCloned;
    }, function () {
      if (isReset && item.onDeselect) {
        item.onDeselect();
      } else if (newActiveItems.includes(item.name)) {
        if (item.onSelect) {
          item.onSelect();
        }
      }
    });
  };
  useEffect(function () {
    var newActiveItems = [];
    map(tools, function (item) {
      if (item.hasValue) {
        newActiveItems.push(item.name);
      }
    });
    var valueCloned = Object.assign({}, panelToolsState);
    valueCloned.activeItems = newActiveItems;
    if (localAllowTabs) {
      valueCloned.tabs = getTabs(newActiveItems);
    }
    setPanelToolsState(valueCloned);
  }, []);
  if (null === panelToolsState.activeItems) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-pnl-tools'), 'at-m', className, variant ? AtrcPrefix('ctrl-pnl-tools') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', 'at-bdr', 'at-bg-cl', AtrcPrefix('ctrl-pnl-tools-header'))
  }, label && /*#__PURE__*/React.createElement(AtrcLabel, {
    className: classnames(AtrcPrefix('m-0'))
  }, label), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-pnl-tools-actions'))
  }, /*#__PURE__*/React.createElement(AtrcDropdown
  // width='160px'
  , {
    popoverProps: {
      rowref: rowref
    },
    focusOnMount: true,
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "dropdown",
        "aria-expanded": isOpen,
        onClick: onToggle
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: label + ' ' + __('options', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: 'wp',
        icon: panelToolsState.activeItems.length ? moreVertical : plus
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuGroup, null, tools === null || tools === void 0 ? void 0 : tools.flatMap(function (control, iDx) {
        var controlInfo = function controlInfo() {
          if (!panelToolsState.activeItems.includes(control.name)) {
            return control.info ? control.info : __('Show') + ' ' + control.title;
          }
          return __('Hide') + ' ' + control.title;
        };
        if (control.on !== false) {
          return /*#__PURE__*/React.createElement(AtrcWrap, {
            className: classnames(AtrcPrefix('menu-itm-wrp'), 'at-flx'),
            key: iDx + 'menu-itm-wrp'
          }, /*#__PURE__*/React.createElement(MenuItem, {
            key: label,
            isSelected: panelToolsState.activeItems.includes(control.name),
            onClick: function onClick(event) {
              event.stopPropagation();
              handleToolSelection(control, false);
            },
            id: "".concat(instanceId, "-").concat(control.name),
            role: "menuitemcheckbox",
            "aria-label": controlInfo,
            "aria-checked": panelToolsState.activeItems.includes(control.name)
          }, /*#__PURE__*/React.createElement(AtrcWrap, {
            className: classnames('at-flx', 'at-al-itm-ctr', AtrcPrefix('ctrl-pnl-tools-header-cont'))
          }, isRadio && control.hasValue ? /*#__PURE__*/React.createElement(AtrcTooltip, {
            className: classnames('at-m', AtrcPrefix('active-radio')),
            text: __('Active', 'atrc-prefix-atrc')
          }, /*#__PURE__*/React.createElement(AtrcIcon, {
            type: 'wp',
            icon: check
          })) : null, /*#__PURE__*/React.createElement(AtrcTooltip, {
            text: controlInfo()
          }, control.icon ? /*#__PURE__*/React.createElement(AtrcIcon, {
            type: control.iconType ? control.iconType : 'wp',
            icon: control.icon,
            size: control.iconSize || 16
          }) : null, /*#__PURE__*/React.createElement(AtrcLabel, null, control.title)))), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, {
            onClick: function onClick(event) {
              event.stopPropagation();
              handleToolSelection(control, true);
            },
            defaultValue: {},
            value: {}
          }));
        }
        return null;
      })), tools.length > 1 ? /*#__PURE__*/React.createElement(MenuGroup, null, /*#__PURE__*/React.createElement(MenuItem, {
        "aria-disabled": !panelToolsState.activeItems.length,
        variant: 'tertiary',
        onClick: function onClick() {
          if (panelToolsState.activeItems.length) {
            var valueCloned = Object.assign({}, panelToolsState);
            valueCloned.activeItems = [];
            valueCloned.tabs = [];
            valueCloned.showChildren = false;
            setPanelToolsState(function () {
              return valueCloned;
            }, function () {
              resetAll();
            });
            speak(__('All options reset'), 'assertive');
          }
        }
      }, /*#__PURE__*/React.createElement(AtrcSpan, {
        variant: "reset",
        className: classnames('at-flx', 'at-jfy-cont-btw')
      }, /*#__PURE__*/React.createElement(AtrcSpan, null, __('Reset all', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcIcon, {
        type: 'wp',
        icon: reset
      })))) : null);
    }
  }), panelToolsState.activeItems.length ? /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "dropdown",
    onClick: function onClick() {
      var valueCloned = Object.assign({}, panelToolsState);
      valueCloned.showChildren = !valueCloned.showChildren;
      setPanelToolsState(valueCloned);
    }
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: panelToolsState.showChildren ? __('Show options', 'atrc-prefix-atrc') : __('Hide options', 'atrc-prefix-atrc')
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: 'wp',
    icon: panelToolsState.showChildren ? chevronUp : chevronDown
  }))) : null)), panelToolsState.showChildren && orderActiveItems ? /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, tolsBodyProps, {
    className: classnames(AtrcPrefix('ctrl-pnl-tools-body'), tolsBodyProps.variant ? null : 'at-p at-bg-cl at-bdr', tolsBodyProps.className ? tolsBodyProps.className : null)
  }), help ? /*#__PURE__*/React.createElement(AtrcNotice, {
    isDismissible: false,
    autoDismiss: false
  }, help) : '', localAllowTabs ? /*#__PURE__*/React.createElement(AtrcTabPanel, {
    variant: "inner",
    tabs: panelToolsState.tabs
  }, function (tab) {
    return children([tab.name]);
  }) : children(orderActiveItems)) : null);
}
export default AtrcPanelTools;
//# sourceMappingURL=index.js.map