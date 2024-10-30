var _excluded = ["place", "type"],
  _excluded2 = ["top", "mid", "bottom"],
  _excluded3 = ["className", "variant", "allowWrap", "wrapProps"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';
import { BsList, BsFillGrid3X3GapFill } from 'react-icons/bs';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/*  Organisms*/

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcButton from '../../../../atoms/button';
import AtrcIcon from '../../../../atoms/icon';
import AtrcResetButtonIcon from '../../../../atoms/reset-button-icon';
import AtrcText from '../../../../atoms/text';
import AtrcSpinner from '../../../../atoms/spinner';
import AtrcHr from '../../../../atoms/hr';

/* Controls */
import AtrcControlCheckbox from '../../../../controls/control-checkbox';
import AtrcControlToggle from '../../../../controls/control-toggle';
import AtrcControlSelect from '../../../../controls/control-select';

/* Molecules */
import AtrcButtonGroup from '../../../../molecules/button-group';
import AtrcSearch from '../../../../molecules/search';
import AtrcTooltip from '../../../../molecules/tooltip';
import AtrcPagination from '../../../../molecules/pagination';

/* Local */
var _MapElements = function MapElements(_ref) {
  var place = _ref.place,
    elements = _ref.elements,
    atrcProps = _ref.atrcProps;
  return elements.map(function (element, iDx) {
    iDx = iDx + place;
    if ('word' === element) {
      return /*#__PURE__*/React.createElement(AtrcText, _extends({
        key: "me-".concat(iDx)
      }, atrcProps.word));
    }
    if ('button' === element) {
      return /*#__PURE__*/React.createElement(AtrcButton, atrcProps.button);
    }
    if ('title' === element) {
      return /*#__PURE__*/React.createElement(AtrcText, _extends({
        key: "me-".concat(iDx),
        tag: "h2",
        className: classnames(AtrcPrefix('m-0'), 'at-m')
      }, atrcProps.title));
    }
    if ('addNew' === element) {
      return /*#__PURE__*/React.createElement(AtrcButton, _extends({
        key: "me-".concat(iDx),
        isLink: true,
        variant: "primary",
        type: "router-link"
      }, atrcProps.addNew));
    }
    if ('toggleFilter' === element) {
      return /*#__PURE__*/React.createElement(AtrcControlToggle, _extends({
        key: "me-".concat(iDx)
      }, atrcProps.toggleFilter));
    }
    if ('filterButtonGroup' === element || 'filterButtonGroup1' === element) {
      var buttons = atrcProps[element].buttons;
      return /*#__PURE__*/React.createElement(AtrcButtonGroup, _extends({
        key: "me-".concat(iDx)
      }, buttons.buttonGroupProps ? buttons.buttonGroupProps : null), buttons.map(function (buttonProps, btnIndex) {
        return /*#__PURE__*/React.createElement(AtrcButton, _extends({
          key: "btn-".concat(btnIndex),
          variant: "light"
        }, buttonProps));
      }));
    }
    if ('filterSelectGroup' === element) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        key: "me-".concat(iDx),
        className: classnames('at-flx', 'at-al-itm-strh', 'at-gap')
      }, atrcProps.filterSelectGroup.selects.map(function (selectProps, slIndex) {
        return /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
          key: "sl-".concat(slIndex),
          allowReset: false
        }, selectProps));
      }), /*#__PURE__*/React.createElement(AtrcButton, _extends({
        variant: "secondary"
      }, atrcProps.filterSelectGroup.button)));
    }
    if ('search' === element) {
      return /*#__PURE__*/React.createElement(AtrcSearch, _extends({
        key: "me-".concat(iDx),
        buttonProps: {
          variant: 'secondary'
        }
      }, atrcProps.search));
    }
    if ('bulkCheck' === element) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        key: "me-".concat(iDx),
        className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap')
      }, /*#__PURE__*/React.createElement(AtrcControlCheckbox, atrcProps.bulkCheck.checkProps), atrcProps.bulkCheck.showBulkActions ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
        className: classnames(AtrcPrefix('bulk-wrp'), 'at-trs')
      }, atrcProps.bulkCheck.actions.map(function (actionProps, btnIndex) {
        return /*#__PURE__*/React.createElement(AtrcButton, _extends({
          key: "btn-next-".concat(btnIndex),
          variant: ""
        }, actionProps.buttonProps), /*#__PURE__*/React.createElement(AtrcTooltip, actionProps.tooltipProps, /*#__PURE__*/React.createElement(AtrcIcon, actionProps.iconProps)));
      })) : /*#__PURE__*/React.createElement(AtrcWrap, {
        className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap'),
        key: "me-nexta-".concat(iDx)
      }, /*#__PURE__*/React.createElement(_MapElements, {
        place: place,
        elements: atrcProps.bulkCheck.toggleItems,
        atrcProps: atrcProps
      })));
    }
    if ('order' === element || 'sort' === element) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        key: "me-".concat(iDx),
        className: classnames('at-flx', 'at-al-itm-strh', 'at-sort')
      }, /*#__PURE__*/React.createElement(AtrcControlSelect, _extends({
        allowReset: false
      }, atrcProps[element].selectProps)), /*#__PURE__*/React.createElement(AtrcButton, _extends({
        variant: "icon",
        className: classnames('at-w', 'at-h')
      }, atrcProps[element].buttonProps), /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: 'asc' === atrcProps[element].order ? __('Click for descending order', 'atrc-prefix-atrc') : __('Click for ascending order', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        className: classnames('at-flx'),
        type: "svg",
        svg: 'asc' === atrcProps[element].order ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>'
      }))));
    }
    if ('refresh' === element) {
      return /*#__PURE__*/React.createElement(AtrcTooltip, {
        key: "me-".concat(iDx),
        text: __('Refresh', 'atrc-prefix-atrc')
      }, atrcProps.refresh.isPending ? /*#__PURE__*/React.createElement(AtrcSpinner, {
        variant: "inline"
      }) : /*#__PURE__*/React.createElement(AtrcResetButtonIcon, _extends({
        value: "1"
      }, atrcProps.refresh.buttonProps)));
    }
    if ('pagination' === element) {
      return /*#__PURE__*/React.createElement(AtrcPagination, _extends({
        key: "me-".concat(iDx)
      }, atrcProps.pagination));
    }
    if ('listGrid' === element) {
      return /*#__PURE__*/React.createElement(AtrcTooltip, {
        key: "me-".concat(iDx),
        text: atrcProps.listGrid.isList ? __('List layout', 'atrc-prefix-atrc') : __('Grid layout', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, _extends({
        className: classnames(AtrcPrefix('m-0'))
      }, atrcProps.listGrid.buttonProps), /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "ri",
        icon: atrcProps.listGrid.isList ? BsList : BsFillGrid3X3GapFill
      })));
    }
    if (atrcProps[element]) {
      return atrcProps[element];
    }
    return null;
  });
};
var SingleRow = function SingleRow(props) {
  var _props$place = props.place,
    place = _props$place === void 0 ? {} : _props$place,
    _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type,
    atrcProps = _objectWithoutProperties(props, _excluded);
  var hasGrow = !place.left || !place.right ? 'at-flx-grw-1' : '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', AtrcPrefix('ls-fl-row'), 'at-min-h')
  }, place.left ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-st', 'at-gap', hasGrow),
    key: "left"
  }, /*#__PURE__*/React.createElement(_MapElements, {
    place: "left",
    elements: place.left,
    atrcProps: atrcProps
  })) : null, place.right ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-end', 'at-gap', hasGrow),
    key: "right"
  }, /*#__PURE__*/React.createElement(_MapElements, {
    place: "right",
    elements: place.right,
    atrcProps: atrcProps
  })) : null), false !== place.hr ? /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames(AtrcPrefix('m-0'))
  }) : null);
};
var MultiRows = function MultiRows(props) {
  var _props$top = props.top,
    top = _props$top === void 0 ? null : _props$top,
    _props$mid = props.mid,
    mid = _props$mid === void 0 ? null : _props$mid,
    _props$bottom = props.bottom,
    bottom = _props$bottom === void 0 ? null : _props$bottom,
    defaultProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/React.createElement(React.Fragment, null, top ? /*#__PURE__*/React.createElement(SingleRow, _extends({}, defaultProps, {
    place: top,
    type: "top"
  })) : null, mid ? /*#__PURE__*/React.createElement(SingleRow, _extends({}, defaultProps, {
    place: mid,
    type: "mid"
  })) : null, bottom ? /*#__PURE__*/React.createElement(SingleRow, _extends({}, defaultProps, {
    place: bottom,
    type: "bottom"
  })) : null);
};
var AtrcListFilterTemplate1 = function AtrcListFilterTemplate1(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$allowWrap = props.allowWrap,
    allowWrap = _props$allowWrap === void 0 ? true : _props$allowWrap,
    _props$wrapProps = props.wrapProps,
    wrapProps = _props$wrapProps === void 0 ? {} : _props$wrapProps,
    defaultProps = _objectWithoutProperties(props, _excluded3);
  if (allowWrap) {
    return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
      className: classnames(AtrcPrefix('ls-fl-tpl-1'), className, variant ? AtrcPrefix('ls-fl-tpl-1') + '-' + variant : '')
    }, wrapProps), /*#__PURE__*/React.createElement(MultiRows, defaultProps));
  }
  return /*#__PURE__*/React.createElement(MultiRows, defaultProps);
};
export default AtrcListFilterTemplate1;
//# sourceMappingURL=index.js.map