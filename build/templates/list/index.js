"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _i18n = require("@wordpress/i18n");
var _bs = require("react-icons/bs");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _select = _interopRequireDefault(require("../../atoms/select"));
var _toggle = _interopRequireDefault(require("../../atoms/toggle"));
var _button = _interopRequireDefault(require("../../atoms/button"));
var _icon = _interopRequireDefault(require("../../atoms/icon"));
var _resetButtonIcon = _interopRequireDefault(require("../../atoms/reset-button-icon"));
var _span = _interopRequireDefault(require("../../atoms/span"));
var _word = _interopRequireDefault(require("../../atoms/word"));
var _img = _interopRequireDefault(require("../../atoms/img"));
var _hr = _interopRequireDefault(require("../../atoms/hr"));
var _th = _interopRequireDefault(require("../../atoms/th"));
var _checkbox = _interopRequireDefault(require("../../atoms/checkbox"));
var _thead = _interopRequireDefault(require("../../atoms/thead"));
var _tr = _interopRequireDefault(require("../../atoms/tr"));
var _tbody = _interopRequireDefault(require("../../atoms/tbody"));
var _header = _interopRequireDefault(require("../../organisms/header"));
var _main = _interopRequireDefault(require("../../organisms/main"));
var _sidebar = _interopRequireDefault(require("../../organisms/sidebar"));
var _buttonGroup = _interopRequireDefault(require("./../../molecules/button-group"));
var _base = _interopRequireDefault(require("./../../molecules/base"));
var _pagination = _interopRequireDefault(require("./../../molecules/pagination"));
var _search = _interopRequireDefault(require("./../../molecules/search"));
var _tooltip = _interopRequireDefault(require("./../../molecules/tooltip"));
var _nav = _interopRequireDefault(require("./../../molecules/nav"));
var _table = _interopRequireDefault(require("./../../molecules/table"));
var _dropdown = _interopRequireDefault(require("./../../molecules/dropdown"));
var _menuGroup = _interopRequireDefault(require("./../../molecules/menu-group"));
var _menuItemsChoice = _interopRequireDefault(require("./../../molecules/menu-items-choice"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _icons = require("@wordpress/icons");
var _excluded = ["className", "variant", "label", "right"];
/*Library*/
/*Inbuilt*/
/*Prefix*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local*/
var AtrcList = function AtrcList(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    label = props.label,
    _props$right = props.right,
    right = _props$right === void 0 ? null : _props$right,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(_main.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ls'), (0, _prefixVars.default)('mt-40'), className, variant ? (0, _prefixVars.default)('list') + '-' + variant : '')
  }, defaultProps), /*#__PURE__*/React.createElement(_wrap.default, {
    tag: "section",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'), 'at-row')
  }, /*#__PURE__*/React.createElement(_sidebar.default, {
    className: "at-col-1"
  }, /*#__PURE__*/React.createElement(_nav.default, {
    variant: "vrt",
    navs: [{
      to: 'menu1',
      children: (0, _i18n.__)('Menu 1', 'atrc-prefix-atrc')
    }, {
      to: 'menu2',
      children: (0, _i18n.__)('Menu 2', 'atrc-prefix-atrc')
    }]
  })), /*#__PURE__*/React.createElement(_wrap.default, {
    tag: "section",
    className: "at-col-11"
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('bg-white'), 'at-bg-cl')
  }, /*#__PURE__*/React.createElement(_header.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('single-header'), className, variant ? (0, _prefixVars.default)('single-header') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-p', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_word.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }, "List"), /*#__PURE__*/React.createElement(_button.default, {
    variant: "primary",
    onClick: function onClick() {},
    className: (0, _classnames.default)((0, _prefixVars.default)('ml-15'))
  }, "Add New"), /*#__PURE__*/React.createElement(_toggle.default, {
    label: (0, _i18n.__)('Advanced Filter', 'atrc-prefix-atrc'),
    className: (0, _classnames.default)((0, _prefixVars.default)('ml-15'), (0, _prefixVars.default)('mb-0'))
  })), /*#__PURE__*/React.createElement(_buttonGroup.default, null, /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "Awating mod reply(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "Awating client reply(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "New(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p')
  }, "Closed(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p'),
    variant: "active"
  }, "All(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)(
    // AtrcPrefix('pl-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10')
    'at-p'),
    variant: "reset"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
    type: "bootstrap",
    icon: _bs.BsSliders
  }), "Reset Filter"))), /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-p', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_base.default, {
    variant: "select-plain"
  }, /*#__PURE__*/React.createElement(_select.default, {
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
  })), /*#__PURE__*/React.createElement(_button.default, {
    variant: "primary",
    onClick: function onClick() {},
    className: (0, _classnames.default)((0, _prefixVars.default)('ml-15'))
  }, "Apply")), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(_buttonGroup.default, null, /*#__PURE__*/React.createElement(_button.default, {
    variant: "active",
    className: (0, _classnames.default)((0, _prefixVars.default)('ml-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10'),
    // AtrcPrefix('pl-10')
    'at-p')
  }, "All(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ml-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10'),
    // AtrcPrefix('pl-10')
    'at-p')
  }, "Unsolved(0)"), /*#__PURE__*/React.createElement(_button.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ml-15'),
    // AtrcPrefix('pr-15'),
    // AtrcPrefix('pt-10'),
    // AtrcPrefix('pb-10'),
    // AtrcPrefix('pl-10')
    'at-p')
  }, "Solved(0)")), /*#__PURE__*/React.createElement(_search.default, {
    buttonProps: {
      variant: 'primary'
    }
  }))), /*#__PURE__*/React.createElement(_hr.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('m-0'))
  }), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-p', 'at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_checkbox.default, null), /*#__PURE__*/React.createElement(_buttonGroup.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10'))
  }, /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsTrash
  }))), /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsPerson
  }))), /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsChatLeftDots
  }))), /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsXLg
  })))), /*#__PURE__*/React.createElement(_base.default, {
    variant: "select-plain"
  }, /*#__PURE__*/React.createElement(_select.default, {
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
  })), /*#__PURE__*/React.createElement(_resetButtonIcon.default, null)), /*#__PURE__*/React.createElement(_pagination.default, {
    totalItems: 100,
    doPagination: function doPagination() {},
    currentPage: 10,
    totalPages: 10
  }))), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('ls-body'), className, variant ? (0, _prefixVars.default)('ls-body') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('pt-15'))
  }, /*#__PURE__*/React.createElement(_table.default, null, /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('bg-primary-light'))
  }, /*#__PURE__*/React.createElement(_tr.default, null, /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Author"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Details"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Mod"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Visibility"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Priority"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Status"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Date"), /*#__PURE__*/React.createElement(_th.default, {
    className: (0, _classnames.default)('at-p')
  }, "Actions"))), /*#__PURE__*/React.createElement(_tbody.default, null, /*#__PURE__*/React.createElement(_tr.default, null, /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_checkbox.default, null)), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_span.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_img.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "p"
  }, "Contrary to popular belief")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_span.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_img.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-5')),
    type: "bootstrap",
    icon: _bs.BsPerson
  }), "Visibility")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge'), (0, _prefixVars.default)('priority-normal')),
    text: "This is tooltip"
  }, "Normal")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge'), (0, _prefixVars.default)('mr-5')),
    text: "This is tooltip"
  }, "Pending"), /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge'), (0, _prefixVars.default)('priority-normal')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-5')),
    type: "bootstrap",
    icon: _bs.BsPerson
  }), "Unsolved")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "Date"
  }, "Date Goes here")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsTrash
  }))), /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsPerson
  }))), /*#__PURE__*/React.createElement(_dropdown.default, {
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
      return /*#__PURE__*/React.createElement(_button.default, {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "icon",
        className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
      }, /*#__PURE__*/React.createElement(_tooltip.default, {
        text: "This is tooltip"
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsThreeDots
      })));
    },
    renderContent: function renderContent(_ref2) {
      var onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wrap.default, null, /*#__PURE__*/React.createElement(_menuGroup.default, {
        label: (0, _i18n.__)('Change Status', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_menuItemsChoice.default, {
        choices: [{
          value: 'pending',
          label: (0, _i18n.__)('Pending', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting for approval.', 'atrc-prefix-atrc')
        }, {
          value: 'awaiting',
          label: (0, _i18n.__)('Awaiting', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting first reply.', 'atrc-prefix-atrc')
        }, {
          value: 'closed',
          label: (0, _i18n.__)('Closed', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Closed to new reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitingc',
          label: (0, _i18n.__)('Awaiting client reply', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting client reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitinga',
          label: (0, _i18n.__)('Awaiting mod reply', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting mod reply.', 'atrc-prefix-atrc')
        }, {
          value: 'flag',
          label: (0, _i18n.__)('Flag', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Mark as flagged', 'atrc-prefix-atrc')
        }, {
          value: 'trash',
          label: (0, _i18n.__)('Trash', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Move to the trash', 'atrc-prefix-atrc')
        }],
        icon: _icons.arrowDown,
        value: "",
        onSelect: function onSelect(newStatus) {}
      })));
    }
  }))), /*#__PURE__*/React.createElement(_tr.default, {
    isEven: true
  }, /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_checkbox.default, null)), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_span.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_img.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_word.default, {
    tag: "p"
  }, "Contrary to popular belief")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_span.default, {
    className: (0, _classnames.default)('at-flx', 'at-al-itm-ctr')
  }, /*#__PURE__*/React.createElement(_img.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
    src: "http://1.gravatar.com/avatar/1a75e688bee2588b856ccc94b887597f?s=32&d=mm&r=g"
  }), /*#__PURE__*/React.createElement(_word.default, {
    tag: "span"
  }, "Author Name"))), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-10')),
    type: "bootstrap",
    icon: _bs.BsPerson
  }), "Visibility")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge'), (0, _prefixVars.default)('priority-high')),
    text: "This is tooltip"
  }, "High")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge'), (0, _prefixVars.default)('mr-5')),
    text: "This is tooltip"
  }, "Pending"), /*#__PURE__*/React.createElement(_tooltip.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('badge'), (0, _prefixVars.default)('priority-normal')),
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    className: (0, _classnames.default)((0, _prefixVars.default)('mr-5')),
    type: "bootstrap",
    icon: _bs.BsPerson
  }), "Unsolved")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "Date"
  }, "Date Goes here")), /*#__PURE__*/React.createElement(_thead.default, {
    className: (0, _classnames.default)('at-p')
  }, /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsTrash
  }))), /*#__PURE__*/React.createElement(_button.default, {
    variant: "icon",
    className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
  }, /*#__PURE__*/React.createElement(_tooltip.default, {
    text: "This is tooltip"
  }, /*#__PURE__*/React.createElement(_icon.default, {
    type: "bootstrap",
    icon: _bs.BsPerson
  }))), /*#__PURE__*/React.createElement(_dropdown.default, {
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
      return /*#__PURE__*/React.createElement(_button.default, {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "icon",
        className: (0, _classnames.default)((0, _prefixVars.default)('m-5'))
      }, /*#__PURE__*/React.createElement(_tooltip.default, {
        text: "This is tooltip"
      }, /*#__PURE__*/React.createElement(_icon.default, {
        type: "bootstrap",
        icon: _bs.BsThreeDots
      })));
    },
    renderContent: function renderContent(_ref4) {
      var onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(_wrap.default, null, /*#__PURE__*/React.createElement(_menuGroup.default, {
        label: (0, _i18n.__)('Change Status', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(_menuItemsChoice.default, {
        choices: [{
          value: 'pending',
          label: (0, _i18n.__)('Pending', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting for approval.', 'atrc-prefix-atrc')
        }, {
          value: 'awaiting',
          label: (0, _i18n.__)('Awaiting', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting first reply.', 'atrc-prefix-atrc')
        }, {
          value: 'closed',
          label: (0, _i18n.__)('Closed', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Closed to new reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitingc',
          label: (0, _i18n.__)('Awaiting client reply', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting client reply.', 'atrc-prefix-atrc')
        }, {
          value: 'awaitinga',
          label: (0, _i18n.__)('Awaiting mod reply', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Awaiting mod reply.', 'atrc-prefix-atrc')
        }, {
          value: 'flag',
          label: (0, _i18n.__)('Flag', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Mark as flagged', 'atrc-prefix-atrc')
        }, {
          value: 'trash',
          label: (0, _i18n.__)('Trash', 'atrc-prefix-atrc'),
          info: (0, _i18n.__)('Move to the trash', 'atrc-prefix-atrc')
        }],
        icon: _icons.arrowDown,
        value: "",
        onSelect: function onSelect(newStatus) {}
      })));
    }
  }))))), /*#__PURE__*/React.createElement(_wrap.default, {
    className: (0, _classnames.default)('at-p', 'at-flx', 'at-jfy-cont-end')
  }, /*#__PURE__*/React.createElement(_pagination.default, {
    totalItems: 100,
    doPagination: function doPagination() {},
    currentPage: 10,
    totalPages: 10,
    isFooter: true
  }))))))));
};
var _default = exports.default = AtrcList;
//# sourceMappingURL=index.js.map