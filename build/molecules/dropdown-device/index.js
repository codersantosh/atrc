function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/** WordPress*/
import { useState, useEffect, useRef } from '@wordpress/element';
import { useInstanceId } from '@wordpress/compose';
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

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
export function AtrcDropdownDevice({
  label = '',
  className,
  children,
  tabs,
  initialTabName,
  onSelect,
  wrapProps = {}
}) {
  const [selectedTab, setSelectedTab] = useState();
  const rowref = useRef();
  const instanceId = useInstanceId(AtrcDropdownDevice, 'tab-panel');
  const handleTabSelection = tabName => {
    const nSelectedTab = find(tabs, {
      name: tabName
    });
    setSelectedTab(nSelectedTab);
    onSelect?.(tabName);
  };
  const selectedId = `${instanceId}-${selectedTab?.name ?? 'none'}`;
  useEffect(() => {
    if (!selectedTab?.name && tabs.length > 0) {
      handleTabSelection(initialTabName || tabs[0].name);
    }
  }, [tabs, selectedTab?.name, initialTabName]);
  if (!selectedTab) {
    return null;
  }
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, wrapProps, {
    className: classnames(AtrcPrefix('dropdown-device'), className, wrapProps.className ? wrapProps.className : '')
  }), label && /*#__PURE__*/React.createElement(AtrcLabel, {
    variant: "dropdown-device-lbl"
  }, label), /*#__PURE__*/React.createElement(AtrcDropdown, {
    popoverProps: {
      rowref
    },
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcButton, {
      variant: "devices",
      "aria-expanded": isOpen,
      onClick: onToggle
    }, /*#__PURE__*/React.createElement(AtrcTooltip, {
      text: selectedTab.info
    }, /*#__PURE__*/React.createElement(AtrcIcon, {
      type: selectedTab.iconType ? selectedTab.iconType : 'wp',
      icon: selectedTab.icon,
      size: selectedTab.iconSize || 16
    }))),
    renderContent: props => {
      return /*#__PURE__*/React.createElement(MenuGroup, {
        className: classnames(AtrcPrefix('dropdown-device-cont'))
      }, tabs?.flatMap(control => {
        if (control.on) {
          return /*#__PURE__*/React.createElement(MenuItem, {
            onClick: event => {
              event.stopPropagation();
              setSelectedTab(control);
              props.onClose();
            },
            id: `${instanceId}-${control.name}`
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
    id: `${selectedId}-view`
  }, children(selectedTab)));
}
export default AtrcDropdownDevice;
//# sourceMappingURL=index.js.map