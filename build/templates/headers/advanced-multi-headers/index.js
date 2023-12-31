function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import AtrcPrefix from '../../../prefix-vars';
import AtrcHeader from '../../../organisms/header';
import AtrcWrap from '../../../atoms/wrap';
import AtrcSelect from '../../../atoms/select';
import AtrcToggle from '../../../atoms/toggle';
import AtrcButton from '../../../atoms/button';
import AtrcIcon from '../../../atoms/icon';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcWord from '../../../atoms/word';
import AtrcLink from '../../../atoms/link';
import AtrcSpinner from '../../../atoms/spinner';
import AtrcHr from '../../../atoms/hr';
import AtrcCheckbox from '../../../atoms/checkbox';
import AtrcBase from './../../../molecules/base';
import AtrcButtonGroup from './../../../molecules/button-group';
import AtrcPagination from './../../../molecules/pagination';
import AtrcSearch from './../../../molecules/search';
import AtrcTooltip from './../../../molecules/tooltip';
import { BsList, BsFillGrid3X3GapFill, BsCaretDownFill, BsCaretUpFill, BsGripVertical } from 'react-icons/bs';
const MapElements = ({
  place,
  elements,
  atrcProps
}) => {
  let ml;
  return elements.map(function (element, iDx) {
    ml = '';
    if (iDx) {
      ml = 'ml-15';
    }
    if ('word' === element) {
      return /*#__PURE__*/React.createElement(AtrcWord, _extends({
        key: `me-${iDx}`,
        className: classnames(AtrcPrefix('m-0'), ml ? AtrcPrefix(ml) : '')
      }, atrcProps.word));
    }
    if ('button' === element) {
      return /*#__PURE__*/React.createElement(AtrcTooltip, _extends({
        key: `me-${iDx}`
      }, atrcProps.button.tooltipProps), atrcProps.button.isPending ? /*#__PURE__*/React.createElement(AtrcSpinner, {
        variant: "inline"
      }) : null, /*#__PURE__*/React.createElement(AtrcButton, atrcProps.button.buttonProps));
    }
    if ('title' === element) {
      return /*#__PURE__*/React.createElement(AtrcWord, _extends({
        key: `me-${iDx}`,
        className: classnames(AtrcPrefix('m-0'), 'at-m', ml ? AtrcPrefix(ml) : '')
      }, atrcProps.title));
    }
    if ('addNew' === element) {
      return /*#__PURE__*/React.createElement(AtrcLink, _extends({
        key: `me-${iDx}`,
        type: "router-link",
        variant: "primary",
        className: classnames('at-m')
      }, atrcProps.addNew));
    }
    if ('toggleFilter' === element) {
      return /*#__PURE__*/React.createElement(AtrcToggle, _extends({
        key: `me-${iDx}`,
        className: classnames(ml ? AtrcPrefix(ml) : '')
      }, atrcProps.toggleFilter));
    }
    if ('filterButtonGroupWithReset' === element || 'filterButtonGroup' === element) {
      const buttons = 'filterButtonGroupWithReset' === element ? atrcProps.filterButtonGroupWithReset.buttons : atrcProps.filterButtonGroup.buttons;
      return /*#__PURE__*/React.createElement(AtrcButtonGroup, {
        key: `me-${iDx}`,
        className: classnames(ml ? AtrcPrefix(ml) : '')
      }, buttons.map(function (buttonProps, btnIndex) {
        return /*#__PURE__*/React.createElement(AtrcButton, _extends({
          key: `btn-${btnIndex}`,
          className: classnames('at-p')
        }, buttonProps));
      }), 'filterButtonGroupWithReset' === element ? /*#__PURE__*/React.createElement(AtrcButton, {
        className: classnames('at-m', 'at-p'),
        variant: "reset",
        onClick: atrcProps.filterButtonGroupWithReset.onReset
      }, /*#__PURE__*/React.createElement(AtrcIcon, {
        className: classnames(AtrcPrefix('mr-10')),
        type: "bootstrap",
        icon: BsGripVertical
      }), atrcProps.filterButtonGroupWithReset.resetLabel) : null);
    }
    if ('filterSelectGroup' === element) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        key: `me-${iDx}`,
        className: classnames('at-flx', 'at-al-itm-ctr', ml ? AtrcPrefix(ml) : '')
      }, atrcProps.filterSelectGroup.selects.map(function (selectProps, slIndex) {
        return /*#__PURE__*/React.createElement(AtrcBase, {
          key: `sl-${slIndex}`,
          variant: "select-plain"
        }, /*#__PURE__*/React.createElement(AtrcSelect, _extends({
          allowReset: false
        }, selectProps)));
      }), /*#__PURE__*/React.createElement(AtrcButton, {
        variant: "primary",
        className: classnames(AtrcPrefix('ml-15')),
        onClick: atrcProps.filterSelectGroup.onApply
      }, atrcProps.filterSelectGroup.applyLabel));
    }
    if ('search' === element) {
      return /*#__PURE__*/React.createElement(AtrcSearch, _extends({
        key: `me-${iDx}`
      }, atrcProps.search, {
        testProps: {
          className: classnames(ml ? AtrcPrefix(ml) : 'test')
        },
        buttonProps: {
          variant: 'primary'
        }
      }));
    }
    if ('bulkCheck' === element) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        key: `me-${iDx}`,
        className: classnames('at-flx', 'at-al-itm-ctr', 'at-gap', AtrcPrefix('bulk-wrp'), ml ? AtrcPrefix(ml) : '')
      }, /*#__PURE__*/React.createElement(AtrcCheckbox, atrcProps.bulkCheck.checkProps), atrcProps.bulkCheck.checkedIds.length > 0 && atrcProps.bulkCheck.actions ? /*#__PURE__*/React.createElement(AtrcButtonGroup, {
        className: classnames(AtrcPrefix('m-0'))
      }, atrcProps.bulkCheck.actions.map(function (actionProps, btnIndex) {
        return /*#__PURE__*/React.createElement(AtrcTooltip, _extends({
          key: `btn-next-${btnIndex}`
        }, actionProps.tooltipProps), /*#__PURE__*/React.createElement(AtrcButton, _extends({
          variant: "icon",
          className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-ctr', 'at-bdr-rad', 'at-w', 'at-h')
        }, actionProps.buttonProps), /*#__PURE__*/React.createElement(AtrcIcon, _extends({
          className: classnames('at-w', 'at-h')
        }, actionProps.iconProps))));
      })) : null, atrcProps.bulkCheck.checkedIds.length < 1 && atrcProps.bulkCheck.toggleItems ? /*#__PURE__*/React.createElement(AtrcWrap, {
        className: classnames(
        // AtrcPrefix('ml-15'),
        'at-flx', 'at-al-itm-ctr', 'at-gap')
      }, /*#__PURE__*/React.createElement(MapElements, {
        place: place,
        elements: atrcProps.bulkCheck.toggleItems,
        atrcProps: atrcProps
      })) : null);
    }
    if ('order' === element) {
      return /*#__PURE__*/React.createElement(AtrcWrap, {
        key: `me-${iDx}`,
        className: classnames(ml ? AtrcPrefix(ml) : '', 'at-flx', 'at-al-itm-ctr', 'at-gap')
      }, /*#__PURE__*/React.createElement(AtrcBase, {
        variant: "select-plain",
        className: classnames(ml ? AtrcPrefix(ml) : '', 'at-flx', 'at-al-itm-ctr')
      }, /*#__PURE__*/React.createElement(AtrcSelect, _extends({
        allowReset: false
      }, atrcProps.order.selectProps))), /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: 'asc' === atrcProps.order.order ? __('Click for descending order', 'atrc-prefix-atrc') : __('Click for ascending order', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, _extends({
        variant: "icon",
        className: classnames('at-w', 'at-h')
      }, atrcProps.order.buttonProps), /*#__PURE__*/React.createElement(AtrcIcon, {
        type: "bootstrap",
        icon: 'asc' === atrcProps.order.order ? BsCaretDownFill : BsCaretUpFill
      }))));
    }
    if ('refresh' === element) {
      return /*#__PURE__*/React.createElement(AtrcTooltip, {
        key: `me-${iDx}`,
        text: 'asc' === atrcProps.order.order ? __('Click for descending order', 'atrc-prefix-atrc') : __('Click for ascending order', 'atrc-prefix-atrc')
      }, atrcProps.refresh.isPending ? /*#__PURE__*/React.createElement(AtrcSpinner, {
        variant: "inline"
      }) : /*#__PURE__*/React.createElement(AtrcResetButtonIcon, _extends({
        value: "1"
      }, atrcProps.refresh.buttonProps)));
    }
    if ('pagination' === element) {
      return /*#__PURE__*/React.createElement(AtrcPagination, _extends({
        key: `me-${iDx}`,
        className: classnames(ml ? AtrcPrefix(ml) : '')
      }, atrcProps.pagination));
    }
    if ('listGrid' === element) {
      return /*#__PURE__*/React.createElement(AtrcTooltip, {
        key: `me-${iDx}`,
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
const SingleHeader = props => {
  const {
    place = {},
    type = '',
    ...atrcProps
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p')
  }, place.left ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-st')
  }, /*#__PURE__*/React.createElement(MapElements, {
    place: "left",
    elements: place.left,
    atrcProps: atrcProps
  })) : null, place.right ? /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-end')
  }, /*#__PURE__*/React.createElement(MapElements, {
    place: "right",
    elements: place.right,
    atrcProps: atrcProps
  })) : null), 'bottom' !== type ? /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames(AtrcPrefix('m-0'))
  }) : null);
};
const MultiHeaders = props => {
  const {
    topHeader = null,
    midHeader = null,
    bottomHeader = null,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, topHeader ? /*#__PURE__*/React.createElement(SingleHeader, _extends({}, defaultProps, {
    place: topHeader,
    type: "top"
  })) : null, midHeader ? /*#__PURE__*/React.createElement(SingleHeader, _extends({}, defaultProps, {
    place: midHeader,
    type: "mid"
  })) : null, bottomHeader ? /*#__PURE__*/React.createElement(SingleHeader, _extends({}, defaultProps, {
    place: bottomHeader,
    type: "bottom"
  })) : null);
};
const AdvancedMultiHeaders = props => {
  const {
    allowHeader = true,
    ...defaultProps
  } = props;
  if (allowHeader) {
    return /*#__PURE__*/React.createElement(AtrcHeader, null, /*#__PURE__*/React.createElement(MultiHeaders, defaultProps));
  }
  return /*#__PURE__*/React.createElement(MultiHeaders, defaultProps);
};
export default AdvancedMultiHeaders;
//# sourceMappingURL=index.js.map