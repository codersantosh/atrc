function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
const getIcon = value => {
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
const AtrcControlIconPicker = props => {
  const {
    children = '',
    custom,
    lib = {
      allowed: ['wp', 'fa'],
      selected: []
    },
    label = '',
    value = [],
    onChange = () => {},
    closeOnIconSelect = false,
    modalProps = {},
    ...defaultProps
  } = props;
  const {
    allowed = [],
    selected = []
  } = lib;
  const [iconType, setIconType] = useState('all');
  const [query, setQuery] = useState('');
  const foundIcons = useMemo(() => {
    if (!query) {
      return {
        wp: WpIconsAllF,
        fa: ReactIconsAllFA
      };
    }
    return {
      wp: reduce(WpIconsAllF, (accumulator, currentValue, currentKey) => {
        if (currentKey.toLowerCase().includes(query.toLowerCase())) {
          accumulator[currentKey] = currentValue;
        }
        return accumulator;
      }, {}),
      fa: reduce(ReactIconsAllFA, (accumulator, currentValue, currentKey) => {
        if (currentKey.toLowerCase().includes(query.toLowerCase())) {
          accumulator[currentKey] = currentValue;
        }
        return accumulator;
      }, {})
    };
  }, [query]);
  const allowedLib = useMemo(() => {
    return allowed;
  }, [allowed]);
  const selectedLibIcons = useMemo(() => {
    return selected;
  }, [allowed]);
  return /*#__PURE__*/React.createElement(AtrcModalToggle, _extends({
    renderToggle: args => {
      if (children) {
        return children(args);
      }
      const {
        isOpen,
        onToggle
      } = args;
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
    renderContent: ({
      onToggle
    }) => /*#__PURE__*/React.createElement(AtrcWireFrameSidebarContent, {
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
        onClick: () => setIconType('all')
      }, __('All icons', 'atrc-prefix-atrc'))), selectedLibIcons && selectedLibIcons.length ? /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: __('Available icons', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        isActive: 'selectedIcon' === iconType,
        onClick: () => setIconType('selectedIcon')
      }, __('Available icons', 'atrc-prefix-atrc'))) : /*#__PURE__*/React.createElement(React.Fragment, null, allowedLib.includes('wp') && /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: __('WordPress icons', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        isActive: 'wp' === iconType,
        onClick: () => setIconType('wp')
      }, __('WordPress', 'atrc-prefix-atrc'))), allowedLib.includes('fa') && /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: __('Font Awesome icons', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        isActive: 'fa' === iconType,
        onClick: () => setIconType('fa')
      }, __('Font Awesome', 'atrc-prefix-atrc')))), custom && isArray(custom) && custom.length ? /*#__PURE__*/React.createElement(AtrcTooltip, {
        text: __('Custom icons', 'atrc-prefix-atrc')
      }, /*#__PURE__*/React.createElement(AtrcButton, {
        isActive: 'custom' === iconType,
        onClick: () => setIconType('custom')
      }, __('Custom icons', 'atrc-prefix-atrc'))) : null),
      renderContent: /*#__PURE__*/React.createElement(AtrcWireFrameHeaderContentFooter, {
        renderHeader: /*#__PURE__*/React.createElement(AtrcSearch, {
          type: "keyDown",
          buttonProps: {
            variant: 'primary'
          },
          doSearch: input => setQuery(input)
        }),
        renderContent: /*#__PURE__*/React.createElement(AtrcWrap, {
          className: classnames(AtrcPrefix('modal-icon-picker-cont'))
        }, selectedLibIcons && selectedLibIcons.length ? /*#__PURE__*/React.createElement(React.Fragment, null, 'all' === iconType || 'selectedIcon' === iconType ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, {
          className: classnames('at-m', 'at-blk')
        }, __('Available icons', 'atrc-prefix-atrc')), map(selectedLibIcons, (icon, key) => {
          const gotIcon = getIcon(icon);
          if (typeof gotIcon === 'function') {
            return /*#__PURE__*/React.createElement(AtrcButton, {
              className: classnames(AtrcPrefix('icon-ri')),
              variant: "icon-picker",
              isActive: value.includes(icon),
              onClick: () => {
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
            onClick: () => {
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
        }, __('WordPress', 'atrc-prefix-atrc')), map(foundIcons.wp, (icon, key) => {
          if ('Icon' !== key) {
            return /*#__PURE__*/React.createElement(AtrcButton, {
              className: classnames('at-w', 'at-h', 'at-m', 'at-p', AtrcPrefix('icon-wp')),
              variant: "icon-picker",
              isActive: value.includes(key),
              onClick: () => {
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
        }, __('Font Awesome', 'atrc-prefix-atrc')), map(foundIcons.fa, (icon, key) => {
          if (typeof icon === 'function') {
            return /*#__PURE__*/React.createElement(AtrcButton, {
              className: classnames('at-w', 'at-h', 'at-m', 'at-p', AtrcPrefix('icon-ri')),
              variant: "icon-picker",
              isActive: value.includes(key),
              onClick: () => {
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
        }, __('Custom icons', 'atrc-prefix-atrc')), map(custom, (icon, key) => {
          return /*#__PURE__*/React.createElement(AtrcButton, {
            className: classnames('at-w', 'at-h', 'at-m', 'at-p', AtrcPrefix('icon-cstm')),
            variant: "icon-picker",
            isActive: value.includes(icon.value),
            onClick: () => {
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
    }),
    modalProps: modalProps
  }, defaultProps));
};
export default AtrcControlIconPicker;
//# sourceMappingURL=index.js.map