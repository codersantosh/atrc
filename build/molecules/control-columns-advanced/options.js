/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classnames from 'classnames';

/**
 * Columns options
 *
 * @type {Array}
 */

export var OneColumnOptions = function OneColumnOptions() {
  return [{
    label: __('One column', 'atrc-prefix-atrc'),
    value: 12,
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM4,4V64H64V4Z"
      }));
    }
  }];
};
export var TwoColumnsOptions = function TwoColumnsOptions() {
  return [{
    label: __('1-11', 'atrc-prefix-atrc'),
    value: '1-11',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5.4,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H5.4a2,2,0,0,1,2,2V64A2,2,0,0,1,5.4,66ZM4,4H4V64H5.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H12.4a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM12.4,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('2-10', 'atrc-prefix-atrc'),
    value: '2-10',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M11.9,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2h7.9a2,2,0,0,1,2,2V64A2,2,0,0,1,11.9,66ZM4,4H4V64h7.9V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H18.9a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM18.9,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('3-9', 'atrc-prefix-atrc'),
    value: '3-9',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17.1,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H17.1a2,2,0,0,1,2,2V64A2,2,0,0,1,17.1,66ZM4,4H4V64H17.1V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H24.1a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM24.1,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('4-8', 'atrc-prefix-atrc'),
    value: '4-8',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M20.8,64H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H20.8a3,3,0,0,1,3,3V61A3,3,0,0,1,20.8,64ZM3,2A1,1,0,0,0,2,3V61a1,1,0,0,0,1,1H20.8a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M61,64H29.8a3,3,0,0,1-3-3V3a3,3,0,0,1,3-3H61a3,3,0,0,1,3,3V61A3,3,0,0,1,61,64ZM29.8,2a1,1,0,0,0-1,1V61a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z"
      }));
    }
  }, {
    label: __('5-7', 'atrc-prefix-atrc'),
    value: '5-7',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M27.5,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H27.5a2,2,0,0,1,2,2V64A2,2,0,0,1,27.5,66ZM4,4H4V64H27.5V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H34.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM34.5,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('6-6', 'atrc-prefix-atrc'),
    value: '6-6',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H30.5a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM4,4H4V64H30.5V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM37.5,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('7-5', 'atrc-prefix-atrc'),
    value: '7-5',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M38.5,64V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H40.5A2,2,0,0,1,38.5,64Zm2-60V64H64V4H40.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2,64V4A2,2,0,0,1,4,2H33.5a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4A2,2,0,0,1,2,64ZM4,4V64H33.5V4H4Z"
      }));
    }
  }, {
    label: __('8-4', 'atrc-prefix-atrc'),
    value: '8-4',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M42.2,63V5a3,3,0,0,1,3-3H63a3,3,0,0,1,3,3V63a3,3,0,0,1-3,3H45.2A3,3,0,0,1,42.2,63Zm3-59a1,1,0,0,0-1,1V63a1,1,0,0,0,1,1H63a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2,63V5A3,3,0,0,1,5,2H36.2a3,3,0,0,1,3,3V63a3,3,0,0,1-3,3H5A3,3,0,0,1,2,63ZM5,4A1,1,0,0,0,4,5V63a1,1,0,0,0,1,1H36.2a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1Z"
      }));
    }
  }, {
    label: __('9-3', 'atrc-prefix-atrc'),
    value: '9-3',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M48.9,64V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H50.9A2,2,0,0,1,48.9,64Zm2-60V64H64V4H50.9Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2,64V4A2,2,0,0,1,4,2H43.9a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4A2,2,0,0,1,2,64ZM4,4V64H43.9V4H4Z"
      }));
    }
  }, {
    label: __('10-2', 'atrc-prefix-atrc'),
    value: '10-2',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M54.1,64V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H56.1A2,2,0,0,1,54.1,64Zm2-60V64H64V4H56.1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2,64V4A2,2,0,0,1,4,2H49.1a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4A2,2,0,0,1,2,64ZM4,4V64H49.1V4H4Z"
      }));
    }
  }, {
    label: __('11-1', 'atrc-prefix-atrc'),
    value: '11-1',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M60.6,64V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H62.6A2,2,0,0,1,60.6,64Zm2-60V64H64V4H62.6Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2,64V4A2,2,0,0,1,4,2H55.6a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H4A2,2,0,0,1,2,64ZM4,4V64H55.6V4H4Z"
      }));
    }
  }];
};
export var ThreeColumnsOptions = function ThreeColumnsOptions() {
  return [{
    label: __('1-10-1', 'atrc-prefix-atrc'),
    value: '1-10-1',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5.4,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H5.4a2,2,0,0,1,2,2V64A2,2,0,0,1,5.4,66ZM4,4H4V64H5.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H62.6a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM62.6,4h0V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M55.6,66H12.4a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H55.6a2,2,0,0,1,2,2V64A2,2,0,0,1,55.6,66ZM12.4,4h0V64H55.6V4Z"
      }));
    }
  }, {
    label: __('1-1-10', 'atrc-prefix-atrc'),
    value: '1-1-10',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5.4,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H5.4a2,2,0,0,1,2,2V64A2,2,0,0,1,5.4,66ZM4,4H4V64H5.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.8,66H12.4a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,13.8,66ZM12.4,4h0V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H20.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM20.8,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('2-2-8', 'atrc-prefix-atrc'),
    value: '2-2-8',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.2,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H8.2a2,2,0,0,1,2,2V64A2,2,0,0,1,8.2,66ZM4,4H4V64H8.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H15.2a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM15.2,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM26.3,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('2-8-2', 'atrc-prefix-atrc'),
    value: '2-8-2',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.2,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H8.2a2,2,0,0,1,2,2V64A2,2,0,0,1,8.2,66ZM4,4H4V64H8.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H59.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM59.8,4h0V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52.8,66H15.2a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H52.8a2,2,0,0,1,2,2V64A2,2,0,0,1,52.8,66ZM15.2,4h0V64H52.8V4Z"
      }));
    }
  }, {
    label: __('3-3-6', 'atrc-prefix-atrc'),
    value: '3-3-6',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM37.5,4h0V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H20.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM20.8,4h0V64h9.8V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.8,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,13.8,66ZM4,4H4V64h9.8V4Z"
      }));
    }
  }, {
    label: __('3-6-3', 'atrc-prefix-atrc'),
    value: '3-6-3',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M47.3,66H20.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H47.3a2,2,0,0,1,2,2V64A2,2,0,0,1,47.3,66ZM20.8,4V64H47.3V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H54.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM54.3,4V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.8,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,13.8,66ZM4,4H4V64h9.8V4Z"
      }));
    }
  }, {
    label: __('4-4-4', 'atrc-prefix-atrc'),
    value: '4-4-4',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H19.3a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM4,4H4V64H19.3V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H41.7a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM26.3,4h0V64H41.7V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM48.7,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('6-3-3', 'atrc-prefix-atrc'),
    value: '6-3-3',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H30.5a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM4,4V64H30.5V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M47.3,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,47.3,66ZM37.5,4V64h9.8V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H54.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM54.3,4V64H64V4Z"
      }));
    }
  }, {
    label: __('8-2-2', 'atrc-prefix-atrc'),
    value: '8-2-2',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H59.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM59.8,4V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52.8,66H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,52.8,66ZM48.7,4V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H41.7a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM4,4V64H41.7V4Z"
      }));
    }
  }, {
    label: __('10-1-1', 'atrc-prefix-atrc'),
    value: '10-1-1',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H62.6a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM62.6,4V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M55.6,66H54.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,55.6,66ZM54.3,4V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M47.3,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H47.3a2,2,0,0,1,2,2V64A2,2,0,0,1,47.3,66ZM4,4V64H47.3V4Z"
      }));
    }
  }];
};
export var FourColumnsOptions = function FourColumnsOptions() {
  return [{
    label: __('2-2-2-6', 'atrc-prefix-atrc'),
    value: '2-2-2-6',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.2,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H8.2a2,2,0,0,1,2,2V64A2,2,0,0,1,8.2,66ZM4,4H4V64H8.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H15.2a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM15.2,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM26.3,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM37.5,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('3-3-3-3', 'atrc-prefix-atrc'),
    value: '3-3-3-3',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M13.8,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,13.8,66ZM4,4H4V64h9.8V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H20.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM20.8,4h0V64h9.8V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M47.3,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h9.8a2,2,0,0,1,2,2V64A2,2,0,0,1,47.3,66ZM37.5,4h0V64h9.8V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H54.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM54.3,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('6-2-2-2', 'atrc-prefix-atrc'),
    value: '6-2-2-2',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H59.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM59.8,4V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52.8,66H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,52.8,66ZM48.7,4V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM37.5,4V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H30.5a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM4,4V64H30.5V4Z"
      }));
    }
  }];
};
export var FiveColumnsOptions = function FiveColumnsOptions() {
  return [{
    label: __('1-1-1-1-8', 'atrc-prefix-atrc'),
    value: '1-1-1-1-8',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5.4,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H5.4a2,2,0,0,1,2,2V64A2,2,0,0,1,5.4,66ZM4,4H4V64H5.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.8,66H12.4a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,13.8,66ZM12.4,4h0V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M22.1,66H20.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,22.1,66ZM20.8,4h0V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H29.1a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM29.1,4h0V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM37.5,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('2-2-2-2-4', 'atrc-prefix-atrc'),
    value: '2-2-2-2-4',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.2,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H8.2a2,2,0,0,1,2,2V64A2,2,0,0,1,8.2,66ZM4,4H4V64H8.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H15.2a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM15.2,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM26.3,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM37.5,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM48.7,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('Equal 5', 'atrc-prefix-atrc'),
    value: '2m3-2m3-2m3-2m3-2m3',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M10.4,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2h6.4a2,2,0,0,1,2,2V64A2,2,0,0,1,10.4,66ZM4,4H4V64h6.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M23.8,66H17.4a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h6.4a2,2,0,0,1,2,2V64A2,2,0,0,1,23.8,66ZM17.4,4h0V64h6.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M37.2,66H30.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h6.4a2,2,0,0,1,2,2V64A2,2,0,0,1,37.2,66ZM30.8,4h0V64h6.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M50.6,66H44.2a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h6.4a2,2,0,0,1,2,2V64A2,2,0,0,1,50.6,66ZM44.2,4h0V64h6.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H57.6a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM57.6,4h0V64H64V4Z"
      }));
    }
  }, {
    label: __('4-2-2-2-2', 'atrc-prefix-atrc'),
    value: '4-2-2-2-2',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H59.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM59.8,4V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52.8,66H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,52.8,66ZM48.7,4V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM37.5,4V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM26.3,4V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H19.3a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM4,4V64H19.3V4Z"
      }));
    }
  }, {
    label: __('8-1-1-1-1', 'atrc-prefix-atrc'),
    value: '8-1-1-1-1',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M64,66H62.6a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM62.6,4V64H64V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M55.6,66H54.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,55.6,66ZM54.3,4V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M47.3,66H45.9a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,47.3,66ZM45.9,4V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M38.9,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h1.4a2,2,0,0,1,2,2V64A2,2,0,0,1,38.9,66ZM37.5,4V64h1.4V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H30.5a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM4,4V64H30.5V4Z"
      }));
    }
  }];
};
export var SixColumnsOptions = function SixColumnsOptions() {
  return [{
    label: __('Equal 6', 'atrc-prefix-atrc'),
    value: '2-2-2-2-2-2',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.2,66H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H8.2a2,2,0,0,1,2,2V64A2,2,0,0,1,8.2,66ZM4,4H4V64H8.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.3,66H15.2a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,19.3,66ZM15.2,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M30.5,66H26.3a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,30.5,66ZM26.3,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M41.7,66H37.5a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,41.7,66ZM37.5,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52.8,66H48.7a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h4.2a2,2,0,0,1,2,2V64A2,2,0,0,1,52.8,66ZM48.7,4h0V64h4.2V4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,66H59.8a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2V64A2,2,0,0,1,64,66ZM59.8,4h0V64H64V4Z"
      }));
    }
  }];
};
export var CustomColumnOption = function CustomColumnOption() {
  return {
    label: __('Custom width', 'atrc-prefix-atrc'),
    value: 'cust',
    icon: function icon() {
      return /*#__PURE__*/React.createElement("svg", {
        className: classnames('at-svg', 'at-w', 'at-h'),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M28,31H4a3,3,0,0,1-3-3V4A3,3,0,0,1,4,1H28a3,3,0,0,1,3,3V28A3,3,0,0,1,28,31ZM4,3A1,1,0,0,0,3,4V28a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M64,31H40a3,3,0,0,1-3-3V4a3,3,0,0,1,3-3H64a3,3,0,0,1,3,3V28A3,3,0,0,1,64,31ZM40,3a1,1,0,0,0-1,1V28a1,1,0,0,0,1,1H64a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M28,66.9H4a3,3,0,0,1-3-3v-24a3,3,0,0,1,3-3H28a3,3,0,0,1,3,3v24A3,3,0,0,1,28,66.9ZM4,38.9a1,1,0,0,0-1,1v24a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1v-24a1,1,0,0,0-1-1Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52,66.9a15,15,0,1,1,15-15A15,15,0,0,1,52,66.9Zm0-28a13,13,0,1,0,13,13A13,13,0,0,0,52,38.9Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M52,57.3a1,1,0,0,1-1-1v-9a1,1,0,0,1,2,0v9A1,1,0,0,1,52,57.3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M56.5,52.8h-9a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"
      }));
    }
  };
};
function getColumnData(colNum) {
  var width = 100 / colNum;
  var sliderVal = Array(colNum).fill(width);
  var customWidth = sliderVal.join('-');
  return {
    sliderVal: sliderVal,
    customWidth: customWidth
  };
}
export var CustomColumnsExistingValue = function CustomColumnsExistingValue(_ref) {
  var value = _ref.value,
    colNum = _ref.colNum;
  var splitedValue = value.split('-');
  var splitedValueTotal = splitedValue.reduce(function (total, num) {
    return total + parseInt(num);
  }, 0);
  var MAX_VALUE = 12; // Maximum value for comparison

  if (splitedValueTotal === MAX_VALUE) {
    var customWidth = splitedValue.map(function (num) {
      var percentage = parseInt(num) / MAX_VALUE * 100;
      return percentage.toFixed(10);
    }).join('-');
    var _percentages = [];
    splitedValue.slice(1).forEach(function (num, idx) {
      var percentage;
      if (idx > 0) {
        percentage = parseInt(num) / MAX_VALUE * 100;
        percentage = percentage + parseFloat(_percentages[idx - 1]);
      } else {
        percentage = parseInt(num) / MAX_VALUE * 100;
      }
      _percentages.push(parseInt(percentage));
    });
    return {
      selectBtn: value,
      sliderVal: _percentages,
      customWidth: customWidth
    };
  } else if (12 * colNum === splitedValueTotal || 6 * colNum === splitedValueTotal || 3 * colNum === splitedValueTotal || 4 * colNum === splitedValueTotal) {
    var defaultData = getColumnData(colNum);
    return {
      selectBtn: value,
      sliderVal: defaultData.sliderVal,
      customWidth: defaultData.customWidth
    };
  }
  var sliderVal = splitedValue.map(function (num) {
    return parseFloat(num).toFixed(10);
  });
  var percentages = [];
  sliderVal.forEach(function (num, idx) {
    var percentage;
    if (idx > 0) {
      percentage = parseFloat(num) + parseFloat(percentages[idx - 1]);
    } else {
      percentage = parseFloat(num);
    }
    percentages.push(percentage);
  });
  percentages.pop();
  return {
    selectBtn: 'cust',
    sliderVal: percentages,
    customWidth: value
  };
};
export var NewValWithCustom = function NewValWithCustom(_ref2) {
  var newVal = _ref2.newVal,
    NewExistingValue = _ref2.NewExistingValue;
  if (Array.isArray(newVal)) {
    var width = newVal.map(function (num, i) {
      if (i > 0) {
        return num - newVal[i - 1];
      }
      return num;
    }).concat(100 - newVal[newVal.length - 1]).join('-');
    return width;
  }
  if ('cust' === newVal) {
    return NewExistingValue.customWidth;
  }
  return newVal;
};
//# sourceMappingURL=options.js.map