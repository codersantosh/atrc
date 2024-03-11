var _excluded = ["className", "variant", "label", "right"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { arrowDown } from '@wordpress/icons';
import { BsChatLeftDots, BsPerson, BsSliders, BsThreeDots, BsTrash, BsXLg } from 'react-icons/bs';

/*Atoms*/
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcIcon from '../../../atoms/icon';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcSpan from '../../../atoms/span';
import AtrcText from '../../../atoms/text';
import AtrcImg from '../../../atoms/img';
import AtrcHr from '../../../atoms/hr';

/* Organisms */
import AtrcHeader from '../../../organisms/header';
import AtrcMain from '../../../organisms/main';
import AtrcSidebar from '../../../organisms/sidebar';

/*  Molecules */
import AtrcButtonGroup from '../../../molecules/button-group';
import AtrcPagination from '../../../molecules/pagination';
import AtrcSearch from '../../../molecules/search';
import AtrcTooltip from '../../../molecules/tooltip';
import AtrcNav from '../../../molecules/nav';
import AtrcDropdown from '../../../molecules/dropdown';
import AtrcMenuGroup from '../../../molecules/menu-group';
import AtrcMenuItemsChoice from '../../../molecules/menu-items-choice';
import AtrcTable from '../../../molecules/table';
import AtrcTh from '../../../molecules/table/th';
import AtrcThead from '../../../molecules/table/thead';
import AtrcTr from '../../../molecules/table/tr';
import AtrcTbody from '../../../molecules/table/tbody';
import AtrcTd from '../../../molecules/table/thead';

/* Controls */
import AtrcControlSelect from '../../../controls/control-select';
import AtrcControlToggle from '../../../controls/control-toggle';
import AtrcControlCheckbox from '../../../controls/control-checkbox';

/*Prefix*/
import AtrcPrefix from '../../../prefix-vars';

/*Local*/
var AtrcPageListTemplate1 = function AtrcPageListTemplate1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(AtrcMain, _extends({
    className: classnames(AtrcPrefix('ls'), AtrcPrefix('mt-40'), className, variant ? AtrcPrefix('list') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    tag: "section",
    className: classnames(AtrcPrefix('m-0'), 'at-row')
  }, /*#__PURE__*/React.createElement(AtrcSidebar, {
    className: "at-col-1"
  }, /*#__PURE__*/React.createElement(AtrcNav, {
    variant: "vrt",
    navs: [{
      to: 'menu1',
      children: __('Menu 1', 'atrc-prefix-atrc')
    }, {
      to: 'menu2',
      children: __('Menu 2', 'atrc-prefix-atrc')
    }]
  })), /*#__PURE__*/React.createElement(AtrcWrap, {
    tag: "section",
    className: "at-col-11"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('bg-white'), 'at-bg-cl')
  }, /*#__PURE__*/React.createElement(AtrcHeader, {
    className: classnames(AtrcPrefix('single-header'), className, variant ? AtrcPrefix('single-header') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-p', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    className: classnames(AtrcPrefix('m-0'))
  }, "List"), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "primary",
    onClick: function onClick() {},
    className: classnames(AtrcPrefix('ml-15'))
  }, "Add New"), /*#__PURE__*/React.createElement(AtrcControlToggle, {
    label: __('Advanced Filter', 'atrc-prefix-atrc'),
    className: classnames(AtrcPrefix('ml-15'), AtrcPrefix('mb-0'))
  })), /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "Awating mod reply(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "Awating client reply(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "New(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "Closed(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p'),
    variant: "active"
  }, "All(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p'),
    variant: "reset"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-10')),
    type: "bootstrap",
    icon: BsSliders
  }), "Reset Filter"))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames(AtrcPrefix('m-0'))
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-p', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcControlSelect, {
    value: "",
    options: [{
      label: 'Big',
      value: '100%'
    }, {
      label: 'Medium',
      value: '50%'
    }, {
      label: 'Small',
      value: '25%'
    }],
    onChange: function onChange() {},
    allowReset: false
  }), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "primary",
    onClick: function onClick() {},
    className: classnames(AtrcPrefix('ml-15'))
  }, "Apply")), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(AtrcButtonGroup, null, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "active",
    className: classnames(AtrcPrefix('ml-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10'),
    // AtrcPrefix('pl-10')
    'at-p')
  }, "All(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(AtrcPrefix('ml-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10'),
    // AtrcPrefix('pl-10')
    'at-p')
  }, "Unsolved(0)"), /*#__PURE__*/React.createElement(AtrcButton, {
    className: classnames(AtrcPrefix('ml-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10'),
    // AtrcPrefix('pl-10')
    'at-p')
  }, "Solved(0)")), /*#__PURE__*/React.createElement(AtrcSearch, {
    buttonProps: {
      variant: 'primary'
    }
  }))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames(AtrcPrefix('m-0'))
  }), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-p', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcControlCheckbox, null), /*#__PURE__*/React.createElement(AtrcButtonGroup, {
    className: classnames(AtrcPrefix('mr-10'))
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsTrash
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsPerson
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsChatLeftDots
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsXLg
  })))), /*#__PURE__*/React.createElement(AtrcControlSelect, {
    value: "",
    options: [{
      label: 'Big',
      value: '100%'
    }, {
      label: 'Medium',
      value: '50%'
    }, {
      label: 'Small',
      value: '25%'
    }],
    onChange: function onChange() {},
    allowReset: false
  }), /*#__PURE__*/React.createElement(AtrcResetButtonIcon, null)), /*#__PURE__*/React.createElement(AtrcPagination, {
    totalItems: 100,
    doPagination: function doPagination() {},
    currentPage: 10,
    totalPages: 10
  }))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ls-body'), className, variant ? AtrcPrefix('ls-body') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('pt-15'))
  }, /*#__PURE__*/React.createElement(AtrcTable, null, /*#__PURE__*/React.createElement(AtrcThead, {
    className: classnames(AtrcPrefix('bg-primary-light'))
  }, /*#__PURE__*/React.createElement(AtrcTr, null, /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Author"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Details"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Mod"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Visibility"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Priority"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Status"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Date"), /*#__PURE__*/React.createElement(AtrcTh, {
    className: classnames('at-p')
  }, "Actions"))), /*#__PURE__*/React.createElement(AtrcTbody, null, /*#__PURE__*/React.createElement(AtrcTr, null, /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcControlCheckbox, null)), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    className: classnames(AtrcPrefix('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(AtrcText, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p"
  }, "Contrary to popular belief")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    className: classnames(AtrcPrefix('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(AtrcText, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5')),
    type: "bootstrap",
    icon: BsPerson
  }), "Visibility")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge'), AtrcPrefix('priority-normal')),
    text: "This is tooltip"
  }, "Normal")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge'), AtrcPrefix('mr-5')),
    text: "This is tooltip"
  }, "Pending"), /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge'), AtrcPrefix('priority-normal')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5')),
    type: "bootstrap",
    icon: BsPerson
  }), "Unsolved")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "Date"
  }, "Date Goes here")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsTrash
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsPerson
  }))), /*#__PURE__*/React.createElement(AtrcDropdown, {
    renderContentStyle: {
      width: '200px'
    },
    popoverProps: {
      placement: 'bottom left'
    },
    focusOnMount: true,
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(AtrcButton, {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "icon",
        className: classnames(AtrcPrefix('m-5'))
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: "This is tooltip"
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsThreeDots
      })));
    },
    renderContent: function renderContent(_ref2) {
      var onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcMenuGroup, {
        label: __('Change Status', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcMenuItemsChoice, {
        choices: [{
          value: 'pending',
          label: __('Pending', 'atrc-prefix-atrc'),
          info: __('Awaiting for approval.', 'atrc-prefix-atrc')
        }, {
          value: 'awaiting',
          label: __('Awaiting', 'atrc-prefix-atrc'),
          info: __('Awaiting first reply.', 'atrc-prefix-atrc')
        }, {
          value: 'closed',
          label: __('Closed', 'atrc-prefix-atrc'),
          info: __('Closed to new reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitingc',
          label: __('Awaiting client reply', 'atrc-prefix-atrc'),
          info: __('Awaiting client reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitinga',
          label: __('Awaiting mod reply', 'atrc-prefix-atrc'),
          info: __('Awaiting mod reply.', 'atrc-prefix-atrc')
        }, {
          value: 'flag',
          label: __('Flag', 'atrc-prefix-atrc'),
          info: __('Mark as flagged', 'atrc-prefix-atrc')
        }, {
          value: 'trash',
          label: __('Trash', 'atrc-prefix-atrc'),
          info: __('Move to the trash', 'atrc-prefix-atrc')
        }],
        icon: arrowDown,
        value: "",
        onSelect: function onSelect(newStatus) {}
      })));
    }
  }))), /*#__PURE__*/React.createElement(AtrcTr, {
    isEven: true
  }, /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcControlCheckbox, null)), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    className: classnames(AtrcPrefix('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(AtrcText, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcText, {
    tag: "p"
  }, "Contrary to popular belief")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcSpan, {
    className: classnames('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(AtrcImg, {
    className: classnames(AtrcPrefix('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(AtrcText, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-10')),
    type: "bootstrap",
    icon: BsPerson
  }), "Visibility")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge'), AtrcPrefix('priority-high')),
    text: "This is tooltip"
  }, "High")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge'), AtrcPrefix('mr-5')),
    text: "This is tooltip"
  }, "Pending"), /*#__PURE__*/React.createElement(AtrcTooltip, {
    className: classnames(AtrcPrefix('badge'), AtrcPrefix('priority-normal')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    className: classnames(AtrcPrefix('mr-5')),
    type: "bootstrap",
    icon: BsPerson
  }), "Unsolved")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "Date"
  }, "Date Goes here")), /*#__PURE__*/React.createElement(AtrcTd, {
    className: classnames('at-p')
  }, /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsTrash
  }))), /*#__PURE__*/React.createElement(AtrcButton, {
    variant: "icon",
    className: classnames(AtrcPrefix('m-5'))
  }, /*#__PURE__*/React.createElement(AtrcTooltip, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(AtrcIcon, {
    type: "bootstrap",
    icon: BsPerson
  }))), /*#__PURE__*/React.createElement(AtrcDropdown, {
    renderContentStyle: {
      width: '200px'
    },
    popoverProps: {
      placement: 'bottom left'
    },
    focusOnMount: true,
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(AtrcButton, {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "icon",
        className: classnames(AtrcPrefix('m-5'))
      }, /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: "This is tooltip"
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: BsThreeDots
      })));
    },
    renderContent: function renderContent(_ref4) {
      var onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcMenuGroup, {
        label: __('Change Status', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcMenuItemsChoice, {
        choices: [{
          value: 'pending',
          label: __('Pending', 'atrc-prefix-atrc'),
          info: __('Awaiting for approval.', 'atrc-prefix-atrc')
        }, {
          value: 'awaiting',
          label: __('Awaiting', 'atrc-prefix-atrc'),
          info: __('Awaiting first reply.', 'atrc-prefix-atrc')
        }, {
          value: 'closed',
          label: __('Closed', 'atrc-prefix-atrc'),
          info: __('Closed to new reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitingc',
          label: __('Awaiting client reply', 'atrc-prefix-atrc'),
          info: __('Awaiting client reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitinga',
          label: __('Awaiting mod reply', 'atrc-prefix-atrc'),
          info: __('Awaiting mod reply.', 'atrc-prefix-atrc')
        }, {
          value: 'flag',
          label: __('Flag', 'atrc-prefix-atrc'),
          info: __('Mark as flagged', 'atrc-prefix-atrc')
        }, {
          value: 'trash',
          label: __('Trash', 'atrc-prefix-atrc'),
          info: __('Move to the trash', 'atrc-prefix-atrc')
        }],
        icon: arrowDown,
        value: "",
        onSelect: function onSelect(newStatus) {}
      })));
    }
  }))))), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-p', 'at-flx', 'at-jfy-cont-end')
  }, /*#__PURE__*/React.createElement(AtrcPagination, {
    totalItems: 100,
    doPagination: function doPagination() {},
    currentPage: 10,
    totalPages: 10,
    isFooter: true
  }))))))));
};
export default AtrcPageListTemplate1;
//# sourceMappingURL=index.js.map