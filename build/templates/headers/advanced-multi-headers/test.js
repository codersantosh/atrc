import { __ } from '@wordpress/i18n';
import { BsCheck2, BsTrash, BsX } from 'react-icons/bs';
import { AtrcWireFrameAdvancedMultiHeaders } from '../../headers';
/*#__PURE__*/React.createElement(AtrcWireFrameAdvancedMultiHeaders, {
  headerElements: ['title', 'addNew', 'toggleFilter', 'filterButtonGroupWithReset', 'filterSelectGroup', 'filterButtonGroup', 'search', 'bulkCheck', 'sort', 'refresh', 'pagination'],
  topHeader: {
    left: ['title', 'addNew', 'toggleFilter'],
    right: ['filterButtonGroupWithReset']
  },
  midHeader: {
    left: ['filterSelectGroup'],
    right: ['filterButtonGroup', 'search']
  },
  bottomHeader: {
    left: ['bulkCheck'],
    right: ['pagination']
  },
  title: {
    children: __('Custom Fonts', 'atrc-prefix-atrc')
  },
  addNew: {
    to: 'create',
    children: __('Add new', 'atrc-prefix-atrc')
  },
  toggleFilter: {
    label: __('Advanced Filter', 'atrc-prefix-atrc'),
    checked: toggleFilter,
    onChange: function onChange() {
      return setToggleFilter(!toggleFilter);
    }
  },
  filterButtonGroupWithReset: {
    buttons: [{
      children: __('Button 1(0)', 'atrc-prefix-atrc'),
      onClick: function onClick() {
        return setToggleFilter(!toggleFilter);
      }
    }, {
      children: __('Button 2(300)', 'atrc-prefix-atrc'),
      onClick: function onClick() {
        return setToggleFilter(!toggleFilter);
      }
    }, {
      children: __('Button 3(50)', 'atrc-prefix-atrc'),
      onClick: function onClick() {
        return setToggleFilter(!toggleFilter);
      }
    }],
    onReset: function onReset() {
      return setToggleFilter(!toggleFilter);
    },
    resetLabel: __('Reset filters', 'atrc-prefix-atrc')
  },
  filterButtonGroup: {
    buttons: [{
      children: __('Button 1(0)', 'atrc-prefix-atrc'),
      onClick: function onClick() {
        return setToggleFilter(!toggleFilter);
      }
    }, {
      children: __('Button 2(300)', 'atrc-prefix-atrc'),
      onClick: function onClick() {
        return setToggleFilter(!toggleFilter);
      }
    }, {
      children: __('Button 3(50)', 'atrc-prefix-atrc'),
      onClick: function onClick() {
        return setToggleFilter(!toggleFilter);
      }
    }]
  },
  filterSelectGroup: {
    selects: [{
      value: '',
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
      onChange: function onChange() {
        return setToggleFilter(!toggleFilter);
      }
    }, {
      value: '',
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
      onChange: function onChange() {
        return setToggleFilter(!toggleFilter);
      }
    }, {
      value: '',
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
      onChange: function onChange() {
        return setToggleFilter(!toggleFilter);
      }
    }],
    onApply: function onApply() {
      return setToggleFilter(!toggleFilter);
    },
    applyLabel: __('Apply', 'atrc-prefix-atrc')
  },
  search: {
    doSearch: function doSearch() {
      return setToggleFilter(!toggleFilter);
    }
  },
  bulkCheck: {
    checkProps: {
      checked: toggleFilter,
      onChange: function onChange() {
        return setToggleFilter(!toggleFilter);
      }
    },
    actions: [{
      buttonProps: {
        onClick: function onClick() {
          return setToggleFilter(!toggleFilter);
        }
      },
      tooltipProps: {
        text: __('Delete permanently', 'atrc-prefix-atrc')
      },
      iconProps: {
        type: 'bootstrap',
        icon: BsTrash
      }
    }, {
      buttonProps: {
        onClick: function onClick() {
          return setToggleFilter(!toggleFilter);
        }
      },
      tooltipProps: {
        text: __('Mark as active', 'atrc-prefix-atrc')
      },
      iconProps: {
        type: 'bootstrap',
        icon: BsCheck2
      }
    }, {
      buttonProps: {
        onClick: function onClick() {
          return setToggleFilter(!toggleFilter);
        }
      },
      tooltipProps: {
        text: __('Mark as inactive', 'atrc-prefix-atrc')
      },
      iconProps: {
        type: 'bootstrap',
        icon: BsX
      }
    }],
    toggleItems: ['sort', 'refresh']
  },
  sort: {
    value: '',
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
    onChange: function onChange() {
      return setToggleFilter(!toggleFilter);
    }
  },
  refresh: {
    onClick: function onClick() {
      return setToggleFilter(!toggleFilter);
    }
  },
  pagination: {
    totalItems: 100,
    doPagination: function doPagination() {},
    currentPage: 10,
    totalPages: 10
  }
});
//# sourceMappingURL=test.js.map