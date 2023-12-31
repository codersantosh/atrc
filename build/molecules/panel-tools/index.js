function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/** WordPress*/
import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useMemo } from '@wordpress/element';
import { useInstanceId } from '@wordpress/compose';
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

/*Inbuilt Utils*/
import AtrcUseStateCallback from './../../utils/use-state-callback';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export function AtrcPanelTools(props) {
  const {
    label = '',
    help = '',
    children = '',
    tools = [],
    resetAll = () => {},
    variant = '',
    className = '',
    allowTabs = false,
    isRadio = false,
    tolsBodyProps = {}
  } = props;
  const localAllowTabs = useMemo(() => {
    if (!allowTabs) {
      return allowTabs;
    }
    if (tools.length < 2) {
      return false;
    }
    return allowTabs;
  }, [allowTabs, tools]);
  const [panelToolsState, setPanelToolsState] = AtrcUseStateCallback({
    activeItems: null,
    tabs: [],
    showChildren: false
  });
  const rowref = useRef();
  const instanceId = useInstanceId(AtrcPanelTools, AtrcPrefix('') + 'pnl-tools');
  const getTabs = newActiveItems => {
    const newTabs = [];
    forEach(tools, item => {
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
  const orderTools = useMemo(() => {
    if (!tools) {
      return false;
    }
    return map(tools, 'name');
  }, [tools]);
  const orderActiveItems = useMemo(() => {
    if (!orderTools || !panelToolsState.activeItems) {
      return false;
    }
    return sortBy(panelToolsState.activeItems, tool => {
      const iDx = orderTools.indexOf(tool);
      return iDx === -1 ? Infinity : iDx;
    });
  }, [panelToolsState.activeItems]);
  const handleToolSelection = (item, isReset = true) => {
    const newActiveItems = panelToolsState.activeItems.slice(0);
    if (!newActiveItems.includes(item.name) && !isReset) {
      newActiveItems.push(item.name);
    } else if (newActiveItems.includes(item.name)) {
      const iDx = newActiveItems.indexOf(item.name);
      newActiveItems.splice(iDx, 1);
    }
    const valueCloned = Object.assign({}, panelToolsState);
    valueCloned.activeItems = newActiveItems;
    valueCloned.showChildren = newActiveItems.length;
    if (localAllowTabs) {
      valueCloned.tabs = getTabs(newActiveItems);
    }
    if (isRadio) {
      const handleRadio = [];
      if (newActiveItems.includes(item.name)) {
        handleRadio.push(item.name);
      }
      valueCloned.activeItems = handleRadio;
    }
    setPanelToolsState(() => valueCloned, () => {
      if (isReset && item.onDeselect) {
        item.onDeselect();
      } else if (newActiveItems.includes(item.name)) {
        if (item.onSelect) {
          item.onSelect();
        }
      }
    });
  };
  useEffect(() => {
    const newActiveItems = [];
    map(tools, function (item) {
      if (item.hasValue) {
        newActiveItems.push(item.name);
      }
    });
    const valueCloned = Object.assign({}, panelToolsState);
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
      rowref
    },
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "dropdown",
      "aria-expanded": isOpen,
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: label + ' ' + __('options', 'atrc-prefix-atrc')
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: 'wp',
      icon: panelToolsState.activeItems.length ? moreVertical : plus
    }))),
    renderContent: () => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuGroup, null, tools?.flatMap((control, iDx) => {
        const controlInfo = () => {
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
            onClick: event => {
              event.stopPropagation();
              handleToolSelection(control, false);
            },
            id: `${instanceId}-${control.name}`,
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
            onClick: event => {
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
        onClick: () => {
          if (panelToolsState.activeItems.length) {
            const valueCloned = Object.assign({}, panelToolsState);
            valueCloned.activeItems = [];
            valueCloned.tabs = [];
            valueCloned.showChildren = false;
            setPanelToolsState(() => valueCloned, () => {
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
    onClick: () => {
      const valueCloned = Object.assign({}, panelToolsState);
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
  }, tab => children([tab.name])) : children(orderActiveItems)) : null);
}
export default AtrcPanelTools;
//# sourceMappingURL=index.js.map